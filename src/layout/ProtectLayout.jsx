import {Outlet} from 'react-router-dom'
import SideBar from '../components/SideBar'
const ProtectLayout = () => {
  return (
    <> 
        <SideBar/>
        <main className='w-full flex flex-row items-center'>
          <Outlet/>
        </main>
    </>
  )
}

export default ProtectLayout