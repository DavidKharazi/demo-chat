import styles from "./ChatMessage.module.scss";
import { IChatMessage } from "../../types/Chat";

function ChatMessage({ text, isMe }: IChatMessage) {
    return (
        <div className={isMe ? styles.reqAi : styles.resAi}>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage;