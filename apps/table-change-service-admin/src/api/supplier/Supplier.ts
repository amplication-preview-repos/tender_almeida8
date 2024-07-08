import { PurchaseOrder } from "../purchaseOrder/PurchaseOrder";

export type Supplier = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  supplierName: string | null;
  contactInfo: string | null;
  address: string | null;
  purchaseOrders?: Array<PurchaseOrder>;
};
