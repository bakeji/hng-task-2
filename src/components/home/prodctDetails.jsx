
import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    background
  } from '@chakra-ui/react'

export default function ProductDet(props){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen();
        props.handleClick();
      };
    return(
<div className="bg-mod">
<p className="name" onClick={handleClick}>{props.name}</p>

<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalCloseButton />
    <ModalBody>
    <div className="prod-mod">
            <div className="prod-img">
                <img src= {`https://api.timbu.cloud/images/${props.selectedProduct?.photos[0]?.url}`}  alt="bag" />
            </div>
            <div className="prod-info">
                <h2 className="name nm">{props.selectedProduct?.name}</h2>
                <div className="prod-desc">
                    <p>{`Introducing the ${props.selectedProduct?.name}, crafted from leather with multiple compartments and durable handles. Available in black and perfect for any occasion.`}</p>
                </div>
                <div className="prices">
                    <p className="disc">₦{props.selectedProduct?.current_price[0]?.NGN[0]}.00</p>
                    <p className="old">₦200,000.00</p>
                </div>
                <div className="button">
                    <button className="bn">Buy now</button>
                </div>
            </div>
        </div>

    </ModalBody>
    
     
   
  </ModalContent>
</Modal>

        </div>
    )
}



