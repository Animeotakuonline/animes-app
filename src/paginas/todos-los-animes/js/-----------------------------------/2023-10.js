// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/ayakashi-triangle.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ayakashi Triangle",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"39",
  }, 
  {
    imageSrc: "../../img/2023/kyuuketsuki-sugu-shinu-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kyuuketsuki Sugu Shinu 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"38",
  },
  {
    imageSrc: "../../img/2023/high-card.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "High Card",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"37",
  },
  {
    imageSrc: "../../img/2023/mononogatari.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mononogatari",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"36",
  },
  {
    imageSrc: "../../img/2023/kyokou-suiri-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kyokou Suiri Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"35",
  },
  {
    imageSrc: "../../img/2023/kami-tachi-ni-hirowareta-otoko-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kami-tachi ni Hirowareta Otoko 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"34",
  },
  {
    imageSrc: "../../img/2023/benriya-saitou-san-isekai-ni-iku.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Benriya Saitou-san, Isekai ni Iku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"33",
  },
  {
    imageSrc: "../../img/2023/mou-ippon.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mou Ippon!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"32",
  },
  {
    imageSrc: "../../img/2023/d4dj-all-mix.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "D4DJ All Mix",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"31",
  },
  {
    imageSrc: "../../img/2023/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"30",
  },
  {
    imageSrc: "../../img/2023/ijiranaide-nagatoro-san-2nd-attack.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ijiranaide, Nagatoro-san 2nd Attack",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"29",
  },
  {
    imageSrc: "../../img/2023/tokyo-revengers-seiya-kessen-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Revengers: Seiya Kessen-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"28",
  },
  {
    imageSrc: "../../img/2023/nierautomata-ver11a.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "NieR:Automata Ver1.1a",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"27",
  },
  {
    imageSrc: "../../img/2023/otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"26",
  },
  {
    imageSrc: "../../img/2023/saikyou-onmyouji-no-isekai-tenseiki.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Saikyou Onmyouji no Isekai Tenseiki",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"25",
  },
  {
    imageSrc: "../../img/2023/kaiko-sareta-ankoku-heishi-30-dai-no-slow-na-second-life.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kaiko sareta Ankoku Heishi (30-dai) no Slow na Second Life",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"24",
  },
  {
    imageSrc: "../../img/2023/rougo-ni-sonaete-isekai-de-8-manmai-no-kinka-wo-tamemasu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"23",
  },
  {
    imageSrc: "../../img/2023/nokemono-tachi-no-yoru.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Nokemono-tachi no Yoru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"22",
  },
  {
    imageSrc: "../../img/2023/uniteup.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "UniteUp!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"21",
  },
  {
    imageSrc: "../../img/2023/trigun-stampede.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Trigun Stampede",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"20",
  },
  {
    imageSrc: "../../img/2023/inu-ni-nattara-suki-na-hito-ni-hirowareta.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Inu ni Nattara Suki na Hito ni Hirowareta.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"19",
  },
  {
    imageSrc: "../../img/2023/tsundere-akuyaku-reijou-liselotte-to-jikkyou-no-endou-kun-to-kaisetsu-no-kobayashi-san.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tsundere Akuyaku Reijou Liselotte to Jikkyou no Endou-kun to Kaisetsu no Kobayashi-san",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"18",
  },
  {
    imageSrc: "../../img/2023/isekai-nonbiri-nouka.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Nonbiri Nouka",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    por_ver:true,
    num:"17",
  },
  {
    imageSrc: "../../img/2023/buddy-daddies.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Buddy Daddies",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"16",
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