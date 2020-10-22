import React from 'react';
import './Button.css'

const Styles = [
    'btn--primary',
    'btn--outline'
]

const Size = [
    'btn-medium',
    'btn-large',
    'btn-small'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0]

    const checkButtonSize = Size.includes(buttonStyle) ? buttonSize:Size[0]

    return(
        <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}  onClick={onClick} type={type}>
            {children}
        </button>
    )
}