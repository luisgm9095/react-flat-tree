import { ReactNode } from 'react'

export type ExampleProps = {
  children: ReactNode
}
export const Example = ({ 
  children
}: ExampleProps) => (
  <div style={{ backgroundColor: 'red'}}>
    {children}
  </div>
)