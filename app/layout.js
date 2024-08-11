import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import AppKitProvider from "@/context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "CShopper App",
  description: "Shop online and get ondoarded easily",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <AppKitProvider initialState={initialState}>
          <Header />
          {children}
          <Footer />
        </AppKitProvider>
      </body>
    </html>
  );
}
