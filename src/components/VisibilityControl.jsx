import React from 'react'

const VisibilityControl = props => {
    return (
        <div className="form-chech">
            <input
            type="checkbox"
            className="form-check-input"
            checked={props.isChecked}
            onChange={e => props.callback(e.target.checked)}
            
            />
            <label htmlFor="form-check-label">
                Show { props.description }
            </label>
        </div>
    )
}

export default VisibilityControl
