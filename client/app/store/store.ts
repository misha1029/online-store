import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './cart/cart.slice'

const rootReducer = combineReducers({
	cart: cartReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors - если мы перешли на страницу и вернулись обратно
// что бы происходил заново запрос на сервер
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>
