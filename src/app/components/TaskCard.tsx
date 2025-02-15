import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/system";

const TaskCard = styled((props: CardProps) => <Card {...props} />)(({ theme }) => ({
  padding: "16px",
  marginBottom: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  }
}));

export default TaskCard;