import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Layout() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}