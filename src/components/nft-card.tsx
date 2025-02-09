import Image from "next/image"

interface NFTCardProps {
  title: string
  image: string
  category: string
  count?: number
  price?: string
}

export function NFTCard({ title, image, category, count, price }: NFTCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white/5 p-4">
      <div className="aspect-square overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{category}</p>
        {count && <p className="mt-1 text-sm text-gray-400">{count} items</p>}
        {price && (
          <p className="mt-2 font-medium">
            {price} <span className="text-gray-400">STX</span>
          </p>
        )}
      </div>
    </div>
  )
} 