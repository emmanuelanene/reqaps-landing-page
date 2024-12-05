import React from 'react'
import HomeScreen from '../screens/Home/HomeScreen'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function LayoutContainer() {
  return (
    <div>
        <Header />

        <main>
            {/* 
                The Outlet component is used as a placeholder for rendering the child routes in your application. 
                When you define nested routes, the Outlet tells React Router where to display the content of the child routes inside the parent component. 
            */}
            <Outlet></Outlet>
        </main>

        <Footer />
    </div>
  )
}

export default LayoutContainer