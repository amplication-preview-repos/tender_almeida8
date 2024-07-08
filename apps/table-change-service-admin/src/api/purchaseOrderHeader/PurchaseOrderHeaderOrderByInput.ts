import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderHeaderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  createdDate?: SortOrder;
  headerNumber?: SortOrder;
  status?: SortOrder;
};
