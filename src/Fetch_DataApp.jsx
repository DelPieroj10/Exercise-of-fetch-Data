import { useState } from 'react'
import { UserList } from './Components/userList';
import './Stylesheet/Style_button.css'

export const FetchDataApp = () => {

  const [endPoint, setEndPoint] = useState('users')
  
  const handleFetch = () => {
    setEndPoint('comments')
  };

  return (
    <>
      <h1>Users List:</h1>
        <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>You can call the API here</button>
    </>
  );
}
