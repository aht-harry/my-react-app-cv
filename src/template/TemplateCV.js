import { render } from '@testing-library/react';
import React from 'react';

function TemplateCV() {


  return (
    <div>
      <h1>My CV</h1>
      <div className="personal-info">
        <h2>Personal Information</h2>
        <ul>
          <li>Name: John Doe</li>
          <li>Email: johndoe@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </div>
      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>Degree: Bachelor of Science in Computer Science</li>
          <li>University: XYZ University</li>
          <li>Graduation Date: May 2022</li>
        </ul>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          <li>Job Title: Web Developer</li>
          <li>Employer: ABC Company</li>
          <li>Employment Dates: June 2022 - Present</li>
          <li>Responsibilities: Developed and maintained web applications using ReactJS and NodeJS.</li>
        </ul>
      </div>
    </div>
  );}


export default TemplateCV;
