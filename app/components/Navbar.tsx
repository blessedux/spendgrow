import Link from "next/link"
import { Package2 } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Package2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SpendGrow</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="https://app.spendgrow.com"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              App
            </Link>
            <Link
              href="https://github.com/spendgrow/spendgrow"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

