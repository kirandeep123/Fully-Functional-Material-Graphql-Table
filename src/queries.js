import gql from 'graphql-tag';

export default {
  TABLE_ROWS_QUERY : gql`
  query {
    allRows {
      id
      name
      keywords
    }
  }
`,

TABLE_ROW_ADD_QUERY : gql`
  mutation addRow($id: ID!, $name: String!, $keywords: [String]!) {
    createRow(id: $id, name: $name, keywords: $keywords) {
      id
      name
      keywords
    }
  }
`,

TABLE_ROW_UPDATE_QUERY : gql`
  mutation updateRow($id: ID!, $name: String!, $keywords: [String]!) {
    updateRow(id: $id, name: $name, keywords: $keywords) {
      id
      name
      keywords
    }
  }
`,

TABLE_ROW_REMOVE_QUERY : gql`
  mutation removeRow($id: ID!){
    removeRow(id: $id)
  }
`
}