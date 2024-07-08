import { PurchaseOrderHeaderWhereInput } from "./PurchaseOrderHeaderWhereInput";
import { PurchaseOrderHeaderOrderByInput } from "./PurchaseOrderHeaderOrderByInput";

export type PurchaseOrderHeaderFindManyArgs = {
  where?: PurchaseOrderHeaderWhereInput;
  orderBy?: Array<PurchaseOrderHeaderOrderByInput>;
  skip?: number;
  take?: number;
};
