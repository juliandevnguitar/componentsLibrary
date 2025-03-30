
import { useState, useEffect} from "react"
import {Payment, columns} from "./columns"
import DataTable from "./data-table"


const payments: Payment[] = [
    {
      id: "728ed52f",
      amount: 180,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 150,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",

    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 130,
        status: "processing",
        email: "example@gmail.com",
    },

    // ...
  ]


async function getData(): Promise<Payment[]> {
    // API call goes here
    await new Promise(resolve => setTimeout(resolve, 1000))

    return payments
}

export default function DataTableView() {
    const [data, setData] = useState<Payment[]>([])
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setData(data)
        }
        fetchData()
    }, [])

    return (
            <DataTable columns={columns} data={data} />
    )
}




