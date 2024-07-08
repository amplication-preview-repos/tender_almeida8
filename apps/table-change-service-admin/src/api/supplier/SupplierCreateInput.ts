import { PurchaseOrderCreateNestedManyWithoutSuppliersInput } from "./PurchaseOrderCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  supplierName?: string | null;
  contactInfo?: string | null;
  address?: string | null;
  purchaseOrders?: PurchaseOrderCreateNestedManyWithoutSuppliersInput;
};
