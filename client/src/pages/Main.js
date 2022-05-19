import React, {useState} from "react"
import { Table, Search, AddForm, Products } from '../components'

function Main() {
    const [currentId, setCurrentId ] = useState(null)

    return (
        <>
        <AddForm currentId={currentId} setCurrentId={setCurrentId}/>
        <Search />
        <Table>
            <Products setCurrentId={setCurrentId}/>
        </Table>
        </>

    )
}

export default Main