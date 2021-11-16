import Iframe from 'react-iframe';
import { Container } from "@chakra-ui/react";
import {useQuery} from 'react-query';
import axios from 'axios';

const getArticles = async () => {
    const response = await axios.get('');
    return await response.data
  }

const MediumiFrame = () => {
    const {data, error, isError, isLoading } = useQuery('articles', getArticles);

    if(isLoading){
        return <div>Loading...</div>
    }

    if(isError){
        console.log('err')
        return <div>Error! {error}</div>
    }

    return (
        <Container>
            <div>hi</div>
            <Iframe url="https://medium.com/tag/crypto"
                    width="450px"
                    height="450px"
                    id="myId"
                    overflow="auto"
                    display="block"
                    position="relative"/>
        </Container>
    );
}

export default MediumiFrame;