import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import Airdrop from './components/Airdrop/Airdrop';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';


function App(){


  return(
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/-kg_WU6zDYecne1V1EG8U9bANGpu8pDD"}>
      <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton></WalletMultiButton>
            <WalletDisconnectButton></WalletDisconnectButton>
            <div>hello there</div>
            <Airdrop/>
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App