import { useState, useEffect } from "react"

import { useContext, createContext } from "react"

import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { 
  doc, 
  addDoc, 
  setDoc,
  updateDoc,
  collection,
} from 'firebase/firestore'

import { auth, db } from "../services/firebase"

import albumList from '../data.json'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [users, setUsers] = useState([])
  const [stickers, setStickers] = useState([])
  const [players, setPlayers] = useState([])
  const [dataFirestore, setDataFirestore] = useState([])
  const [dataList, setDataList] = useState([])
  const [originalData, setOriginalData] = useState([])

  const [text, setText] = useState("")

  const [code, setCode] = useState("")
  const [price, setPrice] = useState("")
  const [phone, setPhone] = useState([])
  const [userContact, setUserContact] = useState("")

  const [menu, setMenu] = useState()
  const [menux, setMenux] = useState()

  const [isActivated, setIsActivated] = useState()
  const [itemSelected, setItemSelected] = useState()
  const [itemUpdated, setItemUpdated] = useState()

  const register = async () => {
    if (email.trim() === "" || password.trim() === "") {
      return alert('Required fields are missing!')
    }

    try {
      const res = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password,
      )

      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        name,
        contact,
        email,
      })
    } catch (error) {
      console.log(error)
    }

    album()
  }

  const album = async () => {
    onAuthStateChanged(auth, (userId) => {
      const uid = userId?.uid;

      if (userId) {
        try {
          albumList.map(async (item) => {
            const emoji = item.emoji
            const country = item.country
            const index = item.index
            const code = item.code
            const status = item.status
    
            const docRef = await addDoc(collection(db, "users/"+uid+"/album"), {
              emoji,
              country,
              index,
              code,
              status
            });
          })
        } catch (error) {
          console.log(error)
        }
      }
    })
  }
  
  const enterAccount = async () => {
    if (email.trim() === "" || password.trim() === "") {
      return alert('Fields missing!')
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() =>  {
      setEmail("")
      setPassword("")
    })
    .catch((error) => alert(error.message));
  }

  const logOut = async () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      alert(error)
    });
  }

  const getItem = async (item) => {
    setItemUpdated(item)
  }

  const updateSticker  = async () => {
    if (!itemUpdated) {
      return
    }

    const documentId = itemUpdated.id

    const docRef = doc(db, 'users/'+user.uid+'/album/', documentId);
    await updateDoc(docRef, {
      status: isActivated
    });
  }

  const stiker = async () => {
    if (price.trim() === "") {
      return alert('The required field is missing!')
    }

    const code = itemSelected
    const value = price

    try {
      const docRef = await addDoc(collection(db, "stickers-on-sales"), {
        userId: user.uid,
        contact: userContact,
        code,
        value,
      })
    } catch (error) {
      console.log(error)
    }
  
    setCode("")
    setPrice("")
    setMenux(!menux)
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AppContext.Provider 
      value={{
        register,
        enterAccount, 
        logOut,
        users, 
        setUsers,

        stiker,
        stickers,
        setStickers,
        code,
        setCode,
        price,
        setPrice,

        dataFirestore, 
        setDataFirestore,
        dataList,
        setDataList,

        players, 
        setPlayers,

        menu, 
        setMenu,

        user,
        name,
        setName,
        contact,
        setContact,
        email,
        setEmail,
        password,
        setPassword,

        text, 
        setText,

        phone, 
        setPhone,
        userContact, 
        setUserContact,

        originalData, 
        setOriginalData,

        menux, 
        setMenux,

        getItem,
        updateSticker,

        isActivated, 
        setIsActivated,

        itemSelected, 
        setItemSelected,
        itemUpdated,
        setItemUpdated
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const Context = () => {
  return useContext(AppContext)
}
