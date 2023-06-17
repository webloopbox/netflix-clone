import { Button, Dialog, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
    '.MuiDialog-root': {
        padding: '0px',
    },
    '.MuiDialog-container': {
        padding: '0px',
    },
    '.MuiDialog-paper': {
        borderRadius: 8,
        backgroundColor: theme.palette.modal.background,
        boxSizing: 'border-box',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        maxWidth: '850px',
        width: '90%',
        margin: '0px',
        height: '80vh'
    },
    [theme.breakpoints.up("xs")]: {
    },
}));

export const StyledPlayButton = styled(Button)({
    marginLeft: 25,
    borderRadius: '50%',
    minWidth: "auto",
    width: 50,
    height: 50,
    padding: 0,
});

export const StyledCloseButton = styled(Button)({
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: "50%",
    width: 40,
    height: 40,
    minWidth: "auto",
    background: "transparent",
    border: "1px solid white",
    zIndex: 100,
    "&:hover": {
        backgroundColor: "transparent",
    },
});

export const StyledAddButton = styled(Button)({
    marginLeft: 15,
    borderRadius: "50%",
    width: 50,
    height: 50,
    minWidth: "auto",
    color: 'white',
    background: "transparent",
    border: "1px solid white",
    "&:hover": {
        backgroundColor: "transparent",
    },
});