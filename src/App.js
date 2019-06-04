import React from 'react';
import Cards from './Cards'
import { Container, Header, Segment, Icon, Button} from "semantic-ui-react";


class App extends React.Component{

  state = {
    cards:[
      {id:1, name:"test card 1", text:"test text 1"},
      {id:2, name:"test card 2", text:"test text 2"},
    ],
    front: true,
  }

  // RENDARRR!
  render(){
    return(
      <Container>
        <Segment>
          {/* <CardForm></CardForm> */}
          <br />
        </Segment>

        <Segment>
          <Cards 
            cards={this.state.cards} 
            front={this.state.front}
            flipCard={this.flipCard} 
            remove={this.removeCard}
            />
        </Segment>
      </Container>
    )
  }

  // FUNCTION BLOCK
  addCard = () => {}

  removeCard = () => {}

  flipCard = () => {
    this.setState({front: !this.state.front})
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };
}
export default App;
