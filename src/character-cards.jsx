import './character-cards.css'
import { Component } from 'react'
import { CharacterCardsContent } from './character-cards-content'
import { data } from '../public/fma-data'



export class ClassCharacterCards extends Component {


  render() {

    return (
      <section id="character-cards">
        <CharacterCardsContent data={data}/>
      </section>
    )
  }
}
