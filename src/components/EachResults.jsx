import React from 'react'
import dollar from '../images/icon-dollar -2.svg'


function EachResults(props) {
    return (
        <div>
            <div className='result-text'>
                <div className="result-con">
                    <span className='result_head'>
                        {props.text}
                    </span>
                    <br />
                    <span className="per"> / person</span>
                </div>

                <div className="result-number">
                    <img width='13px' src={dollar} alt="" />
                    {props.result.toFixed(2)}
                </div>
            </div>

        </div>
    )
}

export default EachResults
