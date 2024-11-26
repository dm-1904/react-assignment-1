import './character-cards.css'
import { Component } from 'react'
import "./header.css"
import "./reset.css"
import "./App.css"
import "./character-cards.css"
import "./index.css"


export class ClassCharacterCards extends Component {


  render() {
    return (
      <section id="character-cards">
        {this.props.data.map((el) => (
          <div key={el.name} className='card'>
            <div key={el.name} className='card-titles'>
              <h3 key={el.name}>{el.name}</h3>
              <h4 key={el.nickName}>{el.nickName}</h4>
            </div>
            <img src={el.imageUrl} alt="" />
            <p key={el.background}>{el.background}</p>
          </div>
        ))}
      </section>
    )
  }
}
