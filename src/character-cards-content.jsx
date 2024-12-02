
import { Component } from "react";



export class CharacterCard extends Component {

  render() {
    const {cardData:el} = this.props
    return (
      <>
        <div className='card'>
          <div className='card-titles'>
            <h3>{el.name}</h3>
            {el.nickName && <h4>{el.nickName}</h4>}
          </div>
          <img src={el.imageUrl} alt="" />
          <p>{el.background}</p>
        </div>
      </>
    )
  }
}
