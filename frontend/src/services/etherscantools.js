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

const balanceOfUser = (address) => await axios.get(
  endpoint + `?module=account
   &action=balance
   &address=${address}
   &tag=latest
   &apikey=${apiKey}`
);

const getTxByUser = (address, txType) => await axios.get(
  endpoint + `?module=account
   &action=${txType? txType: 'txlist'}
   &address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a
   &startblock=0
   &endblock=99999999
   &page=1
   &offset=10
   &sort=asc
   &apikey=${apiKey}`
); //txlistinternal, 

const getTxByHash = (txHash) => await axios.get(
  endpoint + `
   ?module=account
   &action=txlistinternal
   &txhash=${txHash}
   &apikey=${apiKey}`
)

//Get a list of 'ERC20 - Token Transfer Events' by Address
// Returns the list of ERC-20 tokens transferred by an address, with optional filtering by token contract.

const getERC20TransferTxs = (contractAddress, address) => await axios.get(
  endpoint + ` ?module=account
   &action=tokentx
   &contractaddress=${contractAddress}
   &address=${address}
   &page=1
   &offset=100
   &startblock=0
   &endblock=27025780
   &sort=asc
   &apikey=${apiKey}`)

const getERC721TransferTxs = (contractAddress, address) => await axios.get(
  endpoint + ` ?module=account
   &action=tokennfttx
   &contractaddress=${contractAddress}
   &address=${address}
   &page=1
   &offset=100
   &startblock=0
   &endblock=27025780
   &sort=asc
   &apikey=${apiKey}`)


//Get "Internal Transactions" by Block Range
// https://api.etherscan.io/api
//    ?module=account
//    &action=txlistinternal
//    &startblock=13481773
//    &endblock=13491773
//    &page=1
//    &offset=10
//    &sort=asc
//    &apikey=YourApiKeyToken

// const getTx = (param) => await axios.get(
//   endpoint + ` &apikey=${apiKey}`)

// const getTx = (param) => await axios.get(
//   endpoint + ` &apikey=${apiKey}`)
// const getTx = (param) => await axios.get(
//   endpoint + ` &apikey=${apiKey}`)
