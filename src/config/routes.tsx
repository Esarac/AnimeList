import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import LogIn from "../pages/LogIn";
import SignIn from "../pages/SignIn";

const loggedIn = true;

const routes =(
    <Router>
        <Routes>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/" element={loggedIn ? <Home/> : <Navigate to="/login" />}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
);

export default routes;