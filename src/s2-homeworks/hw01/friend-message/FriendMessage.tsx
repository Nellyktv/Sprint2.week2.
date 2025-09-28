import s from './FriendMessage.module.css';

type FrienMessageType = {
    message:{
        id:number;
    }
    
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FrienMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src='https://img.goodfon.ru/wallpaper/big/a/69/kartinka-3d-dikaya-koshka.webp'
                    alt='Аватарка'
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                    Ivan
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        Hello, how are you, what did you do yesterday?
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                08:59
            </div>
        </div>
    )
}

export default FriendMessage
