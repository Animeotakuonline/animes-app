// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
   {
    imageSrc: "../../img/2022/dance-dance-danseur.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Dance Dance Danseur",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"80",
  },
  {
    imageSrc: "../../img/2022/ao-ashi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Ao Ashi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"79",
  },
  {
    imageSrc: "../../img/2022/yatogame-chan-kansatsu-nikki-4th-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yatogame-chan Kansatsu Nikki 4th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"78",
  },
  {
    imageSrc: "../../img/2022/komi-san-wa-comyushou-desu-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Komi-san wa, Comyushou desu. 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"77",
  },
  {
    imageSrc: "../../img/2022/mahoutsukai-reimeiki.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Mahoutsukai Reimeiki",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"76",
  },
  {
    imageSrc: "../../img/2022/machikado-mazoku-2-choume.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Machikado Mazoku: 2-choume",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"75",
  },
  {
    imageSrc: "../../img/2022/date-a-live-iv.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Date A Live IV",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"74",
  },
  {
    imageSrc: "../../img/2022/koi-wa-sekai-seifuku-no-ato-de.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Koi wa Sekai Seifuku no Ato de",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"73",
  },
  {
    imageSrc: "../../img/2022/shachiku-san-wa-youjo-yuurei-ni-iyasaretai.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shachiku-san wa Youjo Yuurei ni Iyasaretai.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"72",
  },
  {
    imageSrc: "../../img/2022/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"71",
  },
  {
    imageSrc: "../../img/2022/heroine-tarumono-kiraware-heroine-to-naisho-no-oshigoto.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Heroine Tarumono! Kiraware Heroine to Naisho no Oshigoto",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"70",
  },
  {
    imageSrc: "../../img/2022/tomodachi-game.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tomodachi Game",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    por_ver:true,
    num:"69",
  },
  {
    imageSrc: "../../img/2022/shijou-saikyou-no-daimaou-murabito-a-ni-tensei-suru.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shijou Saikyou no Daimaou, Murabito A ni Tensei suru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"68",
  },
  {
    imageSrc: "../../img/2022/tate-no-yuusha-no-nariagari-season-2.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tate no Yuusha no Nariagari Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"67",
  },
  {
    imageSrc: "../../img/2022/rpg-fudousan.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "RPG Fudousan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"66",
  },
  {
    imageSrc: "../../img/2022/deaimon.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Deaimon",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    por_ver:true,
    num:"65",
  },
  {
    imageSrc: "../../img/2022/birdie-wing-golf-girls-story.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Birdie Wing: Golf Girls' Story",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"64",
  },
  {
    imageSrc: "../../img/2022/meitantei-conan-zero-no-tea-time.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Meitantei Conan: Zero no Tea Time",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"63",
  },
  {
    imageSrc: "../../img/2022/paripi-koumei.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Paripi Koumei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"62",
  },
  {
    imageSrc: "../../img/2022/yuusha-yamemasu.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yuusha, Yamemasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"61",
  },
  {
    imageSrc: "../../img/2022/healer-girl.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Healer Girl",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"60",
  },
  {
    imageSrc: "../../img/2022/otome-game-sekai-wa-mob-ni-kibishii-sekai-desu.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Otome Game Sekai wa Mob ni Kibishii Sekai desu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    por_ver:true,
    num:"59",
  },
  {
    imageSrc: "../../img/2022/build-divide-code-white.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Build Divide: Code White",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"58",
  },
  {
    imageSrc: "../../img/2022/magia-record-mahou-shoujo-madokamagica-gaiden-tv-final-season-asaki-yume-no-akatsuki.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Magia Record: Mahou Shoujo Madoka☆Magica Gaiden (TV) Final Season - Asaki Yume no Akatsuki",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"57",
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