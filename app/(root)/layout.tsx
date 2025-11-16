import Header from "@/components/Header";
import NavItems from "@/components/NavItems";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="container py-10">
          {children}
        </div>
      </main>
    </>
  )
}
