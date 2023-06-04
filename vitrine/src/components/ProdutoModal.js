import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Image, Flex, Text, Box, Stack, HStack, SimpleGrid, Button, ModalFooter } from "@chakra-ui/react";

const ProdutoModal = ({isOpen, onClose, produto}) => {
    const produtoImage = "http://localhost/faculdadeSextoPeriodo/admin/fotos/" + produto.imagem + "p.jpg"
    
    const LinhaProduto = ({label, value}) => (
        <Flex direction="row" gap={1} padding={"10px"}>
            <Text fontWeight="bold" textTransform={"capitalize"}>{label}:</Text>
            <Text>{value}</Text>
        </Flex>
    )

    function formatarValor(valor) {
        const valorFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor)
        return(valorFormatado)
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader textTransform={"capitalize"}>{produto.produto}</ModalHeader>
                <ModalCloseButton/>
                    <ModalBody>
                        <Image src={produtoImage} spacing={5}/>  
                        <SimpleGrid backgroundColor={"#E2E8F0"} borderRadius={"10px"} columns={1}>
                            <LinhaProduto label={"Descrição"} value={produto.produto}/>
                            <LinhaProduto label={"Categoria"} value={produto.categoria}/>
                            <LinhaProduto label={"Preço"} value={formatarValor(produto.valor)}/>
                        </SimpleGrid>
                    </ModalBody>
                    <ModalFooter gap={2} justifyContent="flex-start">
                        <Button backgroundColor="#E2E8F0">{"Comprar"}</Button>
                        <Button colorScheme='green'>{"Adicionar ao Carrinho"}</Button>
                    </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ProdutoModal;