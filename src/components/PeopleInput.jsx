import React from 'react'
import person from "../images/icon-person.svg"


function PeopleInput(props) {
    return (
        <div>
            <div className='cal'>
                <div className='calculation_head'>
                    Number of People
                </div>
                <div className='input_container'>
                    <label>
                        <img src={person} alt="" />
                        <input type="number" value={props.people} onChange={(e) => props.setPeople(e.target.value)} placeholder="0" />
                    </label>
                </div>
            </div>

        </div>
    )
}

export default PeopleInput
