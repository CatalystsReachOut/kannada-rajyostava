import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../helpers/ScrollToTop';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';

const Router = () => {

    const RouteWithRole = ({ Element }) => {
        return (
          <>
            <ScrollToTop/>
            <Element/>
            <Footer/>
          </>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
        </Routes>
    </div>
  )
}

export default Router