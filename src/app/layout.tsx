import "./globals.css";
export const metadata = { title: "Counter App" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body className="bg-zinc-950 text-white antialiased">{children}</body></html>;
}