import {toast} from "react-toastify";

class ValidationHelper{
    isEmpty(value){
       if(value.length===0){
           return true;
       }else {
           return false;
       }

    }

    ErrorToast = (msg) => {
        toast(msg+" Require ")
    };

    SuccessToast = (msg)=>{
        toast(msg+" Success ")
    }

}
export const {isEmpty,ErrorToast,SuccessToast} = new ValidationHelper;