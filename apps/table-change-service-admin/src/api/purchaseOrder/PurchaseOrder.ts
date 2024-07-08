import { Supplier } from "../supplier/Supplier";

export type PurchaseOrder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderNumber: string | null;
  orderAmount: number | null;
  orderDate: Date | null;
  supplier?: Supplier | null;
};
