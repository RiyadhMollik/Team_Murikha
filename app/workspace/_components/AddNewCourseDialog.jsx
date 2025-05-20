import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../@/components/ui/dialog"
import { Input } from '../../../@/components/ui/input'
import { Textarea } from '../../../@/components/ui/Textarea'
import { Switch } from '../../../@/components/ui/switch'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../@/components/ui/select"
import { Button } from '../../../@/components/ui/button'
import { Sparkle } from 'lucide-react'

function AddNewCourseDialog({ children }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={'text-2xl font-bold text-center'}>Create New Course Using AI</DialogTitle>
                    <DialogDescription asChild>
                        <div className='flex flex-col gap-4 mt-3'>
                            <div className='flex flex-col gap-2'>
                                <label>Course Name</label>
                                <Input placeholder="Enter Course Name" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>Course Description</label>
                                <Textarea placeholder="Enter Course Description" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>number of chapters</label>
                                <Input placeholder="Enter number of chapters" />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label>include video</label>
                                <Switch />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>Deficulty Level</label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Deficulty Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="beginner">Beginner</SelectItem>
                                        <SelectItem value="intermediate">Intermediate</SelectItem>
                                        <SelectItem value="advanced">Advance</SelectItem>
                                    </SelectContent>
                                </Select>

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>Category</label>
                                <Input placeholder="Enter Category(sperated by Comma)" />
                            </div>

                            <div>
                                <Button className='flex items-center w-full'> <Sparkle className='mr-2' /> Generate Course</Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default AddNewCourseDialog