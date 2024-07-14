// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2017/fateapocrypha.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/Apocrypha",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"108",
      },
      {
        imageSrc: "../../img/2017/katsugekitouken-ranbu.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Katsugeki/Touken Ranbu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"107",
      },
      {
        imageSrc: "../../img/2017/senki-zesshou-symphogear-axz-by-shedding-many-tears-the-reality-you-face-is.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Senki Zesshou Symphogear AXZ: By Shedding Many Tears, the Reality You Face Is...",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"106",
      },
      {
        imageSrc: "../../img/2017/huyao-xiao-hongniang.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Huyao Xiao Hongniang",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"105",
      },
      {
        imageSrc: "../../img/2017/boku-no-hero-academia-training-of-the-dead.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Boku no Hero Academia: Training of the Dead",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"104",
      },
      {
        imageSrc: "../../img/2017/demi-chan-wa-kataritai-special.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Demi-chan wa Kataritai Special",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"103",
      },
      {
        imageSrc: "../../img/2017/hina-logi-from-luck-logic.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Hina Logi: From Luck & Logic",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"102",
      },
      {
        imageSrc: "../../img/2017/mahouka-koukou-no-rettousei-movie-hoshi-wo-yobu-shoujo.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Mahouka Koukou no Rettousei Movie: Hoshi wo Yobu Shoujo",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"101",
      },
      {
        imageSrc: "../../img/2017/suki-ni-naru-sono-shunkan-wo-kokuhaku-jikkou-iinkai.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Suki ni Naru Sono Shunkan wo.: Kokuhaku Jikkou Iinkai",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"100",
      },
      {
        imageSrc: "../../img/2017/yugioh-vrains.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Yu☆Gi☆Oh! VRAINS",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"99",
      },
      {
        imageSrc: "../../img/2017/blame-movie.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Blame! Movie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"98",
      },
      {
        imageSrc: "../../img/2017/koe-no-katachi.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Koe no Katachi",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"97",
      },
      {
        imageSrc: "../../img/2017/minami-kamakura-koukou-joshi-jitensha-bu-kita-yo-taiwan.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Minami Kamakura Koukou Joshi Jitensha-bu: Kita yo, Taiwan!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"96",
      },
      {
        imageSrc: "../../img/2017/sin-nanatsu-no-taizai-recap.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Sin: Nanatsu no Taizai Recap",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"95",
      },
      {
        imageSrc: "../../img/2017/new-game-watashi-shain-ryokou-tte-hajimete-nano-de.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "New Game!: Watashi, Shain Ryokou tte Hajimete nano de...",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"94",
      },
      {
        imageSrc: "../../img/2017/jian-wangchao.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Jian Wangchao",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"93",
      },
      {
        imageSrc: "../../img/2017/ao-no-exorcist-ova.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Ao no Exorcist OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"92",
      },
      {
        imageSrc: "../../img/2017/sword-art-online-movie-ordinal-scale.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Sword Art Online Movie: Ordinal Scale",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"91",
      },
      {
        imageSrc: "../../img/2017/atom-the-beginning.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Atom: The Beginning",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"90",
      },
      {
        imageSrc: "../../img/2017/sin-nanatsu-no-taizai.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Sin: Nanatsu no Taizai",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"89",
      },
      {
        imageSrc: "../../img/2017/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-gaiden-sword-oratoria.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Danmachi: Sword Oratoria",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"88",
      },
      {
        imageSrc: "../../img/2017/saenai-heroine-no-sodatekata-flat.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Saenai Heroine no Sodatekata Flat",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"87",
      },
      {
        imageSrc: "../../img/2017/kenka-banchou-otome-girl-beats-boys.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kenka Banchou Otome: Girl Beats Boys",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"86",
      },
      {
        imageSrc: "../../img/2017/room-mate.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Room Mate",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"85",
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