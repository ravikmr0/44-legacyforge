import { Header } from "./Header";
import { Footer } from "./Footer";
import { PropsWithChildren } from "react";
import WhatsAppButton from "./WhatsAppButton";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
