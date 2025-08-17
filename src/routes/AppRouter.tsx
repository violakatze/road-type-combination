import { Routes, Route } from 'react-router-dom'
import { RoadRoutes } from '@/features/road'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<RoadRoutes />} />
    </Routes>
  )
}
