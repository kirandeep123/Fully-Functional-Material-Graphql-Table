/* Table to show categories and keywords linked with them */
/*Table has searching and shorting functionalties along with adding and deleting
categories and keywords 
Used Material Ui Table to display the data 
*/
import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import Keywords from "./Keywords";
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import queries from './queries';

function KeywordTable(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: "Category", field: "name" },
      { title: "Keywords", field: "keywords" }
    ],
    data: []
  });

  useEffect(() => {
    setState({ data: props.allRowsQuery.allRows });
   }, [props])

  if (props.allRowsQuery.loading) {
    return <div>Loading</div>;
  }

  return (
    <React.Fragment>
      <MaterialTable
        title="Category"
        data={state.data}
        columns={[{
            field: 'name',
            title: 'Category'
          },
          {
            field: 'keywords',
            title: 'Keywords',
            render: rowData => <Keywords data={rowData.keywords} onChange={ (chips) => {
              props.updateTableRowQuery({
                variables: {
                  id: rowData.id,
                  name: rowData.name,
                  keywords: chips
                }
              })
            }} />,
            editComponent: rowData => (
              <Keywords data={rowData.keywords} onChange={ (chips) => rowData.rowData.keywords = chips } />
            )
        }]}
        options={{
          headerStyle: {
            fontSize: "20px"
          }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
              console.log(newData)
              const newId = data.length === 1 ? data[data.length-2].id+1 : 0
              props.addTableRowQuery({
                variables: {
                  id: newId,
                  name: newData.name,
                  keywords: newData.keywords
                }
              })
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
              props.removeTableRowQuery({ variables: { id: oldData.id }});
            })
        }}
      />
    </React.Fragment>
  );
}

export default compose(
  graphql(queries.TABLE_ROWS_QUERY, {
    name: 'allRowsQuery',
    options: {
      fetchPolicy: 'network-only',
    },
  }),
  graphql(queries.TABLE_ROW_ADD_QUERY, {
    name: 'addTableRowQuery',
  }),
  graphql(queries.TABLE_ROW_UPDATE_QUERY, {
    name: 'updateTableRowQuery',
  }),
  graphql(queries.TABLE_ROW_REMOVE_QUERY, {
    name: 'removeTableRowQuery'
  }),
)(KeywordTable);
