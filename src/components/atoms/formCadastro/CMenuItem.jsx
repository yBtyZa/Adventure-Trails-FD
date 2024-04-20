import React, { forwardRef } from "react";
import { MenuItem } from "@mui/material";

const CMenuItem = forwardRef((props, ref) => {
    return (
        <MenuItem {...props} ref={ref}>
            {props.children}
        </MenuItem>
    );
});

export default CMenuItem;
