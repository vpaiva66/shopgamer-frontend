import { EstadoDTO } from "./estado.dto";
export interface ClienteDTO {
  id : string;
  nome : string;
  email : string;
  imageUrl? : string;
  estado? : EstadoDTO;

}
