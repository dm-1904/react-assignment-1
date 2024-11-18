import './reset.css'
import './style.css'
import './header.css'
import './character-ratings.css'
import './character-cards.css'

function App() {


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
        <tr className="dark">
          <td>Alfonse Elrich</td>
          <td>Being Loveable, Alchemy</td>
          <td>110</td>
        </tr>
        <tr className="light">
          <td>Edward Elrich  `&aquot;`Full Metal Alchemist`&aquot;`</td>
          <td>Alchemy, Human Transmutation</td>
          <td>100</td>
        </tr>
        <tr className="dark">
          <td>Hawkeye</td>
          <td>Sniper, Loyal AF</td>
          <td>95</td>
        </tr>
        <tr className="light">
          <td>Mj. Armstrong</td>
          <td>Alchemy, Muscles</td>
          <td>94</td>
        </tr>
        <tr className="dark">
          <td>Nina</td>
          <td>Loving Dogs, being adorable</td>
          <td>93</td>
        </tr>
      </table>
    </section>
    <section id="character-cards">
      <div className="card">

        <div className="card-titles">
          <h3>Alex Louis Armstrong</h3>
          <h4>Major Armstrong</h4>
        </div>
        <img
          src="https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg"
          alt=""
        />
        <p>
          Major Armstrong may look big and strong, but deep down he`&apos;`s the
          biggest sap in the entire show
        </p>
      </div>
      <div className="card">
        <div className="card-titles">
          <h3>Alphonse Elrich</h3>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg"
          alt=""
        />
        <p>
          Alphonse is a walking suit of armor on a quest to find his real body
        </p>
      </div>
      <div className="card">
        <div className="card-titles">
          <h3>Edward Elrich</h3>
          <h4>The Fullmetal Alchemist</h4>
        </div>
        <img
          src="https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png"
          alt=""
        />
        <p>
          Edward is a master alchemist and our main character... just don`&apos;`t call
          him short
        </p>
      </div>
      <div className="card">
        <div className="card-titles">
          <h3>Greed</h3>
          <h4>Greed</h4>
        </div>
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/greed-fullmetal-alchemist.jpg"
          alt=""
        />
        <p>
          Greed is one of the seven deadly sins Homunculii. He`&apos;`s the most `&apos;`on
          our side`&apos;` of all of them.
        </p>
      </div>
      <div className="card">
        <div className="card-titles">
          <h3>Nina Tucker</h3>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dK-tXCnVxbSeSJuCKmiX0zUbnCEV1ss54DeOYgXUHSE0WB23TAUD4a3itwFbzJ9fkg&usqp=CAU"
          alt=""
        />
        <p>
          Nina is an adorable little girl! If you`&apos;`ve watched FMA you know...
        </p>
      </div>
      <div className="card">
        <div className="card-titles">
          <h3>Riza Hawkeye</h3>
          <h4>Hawkeye</h4>
        </div>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8171ae7d-9e3c-4aeb-b277-2a8308b0262a/d87573o-e22eb88b-1c20-449c-9093-1e4fba7856f3.png/v1/fill/w_622,h_350,strp/riza_hawkeye___minimalist_vector_wallpaper_by_rebeccaangoo_d87573o-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODE3MWFlN2QtOWUzYy00YWViLWIyNzctMmE4MzA4YjAyNjJhXC9kODc1NzNvLWUyMmViODhiLTFjMjAtNDQ5Yy05MDkzLTFlNGZiYTc4NTZmMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.InNg0JonI4tCcxkN-u8E2z7Z4aqvLLxClcDwujxbTJs"
          alt=""
        />
        <p>
          Hawkeye is Colonel Mustang`&apos;`s loyal assistant, and one of the strongest
          non-alchemist characters in the show
        </p>
      </div>
      <div className="card">
        <div className="card-titles">
          <h3>Solf J. Kimblee</h3>
          <h4>The Crimson Alchemist</h4>
        </div>
        <img
          src="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/03/full-metal-alchemist-mobile-char-2.jpg?resize=640%2C457&ssl=1"
          alt=""
        />
        <p>
          Kimblee suckkkkkssss, seriously he`&apos;`s not very nice
        </p>
      </div>
      <div className="card">
        <div className="card-titles">
          <h3>Tim Marcoh</h3>
          <h4>Dr. Marcoh</h4>
        </div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BYjljMjEzZmUtMjE2My00NWY1LTljMzAtYWNjOTI5Yzk5NmZjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_FMjpg_UX1000_.jpg"
          alt=""
        />
        <p>
          Dr. Marcoh did some F**ked up S**t in the war on ishval, but his
          redemption arc is strong
        </p>
      </div>
      <div className="card">
        <div className="card-titles">
          <h3>Winrey Rockbell</h3>
        </div>
        <img
          src="https://s3.amazonaws.com/comicgeeks/characters/avatars/36066.jpg?t=1668454278"
          alt=""
        />
        <p>
          Winrey is Edward and Al`&apos;`s best friend, and it`&apos;`s a good thing because
          her specialty is making the best automail out there
        </p>
      </div>
    </section>
  </body>
  )
}

export default App
