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
                window.location.reload();

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
                    <th className="p-3">No</th>
                    <th className="p-3">Product Name</th>
                    <th className="p-3">Product Code</th>
                    <th className="p-3">Image</th>
                    <th className="p-3">Unit Price</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Total Price</th>
                    <th className="p-3">Action</th>
                    </thead>

                    <tbody>
                    {
                        DataList.map((item, i )=>{
                            return (
                                <tr>
                                    <td className="p-3">{i + 1}</td>
                                    <td className="p-3">{item.ProductName}</td>
                                    <td className="p-3">{item.ProductCode}</td>
                                    <td className="p-3"><img className="w-25 h-25" src={item.Img}/></td>
                                    <td className="p-3">{item.UnitPrice}</td>
                                    <td className="p-3">{item.Quantity}</td>
                                    <td className="p-3">{item.TotalPrice}</td>
                                    <td className="p-3"><button onClick={UpdateItem.bind(this, item._id)} className="btn btn-dark mx-3">Update</button><button onClick={DeleteItem.bind(this , item._id)} className="btn btn-danger mx-3">Delete</button></td>
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