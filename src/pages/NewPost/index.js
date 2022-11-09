import React, {useState} from "react";
import Page from '../../components/Page';
import {Card, Container, Grid, Stack, TableContainer, Typography} from "@mui/material";
import RichText from "../../components/RichText";
import "./css/index.css";


export default function UploadFile() {

    const [editorState, setEditorState] = useState("scrie aici |");
    const onEditorStateChange = (editorState) => {
        debugger
        setEditorState(editorState);
    }
    return (
        <Page title="Dashboard: Blog | Minimal-UI">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        NEW POST
                    </Typography>

                </Stack>
                <Card
                    style={{minHeight: 200}}
                >
                    <RichText
                        style={{border: "none"}}
                        value={editorState}
                        onChange={onEditorStateChange}
                    />
                </Card>


            </Container>
        </Page>
    );
}