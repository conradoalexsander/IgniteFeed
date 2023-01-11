import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/53683786?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Conrado</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13" dateTime="2023-01-10 09:20">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala pessoal 👋</p>
                <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>
                <p>Acesse e deixe seu feedback </p>
                <p>👉{" "}<a href="">devonlane.design</a></p>
                <p>
                    <a href="">#uiux </a> {' '}
                    <a href="">#userexperience</a>{' '}
                </p>
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
