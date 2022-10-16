import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import LogIn from "../pages/LogIn";

const routes =(
    <Router>
        <Routes>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
);

export default routes;