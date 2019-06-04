import React from 'react';
import Card from './Card';
import {Table,} from 'semantic-ui-react';

const Cards = ({cards, front, flipCard, remove, }) => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Card</Table.HeaderCell>
          <Table.HeaderCell>Interactions</Table.HeaderCell>
        </Table.Row>

      </Table.Header>

      <Table.Body>
        { cards.map(card => ( <Card key={card.id} {...card} front={front} flipCard={flipCard} remove={remove}/> )) } 
      </Table.Body>
    </Table>
)

export default Cards;