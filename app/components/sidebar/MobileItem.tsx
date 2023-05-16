'use client';
import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    href: string;
    active?: boolean;
    icon: any;
    onClick?: () => void;
}

export default function MobileItem({
    href,
    active,
    icon: Icon,
    onClick
}: MobileItemProps) {
    const handleClick = () => onClick && onClick();
  return (
    <Link href={href} onClick={onClick} className={clsx(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center py-4 text-gray-500 hover:text-black hover:bg-gray-100`,
        active && 'bg-gray-100 text-black'    
        )}>
        <Icon className="h-6 w-6" />
    </Link>
  )
}
