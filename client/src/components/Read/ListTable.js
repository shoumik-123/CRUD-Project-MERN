import React, {useEffect} from 'react';
import {Read} from "../../APIServices/CRUDServices";

const ListTable = () => {
    useEffect(()=>{
        Read().then((Result)=>{
            console.log(Result)
        })
    })
    return (
        <div>
            <h1>Read page</h1>
        </div>
    );
};

export default ListTable;