import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const userDropdown = () => {
  return (
   <DropdownMenu>
  <DropdownMenuTrigger>
    {/* What users click to open the dropdown - e.g., Avatar or Button */}
  </DropdownMenuTrigger>
  
  <DropdownMenuContent>
    {/* The dropdown content that appears */}
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    
    <DropdownMenuItem>
      My Account
    </DropdownMenuItem>
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
      Subcription
    </DropdownMenuItem>
    
    
    <DropdownMenuItem>
      {/* Last item (e.g., Logout) */}
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default userDropdown