import { CvSkill, CvSkillGroup, SkillInfoProps } from '@/data/interfaces';
import { skills } from '@/data/objects';
import { Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import { ReactElement } from 'react';

export default function SkillsInfo({ selectedSkillGroupId, selectedSkillId, sx }: SkillInfoProps) {
    return (<Grid item container className="sidebar" xs={12} md={3} sx={{
        ...sx,
        padding: { sm: 1, md: 3 }
    }}>
        {skills.map((skillGroup: CvSkillGroup): ReactElement<any, any> => (<Grid item container xs={12} sm={6} md={12} spacing={1} key={`skill-group-${skillGroup.title}`}>
            <Grid item xs={12}><Typography className={`skill-group${selectedSkillGroupId === skillGroup.title && !selectedSkillId ? ' current-page-link' : ''}`}><Link href={`/skills/${skillGroup.title}`}>[ {skillGroup.title} ]</Link></Typography></Grid>
            <Grid item xs={12} sx={{ display: { xs: selectedSkillGroupId === skillGroup.title ? 'flex' : 'none', md: "flex" } }}>
                <ul className="mt-3 mb-10 ml-6">
                    {skillGroup.skills.map((skill: CvSkill): ReactElement<any, any> => (
                        <li key={`skill-${skill.title}`} className={selectedSkillId === skill.title ? ' current-page-link' : ''}>
                            <Grid container xs={12}>
                                <Grid item xs={skill.level ? 6 : 12}><Link href={`/skills/${skillGroup.title}/${skill.title}`}><Typography align="left">{skill.title}</Typography></Link></Grid>
                                {skill.level ? (<Grid item xs={6}><Link href={`/skills/${skillGroup.title}/${skill.title}`}><Typography align="right">{skill.level}</Typography></Link></Grid>) : null}
                            </Grid>
                        </li>
                    ))}
                </ul>
            </Grid>
        </Grid>))}
    </Grid >);
}
