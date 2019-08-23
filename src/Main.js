import React from "react";
import MaterialTable from "material-table";
import Keywords from "./Keywords";

export default function Main() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Category", field: "category" },
      { title: "KeyWords", field: "keywords" }
    ],
    data: [
      { category: "CATEGORY 1", keywords: <Keywords /> },
      {
        category: "Zerya Betül",
        keywords: <Keywords />
      }
    ]
  });

  return (
    <React.Fragment>
      <MaterialTable
        title="Category"
        columns={state.columns}
        data={state.data}
        options={{
          headerStyle: {
            fontSize: "20px"
          }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            })
        }}
      />
    </React.Fragment>
  );
}
