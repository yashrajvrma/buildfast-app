export enum Template {
  STARTER = "STARTER",
  PRO = "PRO",
}

export enum PaymentStatus {
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  CANCELLED = "CANCELLED",
}

export type Product = {
  id: string;
  name?: string;
  template: Template;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export interface PaymentData {
  paymentId: string;
}
