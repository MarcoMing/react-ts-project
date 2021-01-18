
import * as React from 'react';

import './button.scss';

type ButtonProps = {
  value?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({className, style, onClick, children, value}: ButtonProps){

   return (
     <button
       className={`aui-button ${className}`}
       style={style}
       onClick={onClick}
     >
      {value}
      { children }
     </button>
   )
}
