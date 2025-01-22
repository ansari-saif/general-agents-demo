import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          General Agents
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#core-components" className="hover:text-blue-400">
              Core Components
            </Link>
          </li>
          <li>
            <Link href="#supported-domains" className="hover:text-blue-400">
              Supported Domains
            </Link>
          </li>
          <li>
            <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

