import imageHeader from "../../../../assets/img/imageHeader.png";

function ImagemHeader({ style }){
    return(
        <img
        src={ imageHeader }
        alt="imagem-trilha"
        style={style}
      />
    )
}

export default ImagemHeader