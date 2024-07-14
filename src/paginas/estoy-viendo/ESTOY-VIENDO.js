// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    
    {
      imageSrc: "../img/2018/yuru-camp.jpg",
      dateAdded: "2018",
      dateOfRelease: "Fecha de emisión: 04-01-2018",
      name: "Yuru Camp△",
      status: "Finalizado",
      availability: "Disponible 12 capitulos",
    },
    {
      imageSrc: "../img/2020/jujutsu-kaisen-tv.jpg",
      dateAdded: "2020",
      dateOfRelease: "Fecha de emisión: 03-10-2020",
      name: "Jujutsu Kaisen (TV)",
      status: "Finalizado",
      availability: "Disponible 24 capitulos",
    },
    {
      imageSrc: "../img/2024/yubisaki-to-renren.jpg",
      dateAdded: "2020",
      dateOfRelease: "Fecha de emisión: 06-01-24",
      name: "Yubisaki to Renren",
      status: "En emsion",
      availability: "Disponible 7 capitulos ",
    },
    {
      imageSrc: "../img/2023/kusuriya-no-hitorigoto.jpg",
      dateAdded: "2023",
      dateOfRelease: "Fecha de emisión: 22-10-23",
      name: "Kusuriya no Hitorigoto",
      status: "En emsion",
      availability: "Disponible 19 capitulos {hasta hoy 14 de febrero del 2024}",
    },
    {
      imageSrc: "../img/2024/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-2nd.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 07-01-24",
      name: "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita 2nd",
      status: "En emsion",
      availability: "Disponible 6 capitulos ",
    },
    {
      imageSrc: "../img/2020/",
      dateAdded: "2020",
      dateOfRelease: "Fecha de emisión",
      name: "Nombre del anime",
      status: "Finalizado",
      availability: "Disponible 12 capitulos",
    },
    {
      imageSrc: "../img/2020/",
      dateAdded: "2020",
      dateOfRelease: "Fecha de emisión",
      name: "Nombre del anime",
      status: "Finalizado",
      availability: "Disponible 12 capitulos",
    },
    {
      imageSrc: "../img/2020/",
      dateAdded: "2020",
      dateOfRelease: "Fecha de emisión",
      name: "Nombre del anime",
      status: "Finalizado",
      availability: "Disponible 12 capitulos",
    },
    {
      imageSrc: "../img/2020/",
      dateAdded: "2020",
      dateOfRelease: "Fecha de emisión",
      name: "Nombre del anime",
      status: "Finalizado",
      availability: "Disponible 12 capitulos",
    },
    {
      imageSrc: "../img/2020/",
      dateAdded: "2020",
      dateOfRelease: "Fecha de emisión",
      name: "Nombre del anime",
      status: "Finalizado",
      availability: "Disponible 12 capitulos",
    }
     // Agrega más objetos según sea necesario
];
// Función para agregar una tarjeta al contenedor
// Función para agregar una tarjeta al contenedor
function addCard(cardData, index) {
  const cardsContainer = document.getElementById("cardsContainer");

  // Modifica la condición para incluir las tarjetas deseadas
  const isSpecialCard = [].includes(index);

  const cardHTML = `
    <div class="p-4 sm:w-1/2 lg:w-1/4 ${isSpecialCard ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white' : 'bg-white text-black'} mx-auto">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-72 md:h-48 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
        <div class="p-6">
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
          <h1 class="text-2xl font-semibold mb-3">${cardData.name}</h1>
          <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-0 py-2.5 ">${cardData.status}</h3>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3">
              <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                ${cardData.availability}
              </span>
            </div>
          </li>
          
          <div class="flex items-center flex-wrap">
            <a href="#" class="${isSpecialCard ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Read More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  cardsContainer.innerHTML += cardHTML;
  }
  
  // Agrega las tarjetas iniciales
  cardsData.forEach(addCard);
  
  // Evento para agregar una nueva tarjeta al hacer clic en el botón
  document.getElementById("addCardBtn").addEventListener("click", () => {
    const newCardData = {
      // Datos para la nueva tarjeta
    };
    addCard(newCardData);
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');
  
    dropdownButton.addEventListener('click', () => {
      dropdownContent.classList.toggle('hidden');
    });
  
    // Cerrar la lista desplegable si se hace clic fuera de ella
    document.addEventListener('click', (event) => {
      if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.add('hidden');
      }
    });
  });


  const fechaActual = new Date();
const fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

// Reemplazar la fecha manualmente
const textoActualizado = "{" + fechaFormateada + "}";

// Mostrar el texto actualizado
document.getElementById("texto").innerHTML = textoActualizado;
