// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/86-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "86 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"197",
  },
  {
    imageSrc: "../../img/2021/waccha-primagi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Waccha PriMagi!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"196",
  },
  {
    imageSrc: "../../img/2021/digimon-ghost-game.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Digimon Ghost Game",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"195",
  },
  {
    imageSrc: "../../img/2021/sankaku-mado-no-sotogawa-wa-yoru.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Sankaku Mado no Sotogawa wa Yoru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"194",
  },
  {
    imageSrc: "../../img/2021/mieruko-chan.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mieruko-chan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"193",
  },
  {
    imageSrc: "../../img/2021/tesla-note.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tesla Note",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"192",
  },
  {
    imageSrc: "../../img/2021/yuuki-yuuna-wa-yuusha-de-aru-dai-mankai-no-shou.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Yuuki Yuuna wa Yuusha de Aru: Dai Mankai no Shou",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"191",
  },
  {
    imageSrc: "../../img/2021/deji-meets-girl.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Deji Meets Girl",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"190",
  },
  {
    imageSrc: "../../img/2021/hanyou-no-yashahime-sengoku-otogizoushi-ni-no-shou.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Hanyou no Yashahime: Sengoku Otogizoushi - Ni no Shou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"189",
  },
  {
    imageSrc: "../../img/2021/yakunara-mug-cup-mo-niban-gama.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Yakunara Mug Cup mo: Niban Gama",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"188",
  },
  {
    imageSrc: "../../img/2021/isekai-shokudou-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Shokudou 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"187",
  },
  {
    imageSrc: "../../img/2021/megaton-kyuu-musashi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Megaton-kyuu Musashi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"186",
  },
  {
    imageSrc: "../../img/2021/selection-project.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Selection Project",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"185",
  },
  {
    imageSrc: "../../img/2021/hanma-baki-son-of-ogre.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Hanma Baki: Son of Ogre",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"184",
  },
  {
    imageSrc: "../../img/2021/otome-game-no-hametsu-flag-shika-nai-akuyaku-reijou-ni-tensei-shiteshimatta-ova.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"183",
  },
  {
    imageSrc: "../../img/2021/princess-principal-crown-handler-movie-1.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Princess Principal: Crown Handler Movie 1 - Busy Easy Money",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"182",
  },
  {
    imageSrc: "../../img/2021/blue-period.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Blue Period",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"181",
  },
  {
    imageSrc: "../../img/2021/hachigatsu-no-cinderella-nine-episode-13.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Hachigatsu no Cinderella Nine Episode 13",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"180",
  },
  {
    imageSrc: "../../img/2021/princess-principal-crown-handler-movie-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Princess Principal: Crown Handler Movie 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"179",
  },
  {
    imageSrc: "../../img/2021/getsuyoubi-no-tawawa-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Getsuyoubi no Tawawa 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"178",
  },
  {
    imageSrc: "../../img/2021/ganbare-douki-chan.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Ganbare Douki-chan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"177",
  },
  {
    imageSrc: "../../img/2021/heike-monogatari.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Heike Monogatari",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"176",
  },
  {
    imageSrc: "../../img/2021/mahoutsukai-no-yome-nishi-no-shounen-to-seiran-no-kishi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mahoutsukai no Yome: Nishi no Shounen to Seiran no Kishi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"175",
  },
  {
    imageSrc: "../../img/2021/fatekaleid-liner-prismaillya-movie-licht-namae-no-nai-shoujo.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Fate/kaleid liner Prisma☆Illya Movie: Licht - Namae no Nai Shoujo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"174",
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