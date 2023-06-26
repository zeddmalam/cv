import { CvSkill, SkillInfoProps } from '@/data/interfaces';
import { skills } from '@/data/objects';
import { Breadcrumbs, Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import { ReactElement } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';

export default function SkillGroupInfo({ selectedSkillGroupId, className }: SkillInfoProps): ReactElement {
    const skillGroup: any = skills.find(sg => sg.title === selectedSkillGroupId);
    if (!skillGroup) return (<Typography className="skill-group">Skill group {selectedSkillGroupId} is not found</Typography>);
    return (<Grid item container xs={12} md={9} spacing={0} className={`career-history ${className ? className : ''}`}>
        <div>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/">
                            <HomeIcon sx={{ mr: '0.5rem', mt: '-0.1rem' }} fontSize="inherit" />
                            Home
                        </Link>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">{skillGroup.title}</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12}><br /></Grid>
                <Grid item xs={12}><Typography className="skill-group text-gray-500 courier-font" dangerouslySetInnerHTML={{ __html: skillGroup.description }} /></Grid>
                <Grid item xs={12}>
                    <ul className="mt-3 mb-10 ml-6 skill-group">
                        {skillGroup.skills.map((skill: CvSkill): ReactElement<any, any> => (
                            <li key={`skill-${skill.title}`} ><Grid item container>
                                {skill.description ? (<>
                                    <Grid item><LinkIcon sx={{ fontSize: 16, mt: '-0.1rem', mr: '1rem' }}/></Grid>
                                    <Grid item xs><Link href={`/skills/${skillGroup.title}/${skill.title}`}><Typography align="left" className="courier-font"><strong>{skill.title}</strong></Typography></Link></Grid>
                                    {skill.level ? (<Grid item><Link href={`/skills/${skillGroup.title}/${skill.title}`}><Typography align="right" className="courier-font"><strong>{skill.level}</strong></Typography></Link></Grid>) : null}
                               </>) : (<>
                                    <Grid item xs><Typography align="left" className="courier-font">{skill.title}</Typography></Grid>
                                    {skill.level ? (<Grid item><Typography align="right" className="courier-font">{skill.level}</Typography></Grid>) : null}
                               </>)}
                            </Grid></li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </div>
    </Grid >);
}
