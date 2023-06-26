import { ReactElement } from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function Footer(): ReactElement {
    return (<Grid container item xs={12} sx={{ display: { xs: "none", md: "flex" }}}>
        <Grid item container xs={12}>
            <Grid item xs={12} md={3} className="sidebar"><br/><br/><br/></Grid>
            <Grid item container xs={12} md={9} sx={{ padding:1, backgroundColor: '#ffffff'}}></Grid>
        </Grid>
        <Grid item className="summary no-margin text-gray-950" xs={12} md={3}>
            <Typography align="center"><br/>[ HOBBIES ]<br/><br/></Typography>
        </Grid>
        <Grid item container className="summary no-margin" xs={12} md={9} spacing={0} sx={{padding:1}}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Grid item xs={1}></Grid>
            <Grid item xs={2}><div className="hobby" style={{marginTop: '-3.5rem'}}><Image src="/img/hobby_1.png" alt={""} width="100" height="100" /></div></Grid>
            <Grid item xs={2}><div className="hobby" style={{marginTop: '-2rem'}}><Image src="/img/hobby_2.png" alt={""} width="100" height="100" /></div></Grid>
            <Grid item xs={2}><div className="hobby" style={{marginTop: '-4rem'}}><Image src="/img/hobby_3.png" alt={""} width="100" height="100" /></div></Grid>
            <Grid item xs={2}><div className="hobby" style={{marginTop: '-3rem'}}><Image src="/img/hobby_4.png" alt={""} width="100" height="100" /></div></Grid>
            <Grid item xs={2}><div className="hobby" style={{marginTop: '-3.5rem'}}><Image src="/img/hobby_5.png" alt={""} width="100" height="100" /></div></Grid>
        </Grid>
        <Grid item xs={12} md={3} className="sidebar"><br/><br/></Grid>
        <Grid item container xs={12} md={9} sx={{ padding:1, backgroundColor: '#ffffff'}}></Grid>
    </Grid >
    );
}
