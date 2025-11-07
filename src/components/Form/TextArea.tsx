import { ComponentProps } from "react";

export type TextAreaProps = ComponentProps<'textarea'>


export function TextArea(props: TextAreaProps){
  return(
    <textarea 
    className='min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none  focus-within:ring-4 focus-within:ring-violet-100' 
    {...props}     
    />
  )
}