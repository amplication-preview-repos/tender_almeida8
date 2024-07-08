import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PurchaseOrderTitle } from "../purchaseOrder/PurchaseOrderTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="supplierName" source="supplierName" />
        <TextInput label="contactInfo" source="contactInfo" />
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="purchaseOrders"
          reference="PurchaseOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseOrderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
