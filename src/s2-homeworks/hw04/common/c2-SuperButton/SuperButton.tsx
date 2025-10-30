import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// наши дополнительные пропсы
type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'red' | 'secondary'
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
    xType,
    className,
    disabled,
    ...restProps
}) => {
    const finalClassName =
        s.button +
        (disabled ? ` ${s.disabled}` : xType === 'red' ? ` ${s.red}` : xType === 'secondary' ? ` ${s.secondary}` : '') +
        (className ? ` ${className}` : '')

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
