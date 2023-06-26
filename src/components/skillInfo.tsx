import { CvSkill, SkillInfoProps } from '@/data/interfaces';
import { skills } from '@/data/objects';
import { Breadcrumbs, Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import { ReactElement } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';

export default function SkillGroupInfo({ selectedSkillGroupId, selectedSkillId, className }: SkillInfoProps): ReactElement {
    const skillGroup: any = skills.find(sg => sg.title === selectedSkillGroupId);
    if (!skillGroup) return (<Typography className="skill-group">Skill group {selectedSkillGroupId} is not found</Typography>);

    const skill: any = skillGroup.skills.find((s: CvSkill) => s.title === selectedSkillId);
    if (!skill) return (<Typography className="skill-group">Skill {selectedSkillId} is not found</Typography>);
    return (<Grid item container xs={12} md={9} spacing={0} className={`pl-5 pr-5 skill-group ${className ? className : ''}`}>
        <div>
            <Grid container xs={12}>
                <Grid item xs={12}><br /></Grid>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Link href={`/skills/${selectedSkillGroupId}`} >
                            [ {skillGroup.title} ]
                        </Link>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
                            {skill.title} {skill.level ? `(${skill.level})` : null}
                        </Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12}><br /></Grid>
                {skill.description ? (<Grid item xs={12} className="skill-group text-gray-500 courier-font" dangerouslySetInnerHTML={{ __html: skill.description }} />) : null}
            </Grid>
        </div>
    </Grid >);
}
