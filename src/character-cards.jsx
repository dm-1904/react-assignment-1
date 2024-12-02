import './character-cards.css'
import { Component } from 'react'
import { CharacterCard } from './character-cards-content'



export class ClassCharacterCards extends Component {


  render() {
    const { data } = this.props
    return (
      <section id="character-cards">
        {data.map((el) => (
        <CharacterCard key={el.name} cardData={el} />
        ))}
      </section>
    )
  }
}
