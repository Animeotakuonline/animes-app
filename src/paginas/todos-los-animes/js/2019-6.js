// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2019/gunjou-no-magmel.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Gunjou no Magmel",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"72",
      },
      {
        imageSrc: "../../img/2019/cinderella-nine.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Hachigatsu no Cinderella Nine",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"71",
      },
      {
        imageSrc: "../../img/2019/shoumetsu-toshi.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Shoumetsu Toshi",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"70",
      },
      {
        imageSrc: "../../img/2019/yatogame-chan-kansatsu-nikki.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Yatogame-chan Kansatsu Nikki",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"69",
      },
      {
        imageSrc: "../../img/2019/namu-amida-butsu-rendai-utena.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Namu Amida Butsu!: Rendai Utena",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"68",
      },
      {
        imageSrc: "../../img/2019/robihachi.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "RobiHachi",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"67",
      },
      {
        imageSrc: "../../img/2019/bokutachi-wa-benkyou-ga-dekinai.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Bokutachi wa Benkyou ga Dekinai",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"66",
      },
      {
        imageSrc: "../../img/2019/joshikausei.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Joshikausei",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"65",
      },
      {
        imageSrc: "../../img/2019/nobunaga-sensei-no-osanazuma.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Nobunaga-sensei no Osanazuma",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"64",
      },
      {
        imageSrc: "../../img/2019/kimetsu-no-yaiba.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Kimetsu no Yaiba",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"63",
      },
      {
        imageSrc: "../../img/2019/chou-kadou-girl-amazing-stranger.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Chou Kadou Girl ⅙: Amazing Stranger",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"62",
      },
      {
        imageSrc: "../../img/2019/mix-meisei-story.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Mix: Meisei Story",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"61",
      },
      {
        imageSrc: "../../img/2019/kono-oto-tomare.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Kono Oto Tomare!",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"60",
      },
      {
        imageSrc: "../../img/2019/bakumatsu-crisis.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Bakumatsu: Crisis",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"59",
      },
      {
        imageSrc: "../../img/2019/fruits-basket-2019.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Fruits Basket (2019)",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"58",
      },
      {
        imageSrc: "../../img/2019/midara-na-ao-chan-wa-benkyou-ga-dekinai.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Midara na Ao-chan wa Benkyou ga Dekinai",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"57",
      },
      {
        imageSrc: "../../img/2019/hitoribocchi-no-seikatsu.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Hitoribocchi no Marumaru Seikatsu",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"56",
      },
      {
        imageSrc: "../../img/2019/senryuu-shoujo.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Senryuu Shoujo",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"55",
      },
      {
        imageSrc: "../../img/2019/hangyakusei-million-arthur-2nd-season.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Hangyakusei Million Arthur 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"54",
      },
      {
        imageSrc: "../../img/2019/diamond-no-ace-act-ii.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Diamond no Ace: Act II",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"53",
      },
      {
        imageSrc: "../../img/2019/kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Kono Yo no Hate de Koi wo Utau Shoujo YU-NO",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"52",
      },
      {
        imageSrc: "../../img/2019/cinderella-girls-gekijou-climax-season.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Cinderella Girls Gekijou: Climax Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"51",
      },
      {
        imageSrc: "../../img/2019/trinity-seven-movie-2-tenkuu-toshokan-to-shinku-no-maou.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Trinity Seven Movie 2: Tenkuu Toshokan to Shinku no Maou",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"50",
      },
      {
        imageSrc: "../../img/2019/high-score-girl-extra-stage.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "High Score Girl: Extra Stage",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"49",
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