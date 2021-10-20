import React from 'react'
import dollar from '../images/icon-dollar.svg'



function BillInput(props) {

    return (
        <div>
            <div className='cal'>
                <div className='calculation_head'>
                    Bill
                </div>
                <div className='input_container'>
                    <label>
                        <img src={dollar} alt="" />
                        <input
                            type="number"
                            value={props.bill}
                            onChange={(e) => props.setBill(e.target.value)}
                            placeholder="0.00"
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default BillInput
