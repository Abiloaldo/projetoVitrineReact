import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Image, Flex, Text } from "@chakra-ui/react";

const ProdutoModal = ({isOpen, onClose, produto}) => {
    const produtoImage = "http://localhost/faculdadeSextoPeriodo/admin/fotos/" + produto.imagem + "p.jpg"
    console.log(produto)
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textTransform={"capitalize"}>{produto.produto}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Image src={produtoImage}/>         
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ProdutoModal;