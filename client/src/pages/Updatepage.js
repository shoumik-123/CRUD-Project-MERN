import React from 'react';
import UpdateForm from "../components/Update/UpdateForm";
import {useParams} from "react-router";

const UpdatePage = () => {
    const params = useParams()


    return (
        <div>
            <UpdateForm id = {params['id']}/>
        </div>
    );
};

export default UpdatePage;