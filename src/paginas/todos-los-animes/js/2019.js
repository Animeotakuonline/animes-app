// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2019/fategrand-order-moonlightlostroom.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Fate/Grand Order: Moonlight/Lostroom",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    visto:true,
    num:"215",
  },
  {
    imageSrc: "../../img/2019/saiki-kusuo-no-nan-shidou-hen.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Saiki Kusuo no Ψ-nan: Ψ-shidou-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"214",
  },
  {
    imageSrc: "../../img/2019/zhen-hun-jie-bei-luo-shi-men-pian-part-1.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Zhen Hun Jie: Bei Luo Shi Men Pian Part 1",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"213",
  },
  {
    imageSrc: "../../img/2019/plunderer.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Plunderer",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    visto:true,
    num:"212",
  },
  {
    imageSrc: "../../img/2019/kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-special.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Kono Yo no Hate de Koi wo Utau Shoujo YU-NO Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"211",
  },
  {
    imageSrc: "../../img/2019/arifureta-shokugyou-de-sekai-saikyou-specials.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Arifureta Shokugyou de Sekai Saikyou Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    visto:true,
    num:"210",
  },
  {
    imageSrc: "../../img/2019/boku-no-hero-academia-the-movie-2-heroesrising.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Hero Academia the Movie 2: Heroes:Rising",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    visto:true,
    num:"209",
  },
  {
    imageSrc: "../../img/2019/bokura-no-nanokakan-sensou.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Bokura no Nanokakan Sensou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"208",
  },
  {
    imageSrc: "../../img/2019/fragtime.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Fragtime",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"207",
  },
  {
    imageSrc: "../../img/2019/pokemon-2019.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Pokemon (2019)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"206",
  },
  {
    imageSrc: "../../img/2019/rezero-kara-hajimeru-isekai-seikatsu-hyouketsu-no-kizuna.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    visto:true,
    num:"205",

  },
  {
    imageSrc: "../../img/2019/bokutachi-wa-benkyou-ga-dekinai-ova.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Bokutachi wa Benkyou ga Dekinai: Nagisa ni Usemono Arite Senjin wa Enzen to [X] Suru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    por_ver:true,
    num:"204",
  },
  {
    imageSrc: "../../img/2019/kengan-ashura-part-2.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Kengan Ashura Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"203",
  },
  {
    imageSrc: "../../img/2019/saenai-heroine-no-sodatekata-fine.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Saenai Heroine no Sodatekata Fine",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"202",
  },
  {
    imageSrc: "../../img/2019/high-score-girl-ii.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "High Score Girl II",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"201",
  },
  {
    imageSrc: "../../img/2019/psycho-pass-3.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Psycho-Pass 3",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"200",
  },
  {
    imageSrc: "../../img/2019/chihayafuru-3.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Chihayafuru 3",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"199",
  },
  {
    imageSrc: "../../img/2019/human-lost-ningen-shikkaku.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Human Lost: Ningen Shikkaku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"198",
  },
  {
    imageSrc: "../../img/2019/wu-liuqi-zui-qiang-fa-xing-shi.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Wu Liuqi: Zui Qiang Fa Xing Shi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"197",
  },
  {
    imageSrc: "../../img/2019/one-punch-man-2nd-season-specials.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "One Punch Man 2nd Season Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"196",
  },
  {
    imageSrc: "../../img/2019/rifle-is-beautiful.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Rifle Is Beautiful",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"195",
  },
  {
    imageSrc: "../../img/2019/boku-no-hero-academia-4th-season.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Hero Academia 4th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    visto:true,
    num:"194",
  },
  {
    imageSrc: "../../img/2019/sword-art-online-alicization-war-of-underworld.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Sword Art Online: Alicization - War of Underworld",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    visto:true,
    num:"193",
  },
  {
    imageSrc: "../../img/2019/kabukichou-sherlock.jpg",
    dateAdded: "2019",
    dateOfRelease: "Fecha de emisión",
    name: "Kabukichou Sherlock",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2019/informacion/",
    num:"192",
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