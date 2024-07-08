/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchaseOrderHeaderWhereInput } from "./PurchaseOrderHeaderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PurchaseOrderHeaderOrderByInput } from "./PurchaseOrderHeaderOrderByInput";

@ArgsType()
class PurchaseOrderHeaderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PurchaseOrderHeaderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PurchaseOrderHeaderWhereInput, { nullable: true })
  @Type(() => PurchaseOrderHeaderWhereInput)
  where?: PurchaseOrderHeaderWhereInput;

  @ApiProperty({
    required: false,
    type: [PurchaseOrderHeaderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PurchaseOrderHeaderOrderByInput], { nullable: true })
  @Type(() => PurchaseOrderHeaderOrderByInput)
  orderBy?: Array<PurchaseOrderHeaderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PurchaseOrderHeaderFindManyArgs as PurchaseOrderHeaderFindManyArgs };
