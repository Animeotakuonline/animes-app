// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/sugar-apple-fairy-tale-part-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Sugar Apple Fairy Tale Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"159",
  },
  {
    imageSrc: "../../img/2023/hyakushou-kizoku.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hyakushou Kizoku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"158",
  },
  {
    imageSrc: "../../img/2023/jujutsu-kaisen-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Jujutsu Kaisen 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"157",
  },
  {
    imageSrc: "../../img/2023/rurouni-kenshin-meiji-kenkaku-romantan-2023.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Rurouni Kenshin: Meiji Kenkaku Romantan (2023)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"156",
  },
  {
    imageSrc: "../../img/2023/higeki-no-genkyou-to-naru-saikyou-gedou-last-boss-joou-wa-tami-no-tame-ni-tsukushimasu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"155",
  },
  {
    imageSrc: "../../img/2023/seija-musou-salaryman-isekai-de-ikinokoru-tame-ni-ayumu-michi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Seija Musou: Salaryman, Isekai de Ikinokoru Tame ni Ayumu Michi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"154",
  },
  {
    imageSrc: "../../img/2023/watashi-no-shiawase-na-kekkon.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Watashi no Shiawase na Kekkon",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"153",
  },
  {
    imageSrc: "../../img/2023/jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"152",
  },
  {
    imageSrc: "../../img/2023/undead-girl-murder-farce.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Undead Girl Murder Farce",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"151",
  },
  {
    imageSrc: "../../img/2023/suki-na-ko-ga-megane-wo-wasureta.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Suki na Ko ga Megane wo Wasureta",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"150",
  },
  {
    imageSrc: "../../img/2023/yumemiru-danshi-wa-genjitsushugisha.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Yumemiru Danshi wa Genjitsushugisha",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"149",
  },
  {
    imageSrc: "../../img/2023/okashi-na-tensei.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Okashi na Tensei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"148",
  },
  {
    imageSrc: "../../img/2023/mononogatari-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mononogatari 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"147",
  },
  {
    imageSrc: "../../img/2023/wu-nao-monu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Wu Nao Monu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"146",
  },
  {
    imageSrc: "../../img/2023/masamune-kun-no-revenge-r.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Masamune-kun no Revenge R",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"145",
  },
  {
    imageSrc: "../../img/2023/mushoku-tensei-ii-isekai-ittara-honki-dasu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mushoku Tensei II: Isekai Ittara Honki Dasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"144",
  },
  {
    imageSrc: "../../img/2023/fatestrange-fake-whispers-of-dawn.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Fate/strange Fake: Whispers of Dawn",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"143",
  },
  {
    imageSrc: "../../img/2023/ququ-bucai-zaixia-yeguai-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ququ Bucai, Zaixia Yeguai 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"142",
  },
  {
    imageSrc: "../../img/2023/feng-ling-yu-xiu-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Feng Ling Yu Xiu 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"141",
  },
  {
    imageSrc: "../../img/2023/horimiya-piece.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Horimiya: Piece",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"140",
  },
  {
    imageSrc: "../../img/2023/uchi-no-kaisha-no-chiisai-senpai-no-hanashi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Uchi no Kaisha no Chiisai Senpai no Hanashi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"139",
  },
  {
    imageSrc: "../../img/2023/jitsu-wa-ore-saikyou-deshita.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Jitsu wa Ore, Saikyou deshita?",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"138",
  },
  {
    imageSrc: "../../img/2023/ryza-no-atelier-tokoyami-no-joou-to-himitsu-no-kakurega.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ryza no Atelier: Tokoyami no Joou to Himitsu no Kakurega",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"137",
  },
  {
    imageSrc: "../../img/2023/spy-kyoushitsu-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Spy Kyoushitsu 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"136",
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