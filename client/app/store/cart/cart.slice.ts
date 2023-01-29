import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { cart } from '../../components/data/cart.data'
import { IAddToCartPayload, IChangeQuantityPayload, IInitialState } from '../types'

const initialState: IInitialState = {
	items: cart,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<IAddToCartPayload>) => {
			const id = state.items.length
			state.items.push({ ...action.payload, id })
		},

		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter((item) => item.id !== action.payload.id) // подгружаем все элементы кроме данного id
		},

		changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			const {id, type} = action.payload
			const item = state.items.find(item => item.id === id)
			if(item) type === 'plus' ? item.quantity++ : item.quantity--
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
