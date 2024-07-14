// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    
      {
        imageSrc: "../../img/2013/gundam-build-fighters.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Gundam Build Fighters",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"202",
      },
      {
        imageSrc: "../../img/2013/magi-the-kingdom-of-magic.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Magi 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"201",
      },
      {
        imageSrc: "../../img/2013/kuroko-no-basket-2.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kuroko no Basket 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"200",
      },
      {
        imageSrc: "../../img/2013/hajime-no-ippo-rising.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hajime no Ippo: Rising",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"199",
      },
      {
        imageSrc: "../../img/2013/phi-brain-kami-no-puzzle-3rd-season.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Phi Brain: Kami no Puzzle 3rd Season",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"198",
      },
      {
        imageSrc: "../../img/2013/yozakura-quartet-hana-no-uta.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yozakura Quartet: Hana no Uta",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"197",
      },
      {
        imageSrc: "../../img/2013/aoki-hagane-no-arpeggio-ars-nova.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Aoki Hagane no Arpeggio: Ars Nova",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"196",
      },
      {
        imageSrc: "../../img/2013/naruto-shippuuden-sunny-side-battle.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto Shippuden: Sunny Side Battle",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"195",
      },
      {
        imageSrc: "../../img/2013/tesagure-bukatsumono.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Tesagure! Bukatsumono",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"194",
      },
      {
        imageSrc: "../../img/2013/log-horizon.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Log Horizon",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"193",
      },
      {
        imageSrc: "../../img/2013/teekyuu-3.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Teekyuu 3",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"192",
      },
      {
        imageSrc: "../../img/2013/little-busters-refrain.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Little Busters!: Refrain",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"191",
      },
      {
        imageSrc: "../../img/2013/freezing-vibration.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Freezing Vibration",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"190",
      },
      {
        imageSrc: "../../img/2013/walkure-romanze.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Walkure Romanze",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"189",
      },
      {
        imageSrc: "../../img/2013/sekai-de-ichiban-tsuyoku-naritai.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Sekai de Ichiban Tsuyoku Naritai!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"188",
      },
      {
        imageSrc: "../../img/2013/gingitsune.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Gingitsune",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"187",
      },
      {
        imageSrc: "../../img/2013/nagi-no-asukara.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Nagi no Asukara",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"186",
      },
      {
        imageSrc: "../../img/2013/kill-la-kill.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kill la Kill",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"185",
      },
      {
        imageSrc: "../../img/2013/golden-time.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Golden Time",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"184",
      },
      {
        imageSrc: "../../img/2013/strike-the-blood.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Strike the Blood",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"183",
      },
      {
        imageSrc: "../../img/2013/outbreak-company.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Outbreak Company",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"182",
      },
      {
        imageSrc: "../../img/2013/yuusha-ni.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yuushibu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"181",
      },
      {
        imageSrc: "../../img/2013/white-album2.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "White Album 2 ( 2013)",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"180",
      },
      {
        imageSrc: "../../img/2013/diamond-no-ace.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Diamond no Ace",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"179",
      },
      


    // Agrega más objetos según sea necesario
  ];


 
// Función para agregar una tarjeta al contenedor
function addCard(cardData, index) {
  const cardsContainer = document.getElementById("cardsContainer");

  const visto = cardData.visto || false;
  const por_ver = cardData.por_ver || false;
  const mirando = cardData.mirando || false;

  const cardHTML = `
    <div class="p-4 w-full sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <a href="${cardData.readMoreLink || '#'}">
          <img class="h-72 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
        </a>
        <div class="p-6">
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
          <h1 class="text-2xl font-semibold mb-3 sm:text-xl sm:card-title">${cardData.name}</h1>
          <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm mr-2 mb-2">${cardData.status}</h3>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3">
              <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                ${cardData.availability}
              </span>
            </div>
          </li>
          <div class="flex items-center flex-wrap">
            <a href="${cardData.readMoreLink || '#'}" class="${visto ? 'text-orange-400' : por_ver ? 'text-orange-400' : mirando ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Leer Más
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="flex items-center flex-wrap">
            <p class="${visto ? 'text-white' : por_ver ? 'text-white' : mirando ? 'text-white' : 'text-black-600'} inline-flex items-center md:mb-2 lg:mb-0">#${cardData.num}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  cardsContainer.innerHTML += cardHTML;
}

cardsData.forEach((data, index) => addCard(data, index));

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

  document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.add('hidden');
    }
  });
});