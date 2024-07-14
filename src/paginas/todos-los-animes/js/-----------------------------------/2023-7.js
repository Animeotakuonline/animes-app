// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/ousama-ranking-yuuki-no-takarabako.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ousama Ranking: Yuuki no Takarabako",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"111",
  },
    {
    imageSrc: "../../img/2023/shanhai-jihui.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shanhai Jihui",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"110",
  },
  {
    imageSrc: "../../img/2023/oshi-no-ko.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Oshi no Ko",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"109",
  },
  {
    imageSrc: "../../img/2023/majutsushi-orphen-hagure-tabi-seiiki-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Majutsushi Orphen Hagure Tabi: Seiiki-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"108",
  },
  {
    imageSrc: "../../img/2023/aiyou-de-mishi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Aiyou de Mishi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"107",
  },
  {
    imageSrc: "../../img/2023/edens-zero-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Edens Zero 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"106",
  },
  {
    imageSrc: "../../img/2023/the-marginal-service.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "The Marginal Service",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"105",
  },
  {
    imageSrc: "../../img/2023/dianqi-shaonu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dianqi Shaonu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"104",
  },
  {
    imageSrc: "../../img/2023/kimi-wa-houkago-insomnia.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kimi wa Houkago Insomnia",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"103",
  },
  {
    imageSrc: "../../img/2023/kanojo-ga-koushaku-tei-ni-itta-riyuu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kanojo ga Koushaku-tei ni Itta Riyuu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"102",
  },
  {
    imageSrc: "../../img/2023/dead-mount-death-play.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dead Mount Death Play",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"101",
  },
  {
    imageSrc: "../../img/2023/tousouchuu-great-mission.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tousouchuu: Great Mission",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"100",
  },
  {
    imageSrc: "../../img/2023/kimetsu-no-yaiba-katanakaji-no-sato-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kimetsu no Yaiba: Katanakaji no Sato-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"99",
  },
  {
    imageSrc: "../../img/2023/kidou-senshi-gundam-suisei-no-majo-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kidou Senshi Gundam: Suisei no Majo Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"98",
  },
  {
    imageSrc: "../../img/2023/ao-no-orchestra.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ao no Orchestra",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"97",
  },
  {
    imageSrc: "../../img/2023/world-dai-star.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "World Dai Star",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"96",
  },
  {
    imageSrc: "../../img/2023/isekai-shoukan-wa-nidome-desu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Shoukan wa Nidome desu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"95",
  },
  {
    imageSrc: "../../img/2023/otonari-ni-ginga.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Otonari ni Ginga",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"94",
  },
  {
    imageSrc: "../../img/2023/tonikaku-kawaii-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tonikaku Kawaii 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"93",
  },
  {
    imageSrc: "../../img/2023/mashle.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mashle",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"92",
  },
  {
    imageSrc: "../../img/2023/isekai-de-cheat-skill-wo-te-ni-shita-ore-wa-genjitsu-sekai-wo-mo-musou-suru-level-up-wa-jinsei-wo-kaeta.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"91",
  },
  {
    imageSrc: "../../img/2023/isekai-one-turn-kill-neesan-ane-douhan-no-isekai-seikatsu-hajimemashita.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai One Turn Kill Neesan: Ane Douhan no Isekai Seikatsu Hajimemashita",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"90",
  },
  {
    imageSrc: "../../img/2023/megami-no-caf-terrace.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Megami no Café Terrace",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"89",
  },
  {
    imageSrc: "../../img/2023/birdie-wing-golf-girls-story-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Birdie Wing: Golf Girls' Story Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"88",
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