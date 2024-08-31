// import { useState } from 'react'

import './Dice.css'
import PropTypes from 'prop-types';

function Dice({ number,isHeld ,onHoldToggle}) {

    return (
        <div className="dice"
        style={{ backgroundColor: isHeld ? '#a8d8a8' : '#f0f0f0' }}
        onClick={onHoldToggle}

>
            {number}
        </div>
    )
}

export default Dice
Dice.propTypes = {
    number: PropTypes.number.isRequired,
    isHeld:PropTypes.bool.isRequired,
    onHoldToggle:PropTypes.func.isRequired,
};