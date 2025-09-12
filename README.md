# Clink Robes

A Chakra UI v2 and react-router-dom link for the robes UI library.

## Installation

```bash
npm install clink-robes
```

## Usage

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ClinkRobe } from "clink-robe"
import { RobesProvider } from "robes"

export default function App() {
  return (
    <RobesProvider>
      <BrowserRouter>
        <ClinkRobe to="/">
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/test" element={<>Test</>} />
        </Routes>
      </BrowserRouter>
    </RobesProvider>
  )
}
```
