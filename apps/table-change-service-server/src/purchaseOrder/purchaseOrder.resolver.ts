import * as graphql from "@nestjs/graphql";
import { PurchaseOrderResolverBase } from "./base/purchaseOrder.resolver.base";
import { PurchaseOrder } from "./base/PurchaseOrder";
import { PurchaseOrderService } from "./purchaseOrder.service";

@graphql.Resolver(() => PurchaseOrder)
export class PurchaseOrderResolver extends PurchaseOrderResolverBase {
  constructor(protected readonly service: PurchaseOrderService) {
    super(service);
  }
}
