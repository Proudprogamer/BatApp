import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";

function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();
    let [amt,setamt]= useState();

    const sendairdrop = async()  =>{
        await connection.requestAirdrop(wallet.publicKey,1000000000);
        console.log("sent", amt);
    }


    return(
        <>
        <input type="" placeholder="Amount..." onChange={e=>setamt(e.target.value)}/>
        <button onClick={sendairdrop}>Send Amount</button>
        </>
    )

}


export default Airdrop