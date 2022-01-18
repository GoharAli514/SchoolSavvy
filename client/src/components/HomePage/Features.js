import React from "react";
import "./Features.css";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserCircle, faEnvelopeOpen, faDollarSign, faFlag, faAddressCard, faGraduationCap, faPrescriptionBottle, faUserPlus, faSquareFull, faMinusSquare, faBook, faBookmark, faLaptop } from '@fortawesome/fontawesome-free-solid';

const Features = () => {
  return (
    <div>
      <HomeHeader />




      {/* Head */}




      {/*   Main School Savvy Segment    */}




      <div className="Box1">
      <div>
        <h1 className="h11"> School Savvy (Virtual Classes) </h1>
      </div>

      <div className="box">
        <div className="txtbox">
          <p className="pp">
            Fekara School Management System is offering Virutal Classroom
            (online Classes) integrated with Zoom in order to enhance the
            learning procedure for students. Admins or teachers can create
            online classes from within the app and Link for meeting are both
            updated into students and teachers panels.
          </p>
            <div>
            <i className="check-circle" />
            <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
            <t className="checktxt">Preconfigured Zoom Accounts</t> 
            </div>
            <div>
            <i className="check-circle" />
            <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
            <t className="checktxt">Option to schedule the meeting from Admin panel</t> 
            </div>
            <div>
            <i className="check-circle" />
            <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
            <t className="checktxt">Students Can join the meeting from Student panel</t> 
            </div>
            <div>
            <i className="check-circle" />
            <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
            <t className="checktxt">Alerts for Students</t> 
            </div>
            <div>
            <i className="check-circle" />
            <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
            <t className="checktxt">Alerts for Teachers</t> 
            </div>
        </div>
        <div>
          <img src="edu.png" className="img" alt="EDUCATION"/>
        </div>
      </div>
      </div>





      {/*   Student Management System Administer Segment    */}





      <div>
        <div className="Head22">
          <h3 className="Head2">
            Student Management System Administer Your Institution Smoothly
          </h3>
          <p className="pp2">
            Vast school software modules set gives you 360-degree student
            management system starting from admission to pass-out. feKara is a
            powerful and flexible student information system. As it is hosted in
            the cloud and always accessible.
          </p>
        </div>
      </div>





      {/*   Why School Management Segment    */}





      <div>
        <div className="BoxD3">
          <h3 className="D3T">
            Why should School Management System be part of your institute?
          </h3>
          <hr  className="line"/>
          <t className="D3T2">
            School management software which includes everything your institution will ever need
          </t>





        {/*   Main Box Line No 1    */}





          <div className="MainBox">
            <div className="MBox1">
              <div className="iconacd">
              <FontAwesomeIcon icon={faAddressCard} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Basic Academic</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Admission Enrollments</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Self Enrolment option</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Attendance</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Timetable</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Sessions and Batches</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Student Reporting</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Grade Books</t> 
              </div>
              </div>
            </div> 
            <div className="MBox1">
              <div className="iconacd">
              <FontAwesomeIcon icon={faBookmark} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Management</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Multiple Dashboards</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">User Roles & Rights</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Employee/Teacher Login</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Student Import</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Data Export</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Library</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Examination Management</t> 
              </div>
              </div>
            </div>
            <div className="MBox1">
              <div className="iconacd">
              <FontAwesomeIcon icon={faPrescriptionBottle} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Reporting</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Customize Report Templates</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Schedule Report generation</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Email/ SMS Reports</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Financial Reports & Summeries</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Management Reports</t> 
              </div>
              </div>
            </div>
          </div>





          {/*   Main Box Line No 2    */}





          <div className="MainBox">
            <div className="MBox2">
              <div className="iconacd">
              <FontAwesomeIcon icon={faDollarSign} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Financial</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Fees</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Fee Import</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Basic Accounts ( Income/ expenses)</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Teacher Salaries Calculation</t> 
              </div>
              </div>
            </div>

            <div className="MBox2">
              <div className="iconacd">
              <FontAwesomeIcon icon={faEnvelopeOpen} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Communication</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Messaging System</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">SMS integration</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Teacher/Parent/ Managment Communication</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Auto SMS/Email alerts</t> 
              </div>
              </div>
            </div>

            <div className="MBox2">
              <div className="iconacd">
              <FontAwesomeIcon icon={faGraduationCap} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Student Portal</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Assignments</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Notes</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Teacher/ student / management communication</t> 
              </div>
              </div>
            </div>
          </div>





          {/*   Main Box Line No 3    */}





          <div className="MainBox">
            <div className="MBox3">
              <div className="iconacd">
              <FontAwesomeIcon icon={faMinusSquare} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Teacher Portal</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Course Materials</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Notes</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Teacher/ student communication</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Assignement Management</t> 
              </div>
              </div>
            </div>

            <div className="MBox2">
              <div className="iconacd">
              <FontAwesomeIcon icon={faFlag} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Others</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Multi-Langual</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Very customizable</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Single Signon with Google</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">DataExport Options</t> 
              </div>
              </div>
            </div>

            <div className="MBox2">
              <div className="iconacd">
              <FontAwesomeIcon icon={faLaptop} color="rgb(0, 140, 255)" size="3x" />
              </div>
              <div className="heading1">
                <t>Virtual Classes (Online Class System)</t>
              </div>
              <div className="textdiv">
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Online Classes integrated with Zoom</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Meeting Creation within the app</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Meeting Link for Teachers</t> 
              </div>
              <div>
                <FontAwesomeIcon icon={faCheck} color="rgb(0, 140, 255)" />
                <t className="checktxt2">Meeting Link for Students</t> 
              </div>
              </div>
            </div>
          </div>
        </div> 

        



        {/*   Basic Academic 4th Sectiom */}





        <div className="BAcd">
          <h3 className="Heading">
          Basic Academic
          </h3>
          <t>
            Student Information System – SIS Features
          </t>
          <p className="para">
          Basic Academic Module of feKara <a href="/">School Management System </a> offers its user options that can be used to manage the basic daily works of the school management. 
          This module includes many functionalities which makes the daily routine work life of the school staff much easier, efficient and foolproof.
          </p>
        </div>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Features;
