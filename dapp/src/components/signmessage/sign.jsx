import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage() {
  const { publicKey, signMessage } = useWallet();

  async function onClick() {
    if (!publicKey) throw new Error('Wallet not connected!');
    if (!signMessage) throw new Error('Wallet does not support message signing!');
    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);
    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
    alert('success', `Message signature: ${bs58.encode(signature)}`);
  }

  return (
    <div className="flex flex-col space-y-4">
      <input
        id="message"
        type="text"
        placeholder="Message"
        className="bg-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
      />
      <button
        onClick={onClick}
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Sign Message
      </button>
    </div>
  );
}
