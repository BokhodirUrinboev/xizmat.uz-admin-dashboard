import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { queries } from '../graphql'
import { Alert } from "@themesberg/react-bootstrap"

const Table = ({
  queryName,
  dataName,
  tableOptions,
  queryVariables = {}
}) => {

  const { loading, data, error } = useQuery(queries[queryName], {
    variables: queryVariables
  })

  const [tableData, setTableData] = useState(data ? data[dataName] : []);
  const [isAlert, setIsAlert] = useState(false)

  useEffect(() => {
    if (error) {
      setIsAlert(true)
    }

    if (data && data[dataName]) {
      console.log('table data', data[dataName])
      setTableData(data[dataName])
    }
  }, [data, dataName, error])

  return (
    <>

      {
        isAlert && <Alert className="mt-2 mb-0" variant="danger" onClose={() => setIsAlert(false)} dismissible>
          <Alert.Heading>{error?.error}</Alert.Heading>
          <p>{error?.message}</p>
        </Alert>
      }

      <div className="d-flex flex-column flex-grow-1">
        <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-xl-0">
            <h4>{tableOptions.title}</h4>
          </div>
        </div>

        <div className="shadow-sm card border-light">
          <div className="pb-0 card-body">
            <div className="table-responsive">
              {!loading && tableData !== undefined ? (
                <table className="table-centered table-nowrap rounded mb-0 table">
                  <thead className="thead-light">
                    <tr>
                      {
                        tableOptions.headerProps.map((tableHeader, tableHeaderIndex) => (
                          <th className="border-0" key={'id_' + tableHeaderIndex}>{tableHeader}</th>
                        ))
                      }

                    </tr>
                  </thead>

                  <tbody>

                    {tableData.map((item, itemIndex) =>
                      <tr key={'id_row_' + item.id} >
                        <td key={'id_row' + item.id + '_prop_' + itemIndex} className="border-0">
                          {itemIndex + 1}
                        </td>
                        {
                          tableOptions.dataProps.map((prop, propIndex) =>
                          (
                            <td key={'id_' + item.id + '_prop_' + propIndex} className="border-0">
                              {typeof prop == 'function' ? prop(item) : item[prop]}
                            </td>
                          )
                          )
                        }
                      </tr>
                    )}

                  </tbody>
                </table>) : (
                <span>Loading...</span>
              )
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Table
