import { FC } from 'react'

import Sprite from 'assets/Sprite.svg'

interface Props {
	icon: string
	onClick: () => void
}

const Navigation: FC<Props> = ({ icon, onClick }) => {
	return (
		<div className='navigation'>
			<svg className='arrow' onClick={onClick}>
				<use href={Sprite + icon} />
			</svg>
		</div>
	)
}

export default Navigation
