import { TextField } from "@mui/material";

interface attributes {
    id : string,
    label : string,
    type : string,
    value : string | number;
}

const Inputs = (props:attributes) =>{
return(
    <TextField
          required
          id={props.id}
          label={props.label}
          type={props.type}
          value={props.value}
        />
)
}

export default Inputs;