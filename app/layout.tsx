import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Lucky Plan",
  description: "This is a UI for Lucky Plan",
};

export default function RootLayout({
  children,
  topbar,
  appbar,
  statusbar,
}: Readonly<{
  children: React.ReactNode;
  topbar: React.ReactNode;
  sidebar: React.ReactNode;
  appbar: React.ReactNode;
  statusbar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          `dark antialiased`,
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <Providers>
          <div className="flex h-screen w-screen flex-col justify-between bg-neutral-950 font-sans">
            <div className="w-full border-b border-neutral-800 p-4 py-2">
              {topbar}
            </div>

            <div className="flex h-[calc(100%-106px)]">
              <div className="flex w-[85px] flex-col overflow-auto border-r border-neutral-800">
                {appbar}
              </div>

              {children}
            </div>

            <div className="h-8 w-full shrink-0 border-t border-neutral-400/20 p-4">
              {statusbar}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
