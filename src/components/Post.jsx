import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";



export function Post({ id, author, content, publishedAt }) {

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        {
            locale: ptBR,
        },
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === "paragraph") {
                        return <p>{item.content}</p>
                    }

                    if (item.type === "link") {
                        return (<p>
                            <a href="">{item.content}</a>
                        </p>);
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentsList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>)
}
