import React, {useEffect, useRef} from 'react';
import {toast, ToastContainer} from "react-toastify";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, isEmpty, SuccessToast} from "../../helper/ValidationHelper";
import {Create, Read, ReadByID, Update} from "../../APIServices/CRUDServices";
import {useNavigate} from "react-router";

const UpdateForm = (props) => {

    const navigate = useNavigate()



    let PName,PCode,Image,UPrice,Qty,TPrice,Loader = useRef();
    const UpdateData = () => {
        let ProductName= PName.value;
        let ProductCode= PCode.value;
        let Img= Image.value;
        let UnitPrice= UPrice.value;
        let Quantity= Qty.value;
        let TotalPrice= TPrice.value;

        if(isEmpty(ProductName)){
            const msg = "Product Name"
            ErrorToast(msg);
        }
        else if (isEmpty(ProductCode)){
            const msg = "Product Code"
            ErrorToast(msg);
        }
        else if (isEmpty(Img)){
            const msg = "Image"
            ErrorToast(msg);
        }
        else if (isEmpty(UnitPrice)){
            const msg = "Unit Price"
            ErrorToast(msg);
        }
        else if (isEmpty(Quantity)){
            const msg = "Quantity"
            ErrorToast(msg);
        }
        else if (isEmpty(TotalPrice)){
            const msg = "Total Price"
            ErrorToast(msg);
        }
        else {

            // Loader
            Loader.classList.remove("d-none")

            Update(props.id, ProductName , ProductCode ,Img ,UnitPrice,Quantity,TotalPrice).then((Result)=>{

                //Loader
                Loader.classList.add("d-none")


                if(Result===true){
                    const msg = "Data Update "
                    SuccessToast(msg)

                    PName.value="";
                    PCode.value="";
                    Image.value="";
                    UPrice.value="";
                    Qty.value="";
                    TPrice.value="";

                    navigate('/')
                }else {
                    toast("Request Failed. Try again")
                }
            })
        }

    }


    useEffect(()=>{
        ReadByID(props.id).then((Result)=>{
            PName.value=Result[0]['ProductName']
            PCode.value=Result[0]['ProductCode']
            Image.value=Result[0]['Img']
            UPrice.value=Result[0]['UnitPrice']
            Qty.value=Result[0]['Quantity']
            TPrice.value=Result[0]['TotalPrice']
        })
    }, []);

    return (
        <div>
            <div className="container">

                <h1 className="bg-dark p-3 text-center text-secondary">Update Data List</h1>
                <div className="row py-5">
                    <div className="col-md-4 pt-5">
                        <label>Product Name</label>
                        <input ref={(input)=>PName= input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 pt-5">
                        <label>Product Code</label>
                        <input ref={(input)=>PCode= input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 pt-5">
                        <label>Image</label>
                        <input ref={(input)=>Image= input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 pt-5">
                        <label>Unit Price</label>
                        <input ref={(input)=>UPrice= input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 pt-5">
                        <label>Quantity</label>
                        <input ref={(input)=>Qty= input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 pt-5">
                        <label>Total Price</label>
                        <input ref={(input)=>TPrice= input} type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <button onClick={UpdateData} className="btn btn-primary w-100">Update</button>
                    </div>
                    <ToastContainer />
                </div>

            </div>
            <div className="d-none" ref={(div)=>Loader=div}>
                <FullScreenLoader/>
            </div>
        </div>
    );
};

export default UpdateForm;