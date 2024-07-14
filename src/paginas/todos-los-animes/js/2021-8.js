// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/planetarian-snow-globe.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Planetarian: Snow Globe",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"53",
  },
  {
    imageSrc: "../../img/2021/wu-liuqi-xuanwu-guo-pian.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Wu Liuqi: Xuanwu Guo Pian",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"52",
  },
  {
    imageSrc: "../../img/2021/dr-stone-stone-wars.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Dr. Stone: Stone Wars",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"51",
  },
  {
    imageSrc: "../../img/2021/wonder-egg-priority.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Wonder Egg Priority",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"50",
  },
  {
    imageSrc: "../../img/2021/nanatsu-no-taizai-fundo-no-shinpan.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Nanatsu no Taizai: Fundo no Shinpan",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"49",
  },
  {
    imageSrc: "../../img/2021/bungou-stray-dogs-wan.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Bungou Stray Dogs Wan!",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"48",
  },
  {
    imageSrc: "../../img/2021/log-horizon-entaku-houkai.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Log Horizon: Entaku Houkai",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"47",
  },
  {
    imageSrc: "../../img/2021/kaifuku-jutsushi-no-yarinaoshi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kaifuku Jutsushi no Yarinaoshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"46",
  },
  {
    imageSrc: "../../img/2021/world-witches-hasshin-shimasu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "World Witches Hasshin Shimasu!",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"45",
  },
  {
    imageSrc: "../../img/2021/tensei-shitara-slime-datta-ken-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei shitara Slime Datta Ken 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"44",
  },
  {
    imageSrc: "../../img/2021/wave-surfing-yappe-tv.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Wave!!: Surfing Yappe!! (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"43",
  },
  {
    imageSrc: "../../img/2021/azur-lane-bisoku-zenshin.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Azur Lane: Bisoku Zenshin!",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"42",
  },
  {
    imageSrc: "../../img/2021/mushoku-tensei-isekai-ittara-honki-dasu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mushoku Tensei: Isekai Ittara Honki Dasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"41",
  },
  {
    imageSrc: "../../img/2021/non-non-biyori-nonstop.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Non Non Biyori Nonstop",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"40",
  },
  {
    imageSrc: "../../img/2021/ex-arm.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Ex-Arm",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"39",
  },
  {
    imageSrc: "../../img/2021/yami-shibai-8.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Yami Shibai 8",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"38",
  },
  {
    imageSrc: "../../img/2021/shin-chuuka-ichiban-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shin Chuuka Ichiban! 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"37",
  },
  {
    imageSrc: "../../img/2021/hataraku-saibou-black-tv.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Hataraku Saibou Black (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"36",
  },
  {
    imageSrc: "../../img/2021/world-trigger-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "World Trigger 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"35",
  },
  {
    imageSrc: "../../img/2021/kai-byoui-ramune.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kai Byoui Ramune",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"34",
  },
  {
    imageSrc: "../../img/2021/horimiya.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Horimiya",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"33",
  },
  {
    imageSrc: "../../img/2021/sk.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "SK∞",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"32",
  },
  {
    imageSrc: "../../img/2021/kemono-jihen.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kemono Jihen",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"31",
  },
  {
    imageSrc: "../../img/2021/idoly-pride.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Idoly Pride",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"30",
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