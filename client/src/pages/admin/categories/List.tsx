import {
    Button,
    Container,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "src/components/ConfirmDialog";
import Flash from "src/components/Flash";
import { useLoading } from "src/contexts/loading";
import { Categories } from "src/types/Product";

function AdminCategoriesList() {
    const { setLoading } = useLoading();
    const [showFlash, setShowFlash] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [products, setProducts] = useState<Categories[]>([]);
    const [idDelete, setIdDelete] = useState<string | null>(null);

    const getAllList = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("/categories");
            setProducts(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllList();
    }, []);

    const handleConfirm = (id: string) => {
        setConfirm(true);
        setIdDelete(id);
    };

    const handleDelete = async () => {
        try {
            await axios.delete("/categories/" + idDelete);
            setShowFlash(true);
            getAllList();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Flash isShow={showFlash} />
            <Stack gap={2}>
                <Typography variant="h2" textAlign="center">
                    Categories List
                </Typography>
                <Link to="/admin/categories/add">
                    <Button variant="contained">Add Categories</Button>
                </Link>
                <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((categories, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {categories?.name}
                                    </TableCell>
                                    <TableCell align="right">{categories?.description}</TableCell>
                                    <TableCell align="center">
                                        <Stack direction="row" spacing={3} justifyContent="center">
                                            <Link to={`/admin/categories/edit/${categories?._id}`}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        bgcolor: "#1976d2",
                                                        color: "#fff",
                                                        "&:hover": {
                                                            bgcolor: "#0069d9",
                                                        },
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    bgcolor: "#dc3545",
                                                    color: "#fff",
                                                    "&:hover": {
                                                        bgcolor: "#c82333",
                                                    },
                                                }}
                                                onClick={() => handleConfirm(categories?._id)}
                                            >
                                                Delete
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
            <ConfirmDialog
                confirm={confirm}
                onConfirm={setConfirm}
                onDelete={handleDelete}
            />
        </Container>
    );
}

export default AdminCategoriesList;
