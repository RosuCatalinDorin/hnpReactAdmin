import React from "react";
import Page from '../../../components/Page';
import {Card, Container, Stack, Typography} from "@mui/material";
import "./css/index.css";
import {saveBlog} from "../../../FireBase/BlogAction";
import Notiflix, {Confirm} from "notiflix";
import {useNavigate} from "react-router-dom";
import {faker} from "@faker-js/faker";
import {useAuth} from "../../../Auth";

export default function NewPost() {

    const navigate = useNavigate();
    const {currentUser} = useAuth();

    function createData(data) {
        return {
            cover: data.cardImage,
            title: data.title,
            content: data.content,
            createdAt: new Date(),
            view: 0,
            comment: 0,
            share: 0,
            favorite: 0,
            author: {
                name: faker.name.findName(),
                avatarUrl: `/static/mock-images/avatars/avatar_${1 + 1}.jpg`
            }
        }
    }

    async function saveData(data) {
        const blogDocument = createData(data);

        Notiflix.Loading.init();

        await saveBlog(blogDocument);

        Notiflix.Notify.success("Postarea a fost aduagata cu succes")
        Notiflix.Loading.remove()
        navigate('/dashboard/blog')
    }

    const onSubmit = async (data) => {
        Confirm.show(
            'Confirmati',
            'Sunteti de acrod sa savati postarea?',
            'Da',
            'Nu',
            () => {
                saveData(data);
            },
            () => {
                return false
            },
        );

    }

    return (
        <Page title="HNP: Noutati | Adaugare">
            <Container>
                <Stack direction="row"
                       alignItems="center"
                       justifyContent="space-between"
                       mb={5}>
                    <Typography variant="h4" gutterBottom>
                        NEW POST
                    </Typography>

                </Stack>
                <Card
                    style={{minHeight: 340}}
                >
                    <Grid margin={1}>
                        <Form
                            onSubmit={onSubmit}/>
                    </Grid>

                </Card>
            </Container>
        </Page>
    );
}