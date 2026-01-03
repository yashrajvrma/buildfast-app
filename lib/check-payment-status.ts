"use server";

import { prisma } from "@/db";
import { PaymentData, PaymentStatus } from "@/types";
import { redirect } from "next/navigation";
import z from "zod";

const paymentSchema = z.object({
  paymentId: z.string().min(1, {
    message: "Payment Id is required",
  }),
});

export const checkPaymentStatus = async (paymentData: PaymentData) => {
  const payment = paymentSchema.safeParse(paymentData);

  if (!payment.success) {
    return {
      allError: payment.error,
      error: payment.error.flatten().fieldErrors,
    };
  }

  const { paymentId } = payment.data;

  // check if paymentId and status is valid
  const isPaymentValid = await prisma.payment.findUnique({
    where: {
      paymentId: paymentId,
    },
    select: {
      id: true,
      paymentId: true,
      productId: true,
      amount: true,
      currency: true,
      status: true,
    },
  });

  if (!isPaymentValid) {
    return {
      error: `Payment id is invalid`,
    };
  }

  if (isPaymentValid.status != PaymentStatus.SUCCESS) {
    redirect("/checkout/failed");
  }
  
};
