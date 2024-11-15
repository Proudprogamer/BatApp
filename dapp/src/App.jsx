import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import Airdrop from './components/Airdrop/Airdrop';
import { SignMessage } from './components/signmessage/sign';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import { ShowSolBalance } from './components/balance/balance';
import { SendTokens } from './components/send_transc/send';

function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/-kg_WU6zDYecne1V1EG8U9bANGpu8pDD"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="max-w-6xl mx-auto p-6">
              {/* Header */}
              <header className="flex flex-col md:flex-row items-center justify-between mb-8 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  BatApp
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
                  <WalletMultiButton className="transition-transform hover:scale-105" />
                  <WalletDisconnectButton className="transition-transform hover:scale-105" />
                </div>
              </header>

              {/* Main Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Balance Card */}
                <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
                  <h2 className="text-xl font-semibold mb-4 text-purple-400">Balance</h2>
                  <ShowSolBalance />
                </div>

                {/* Airdrop Card */}
                <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
                  <h2 className="text-xl font-semibold mb-4 text-purple-400">Airdrop</h2>
                  <Airdrop />
                </div>

                {/* Send Tokens Card */}
                <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
                  <h2 className="text-xl font-semibold mb-4 text-purple-400">Send Tokens</h2>
                  <SendTokens />
                </div>

                {/* Sign Message Card */}
                <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
                  <h2 className="text-xl font-semibold mb-4 text-purple-400">Sign Message</h2>
                  <SignMessage />
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