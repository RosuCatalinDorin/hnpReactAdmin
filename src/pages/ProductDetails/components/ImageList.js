import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function getCardImage(fullImgPath) {
    let imagePath = fullImgPath.split('/')
    return imagePath[imagePath.length - 1];
}

export default function StandardImageList(props) {
    const {data} = props;
    //todo: nu sunt toate pozele inecarcate pe hnp
    const createImage = (item, key) => {
        if (item.MIME_TYPE === 'image/jpeg' || item.MIME_TYPE === 'image/png') {
            return (
                <ImageListItem key={key}>
                    <img
                        src={process.env.PUBLIC_URL + '/static/hnp-catalog' + item.MIME_SOURCE}
                        srcSet={process.env.PUBLIC_URL + '/static/hnp-catalog' + item.MIME_SOURCE}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            );
        }
        return "";

    };
    return (
        <>
            <ImageList sx={{width: 500, height: 500}} cols={3} rowHeight={164}>
                {data.map((item, key) =>
                    (<>
                        {createImage(item, key)}
                    </>),
                )}
            </ImageList>
        </>
    );
}


