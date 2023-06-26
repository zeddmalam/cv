"use client";

import { ReactElement } from 'react';
import Header           from '@/components/header';
import Grid             from '@mui/material/Grid';
import CareerHistory    from '@/components/careerHistory';
import SkillsInfo           from '@/components/skillsInfo';
import Footer from '@/components/footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace;'
  },
});

function Home(): ReactElement {
    return (<div><ThemeProvider theme={theme}>
        <Header />
        <Grid item container className="header-filler" xs={12} spacing={0}>
            <SkillsInfo />
            <CareerHistory />
        </Grid >
        <Footer />
    </ThemeProvider>
    </div>);
};

export default Home;
