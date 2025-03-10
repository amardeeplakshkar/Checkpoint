import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/providers/provider";
import Dock from "@/components/Dock";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Checkpoint",
  description: "Last Telegram AirDrop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      <body
        className={`antialiased overflow-hidden`}
      >
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
        <Provider>
          <div className="h-[98dvh] flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Dock />
          </div>
        </Provider>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
        <script>
          AOS.init();
        </script>
      </body>
    </html>
  );
}
