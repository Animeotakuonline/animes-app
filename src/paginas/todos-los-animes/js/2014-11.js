// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/kamisama-no-inai-nichiyoubi-special.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kamisama no Inai Nichiyoubi Special",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"42",
      },
      {
        imageSrc: "../../img/2014/happiness-charge-precure.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Happiness Charge Precure!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"41",
      },
      {
        imageSrc: "../../img/2014/little-busters-ex.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Little Busters!: EX",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"40",
      },
      {
        imageSrc: "../../img/2014/the-idolmster-movie-kagayaki-no-mukougawa-e.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "The iDOLM@STER Movie: Kagayaki no Mukougawa e!",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"39",
      },
      {
        imageSrc: "../../img/2014/kimi-no-iru-machi-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kimi no Iru Machi OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"38",
      },
      {
        imageSrc: "../../img/2014/inari-konkon-koi-iroha.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Inari, Konkon, Koi Iroha",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"37",
      },
      {
        imageSrc: "../../img/2014/maken-ki-two.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Maken-Ki! Two",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"36",
      },
      {
        imageSrc: "../../img/2014/tonari-no-seki-kun-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Tonari no Seki-kun OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"35",
      },
      {
        imageSrc: "../../img/2014/wizard-barristers-benmashi-cecil.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Wizard Barristers: Benmashi Cecil",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"34",
      },
      {
        imageSrc: "../../img/2014/nourin.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nourin",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"33",
      },
      {
        imageSrc: "../../img/2014/sakura-trick.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sakura Trick",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"32",
      },
      {
        imageSrc: "../../img/2014/sekai-seifuku-bouryaku-no-zvezda.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sekai Seifuku: Bouryaku no Zvezda",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"31",
      },
      {
        imageSrc: "../../img/2014/nisekoi.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nisekoi",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"30",
      },
      {
        imageSrc: "../../img/2014/wake-up-girls.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Wake Up, Girls!",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"29",
      },
      {
        imageSrc: "../../img/2014/wake-up-girls-shichinin-no-idol.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Wake Up, Girls! Shichinin no Idol",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"28",
      },
      {
        imageSrc: "../../img/2014/go-go-575.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Go! Go! 575",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"27",
      },
      {
        imageSrc: "../../img/2014/mikakunin-de-shinkoukei.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mikakunin de Shinkoukei",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"26",
      },
      {
        imageSrc: "../../img/2014/hoozuki-no-reitetsu.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Hoozuki no Reitetsu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"25",
      },
      {
        imageSrc: "../../img/2014/strange-plus.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Strange+",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"24",
      },
      {
        imageSrc: "../../img/2014/onee-chan-ga-kita.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Onee-chan ga Kita",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"23",
      },
      {
        imageSrc: "../../img/2014/pupa.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Pupa",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"22",
      },
      {
        imageSrc: "../../img/2014/mahou-sensou.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Sensou",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"21",
      },
      {
        imageSrc: "../../img/2014/z-x-ignition.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Z/X: Ignition",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"20",
      },
      {
        imageSrc: "../../img/2014/chuunibyou-demo-koi-ga-shitai-ren.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Chuunibyou demo Koi ga Shitai! Ren",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"19",
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
    <div class="p-4 w-full sm:w-1/2 lg:w-1/2 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
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