// Simulador de Carrito

class guitarras {
    constructor(nombre, tipo, precio) {
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
    }
}

guitarras1 = new guitarras('Guitarra Fender Classic Design', 'acustica', 106.673)
const guitarras2 = new guitarras('Guitarra Yamaha Slg200nw Silent Nt Natural', 'Electroacústica', 244.293)
const guitarras3 = new guitarras('Guitarra Epiphone Les Paul Special VE', 'eléctrica', 53.515)

const carrito = []


const mostrarMensaje = (guitarras) => {
    alert('La guitarra ' + guitarras.nombre + ' del tipo ' + guitarras.tipo + ' cuesta $' + guitarras.precio)
}


const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}
alert('Hola bienvenido a nuestra tienda de Guitarras')
const agregarProducto = () => {
    const productoElegido = prompt('Elegi una guitarra entre: \n1. guitarra Fender Classic Design \n2. Guitarra Yamaha Slg200nw Silent Nt Natural \n3. Guitarra Epiphone Les Paul Special VE').toLowerCase()

    switch (productoElegido) {
        case '1':
            mostrarMensaje(guitarras1)
            carrito.push(guitarras1)
            break
        case '2':
            mostrarMensaje(guitarras2)
            carrito.push(guitarras2)
            break
        case '3':
            mostrarMensaje(guitarras3)
            carrito.push(guitarras3)
            break
        default:
            alert('Por favor, ingresa una opcion correcta')
            break
    }

    if (confirm('Desea agregar otro producto?')) {
        agregarProducto()
    } else {
        alert('Finalizo Compra, su total es de $' + totalCarrito())
        console.log(carrito)
    }
}

agregarProducto()
alert('Muchas gracias por su Compra')