import "./styles.css"

const Card = ({ item }) => {
  return (
    <article className='card'>
      <div className="card-info">
        <div>
          <span className="icon">
            Name:
          </span>

          <span className="capitalize">{item.name}</span>
        </div>

        <div>
          <span className="icon">
            Email:
          </span>

          <span>{item.email}</span>
        </div>

        <div>
          <span className="icon">
            Phone:
          </span>

          <span>{item.contact}</span>
        </div>
      </div>
    </article>
  )
}

export default Card
