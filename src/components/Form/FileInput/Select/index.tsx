"use client";

import { ChevronDown } from 'lucide-react';
import  * as SelectPrimitive from '@radix-ui/react-select'
import { ReactNode } from 'react';

export interface SelectProps extends SelectPrimitive.SelectProps{
  children: ReactNode
  placeholder: string
}

export function Select({ children,placeholder, ...props }:SelectProps){
  return(
    <SelectPrimitive.Root {...props}>
      {/* Trigger: botão visível antes de abrir o select */}
      <SelectPrimitive.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:data-[placeholder]:text-zinc-400 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20'>
        {/* Valor visível / placeholder */}
        <SelectPrimitive.Value 
        className='text-black' 
        placeholder = {placeholder}
        />
        {/* Ícone de seta */}
          <SelectPrimitive.Icon>
            <ChevronDown className='h-5 w-5 text-zinc-500'/>
          </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

       {/* Portal: conteúdo do dropdown */}
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content 
        side='bottom' 
        position='popper' 
        sideOffset={8}
        className='z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] animate-slideDownAndFade dark:bg-zinc-800 dark:border-zinc-700'>
          <SelectPrimitive.Viewport>
            {children}                   
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root> 
  )
}