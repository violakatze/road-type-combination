import { Routes, Route } from 'react-router-dom'
// import { IntersectionRoutes } from '@/features/intersection'
import { RoadRoutes } from '@/features/road'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<RoadRoutes />} />
    </Routes>
  )
}
