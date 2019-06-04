import React from 'react';
import Cards from './Cards.js'
import CardForm from './CardForm'
import { Container, Header, Segment, Icon, Button} from "semantic-ui-react";


class App extends React.Component{

  state = {
    cards:[
      {id:1, name:"test card 1", text:"test text 1"},
      {id:2, name:"test card 2", text:"test text 2"},
    ],
  }

  // RENDARRR!
  render(){
    return(
      <Container>
        <Segment>
          <CardForm add={this.addCard}/>
          <br />
        </Segment>

        <Segment>
          <Cards 
            cards={this.state.cards}
            remove={this.removeCard}
            />
        </Segment>
      </Container>
    )
  }

  // FUNCTION BLOCK
  addCard = (cardData) => {
    let card = {id:this.getId(), ...cardData}
    this.setState({cards:[...this.state.cards, card]})
  }

  removeCard = (id) => {
    const cards = this.state.cards.filter(card => {
      if (card.id !== id) { return card}
    })
    this.setState({cards},)
  }



  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };
}
export default App;
