import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { carouselActions } from '../store/carousel/carousel.slice'

import { cartActions } from '../store/cart/cart.slice'

const rootActions = {
	...cartActions,
	...carouselActions
}

const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
