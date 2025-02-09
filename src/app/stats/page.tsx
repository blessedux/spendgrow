"use client"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

const COLLECTIONS = [
  {
    name: "Azumi",
    price: "200055.02",
    change: 3.99,
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Hape prime",
    price: "180055.45",
    change: 33.79,
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Cryoto",
    price: "90055.62",
    change: -5.56,
    image: "/placeholder.svg?height=48&width=48",
  },
  // Add more collections as needed
]

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-[#1A1B23] text-white p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Stats</h1>
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 rounded-full bg-primary/20 text-primary">Ranking</button>
          <button className="px-4 py-2 rounded-full bg-primary/20 text-primary opacity-50">Activity</button>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-primary/20 text-primary">All categories</button>
          <button className="px-4 py-2 rounded-full bg-primary/20 text-primary">All Chains</button>
        </div>
      </header>

      <div className="space-y-4">
        {COLLECTIONS.map((collection, index) => (
          <div key={collection.name} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
            <div className="flex items-center gap-4">
              <span className="text-lg text-gray-400">{index + 1}</span>
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{collection.name}</h3>
                <button className="text-sm text-gray-400">view info</button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">{collection.price} STX</div>
              <div
                className={`flex items-center justify-end text-sm ${
                  collection.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {collection.change >= 0 ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
                {Math.abs(collection.change)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

