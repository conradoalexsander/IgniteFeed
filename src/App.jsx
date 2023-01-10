import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from "./components/Post"
import { Sidebar } from './components/Sidebar'

import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Conrado Alexsander"
            content="Amet commodo exercitation cupidatat ullamco."
          />
          <Post
            author="John Doe"
            content="Amet commodo exercitation cupidatat ullamco."
          />
        </main>
      </div>
    </div>
  )
}
