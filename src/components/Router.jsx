import React from 'react'
import App from '../App'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserDetails from './contentItem/UserDetails'
import CreateForm from "./contentItem/CreateForm";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App/>} path='/'/>
                <Route element={<UserDetails/>} path='/users/:id'/>
                <Route element={<CreateForm/>} path='/users'/>

                <Route path='*' element={<div>Not found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;