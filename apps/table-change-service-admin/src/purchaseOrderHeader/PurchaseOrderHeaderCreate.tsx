import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PurchaseOrderHeaderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="createdDate" source="createdDate" />
        <TextInput label="headerNumber" source="headerNumber" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
