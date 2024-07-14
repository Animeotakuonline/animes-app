// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/yatogame-chan-kansatsu-nikki-sansatsume.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Yatogame-chan Kansatsu Nikki Sansatsume",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"29",
  },
  {
    imageSrc: "../../img/2021/back-arrow.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Back Arrow",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"28",
  },
  {
    imageSrc: "../../img/2021/wixoss-divaalive.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "WIXOSS Diva(A)Live",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"27",
  },
  {
    imageSrc: "../../img/2021/ore-dake-haireru-kakushi-dungeon.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Ore dake Haireru Kakushi Dungeon",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"26",
  },
  {
    imageSrc: "../../img/2021/project-scard-praeter-no-kizu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Project Scard: Praeter no Kizu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"25",
  },
  {
    imageSrc: "../../img/2021/yakusoku-no-neverland-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Yakusoku no Neverland 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"24",
  },
  {
    imageSrc: "../../img/2021/243-seiin-koukou-danshi-volley-bu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "2.43: Seiin Koukou Danshi Volley-bu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"23",
  },
  {
    imageSrc: "../../img/2021/5-toubun-no-hanayome-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "5-toubun no Hanayome ∬",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"22",
  },
  {
    imageSrc: "../../img/2021/kumo-desu-ga-nani-ka.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kumo Desu ga, Nani ka?",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"21",
  },
  {
    imageSrc: "../../img/2021/idolls.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Idolls!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"20",
  },
  {
    imageSrc: "../../img/2021/jaku-chara-tomozaki-kun.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Jaku-Chara Tomozaki-kun",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"19",
  },
  {
    imageSrc: "../../img/2021/bishoujo-senshi-sailor-moon-eternal-movie-1.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Bishoujo Senshi Sailor Moon Eternal Movie 1",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"18",
  },
  {
    imageSrc: "../../img/2021/hortensia-saga-tv.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Hortensia Saga (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"17",
  },
  {
    imageSrc: "../../img/2021/soukou-musume-senki.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Soukou Musume Senki",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"16",
  },
  {
    imageSrc: "../../img/2021/abciee-shuugyou-nikki.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Abciee Shuugyou Nikki",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"15",
  },
  {
    imageSrc: "../../img/2021/beastars-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Beastars 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"14",
  },
  {
    imageSrc: "../../img/2021/yuru-camp-season-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Yuru Camp△ Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"13",
  },
  {
    imageSrc: "../../img/2021/tenchi-souzou-design-bu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tenchi Souzou Design-bu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"12",
  },
  {
    imageSrc: "../../img/2021/show-by-rock-stars.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Show by Rock!! Stars!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"11",
  },
  {
    imageSrc: "../../img/2021/hataraku-saibou.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Hataraku Saibou!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"10",
  },
  {
    imageSrc: "../../img/2021/rezero-kara-hajimeru-isekai-seikatsu-2nd-season-part-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"9",
  },
  {
    imageSrc: "../../img/2021/ichu-halfway-through-the-idol.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "I★Chu: Halfway Through the Idol",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"8",
  },
  {
    imageSrc: "../../img/2021/uma-musume-pretty-derby-season-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Uma Musume: Pretty Derby Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"7",
  },
  {
    imageSrc: "../../img/2021/gekidol.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Gekidol",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"6",
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