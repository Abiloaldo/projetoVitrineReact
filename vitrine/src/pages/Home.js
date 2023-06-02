import { useCallback, useEffect, useState } from "react";

import { SimpleGrid, Spinner, Flex, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import axios from "axios";

import Header from "../components/Header";
import ProdutoCard from "../components/ProdutoCard";
import './Home.css'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Pagination = ({request, offset}) => {

    const nextPage = () => {
        request(offset + 20)
    }

    const previousPage = () => {
        if (offset === 0) return
        request(offset - 20)
    }

    return (
        <Flex gap={4}>
            <IconButton onClick={previousPage} icon={<ArrowLeftIcon/>}/>
            <IconButton onClick={nextPage} icon={<ArrowRightIcon/>}/>
        </Flex>
    )
}

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [produtos, setProdutos] = useState([]);
    const [offset, setOffset] = useState(0);

    const getProduto = useCallback(async (paramOffset) => {
        try {
            setLoading(true)
            const { data } = await axios.get('http://localhost/faculdadeSextoPeriodo/admin/api/produtos/', {
                    params: {
                    limit: 20,
                    offset: paramOffset
                }
            });
            setProdutos(data)
            setOffset(paramOffset)
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getProduto(0)
    }, [])

    const renderProdutoList = () => {
        if(loading || !produtos.length) {
            return (
                <Spinner />
            )
        }

        return (
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' padding={4}>
                {
                    produtos.map(produto =>  {
                        return (
                            <ProdutoCard produto={produto}/>
                        )
                    })
                }
                <Pagination offset={offset} request={getProduto}/>
            </SimpleGrid>
        )
    }
 
    ////////////////
    return (
        <div>
            <div className="container">
                {/* <Header title="Produtos"/> */}
                <Navbar/>
                {renderProdutoList()}
            </div>
            <div className="footer-container">
                <Footer footer="Desenvolvido pela Tropa dos Picaretas!"/>
            </div>
        </div>
    );
}

export default Home;