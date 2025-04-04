import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { celo, celoAlfajores, defineChain } from "@reown/appkit/networks";

const crossFiTestnet = defineChain({
  id: 4157,
  caipNetworkId: "eip155:4157",
  chainNamespace: "eip155",
  name: "CrossFi Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "XFI",
    symbol: "XFI",
  },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_APP_CROSSFI_RPC_URL],
    },
  },
  blockExplorers: {
    default: {
      name: "XFI Scan",
      url: import.meta.env.VITE_APP_CROSSFI_EXPLORER_URL,
    },
  },
  contracts: {
    // Add the contracts here
  },
});

// 1. Get projectId
const projectId = import.meta.env.VITE_APP_APPKIT_PROJECT_ID;

// 2. Set the networks
// const networks = [crossFiTestnet, sepolia];

// 3. Create a metadata object - optional
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create a AppKit instance
export const appkit = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [celoAlfajores],
  chainImages: {
    [celo.id]: "https://cryptologos.cc/logos/celo-celo-logo.png?v=040",
  },
  metadata,
  projectId,
  allowUnsupportedChain: false,
  allWallets: "SHOW",
  defaultNetwork: celoAlfajores,
  enableEIP6963: true,
  themeVariables: {
    "--w3m-color-mix": "#1c1917",
    "--w3m-color-mix-strength": 40,
    "--wcm-accent-color": "#FFFFFF",
  },
  themeMode: "dark",
  features: {
    analytics: true,
    allWallets: true,
    email: false,
    socials: [],
  },
});
