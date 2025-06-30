import {configureStore} from '@reduxjs/toolkit';
import authSlice from './store/authslice';

const store = configureStore({
    reducer: {
        auth : authSlice,
       
    }
});


export default store;