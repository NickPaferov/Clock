import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

    const [date, setDate] = useState<Date>(new Date())

    const stringDate = date.toLocaleDateString()
    const stringTime = date.toLocaleTimeString()

    useEffect(() => {
        const intervalID = setInterval(() =>
            setDate(new Date()), 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div className="App">
            <div className="date">{stringDate}</div>
            <div className="time">{stringTime}</div>
        </div>
    )
}

export default App;