import React from 'react'

import {
  Box,
  Flex,
  useColorModeValue,
  Text
} from '@chakra-ui/react'  //imports para criação de um Drawer (ubs. um Drawer é um modal, que pode ser utilizado na navbar)

const Footer = ({footer}) => {
    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={9} width={["100%"]}>
            <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent={"center"} height={"70px"} fontWeight={'bold'}>
                <Text>{footer}</Text>
            </Flex>
        </Box>
    )
}

export default Footer;