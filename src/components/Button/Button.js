import React from 'react';
import './Button.scss';

const Button = (props) => {
    // Consider adding boxshadow styling and remianing form attributes
    // https://www.w3schools.com/tags/tag_button.asp

    const { btnClass, btnDisabled, btnID, btnType, children, iconName, iconPosition, btnEventHandler } = props;

    const sampleEventHandler = (event) => {
        console.log('From sampleEventHandler: ', event.currentTarget.className);
    };

    return (
            <button
                id={btnID}
                className={btnClass}  
                type={btnType}
                onClick={btnEventHandler ? btnEventHandler : sampleEventHandler}
                disabled={btnDisabled ? 'disabled' : null}
            >   
                {
                    iconName ? 
                        <i className={`icon material-icons${iconPosition?` icon-position-${iconPosition}`:''}`}>
                        {iconName}
                        </i> : 
                        ''
                }
                { children ? <span className="btn__label">{children}</span> : '' }
            </button>
    )

};

export default Button;