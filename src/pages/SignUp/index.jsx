import { useNavigate } from 'react-router-dom'

import { Context } from '../../contexts'

import Header from '../../components/Header'
import MenuItem from '../../components/MenuItem'
import InputField from '../../components/InputField'
import Form from '../../components/Form'

const SignUp = () => {
  const navigate = useNavigate()
  
  const { 
    register,
    name,
    setName,
    contact,
    setContact,
    email,
    setEmail,
    password,
    setPassword
  } = Context()

  const handleSignUp = async () => {
    try {
      await register()
      
    } catch (error) {
      console.log(error)
    }

    setName("")
    setContact("")
    setEmail("")
    setPassword("")
    
    navigate('/album')
  }
  
  return (
    <div>
      <Header />

      <div className="page">
        <Form 
          title={"Sign Up"}
          name={"Register"}
          onClick={handleSignUp}
        >
          <InputField 
            type="text" 
            textLabel="Name" 
            placeholder="Name"
            onChange={event => setName(event)}
            value={name}
          />

          <InputField 
            type="tel" 
            textLabel="Phone"
            placeholder='Phone'
            onChange={event => setContact(event)}
            value={contact}
          />

          <InputField 
            type="email" 
            textLabel="Email*"
            placeholder='Email' 
            onChange={event => setEmail(event)}
            value={email}
          /> 

          <InputField 
            type="password" 
            textLabel="Password*"
            placeholder='Password' 
            onChange={event => setPassword(event)}
            value={password}
          />           
        </Form>
      </div>
    </div>
  )
}

export default SignUp
