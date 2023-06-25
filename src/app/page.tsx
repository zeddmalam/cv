"use client";

import { ReactElement } from 'react';
import Header           from '@/components/header';
import Grid             from '@mui/material/Grid';
import CareerHistory    from '@/components/careerHistory';
import SkillsInfo           from '@/components/skillsInfo';
import Footer from '@/components/footer';

function Home(): ReactElement {
    return (<div>
        <Header />
        <Grid item container className="header-filler" xs={12} spacing={0}>
            <SkillsInfo />
            <CareerHistory />
        </Grid >
        <Footer />
    </div>);
};

export default Home;
