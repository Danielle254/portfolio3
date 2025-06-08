import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col h-screen md:grid md:grid-cols-6 md:h-full">
        <Sidebar />
        <main className="overflow-y-scroll md:overflow-y-auto md:col-span-5 bg-gradient-to-br from-main-purple from-70% to-main-pink h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
