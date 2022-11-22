import { useEffect } from 'react'

import { Context } from '../../contexts'

import { auth, db } from '../../services/firebase'

import { onAuthStateChanged } from "firebase/auth"

import { 
  collection, 
  onSnapshot, 
  query, 
  where 
} from 'firebase/firestore'

import Header from '../../components/Header'
import Card from '../../components/Card'

import "./styles.css"

const User = () => {
  const { 
    users,
    setUsers,
  } = Context()

  useEffect(() => {
    onAuthStateChanged(auth, (userId) => {
      const uid = userId?.uid;
      
      if (userId) {
        const customersRef = collection(db, 'users')
  
        const customerId = query(customersRef, where('id', '==', uid))
       
        onSnapshot(customerId, (snapshot) => {
          setUsers(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        })   
      }
    });
  }, [])
  
  return (
    <div>
      <Header />

      <div className="page">
        {
          users[users.length - 1] ?
            (
              <>
                <div className='user-status'>
                  <span>Hello, {users.map((item) => { return item.name })}!</span>
                </div>

                <section className='users-container'>
                  {users.map((item) => {
                    return (          
                      <Card
                        key={item.id}
                        item={item}
                      />
                    )
                  })}
                </section>
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

export default User
