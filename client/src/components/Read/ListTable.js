import React, {useEffect, useState} from 'react';
import {Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";

const ListTable = () => {

    let [DataList, SetDataList]= useState([])

    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result)
        })
    }, []);


    if(DataList.length>0){
        return (
            <div className="container my-5">
                <table className="table table-bordered">
                    <thead>
                    <th className="p-4">Product Name</th>
                    <th className="p-4">Product Code</th>
                    <th className="p-4">Image</th>
                    <th className="p-4">Unit Price</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Total Price</th>
                    </thead>

                    <tbody>
                    {
                        DataList.map((item, i )=>{
                            return (
                                <tr>
                                    <td>{item.ProductName}</td>
                                    <td>{item.ProductCode}</td>
                                    <td><img className="w-50 h-auto" src={item.Img}/></td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.Quantity}</td>
                                    <td>{item.TotalPrice}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
    else {
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }


};

export default ListTable;