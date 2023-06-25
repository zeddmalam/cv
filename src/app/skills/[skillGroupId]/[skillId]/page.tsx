"use client";

import Header from '@/components/header';
import { ReactElement } from 'react';
import Grid from '@mui/material/Grid';
import SkillsInfo from '@/components/skillsInfo';
import { usePathname } from 'next/navigation'
import SkillInfo from '@/components/skillInfo';
import Footer from '@/components/footer';


function SkillGroup(): ReactElement {
    const pathname = usePathname()
    const [,,skillGroupId, skillId] = unescape(pathname).split('/');
    return (<div>
        <Header />
        <Grid item container className="header-filler" xs={12} spacing={0}>
            <SkillsInfo 
                selectedSkillGroupId={skillGroupId}
                selectedSkillId={skillId}
            />
            <SkillInfo 
                selectedSkillGroupId={skillGroupId}
                selectedSkillId={skillId}
            />
        </Grid >
        <Footer />
    </div>);
}

export default SkillGroup;
