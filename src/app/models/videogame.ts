// Modelo de datos para recibir los datos de un unico videojuego en la respuesta de la API
export interface Videogame {
  id: number;
  name: string;
  platforms: {platform : {name : string}}[];
  stores: {store : {name : string}}[];
  released: string;
  rating: number;
  background_image: string;
}
