import { useEffect } from 'react'

import { Context } from '../../contexts'

import { auth, db } from '../../services/firebase'

import { onAuthStateChanged } from "firebase/auth"

import { 
  collection,
  onSnapshot, 
} from 'firebase/firestore'

import Header from '../../components/Header'
import Sticker from "../../components/Sticker"

import "./styles.css"

const FindStickers = () => {  
  const { 
    stickers,
    setStickers,

    text, 
    setText,

    originalData,
    setOriginalData
  } = Context()

  useEffect(() => {
    onAuthStateChanged(auth, (userId) => {
      if (userId) {
        const stickersRef = collection(db, 'stickers-on-sales')

        onSnapshot(stickersRef, (snapshot) => {
          setStickers(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }) 

        onSnapshot(stickersRef, (snapshot) => {
          setOriginalData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }) 
      }
    });

  }, [])

  const search = (s) => {
    let arr = JSON.parse(JSON.stringify(originalData))

    setStickers(arr.filter((value) => value.code.includes(s.toLowerCase())))
    setText(s)
  }

  return (
    <div>
      <Header />

      <div className="page">
        <div className='container'> 
          <div className='input-search'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
              </svg>
            </div>

            <input
              type="search" 
              placeholder="Filter by code"
              value={text} 
              onChange={(s) => search(s.target.value)} 
            />
          </div>
        </div>
        
        {
          stickers[stickers.length - 1] ?
          (
            <>
              {stickers.map((item) => {
                return (          
                  <Sticker
                    key={item.id}
                    item={item}
                  />
                )
              })}
            </>
          )
          :
          (
            <div className='userLoading'>
              <h2 className='loader'></h2>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FindStickers
