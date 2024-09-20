import { useFetchData } from './Hooks/useFetchData';

export const UserList = ({ endPoint }) => {

  const { data, isLoading } = useFetchData(endPoint); 

  return (
    <>
      <ul>
        {isLoading ? <p>Loading...</p> 
        : endPoint == 'users' 
          ? data.map( item =>
          <li key={item.id}>
            Name: {item.name}, Email: {item.email}
          </li>) :
            data.map( item =>
          <li key={item.id}>
            {item.body}
          </li>)
        }
      </ul>
    </>
  );
}


