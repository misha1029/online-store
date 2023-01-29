import { ICartItem } from "../components/types/cart.interface";

export interface IInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}