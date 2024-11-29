
import { Component } from "react";



export class CharacterCardsContent extends Component {

  render() {

    return (
      <>
       {this.props.data.map((el) => (
          <div key={el.name} className='card'>
            <div key={el.name} className='card-titles'>
              <h3 key={el.name}>{el.name}</h3>
              {el.nickName === null ? console.log(`No nickname for ${el.name}`) : <h4 key={el.nickName}>{el.nickName}</h4>}
            </div>
            <img src={el.imageUrl} alt="" />
            <p key={el.background}>{el.background}</p>
          </div>
        ))}
      </>
    )
  }
}
