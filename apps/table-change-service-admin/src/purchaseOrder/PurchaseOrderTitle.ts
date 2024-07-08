import { PurchaseOrder as TPurchaseOrder } from "../api/purchaseOrder/PurchaseOrder";

export const PURCHASEORDER_TITLE_FIELD = "orderNumber";

export const PurchaseOrderTitle = (record: TPurchaseOrder): string => {
  return record.orderNumber?.toString() || String(record.id);
};
