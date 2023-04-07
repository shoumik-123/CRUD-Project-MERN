import React, {useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ErrorToast, isEmpty, SuccessToast} from "../../helper/ValidationHelper";
import {Create} from "../../APIServices/CRUDServices";

const CreateForm = () => {



    let PName,PCode,Image,UPrice,Qty,TPrice = useRef();

    const SaveData = () => {
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
          Create(ProductName , ProductCode ,Img ,UnitPrice,Quantity,TotalPrice).then((Result)=>{
              if(Result===true){
                  const msg = "Data save "
                SuccessToast(msg)
              }else {
                toast("Request Failed. Try again")
              }
          })
      }

    }


    return (
        <div>
            <div className="container">
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
                        <button onClick={SaveData} className="btn btn-primary w-100">Save</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default CreateForm;