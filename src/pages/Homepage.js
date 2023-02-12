import Page from '../components/Page';
import {Card, Container, Grid, Typography} from "@mui/material";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LanguageIcon from '@mui/icons-material/Language';

export default function Homepage() {

    return (<Page title="Dashboard: Homepage">
            <Container maxWidth="xl">

                <Grid container rowSpacing={5} columnSpacing={5} alignItems="stretch">
                    <Grid item xs={12} sm={6}>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>
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
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>
                            <img
                                style={{objectFit: 'fill'}}
                                src="/static/hnp-images/rightvideophoto.jpg"
                                loading="lazy"
                                alt=''
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>

                            <DesignServicesIcon color='primary' fontSize='large'/>

                            <Typography variant='h5' component='h3' sx={{p: 2}}>Soluții tehnice</Typography>

                            <Typography sx={{p: 2}}>Oferim soluții tehnice optime și ”scule la tema”, acolo unde
                                situația o impune, prin
                                relația directă cu producatori specializați.</Typography>
                        </div>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>

                            <ManageAccountsIcon color='primary' fontSize='large'/>

                            <Typography variant='h5' component='h3' sx={{p: 2}}>Consulțanta</Typography>
                            <Typography sx={{p: 2}}>Oferim consultanță tehnică permanentă, pentru optimizarea procesului
                                de producție</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>

                            <LanguageIcon color='primary' fontSize='large'/>

                            <Typography variant='h5' component='h3' sx={{p: 2}}>Viziune</Typography>

                            <Typography sx={{p: 2}}>Vrem să devenim un lider de piață pe obiectul nostru de activitate
                                și un model în ceea ce
                                privește bunele practici ale domeniului în România, în relația cu furnizorii, clienții
                                și angajatii nostri.</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Typography variant='h5' component='h3' sx={{p: 2}}>Despre HNP</Typography>
                            <Typography sx={{p: 2}}>Suntem unici distribuitori pe piața din România ai reputaților
                                producători BASS, EBERLE,
                                SCM, SMICUT, SPECIALINSERT, TECNOSPIRO si parteneri WALTER pentru zona de Vest și Sud
                                Vest a României.</Typography>
                            <Typography sx={{p: 2}}> In cadrul grupului HNP activează cele două companii: HNP
                                Techdevices și HNP Tools.</Typography>
                            <Typography sx={{p: 2}}> Compania noastră a întreprins în anul 2011 demersul voluntar de
                                certificare pentru
                                implementarea cu success a Sistemul de Management al Calității conform standardului
                                internațional ISO 9001:2008.</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>

                            <Typography variant='h5' component='h3' sx={{p: 2}}>Valori</Typography>
                            <Typography sx={{p: 2}}>
                                Valorile rezultate din activitatea companiei și cultura organizației noastre sunt
                                călăuzite
                                de o serie de principii care definesc modul în care echipa HNP lucrează zi de zi în
                                beneficiul clienților săi.</Typography>


                            <Typography variant='h5' component='h3' sx={{p: 2}}>Misiune</Typography>
                            <Typography sx={{p: 2}}>
                                Misiunea pe care ne-am asumat-o, încă de la începuturi, este de a oferi nu doar
                                scule de
                                înaltă performanță pentru industria mecanică prelucrătoare, ci și servicii de cea mai
                                înaltă
                                calitate.</Typography>


                            <Typography variant='h5' component='h3' sx={{p: 2}}>Experiența</Typography>
                            <Typography sx={{p: 2}}>Colaborăm cu ingineri cu un înalt grad de pregătire în
                                domeniu.</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>
                            <img
                                style={{objectFit: 'fill'}}
                                src="/static/hnp-images/containerthreephoto.jpg"
                                loading="lazy"
                                alt=''
                            />
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </Page>
    );
}
