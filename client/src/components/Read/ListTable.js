import React, {useEffect, useState} from 'react';
import {Delete, Read, Update} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {toast} from "react-toastify";
import {SuccessToast} from "../../helper/ValidationHelper";


const ListTable = (props) => {

    let [DataList, SetDataList]= useState([])

    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result)
        })
    }, []);


    const DeleteItem = (_id) => {
        Delete(_id).then((result)=>{
            if(result===true){
                const msg = "Delete "
                SuccessToast(msg);
                props.history.push("/")
            }
            else {
                toast("Delete Fail");
            }
        })
    };


    const UpdateItem = (_id) => {
        props.history.push("/update/"+_id)
    };

    if(DataList.length>0){
        return (
            <div className="container my-5">
                <table className="table text-secondary table-bordered">
                    <thead>
                    <tr>
                        <th className="p-3">No</th>
                        <th className="p-3">Product Name</th>
                        <th className="p-3">Product Code</th>
                        <th className="p-3">Image</th>
                        <th className="p-3">Unit Price</th>
                        <th className="p-3">Quantity</th>
                        <th className="p-3">Total Price</th>
                        <th className="p-3">Update</th>
                        <th className="p-3">Delete</th>
                    </tr>
                    </thead>

                    <tbody>

                        {DataList.map((item, i )=>{
                            return (
                                <tr key={item._id}>
                                    <td className="p-3">{i + 1}</td>
                                    <td className="p-3">{item.ProductName}</td>
                                    <td className="p-3">{item.ProductCode}</td>
                                    <td className="p-3"><img className="w-25 h-25 img-fluid" src={item.Img}/></td>
                                    <td className="p-3">{item.UnitPrice}</td>
                                    <td className="p-3">{item.Quantity}</td>
                                    <td className="p-3">{item.TotalPrice}</td>
                                    <td className="py-2">
                                        <button onClick={UpdateItem.bind(this, item._id)} className="btn btn-dark mx-2">Update</button>
                                    </td>
                                    <td className="py-2">
                                        <button onClick={DeleteItem.bind(this, item._id)} className="btn btn-danger mx-2">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
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