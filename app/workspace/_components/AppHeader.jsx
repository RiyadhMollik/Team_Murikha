import { SidebarTrigger } from '../../../@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function AppHeader({hideSidebar=false}) {
    return (
        <div className='flex items-center justify-between p-4 border-b shadow'>
            {!hideSidebar && <SidebarTrigger/>}
            <UserButton/>
        </div>
    )
}

export default AppHeader