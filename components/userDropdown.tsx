'use client';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const UserDropdown = () => {      
  
  const router: AppRouterInstance = useRouter();

  const handleSignOut = () => {
    // Logic to handle user sign out
    // e.g., clear auth tokens, redirect to login page, etc.
    router.push('/sign-in'); // Redirect to login page after sign out
  }


  const user = { name: "John Doe", email: "abc@email.com"}; 

  return (
   <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className= "flex items-centergap-3 text-gray-4 hover:text-yellows">

    </Button>

    <button className="p-2 hover:bg-gray-800 rounded-md transition-colors">
      <Menu className="h-6 w-6 text-gray-400" />
    </button>
  </DropdownMenuTrigger>
  
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />

    <DropdownMenuItem>
      Profile
    </DropdownMenuItem>

    <DropdownMenuItem>
      Billing
    </DropdownMenuItem>
    
    <DropdownMenuItem>
      Team
    </DropdownMenuItem>
    
    <DropdownMenuItem>
      Subscription
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropdown