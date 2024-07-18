import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="340"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          component={Link}
          to={`/product/${product._id}`}
          sx={{
            bgcolor: "#1976d2",
            color: "#fff",
            "&:hover": {
              bgcolor: "#005bb5",
            },
          }}
        >
          Chi Tiết
        </Button>
        <Button
          size="small"
          sx={{
            bgcolor: "#dc004e",
            color: "#fff",
            "&:hover": {
              bgcolor: "#9a0036",
            },
          }}
        >
          Tìm hiểu Thêm
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
