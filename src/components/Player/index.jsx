import { Context } from "../../contexts"

import "./styles.css"

const Player = ({ item, onClick, children }) => {
  const { 
    setIsActivated
  } = Context()

  const setToFalse = () => {
    onClick(item)

    setIsActivated(false)
  }

  const setToTrue = () => {
    onClick(item)

    setIsActivated(true)
  }
  
  return (
    <article className={item.status ? "card-player" : "hidden"}>
      <button 
        type="button" 
        className="content" 
        onClick={item.status ? setToFalse : setToTrue}
      >
        <div className="flex-items">
          <div>
            <span className="code">{item.code}</span>
          </div>

          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>
          </div>
        </div>
      </button>
      {children}
    </article>
  )
}

export default Player
