import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl"; 

class projects extends Component {

constructor (props){

  super(props);
  this.state ={activeTab :0};
}

toggleCategories(){

  if(this.state.activeTab === 0){
return(
  <div className="projects-grid">
             {/* Project 1 */}
             <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Login Page</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

              {/* Project 2 */}
              <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>CSK</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>


              {/* Project 3 */}
              <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Portfolio</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

</div>

)
} 

else if(this.state.activeTab === 1){
  return(
    <div className="projects-grid">
             {/* Project 1 */}
             <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Login Page</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

              {/* Project 2 */}
              <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>CSK</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>


              {/* Project 3 */}
              <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Portfolio</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

</div>

  )}

else if(this.state.activeTab===2){
    return(
      <div className="projects-grid">
             {/* Project 1 */}
             <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Login Page</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

              {/* Project 2 */}
              <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>CSK</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>


              {/* Project 3 */}
              <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Portfolio</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

</div>

    )
  }
  
  else if(this.state.activeTab === 3){
    return(
      <div className="projects-grid">
             {/* Project 1 */}
             <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Login Page</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

              {/* Project 2 */}
              <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>CSK</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>


              {/* Project 3 */}
              <Card shadow={5} style={{width: '512px', margin: '25px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Portfolio</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

</div>

    )
  }
}



  render() {
    return (
      <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React JS</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>HTML/CSS</Tab>
                </Tabs>
              <Grid>
                  <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                  </Cell>
          </Grid>
        </div>    
    );
  }
}

export default projects;