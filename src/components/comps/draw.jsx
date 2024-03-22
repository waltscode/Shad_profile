import * as React from "react"
import {Resume} from './icons'
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
            <Button> 
            <Link to="https://drive.google.com/file/d/1Oa6hJJ4ep3s8sUDCqObCJ2RFkAFFhPjR/view?usp=sharing">Download</Link>
              </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

