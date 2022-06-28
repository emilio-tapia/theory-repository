class SingletonClass {
  static instancia; //null

  constructor(nombre = '') {
    // Si la instancia ha sido creada, se ejecutará return
    if (SingletonClass.instancia) {
      console.log('Instancia Creada');
      return SingletonClass.instancia;
    }

    SingletonClass.instancia = this;
    this.nombre = nombre;
    console.dir(this);
  }
}

const SingletonA = new SingletonClass('paramA');
const SingletonB = new SingletonClass('paramB');

console.log(SingletonA);
console.log(SingletonB);
