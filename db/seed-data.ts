import { Product, Template } from "@/types";

const date = new Date();

export const productData: Product[] = [
  {
    id: "pdt_oZ7JX98ewv5yJ87ILhEo0",
    // TODO: add name and description
    template: Template.STARTER,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  },
  {
    id: "pdt_K3bWcsDFPJEmsR3gIAHAS",
    // TODO: add name and description
    template: Template.PRO,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  },
];
