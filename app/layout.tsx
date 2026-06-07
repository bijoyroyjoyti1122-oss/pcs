import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PCS COMPUTER - Free Live TV Channels",
  description:
    "Watch thousands of free live TV channels from around the world.",
  keywords: ["iptv", "live tv", "streaming", "free tv", "channels"],
  openGraph: {
    title: "PCS COMPUTER - Free Live TV Channels",
    description:
      "Watch thousands of free live TV channels from around the world.",
    type: "website",
    siteName: "PCS COMPUTER",
  },
  twitter: {
    card: "summary_large_image",
    title: "PCS COMPUTER - Free Live TV Channels",
    description:
      "Watch thousands of free live TV channels from around the world.",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }, // ডার্ক মোডের জন্য ডিপ ব্লু/স্লেট কালার
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        এখানে নতুন গ্র্যাডিয়েন্ট কালার, স্মুথ ফন্ট রেন্ডারিং এবং সিলেকশন কালার যোগ করা হয়েছে 
      */}
      <body 
        className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 antialiased selection:bg-indigo-500 selection:text-white dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 dark:text-slate-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* গ্লাসমরফিজম বা কন্টেন্টকে সুন্দরভাবে দেখানোর জন্য একটি র‍্যাপার */}
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>

          <Toaster
            position="bottom-right"
            theme="system"
            richColors
            closeButton
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
