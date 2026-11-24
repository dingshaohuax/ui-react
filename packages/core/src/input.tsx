import { type ComponentProps, type JSX } from 'react'

type InputProps = Omit<ComponentProps<'input'>, 'children' | 'dangerouslySetInnerHTML'>

export function Input({ className, type = 'text', ...props }: InputProps): JSX.Element {
  return (
    <input {...props} type={type} className={className ? `input ${className}` : 'input'} />
  )
}
