import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import ModalProvider from "@/providers/modal-provider";

import { Joti_One } from "next/font/google";

const inter = Joti_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const metadata: Metadata = {
  icons:"./logoo.png",
  title: "VisionMap",
  description: "Visualize.. Collaborate.. Achieve..🏆",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </ConvexClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

// <StrictMode>
//   <ErrorBoundary>
//     <ConvexProvider client={convex}>
//       <App />
//     </ConvexProvider>
//   </ErrorBoundary>
// </StrictMode>,
