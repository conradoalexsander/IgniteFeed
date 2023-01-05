import { Header } from './components/Header'
import "./global.css"
import { Post } from './Post'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Conrado Alexsander"
        content="Amet commodo exercitation cupidatat ullamco."
      />
      <Post
        author="John Doe"
        content="Amet commodo exercitation cupidatat ullamco."
      />
    </div>
  )
}
