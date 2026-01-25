import { Product, Template } from "@/types";

const date = new Date();

export const productData: Product[] = [
  {
    id: "pdt_0NX3ShtIX25F6GSAnbZD9",
    name: "Builfast-Starter",
    description: "The NextJS boilerplate that all you need to reach 1K+ MRR",
    template: Template.STARTER,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  },
  {
    id: "pdt_0NX3TI3quAxJMrUTfRwxr",
    name: "Builfast-Pro",
    description: "The NextJS boilerplate that all you need to reach 1K+ MRR",
    template: Template.PRO,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  },
];
