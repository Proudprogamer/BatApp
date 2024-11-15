import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";

function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  let [amt, setamt] = useState();

  const sendairdrop = async () => {
    await connection.requestAirdrop(wallet.publicKey, 1000000000);
    console.log("sent", amt);
  }

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Amount..."
        onChange={e => setamt(e.target.value)}
        className="bg-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
      />
      <button
        onClick={sendairdrop}
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Send Amount
      </button>
    </div>
  );
}

export default Airdrop;