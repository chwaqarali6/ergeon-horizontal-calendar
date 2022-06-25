import { FC } from 'react'

import moment, { Moment } from 'moment'

interface Props {
	days: Array<Moment>
	activeDate: Moment
	onClick: (day: Moment) => void
}

const WeekDays: FC<Props> = ({ days, activeDate, onClick }) => {
	const weekDays = days.map((day) => {
		const date = day.get('date')
		const dayShort = day.format('ddd')
		const isToday = moment(0, 'HH').diff(day, 'days') === 0
		const isActive = activeDate?.diff(day, 'days') === 0
		return (
			<div key={date} className={`flex-box week-day ${isToday ? 'today' : isActive ? 'activeDate' : ''}`} onClick={() => onClick(day)}>
				<p className='date'>{date}</p>
				<p className='day'>{dayShort}</p>
			</div>
		)
	})

	return <>{weekDays}</>
}

export default WeekDays
