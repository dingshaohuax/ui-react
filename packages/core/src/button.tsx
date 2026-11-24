import { type ComponentProps } from 'react'

type NativeButtonProps = ComponentProps<'button'>

type ButtonProps = Omit<NativeButtonProps, 'type' | 'dangerouslySetInnerHTML'> & {
  type?: 'default' | 'primary'
  htmlType?: NativeButtonProps['type']
}

export const Button: React.FC<ButtonProps> = ({
  type = 'default',
  htmlType,
  className,
  children = '按钮',
  ...props
}) => {
  const buttonClassName = type === 'primary' ? 'button button--primary' : 'button'

  return (
    <button
      {...props}
      type={htmlType}
      className={className ? `${buttonClassName} ${className}` : buttonClassName}
    >
      {children}
    </button>
  )
}
