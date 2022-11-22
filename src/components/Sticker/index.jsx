import "./styles.css"

const Sticker = ({ item }) => {
  return (
    <section className='stickers-container'>
      <article className='card'>
        <div className="card-info">
          <div>
            <span className="icon">
              Sticker Code:
            </span>

            <span className="uppercase">{item.code}</span>
          </div>

          <div>
            <span className="icon">
              Phone:
            </span>

            <span>{item.contact}</span>
          </div>
        </div>

        <div className="price-container">
          <span>Price: {item.value}</span>
        </div>
      </article>
    </section>
  )
}

export default Sticker
