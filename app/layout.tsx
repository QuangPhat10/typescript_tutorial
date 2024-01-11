import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header";
import ContextProvider from "./context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
      </head>
      <body>
        <ContextProvider>
          <Header />
          <div className="pt-16 flex">
            <aside className="hidden md:block min-h-screen">
              <SideBar />
            </aside>
            <div className="ml-5 mt-5 min-h-screen">{children}</div>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
