import { useEffect } from 'react'

import { Context } from '../../contexts'

import { auth, db } from '../../services/firebase'

import { onAuthStateChanged } from "firebase/auth"

import { 
  collection, 
  onSnapshot,
  query, 
  where,
} from "firebase/firestore"

import Header from '../../components/Header'
import Form from "../../components/Form"
import InputField from '../../components/InputField'
import ListCountry from '../../components/ListCountry'

import "./styles.css"

const AlbumList = () => {
  const {
    price,
    setPrice,

    dataFirestore, 
    setDataFirestore,
    dataList,
    setDataList,

    menux,
    setMenux,
  
    phone, 
    setPhone,
    setUserContact,

    isActivated,

    getItem,
    updateSticker,

    stiker,

    itemSelected, 
    setItemSelected,
    itemUpdated,
  } = Context()

  dataFirestore.sort((a, b) => {
    if(a.index < b.index) {
      return -1
    } else {
      return true
    }
  })
  
  const dataListCountry = [ 
    {
      id: 1,
      emoji: "\uD83C\uDDF6\uD83C\uDDE6",
      country: "qatar",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "qatar" }),
    },
    {
      id: 2,
      emoji: "\uD83C\uDDEA\uD83C\uDDE8",
      country: "ecuador",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "ecuador" }),
    },
    {
      id: 3,
      emoji: "\uD83C\uDDF8\uD83C\uDDF3",
      country: "senegal",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "senegal" }),
    },
    {
      id: 4,
      emoji: "\uD83C\uDDF3\uD83C\uDDF1",
      country: "netherlands",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "netherlands" }),
    },
    {
      id: 5,
      emoji: "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F",
      country: "england",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "england" }),
    },
    {
      id: 6,
      emoji: "\uD83C\uDDEE\uD83C\uDDF7",
      country: "ir iran",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "ir iran" }),
    },
    {
      id: 7,
      emoji: "\uD83C\uDDFA\uD83C\uDDF2",
      country: "usa",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "usa" }),
    },
    {
      id: 8,
      emoji: "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F",
      country: "wales",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "wales" }),
    },
    {
      id: 9,
      emoji: "\uD83C\uDDE6\uD83C\uDDF7",
      country: "argentina",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "argentina" }),
    },
    {
      id: 10,
      emoji: "\uD83C\uDDF8\uD83C\uDDE6",
      country: "saudi arabia",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "saudi arabia" }),
    },
    {
      id: 11,
      emoji: "\uD83C\uDDF2\uD83C\uDDFD",
      country: "mexico",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "mexico" }),
    },
    {
      id: 12,
      emoji: "\uD83C\uDDF5\uD83C\uDDF1",
      country: "poland",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "poland" }),
    },
    {
      id: 13,
      emoji: "\uD83C\uDDEB\uD83C\uDDF7",
      country: "france",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "france" }),
    },
    {
      id: 14,
      emoji: "\uD83C\uDDE6\uD83C\uDDFA",
      country: "australia",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "australia" }),
    },
    {
      id: 15,
      emoji: "\uD83C\uDDE9\uD83C\uDDF0",
      country: "denmark",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "denmark" }),
    },
    {
      id: 16,
      emoji: "\uD83C\uDDF9\uD83C\uDDF3",
      country: "tunisia",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "tunisia" }),
    },
    {
      id: 17,
      emoji: "\uD83C\uDDEA\uD83C\uDDF8",
      country: "spain",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "spain" }),
    },
    {
      id: 18,
      emoji: "\uD83C\uDDE8\uD83C\uDDF7",
      country: "costa rica",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "costa rica" }),
    },
    {
      id: 19,
      emoji: "\uD83C\uDDE9\uD83C\uDDEA",
      country: "germany",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "germany" }),
    },
    {
      id: 20,
      emoji: "\uD83C\uDDEF\uD83C\uDDF5",
      country: "japan",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "japan" }),
    },
    {
      id: 21,
      emoji: "\uD83C\uDDE7\uD83C\uDDEA",
      country: "belgium",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "belgium" }),
    },
    {
      id: 22,
      emoji: "\uD83C\uDDE8\uD83C\uDDE6",
      country: "canada",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "canada" }),
    },
    {
      id: 23,
      emoji: "\uD83C\uDDF2\uD83C\uDDE6",
      country: "morocco",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "morocco" }),
    },
    {
      id: 24,
      emoji: "\uD83C\uDDED\uD83C\uDDF7",
      country: "croatia",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "croatia" }),
    },
    {
      id: 25,
      emoji: "\uD83C\uDDE7\uD83C\uDDF7",
      country: "brazil",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "brazil" }),
    },
    {
      id: 26,
      emoji: "\uD83C\uDDF7\uD83C\uDDF8",
      country: "serbia",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "serbia" }),
    },
    {
      id: 27,
      emoji: "\uD83C\uDDE8\uD83C\uDDED",
      country: "switzerland",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "switzerland" }),
    },
    {
      id: 28,
      emoji: "\uD83C\uDDE8\uD83C\uDDF2",
      country: "cameroon",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "cameroon" }),
    },
    {
      id: 29,
      emoji: "\uD83C\uDDF5\uD83C\uDDF9",
      country: "portugal",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "portugal" }),
    },
    {
      id: 30,
      emoji: "\uD83C\uDDEC\uD83C\uDDED",
      country: "ghana",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "ghana" }),
    },
    {
      id: 31,
      emoji: "\uD83C\uDDFA\uD83C\uDDFE",
      country: "uruguay",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "uruguay" }),
    },
    {
      id: 32,
      emoji: "\uD83C\uDDF0\uD83C\uDDF7",
      country: "korea republic",
      dataFirestore: dataFirestore.filter((value) => { return value.country === "korea republic" }),
    },
  ]

  useEffect(() => {
    setDataList(dataListCountry)
  }, [dataFirestore])
  
  useEffect(() => {
    onAuthStateChanged(auth, (userId) => {
      const uid = userId?.uid;

      if (userId) {
        const userRef = collection(db, 'users')
        const albumRef = collection(db, 'users/'+uid+'/album')

        onSnapshot(albumRef, (snapshot) => {
          setDataFirestore(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        })  

        const userNuber = query(userRef, where('id', '==', uid))

        onSnapshot(userNuber, (snapshot) => {
          setPhone(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        })  
      }
    });
  }, [])
  
  useEffect(() => {
    updateItem()
  }, [isActivated, itemUpdated])
  
  const handleUpdate = async (item) => {
    try {
      await getItem(item)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  const updateItem = async () => {
    try {
      await updateSticker()
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetStickerData = (item) => {
    setItemSelected(item.code)

    phone.forEach((data) => {
      const contact = data.contact

      setUserContact(contact)
    })

    setMenux(!menux)
  }   

  const handleSellStick = async () => {
    try {
      await stiker()
      
    } catch (error) {
      console.log(error)
    }
  }  
  
  return (
    <div>
      <Header />
 
      <div className="page">
        <section className={(!menux ? "hidden" : "") + "above"}>
          <Form
            title={"Sell Sticker"}
            childrenTitle={itemSelected ? `( ${itemSelected} )` : ""}
            name={"Save"}
            onClick={() => handleSellStick()}
          >
            <button 
              type='button'
              className='button'
              onClick={() =>  setMenux(!menux)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
              </svg>
            </button>

            <InputField 
              type="text" 
              textLabel="Price*"
              placeholder='Price'
              onChange={event => setPrice(event)}
              value={price}
            />
          </Form>
        </section>

        {
          dataFirestore[dataFirestore.length - 1] ?
          (
            <>
              {dataList.map((item) => {
                return (      
                  <ListCountry
                    key={item.id}
                    emoji={item.emoji}
                    country={item.country}
                    data={item.dataFirestore}
                    callUpdate={handleUpdate}
                    CallData={handleGetStickerData}
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

export default AlbumList
