import { Button, FormControl, Select, styled } from "@mui/material";

export const StyledButton = styled(Button)({
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  minWidth: "auto",
  background: "transparent",
  border: "1px solid white",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const StyledFormControl = styled(FormControl)({
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-root": {
    border: "1px solid white",
    color: "white",
    borderRadius: 0,
    "& > div": {
      fontSize: 0,
    },
  },
});

export const StyledSelect = styled(Select)({
  width: 120,
  height: 38,
  borderRadius: 0,
  padding: "0px 5px",
  background: "black",
  fontWeight: 700,
  "&:hover": {
    background: "transparent",
  },
  "& .MuiSelect-icon": {
    fill: "#fff",
  },
});
