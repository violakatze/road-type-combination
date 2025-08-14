import { AppProvider } from '@/providers/AppProvider'
import { AppRoutes } from '@/routes/AppRouter'

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
