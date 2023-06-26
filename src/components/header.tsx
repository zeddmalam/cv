import { personalData } from "../data/objects";
import { ReactElement } from "react";
import PrivateInfo from './privateInfo';
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";

export default function Header(): ReactElement {
    return (<Grid container item xs={12}>
        <Grid item container xs={12}>
            <Grid item xs={12} md={3} className="sidebar"><br/><br/><br/></Grid>
            <Grid item container xs={12} md={9} sx={{ display: { xs: "none", md: "flex" }, padding:1, backgroundColor: '#ffffff'}}><PrivateInfo personalData={personalData}/></Grid>
        </Grid>
        <Grid item className="summary no-margin" xs={12} md={3}>
            <Link href="/" className="photo"><Image src="/img/photo.jpg" alt="photo" fill priority sizes="15em" /></Link>
        </Grid>
        <Grid item className="sidebar" xs={12} md={0} sx={{ display: { xs: "flex", md: "none" } }}><br/><br/><br/></Grid>
        <Grid item container className="summary no-margin" xs={12} md={9} spacing={0} sx={{padding:1}}>
            <Grid item className="full-name summary" xs={12} sm={6} lg={4}>
                Dmytro Bukhanets
            </Grid>
            <Grid item className="summary-text summary" xs={12} sm={6} lg={8} sx={{ fontSize: { xs: '16px', lg: '22px' } }}>
                I’m looking for <span className="position-name">Senior Software Engineer</span> position where I can work with great people, develop new skills, grow company and share experience with team.
            </Grid>
        </Grid>
        <Grid item container xs={12} md={9} sx={{ display: { xs: "flex", md: "none" }, padding:1, backgroundColor: '#ffffff'}}><PrivateInfo personalData={personalData}/></Grid>
        <Grid item container spacing={0} xs={12} sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid item className="sidebar" xs={12} md={3}></Grid>
            <Grid item className="private-info" xs={12} md={9}><br/><br/></Grid>
        </Grid>
    </Grid >
    );
}
