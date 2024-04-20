import { FormControl } from "@mui/material";
import { forwardRef } from "react";

const CFormControl = forwardRef((props, ref) => {
    return(
        <>
            <FormControl {...props} ref={ref}>
                {props.children}
            </FormControl>
        </>
    )
})

export default CFormControl