 import React from  "react"
 import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    useDisclosure,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    RadioGroup,
    Stack,
    Radio,
    Button,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import AnchorLink from "react-anchor-link-smooth-scroll"


 export default function SideNav(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    return(
        <div className = "ham">
      <Button onClick={onOpen}>
      <img src="images/ham.png" alt="" />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'><img src="images/logo.png" alt="" /></DrawerHeader>
          <DrawerBody > 
            <Link to="#home">Home</Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

        </div>
    )
 }