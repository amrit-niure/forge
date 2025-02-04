import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
  
  export function UserNav() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
          <Button variant="ghost" className="md:hidden relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="user-profile" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
          </Button>
          <Button variant="outline" className="hidden md:flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <span>Amrit Niure</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Amrit Niure</p>
              <p className="text-xs leading-none text-muted-foreground">
                amrit@gmail.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem >
          <Link href="/dashboard/employer/settings">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link href="/dashboard/employer/billing"> Billing </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link href="/dashboard/employer/settings/account">  Settings </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }