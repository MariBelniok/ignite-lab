import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'sm' | 'md' | 'lg',
	children: ReactNode;
	asChild?: boolean;
  className?: string;
}

export function Button({ size = 'md', children, asChild, className }: ButtonProps) {
	const Comp = asChild ? Slot : 'button';

  return (
		<Comp 
			className={clsx(
				'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors',
        className
			)}
		>
			{ children }
		</Comp>
	);
}
