import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <Link to="/cart">
      <div style={{ background: "rgb(255,255,255)", margin: "20px" }}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={total} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    </Link>
  );
};

export default CartWidget;
