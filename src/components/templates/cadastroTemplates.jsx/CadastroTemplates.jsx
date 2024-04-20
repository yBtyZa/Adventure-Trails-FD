import { useContext } from "react";
import { TrilhasContext } from "../../../context/TrilhasContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CMenuItem from "../../atoms/formCadastro/CMenuItem";
import CTextField from "../../atoms/formCadastro/CTextField";
import CFormControl from "../../atoms/formCadastro/CFormControl";
import CFormCadastro from "../../atoms/formCadastro/CFormCadastro";
import CButtonForm from "../../molecules/formCadastro/CButtonForm";
import estados from "../../../assets/EstadosForm";


import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function CadastroTemplates() {
 const { trilhas, setTrilhas } = useContext(TrilhasContext);

 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 const navigate = useNavigate();
 function adicionarNovaTrilha(form) {
  setTrilhas(() => [...trilhas, form]);
  navigate("/trilhas");
 }

 return (
  <div className="imagem-fundo">
   <div className="container_cadastro">
    <h1>Cadastro de nova trilha</h1>
    <CFormCadastro
     className="form_cadastro"
     onSubmit={handleSubmit(adicionarNovaTrilha)}>
     <CTextField
      label="Nome da trilha *"
      type="text"
      {...register("titulo", {
       required: "Por favor, digite o nome da trilha.",
       maxLength: {
        value: 30,
        message: "O nome da trilha deve ter menos de 30 caracteres."
       }
      })}
     />
     <div className="error">
      {errors.titulo && <p>{errors.titulo.message}</p>}
     </div>
     <div className="div_cadastro">
      <CTextField
       label="Duração estimada (min) *"
       className="input_cadastro"
       type="number"
       {...register("duracao", {
        required: "Por favor, digite a duração da trilha.",
        maxLength: {
         value: 4,
         message: "A duração da trilha deve ter menos de 4 caracteres."
        }
       })}
      />
      <CTextField
       label="Trajeto (km) *"
       className="input_cadastro"
       type="number"
       {...register("trajeto", {
        required: "Por favor, digite o trajeto da trilha.",
        maxLength: {
         value: 5,
         message: "O trajeto da trilha deve ter menos de 5 caracteres."
        }
       })}
      />
     </div>
     <div className="error">
      {errors.duracao && <p>{errors.duracao.message}</p>}
      {errors.trajeto && <p>{errors.trajeto.message}</p>}
     </div>
     <div className="div_cadastro">
      <CTextField
       label="Cidade *"
       className="input_cadastro"
       type="text"
       {...register("cidade", {
        required: "Por favor, digite a cidade da trilha.",
        maxLength: {
         value: 60,
         message: "A cidade da trilha deve ter menos de 60 caracteres."
        }
       })}
      />
      <FormControl className="input_cadastro">
       <InputLabel id="estado_label">Estado *</InputLabel>
       <Select
        labelId="estado_label"
        label="Estado"
        variant="outlined"
        {...register("estado", {
         required: "Por favor, selecione o estado da trilha."
        })}
        defaultValue=""
        >
        {estados.map((item, index) => (
            <CMenuItem key={index} value={item.value}>{item.label}</CMenuItem>
        ))}
       </Select>
      </FormControl>
     </div>
     <div className="error">
      {errors.cidade && <p>{errors.cidade.message}</p>}
      {errors.estado && <p>{errors.estado.message}</p>}
     </div>
     <div className="div_cadastro">
      <CTextField
       label="Nome completo do usuário *"
       className="input_cadastro"
       type="text"
       {...register("autor", {
        required: "Por favor, digite o nome do usuário.",
        maxLength: {
         value: 60,
         message: "O nome do usuário deve ter menos de 60 caracteres."
        }
       })}
      />

      <CFormControl className="input_cadastro">
       <InputLabel id="dificuldade_label">Dificuldade *</InputLabel>
       <Select
        labelId="dificuldade_label"
        label="Dificuldade"
        variant="outlined"
        {...register("dificuldade", {
         required: "Por favor, selecione a dificuldade da trilha."
        })}
        defaultValue=""
        >
        <CMenuItem value="Iniciante">Iniciante</CMenuItem>
        <CMenuItem value="Intermediário">Intermediário</CMenuItem>
        <CMenuItem value="Avançado">Avançado</CMenuItem>
       </Select>
      </CFormControl>
     </div>
     <div className="error">
      {errors.autor && <p>{errors.autor.message}</p>}
      {errors.dificuldade && <p>{errors.dificuldade.message}</p>}
     </div>

     <FormControl className="input">
      <InputLabel id="trilha_label">Tipo de trilha *</InputLabel>
      <Select
       labelId="trilha_label"
       label="Tipo de trilha"
       variant="outlined"
       {...register("tipo", {
        required: "Por favor, selecione o tipo de trilha."
       })}
       defaultValue=""
       >
       <CMenuItem value="Caminhada / Trekking">Caminhada / Trekking</CMenuItem>
       <CMenuItem value="Ciclismo">Ciclismo</CMenuItem>
      </Select>
     </FormControl>
     <div className="error">{errors.tipo && <p>{errors.tipo.message}</p>}</div>

     <CTextField
      label="URL imagem da trilha *"
      {...register("image", {
       required: "Por favor, insira uma imagem da trilha.",
       maxLength: {
        value: 600,
        message: "A URL da imagem deve ter menos de 900 caracteres."
       }
      })}
     />
     <div className="error">
      {errors.image && <p>{errors.image.message}</p>}
     </div>
     <div className="btn_form">
      <CButtonForm />
     </div>
    </CFormCadastro>
   </div>
  </div>
 );
}

export default CadastroTemplates;
