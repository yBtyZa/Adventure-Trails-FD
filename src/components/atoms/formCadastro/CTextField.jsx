import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

const CTextField = forwardRef((props, ref) => {
    return (
        <TextField
            label={props.label}
            variant="outlined"
            className="input"
            type={props.type}
            {...props}
            ref={ref}
        />
    );
});

export default CTextField;
