import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Pages
import Home from "../pages/Home/Home";
import Meditaciones from "../pages/Meditaciones/Meditaciones";
import Kriyas from "../pages/Kriyas/Kriyas";
import Mantras from "../pages/Mantras/Mantras";
import Alimentacion from "../pages/Alimentacion/Alimentacion";
import NewAsanaForm from "../components/NewAsanaForm/NewAsanaForm";
import User from "../pages/User/User";
//import Auth from "../pages/Auth/Auth";
//import Error404 from "../pages/Error404";
import LayoutBasic from "../layouts/LayoutBasic";

export default function Navigation() {
    return (
        <Router>
            <Routes>
                <Route element={<LayoutBasic/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/meditaciones' element={<Meditaciones />}/>
                    <Route path='/kriyas' element={<Kriyas />}/>
                    <Route path='/mantras' element={<Mantras />}/>
                    <Route path='/alimentacion' element={<Alimentacion />}/>
                    <Route path='/nueva-meditacion' element={<NewAsanaForm />}/>
                    <Route path=':username' element={<User/>}/>
                </Route>
                {/* <Route element={<LayoutBasic/>}>
                    <Route path='*' element={<Error404/>} />
                </Route> */}
            </Routes>
        </Router>
    )
}