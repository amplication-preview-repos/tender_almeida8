import { PurchaseOrderHeader as TPurchaseOrderHeader } from "../api/purchaseOrderHeader/PurchaseOrderHeader";

export const PURCHASEORDERHEADER_TITLE_FIELD = "headerNumber";

export const PurchaseOrderHeaderTitle = (
  record: TPurchaseOrderHeader
): string => {
  return record.headerNumber?.toString() || String(record.id);
};
