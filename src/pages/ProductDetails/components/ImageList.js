import * as React from 'react';
import {Grid} from "@mui/material";

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
    const images = removeLinkFromList(data);
    const [mainImage, setMainImage] = React.useState(0);


    const createImage = (item, key) => {
        return (
            <Grid item xs={1} sm={2} md={2} key={"grid" + key}>
                <img
                    key={key}
                    src={process.env.PUBLIC_URL + '/static/hnp-catalog' + item.MIME_SOURCE}
                    srcSet={process.env.PUBLIC_URL + '/static/hnp-catalog' + item.MIME_SOURCE}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => {
                        setMainImage(key);
                    }}
                />
            </Grid>
        );
    };


    return (
        <Grid container>
            <Grid item sm={12} md={12}>
                <img
                    src={process.env.PUBLIC_URL + '/static/hnp-catalog' + images[mainImage].MIME_SOURCE}
                    srcSet={process.env.PUBLIC_URL + '/static/hnp-catalog' + images[mainImage].MIME_SOURCE}
                    alt={images[mainImage].title}
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


