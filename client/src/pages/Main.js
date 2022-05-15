import React from "react"
import { Table, Search, AddForm, Products} from '../components'

function Main() {
    return (
        <>
        <AddForm />
        <Search />
        <Table>
            <Products />
        </Table>
        </>

    )
}

export default Main