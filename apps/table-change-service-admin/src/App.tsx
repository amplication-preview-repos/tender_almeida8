import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PurchaseOrderList } from "./purchaseOrder/PurchaseOrderList";
import { PurchaseOrderCreate } from "./purchaseOrder/PurchaseOrderCreate";
import { PurchaseOrderEdit } from "./purchaseOrder/PurchaseOrderEdit";
import { PurchaseOrderShow } from "./purchaseOrder/PurchaseOrderShow";
import { PurchaseOrderHeaderList } from "./purchaseOrderHeader/PurchaseOrderHeaderList";
import { PurchaseOrderHeaderCreate } from "./purchaseOrderHeader/PurchaseOrderHeaderCreate";
import { PurchaseOrderHeaderEdit } from "./purchaseOrderHeader/PurchaseOrderHeaderEdit";
import { PurchaseOrderHeaderShow } from "./purchaseOrderHeader/PurchaseOrderHeaderShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TableChangeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PurchaseOrder"
          list={PurchaseOrderList}
          edit={PurchaseOrderEdit}
          create={PurchaseOrderCreate}
          show={PurchaseOrderShow}
        />
        <Resource
          name="PurchaseOrderHeader"
          list={PurchaseOrderHeaderList}
          edit={PurchaseOrderHeaderEdit}
          create={PurchaseOrderHeaderCreate}
          show={PurchaseOrderHeaderShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
      </Admin>
    </div>
  );
};

export default App;
