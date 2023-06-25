import { SxProps, Theme } from "@mui/material/styles";
import { ReactElement } from "react";

export interface CvSkill {
    title: string;
    description?: string;
    level?: string;
};

export interface CvSkillGroup {
    title: string;
    description: string;
    skills: Array<CvSkill>;
};

export interface CvCareerStep {
    startYear: number;
    endYear?: number;
    companyName: string;
    position: string;
    positionDescription: string;
    skills: Array<string>;
}

export interface PersonalDataItem{
    value: string;
    category: string;
    url?: string;
}

export interface PersonalData {
    phone: PersonalDataItem;
    address: PersonalDataItem;
    website: PersonalDataItem;
    github: PersonalDataItem;
    email: PersonalDataItem;
    birthday: PersonalDataItem;
}

export interface Apiable {
    getPersonalData: () => Promise<PersonalData>;
    getSkills: () => Promise<Array<CvSkillGroup>>;
    getCareerHistory: () => Promise<Array<CvCareerStep>>;
}

export type SkillInfoProps = {
    selectedSkillGroupId?: string | string[],
    selectedSkillId?: string | string[],
    className?: string | undefined;
    sx?: SxProps<Theme>;
}


