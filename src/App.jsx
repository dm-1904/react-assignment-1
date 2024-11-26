import { data } from '../public/fma-data'
import { Header } from './header'
import { CharacterTable } from './character-ratings'
import { ClassCharacterCards } from './character-cards'
import "./header.css"
import "./reset.css"
import "./App.css"
import "./character-cards.css"
import "./index.css"



function App() {
  return (

<body>
    <Header/>
    <CharacterTable data={data}/>
    <ClassCharacterCards data={data}/>
  </body>
  )
}

export default App
