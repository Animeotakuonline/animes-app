// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/uramichi-oniisan.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Uramichi Oniisan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"149",
  },
  {
    imageSrc: "../../img/2021/seirei-gensouki.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Seirei Gensoukie",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"148",
  },
  {
    imageSrc: "../../img/2021/tensei-shitara-slime-datta-ken-2nd-season-part-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei shitara Slime Datta Ken 2nd Season Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"147",
  },
  {
    imageSrc: "../../img/2021/idolish7-third-beat.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "IDOLiSH7: Third Beat!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"146",
  },
  {
    imageSrc: "../../img/2021/kageki-shoujo.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kageki Shoujo!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"145",
  },
  {
    imageSrc: "../../img/2021/genjitsu-shugi-yuusha-no-oukoku-saikenki.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Genjitsu Shugi Yuusha no Oukoku Saikenki",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"144",
  },
  {
    imageSrc: "../../img/2021/re-main.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Re-Main",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"143",
  },
  {
    imageSrc: "../../img/2021/shinigami-bocchan-to-kuro-maid.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shinigami Bocchan to Kuro Maid",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"142",
  },
  {
    imageSrc: "../../img/2021/tantei-wa-mou-shindeiru.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tantei wa Mou, Shindeiru.",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"141",
  },
  {
    imageSrc: "../../img/2021/getter-robo-arc.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Getter Robo Arc",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"140",
  },
  {
    imageSrc: "../../img/2021/otome-game-no-hametsu-flag-shika-nai-akuyaku-reijou-ni-tensei-shiteshimatta-x.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... X",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"139",
  },
  {
    imageSrc: "../../img/2021/kanojo-mo-kanojo.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kanojo mo Kanojo",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"138",
  },
  {
    imageSrc: "../../img/2021/vanitas-no-karte.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Vanitas no Karte",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"137",
  },
  {
    imageSrc: "../../img/2021/bokutachi-no-remake.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Bokutachi no Remake",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"136",
  },
  {
    imageSrc: "../../img/2021/mahouka-koukou-no-yuutousei.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mahouka Koukou no Yuutousei",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"135",
  },
  {
    imageSrc: "../../img/2021/peach-boy-riverside.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Peach Boy Riverside",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"134",
  },
  {
    imageSrc: "../../img/2021/higurashi-no-naku-koro-ni-sotsu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Higurashi no Naku Koro ni Sotsu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"133",
  },
  {
    imageSrc: "../../img/2021/nanatsu-no-taizai-movie-2-hikari-ni-norowareshi-mono-tachi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Nanatsu no Taizai Movie 2: Hikari ni Norowareshi Mono-tachi",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"132",
  },
  {
    imageSrc: "../../img/2021/wonder-egg-priority-special.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Wonder Egg Priority Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"131",
  },
  {
    imageSrc: "../../img/2021/bang-dream-movie-episode-of-roselia-ii-song-i-am.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "BanG Dream! Movie: Episode of Roselia - II: Song I Am.",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"130",
  },
  {
    imageSrc: "../../img/2021/sonny-boy.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Sonny Boy",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"129",
  },
  {
    imageSrc: "../../img/2021/scarlet-nexus.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Scarlet Nexus",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"128",
  },
  {
    imageSrc: "../../img/2021/shuumatsu-no-walkre.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shuumatsu no Valkyrie",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"127",
  },
  {
    imageSrc: "../../img/2021/sayonara-watashi-no-cramer-movie-first-touch.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Sayonara Watashi no Cramer Movie: First Touch",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"126",
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