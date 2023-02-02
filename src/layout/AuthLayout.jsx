import {Outlet} from 'react-router-dom'
const AuthLayout = () => {
  return (
    <>
        <main className='border h-screen flex w-full'>
          <Outlet/>
        </main>
    </>
  )
}

export default AuthLayout