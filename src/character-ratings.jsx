import { CharacterTableRow } from "./character-table-content"
import './character-ratings.css'



export const CharacterTable = ({ data }) => {
  const dataCopyForTable = data.toSorted((a, b) => b.votes - a.votes)
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table className='table'>
        <thead>
          <tr className='tr'>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>

        <tbody>
          {dataCopyForTable.slice(0, 5).map((el, index) => (
            <CharacterTableRow key={`row-${index}`} data={el} index={index} />
          ))}
        </tbody>

      </table>
    </section>
  )
}
