function obtenerNombres() {
    let flag = true;
    do {
        const nombreTmp = (prompt('Ingresa tu nombre...'));
        const apellidoTmp = (prompt('Ingresa tu apellido...'));
        //console.log(typeof(nombreTmp))
        if ((typeof nombreTmp === 'string') && (typeof apellidoTmp === 'string')) {
            const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
            if ((regex.test(nombreTmp)) && (regex.test(apellidoTmp))) {
                flag = false;
                // this.nombre = nombreTmp;
                // this.apellido = apellidoTmp;
                return { nombre: nombreTmp, apellido: apellidoTmp }
            } else {
                alert('Solo letras...');
            }
        } else {
            alert('Por favor ingresa nombre y apellido.');
        }
    } while (flag)
}

export default obtenerNombres;