import React from 'react';
import ReactToPrint from 'react-to-print';
import DataComponent from './DataComponent';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class PdfComponent extends React.Component {

  render() {
    const data = localStorage.getItem('isLogin');
    return (

      <div>
        <Container>
          <DataComponent ref={(componentRef) => (this.componentRef = componentRef)} />
          {(data) ? <ReactToPrint

            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
          /> : null}

          <div className='right'>

          </div>
        </Container>
      </div>
    );
  }

}

export default PdfComponent;