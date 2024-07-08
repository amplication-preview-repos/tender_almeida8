import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("DataChangeSummaryObject")
class DataChangeSummary {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    table!: string;

    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;
}

export { DataChangeSummary as DataChangeSummary };