// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2009/kowarekake-no-orgel.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Kowarekake no Orgel",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/ladies-versus-butlers.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Ladies versus Butlers!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/chu-bra.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Chuu Bra!!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/baka-to-test-to-shoukanjuu-christmas-special.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Baka to Test to Shoukanjuu: Christmas Special",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/shakugan-no-shana-s.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Shakugan no Shana S",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2009/winter-sonata.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Winter Sonata",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/fairy-tail.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Fairy Tail",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/darker-than-black-ryuusei-no-gemini.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Darker than Black: Ryuusei no Gemini",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/sasameki-koto.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Sasameki Koto",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/kimi-ni-todoke.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Kimi ni Todoke",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2009/kobato.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Kobato",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2009/11-eyes.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "11eyes",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2009/nogizaka-haruka-no-himitsu-purezza.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Nogizaka Haruka no Himitsu: Purezza",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/natsu-no-arashi-akinai-chu.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Natsu no Arashi! Akinaichuu",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/sora-no-otoshimono.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Sora no Otoshimono",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/kanokon-manatsu-no-dai-shanikusai.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Kanokon: Manatsu no Dai Shanikusai",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/seiken-no-blacksmith.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Seiken no Blacksmith",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/tegami-bachi.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Tegami Bachi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/white-album-2nd-season.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "White Album 2nd Season",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2009/inuyasha-kanketsu-hen.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "InuYasha: Kanketsu-hen",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/shugo-chara-party.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Shugo Chara! Party!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2009/seitokai-no-ichizon.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Seitokai no Ichizon",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2009/to-aru-kagaku-no-railgun.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Toaru Kagaku no Railgun",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2009/kampfer.jpg",
    dateAdded: "2009",
    dateOfRelease: "Fecha de emisión",
    name: "Kampfer",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
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