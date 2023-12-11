import "./App.css";
import { characters } from "./Anime Characters";

function App() {
  return (
    <div className="mainBody">
      <div className="topHeader">
        <h1 className="header">Anime Characters</h1>
        <input placeholder="Search a Marvel Character" className="topInput" />
      </div>
      <div className="cardBody">
        {characters.map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img className="avatarImage" src={data.img1} alt={data.alias} />
              <h2>{data.alias}</h2>
              <p className="description">
                {data?.abilities[0]}
                <br />
                {data?.abilities[1]}
                <br />
                {data?.abilities[2]}
              </p>
              <div className="avatarInfo">
                <div className="price">
                  <p>{data.anime}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  <p>Home: {data.homeworld}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
