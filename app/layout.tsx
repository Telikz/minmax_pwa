import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Minmax",
  description: "Skill optimizing resource",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Robin Olsen" },
    {
      name: "Robin Olsen",
      url: "https://github.com/Telikz",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#191e24"></meta>
      <div className="min-h-screen flex flex-col" data-theme="dark">
        <div className="navbar bg-base-200 sticky top-0 z-50">
          <div className="navbar-start">
            <details className="dropdown">
              <summary className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></summary>
              <div tabIndex={0} className="dropdown-content mt-2">
                <Link href='//'>
                  <button className="btn btn-wide btn-outline  border-neutral-900 bg-base-200 mt-1">Home</button>
                </Link>
                <Link href='/Dashboard'>
                  <button className="btn btn-wide btn-outline border-neutral-900 bg-base-200 mt-1">Dashboard</button>
                </Link>
                <Link href='/About'>
                  <button className="btn btn-wide btn-outline border-neutral-900 bg-base-200 mt-1">About</button>
                </Link>
                <Link href='/Logout'>
                  <button className="btn btn-wide btn-outline border-neutral-900 bg-base-200 mt-1">Logout</button>
                </Link>
              </div>
            </details>
            <Link href='//' className="btn btn-ghost text-primary normal-case text-xl font-extrabold">MINMAX</Link>
          </div>
          <div className="navbar-center">
          </div>
          <div className="navbar-end">
            
          </div>
        </div>
        <main>{children}</main>
        <footer>
          <div className='text-right text-xs'>Minmaxing© 2023</div>
        </footer>
      </div>
    </html>
  );
}