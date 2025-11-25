export enum Template {
  STARTER = "STARTER",
  PRO = "PRO",
}

export type Product = {
  id: string;
  name?: string;
  template: Template;
  description?: string;
  createdAt: string;
  updatedAt: string;
};
