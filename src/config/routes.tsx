import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import store from "./redux/store";
//Pages
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Favorites from "../pages/Favorites";
import LogIn from "../pages/LogIn";
import SignIn from "../pages/SignIn";

const routes = (
    <Router>
        <Routes>
            <Route path="/signin" element={store.getState().actual === null ? <SignIn /> : <Navigate to="/" />} />
            <Route path="/login" element={store.getState().actual === null ? <LogIn /> : <Navigate to="/" />} />
            <Route path="/" element={store.getState().actual !== null ? <Home /> : <Navigate to="/login" />} />
            <Route path="/fav" element={store.getState().actual !== null ? <Favorites /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
)

export default routes;