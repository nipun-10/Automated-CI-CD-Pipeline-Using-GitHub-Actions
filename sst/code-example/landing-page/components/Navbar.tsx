import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <Terminal className="h-6 w-6 text-purple-500" />
          <span>Dhappa AI</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Pricing
          </Link>
        </div>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200">
          Get Started
        </button>
      </div>
    </nav>
  );
}
