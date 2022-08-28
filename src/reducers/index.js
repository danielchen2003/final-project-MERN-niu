import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });



// import { configureStore } from '@reduxjs/toolkit'
// // import authReducer from '../features/auth/authSlice'
// import photoReducer from '../features/photo/photoSlice'

// export const store = configureStore({
//   reducer: {
//     // auth: authReducer,
//     photo: photoReducer,
//   },
// })