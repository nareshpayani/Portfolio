import React, { Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from "react-mdl"; 

import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
  render() {
    return(
      <div className="resume-text">
        <Grid>
          <Cell className="resume-left" col={4}>
            <div style={{textAlign: 'center', margin:"30px"}}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em', fontFamily:"Roboto Slab"}}>Naresh Payani</h2>
            <h4 style={{color: 'grey',fontFamily:"Roboto Slab"}}>Front End Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%', fontFamily:"Roboto Slab"}}/>
            <p>4.8 years of Experience in developing Responsive & Interactive websites | Expert in CSS3, HTML5, Bootstrap, Web Content Management, SharePoint Admin and JavaScript | Very good knowledge of React JS.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <div className="aboutme-list">
          <List>
          <ListItem>
                <ListItemContent style={{fontSize:"15px", fontFamily:"'Roboto Slab', serif" }}><i className="fa fa-address-card" aria-hidden="true"></i> Address : Bangalore-560061</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize:"15px", fontFamily:"'Roboto Slab', serif" }}><i className="fa fa-phone-square" aria-hidden="true"></i> Phone : (+91) 9481110011</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize:"15px", fontFamily:"'Roboto Slab', serif" }}><i className="fa fa-envelope" aria-hidden="true"></i> Email : nareshpayani02@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize:"15px", fontFamily:"'Roboto Slab', serif" }}><i className="fa fa-skype" aria-hidden="true"></i> Skype Id : NareshPayani</ListItemContent>
              </ListItem>
            </List>
          </div>
          </Cell>

          <Cell className="resume-right clearfix" col={8}>


          <h3 style={{ fontFamily:"'Roboto Slab', serif" }}>Experience : <span>(4.8 years)</span></h3>

            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Sr UI Developer"
              companyName="Dell International Services India Pvt Ltd"
              jobDescription=""
              />

              <Experience
                startYear={2015}
                endYear={2016}
                jobName=" Front End Developer"
                companyName="Winveda Ecommerce Servicess Pvt Ltd"
                jobDescription=""
                />
                <Experience
                startYear={2014}
                endYear={2015}
                jobName="Web Developer"
                companyName="360 Thoughts Digital Solutions Pvt"
                jobDescription=""
                />
                
              <hr style={{borderTop: '3px solid #e22947'}} />
              
              <h3 style={{ fontFamily:"'Roboto Slab', serif" }}>Skills :</h3>
              <Skills
                skill="HTML/CSS"
                progress={90}
                />
                <Skills
                  skill="Javascript"
                  progress={70}
                  />
                  <Skills
                    skill="Bootstarp"
                    progress={80}
                    />
                    <Skills
                      skill="React JS"
                      progress={50}
                      />
                <Skills
                    skill="Sharepoint Admin"
                    progress={70}
                />

                <Skills
                    skill="CMS"
                    progress={70}
                />

                <hr style={{borderTop: '3px solid #e22947'}} />
            <h3 style={{ fontFamily:"'Roboto Slab', serif" }}>Education :</h3>


            <Education
              startYear={2010}
              endYear={2014}
              degree="BE (CSE)"
              schoolName="Visvesvaraya Technological University"
              schoolDescription=""
               />

               <Education
                 startYear={2008}
                 endYear={2010}
                 degree="PUC"
                 schoolName="Sri Chaitany Jr College"
                 schoolDescription=""
                  />
               <Education
                 startYear={2006}
                 endYear={2007}
                 degree="SSLC"
                 schoolName="ZP High School"
                 schoolDescription=""
                  />

             


          </Cell>
        </Grid>
      </div>
    
    )
  }
}

export default Resume;
