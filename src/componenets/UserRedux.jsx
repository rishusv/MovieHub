import { useDispatch, useSelector } from 'react-redux';
import user from '../redux/User/userSlice';
import { useEffect } from 'react';
import fetchUserMiddleware from '../redux/User/middleware';

function UserRedux() {
  const {user, loading, error} = useSelector((state) => state.user);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserMiddleware());
  },[]);

      if (error) {
          return <h1>Something went wrong...</h1>;
      }
  
      if (loading) {
          return <h1>Loading...</h1>;
      }
  
      return (
          <div>
              <h1>User component example</h1>
              <h1>Name : {user.name}</h1>
              <h1>Username : {user.username}</h1>
              <h1>Phone : {user.phone}</h1>
          </div>
      );
  }

export default UserRedux
