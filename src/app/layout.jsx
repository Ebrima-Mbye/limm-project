import HomeHeader from "./components/HomeHeader";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HomeHeader />
        {children}
      </body>
    </html>
  );
}
