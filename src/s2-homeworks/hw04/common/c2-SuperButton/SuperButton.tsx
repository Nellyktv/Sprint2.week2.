import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'red' | 'secondary' | 'default'
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
    xType,
    className,
    disabled,
    id,
    ...restProps
}) => {
    const finalClassName = `${s.button} ${disabled ? s.disabled : xType ? s[xType] : s.default}`

    return (
        <button
            id={id}
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
