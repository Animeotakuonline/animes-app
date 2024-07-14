// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2024/kami-wa-game-ni-ueteiru.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 01 de abril del 2024",
    name: "Kami wa Game ni Ueteiru.",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    visto:true,
    num:"74",
    },
    {
    imageSrc: "../../img/2024/remonster.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 05 de abril del 2024",
    name: "Re:Monster",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"73",
    },
    {
    imageSrc: "../../img/2024/dekisokonai-to-yobareta-motoeiyuu-wa-jikka-kara-tsuihou-sareta-node-sukikatte-ni-ikiru-koto-ni-shita.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 02 de abril del 2024",
    name: "Dekisokonai to Yobareta Motoeiyuu wa Jikka kara Tsuihou sareta node Sukikatte ni Ikiru Koto ni Shita",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"72",
    },
    {
    imageSrc: "../../img/2024/shuumatsu-train-doko-e-iku.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 01 de abril del 2024",
    name: "Shuumatsu Train Doko e Iku?",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"71",
    },
    {
    imageSrc: "../../img/2024/one-room-hiatari-futsuu-tenshi-tsuki.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 30 de mayo del 2024",
    name: "One Room, Hiatari Futsuu, Tenshi-tsuki.",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    visto:true,
    num:"70",
    },
    {
    imageSrc: "../../img/2024/sand-land-the-series.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 20 de marzo del 2024",
    name: "Sand Land: The Series",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"69",
    },
    {
    imageSrc: "https://cdn.jkdesu.com/assets/images/animes/image/watashi-no-shiawase-na-kekkon-watashi-no-shiawase-na-katachi.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 15 de marzo del 2024",
    name: "Watashi no Shiawase na Kekkon: Watashi no Shiawase na Katachi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"68",
    },
    {
    imageSrc: "https://cdn.jkdesu.com/assets/images/animes/image/xiao-lu-he-xiao-lan-5th-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de marzo del 2024",
    name: "Xiao Lu He Xiao Lan 5th Season",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"67",
    },
    {
    imageSrc: "https://cdn.jkdesu.com/assets/images/animes/image/hanhua-riji-4th-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 10 de marzo del 2024",
    name: "Hanhua Riji 4th Season",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"66",
    },
    {
    imageSrc: "../../img/2024/bai-jia-jue-zhi-jianghu-gui-shi-lu.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 20 de marzo del 2024",
    name: "Bai Jia Jue Zhi: Jianghu Gui Shi Lu",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"65",
    },
    {
    imageSrc: "../../img/2024/bu-xing-si-yuan-qi.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 29 de febrero del 2024",
    name: "Bu Xing Si Yuan Qi",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Bu Xing Si Yuan Qi.html",
    num:"64",
    },
    {
    imageSrc: "../../img/2024/great-pretender-razbliuto.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 23 de abril del 2024",
    name: "Great Pretender: Razbliuto",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Great Pretender Razbliuto.html",
    num:"63",
    },
    {
    imageSrc: "../../img/2024/yishi-zhi-zun.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 18 de febrero del 2024",
    name: "Yishi Zhi Zun",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Yishi Zhi Zun.html",
    num:"62",
    },
    {
      imageSrc: "../../img/2024/aishang-ta-de-liyou-extra.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 13 de febrero del 2024",
      name: "Aishang Ta de Liyou: Extra",
      status: "Estado: concluido",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Aishang Ta de Liyou Extra.html",
      num:"61",
    },
    {
      imageSrc: "../../img/2024/ninja-kamui.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 11 de febrero del 2024",
      name: "Ninja Kamui",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Ninja Kamui.html",
      num:"60",
    },
    {
      imageSrc: "../../img/2024/wonderful-precure.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 04 de febrero del 2024",
      name: "Wonderful Precure",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Wonderful Precure.html",
      num:"59",
    },
    {
      imageSrc: "../../img/2024/kui-cheng-shoufu-cong-youxi-kaishi.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 03 de abril del 2024",
      name: "Kui Cheng Shoufu: Cong Youxi Kaishi",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Kui Cheng Shoufu Cong Youxi Kaishi.html",
      num:"58",
    },
    {
      imageSrc: "../../img/2024/taigu-xing-shen-jue.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 25 de enero del 2024",
      name: "Taigu Xing Shen Jue",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Taigu Xing Shen Jue.html",
      num:"57",
    },
    {
      imageSrc: "../../img/2024/yi-ren-jun-moye.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 24 de abril del 2024",
      name: "Yi Ren Jun Moye",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Yi Ren Jun Moye.html",
      num:"56",
    },
    {
      imageSrc: "../../img/2024/sheng-zu.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 23 de abril del 2024",
      name: "Sheng Zu",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion",
      num:"55",
    },
    {
      imageSrc: "../../img/2024/monsters-ippyaku-sanjou-hiryuu-jigoku.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 22 de enero del 2024",
      name: "Monsters: Ippyaku Sanjou Hiryuu Jigoku",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Monsters Ippyaku Sanjou Hiryuu Jigoku.html",
      num:"54",
    },
    {
      imageSrc: "../../img/2024/da-yuzhou-shidai.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 22 del enero del 2024",
      name: "Da Yuzhou Shidai",
      status: "Estado: en emision",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Da Yuzhou Shidai.html",
      num:"53",
    },
    {
      imageSrc: "../../img/2024/meiji-gekken-1874.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 14 de abril del 2024",
      name: "Meiji Gekken: 1874",
      status: "Estado: concluido",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"52",
    },
    {
      imageSrc: "../../img/2024/hikari-no-ou-2nd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión: 14 de enero del 2024",
      name: "Hikari no Ou 2nd Season",
      status: "Estado: concluido",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      num:"51",
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