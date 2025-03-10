import { lazy, Suspense } from 'react'
import './App.css'
import ErrorBoundary from './ErrorBoundary'
//import { UserProvider} from './context'
//import { Dashboard } from './dashboard/Dashboard'

// Contenedor = estructura la página
//Obtener la información que se utilizará en sus hijos
const InterceptorExample = lazy(() => import("./components/InterceptorExample/InterceptorExample"))

function App() {

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <InterceptorExample/>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
