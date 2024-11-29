
import "./character-cards.css"



export const CharacterTableContents = ({data}) => {
  // dataCopyForTable makes a copy of "data" instead of modifying the original data
  const dataCopyForTable = data.slice().sort((a, b) => b.votes - a.votes)
  return (
    <>
      {dataCopyForTable.slice(0, 5).map((el, index) => (
          <tr key={el.name} className={index % 2 === 0 ? 'dark' : 'light'}>
            <td key={el.name}>{el.name}</td>
            <td key={el.skillset}>{el.skillset}</td>
            <td key={el.votes}>{el.votes}</td>
          </tr>
          ))}
    </>
  )
}
