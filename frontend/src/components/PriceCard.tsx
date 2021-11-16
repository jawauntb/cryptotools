
import "@fontsource/inter";
import {useQuery} from 'react-query';
import axios from 'axios';

const fetchPrice = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
  return await response.data
}

function PriceCard() {
  const {data, error, isError, isLoading } = useQuery('price', fetchPrice);

  if(isLoading){
   return <div>Loading...</div>
  }

  if(isError){
    return <div>Error! {error}</div>
  }

  return (
    <>
      <div color="white" font-size="md" font-weight="medium" margin-right="2">
          {
              'Price of Ethereum: ' +  data.ethereum.usd
          }
      </div>
    </>
  );
}

export default PriceCard;
