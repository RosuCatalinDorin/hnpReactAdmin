import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList(props) {

    const itemData = [
        {
            img: props.data.MIMESOURCEAPPLICATIONICON1,
            title: props.data.MIMESOURCEAPPLICATIONICON1,
        },
        {
            img: props.data.MIMESOURCEDETAILFILE,
            title: props.data.MIMESOURCEDETAILFILE,
        },
        {
            img: props.data.MIME_SOURCE_GROUP_1,
            title: props.data.MIME_SOURCE_GROUP_1,
        },
        {
            img: props.data.MIME_SOURCE_GROUP_4,
            title: props.data.MIME_SOURCE_GROUP_4,
        },
        {
            img: props.data.MIME_SOURCE_GROUP_3,
            title: props.data.MIME_SOURCE_GROUP_3,
        },
        {
            img: props.data.MIME_SOURCE_GROUP_2,
            title: props.data.MIME_SOURCE_GROUP_2,
        },
        {
            img: props.data.MIME_SOURCE_GROUP_5,
            title: props.data.MIME_SOURCE_GROUP_5,
        },
        {
            img: props.data.MIME_SOURCE_GROUP_6,
            title: props.data.MIME_SOURCE_GROUP_6,
        },
        {
            img: props.data.MIME_SOURCE_GROUP_7,
            title: props.data.MIME_SOURCE_GROUP_7,
        },
        {
            img: props.data.MIMESOURCEPROPERTYICON2,
            title: props.data.MIMESOURCEPROPERTYICON2,
        },
        {
            img: props.data.MIMESOURCEPROPERTYICON1,
            title: props.data.MIMESOURCEPROPERTYICON1,
        },
        {
            img: props.data.MIMESOURCEPROPERTYICON3,
            title: props.data.MIMESOURCEPROPERTYICON3,
        },
    ];

    const createImage = (item, key) => {
        if (item.img) {
            return (
                <ImageListItem key={key}>
                    <img
                        src={`https://www.industrialexim.ro/image/cache/catalog/import2/images/${item.img}`}
                        srcSet={`https://www.industrialexim.ro/image/cache/catalog/import2/images/${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => {
                            console.log(`https://www.industrialexim.ro/image/cache/catalog/import2/images/${item.img}`)
                        }}
                    />
                </ImageListItem>
            );
        }
        return "";

    };
    return (
        <>
            <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                {itemData.map((item, key) =>
                    (<>
                        {createImage(item, key)}
                    </>),
                )}
            </ImageList>
        </>
    );
}


