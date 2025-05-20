'use client'

import React, { use } from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuSub,
    SidebarMenuSubButton,
} from "../../../@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '../../../@/components/ui/button'
import { Book, LayoutDashboard } from 'lucide-react'
import path from 'path'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import AddNewCourseDialog  from './AddNewCourseDialog'
function AppSideBar() {
    const SideBarOption = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/workspace"
        },
        {
            name: "My Learning",
            icon: Book,
            path: "/workspace/my-learning"
        },
        {
            name: "My Courses",
            icon: Book,
            path: "/workspace/my-courses"
        },
    ]
    const path = usePathname()
    return (
        <Sidebar>
            <SidebarHeader className={'p-4'}>
                <Image src="/logo.svg" alt="Vercel Logo" width={130} height={130} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <AddNewCourseDialog>
                        <Button>Create Course</Button>
                    </AddNewCourseDialog>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                SideBarOption.map((item, index) => (
                                    <SidebarMenuSub key={index}>
                                        <SidebarMenuSubButton asChild className={'p-5'} >
                                            <Link href={item.path} className={`text-[17px] ${path === item.path ? "text-primary bg-primary/10" : ""}`}>
                                                <item.icon className='mr-2' />
                                                {item.name}
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSub>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSideBar