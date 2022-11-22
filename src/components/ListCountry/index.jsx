import Player from "../Player"

import "./styles.css"

const ListCountry = ({ emoji, country, data, CallData, callUpdate }) => {
  return (
    <section className='stickers-album-container'>
      <div className="flag">
        <span>{emoji}</span>
        <h2>{country}</h2>
      </div>
     
      <div className='scroll-snap'>
        {data.map((item) => {
          return (      
            <Player 
              key={item.index}
              item={item}
              onClick={() => callUpdate(item)}
            >
              <button
                type="button"
                className="button"
                onClick={() => CallData(item)}
              >
                Sell
              </button>
            </Player>
          )
        })} 
      </div>
    </section>
  )
}

export default ListCountry
