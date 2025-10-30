import React, { useState } from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

const Stand = () => {
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const [checked, setChecked] = useState(false)

    const showAlert = () => {
        if (text.trim()) {
            alert(text)
            setText('')
        } else {
            setError('Error')
        }
    }

    const onEnter = () => {
        if (text.trim()) {
            setError('')
        } else {
            setError('Error')
        }
        setText('')
    }

    return (
        <div id="hw4-stand" className={s.stand}>
            <div className={s.inputs}>
                <SuperInputText
                    id="hw4-super-input-like-old"
                    value={text}
                    onChangeText={setText}
                />

                <SuperInputText
                    id="hw4-super-input-with-error"
                    value={text}
                    onChangeText={setText}
                    onEnter={onEnter}
                    error={error}
                />
            </div>

            <div className={s.buttons}>
                <SuperButton id="hw4-super-button-default" xType="default" onClick={showAlert}>
                    default
                </SuperButton>

                <SuperButton id="hw4-super-button-red" xType="red" onClick={showAlert}>
                    red
                </SuperButton>

                <SuperButton id="hw4-super-button-disabled" xType="red" disabled>
                    disabled
                </SuperButton>

                <SuperButton id="hw4-super-button-secondary" xType="secondary" onClick={showAlert}>
                    secondary
                </SuperButton>
            </div>

            <div className={s.checkboxes}>
                <SuperCheckbox
                    id="hw4-super-checkbox-with-text"
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>

                <SuperCheckbox
                    id="hw4-super-checkbox-like-old"
                    checked={checked}
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                />
            </div>
        </div>
    )
}

export default Stand
