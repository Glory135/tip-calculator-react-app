import React from 'react'

function Percentages(props) {
    return (

        < div >
            <div className='cal'>
                <div className='calculation_head'>
                    Select Tip %
                </div>

                <div className='percent_container'>
                    <button onClick={() => props.onClick(5)} className="percent"> 5%</button>
                    <button onClick={() => props.onClick(10)} className="percent">10%</button>
                    <button onClick={() => props.onClick(15)} className="percent"> 15%</button>
                    <button onClick={() => props.onClick(25)} className="percent"> 25%</button>
                    <button onClick={() => props.onClick(50)} className="percent"> 50%</button>
                    <input onChange={(e) => props.onClick(e.target.value)} type="number" className="custom_percent" placeholder="Custom" />
                </div>
            </div>
        </div >
    )
}

export default Percentages
