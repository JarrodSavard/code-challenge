import React, {useRef} from "react";
import {marginTop2Classes, modalCloseButtonClasses, modalContainerBaseClasses, modalContentClasses, modalDescriptionClasses, modalHeaderClasses, modalTitleClasses, screenReaderOnlyClasses} from "./classes";

interface SJModalProps {
    title?: string;
    description?: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const SJModal: React.FC<SJModalProps> = ({title = "Modal Title", description, isOpen, onClose, children}) => {
    const modalContentRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className={modalContainerBaseClasses}
            onClick={handleClickOutside}>
            <div
                className={modalContentClasses}
                ref={modalContentRef}>
                <div className={modalHeaderClasses}>
                    <h3 className={modalTitleClasses}>{title}</h3>
                    <button
                        onClick={onClose}
                        className={modalCloseButtonClasses}>
                        <span className={screenReaderOnlyClasses}>Close</span>
                        &#x2715;
                    </button>
                </div>
                {description && <div className={modalDescriptionClasses}>{description}</div>}
                <div className={marginTop2Classes}>{children}</div>
            </div>
        </div>
    );
};

export default SJModal;
