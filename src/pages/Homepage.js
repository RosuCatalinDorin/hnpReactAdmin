import Page from '../components/Page';
import {Box, Card, Container, Grid, Typography} from "@mui/material";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationInfo from "../components/NotificationInfo";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const communeStyle = {
    height: '100%',
    minHeight: 250,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}

export default function Homepage() {

    return (<Page title="Dashboard: Homepage">
            <Container maxWidth="lg">
                <NotificationInfo/>
                <Grid container rowSpacing={5} columnSpacing={1} alignItems="stretch">
                    <Grid container rowSpacing={1} columnSpacing={0.4} alignItems="stretch">
                        <Grid item xs={12} sm={7}>
                            <video
                                autoPlay
                                loop
                                muted
                                style={{objectFit: 'fill', width: '100%', height: '100%'}}
                            >
                                <source src="/static/videos/video.mp4"
                                        type="video/mp4"
                                />
                            </video>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <img
                                style={{objectFit: 'fill'}}
                                src="/static/hnp-images/rightvideophoto.jpg"
                                loading="lazy"
                                alt=''
                            />
                        </Grid>

                    </Grid>
                    <Grid sx={{mt: 2}} container rowSpacing={1} columnSpacing={3} alignItems="stretch">
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <div style={communeStyle}>
                                    <DesignServicesIcon sx={{mt: 2}} color='primary' fontSize='large'/>
                                    <Typography variant='h5' component='h3' sx={{p: 1}}>Soluții tehnice</Typography>
                                    <Typography sx={{p: 1}}>Oferim soluții tehnice optime și ”scule la tema”, acolo unde
                                        situația o impune, prin
                                        relația directă cu producatori specializați.</Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <Box style={communeStyle}>
                                    <ManageAccountsIcon sx={{mt: 2}} color='primary' fontSize='large'/>
                                    <Typography variant='h5' component='h3' sx={{p: 1}}>Consulțanta</Typography>
                                    <Typography sx={{p: 1}}>Oferim consultanță tehnică permanentă, pentru optimizarea
                                        procesului
                                        de producție</Typography>
                                </Box>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <Box style={communeStyle}>
                                    <LanguageIcon color='primary' sx={{mt: 2}} fontSize='large'/>
                                    <Typography variant='h5' component='h3' sx={{p: 1}}>Viziune</Typography>
                                    <Typography sx={{p: 1}}>
                                        Vrem să devenim un lider de piață pe obiectul nostru de activitate și un model
                                        în
                                        ceea ce
                                        privește bunele practici ale domeniului în România, în relația cu furnizorii,
                                        clienții și angajatii nostri. </Typography>
                                </Box>
                            </Card>

                        </Grid>
                    </Grid>
                    <Card sx={{mt: 2}}>
                        <Grid sx={{p: 2}} container rowSpacing={1} columnSpacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Box>
                                    <Box sx={{display: "flex", p: 2}}>
                                        <Typography variant='h5' component='h3'>Despre

                                        </Typography>
                                        <Typography variant='h5'
                                                    component='h3'
                                                    sx={{ml: 0.5}}
                                                    color="primary">HNP</Typography>
                                    </Box>

                                    <Typography sx={{p: 2}}>Suntem unici distribuitori pe piața din România ai
                                        reputaților
                                        producători BASS, EBERLE,
                                        SCM, SMICUT, SPECIALINSERT, TECNOSPIRO si parteneri WALTER pentru zona de Vest
                                        și
                                        Sud
                                        Vest a României.</Typography>
                                    <Typography sx={{p: 2}}> In cadrul grupului HNP activează cele două companii: HNP
                                        Techdevices și HNP Tools.</Typography>
                                    <Typography sx={{p: 2}}> Compania noastră a întreprins în anul 2011 demersul
                                        voluntar de
                                        certificare pentru
                                        implementarea cu success a Sistemul de Management al Calității conform
                                        standardului
                                        internațional ISO 9001:2008.</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{display: "flex", p: 1}}>
                                    <MilitaryTechIcon color='primary' fontSize='large'/>
                                    <Typography variant='h5' component='h3'>Valori</Typography>
                                </Box>

                                <Typography sx={{p: 2}}>
                                    Valorile rezultate din activitatea companiei și cultura organizației noastre
                                    sunt
                                    călăuzite
                                    de o serie de principii care definesc modul în care echipa HNP lucrează zi de zi
                                    în
                                    beneficiul clienților săi.</Typography>

                                <Box sx={{display: "flex", p: 1}}>
                                    <LocalShippingIcon color='primary' fontSize='large'/>
                                    <Typography variant='h5' component='h3' sx={{ml: 1}}>Misiune</Typography>
                                </Box>
                                <Typography sx={{p: 2}}>
                                    Misiunea pe care ne-am asumat-o, încă de la începuturi, este de a oferi nu doar
                                    scule de
                                    înaltă performanță pentru industria mecanică prelucrătoare, ci și servicii de
                                    cea
                                    mai
                                    înaltă
                                    calitate.</Typography>

                                <Box sx={{display: "flex", p: 1}}>
                                    <MilitaryTechIcon color='primary' fontSize='large'/>
                                    <Typography variant='h5' component='h3'>Experiența</Typography>
                                </Box>
                                <Typography sx={{p: 2}}>Colaborăm cu ingineri cu un înalt grad de pregătire în
                                    domeniu.</Typography>

                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{p: 4}}>
                                    <img
                                        style={{objectFit: 'fill'}}
                                        src="/static/hnp-images/containerthreephoto.jpg"
                                        loading="lazy"
                                        alt=''
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>

                </Grid>
            </Container>
        </Page>
    );
}
