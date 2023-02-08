import { Spinner } from '@chakra-ui/react'
import React from 'react'

import { COLORS } from '../../../config/color.config'

export const Loader = () => {
	return (
		<Spinner
			thickness="4px"
			speed="1s"
			emptyColor="gray.200"
			color={COLORS.green}
			size="xl"
            display='block'
            className='mx-auto'
            marginTop={20}
		/>
	)
}
