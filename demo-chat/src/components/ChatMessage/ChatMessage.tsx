// import styles from "./ChatMessage.module.scss";
// import { IChatMessage } from "../../types/Chat";
//
// function ChatMessage({ text, isMe }: IChatMessage) {
//     return (
//         <div className={isMe ? styles.reqAi : styles.resAi}>
//             <p>{text}</p>
//         </div>
//     )
// }
//
// export default ChatMessage;


import styles from "./ChatMessage.module.scss";
import { IChatMessage } from "../../types/Chat";

// Функция для форматирования сообщения
function formatMessage(text: string) {
    return (
        <>
            {text.split('\n').map((paragraph, index) => {
                // Определяем элементы списка
                if (paragraph.startsWith('-')) {
                    return (
                        <ul key={index} style={{ paddingLeft: '20px', margin: '10px 0' }}>
                            {paragraph.split('- ').map((item, idx) =>
                                item ? <li key={idx} style={{ margin: '5px 0' }}>{item}</li> : null
                            )}
                        </ul>
                    );
                }

                // Проверяем и добавляем заголовки
                if (paragraph.includes('**')) {
                    const boldParts = paragraph.split('**').map((part, idx) =>
                        idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
                    );
                    return <p key={index} style={{ margin: '10px 0' }}>{boldParts}</p>;
                }

                // Обычные абзацы
                return <p key={index} style={{ margin: '10px 0' }}>{paragraph}</p>;
            })}
        </>
    );
}

// Компонент ChatMessage
function ChatMessage({ text, isMe }: IChatMessage) {
    return (
        <div className={isMe ? styles.reqAi : styles.resAi}>
            {formatMessage(text)}
        </div>
    );
}

export default ChatMessage;


