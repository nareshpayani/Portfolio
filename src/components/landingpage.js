import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}> 
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
            <h1>Naresh Payani</h1>
              <h3>Front End Developer</h3>
            <hr/>
            <p>HTML/CSS | Bootstrap | JavaScript | React JS | SharePoint| CMS | Digital Marketing</p>

            
                <div className="social-links">

                    {/* LinkedIn */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square"></i>
                    </a>

                    {/* Github */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* Freecodecamp */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-free-code-camp" aria-hidden="true" />
                    </a>

                    {/* Youtube */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>

                    </div>


            </div>
        </Cell>
        </Grid>      
      </div>
    )
  }
}

export default LandingPage;
