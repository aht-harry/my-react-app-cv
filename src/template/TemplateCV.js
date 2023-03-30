import React from 'react';
import MainLeft from './components_template/MainCV/MainLeft';
import Top from './components_template/Top';

function TemplateCV() {
  return (
    <div className="cv-content">
      <Top />
      <div className="cv-chia-cot contentt">
        <div className="cv-cot-trai">
          <div id="anh_bg_4"></div>
          <MainLeft />
        </div>
      </div>
    </div>
  )
}


export default TemplateCV;
