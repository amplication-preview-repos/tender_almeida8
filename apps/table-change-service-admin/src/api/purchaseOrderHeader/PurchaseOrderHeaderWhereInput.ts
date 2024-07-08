import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PurchaseOrderHeaderWhereInput = {
  id?: StringFilter;
  createdDate?: DateTimeNullableFilter;
  headerNumber?: StringNullableFilter;
  status?: StringNullableFilter;
};
