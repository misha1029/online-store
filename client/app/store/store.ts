import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { getDefaultSettings } from 'http2'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { carouselReducer } from './carousel/carousel.slice'

import { cartReducer } from './cart/cart.slice'

const persistConfig = {
	key: 'online-store',
	storage,
	whitelist: ['cart']
}



const rootReducer = combineReducers({
	cart: cartReducer,
	carousel: carouselReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store)


export type TypeRootState = ReturnType<typeof store.getState>
