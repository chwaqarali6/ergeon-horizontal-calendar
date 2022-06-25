import { FC, useState } from 'react'
import moment, { Moment } from 'moment'

import Navigation from 'components/Navigation'
import WeekDays from 'components/WeekDays'

import { useCalendarControls } from 'hooks/useCalendarControls'

const Calendar: FC = () => {
	const [activeDate, setActiveDate] = useState<Moment>(moment().startOf('day'))
	const calendar = useCalendarControls()

	return (
		<>
			<p className='week-month'>
				{calendar?.value?.[0]?.format('DD-MMM-YYYY')} to {calendar?.value?.[calendar?.value?.length - 1]?.format('DD-MMM-YYYY')}
			</p>
			<div className='calendar flex-row overflow-scroll'>
				<Navigation icon='#Left' onClick={calendar.previous} />
				<WeekDays days={calendar?.value} activeDate={activeDate} onClick={(day: Moment) => setActiveDate(day)} />
				<Navigation icon='#Right' onClick={calendar.next} />
			</div>
			<div className='custom-date flex-box '>
				<p>Day Display</p>
				<p>{activeDate?.format('DD-MM-YYYY')}</p>
			</div>
		</>
	)
}

export default Calendar
