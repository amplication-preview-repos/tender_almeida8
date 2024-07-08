import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  supplierName?: SortOrder;
  contactInfo?: SortOrder;
  address?: SortOrder;
};
