import { Apiable, CvCareerStep, CvSkillGroup, PersonalData } from "@/data/interfaces";

export default class Api implements Apiable {
    async getPersonalData(): Promise<PersonalData> {
        return await (await fetch('/api/personal-data')).json();
    }
    async getSkills(): Promise<Array<CvSkillGroup>> {
        return await (await fetch('/api/skills')).json();
    }
    async getCareerHistory(): Promise<Array<CvCareerStep>> {
        return await (await fetch('/api/career/history')).json();
    }
}
