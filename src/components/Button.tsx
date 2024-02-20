import { twMerge } from "tailwind-merge";

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, icon, className }) => {
    return (
        <button 
            onClick={onClick}
            className={twMerge(className, "flex items-center justify-center w-20 h-10")}
        >
            {icon}
            {text}
        </button>
    );
};