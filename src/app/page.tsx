"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Home() {
  const { authenticated, handleSignIn } = useContext(UserContext)

  return (
    <main className="min-h-screen bg-[#1A1B23] text-white">
      <div className="relative h-screen flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1B23]/90"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to SpendGrow</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Bridge everyday purchases with digital ownership. Earn merchant tokens and NFT rewards that grow with your
            spending.
          </p>
          {authenticated ? (
            <Link href="/marketplace">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg">
                Explore and Mint NFTs
              </Button>
            </Link>
          ) : (
            <Button 
              onClick={handleSignIn}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg"
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </main>
  )
} 