import { Card } from "@themesberg/react-bootstrap";
import React from "react";
import Table from "../../components/Table"
import { formatDate } from "../../utils/dateUtils"

function Services() {
  return (
    <>
      <Table
        queryName="GET_SERVICES"
        dataName="services"
        tableOptions={
          {
            title: "Xizmatlar ro'yxati",
            headerProps: ["Id", "Name", "Price", "Structure", 'Created At', 'Updated At'],
            dataProps: [
              (row) => (
                <Card.Link
                  className="text-primary fw-bold"
                  href={`/${row.id}`}
                >
                  {row?.name}
                </Card.Link>
              ),
              (row) => <span>{row?.price}</span>,
              (row) => <span>{row?.service_form ?
                (
                  <ul>
                    {Object.keys(row?.service_form).map((key) => (
                      <li>
                        {key}:
                        <ul>
                          {
                            Object.keys(row?.service_form[key]).map((innerKey) => (
                              <li>
                                {
                                  row?.service_form[key][innerKey].input_type === "option" ? (
                                    <>
                                      {innerKey}:
                                      <ul>
                                        {
                                          row?.service_form[key][innerKey]?.option_values.map((optVal) => (
                                            <li>{optVal}</li>
                                          ))
                                        }
                                      </ul>
                                    </>
                                  ) : (innerKey)
                                }
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

export default Services
