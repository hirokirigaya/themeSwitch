import useLocalStorage from 'use-local-storage'
import Container from './components/Container'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }


  return (
    <Container setTheme={setTheme} theme={theme} toggleTheme={toggleTheme}>
      {/* DELETE-ME
      
      Enter your components ex:
      
      <Container setTheme={setTheme} theme={theme} toggleTheme={toggleTheme}>
        <Header>
        <Main>
        <Footer>
      <Container>

      // Set color in global css
      and use var(--color) to apply

      DELETE ME*/}
      
    </Container>
  )
}

export default App
