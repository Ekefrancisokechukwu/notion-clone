import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ui/providers/convex-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Your connected workspace for Wiki, Docs and Projects | notion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster
            toastOptions={{
              style: {
                background: "#242323",
                color: "#fff",
              },
              className: "class",
            }}
            position="bottom-center"
          />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
