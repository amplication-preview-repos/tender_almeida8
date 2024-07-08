import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PurchaseOrderHeaderEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="createdDate" source="createdDate" />
        <TextInput label="headerNumber" source="headerNumber" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
