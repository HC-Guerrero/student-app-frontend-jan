import React from 'react'

type IconProps = {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
}
  
const Icon = ({ onClick, children}: IconProps) => {
    return (
        <div onClick={onClick}>
            {children}
        </div>
    )
}

export default Icon