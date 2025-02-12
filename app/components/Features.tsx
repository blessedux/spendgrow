import { Coins, Gift, Zap, ShoppingBag } from "lucide-react"

const features = [
  {
    name: "50% Back in Merchant Tokens",
    description:
      "Earn merchant-specific tokens with every purchase, becoming a micro-stakeholder in the businesses you support.",
    icon: Coins,
  },
  {
    name: "NFT Rewards",
    description: "Collect unique NFTs that grow in value as you reach spending milestones.",
    icon: Gift,
  },
  {
    name: "AI-Powered Liquidity",
    description: "Our AI speculation system ensures high liquidity for your earned tokens.",
    icon: Zap,
  },
  {
    name: "Custom POS System",
    description: "Enjoy fee-free transactions with our proprietary point-of-sale system.",
    icon: ShoppingBag,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to shop and own
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

