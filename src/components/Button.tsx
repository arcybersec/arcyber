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
            className={twMerge(
                `
                flex items-center gap-x-2 justify-center w-56 h-16
                transition duration-300 ease-in-out hover:scale-110
                `, 
                className
            )}
        >
            {icon}
            {text}
        </button>
    );
};