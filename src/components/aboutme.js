import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from "react-mdl"; 

class About extends Component {
  render() {
    return(
      <div className="aboutme-body">
        <Grid className="aboutme-grid">
            <Cell col={6}>
            <h2>Naresh payani</h2>
              
              <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{height:"250px"}}></img>
              
              <p style={{width:"75%", margin:"auto", paddingTop:"1em"}}>4.8 years of Experience in developing Responsive & Interactive websites | Expert in CSS3, HTML5, Bootstrap, Web Content Management, SharePoint Admin and JavaScript | Very good knowledge of React JS.</p>
            </Cell>
            <Cell col={6}>
            
            <h2>Contact Me</h2>
            <hr></hr>
          <div className="aboutme-list">
          <List>
              <ListItem>
                <ListItemContent style={{fontSize:"25px", fontFamily:"'Roboto Slab', serif" }}><i className="fa fa-phone-square" aria-hidden="true"></i> Phone : (+91) 9481110011</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize:"25px", fontFamily:"'Roboto Slab', serif" }}><i className="fa fa-envelope" aria-hidden="true"></i> Email : nareshpayani02@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize:"25px", fontFamily:"'Roboto Slab', serif" }}><i className="fa fa-skype" aria-hidden="true"></i> Skype Id : NareshPayani</ListItemContent>
              </ListItem>
            </List>
          </div>
            
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
