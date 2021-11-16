import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import PriceCard from "./components/PriceCard";
import "@fontsource/inter";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </Layout>
        <PriceCard />
        <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
