import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/Movie/movieSlice';
import UserSlice from '../features/User/UserSlice';
import UserReducer from '../features/User/UserSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: UserSlice
  },
});
