import React, { forwardRef } from "react";
import Button from "../../atoms/button/Button";

const CButtonForm = forwardRef((props, ref) => {
 return (
  <>
   <Button titulo="Cadastrar" type="submit" ref={ref} />
   <Button
    style={{
     backgroundColor: "#50490800",
     color: "#504908",
     border: "2px solid #504908"
    }}
    titulo="Voltar"
   />
  </>
 );
});

export default CButtonForm;
