// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2018/lupin-iii-part-v.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Nombre del anime",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "55",
  },
  {
    imageSrc: "../../img/2018/3d-kanojo-real-girl.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "3D Kanojo: Real Girl",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "54",
  },
  {
    imageSrc: "../../img/2018/kakuriyo-no-yadomeshi.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Kakuriyo no Yadomeshi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "53",
  },
  {
    imageSrc: "../../img/2018/uchuu-senkan-tiramis.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Uchuu Senkan Tiramisu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "52",
  },
  {
    imageSrc: "../../img/2018/souten-no-ken-regenesis.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Souten no Ken Re:Genesis",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "51",
  },
  {
    imageSrc: "../../img/2018/uma-musume-pretty-derby-tv.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Uma Musume: Pretty Derby (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "50",
  },
  {
    imageSrc: "../../img/2018/lost-song.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Lost Song",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "49",
  },
  {
    imageSrc: "../../img/2018/gegege-no-kitarou-2018.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Gegege no Kitarou (2018)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "48",
  },
  {
    imageSrc: "../../img/2018/mahou-shoujo-ore.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Mahou Shoujo Ore",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "47",
  },
  {
    imageSrc: "../../img/2018/relife-kanketsu-hen.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "ReLIFE: Kanketsu-hen",
    status: "Estado",
    availability: "Disponible X capitulos no me acuerdo bien si ya vi estas ovas",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "46",
  },
  {
    imageSrc: "../../img/2018/mob-psycho-100-reigen-shirarezaru-kiseki-no-reinouryokusha.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Mob Psycho 100 Reigen: Shirarezaru Kiseki no Reinouryokusha",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "45",
  },
  {
    imageSrc: "../../img/2018/bungou-stray-dogs-dead-apple.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Bungou Stray Dogs: Dead Apple",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "44",
  },
  {
    imageSrc: "../../img/2018/doraemon-movie-38-nobita-no-takarajima.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Doraemon Movie 38: Nobita no Takarajima",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "43",
  },
  {
    imageSrc: "../../img/2018/b-the-beginning.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "B: The Beginning",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "42",
  },
  {
    imageSrc: "../../img/2018/sayonara-no-asa-ni-yakusoku-no-hana-wo-kazarou.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Sayonara no Asa ni Yakusoku no Hana wo Kazarou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "42",
  },
  {
    imageSrc: "../../img/2018/spiritpact-2.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Ling Qi 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "41",
  },
  {
    imageSrc: "../../img/2018/mi-yu-xing-zhe.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Mi Yu Xing Zhe",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "40",
  },
  {
    imageSrc: "../../img/2018/saiki-kusuo-no-nan-2.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Saiki Kusuo no Ψ-nan 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "39",
  },
  {
    imageSrc: "../../img/2018/darling-in-the-franxx.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Darling in the FranXX",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "38",
  },
  {
    imageSrc: "../../img/2018/gin-no-guardian-2nd-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Gin no Guardian 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "37",
  },
  {
    imageSrc: "../../img/2018/hakumei-to-mikochi.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hakumei to Mikochi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "36",
  },
  {
    imageSrc: "../../img/2018/hakyuu-houshin-engi.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hakyuu Houshin Engi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "35",
  },
  {
    imageSrc: "../../img/2018/hakata-tonkotsu-ramens.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hakata Tonkotsu Ramens",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "34",
  },
  {
    imageSrc: "../../img/2018/beatless.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Beatless",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "33",
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