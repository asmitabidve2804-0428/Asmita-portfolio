import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HashRedirect from './components/layout/HashRedirect'
import Layout from './components/layout/Layout'
import { Home } from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* One scrollable page on the web; sections stay in separate files */}
          <Route index element={<Home />} />
          {/* Path shortcuts still open the matching section on the single page */}
          <Route path=":section" element={<HashRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
