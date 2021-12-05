import React from "react";
import { Badge } from "@themesberg/react-bootstrap";
import Table from "../components/Table"
import { formatDate } from "../utils/dateUtils"
import { useParams } from "react-router-dom"

function UserServices() {

  const { accountId } = useParams()

  return (
    <>
      <Table
        queryName="GET_ACCOUNT_SERVICES"
        queryVariables={{ account_id: Number(accountId) }}
        dataName="service_accounts"
        tableOptions={
          {
            title: "Foydalanuvchi xizmatlari",
            headerProps: ["Id", "Status", "Form Data", "Payment Status", "Service Name", "Service Price", "Balance", 'Created At', 'Updated At'],
            dataProps: [
              (row) => (
                <>
                  {
                    row?.status === 0 && (
                      <Badge bg="light" text="dark" className="badge-lg">
                        Not submited
                      </Badge>
                    )
                  }
                  {
                    row?.status === 1 && (
                      <Badge bg="info" className="badge-lg">
                        Completed
                      </Badge>
                    )
                  }
                  {
                    (row?.status === 2) && (
                      <Badge bg="warning" className="badge-lg">
                        Lose
                      </Badge>
                    )
                  }
                  {
                    (row?.status === 3) && (
                      <Badge bg="success" className="badge-lg">
                        Win
                      </Badge>
                    )
                  }
                </>
              ),
              (row) => <span>{row?.form_data ?
                (
                  <ul>
                    {Object.keys(row?.form_data).map((key) => (
                      <li>
                        {key}:
                        <ul>
                          {
                            Object.keys(row?.form_data[key]).map((innerKey) => (
                              <li>
                                {innerKey}
                                <span> : </span>
                                {row?.form_data[key][innerKey] ? row?.form_data[key][innerKey] : '-'}
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                    ))}
                  </ul>
                )
                : '-'}</span>,
                (row) => (
                  <Badge bg={row?.payment_status ? 'success' : 'primary'} className="badge-lg">
                    {row?.payment_status ? 'Paid' : 'Not paid'}
                  </Badge>
                ),
              (row) => row?.service?.name,
              (row) => row?.service?.price,
              (row) => row?.account?.balance?.amount,
              (row) => (
                row?.created_at ? formatDate(row?.created_at) : '-'
              ),
              (row) => (
                row?.updated_at ? formatDate(row?.updated_at) : '-'
              )
            ]
          }
        }
      />
    </>
  )
}

export default UserServices
