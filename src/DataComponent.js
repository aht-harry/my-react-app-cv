import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import TemplateCV from './template/TemplateCV';
 
const thStyle = {
    fontFamily: "Anton",
    fontWeight: "normal",
    fontStyle: "normal"
};

   
class DataComponent extends React.Component {
    render() {
        return (
            <TemplateCV />
          );
    }
  }
 
  export default DataComponent;