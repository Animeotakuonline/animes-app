// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2016/danganronpa-3-the-end-of-kibougamine-gakuen-mirai-hen.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Danganronpa 3: The End of Kibougamine Gakuen - Zetsubou-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"162",
      },
      {
        imageSrc: "../../img/2016/mob-psycho-100.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Mob Psycho 100",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"161",
      },
      {
        imageSrc: "../../img/2016/active-raid-kidou-kyoushuushitsu-dai-hachi-gakari-2nd.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Active Raid: Kidou Kyoushuushitsu Dai Hachi Gakari 2nd",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"160",
      },
      {
        imageSrc: "../../img/2016/hitori-no-shita-the-outcast.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Hitori no Shita: The Outcast",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"159",
      },
      {
        imageSrc: "../../img/2016/ange-vierge.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Ange Vierge",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"158",
      },
      {
        imageSrc: "../../img/2016/qualidea-code.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Qualidea Code",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"157",
      },
      {
        imageSrc: "../../img/2016/handa-kun.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Handa-kun",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"156",
      },
      {
        imageSrc: "../../img/2016/amanchu.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Amanchu!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"155",
      },
      {
        imageSrc: "../../img/2016/nejimaki-seirei-senki-tenkyou-no-alderamin.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Nejimaki Seirei Senki: Tenkyou no Alderamin",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"154",
      },
      {
        imageSrc: "../../img/2016/91-days.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "91 Days",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"153",
      },
      {
        imageSrc: "../../img/2016/time-travel-shoujo-mari-waka-to-8-nin-no-kagakusha-tachi.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Time Travel Shoujo: Mari Waka to 8-nin no Kagakusha-tachi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"152",
      },
      {
        imageSrc: "../../img/2016/mahou-shoujo-nariagirls.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Shoujo? Naria☆Girls",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"151",
      },
      {
        imageSrc: "../../img/2016/regalia-the-three-sacred-stars.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Regalia: The Three Sacred Stars",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"150",
      },
      {
        imageSrc: "../../img/2016/kono-bijutsubu-ni-wa-mondai-ga-aru.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kono Bijutsubu ni wa Mondai ga Aru!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"149",
      },
      {
        imageSrc: "../../img/2016/binan-koukou-chikyuu-bouei-bu-love-love.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Binan Koukou Chikyuu Bouei-bu LOVE! LOVE!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"148",
      },
      {
        imageSrc: "../../img/2016/planetarian-chiisana-hoshi-no-yume.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Planetarian: Chiisana Hoshi no Yume",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"147",
      },
      {
        imageSrc: "../../img/2016/sinbi-apateu-ghost-ball-bimil.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Sinbi Apateu: Ghost Ball Bimil",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"146",
      },
      {
        imageSrc: "../../img/2016/masou-gakuen-hxh.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Masou Gakuen HxH",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"145",
      },
      {
        imageSrc: "../../img/2016/tsukiuta-the-animation.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Tsukiuta. The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"144",
      },
      {
        imageSrc: "../../img/2016/ozmafia.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Ozmafia!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"143",
      },
      {
        imageSrc: "../../img/2016/boruto-naruto-the-movie-naruto-ga-hokage-ni-natta-hi.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto ga Hokage ni Natta Hi",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"142",
      },
      {
        imageSrc: "../../img/2016/fatekaleid-liner-prismaillya-3rei.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/kaleid liner Prisma☆Illya 3rei!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"141",
      },
      {
        imageSrc: "../../img/2016/servamp.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Servamp",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"140",
      },
      {
        imageSrc: "../../img/2016/scared-rider-xechs.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Scared Rider Xechs",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"139",
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