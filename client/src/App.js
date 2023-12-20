import './App.css'
import PostForm from './components/Form'
import Header from './components/Header'
import Users from './components/Users/List'
import Welcome from './components/Welcome'

function App () {
  const scrollToSection = event => {
    const sectionName = event.target.getAttribute('data-destination');
    const section = document.getElementById(sectionName)
    section.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <Header scrollToSection={scrollToSection}/>
      <Welcome scrollToSection={scrollToSection}/>
      <Users />
      <PostForm />
    </>
  )
}

export default App
