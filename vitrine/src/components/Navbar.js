import React from 'react'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,//horizontal stack | o VSTACH é = a vertical
  VStack,
  StackDivider,
  Text,
  useDisclosure,
  IconButton,
  Hide,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
  Spacer,
  ButtonGroup,
  Heading,
  Menu,
  MenuGroup,
  MenuList,
  MenuButton,
  MenuItem,
  MenuDivider,
  Image
} from '@chakra-ui/react'  //imports para criação de um Drawer (ubs. um Drawer é um modal, que pode ser utilizado na navbar)

import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure() //funções para abrir e fechar o modal
  const btnRef = React.useRef()
  
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box     
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
    > 
      <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent={"space-between"} height={"70px"}>
        
        <HStack
          as={"nav"}
          spacing={5}
          display={{ base: "none", md: "flex" }}
          id="myDIV"
          width={["100%"]} 
        >
          <Box>
            <Heading>Produtos</Heading>
          </Box>
          <Spacer/>
          <ButtonGroup>
            <Button variant="ghost">
              <a href="#Product" > Produtos </a>
            </Button>
            <Button variant="ghost" >
              <a href="#Produto"> Categorias </a>
            </Button>
          </ButtonGroup>
          <Spacer/>
          <HStack>
            <Button colorScheme='green'>Carrinho</Button>
            <Menu>
              <MenuButton as={Button} colorScheme="teal">
                Perfil
              </MenuButton>
              <MenuList>
                <MenuGroup title='Perfil'>
                  <MenuItem>Minha Conta</MenuItem>
                  <MenuItem>Pagamentos</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                  <MenuItem>Documentos</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                  <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </Button>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        
        
      
        
        <Flex>
          <IconButton
          size={"md"}
          icon={ <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen} />
        </Flex>
  
        
        
          
        
  
  
          {isOpen ? (
  
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}
              finalFocusRef={btnRef} size={"xs"}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerBody spacing={"space-between"}>
                  <Flex alignItems={"left"} justifyContent={"left"} direction={"column"}>
                  <VStack>
                    {/* <ButtonGroup> */}
                      <Button variant='outline'>
                        <a href="#Produto"> Produto</a>
                      </Button>
                      <Button variant='outline'>
                        <a href="#Produto"> Categorias</a>
                      </Button>
                    {/* </ButtonGroup> */}
                    {/* <HStack> */}
                      <Button>Carrinho</Button>
                      <Menu>
                        <MenuButton as={Button} colorScheme='teal'>
                          Perfil
                        </MenuButton>
                        <MenuList>
                          <MenuGroup title='Perfil'>
                            <MenuItem>Minha Conta</MenuItem>
                            <MenuItem>Pagamentos</MenuItem>
                          </MenuGroup>
                          <MenuDivider />
                          <MenuGroup title='Help'>
                            <MenuItem>Termos</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <Button onClick={toggleColorMode}>
                              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                          </MenuGroup>
                        </MenuList>
                      </Menu>
                    {/* </HStack> */}
                    <Button variant='outline' onClick={onClose}>
                      <CloseIcon/>
                    </Button>
                  </VStack>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
  
            </Drawer>
          ) : (
            <>
            </>
          )}
        
      </Flex>

    </Box>
  )


}