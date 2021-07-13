import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '../components/Spinner';
import { Redirect } from 'react-router-dom';

const PrivateRoutes = ({component: Component}) => {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return <Spinner />
  } else if (isAuthenticated) {
    return <Component />
  } else{
    return <Redirect to='/'/>
  }

}
 
export default PrivateRoutes