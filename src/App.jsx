import { useState } from 'react'
//import './App.css'
import './css/style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';

function App() {
  
  return (
    <>
      <Header/>
      <ListaProyectos/>
      <Footer/>
    </>
  )
}

export default App
