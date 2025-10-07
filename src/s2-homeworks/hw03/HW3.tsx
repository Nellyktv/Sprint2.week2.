import React, { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'
import { v4 as uuidv4 } from 'uuid'

// Тип пользователя
export type UserType = {
    _id: string
    name: string
}

// Функция для добавления пользователя (совместима с тестами)
export const pureAddUserCallback = (
  name: string,
  setUsers: (users: UserType[]) => void, // ослабленный тип для тестов
  users: UserType[]
) => {
  if (name.trim() === '') return
  const user: UserType = { _id: uuidv4(), name }
  setUsers(users.concat(user))
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
