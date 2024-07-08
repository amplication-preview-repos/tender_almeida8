import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUPPLIER_TITLE_FIELD } from "./SupplierTitle";

export const SupplierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="supplierName" source="supplierName" />
        <TextField label="contactInfo" source="contactInfo" />
        <TextField label="address" source="address" />
        <ReferenceManyField
          reference="PurchaseOrder"
          target="supplierId"
          label="PurchaseOrders"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="orderNumber" source="orderNumber" />
            <TextField label="orderAmount" source="orderAmount" />
            <TextField label="orderDate" source="orderDate" />
            <ReferenceField
              label="Supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
