import Grid from "@mui/material/Grid";
import { PersonalData } from "@/data/interfaces";
import { ReactElement } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SxProps, Theme } from '@mui/material/styles';
import LinkIcon from '@mui/icons-material/Link';
import Link from "next/link";

interface PrivateInfoProps {
    personalData: PersonalData;
    sx?:SxProps<Theme>;
};

export default function PrivateInfo(props: PrivateInfoProps): ReactElement {
    const { phone, address, website, github, email, birthday }: PersonalData = props.personalData;
    return (<>
        <Grid item container className="private-info" xs={12} sm={6} md={4} alignItems="center">
            <Grid item><SmartphoneIcon className="icon" /></Grid>
            <Grid item xs className="private-info-value">{phone.value}</Grid>
        </Grid>
        <Grid item container className="private-info" xs={12} sm={6} md={5} alignItems="center">
            <Grid item><LanguageIcon className="icon" /></Grid>
            <Grid item xs className="private-info-value"><Link href={website.url || '#'}>{website.value}</Link>&nbsp;<LinkIcon/></Grid>
        </Grid>
        <Grid item container className="private-info" xs={12} sm={6} md={3} alignItems="center">
            <Grid item><HomeIcon className="icon" /></Grid>
            <Grid item xs className="private-info-value">{address.value}</Grid>
        </Grid>
        <Grid item container className="private-info" xs={12} sm={6} md={4} alignItems="center">
            <Grid item><GitHubIcon className="icon" /></Grid>
            <Grid item xs className="private-info-value"><Link href={github.url || '#'}>{github.value}</Link>&nbsp;<LinkIcon/></Grid>
        </Grid>
        <Grid item container className="private-info" xs={12} sm={6} md={5} alignItems="center">
            <Grid item><AlternateEmailIcon className="icon" /></Grid>
            <Grid item xs className="private-info-value"><Link href={email.url || '#'}>{email.value}</Link>&nbsp;<LinkIcon/></Grid>
        </Grid>
        <Grid item container className="private-info" xs={12} sm={6} md={3} alignItems="center">
            <Grid item sx={{ margin: '0.25em' }}><div className="icon-image"></div></Grid>
            <Grid item xs className="private-info-value">{birthday.value}</Grid>
        </Grid>
    </>
    );
}
