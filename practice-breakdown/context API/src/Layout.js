import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import {  Outlet } from 'react-router-dom'
import { DataProvider } from './context/DataContext';
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Layout = () => {
  const { width} = useContext(DataContext);
  return (
    <div className="App">
      <DataProvider>
        <Header title="React JS Blog" width={width} />
        <Nav />   
        <Outlet />
        <Footer />
      </DataProvider>
    </div>
  )
}

export default Layout