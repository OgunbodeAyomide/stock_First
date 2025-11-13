import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import NavItems from "@/components/NavItems";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <div>
          <Link href="/">
            <Image src="/assets/icons/logo.svg" alt="signalist" width={140} height={32} />
          </Link>
          <nav className="hidden sm:block">
            {/* <NavItems /> */}
             <NavItems/>        
          </nav>
        </div>
      </header>
      <main>
        <div className="container py-10">
          {children}
        </div>
      </main>
    </>
  )
}
