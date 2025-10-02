import {createSlice} from '@reduxjs/toolkit';



// const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user : null,
        loading : true,
        error : false
    },
    reducers: {
        userLoading : (state, action) => {
            state.loading = action.payload;
            state.error = false;
        },

        userError : (state) => {
            state.error = true;
            state.loading = false;
        },

        userData : (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = false;
        }
    } 
})

export default userSlice;