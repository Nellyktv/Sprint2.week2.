import React, { ChangeEvent, KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: React.ReactNode
    spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = ({
    type,
    onChange,
    onChangeText,
    onKeyDown,
    onEnter,
    error,
    className,
    id,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
        onChangeText?.(e.currentTarget.value)
    }

    const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(e)
        if (e.key === 'Enter') {
            onEnter?.()
        }
    }

    const finalInputClassName = `${s.input} ${error ? s.errorInput : s.superInput}`

    

    return (
        <div className={s.inputWrapper}>
            <input
                id={id}
                type={type || 'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyDownCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error && (
                <span id={id ? `${id}-span` : undefined} className={s.error}>
                    {error}
                </span>
            )}
        </div>
    )
}

export default SuperInputText
