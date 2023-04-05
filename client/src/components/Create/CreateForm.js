import React, {useRef} from 'react';

const CreateForm = () => {



    let PName,PCode,Image,UPrice,Qty,TPrice = useRef();

    const SaveData = () => {
      let ProductName= PName.value;
      let ProductCode= PCode.value;
      let Img= Image.value;
      let UnitPrice= UPrice.value;
      let Quantity= Qty.value;
      let TotalPrice= TPrice.value;

      alert(ProductName)
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
                        <label>Product Name</label>
                        <input ref={(input)=>UPrice= input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 pt-5">
                        <label>Product Name</label>
                        <input ref={(input)=>Qty= input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 pt-5">
                        <label>Product Name</label>
                        <input ref={(input)=>TPrice= input} type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <button onClick={SaveData} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;