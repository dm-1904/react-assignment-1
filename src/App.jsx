import './reset.css'
import './style.css'
import './header.css'
import './character-ratings.css'
import './character-cards.css'
import { data } from '../public/fma-data'


function App() {

  const dataSortedByVotes = data.sort((a, b) => {
    if (a.votes < b.votes) {
      return 1
    } else if (a.votes > b.votes) {
      return -1
    } else {
      return 0
    }
  })

  return (

<body>
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        <li>about us</li>
        <li>info</li>
        <li>support us</li>
      </nav>
    </header>
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
          {dataSortedByVotes.slice(0, 5).map((el, index) => (
            <tr key={el.name} className={index % 2 === 0 ? 'dark' : 'light'}>
              <td key={el.name}>{el.name}</td>
              <td key={el.skillset}>{el.skillset}</td>
              <td key={el.votes}>{el.votes}</td>
            </tr>
            ))}
      </table>
    </section>
    <section id="character-cards">
      {dataSortedByVotes.map((el) => (
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
  </body>
  )
}

export default App
