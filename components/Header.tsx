import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/assets/icons/logo.svg" 
            alt="signalist"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden sm:block">
          <NavItems/>
        </nav>

        {/* Mobile Menu - Only visible on mobile */}
        <div className="sm:hidden">
          <UserDropdown/>
        </div>
      </div>
    </header>
  )
}

export default Header