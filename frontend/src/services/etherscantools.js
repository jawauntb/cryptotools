import axios from "axios";


const apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;

const endpoint = `https://api.etherscan.io/api`;

const prices = await axios.get(
    endpoint + `?module=stats&action=ethprice&apikey=${apiKey}`
  );

  let { result } = prices.data; //{ethUSD: result.ethusd,ethBTC: result.ethbtc,}

  // get the market cap of ether in USD
  const marketCap = await axios.get(
    endpoint + `?module=stats&action=ethsupply&apikey=${apiKey}`
  );

  result = marketCap.data.result;
  // in wei
  const priceWei = result.toString();

  // in ether
  const priceEth = priceWei.slice(0, priceWei.length - 18);
  console.log(result, priceWei, priceEth);
  // convert eth in USD

  // get the latest block number
  const latestBlock = await axios.get(
    endpoint + `?module=proxy&action=eth_blockNumber&apikey=${apiKey}`
  );
