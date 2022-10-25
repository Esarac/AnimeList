import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { UserWithId } from '../../models/login'
import userReducer from './userSlice'

//Local storage
const saveToLocalStorage = (state: {actual: UserWithId | null}) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};
//...

const store = configureStore({
    reducer: userReducer,
    preloadedState: loadFromLocalStorage(),
})

store.subscribe(()=>{
    saveToLocalStorage(store.getState());
})

export default store;