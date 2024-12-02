
import "./character-cards.css"



export const CharacterTableRow = ({ data: el, index }) => {

  return (
    <>
      <tr className={index % 2 === 0 ? 'dark' : 'light'}>
        <td>{el.name}</td>
        <td>{el.skillset}</td>
        <td>{el.votes}</td>
      </tr>
    </>
  )
}
