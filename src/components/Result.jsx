import React from 'react'
import EachResults from './EachResults'

function Result(props) {

    const result_text1 = 'Tip Amount'
    const result_text2 = 'Total'

    return (
        <div>
            <div className="result">

                <EachResults result={props.result} text={result_text1} />

                <EachResults result={props.result2} text={result_text2} />


                <div className='reset_container'>
                    <button
                        onClick={props.reset}
                        className={props.bill !== 0 ? "active_reset" : 'inactive_reset'}>
                        RESET
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Result
