import {twMerge} from "tailwind-merge";

interface SJErrorDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    message?: string;
}
/**
 * Message styling for a query that yield no result
 * @param message a custom message to display
 * If children are provided, children will be displayed, If not the message or default message will be displayed
 */
const SJErrorDisplay: React.FC<SJErrorDisplayProps> = ({message = "No result", className, children}) => {
    const classes = twMerge("w-[100%] font-sans text-neutral-500  py-2 text-center text-md text-red-600", className);
    return <div className={classes}>{children ? children : message}</div>;
};

export default SJErrorDisplay;
