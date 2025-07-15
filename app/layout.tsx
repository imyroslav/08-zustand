import type { Metadata } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";


export const metadata: Metadata = {
  title: "Note Hub",
  description: "NoteHub is a simple and efficient application designed for managing personal notes.",
  openGraph: {
    title: "Note Hub",
    description: "NoteHub is a simple and efficient application designed for managing personal notes.",
    url: "https://www.edu.goit.global/uk/account/login",
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/og-meta.jpg',
        width: 1200,
        height: 630,
        alt: "note",
      }
    ]
  }  
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
