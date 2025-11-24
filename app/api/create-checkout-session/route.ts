import { NextRequest, NextResponse } from "next/server";
import DodoPayments from "dodopayments";

const dodoPayments = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
  environment:
    process.env.NODE_ENV === "development" ? "test_mode" : "live_mode",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId } = body;

    if (!productId) {
      return NextResponse.json(
        {
          error: "Product id is required",
        },
        {
          status: 400,
        }
      );
    }

    const checkout = await dodoPayments.checkoutSessions.create({
      product_cart: [
        {
          product_id: productId,
          quantity: 1,
        },
      ],
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
    });

    console.log(checkout.session_id);

    return NextResponse.json({
      sessionId: checkout.session_id,
      checkoutUrl: checkout.checkout_url,
    });
  } catch (error) {
    console.error("Some error occurred", error);
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
