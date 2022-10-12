import { Slot } from '@radix-ui/react-slot';
import { Children, InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextInputRootProps { children: ReactNode }
export interface TextInputIconProps { children: ReactNode }

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='py-4 px-3 flex items-center gap-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      { children }
    </div>
  )
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input 
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
	);
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}