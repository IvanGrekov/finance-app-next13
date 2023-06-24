export interface IBaseButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    title?: string;
    isDisabled?: boolean;
    className?: string;
}
