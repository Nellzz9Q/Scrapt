import Link from "next/link";
import Image from "next/image";

export default function Header() {
return (
    <header className="w-full px-6 py-4 shadow bg-[#0066FF] text-white flex items-center justify-between">
    <div className="flex items-center space-x-3">
        <Link href="/">
        <Image src="/ScraptzLogo.svg" alt="Scrapt Logo" width={100} height={100} />
        </Link>
        <h1 className="text-3xl font-museo tracking-wide ">
        <span className="hidden md:block"><Link href="/" className="font-bold italic">Scrapt</Link></span>
        </h1>
    </div>
    <nav className="space-x-6 text-sm font-poppins">
        <Link href="/trend">Trend</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
    </nav>
    </header>
);
}
