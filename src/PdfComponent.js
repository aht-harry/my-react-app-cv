import React from 'react';
import ReactToPrint from 'react-to-print';
import DataComponent from './DataComponent';
import { Container } from 'react-bootstrap';

 
class PdfComponent extends React.Component {
     
    render() {
      return (
        <div>
        <Container>
        <DataComponent ref={(componentRef) => (this.componentRef = componentRef)} />
        <div className='right'>
        <ReactToPrint

          content={() => this.componentRef}
          trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
        />
        </div>
        </Container>
      </div>
      );
    }
 
}
 
export default PdfComponent;