import React from 'react';
import ReactToPrint from 'react-to-print';
import DataComponent from './DataComponent';
import TemplateCV from './template/TemplateCV';
 
 
class PdfComponent extends React.Component {
     
    render() {
      return (
        <div>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
        />
        <DataComponent ref={(componentRef) => (this.componentRef = componentRef)} />
      </div>
      );
    }
 
}
 
export default PdfComponent;