import { CvSkill, CvSkillGroup, SkillInfoProps } from '@/data/interfaces';
import { skills } from '@/data/objects';
import { Breadcrumbs, Link, Paper, Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import { ReactElement } from 'react';
import HomeIcon from '@mui/icons-material/Home';

export default function SkillGroupInfo({ selectedSkillGroupId, className }: SkillInfoProps): ReactElement {
    const skillGroup: any = skills.find(sg => sg.title === selectedSkillGroupId);
    if (!skillGroup) return (<Typography className="skill-group">Skill group {selectedSkillGroupId} is not found</Typography>);
    return (<Grid item container xs={12} md={9} spacing={0} className={`pl-5 pr-5 career-history ${className ? className : ''}`}>
        <div>
            <Grid container xs={12}>
                <Grid item xs={12}><br /></Grid>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/"
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
                            [ {skillGroup.title} ]
                        </Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12}><br /></Grid>
                <Grid item xs={12}><Typography className="skill-group text-gray-500 courier-font" dangerouslySetInnerHTML={{ __html: skillGroup.description }} /></Grid>
                <Grid item xs={12}>
                    <ul className="mt-3 mb-10 ml-6">
                        {skillGroup.skills.map((skill: CvSkill): ReactElement<any, any> => (
                            <li key={`skill-${skill.title}`} ><Grid item container>
                                <Grid item xs={skill.level ? 6 : 12}><Link href={`/skills/${skillGroup.title}/${skill.title}`}><Typography align="left">{skill.title}</Typography></Link></Grid>
                                {skill.level ? (<Grid item xs={6}><Link href={`/skills/${skillGroup.title}/${skill.title}`}><Typography align="right">{skill.level}</Typography></Link></Grid>) : null}
                            </Grid></li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </div>
    </Grid >);
}
