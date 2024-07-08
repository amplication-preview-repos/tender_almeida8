export type PurchaseOrderHeader = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdDate: Date | null;
  headerNumber: string | null;
  status: string | null;
};
