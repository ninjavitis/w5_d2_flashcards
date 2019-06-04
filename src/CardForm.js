import React from 'react'
import { Form } from 'semantic-ui-react';

class CardForm extends React.Component {

  state = {name:"", text:""}

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
          fluid
          label="Name"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          >
          </Form.Input>
          <Form.Input
          fluid
          label="Text"
          name="text"
          placeholder="Text"
          value={this.state.text}
          onChange={this.handleChange}
          >
          </Form.Input>
        </Form.Group>
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    )
  }

  handleSubmit = (e) => {
    this.props.add(this.state)
    this.setState({name:"", text:""})
  }

  handleChange = (e, {name,value}) => {
    this.setState({[name]:value})
  }

}

export default CardForm;