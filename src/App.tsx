import { FC } from 'react'
import './App.css'
import Calendar from 'pages/Calendar'

const App: FC = () => {
	return (
		<div className='app'>
			<h1 className='title'>Ergeon - Horizontal Calendar</h1>
			<Calendar />
		</div>
	)
}

export default App
