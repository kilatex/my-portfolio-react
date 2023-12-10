import React from 'react'
import {Routes,Route, Link, BrowserRouter, NavLink} from 'react-router-dom'
import { HomeComponent } from '../components/HomeComponent'
import { ContactComponent } from '../components/ContactComponent'
import { CVComponent } from '../components/CVComponent'
import { PortfolioComponent } from '../components/PortfolioComponent'
import { ServicesComponent } from '../components/ServicesComponent'
import { ErrorComponent } from '../components/ErrorComponent'
import { HeaderComponent } from '../components/layouts/HeaderComponent'
import { FooterComponent } from '../components/layouts/FooterComponent'

export const MainRouterComponent = () => {
  return (
    
    <BrowserRouter>
    {/* HEADER AND NAV */}
    <HeaderComponent></HeaderComponent>
    {/* ROUTES */}
    <Routes>
        <Route path='/' element={<HomeComponent/>}  />
        <Route path='/home' element={<HomeComponent/>} />
        <Route path='/contact' element={<ContactComponent/>} />
        <Route path='/cv' element={<CVComponent/>} />
        <Route path='/portfolio' element={<PortfolioComponent/>} />
        <Route path='/services' element={<ServicesComponent/>} />
        <Route path='/*' element={ <ErrorComponent/> } />
    </Routes>

    {/* FOOTER */}
    <FooterComponent></FooterComponent>
    
    </BrowserRouter>
  )
}
