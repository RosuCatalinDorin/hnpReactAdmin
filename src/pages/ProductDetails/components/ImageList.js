import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList(props)
{

    const itemData = [
        {
            img: props.data.MIMESOURCEAPPLICATIONICON1,
            title: 'Coffee',
        },
        {
            img: props.data.MIMESOURCEDETAILFILE,
            title: 'Hats',
        },
        {
            img: props.data.MIME_SOURCE_GROUP_1,
            title: 'Honey',
        },
        {
            img: props.data.MIME_SOURCE_GROUP_4,
            title: 'Basketball',
        },
        {
            img: props.data.MIME_SOURCE_GROUP_3,
            title: 'Fern',
        },
        {
            img: props.data.MIME_SOURCE_GROUP_2,
            title: 'Mushrooms',
        },
        {
            img: props.data.MIME_SOURCE_GROUP_5,
            title: 'Tomato basil',
        },
        {
            img: props.data.MIME_SOURCE_GROUP_6,
            title: 'Sea star',
        },
        {
            img: props.data.MIME_SOURCE_GROUP_7,
            title: 'Bike',
        },
        {
            img: props.data.MIMESOURCEPROPERTYICON2,
            title: 'Bike',
        },
        {
            img: props.data.MIMESOURCEPROPERTYICON1,
            title: 'Bike',
        },
        {
            img: props.data.MIMESOURCEPROPERTYICON3,
            title: 'Bike',
        },
    ];

    const createImage = (item,key) =>
    {
        if(item.img) {
            return (
                <ImageListItem key={key}>
                    <img
                        src={`/static/wallterCatalog${item.img}`}
                        srcSet={`/static/wallterCatalog${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        onClick={()=>{console.log(`/static/wallterCatalog${item.img}`)}}
                    />
                </ImageListItem>
            );
        }
        return "";

    };
    return (
        <>
            <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                {itemData.map((item,key) =>
                    (<>
                        {createImage(item,key)}
                    </>),
                )}
            </ImageList>
        </>
    );
}


