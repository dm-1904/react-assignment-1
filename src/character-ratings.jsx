import './character-ratings.css'
import "./header.css"
import "./reset.css"
import "./App.css"
import "./character-cards.css"
import "./index.css"



export const CharacterTable = ({data}) => {
  const dataCopyForTable = data.slice().sort((a, b) => b.votes - a.votes)
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
          {dataCopyForTable.slice(0, 5).map((el, index) => (
            <tr key={el.name} className={index % 2 === 0 ? 'dark' : 'light'}>
              <td key={el.name}>{el.name}</td>
              <td key={el.skillset}>{el.skillset}</td>
              <td key={el.votes}>{el.votes}</td>
            </tr>
            ))}
      </table>
    </section>
  )
}
