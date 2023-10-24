

// NOTE: inicialmente Bird tenia el metodo fly()
// como no todas las aves vuelan, se segregan las interfaces a FlyingBird, SwimmingBird y Bird
// para que las clases que las implementan solo usen los metodos necesarios
interface Bird {
  eat(): void;
  run(): void;
}

interface FlyingBird {
  fly(): void;
}

interface SwimmingBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {
  }
  public eat() {
  }
  public run() {
  }
}

class Humminbird implements Bird, FlyingBird {
  public fly() {
  }
  public eat() {
  }
  public run() {
  }
}

class Ostrich implements Bird {
  // violando principio de segregacion de interfaz (ISP)
  // public fly() {
  //   throw new Error("Esta ave no vuela")
  // }
  public eat() { }
  public run() { }
}

class Penguin implements Bird, SwimmingBird {
  public eat() { }
  public run() { }
  public swim() { }
}


