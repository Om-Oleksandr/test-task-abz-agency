import './App.css'
import PostForm from './components/Form'
import Header from './components/Header'
import Users from './components/Users/List'
import Welcome from './components/Welcome'

function App () {
  return (
    <>
      <Header />
      <Welcome />
      <Users />
      <PostForm />
    </>
  )
}

export default App
