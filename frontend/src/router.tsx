import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Experience from './pages/Experience/Experience'

import GlobalStyle from './styles/global'
import SideMenu from './templates/sideMenu/SideMenu'

export const Router = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
            <SideMenu />
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/experiencia" element={<Experience />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}