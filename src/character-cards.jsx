import './character-cards.css'
import { Component } from 'react'
import { CharacterCardsContent } from './character-cards-content'



export class ClassCharacterCards extends Component {


  render() {

    return (
      <section id="character-cards">
        <CharacterCardsContent data={this.props.data}/>
      </section>
    )
  }
}
