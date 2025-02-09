"use client"
import { useState, useContext } from "react"
import { TestnetHelper, sbtcDepositHelper } from "sbtc"
import { bytesToHex, hexToBytes } from "@noble/hashes/utils"
import * as btc from "@scure/btc-signer"
import { UserContext } from "@/app/UserContext"
import { Button } from "@/components/ui/button"

export function BridgeForm() {
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
      const bitcoinAccount = await testnet.getBitcoinAccount("0")
      const btcAddress = bitcoinAccount.wpkh.address
      const btcPublicKey = bitcoinAccount.publicKey.buffer.toString()

      // Fetch UTXOs for the Bitcoin address
      const utxos = await testnet.fetchUtxos(btcAddress)

      // Get peg-in address for sBTC
      const pegAccount = await testnet.getBitcoinAccount("0")
      const pegAddress = pegAccount.tr.address

      // Build the deposit transaction
      const tx = await sbtcDepositHelper({
        pegAddress,
        stacksAddress: userData.profile.stxAddress.testnet,
        amountSats: parseInt(satoshis),
        feeRate: await testnet.estimateFeeRate("low"),
        utxos,
        bitcoinChangeAddress: btcAddress,
      })

      // Create PSBT for signing
      const psbt = tx.toPSBT()
      const requestParams = {
        publicKey: btcPublicKey,
        hex: bytesToHex(psbt),
      }

      // Request signature from Hiro Wallet
      const txResponse = await window.btc?.request("signPsbt", requestParams)
      
      if (!txResponse) {
        throw new Error("Failed to sign transaction")
      }

      // Finalize and broadcast transaction
      const formattedTx = btc.Transaction.fromPSBT(hexToBytes(txResponse.result.hex))
      formattedTx.finalize()

      const finalTx = await testnet.broadcastTx(formattedTx)
      console.log("Transaction broadcast:", finalTx)

      // Reset form after successful transaction
      setSatoshis("")
    } catch (error) {
      console.error("Error building transaction:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex items-center justify-center space-x-4">
      <input
        type="number"
        placeholder="Amount of BTC to deposit"
        className="w-1/3 px-4 py-2 text-gray-300 bg-gray-700 rounded focus:outline-none focus:border-orange-500"
        value={satoshis}
        onChange={handleInputChange}
        required
      />
      <Button
        type="submit"
        onClick={buildTransaction}
        disabled={isLoading || !satoshis}
        className="px-6 py-2 bg-orange-500 rounded hover:bg-orange-600 focus:outline-none"
      >
        {isLoading ? "Processing..." : "Deposit BTC"}
      </Button>
    </form>
  )
} 