import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CVExperience from './demo/CVExperience';
import PdfComponent from './PdfComponent';
import TemplateCV from './template/TemplateCV';
 
function App() {
  return (
    <div className="App">
      <PdfComponent />
    </div>
  );
}
 
export default App;