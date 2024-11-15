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

function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/-kg_WU6zDYecne1V1EG8U9bANGpu8pDD"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto p-8">
              {/* Header */}
              <header className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-4 md:space-y-0">
                <h1 className="text-4xl font-bold text-white-500">BatApp</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="transform hover:scale-105 transition-transform">
                    <WalletMultiButton />
                  </div>
                  <div className="transform hover:scale-105 transition-transform">
                    <WalletDisconnectButton />
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-white-500/20">
                  <h2 className="text-2xl font-semibold mb-4 text-white-400">Welcome to BatApp</h2>
                  <div className="text-gray-300">hello there</div>
                </div>

                {/* Airdrop Section */}
                <div className="bg-gray-800 rounded-lg shadow-lg border border-white-500/20">
                  <Airdrop />
                </div>
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;