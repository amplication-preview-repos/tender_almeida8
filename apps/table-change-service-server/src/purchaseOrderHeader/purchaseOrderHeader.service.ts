import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseOrderHeaderServiceBase } from "./base/purchaseOrderHeader.service.base";

@Injectable()
export class PurchaseOrderHeaderService extends PurchaseOrderHeaderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
