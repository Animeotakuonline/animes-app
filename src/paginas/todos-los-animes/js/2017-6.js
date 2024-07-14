// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2017/rokudenashi-majutsu-koushi-to-akashic-records.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Rokudenashi Majutsu Koushi to Akashic Records",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"60",
      },
      {
        imageSrc: "../../img/2017/cinderella-girls-gekijou.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Cinderella Girls Gekijou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"59",
      },
      {
        imageSrc: "../../img/2017/oushitsu-kyoushi-haine.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Oushitsu Kyoushi Haine",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"58",
      },
      {
        imageSrc: "../../img/2017/boruto-naruto-next-generations.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Boruto: Naruto Next Generations",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"57",
      },
      {
        imageSrc: "../../img/2017/sekai-no-yami-zukan.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Sekai no Yami Zukan",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"56",
      },
      {
        imageSrc: "../../img/2017/warau-salesman-new.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Warau Salesman New",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"55",
      },
      {
        imageSrc: "../../img/2017/starmyu-2nd-season.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Starmyu 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"54",
      },
      {
        imageSrc: "../../img/2017/frame-arms-girl.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Frame Arms Girl",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"53",
      },
      {
        imageSrc: "../../img/2017/alice-to-zouroku.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Alice to Zouroku",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"52",
      },
      {
        imageSrc: "../../img/2017/tsugumomo.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Tsugumomo",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"51",
      },
      {
        imageSrc: "../../img/2017/souryo-to-majiwaru-shikiyoku-no-yoru-ni.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Souryo to Majiwaru Shikiyoku no Yoru ni...",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"50",
      },
      {
        imageSrc: "../../img/2017/shingeki-no-kyojin-season-2.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Kyojin Season 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"49",
      },
      {
        imageSrc: "../../img/2017/gin-no-guardian.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Gin no Guardian",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"48",
      },
      {
        imageSrc: "../../img/2017/boku-no-hero-academia-2nd-season.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Boku no Hero Academia 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"47",
      },
      {
        imageSrc: "../../img/2017/feng-ling-yu-xiu.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Feng Ling Yu Xiu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"46",
      },
      {
        imageSrc: "../../img/2017/mahoutsukai-no-yome-hoshi-matsu-hito.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Mahoutsukai no Yome: Hoshi Matsu Hito",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"45",
      },
      {
        imageSrc: "../../img/2017/digimon-adventure-tri-4-soushitsu.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Digimon Adventure tri. 4: Soushitsu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"44",
      },
      {
        imageSrc: "../../img/2017/trinity-seven-movie-1-eternity-library-to-alchemic-girl.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Trinity Seven Movie 1: Eternity Library to Alchemic Girl",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"43",
      },
      {
        imageSrc: "../../img/2017/vivid-strike-specials.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "ViVid Strike! Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"42",
      },
      {
        imageSrc: "../../img/2017/bang-dream.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "BanG Dream!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"41",
      },
      {
        imageSrc: "../../img/2017/granblue-fantasy-the-animation.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Granblue Fantasy The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"40",
      },
      {
        imageSrc: "../../img/2017/yami-shibai-4th-season.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Yami Shibai 4th Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"39",
      },
      {
        imageSrc: "../../img/2017/rewrite-moon-and-terra.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Rewrite: Moon and Terra",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"38",
      },
      {
        imageSrc: "../../img/2017/marginal4-kiss-kara-tsukuru-big-bang.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Marginal#4: Kiss kara Tsukuru Big Bang",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"37",
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