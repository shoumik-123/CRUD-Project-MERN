
import React from "react";
import AppNavbar from "./components/Common/AppNavbar";
import {Route, Routes} from "react-router";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";


const App = () => {
    return (
        <div>
            <AppNavbar/>
            <Routes>
                <Route path = "/" element={<ReadPage />}/>
                {/*<Route path = "/" render={(props)=><ReadPage {...props} key={ Date.now()} />}/>*/}
                <Route path = "/create" element ={<CreatePage/>}/>
                <Route path = "/update/:id" element ={<UpdatePage/>}/>
            </Routes>
        </div>
    );
};

export default App;
