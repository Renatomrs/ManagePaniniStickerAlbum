import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Context } from '../../contexts'

import { auth, db } from '../../services/firebase'

import { onAuthStateChanged } from "firebase/auth"

import { 
  collection,
  onSnapshot, 
  query, 
  where,
} from 'firebase/firestore'

import Header from '../../components/Header'
import Sticker from "../../components/Sticker"

import "./styles.css"

const MyStickers = () => {
  const navigate = useNavigate()

  const { 
    stickers,
    setStickers,
  } = Context()

  useEffect(() => {
    onAuthStateChanged(auth, (userId) => {
      const uid = userId?.uid;

      if (userId) {
        const stickersRef = collection(db, "stickers-on-sales")

        const stickerId = query(stickersRef, where('userId', '==', uid))

        onSnapshot(stickerId, (snapshot) => {
          setStickers(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        })    
      }
    });
  }, [])

  return (
    <div>
      <Header />
        
      <div className="page">
        {
          stickers[stickers.length - 1] ?
          (
            <>
              {stickers.map((item) => {
                return (          
                  <Sticker
                    item={item}
                    key={item.id}
                  >
                  </Sticker>
                )
              })}
            </>
          )
          :
          (
            <div className='userLoading'>
              <h2>No sticker yet!</h2>
            </div>
          )
        }
    
        <section className='add'>
          <button 
            type='button'
            className='button-call-form'
            onClick={() => navigate('/album')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
            </svg>
          </button>
        </section>
      </div>
    </div>
  )
}

export default MyStickers
