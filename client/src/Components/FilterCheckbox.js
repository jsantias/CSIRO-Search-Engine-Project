import React from 'react'
import {connect} from 'react-redux';

import { fetchResults } from '../actions/index';
import PropTypes from 'prop-types';

import { CheckBoxLabel } from '../StyledComponents/Filterbox'

const CheckBoxUnwrapped = ({name}) => {
    return (
      <div className="field">
        <div className="ui">
          <input type="checkbox"/>
          <CheckBoxLabel>{name}</CheckBoxLabel>
        </div>
      </div>
    )
}

// // PropTypes 
// CheckBoxUnwrapped.propTypes = {
//     // name : checkbox property name
//     // value : checkbox value
//     // isChecked: determine checkbox ischecked or not
//     // OnChange : Function that runs when the checkbox is check / uncheck
//     name: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     isChecked: PropTypes.bool.isRequired,
//     onChange: PropTypes.func.isRequired
// }

const FilterCheckbox = connect(null,{
fetchResults
})(CheckBoxUnwrapped);

export default FilterCheckbox;