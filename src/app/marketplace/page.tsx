"use client"
import { NFTCard } from "@/components/nft-card"
import { SBTCDeposit } from "@/components/sbtc-deposit"
import { BridgeForm } from "@/components/bridge-form"
import { useContext } from "react"
import { UserContext } from "../UserContext"

const TRENDING_COLLECTIONS = [
  {
    title: "3D Art",
    image: "/placeholder.svg?height=400&width=400",
    category: "3D",
    count: 200,
  },
  {
    title: "Abstract Art",
    image: "/placeholder.svg?height=400&width=400",
    category: "Abstract",
    count: 200,
  },
  {
    title: "Portrait Art",
    image: "/placeholder.svg?height=400&width=400",
    category: "Portrait",
    count: 200,
  },
]

export default function MarketplacePage() {
  const { authenticated } = useContext(UserContext)

  return (
    <div className="min-h-screen bg-[#1A1B23] text-white p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">SpendGrow Marketplace</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-primary/20 text-primary">All categories</button>
          <button className="px-4 py-2 rounded-full bg-primary/20 text-primary">All Chains</button>
        </div>
      </header>

      {authenticated && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Deposit sBTC</h2>
          <SBTCDeposit />
        </section>
      )}

      {authenticated && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Bridge BTC</h2>
          <BridgeForm />
        </section>
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Trending collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRENDING_COLLECTIONS.map((collection) => (
            <NFTCard key={collection.title} {...collection} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Top sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRENDING_COLLECTIONS.map((collection) => (
            <NFTCard key={collection.title} {...collection} price="1,234" />
          ))}
        </div>
      </section>
    </div>
  )
}

