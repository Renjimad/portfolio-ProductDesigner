import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import DynamicCursor from "@/components/DynamicCursor";
import { Analytics } from "@vercel/analytics/react";

// Fonts are loaded via globals.css using Google Fonts @import and CSS variables

export const metadata: Metadata = {
  title: "Abhishek Maddur - Portfolio",
  description: "UI/UX Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* CRT/Grain Overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-50 mix-blend-screen opacity-60"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'400\' viewBox=\'0 0 400 400\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' fill=\'black\'/%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23grain)\' opacity=\'0.25\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
          }}
        />
        <LenisProvider>
          <DynamicCursor />
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
