let keyApi=`22abb72a37b248d41b8a25f5388b52c4`
const url= 'https://api.openweathermap.org/data/2.5/weather'
const cel= 273.15
    //asignacion  de  evento click al boton

    document.getElementById(`botonBusqueda`).addEventListener('click',()=>{
        const ciudad = document.getElementById('ciudadEntrada').value

        if (ciudad){
            fetchDatosClima(ciudad)

        }
    } )


    function  fetchDatosClima (ciudad){
        fetch(`${url}?q=${ciudad}&appid=${keyApi}`)
        .then(Response  => Response.json())
        .then (Response => mostrarDatosClima(Response))
    }
    
    function mostrarDatosClima(Response){
        console.log(Response);
            const divDatosClima = document.getElementById('datosClima')
                 divDatosClima.innerHTML=''
                    const ciudadNombre = Response.name
                    const temp = Response.main.temp
                    const descrip = Response.weather[0].description
                    const icon = Response.weather[0].icon

                    const ElemImg = document.createElement('img')
                        ElemImg.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
                    const ElemciudadTitulo = document.createElement('h2')
                    ElemciudadTitulo.textContent =  ciudadNombre
                    const ElemTemp = document.createElement('p')
                    ElemTemp.textContent= `La temperatura es:  ${Math.floor(temp-cel)} grados xd`
                    const ElemDescrip = document.createElement('p')
                    ElemDescrip.textContent = descrip

                divDatosClima.appendChild(ElemciudadTitulo)
                divDatosClima.appendChild(ElemTemp)
                divDatosClima.appendChild(ElemDescrip)
                divDatosClima.appendChild(ElemImg)
    }


