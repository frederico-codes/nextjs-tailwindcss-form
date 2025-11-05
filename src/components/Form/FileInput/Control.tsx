"use client";
import { useFileInput } from './Root';

import { ChangeEvent, ComponentProps } from "react"

export type ControlProps = ComponentProps<'input'>

export function Control({multiple=false,...props}:ControlProps){
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>){
    if(!event.target.files?.length){
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  } 
  return ( 
    <input 
      type="file" 
      className='sr-only' 
      id={id} { ...props }
      onChange = { handleFilesSelected } 
      multiple = { multiple }
      { ...props }
    />
  )
}