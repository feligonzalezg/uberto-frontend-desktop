import { ThemeProvider } from './components/themes/theme-provider.tsx'
import AppRoutes from './routes.tsx'

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App