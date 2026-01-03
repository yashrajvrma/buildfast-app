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
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          githubId: true,
        },
      },
      paymentId: true,
      product: {
        select: {
          id: true,
          name: true,
          template: true,
        },
      },
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

  // check if github id is there and return all the user details along with payment

  return {
    data: isPaymentValid,
  };
};
