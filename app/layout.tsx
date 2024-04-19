import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arentur Habana Analysis",
  description: "Software para analizar datos de Arentur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={
          "bg-gray-200 dark:bg-gray-800 dark:text-white" || inter.className
        }
      >
        {children}
      </body>
    </html>
  );
}
