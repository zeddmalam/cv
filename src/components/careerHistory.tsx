import { CvCareerStep } from '@/data/interfaces';
import { careerHistory } from '@/data/objects';
import { Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import { ReactElement } from 'react';
import Image from "next/image";

export default function CareerHistory(): ReactElement {
    return (<Grid item container xs={12} md={9} spacing={0} className="pl-5 pr-5 career-history">
        <Grid item container xs={12} spacing={0}><Typography className="text-gray-950">[ CAREER HISTORY ]</Typography><br/><br/></Grid >
        {careerHistory.reverse().map((step: CvCareerStep, index: number): ReactElement<any, any> => (<Grid item key={`career-step-${index}`} container xs={12} spacing={0} className="career-step">
            <Grid item container xs={12} spacing={1} alignItems="center">
                <Grid item>
                    <div className="clock"></div>
                    <Typography align="left" className="text-gray-950 font-bold courier-font">{step.startYear} - {step.endYear || 'Now'}: {step.companyName}</Typography>
                </Grid >
                <Grid item xs className="dotted" sx={{ display: { xs: "none", md: "flex" } }}>&nbsp;</Grid >
                <Grid item><Typography align="right" className="text-gray-950 font-bold courier-font">{step.position}</Typography></Grid >
            </Grid >
            <Grid item xs={12} className="text-gray-500 courier-font">
                    {step.positionDescription}<br/>
                    <ul className="text-gray-950 ml-6"><li className="text-gray-950 courier-font">{step.skills.join(', ')}<br/><br/></li></ul>
            </Grid >
        </Grid >))}
    </Grid >);
}
