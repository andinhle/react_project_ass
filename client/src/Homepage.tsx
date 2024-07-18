import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Product } from "./types/Product";
import Loading from "./components/Loading";

function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/products"); 
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {loading ? (
        <Loading isShow={loading} />
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={3}
          justifyItems="center"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Homepage;
