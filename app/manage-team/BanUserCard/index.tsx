"use client";
import SJAvatar from "@/components/commonComponents/SJAvatar";
import SJButton from "@/components/commonComponents/SJButton/SJButton";
import {SJButtonColorScheme} from "@/components/commonComponents/SJButton/helpers";
import SJModal from "@/components/utilityComponents/SJModal";
import {useState} from "react";
import {BsDoorOpenFill} from "react-icons/bs";
import {MockUser} from "../mockData";

export interface BanUserCardProps {
    user: MockUser;
    onRemoveTeamMember: (userName: string) => void;
}

const BanUserCard: React.FC<BanUserCardProps> = ({user, onRemoveTeamMember}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFireButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-[100%] bg-white rounded-full flex justify-between items-center gap-8 p-2 pr-3">
            <div className="flex gap-2 items-center justify-between">
                <SJAvatar src={user.image} />
                <div className="text-lg font-medium text-neutral-700 h-[100%]">{user.name}</div>
            </div>

            <SJButton
                iconRight={BsDoorOpenFill}
                colorScheme={SJButtonColorScheme.RED}
                onClick={handleFireButtonClick}>
                Fire
            </SJButton>

            {/* Modal Component */}
            <SJModal
                title={`Confirm Firing ${user.name}`}
                description="Are you sure you want to fire this team member?"
                isOpen={isModalOpen}
                onClose={handleCloseModal}>
                <div className="flex justify-evenly">
                    <SJButton
                        colorScheme={SJButtonColorScheme.NEUTRAL}
                        onClick={() => setIsModalOpen(false)}>
                        No
                    </SJButton>
                    <SJButton
                        colorScheme={SJButtonColorScheme.RED}
                        onClick={() => onRemoveTeamMember(user.name)}>
                        Yes
                    </SJButton>
                </div>
            </SJModal>
        </div>
    );
};

export default BanUserCard;
