import { Badge } from "@themesberg/react-bootstrap";
import React from "react";
import { Link } from "react-router-dom"
import Table from "../components/Table"
import { formatDate } from "../utils/dateUtils"

function Users() {
  return (
    <>
      <Table
        queryName="GET_USERS"
        dataName="users"
        tableOptions={
          {
            title: "Foydalanuvchilar ro'yxati",
            headerProps: ["Id", "Email", "Account Number", "Balance", "Role", "Active", 'Created At', 'Updated At'],
            dataProps: [
              (row) => (
                row?.accounts[0]?.id ?
                <Link className="text-primary fw-bold" to={`/users/${row?.accounts[0]?.id}`}>{row?.display_name}</Link>
                : <span>{row?.display_name}</span>
              ),
              (row) => <span>{row?.accounts[0]?.account_number ? row?.accounts[0]?.account_number : '-'}</span>,
              (row) => <span>{row?.accounts[0]?.balance?.amount ? row?.accounts[0]?.balance?.amount : '-'}</span>,
              (row) => <span>{row?.account?.default_role}</span>,
              (row) => (
                <Badge bg={row?.account?.active ? 'success' : 'primary'} className="badge-lg">
                  {row?.account?.active ? 'true' : 'false'}
                </Badge>
              ),
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

export default Users
