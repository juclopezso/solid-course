
type Size = ''|'S'|'M'|'L';

class Product {
  constructor(
    // el valor por defecto hace los campos opcionales
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ){}

  validatedFields(): boolean {
    // trae las propiedades de la clase
    for ( const key in this ) {
      // console.log(key)
      switch( typeof this[key] ) {
        case 'string':
          // cast to string for ts
          if ( (<string><unknown>this[key]).length <= 0 ) throw Error(`${ key } is empty`)
          break;
        case 'number':
          if ( (<number><unknown>this[key]) <= 0 ) throw Error(`${ key } is less than zero`)
          break;
        default:
          throw Error(`${ typeof this[key] } is not supported`)
      }
    }

    return true;
  }

  toString() {
    if ( !this.validatedFields() ) return;
    return `${ this.name } ${ this.price } - ${this.size}`
  }
}


// funcion anonima autoinvocada
(() => {
  
  const bluePants = new Product('Blue large pants', 21, 'S');
  console.log(bluePants.toString())

})();
