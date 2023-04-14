import {configureStore} from '@reduxjs/toolkit';
import Counter from './Counter';
const store = configureStore({
reducer:{data:Counter}
})
export default store;