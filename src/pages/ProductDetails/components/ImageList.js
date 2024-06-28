import * as React from 'react';
import {Grid} from "@mui/material";
import {BASE_URL_IMAGES} from "../../../utils/utils";

function getCardImage(fullImgPath) {
    let imagePath = fullImgPath.split('/')
    return imagePath[imagePath.length - 1];
}

function removeLinkFromList(data) {
    return data.filter((item) => {
        return item.MIME_TYPE === 'image/jpeg' || item.MIME_TYPE === 'image/png';
    });
}

export default function StandardImageList(props) {
    const {data} = props;
    //const images = removeLinkFromList(data);
    const images = [data.MIMESOURCENORMALFILE, data.MIMESOURCEDETAILFILE, data.MIMESOURCEAPPLICATIONICON1, data.MIMESOURCEAPPLICATIONICON2, data.MIMESOURCEAPPLICATIONICON3, data.MIMESOURCEPROPERTYICON1, data.MIMESOURCEPROPERTYICON2, data.MIMESOURCEPROPERTYICON3, data.MIMESOURCEPROPERTYICON4];


    const [mainImage, setMainImage] = React.useState(0);


    const createImage = (item, key) => {
        item = '/static/hnp-catalog' + item;
        return (
            <Grid item sx={{mt: 2}} xs={1} sm={2} md={2} key={"grid" + key}
            >
                <a href="#">
                    <img
                        key={key}
                        src={BASE_URL_IMAGES + item}
                        srcSet={BASE_URL_IMAGES + item}
                        alt={data.DESCRIPTION_LONG}
                        loading="lazy"
                        onClick={() => {
                            setMainImage(key);
                        }}
                    />
                </a>
            </Grid>
        );
    };


    return (
        <Grid container>
            <Grid item sm={12} md={12}>
                <img
                    style={{
                        width: '100%',
                        aspectRatio: '3/2',
                        objectFit: 'contain',
                    }}
                    src={BASE_URL_IMAGES + '/static/hnp-catalog' + images[mainImage]}
                    srcSet={BASE_URL_IMAGES + '/static/hnp-catalog' + images[mainImage]}
                    alt={data.DESCRIPTION_LONG}
                    loading="lazy"
                />
            </Grid>
            <Grid item sm={12} md={12}>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {images.map((item, key) => (createImage(item, key)))}

                </Grid>
            </Grid>
        </Grid>
    );

}


