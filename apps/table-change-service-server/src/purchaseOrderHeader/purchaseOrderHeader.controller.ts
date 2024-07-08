import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseOrderHeaderService } from "./purchaseOrderHeader.service";
import { PurchaseOrderHeaderControllerBase } from "./base/purchaseOrderHeader.controller.base";

@swagger.ApiTags("purchaseOrderHeaders")
@common.Controller("purchaseOrderHeaders")
export class PurchaseOrderHeaderController extends PurchaseOrderHeaderControllerBase {
  constructor(protected readonly service: PurchaseOrderHeaderService) {
    super(service);
  }
}
