import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {Link} from "react-router-dom";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white',fontFamily:"Roboto Slab"}} to="/">MY PORTFOLIO</Link>} scroll>
                    <Navigation style={{fontFamily:"Roboto Slab"}}>
                        <Link to="/resume">Resume</Link>
                       
                        <Link to="/projects">Projects</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer style={{backgroundColor:"#3495D6"}} title={<Link style={{textDecoration: 'none', color: 'White', fontFamily:"Roboto Slab" }} to="/">MY PORTFOLIO</Link>}>
                    <Navigation style={{fontFamily:"Roboto Slab" }}>
                        <Link to="/resume">Education</Link>
                        <Link to="/resume">Experience</Link>
                        <Link to="/resume">Skills</Link>
                        
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
</div>
    );
  }
}

export default App;
