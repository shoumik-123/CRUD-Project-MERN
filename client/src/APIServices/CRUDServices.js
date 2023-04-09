import axios from "axios";

export function Create(ProductName,ProductCode,Img,UnitPrice,Quantity,TotalPrice) {
    let URL="http://localhost:5005/api/v1/CreateProduct";
    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Quantity:Quantity,
        TotalPrice:TotalPrice
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })
}



export function Read() {
    let URL="http://localhost:5005/api/v1/ReadProduct";

    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data']
        }else {
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })
}




export function Update(id,ProductName,ProductCode,Img,UnitPrice,Quantity,TotalPrice) {
    let URL="http://localhost:5005/api/v1/UpdateProduct/"+id;
    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Quantity:Quantity,
        TotalPrice:TotalPrice
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })
}




export function Delete(id) {
    let URL="http://localhost:5005/api/v1/DeleteProduct/"+id;

    return axios.post(URL).then((res)=>{
        if(res.status===200){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })
}