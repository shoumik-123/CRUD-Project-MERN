import React, {useEffect, useState} from 'react';
import {Delete, Read, Update} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {toast} from "react-toastify";
import {SuccessToast} from "../../helper/ValidationHelper";
// import { withRouter } from "react-router";


const ListTable = () => {

    let [DataList, SetDataList]= useState([])

    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result)
        })
    }, []);


    const DeleteItem = (_id) => {
        Delete(_id).then((Result)=>{
            if(Result===200){
                const msg = "Delete "
                SuccessToast(msg)
                // props.history.push("/");
                window.location.reload(false)
            }
            else {
                toast("Delete Fail")
            }
        })
    };


    const UpdateItem = (_id) => {
        Update(_id)
    };

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
                                    <td><img className="w-25 h-25" src={item.Img}/></td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.Quantity}</td>
                                    <td>{item.TotalPrice}</td>
                                    <td><button onClick={UpdateItem.bind(this, item._id)} className="btn btn-dark">Update</button></td>
                                    <td><button onClick={DeleteItem.bind(this , item._id)} className="btn btn-danger">Delete</button></td>
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