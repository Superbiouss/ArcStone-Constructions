import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "ArcStone Constructions | Civil Engineering & Architectural Design",
  description:
    "Professional civil engineering and architectural design services for residential, commercial, industrial, and renovation projects. Transforming visions into structurally sound, aesthetically pleasing spaces.",
  keywords: [
    "civil engineer",
    "architectural designer",
    "residential architect",
    "building design",
    "structural engineer",
    "house planning",
    "architectural drawings",
    "floor plan design",
    "3D house rendering",
    "construction consultant",
  ],
  openGraph: {
    title: "ArcStone Constructions | Civil Engineering & Architectural Design",
    description:
      "Professional civil engineering and architectural design services. We transform concepts into structurally sound, aesthetically pleasing spaces.",
    type: "website",
    locale: "en_IN",
    siteName: "ArcStone Constructions",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArcStone Constructions | Civil Engineering & Architectural Design",
    description:
      "Professional civil engineering and architectural design services for residential, commercial, industrial, and renovation projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
