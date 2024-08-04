
import { Box, Button, Container, CssBaseline,Typography} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const BACKEND = import.meta.env.VITE_BACKEND_URL;


const Verify = () => {
    const navigate= useNavigate();
    const { id } = useParams();

    const sendRequest = async (type = "verify") => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        };
        const res = await fetch(`${BACKEND}/${type}/${id}`, requestOptions);
        const data = await res.json();
        if(!data.error){
            navigate("/signin");
        }
        return data;
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Verify
                </Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={sendRequest}
                >
                    Verify
                </Button>
            </Box>
        </Container>
    );

};
export default Verify;