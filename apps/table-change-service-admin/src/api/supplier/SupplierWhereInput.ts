import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PurchaseOrderListRelationFilter } from "../purchaseOrder/PurchaseOrderListRelationFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  supplierName?: StringNullableFilter;
  contactInfo?: StringNullableFilter;
  address?: StringNullableFilter;
  purchaseOrders?: PurchaseOrderListRelationFilter;
};
