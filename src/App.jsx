import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AuthLayout  from './layout/AuthLayout'
import Login from './paginas/publicas/login'
import ForgetPassword from './paginas/publicas/ForgetPassword'
import Dashboard from './paginas/privadas/Dashboard'
import ProtectLayout from './layout/ProtectLayout'
import Clientes from './paginas/privadas/Clientes'
import Projects from './paginas/privadas/Projects'
import Users from './paginas/privadas/Users'

function App() {


   return(
        <BrowserRouter>
            <Routes>
            {/* Rutas publicas */}
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path='ForgetPassword' element={<ForgetPassword/>}></Route>
                </Route>

                <Route path='/admin' element={<ProtectLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path='Clientes' element={<Clientes/>}/>
                    <Route path='Proyectos' element={<Projects/>}/>
                    <Route path='Usuarios' element={<Users/>}/>
                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
