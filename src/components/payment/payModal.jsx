import React from "react"
import { Link } from "react-router-dom"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

export default function PaymentModal(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <div className="payment-modal">
<Button onClick={onOpen}>Make Payment</Button>

<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalCloseButton />
    <ModalBody>
        <div className="mod">
            <p className="mod-p">Your payment was sucessful!</p>
        <Link to="/delivery"> <button className="mod-pay">Add delivery Address</button></Link>
        </div>
    </ModalBody>
    
     
   
  </ModalContent>
</Modal>

        </div>
    )
}