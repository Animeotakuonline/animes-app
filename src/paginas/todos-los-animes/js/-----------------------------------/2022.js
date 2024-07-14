// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2022/gokushufudou-season-2.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Gokushufudou Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"224",
  },
  {
    imageSrc: "../../img/2022/tensei-oujo-to-tensai-reijou-no-mahou-kakumei.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei Oujo to Tensai Reijou no Mahou Kakumei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"223",
  },
  {
    imageSrc: "../../img/2022/cang-lan-jue-part-2.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Cang Lan Jue Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"222",
  },
  {
    imageSrc: "../../img/2022/kaguya-sama-wa-kokurasetai-first-kiss-wa-owaranai.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto: true,
    num:"221",
  },
  {
    imageSrc: "../../img/2022/lupin-zero.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Lupin Zero",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"220",
  },
  {
    imageSrc: "../../img/2022/isekai-meikyuu-de-harem-wo-specials.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Meikyuu de Harem wo Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"219",
  },
  {
    imageSrc: "../../img/2022/tensei-shitara-slime-datta-ken-movie-guren-no-kizuna-hen.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto: true,
    num:"218",
  },
  {
    imageSrc: "../../img/2022/tonikaku-kawaii-seifuku.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tonikaku Kawaii: Seifuku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto: true,
    num:"217",
  },
  {
    imageSrc: "../../img/2022/suzume-no-tojimari.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Suzume no Tojimari",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"216",
  },
  {
    imageSrc: "../../img/2022/xue-yu-xin.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Xue Yu Xin",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"215",
  },
  {
    imageSrc: "../../img/2022/kancolle-itsuka-ano-umi-de.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "KanColle: Itsuka Ano Umi de",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto: true,
    num:"214",
  },
  {
    imageSrc: "../../img/2022/arknights-reimei-zensou.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Arknights: Reimei Zensou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"213",
  },
  {
    imageSrc: "../../img/2022/romantic-killer.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Romantic Killer",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"212",
  },
  {
    imageSrc: "../../img/2022/fumetsu-no-anata-e-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Fumetsu no Anata e 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"211",
  },
  {
    imageSrc: "../../img/2022/sword-art-online-progressive-movie-kuraki-yuuyami-no-scherzo.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Sword Art Online: Progressive Movie - Kuraki Yuuyami no Scherzo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"210",
  },
  {
    imageSrc: "../../img/2022/4-nin-wa-sorezore-uso-wo-tsuku.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "4-nin wa Sorezore Uso wo Tsuku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"209",
  },
  {
    imageSrc: "../../img/2022/urusei-yatsura-2022.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Urusei Yatsura (2022)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"208",
  },
  {
    imageSrc: "../../img/2022/watashi-ni-tenshi-ga-maiorita-precious-friends.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Watashi ni Tenshi ga Maiorita! Precious Friends",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"207",
  },
  {
    imageSrc: "../../img/2022/aru-asa-dummy-head-mic-ni-natteita-ore-kun-no-jinsei.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Aru Asa Dummy Head Mic ni Natteita Ore-kun no Jinsei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"206",
  },
  {
    imageSrc: "../../img/2022/chainsaw-man.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Chainsaw Man",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"205",
  },
  {
    imageSrc: "../../img/2022/renai-flops.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Renai Flops",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"204",
  },
  {
    imageSrc: "../../img/2022/bleach-sennen-kessen-hen.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Bleach: Sennen Kessen-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"203",
  },
  {
    imageSrc: "../../img/2022/cool-doji-danshi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Cool Doji Danshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"202",
  },
  {
    imageSrc: "../../img/2022/eternal-boys.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Eternal Boys",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"201",
  },
]
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