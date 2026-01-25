import { NextResponse } from "next/server";
import { sendPaymentSuccessEmail } from "../webhook/dodopayments/route";

export async function GET() {
  try {
    await sendPaymentSuccessEmail({
      email: "yashrajverma0805@gmail.com",
      name: "Yashraj",
      productName: "BuildFast Boilerplate",
      template: "PRO",
      amount: 4999, // in smallest unit (e.g. paise or cents)
      currency: "INR",
      paymentId: "pay_test_123456",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Payment success email sent",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    );
  }
}
