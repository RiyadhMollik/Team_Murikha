import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='flex intems-center justify-center h-screen'>

      <SignIn />
    </div>
    
  ) 
}
