import React from "react";
import MaterialTable from "material-table";

export default function Main() {
  const [state, setState] = React.useState({
    columns: [{ title: "Category", field: "category" }],
    data: [
      { category: "Mehmet" },
      {
        category: "Zerya Betül"
      }
    ]
  });

  return (
    <MaterialTable
      title="Category"
      columns={state.columns}
      data={state.data}
      detailPanel={rowData => {
        return <MaterialTable 
        title="KeyWords"
        columns={state.columns}
        editable={{ onRowDelete: oldData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...state.data];
            data.splice(data.indexOf(oldData), 1);
            setState({ ...state, data });
          }, 600);
        }),
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
      }}
        />;
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
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
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
  );
}
