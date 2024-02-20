import { twMerge } from "tailwind-merge";

interface ButtonProps{
    text?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, icon, className }) => {
    return (
        <button 
            onClick={onClick}
            className={twMerge("flex items-center gap-x-3 justify-center w-56 h-16", className)}
        >
            {icon}
            {text}
        </button>
    );
};