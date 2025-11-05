import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "./scss/base.scss";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { getHeaderNavigation } from "@/lib/utils/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shavar Cox",
  description: "Personal Portfolio of Shavar Cox",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await getHeaderNavigation();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} main-container`}>
        <Header navItems={navItems} />
        <main>
          <div className="content-wrapper">
            <Hero />
          </div>
        </main>
        {children}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et,
        totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis
        ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde
        quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et,
        totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis
        ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde
        quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus
        cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam
        suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores
        et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam
        blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo
        quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente
        dolorum accusamus cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe ducimus dolores et, totam explicabo quo unde quod eaque
        cupiditate. Dolorem nam suscipit aliquam blanditiis ipsum sapiente dolorum accusamus cumque.
      </body>
    </html>
  );
}
