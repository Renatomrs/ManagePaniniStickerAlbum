import React from "react"

import {
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

import Protected from "./components/Protected"

import User from "./pages/User"
import FindStickers from "./pages/FindStickers"
import MyStickers from "./pages/MyStickers"
import AlbumList from "./pages/AlbumList"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Protected><User /></Protected>} />
      <Route path="/find-stickers" element={<Protected><FindStickers /></Protected>} />
      <Route path="/my-stickers" element={<Protected><MyStickers /></Protected>} />
      <Route path="/album" element={<Protected><AlbumList /></Protected>} />
      <Route path="*" element={<h1>Not found!</h1>} />
    </Routes>
  )
}

export default AppRoutes
