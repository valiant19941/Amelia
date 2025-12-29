import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-end px-6">
        <Link href="/" className="p-4 text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="p-4 text-white hover:text-gray-300">
          About
        </Link>
        <Link href="/contact" className="p-4 text-white hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}
