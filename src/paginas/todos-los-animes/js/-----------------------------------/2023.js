// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  
  {
    imageSrc: "../../img/2023/burn-the-witch-08.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Burn the Witch 0.8",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"278",
  },
  {
    imageSrc: "../../img/2023/jashin-chan-dropkick-seikimatsu-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Jashin-chan Dropkick &quot;Seikimatsu-hen&quot;",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"277",
  },
  {
    imageSrc: "../../img/2023/xiao-lu-he-xiao-lan-4th-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Xiao Lu He Xiao Lan 4th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"276",
  },
  {
    imageSrc: "../../img/2023/huoxing-xi-lu-7-hao.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Huoxing Xi Lu 7 Hao",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"275",
  },
  {
    imageSrc: "../../img/2023/xian-wang-de-richang-shenghuo-4.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "The Daily Life of the Immortal King 4",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"274",
  },
  {
    imageSrc: "../../img/2023/twi-yaba.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Twi-Yaba",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"273",
  },
  {
    imageSrc: "../../img/2023/ran-xia.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ran Xia",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"272",
  },
  {
    imageSrc: "../../img/2023/bu-shi-bu-mie.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bu Shi Bu Mie",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"271",
  },
  {
    imageSrc: "../../img/2023/shi-fang-wu-sheng.jpg",
    dateAdded: "2023-",
    dateOfRelease: "Fecha de emisión",
    name: "Shi Fang Wu Sheng",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"270",
  },
  {
    imageSrc: "../../img/2023/ni-de-rensheng-shi-wo-lai-chi-le.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ni De Rensheng Shi Wo Lai Chi Le",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"269",
  },
  {
    imageSrc: "../../img/2023/qi-hou-bilu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Qi Hou Bilu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"268",
  },
  {
    imageSrc: "../../img/2023/pluto.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Pluto",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"267",
  },
  {
    imageSrc: "../../img/2023/temple-specials.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Temple Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"266",
  },
  {
    imageSrc: "../../img/2023/kusuriya-no-hitorigoto.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kusuriya no Hitorigoto",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"265",
  },
  {
    imageSrc: "../../img/2023/dog-signal.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dog Signal",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"264",
  },
  {
    imageSrc: "../../img/2023/zhengjing-shao-zhu-de-xingfu-shenghuo.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Zhengjing Shao Zhu de Xingfu Shenghuo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"263",
  },
  {
    imageSrc: "../../img/2023/mask-danshi-wa-koishitakunai-noni.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mask Danshi wa Koishitakunai noni",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"262",
  },
  {
    imageSrc: "../../img/2023/tian-guan-cifu-er.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tian Guan Cifu Er",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"261",
  },
  {
    imageSrc: "../../img/2023/houkago-shounen-hanako-kun.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Houkago Shounen Hanako-kun",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../202#/informacion/",
    num:"260",
  },
  {
    imageSrc: "../../img/2023/ooyukiumi-no-kaina-hoshi-no-kenja.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ooyukiumi no Kaina: Hoshi no Kenja",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"259",
  },
  {
    imageSrc: "../../img/2023/dr-stone-new-world-part-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dr. Stone: New World Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"258",
  },
  {
    imageSrc: "../../img/2023/good-night-world.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Good Night World",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"257",
  },
  {
    imageSrc: "../../img/2023/dead-mount-death-play-part-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dead Mount Death Play Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"256",
  },
  {
    imageSrc: "../../img/2023/Hoshikuzu-Telepath.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Hoshikuzu Telepath",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"255",
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