import { Context } from '../../contexts'

import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
  const { user } = Context()

  if (!user) {
    return <Navigate to='/' />
  }
 
  return children
}

export default Protected