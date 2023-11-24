"use client";
import BanUserCard from "@/app/manage-team/BanUserCard";
import {MOCK_OPEN_AI_TEAM, MockUser} from "@/app/manage-team/mockData";
import {NextPage} from "next";
import {useState} from "react";
import {BsPeopleFill} from "react-icons/bs";

const ManageTeamPage: NextPage = () => {
    const [team, setTeam] = useState<MockUser[]>(MOCK_OPEN_AI_TEAM);
    const handleRemoveTeamMember = (userName: string) => {
        setTeam(team.filter((user) => user.name !== userName));
    };

    return (
        <div className="h-[100dvh] w-[100vw] flex-center bg-neutral-200">
            <div className=" flex-center w-[400px] gap-8">
                <h1 className="text-4xl w-[100%]">Manage Open A.I.</h1>

                <div className="flex flex-col w-[100%] items-stretch gap-4">
                    {team.length > 0 ? (
                        team.map((user) => (
                            <BanUserCard
                                key={user.image}
                                user={user}
                                onRemoveTeamMember={handleRemoveTeamMember}
                            />
                        ))
                    ) : (
                        <div className="text-center text-gray-600">
                            <BsPeopleFill className="inline-block text-2xl mr-2" />
                            No team members to display
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageTeamPage;
