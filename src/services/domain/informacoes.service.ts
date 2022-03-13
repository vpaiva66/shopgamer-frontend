import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { informacoesDto } from "../../models/informacoes.dto";

@Injectable()
export class InformacoesService {

    constructor(public http: HttpClient) {
    }

    findAllCategorias() : Observable<informacoesDto>  {
        return this.http.get<informacoesDto>(`${API_CONFIG.baseUrl}/categorias/total`);
    }

    findAllProdutos() : Observable<informacoesDto>  {
        return this.http.get<informacoesDto>(`${API_CONFIG.baseUrl}/produtos/total`);
    }

    findAllClientes() : Observable<informacoesDto>  {
        return this.http.get<informacoesDto>(`${API_CONFIG.baseUrl}/clientes/total`);
    }

    findAllPedidos() : Observable<informacoesDto>  {
        return this.http.get<informacoesDto>(`${API_CONFIG.baseUrl}/pedidos/total`);
    }
}