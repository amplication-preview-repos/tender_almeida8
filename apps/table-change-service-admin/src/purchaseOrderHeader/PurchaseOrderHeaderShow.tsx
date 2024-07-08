import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PurchaseOrderHeaderShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="createdDate" source="createdDate" />
        <TextField label="headerNumber" source="headerNumber" />
        <TextField label="status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
