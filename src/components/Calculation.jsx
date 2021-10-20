import React from 'react'
import BillInput from './BillInput'
import PeopleInput from './PeopleInput'
import Percentages from './Percentages'

function Calculation(props) {

    return (
        <>
            <div className="calculation">

                <BillInput
                    bill={props.bill}
                    setBill={props.setBill}
                />


                <Percentages
                    onClick={props.onClick}
                />


                <PeopleInput
                    people={props.people}
                    setPeople={props.setPeople}
                />

            </div>
        </>
    )
}

export default Calculation
