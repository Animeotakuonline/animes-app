// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2016/mobile-suit-gundam-unicorn-re0096.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Mobile Suit Gundam Unicorn RE:0096",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"66",
      },
      {
        imageSrc: "../../img/2016/mayoiga.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Mayoiga",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"65",
      },
      {
        imageSrc: "../../img/2016/terra-formars-revenge.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Terra Formars Revenge",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"64",
      },
      {
        imageSrc: "../../img/2016/uchuu-patrol-luluco.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Uchuu Patrol Luluco",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"63",
      },
      {
        imageSrc: "../../img/2016/ushio-to-tora-tv-2nd-season.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Ushio to Tora (TV) 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"62",
      },
      {
        imageSrc: "../../img/2016/jojo-no-kimyou-na-bouken-diamond-wa-kudakenai.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "JoJo no Kimyou na Bouken: Diamond wa Kudakenai",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"61",
      },
      {
        imageSrc: "../../img/2016/kagewani-shou.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kagewani: Shou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"60",
      },
      {
        imageSrc: "../../img/2016/brotherhood-final-fantasy-xv.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Brotherhood: Final Fantasy XV",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"59",
      },
      {
        imageSrc: "../../img/2016/shoujo-tachi-wa-kouya-wo-mezasu-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Shoujo-tachi wa Kouya wo Mezasu OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"58",
      },
      {
        imageSrc: "../../img/2016/charlotte-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Charlotte OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"57",
      },
      {
        imageSrc: "../../img/2016/hai-to-gensou-no-grimgar-special.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Hai to Gensou no Grimgar Special",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"56",
      },
      {
        imageSrc: "../../img/2016/bakuon-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Bakuon!! OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"55",
      },
      {
        imageSrc: "../../img/2016/soul-worker-your-destiny-awaits.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Soul Worker: Your Destiny Awaits",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"54",
      },
      {
        imageSrc: "../../img/2016/mirai-no-watashi.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Mirai no Watashi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"53",
      },
      {
        imageSrc: "../../img/2016/digimon-adventure-tri-2-ketsui.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Digimon Adventure tri. 2: Ketsui",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"52",
      },
      {
        imageSrc: "../../img/2016/kuusen-madoushi-kouhosei-no-kyoukan-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kuusen Madoushi Kouhosei no Kyoukan OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"51",
      },
      {
        imageSrc: "../../img/2016/kanojo-to-kanojo-no-neko-everything-flows.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kanojo to Kanojo no Neko: Everything Flows",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"50",
      },
      {
        imageSrc: "../../img/2016/prison-school-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Prison School OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"49",
      },
      {
        imageSrc: "../../img/2016/masamune-datenicle.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Masamune Datenicle",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"48",
      },
      {
        imageSrc: "../../img/2016/kono-danshi-mahou-ga-oshigoto-desu.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kono Danshi, Mahou ga Oshigoto Desu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"47",
      },
      {
        imageSrc: "../../img/2016/pripara-movie-minna-atsumare-prismtours.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "PriPara Movie: Mi~nna Atsumare! Prism☆Tours",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"46",
      },
      {
        imageSrc: "../../img/2016/okusama-ga-seitokaichou-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Okusama ga Seitokaichou! OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"45",
      },
      {
        imageSrc: "../../img/2016/queens-blade-grimoire.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Queen's Blade: Grimoire",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"44",
      },
      {
        imageSrc: "../../img/2016/shinmai-maou-no-testament-burst-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Shinmai Maou no Testament Burst OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"43",
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