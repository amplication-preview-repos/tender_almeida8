import * as graphql from "@nestjs/graphql";
import { PurchaseOrderHeaderResolverBase } from "./base/purchaseOrderHeader.resolver.base";
import { PurchaseOrderHeader } from "./base/PurchaseOrderHeader";
import { PurchaseOrderHeaderService } from "./purchaseOrderHeader.service";

@graphql.Resolver(() => PurchaseOrderHeader)
export class PurchaseOrderHeaderResolver extends PurchaseOrderHeaderResolverBase {
  constructor(protected readonly service: PurchaseOrderHeaderService) {
    super(service);
  }
}
