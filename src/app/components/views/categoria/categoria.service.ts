import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "./categoria.model";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  baseUrl: String = enviroment.baseUrl;

  findAll(): Observable<Categoria[]> {
    const url = "${this.baseUrl}/categorias";
    return this.http.get<Categoria[]>(url);
  }
}
