const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "./assets/img/16185679347539.jpg",
    rooms: 5,
    m: 500
  }
];
const propiedad = document.getElementById("propiedad");
const btnBuscar = document.getElementById("btnBuscar");
const total = document.getElementById("total");

const templatePropiedad = ({ name, description, src, rooms, m }) => {
  return `<div class="propiedad">
        <div class="img" style="background-image: url(${src})"></div>
        <section>
            <h5>${name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${rooms}</p>
                <p>Metros: ${m}</p>
            </div>
            <p class="my-3">${description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
    </div>`;
};
const mostrarPropiedades = () => {
  let html = "";
  for (const propiedad of propiedadesJSON) {
    html += templatePropiedad(propiedad);
  }
  total.innerHTML = propiedadesJSON.length;
  propiedad.innerHTML = html;
}
mostrarPropiedades();

btnBuscar.addEventListener("click", () => {
  const cuartos = parseInt(document.getElementById("cuartos").value);
  const desde = parseInt(document.getElementById("desde").value);
  const hasta = parseInt(document.getElementById("hasta").value);
  if (cuartos == null || desde == null || hasta == null || isNaN(cuartos) || isNaN(desde) || isNaN(hasta) || cuartos < 0 || desde < 0 || hasta < 0) {
    alert("Debe rellerar los campos con datos válidos");
  } else {
    const propiedades = propiedadesJSON.filter((propiedad) => {
      return propiedad.rooms >= cuartos && propiedad.m >= desde && propiedad.m <= hasta;
    });
    let html = "";
    for (const propiedad of propiedades) {
      html += templatePropiedad(propiedad);
    }
    total.innerHTML = propiedades.length;
    propiedad.innerHTML = html;
  }
});
