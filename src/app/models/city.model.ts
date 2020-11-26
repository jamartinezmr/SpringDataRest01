export class City {

  constructor(
      public city: string,
      public lastUpdate: string,
      public countryId: number,
      public status?: string, //? indentifica propiedades opcionales
      public cityId?: number
      ){}
}
