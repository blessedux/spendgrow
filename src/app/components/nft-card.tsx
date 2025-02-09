interface NFTCardProps {
  image: string
  title: string
  price?: string
  count?: number
  category: string
}

export function NFTCard({ image, title, price, count, category }: NFTCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-semibold">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-300 text-sm">{category}</span>
          {count && <span className="text-gray-300 text-sm">{count}</span>}
          {price && <span className="text-primary font-medium">{price} STX</span>}
        </div>
      </div>
    </div>
  )
}

