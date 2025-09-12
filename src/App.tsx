import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Heading, HStack } from "@chakra-ui/react"
import ClinkRobe from "./ClinkRobe"
import { ColorSwitchRobe, RobesProvider } from "robes"
import ButtonClinkRobe from "./ButtonClinkRobe"
import IconButtonClinkRobe from "./IconButtonClinkRobe"
import { FaLink } from "react-icons/fa"
import IconButtonClinkableRobe from "./IconButtonClinkableRobe"
import { MdDelete } from "react-icons/md"
import ButtonClinkableRobe from "./ButtonClinkableRobe"
import ClinkableRobe from "./ClinkableRobe"

function App() {
  return (
    <RobesProvider>
      <BrowserRouter>
        <ColorSwitchRobe />
        <Heading>Hello World</Heading>
        <HStack>
          <ClinkRobe to="/">Home</ClinkRobe>
          <ClinkableRobe to="/test">Test</ClinkableRobe>
          <ButtonClinkRobe to="/test">Test</ButtonClinkRobe>
          <ButtonClinkableRobe to="/test">Test</ButtonClinkableRobe>
          <IconButtonClinkRobe to="/test" button={{ 'aria-label': "Test", icon: <FaLink /> }} />
          <IconButtonClinkableRobe to="/test" button={{ 'aria-label': "Test", icon: <MdDelete /> }} />
        </HStack>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/test" element={<div>Test</div>} />
        </Routes>
      </BrowserRouter>
    </RobesProvider>
  )
}

export default App
