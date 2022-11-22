import { useNavigate } from 'react-router-dom'

import fifa22 from '../../assets/img/fifa22.jpeg'

import Header from '../../components/Header'

import "./styles.css"

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <Header />

      <div className="page">
        <article>
          <img 
            src={fifa22} 
            alt="Fifa" 
            className='img'
          />
          
          <button
            type='button'
            className='button-fifa'
            onClick={() => navigate("/signin")}
          >
            manage your album now
          </button>
        </article>
      </div>
    </div>
  )
}

export default Home
