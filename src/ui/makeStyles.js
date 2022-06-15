import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
    formControlRoot: {
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",

        },
        "& .MuiInputBase-root": {
            border: "1px solid white",
            color: 'white',
            borderRadius: 0,
            "& > div": {
                fontSize: 0
            }
        },
    },
    selectRoot: {
        width: 90,
        borderRadius: '0',
        padding: '5px 5px',
        background: 'black',
        fontWeight: '700',
        "&:hover": {
            background: 'transparent',
        },

    },
    icon: {
        color: "#FFFFFF"
    },
}))