import * as React from "react"
import { Resume } from './icons'
import { Link } from "react-router-dom"


import { Button } from "../ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"


export function DrawerDemo() {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Resume</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Would you like to download my resume?</DrawerTitle>
            <DrawerDescription>Click the link below! It will take you to my google docs link.</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <Link to="https://drive.google.com/file/d/1Q0tgpxe_W-XLQsKeSm_uzX04815a4Dj2/view?usp=sharing" target='_blank'>
              <Button className='resume-btn'>Download</Button>
            </Link>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

