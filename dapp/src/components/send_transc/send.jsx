import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendTokens() {
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    const transaction = new Transaction();
    transaction.add(SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(to),
      lamports: amount * LAMPORTS_PER_SOL,
    }));
    await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
  }

  return (
    <div className="flex flex-col space-y-4">
      <input
        id="to"
        type="text"
        placeholder="To"
        className="bg-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
      />
      <input
        id="amount"
        type="text"
        placeholder="Amount"
        className="bg-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
      />
      <button
        onClick={sendTokens}
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Send
      </button>
    </div>
  );
}