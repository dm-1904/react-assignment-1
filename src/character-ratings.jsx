// import { data } from '../public/fma-data'
import {CharacterTableContents} from "./character-table-content"
import './character-ratings.css'



export const CharacterTable = ({data}) => {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table className='table'>
        <tr className='tr'>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        <tbody>
          <CharacterTableContents data={data}/>
        </tbody>

      </table>
    </section>
  )
}
