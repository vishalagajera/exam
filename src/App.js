import React, { useCallback, useEffect } from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Layout from "./Layout"
import MyModel from "./componants/MyModel"
import Home from "./componants/Home"
import Cookies from "js-cookie"
import { useState } from "react"
import Login from "./componants/Login"
import Signup from "./componants/signup/Signup"
import NotFound from "./componants/Notfound"
import Check from "./Auth/check"
import Nearbyusers from "./componants/nearbyusers"
import Profile from "./componants/profile"
import Search from "./componants/search"
import Postajob from "./componants/postajob"
import { Country, State, City } from "country-state-city"

const App = () => {
    const [modell, setModell] = useState(false)
   
    useEffect(() => {
        if (!Cookies.get("token")) {
            setModell(false)
        }
        const isauth = async () => {
            const data = await fetch("http://localhost:5500/checkisvalid", {
                headers: {
                    Authorization: Cookies.get("token")
                }
            }).catch((e) => console.log(e))
            const me = await data?.json();
            if (me?.unauthorized) {
                Cookies.remove("token");
            }
        }
        isauth()
    }, [])

    return (
        <>
            {modell ? <MyModel setModell={setModell}></MyModel> : ""}
            <BrowserRouter>
                <Routes>
                    <Route path="/login"  index  element={<Login />}></Route>
                    <Route index  element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    {/* Layout after login  */}
                    <Route element={<Layout />}>
                        <Route path="/home" element={<Home setModell={setModell} />}></Route>
                        <Route path="/nearbyusers" element={<Nearbyusers />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/postanewjob" element={<Postajob />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                        <Route path={Cookies.get("token")} element={<Check />}> </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App