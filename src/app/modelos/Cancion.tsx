export class Cancion {
  public codCancion: number;
  public TituloCancion: string;
  public cantanteCancion: string;
  public codgeneroCancion: string;
  public imagenCancion: string;
  public imagenCancionBase64: string;

  constructor(
    codc: number,
    titu: string,
    cant: string,
    gene: string,
    imag: string,
    base: string,
  ) {
    this.codCancion = codc;
    this.TituloCancion = titu;
    this.cantanteCancion = cant;
    this.codgeneroCancion = gene;
    this.imagenCancion = imag;
    this.imagenCancionBase64 = base;
  }
}
