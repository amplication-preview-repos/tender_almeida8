import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SupplierTitle } from "../supplier/SupplierTitle";

export const PurchaseOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="orderNumber" source="orderNumber" />
        <NumberInput label="orderAmount" source="orderAmount" />
        <DateTimeInput label="orderDate" source="orderDate" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
