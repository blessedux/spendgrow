"use client"
import { useState, useContext } from "react"
import { TestnetHelper, sbtcDepositHelper } from "sbtc"
import { bytesToHex, hexToBytes } from "@noble/hashes/utils"
import * as btc from "@scure/btc-signer"
import { UserContext } from "@/app/UserContext"
import { Button } from "@/components/ui/button"

export function SBTCDeposit() {
  const { userData } = useContext(UserContext)
  const [satoshis, setSatoshis] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSatoshis(event.target.value)
  }

  const buildTransaction = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const testnet = new TestnetHelper()

      // Get Bitcoin account details
      const bitcoinAccount = await testnet.getBitcoinAccount("0") // Using default wallet index
      const btcAddress = bitcoinAccount.wpkh.address
      const btcPublicKey = bitcoinAccount.publicKey.buffer.toString()

      // Fetch UTXOs
      const utxos = await testnet.fetchUtxos(btcAddress)

      // Get peg address
      const pegAccount = await testnet.getBitcoinAccount("0")
      const pegAddress = pegAccount.tr.address

      // Build deposit transaction
      const tx = await sbtcDepositHelper({
        pegAddress,
        stacksAddress: userData.profile.stxAddress.testnet,
        amountSats: parseInt(satoshis),
        feeRate: await testnet.estimateFeeRate("low"),
        utxos,
        bitcoinChangeAddress: btcAddress,
      })

      // Sign and broadcast transaction
      const psbt = tx.toPSBT()
      const requestParams = {
        publicKey: btcPublicKey,
        hex: bytesToHex(psbt),
      }

      // Request signature from wallet
      const txResponse = await window.btc?.request("signPsbt", requestParams)
      
      if (!txResponse) {
        throw new Error("Failed to sign transaction")
      }

      const formattedTx = btc.Transaction.fromPSBT(hexToBytes(txResponse.result.hex))
      formattedTx.finalize()

      const finalTx = await testnet.broadcastTx(formattedTx)
      console.log("Transaction broadcast:", finalTx)

      // Clear input after successful transaction
      setSatoshis("")
    } catch (error) {
      console.error("Error building transaction:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={buildTransaction} className="flex flex-col gap-4 max-w-md mx-auto p-4">
      <div>
        <label htmlFor="satoshis" className="block text-sm font-medium text-gray-300 mb-2">
          Amount (in satoshis)
        </label>
        <input
          id="satoshis"
          type="number"
          value={satoshis}
          onChange={handleInputChange}
          placeholder="Enter amount in satoshis"
          className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white"
          required
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading || !satoshis}
        className="w-full"
      >
        {isLoading ? "Processing..." : "Deposit sBTC"}
      </Button>
    </form>
  )
} 