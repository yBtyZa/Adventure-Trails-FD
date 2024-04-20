import React, { forwardRef } from "react";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom";

const CButtonForm = forwardRef((props, ref) => {
 return (
  <>
   <Button titulo="Cadastrar" type="submit" ref={ref} />
   <Link to={"/"}><Button
    style={{
     backgroundColor: "#50490800",
     color: "#504908",
     border: "2px solid #504908"
    }}
    titulo="Voltar"
   /></Link>
  </>
 );
});

export default CButtonForm;
