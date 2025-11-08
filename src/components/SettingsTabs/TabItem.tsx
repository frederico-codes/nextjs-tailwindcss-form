'use client'
import * as Tabs from '@radix-ui/react-tabs'
import {motion} from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }:TabItemProps){
  return(     
    <Tabs.Trigger value={value} className='relative group px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-300 data-[state=active]:text-violet-700 outline-none dark:data-[state=state]:text-violet-300'>
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4 dark:text-zinc-300">
        {title}
      </span>

      {
        isSelected && (
          <motion.div 
          layoutId='active.Tab' 
          className='absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300'
        />
        )
      }

    </Tabs.Trigger>      
  )
}