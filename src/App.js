import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PdfComponent from './PdfComponent';
import TemplateCV from './template/TemplateCV';
import { Route, Routes } from 'react-router-dom';
import LoginSignUp from './login/login';
import Header from './main/header';
import Footer from './main/footer';
import ContactForm from './pages/contact';
 
function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        
        <Route path='/' element={<LoginSignUp />}/>
        <Route path='/cv' element={<PdfComponent />}/>
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}
 
export default App;