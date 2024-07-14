// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2024/isekai-suicide-squad.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Isekai Suicide Squad",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"146",
  },
  
  {
    imageSrc: "../../img/2024/code-geass-dakkan-no-roz.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Code Geass: Dakkan no Rozé",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"145",
  },
  {
    imageSrc: "../../img/2024/jin-can-wangshi.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Jin Can Wangshi",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"144",
  },
  {
    imageSrc: "../../img/2024/cong-gu-huo-niao-kaishi-long-cheng-fengyun.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Cong Gu Huo Niao Kaishi: Long Cheng Fengyun",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"143",
  },
  {
    imageSrc: "../../img/2024/hanma-baki-vs-kengan-ashura.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Hanma Baki vs. Kengan Ashura",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"142",
  },
  {
    imageSrc: "../../img/2024/quanzhi-gaoshou-3.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Quanzhi Gaoshou 3",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"141",
  },
  {
    imageSrc: "../../img/2024/huan-chong-shi.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: ",
    name: "Huan Chong Shi",
    status: "Estado: ",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"140",
  },
  {
    imageSrc: "../../img/2024/dead-dead-demons-dededede-destruction-ona.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 24 de mayo del 2024",
    name: "Dead Dead Demons Dededede Destruction (ONA)",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"139",
  },
  {
    imageSrc: "../../img/2024/garouden-the-way-of-the-lone-wolf.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 23 de mayo del 2024",
    name: "Garouden: The Way of the Lone Wolf",
    status: "Estado: Finalizado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"138",
  },
  {
    imageSrc: "../../img/2024/xiehou-ta-de-shaonu-shidai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 23 de mayo del 2024",
    name: "Xiehou Ta de Shaonu Shidai",
    status: "Estado: Finalizado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"137",
  },
  {
    imageSrc: "../../img/2024/jinwu-wei-feng-qi-jinling.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 23 de mayo del 2024",
    name: "Jinwu Wei: Feng Qi Jinling",
    status: "Estado: Finalizado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"136",
  },
  {
    imageSrc: "../../img/2024/you-shou-yan-3rd-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 17 de mayo del 2024",
    name: "You Shou Yan 3rd Season",
    status: "Estado: en emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"135",
  },
  {
    imageSrc: "../../img/2024/kimetsu-no-yaiba-hashira-geiko-hen.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de mayo del 2024",
    name: "Kimetsu no Yaiba: Hashira Geiko-hen",
    status: "Estado: por estrenar",
    availability: "Disponible 0 capitulos de ??",
    visto: true,
    id:"kimetsu-no-yaiba-hashira-geiko-hen",      
    num:"134",
  },
  {
    imageSrc: "../../img/2024/boku-no-hero-academia-7th-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 04 de mayo del 2024",
    name: "Boku no Hero Academia 7th Season",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Boku-no-Hero-Academia-7th-Season.html",
    mirando: true,
    num:"133",
  },
  {
    imageSrc: "../../img/2024/jantama-kan.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 25 de abril del 2024",
    name: "Jantama Kan",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Jantama-Kan!!.html",
    num:"132",
  },
  {
    imageSrc: "../../img/2024/grimm-kumikyoku.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 17 de abril del 2024",
    name: "Grimm Kumikyoku",
    status: "Estado: Finalizado",
    availability: "Disponible 6 capitulos",
    readMoreLink: "../2024/informacion/Grim- Kumikyoku.html",
    num:"131",
  },
  {
    imageSrc: "../../img/2024/anhe-zhuan-part-2.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 17 de abril del 2024",
    name: "Anhe Zhuan Part 2",
    status: "Estado: Finalizado",
    availability: "Disponible 6 capitulos",
    readMoreLink: "../2024/informacion/Grim- Kumikyoku.html",
    num:"130",
  },
  {
    imageSrc: "../../img/2024/fanpai-chushihua.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de abril del 2024",
    name: "Fanpai Chushihua",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Kaijuu-8-gou.html",
    num:"129",
  },
  {
    imageSrc: "../../img/2024/kaijuu-8-gou.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de abril del 2024",
    name: "Kaijuu 8-gou",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Kaijuu-8-gou.html",
    num:"128",
  },
  {
    imageSrc: "../../img/2024/sasayaku-you-ni-koi-wo-utau.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de abril del 2024",
    name: "Sasayaku You ni Koi wo Utau",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Kaijuu-8-gou.html",
    num:"127",
  },
  {
    imageSrc: "../../img/2024/kuroshitsuji-kishuku-gakkou-hen.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de abril del 2024",
    name: "Kuroshitsuji: Kishuku Gakkou Hen",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Kuroshitsuji-Kishuku-Gakkou-Hen.html",
    num:"126",
  },

  {
    imageSrc: "../../img/2024/the-new-gate.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de abril del 2024",
    name: "The New Gate",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/the-new-gate.html",
    num:"125",
  },
  {
    imageSrc: "../../img/2024/long-zu.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 13 de abril del 2024",
    name: "Long Zu",
    status: "Estado: En emisión",
    availability: "Disponible 0 capitulos de ??",
    readMoreLink: "../2024/informacion/Long-Zu.html",
    num: "124",
  },
  {
    imageSrc: "../../img/2024/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-part-2.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de abril del 2024",
    name: "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II - Part 2",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-part-2.html",
    mirando:true,
    num:"123",
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