import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

export const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className,
}) => {
	return (
		<h1
			className={cn(
				'font-black text-green text-6xl w-1/2 ml-auto leading-tight',
				className
			)}
		>
			{children}
		</h1>
	)
}
