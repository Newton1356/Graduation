import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Chatbot from "./_components/chatbot";
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
    style: ["italic"], // Regular
});
export const metadata = {
  title: "Clinify",
  description: "My website",
   icons: {
    icon: "/favicon.png",
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.className}>
      <body className="antialiased min-h-screen">
        <Navbar/>
        {children}
        <Chatbot/>
         {/* سكريبت ElevenLabs */}
   

      </body>
    </html>
  );
}
