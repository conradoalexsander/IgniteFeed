import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";


export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/C4E03AQFkfEWTiK2j2g/profile-displayphoto-shrink_800_800/0/1616686015673?e=1678924800&v=beta&t=cYOvpV8288iwGf3oK01eSsSenX0YXy-mkD8kw9lhjxM" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jamon</strong>
                            <time title="11 de maio às 08:13" dateTime="2023-01-10 09:20">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
