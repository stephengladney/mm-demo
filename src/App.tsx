import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  )
}

export default App
