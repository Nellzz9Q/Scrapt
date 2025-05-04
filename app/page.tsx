import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c1c1c] text-white flex flex-col items-center justify-center px-4">
      <Image
        src="/ScraptzLogo.svg"
        alt="Scrapt Logo"
        width={120}
        height={120}
        className="mb-4"
      />
      <h1 className="text-4xl font-bold italic text-[#0066ff]">Scrapt</h1>
      <p className="text-md font-notojp text-gray-400">
        Scratchユーザーのための未来型コミュニティへようこそ。
      </p>
      <div className="flex space-x-4">
        <a
          href="/trend"
          className="bg-[#0066ff] hover:bg-blue-700 text-white py-2 px-4 rounded-xl shadow-lg transition"
        >
          ScrapTrendを見る
        </a>
        <a
          href="https://discord.gg/あなたのURL"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white py-2 px-4 rounded-xl hover:bg-white hover:text-black transition"
        >
          Discordに参加する
        </a>
      </div>
      <p className="text-md font-poppins text-gray-400">Powered by Next.js + Tailwind</p>
    </main>
  );
}