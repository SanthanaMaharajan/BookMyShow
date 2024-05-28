import { configureStore } from '@reduxjs/toolkit'
import Reducer from './Components/ticketSlice'
import localforage from 'localforage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage: localforage,
  timeout: null
}


const persistedReducer = persistReducer(persistConfig, Reducer)

export const store = configureStore({
  reducer: {
    mainData:persistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck:false
    }),
})

export const persistor = persistStore(store)
