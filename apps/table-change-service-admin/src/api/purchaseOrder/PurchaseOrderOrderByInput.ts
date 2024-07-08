import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  orderNumber?: SortOrder;
  orderAmount?: SortOrder;
  orderDate?: SortOrder;
  supplierId?: SortOrder;
};
