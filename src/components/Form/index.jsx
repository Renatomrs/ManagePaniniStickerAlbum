import "./styles.css"

const Form = ({ title, name, onClick, children, childrenTitle, childrenButton }) => {
  return (
    <form className="form">
      <h2 className="title">
        {title}
         
        <span className="childrenTitle">
          {childrenTitle}
        </span>
      </h2>

      {children}

      <button 
        type='button'
        onClick={onClick}
      >
        {name}
      </button>
    </form>
  )
}

export default Form
