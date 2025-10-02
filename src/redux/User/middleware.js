import userSlice from "./userSlice";
const userActions = userSlice.actions;

const fetchUserMiddleware = () => {

        return async function(dispatch) {
            try{
                dispatch(userActions.userLoading(true));
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const data = await response.json();
                dispatch(userActions.userData(data));
            }
            catch(err){
                dispatch(userActions.userError());
            }
            finally{
                dispatch(userActions.userLoading(false));
            }
        }

    }


export default fetchUserMiddleware;
