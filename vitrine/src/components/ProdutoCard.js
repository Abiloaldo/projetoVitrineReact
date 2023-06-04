import { Card ,CardBody, CardFooter, Image, Badge, Heading, useDisclosure, Text, Button, Flex, HStack} from "@chakra-ui/react";
import ProdutoModal from "./ProdutoModal";

const ProdutoCard = ({ produto }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const produtoImage = "http://localhost/faculdadeSextoPeriodo/admin/fotos/" + produto.imagem + "p.jpg"

    const ProdutoValor = ({value}) => {
        const valorFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value)
        return(
            <Flex direction="row" padding="5px 5px 20px 0px" fontWeight={"semibold"} fontSize={"25px"}>
                <Text>{valorFormatado}</Text>
            </Flex>
        )
    };

    return (
        <>
            <Card>
                <CardBody>
                    <Image src={produtoImage} onClick={onOpen}/>
                    <Heading fontWeight={"bold"} size='md' marginTop='8px' textTransform={"capitalize"}>{produto.produto}</Heading>
                    <ProdutoValor value={produto.valor}/>
                </CardBody>
                <CardFooter gap={2} justifyContent='flex' padding="10px">
                    <Button onClick={onOpen} backgroundColor="#E2E8F0">{"Detalhes"}</Button>
                    <Button colorScheme='green'>{"Adicionar ao Carrinho"}</Button>
                </CardFooter>
            </Card>
            <ProdutoModal isOpen={isOpen} onClose={onClose} produto={produto}/>
        </>
    );
}

export default ProdutoCard;