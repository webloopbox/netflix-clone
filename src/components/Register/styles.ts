import { styled } from "@mui/material";

export const StyledLabel = styled("label", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  fontSize: active ? 12 : 16,
  transform: active ? "translate(15px, -15px) !important" : "none",
}));
