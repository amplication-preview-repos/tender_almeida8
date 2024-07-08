import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PurchaseOrderCreateInput = {
  orderNumber?: string | null;
  orderAmount?: number | null;
  orderDate?: Date | null;
  supplier?: SupplierWhereUniqueInput | null;
};
