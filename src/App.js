import React, { useState } from 'react'
import logo from './images/logo.svg'
import Calculation from './components/Calculation'
import Result from './components/Result'
import './style.css'

function App() {
    const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(1);
    const [result, setResult] = useState(0);
    const [result2, setResult2] = useState(0);

    const onClick = (per) => {
        const div = per / 100;
        const result = (div * bill) / people;
        setResult(result);

        const tot = bill / people;
        const total = tot + result
        setResult2(total);
    }

    const reset = () => {
        setBill(0);
        setResult(0);
        setResult2(0);
        setPeople(1);
    }

    return (
        <>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>

            <div className="container">

                <Calculation
                    bill={bill}
                    setBill={setBill}
                    people={people}
                    setPeople={setPeople}
                    onClick={onClick}
                />

                <Result bill={bill} result={result} result2={result2} reset={reset} />

            </div>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/Glory135">Glory</a>.
            </div>
        </>
    )
}

export default App
