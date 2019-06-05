import React from 'react';
import {Table, Icon, Button,} from "semantic-ui-react" 

class Card extends React.Component {
  state ={front:true}

  render(){
    return(
      <Table.Row>
        <Table.Cell><Icon name="warning sign" color="yellow" centered/></Table.Cell>
        <Table.Cell> { this.state.front? this.props.name : this.props.text }</Table.Cell>
        <Table.Cell>
          <Button className="ui button" icon color="blue" onClick={() => this.flipCard()}>
            <Icon name="arrows alternate horizontal"/>
            </Button>
          <Button className="ui button" color="grey" icon>
            <Icon name="pencil"/>
            </Button>
          <Button className="ui button" color="red" icon onClick={() => this.props.remove(this.props.id)}>
            <Icon name="trash alternate"/>
            </Button>
        </Table.Cell>
      </Table.Row>
    )
  }

  flipCard = () => {
    this.setState({front: !this.state.front})
  }

}

export default Card;