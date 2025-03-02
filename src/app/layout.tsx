import GlobalProvider from "@/context/GlobalProvider";
import { Roboto } from "next/font/google";
import { JSX } from "react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
