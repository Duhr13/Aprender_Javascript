class Mesa{
    constructor (alto, ancho, largo) {
        this.alto = alto;
        this.ancho = ancho;
        this.largo = largo;
    }
}

class Supermesa extends Mesa {
    constructor (alto, ancho, largo, material) {
        super(alto, ancho, largo);
        this.material = material;
    }

    informacion() {
        console.log(`Esta supermesa tiene medidas de ${this.alto}, ${this.ancho} y ${this.largo}. Y está hecha del material ${this.material}`);
    }
}