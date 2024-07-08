import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PurchaseOrderWhereInput = {
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  orderAmount?: FloatNullableFilter;
  orderDate?: DateTimeNullableFilter;
  supplier?: SupplierWhereUniqueInput;
};
