"use server";

import { prisma } from "@/db";
import { PaymentData, PaymentStatus } from "@/types";
import { redirect } from "next/navigation";
import z from "zod";
import { list } from "@vercel/blob";

const paymentSchema = z.object({
  paymentId: z.string().min(1, {
    message: "Payment Id is required",
  }),
});

export const checkPaymentStatus = async (paymentData: PaymentData) => {
  const payment = paymentSchema.safeParse(paymentData);

  if (!payment.success) {
    return {
      // allError: payment.error,
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
      error: `Invalid Payment id`,
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

export const getRepoLink = async (template: string) => {
  const response = await list({
    token: process.env.BUILDFAST_PROD_READ_WRITE_TOKEN,
    prefix: `templates/${template}`,
  });

  console.log("response is", JSON.stringify(response));
  const link = response.blobs[0].url;

  return link;
};
