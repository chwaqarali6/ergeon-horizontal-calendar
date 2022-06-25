import { useState, useMemo } from 'react'
import moment, { Moment } from 'moment'

interface Props {
	value: Moment[]
	previous: () => void
	next: () => void
}

export const useCalendarControls = (): Props => {
	const [week, setWeek] = useState<number>(moment().isoWeek())
	const [year, setYear] = useState<number>(moment().year())

	const updateWeek = (offset: number) => {
		let updatedWeek = week + offset
		let updatedYear = year

		if (updatedWeek < 1) {
			updatedWeek = 52
			updatedYear = updatedYear - 1
		} else if (updatedWeek > 52) {
			updatedWeek = 1
			updatedYear = updatedYear + 1
		}

		// console.log(updatedWeek, updatedYear)
		setWeek(updatedWeek)
		setYear(updatedYear)
	}

	const days = useMemo(() => [1, 2, 3, 4, 5, 6, 7].map((d) => moment(year + '-' + week + '-' + d, 'GGGG-W-E')) || [], [week, year])

	return {
		value: days,
		previous: () => updateWeek(-1),
		next: () => updateWeek(1),
	}
}
