import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Context } from '../../contexts'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Input from '../../components/Input'

import "./styles.css"

const SignIn = () => {
  const navigate = useNavigate()
  
  const {
    user,
    enterAccount,
    email,
    setEmail,
    password,
    setPassword
  } = Context()

  const handleSignIn = async () => {
    try {
      await enterAccount()
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    if(user) {
      navigate("/album")
    } 
  }, [user])
  
  return (
    <div>
      <Header />

      <div className="page">
        <Form 
          title={"Sign In"}
          name={"Enter"}
          onClick={handleSignIn}
        >
          <Input
            type="email" 
            placeholder='E-mail'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            value={email}
            onChange={event => setEmail(event)}
          />

          <Input
            type="password" 
            placeholder='Password' 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h80V512H0V192H80z"
            value={password}
            onChange={event => setPassword(event)}
          />

          <div className='new-password'>
            <span>Forgot password</span>
          </div>

          <div className='new-account'>
            <span>
              Don't have an account?
            </span>

            <span
              className='link'
              onClick={() => navigate("/signup")}
            >
              Click here!
            </span>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
