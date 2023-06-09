import React, {useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ErrorToast, isEmpty, SuccessToast} from "../../helper/ValidationHelper";
import {Create} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {useNavigate} from "react-router";

const CreateForm = () => {


    const navigate = useNavigate()



    let PName,PCode,Image,UPrice,Qty,TPrice,Loader = useRef();

    const SaveData = ()=>{

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

          Create(ProductName , ProductCode ,Img ,UnitPrice,Quantity,TotalPrice).then((Result)=>{

              //Loader
              Loader.classList.add("d-none")


              if(Result===true){
                  const msg = "Data save "
                SuccessToast(msg)

                  navigate('/')

              }else {
                toast("Request Failed. Try again")
              }
          })
      }

    }


    return (
        <div>
            <div className="container">

                <h1 className="bg-dark p-3 text-center text-secondary">Create Data List</h1>
                <div className="py-5 row">
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
                        <button onClick={SaveData} className="btn btn-primary w-100">Save</button>
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

export default CreateForm;