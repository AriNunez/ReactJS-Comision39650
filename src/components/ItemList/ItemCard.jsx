import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 345, height: 500 }} key={item.id}>
      <CardMedia sx={{ height: 300 }} image={item.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="primary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
