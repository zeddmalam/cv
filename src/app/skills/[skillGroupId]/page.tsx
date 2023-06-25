"use client";

import Header from '@/components/header';
import { ReactElement } from 'react';
import Grid from '@mui/material/Grid';
import SkillsInfo from '@/components/skillsInfo';
import SkillGroupInfo from '@/components/skillGroupInfo';
import { usePathname } from 'next/navigation';
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
            <SkillGroupInfo 
                selectedSkillGroupId={skillGroupId}
                className="text-gray-950"
            />
        </Grid >
        <Footer />
    </div>);
}

export default SkillGroup;
