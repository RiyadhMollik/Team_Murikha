import React from 'react'
import WorkSpaceProvider from './provider'
function WorkSpaceLayout({ children }) {
    return (
        <WorkSpaceProvider>
            <div>{children}</div>
        </WorkSpaceProvider>


    )
}

export default WorkSpaceLayout