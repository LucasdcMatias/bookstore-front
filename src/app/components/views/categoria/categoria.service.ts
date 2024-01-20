import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "./categoria.model";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "src/environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  private _snack: any;
  constructor(private http: HttpClient, private_snack: MatSnackBar) {}

  baseUrl: String = enviroment.baseUrl;

  findAll(): Observable<Categoria[]> {
    const url = "${this.baseUrl}/categorias";
    return this.http.get<Categoria[]>(url);
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      vertocalPosition: "top",
      duration: 3000,
    });
  }
}
