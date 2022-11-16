import { Videogame } from "./videogame";

// Modelo de datos para recibir los datos de un listado de videojuegos en la respuesta de la API
export interface VideogamesList {
    results: Videogame[];
    count: number;
}
