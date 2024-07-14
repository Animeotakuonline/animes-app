// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2015/macross-delta.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Macross Δ",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"271",
  },
  {
    imageSrc: "../../img/2015/luck-logic.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Luck & Logic",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"270",
  },
  {
    imageSrc: "../../img/2015/aoharu-x-kikanjuu-special.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Aoharu x Kikanjuu Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"269",
  },
  {
    imageSrc: "../../img/2015/aria-the-avvenire.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Aria The Avvenire",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"267",
  },
  {
    imageSrc: "../../img/2015/boruto-naruto-the-movie.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Boruto: Naruto the Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"266",
  },
  {
    imageSrc: "../../img/2015/kindaichi-shounen-no-jikenbo-returns-akechi-keibu-no-jikenbo.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Kindaichi Shounen no Jikenbo Returns: Akechi Keibu no Jikenbo",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"265",
  },
  {
    imageSrc: "../../img/2015/working-lord-of-the-takanashi.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Working!!! Lord of the Takanashi",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"264",
  },
  {
    imageSrc: "../../img/2015/tokyo-ghoul-pinto.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Ghoul: 'Pinto'",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"263",
  },
  {
    imageSrc: "../../img/2015/futsuu-no-joshikousei-ga-locodol-yatte-mita-christmas-special.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "[Locodol]: Christmas Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"262",
  },
  {
    imageSrc: "../../img/2015/kuroko-no-basket-saikou-no-present-desu.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Kuroko no Basket: Saikou no Present Desu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"261",
  },
  {
    imageSrc: "../../img/2015/one-punch-man-specials.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "One Punch Man Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"260",
  },
  {
    imageSrc: "../../img/2015/bikini-warriors-special.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Bikini Warriors Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"259",
  },
  {
    imageSrc: "../../img/2015/one-piece-adventure-of-nebulandia.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "One Piece: Adventure of Nebulandia",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"258",
  },
  {
    imageSrc: "../../img/2015/valkyrie-drive-mermaid-specials.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Valkyrie Drive: Mermaid Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"257", 
  },
  {
    imageSrc: "../../img/2015/love-live-the-school-idol-movie.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Love Live! The School Idol Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"257",
  },
  {
    imageSrc: "../../img/2015/hibike-euphonium-kakedasu-monaka.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Hibike! Euphonium: Kakedasu Monaka",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"256",
  },

  {
    imageSrc: "../../img/2015/high-school-dxd-born-yomigaerarenai-pheonix.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "High School DxD BorN: Yomigaerarenai Pheonix",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"254",
  },
  {
    imageSrc: "../../img/2015/one-punch-man-road-to-hero.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "One Punch Man: Road to Hero",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"253",
  },
  {
    imageSrc: "../../img/2015/steinsgate-kyoukaimenjou-no-missing-link.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Steins;Gate: Kyoukaimenjou no Missing Link",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"252",
  },
  {
    imageSrc: "../../img/2015/shen-ming-zhi-zhou.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Shen Ming Zhi Zhou",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"251",
  },
  {
    imageSrc: "../../img/2015/strike-the-blood-valkyria-no-oukoku-hen.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Strike the Blood: Valkyria no Oukoku-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"250",
  },
  {
    imageSrc: "../../img/2015/girls-und-panzer-der-film.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Girls und Panzer der Film",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"249",
  },
  {
    imageSrc: "../../img/2015/digimon-adventure-tri-1-saikai.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Digimon Adventure tri",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"248",
  },
  {
    imageSrc: "../../img/2015/noragami-aragoto-ova.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Noragami Aragoto OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"247",
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