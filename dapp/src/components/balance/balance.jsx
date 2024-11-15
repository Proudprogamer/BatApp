import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
  }
  getBalance();

  return (
    <div className="flex flex-col space-y-2">
      <p className="text-gray-300">SOL Balance:</p>
      <div id="balance" className="text-2xl font-bold text-purple-400"></div>
    </div>
  );
}
