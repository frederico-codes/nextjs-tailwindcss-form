"use client";

import { Logo } from "./Logo"
import { Cog, LifeBuoy, Menu, Search }from 'lucide-react'
import { NavItem } from './NavItem'
import { BarChart, CheckSquare, Flag, Home, SquareStack, Users} from 'lucide-react'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from "./Profile"
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible' 
import { Button } from "../Button"

export function Sidebar(){
  return <Collapsible.Root className="data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0  lg:data-[state=closed]:h-screen border-b border-zinc-200 flex flex-col gap-6 p-4 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 py-8 dark:bg-zinc-900 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <Logo/>
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 "/>
          </Button>
        </Collapsible.Trigger>
      </div>
    <Collapsible.Content forceMount className="flex flex-col flex-1 data-[state=closed]:hidden lg:data-[state=closed]:flex">         
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500"/>
        </Input.Prefix>
        <Input.Control defaultValue="Search"/>
      </Input.Root>
      <nav className='space-y-0.5'>
        <NavItem title='Home' icon={ Home }/>
        <NavItem title='Dashboard' icon={ BarChart }/>
        <NavItem title='Projects' icon={ SquareStack }/>
        <NavItem title='Tasks' icon={ CheckSquare }/>
        <NavItem title='Reporting' icon={ Flag }/>
        <NavItem title='Users' icon={ Users }/>
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title='Suport' icon={ LifeBuoy }/>
          <NavItem title='Settings' icon={ Cog }/>
        </nav>
        <UsedSpaceWidget/>
        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
        <Profile/>
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
}