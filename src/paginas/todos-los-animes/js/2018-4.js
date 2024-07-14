// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2018/chuukan-kanriroku-tonegawa.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Chuukan Kanriroku Tonegawa",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "102",
  },
  {
    imageSrc: "../../img/2018/senjuushi.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Senjuushi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "101",
  },
  {
    imageSrc: "../../img/2018/one-room-2nd-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "One Room 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "100",
  },
  {
    imageSrc: "../../img/2018/yama-no-susume-third-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Yama no Susume: Third Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "99",
  },
  {
    imageSrc: "../../img/2018/island.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Island",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "98",
  },
  {
    imageSrc: "../../img/2018/hanebado.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Hanebado!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "97",
  },
  {
    imageSrc: "../../img/2018/emiya-san-chi-no-kyou-no-gohan.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Emiya-san Chi no Kyou no Gohan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "96",
  },
  {
    imageSrc: "../../img/2018/baki-2018.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Baki 2018",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "95",
  },
  {
    imageSrc: "../../img/2018/chuunibyou-demo-koi-ga-shitai-movie-take-on-me.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Chuunibyou demo Koi ga Shitai! Movie: Take On Me",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    por_ver:true,
    num: "94",
  },
  {
    imageSrc: "../../img/2018/dragon-ball-heroes.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Dragon Ball Heroes",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    mirando:true,
    num: "93",
  },
  {
    imageSrc: "../../img/2018/digimon-adventure-tri-6-bokura-no-mirai.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Digimon Adventure tri. 6: Bokura no Mirai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "92",
  },
  {
    imageSrc: "../../img/2018/soutai-sekai.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Soutai Sekai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "91",
  },
  {
    imageSrc: "../../img/2018/quanzhi-gaoshou-specials.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Quanzhi Gaoshou Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "91",
  },
  
  {
    imageSrc: "../../img/2018/cike-wu-liuqi.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Cike Wu Liuqi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "90",
  },
  {
    imageSrc: "../../img/2018/isekai-izakaya-koto-aitheria-no-izakaya-nobu.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Izakaya: Koto Aitheria no Izakaya Nobu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "89",
  },
  {
    imageSrc: "../../img/2018/wotaku-ni-koi-wa-muzukashii.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Wotaku ni Koi wa Muzukashii",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "88",
  },
  {
    imageSrc: "../../img/2018/steinsgate-0.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Steins;Gate 0",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "87",
  },
  {
    imageSrc: "../../img/2018/last-period-owarinaki-rasen-no-monogatari.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Last Period: Owarinaki Rasen no Monogatari",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "86",
  },
  {
    imageSrc: "../../img/2018/butlers-chitose-momotose-monogatari.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Butlers: Chitose Momotose Monogatari",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "85",
  },
  {
    imageSrc: "../../img/2018/rokuhoudou-yotsuiro-biyori.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Rokuhoudou Yotsuiro Biyori",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "84",
  },
  {
    imageSrc: "../../img/2018/high-school-dxd-hero.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "High School DxD Hero",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "83",
  },
  {
    imageSrc: "../../img/2018/golden-kamuy.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Golden Kamuy",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "82",
  },
  {
    imageSrc: "../../img/2018/fumikiri-jikan.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Fumikiri Jikan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "81",
  },
  {
    imageSrc: "../../img/2018/jikkenhin-kazoku.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Jikkenhin Kazoku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "80",
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