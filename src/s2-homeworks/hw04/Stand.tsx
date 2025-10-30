import React, { useState } from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    const handleEnter = () => {
        if (inputValue.trim()) {
            alert(`Input value: ${inputValue}`)
            setError('')
        } else {
            setError('Error: empty input!')
        }
        setInputValue('')
    }

    return (
        <div id="hw4-stand" className={s.stand}>
            <div className={s.inputs}>
                <SuperInputText
                    id="input-basic"
                    value={inputValue}
                    onChangeText={setInputValue}
                    onEnter={handleEnter}
                    error={error}
                />
            </div>

            <div className={s.buttons}>
                <SuperButton onClick={handleEnter}>
                    Check Input
                </SuperButton>

                <SuperButton xType="red" onClick={() => alert('Red button clicked!')}>
                    Red Button
                </SuperButton>

                <SuperButton xType="secondary" disabled>
                    Disabled
                </SuperButton>
            </div>

            <div className={s.checkboxes}>
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
                    Accept terms
                </SuperCheckbox>
                <SuperCheckbox checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />
            </div>
        </div>
    )
}

export default Stand
