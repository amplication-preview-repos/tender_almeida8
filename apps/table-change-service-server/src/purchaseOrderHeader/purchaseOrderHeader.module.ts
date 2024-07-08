import { Module } from "@nestjs/common";
import { PurchaseOrderHeaderModuleBase } from "./base/purchaseOrderHeader.module.base";
import { PurchaseOrderHeaderService } from "./purchaseOrderHeader.service";
import { PurchaseOrderHeaderController } from "./purchaseOrderHeader.controller";
import { PurchaseOrderHeaderResolver } from "./purchaseOrderHeader.resolver";

@Module({
  imports: [PurchaseOrderHeaderModuleBase],
  controllers: [PurchaseOrderHeaderController],
  providers: [PurchaseOrderHeaderService, PurchaseOrderHeaderResolver],
  exports: [PurchaseOrderHeaderService],
})
export class PurchaseOrderHeaderModule {}
