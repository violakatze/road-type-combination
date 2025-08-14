import { Navigate, Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/components'
import { Page } from './components'

export const RoadRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Page />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
