import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "standardwebhooks";
import { Resend } from "resend";

const webhookSecret = process.env.DODO_PAYMENTS_WEBHOOK_SECRET;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Get webhook headers
    const webhookId = req.headers.get("webhook-id");
    const webhookSignature = req.headers.get("webhook-signature");
    const webhookTimestamp = req.headers.get("webhook-timestamp");

    if (!webhookId || !webhookSignature || !webhookTimestamp) {
      return NextResponse.json(
        { error: "Missing webhook headers" },
        { status: 400 }
      );
    }

    // Get raw body
    const body = await req.text();

    // Check if the secret is present
    if (!webhookSecret) {
      return NextResponse.json(
        { error: "Missing webhook secret" },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const webhook = new Webhook(webhookSecret);

    try {
      await webhook.verify(body, {
        "webhook-id": webhookId,
        "webhook-signature": webhookSignature,
        "webhook-timestamp": webhookTimestamp,
      });
    } catch (err) {
      console.error("Webhook verification failed:", err);
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 400 }
      );
    }

    // Parse the verified payload
    const payload = JSON.parse(body);
    console.log("WEBHOOK RECEIVED:", payload.type);

    // Handle different webhook events
    switch (payload.type) {
      case "payment.succeeded":
        console.log("Payment succeeded:", payload.data.payment_id);
        await handlePaymentSucceeded(payload.data);
        break;

      case "payment.failed":
        console.log("Payment failed:", payload.data.payment_id);
        await handlePaymentFailed(payload.data);
        break;

      case "payment.cancelled":
        console.log("Payment cancelled:", payload.data.payment_id);
        await handlePaymentCancelled(payload.data);
        break;

      default:
        console.log("Unhandled webhook event:", payload.type);
    }

    // Return success response
    return NextResponse.json(
      { received: true, type: payload.type },
      { status: 200 }
    );
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

type Product = {
  product_id: string;
  quantity: number;
};

type Customer = {
  customer_id: string;
  email: string;
  name: string;
  phone_number: string;
};

type PaymentData = {
  payment_id: string;
  customer: Customer;
  currency: string;
  total_amount: number;
  product_cart: Product[];
  status: string;
};

async function handlePaymentSucceeded(data: PaymentData) {
  try {
    // 1. Create or get customer
    const user = await createOrGetCustomer(data.customer);

    if (!user) {
      console.error("Failed to create or get user");
      return;
    }

    // 2. Validate product
    const productId = data.product_cart?.[0]?.product_id;
    if (!productId) {
      console.error("No product in cart");
      return;
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { id: true, name: true },
    });

    if (!product) {
      console.error("Product not found:", productId);
      return;
    }

    // 3. Update payment record
    await prisma.payment.upsert({
      where: {
        paymentId: data.payment_id,
      },
      update: {
        status: "SUCCESS",
        amount: data.total_amount,
        currency: data.currency,
      },
      create: {
        userId: user.id,
        paymentId: data.payment_id,
        productId: product.id,
        amount: data.total_amount,
        currency: data.currency,
        status: "SUCCESS",
      },
    });

    // 4. Send success email
    await sendPaymentSuccessEmail({
      email: user.email,
      name: user.name,
      productName: product.name || "Product",
      amount: data.total_amount,
      currency: data.currency,
      paymentId: data.payment_id,
    });

    console.log("Payment succeeded processed successfully:", data.payment_id);
  } catch (error) {
    console.error("Error handling payment succeeded:", error);
    throw error;
  }
}

async function handlePaymentFailed(data: PaymentData) {
  try {
    // 1. Create or get customer
    const user = await createOrGetCustomer(data.customer);

    if (!user) {
      console.error("Failed to create or get user");
      return;
    }

    // 2. Validate product
    const productId = data.product_cart?.[0]?.product_id;
    if (!productId) {
      console.error("No product in cart");
      return;
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { id: true },
    });

    if (!product) {
      console.error("Product not found:", productId);
      return;
    }

    // 3. Update payment record
    await prisma.payment.upsert({
      where: {
        paymentId: data.payment_id,
      },
      update: {
        status: "FAILED",
        amount: data.total_amount,
        currency: data.currency,
      },
      create: {
        userId: user.id,
        paymentId: data.payment_id,
        productId: product.id,
        amount: data.total_amount,
        currency: data.currency,
        status: "FAILED",
      },
    });

    console.log("Payment failed processed:", data.payment_id);
  } catch (error) {
    console.error("Error handling payment failed:", error);
    throw error;
  }
}

async function handlePaymentCancelled(data: PaymentData) {
  try {
    // 1. Create or get customer
    const user = await createOrGetCustomer(data.customer);

    if (!user) {
      console.error("Failed to create or get user");
      return;
    }

    // 2. Validate product
    const productId = data.product_cart?.[0]?.product_id;
    if (!productId) {
      console.error("No product in cart");
      return;
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { id: true },
    });

    if (!product) {
      console.error("Product not found:", productId);
      return;
    }

    // 3. Update payment record
    await prisma.payment.upsert({
      where: {
        paymentId: data.payment_id,
      },
      update: {
        status: "CANCELLED",
        amount: data.total_amount,
        currency: data.currency,
      },
      create: {
        userId: user.id,
        paymentId: data.payment_id,
        productId: product.id,
        amount: data.total_amount,
        currency: data.currency,
        status: "CANCELLED",
      },
    });

    console.log("Payment cancelled processed:", data.payment_id);
  } catch (error) {
    console.error("Error handling payment cancelled:", error);
    throw error;
  }
}

async function createOrGetCustomer(customer: Customer) {
  try {
    // Check if user exists
    let user = await prisma.user.findUnique({
      where: {
        email: customer.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
      },
    });

    // Create new user if doesn't exist
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: customer.name,
          email: customer.email,
          phoneNumber: customer.phone_number,
        },
        select: {
          id: true,
          name: true,
          email: true,
          phoneNumber: true,
        },
      });
      console.log("New user created:", user.email);
    }

    return user;
  } catch (error) {
    console.error("Error creating or getting customer:", error);
    throw error;
  }
}

async function sendPaymentSuccessEmail(data: {
  email: string;
  name: string;
  productName: string;
  amount: number;
  currency: string;
  paymentId: string;
}) {
  try {
    // TODO: Implement your email sending logic here

    await resend.emails.send({
      from: "Buildfast <support@buildfast.shop>",
      to: [`${data.email}`],
      subject: "Payment Successful - Order Confirmation",
      html: `
        <h1>Thank you for your purchase, ${data.name}!</h1>
        <p>Your payment has been processed successfully.</p>
        <h2>Order Details:</h2>
        <ul>
          <li><strong>Product:</strong> ${data.productName}</li>
          <li><strong>Amount:</strong> ${data.currency} ${(
        data.amount / 100
      ).toFixed(2)}</li>
          <li><strong>Payment ID:</strong> ${data.paymentId}</li>
        </ul>
        <p>If you have any questions, please contact our support team.</p>
      `,
    });

    console.log("Success email sent to:", data.email);
  } catch (error) {
    console.error("Error sending success email:", error);
    // Don't throw - we don't want email failures to fail the webhook
  }
}
