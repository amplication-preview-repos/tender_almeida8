import { PurchaseOrderUpdateManyWithoutSuppliersInput } from "./PurchaseOrderUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  supplierName?: string | null;
  contactInfo?: string | null;
  address?: string | null;
  purchaseOrders?: PurchaseOrderUpdateManyWithoutSuppliersInput;
};
