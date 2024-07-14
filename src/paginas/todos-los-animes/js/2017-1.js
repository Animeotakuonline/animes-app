// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      imageSrc: "../../img/2017/mahoutsukai-no-yome.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Mahoutsukai no Yome",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"180",
    },
    {
        imageSrc: "../../img/2017/kekkai-sensen-beyond.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kekkai Sensen & Beyond",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"179",
      },
      {
        imageSrc: "../../img/2017/kino-no-tabi-the-beautiful-world-the-animated-series.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kino no Tabi: The Beautiful World - The Animated Series",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"178",
      },
      {
        imageSrc: "../../img/2017/shoujo-shuumatsu-ryokou.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Shoujo Shuumatsu Ryokou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"177",
      },
      {
        imageSrc: "../../img/2017/yuuki-yuuna-wa-yuusha-de-aru-washio-sumi-no-shou.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"176",
      },
      {
        imageSrc: "../../img/2017/dies-irae.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Dies Irae",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"175",
      },
      {
        imageSrc: "../../img/2017/garo-vanishing-line.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Garo: Vanishing Line",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"174",
      },
      {
        imageSrc: "../../img/2017/net-juu-no-susume.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Net-juu no Susume",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"173",
      },
      {
        imageSrc: "../../img/2017/taishou-chicchai-san.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Taishou Chicchai-san",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"172",
      },
      {
        imageSrc: "../../img/2017/just-because.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Just Because!",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"171",
      },
      {
        imageSrc: "../../img/2017/ousama-game-the-animation.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Ousama Game The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"170",
      },
      {
        imageSrc: "../../img/2017/ame-iro-cocoa-series-ame-con.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Ame-iro Cocoa Series: Ame-con!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"169",
      },
      {
        imageSrc: "../../img/2017/konohana-kitan.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Konohana Kitan",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"168",
      },
      {
        imageSrc: "../../img/2017/urahara.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Urahara",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"167",
      },
      {
        imageSrc: "../../img/2017/tsukipro-the-animation.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Tsukipro The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"166",
      },
      {
        imageSrc: "../../img/2017/black-clover-tv.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Black Clover (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        mirando:true,
        num:"165",
      },
      {
        imageSrc: "../../img/2017/cinderella-girls-gekijou-2nd-season.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Cinderella Girls Gekijou 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"164",
      },
      {
        imageSrc: "../../img/2017/juuni-taisen.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Juuni Taisen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"163",
      },
      {
        imageSrc: "../../img/2017/sengoku-night-blood.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Sengoku Night Blood",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"162",
      },
      {
        imageSrc: "../../img/2017/osake-wa-fuufu-ni-natte-kara.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Osake wa Fuufu ni Natte kara",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"161",
      },
      {
        imageSrc: "../../img/2017/shokugeki-no-souma-san-no-sara.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Shokugeki no Souma: San no Sara",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"160",
      },
      {
        imageSrc: "../../img/2017/osomatsu-san-2.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Osomatsu-san 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"159",
      },
      {
        imageSrc: "../../img/2017/uq-holder-mahou-sensei-negima-2.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "UQ Holder!: Mahou Sensei Negima! 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"158",
      },
      {
        imageSrc: "../../img/2017/omiai-aite-wa-oshiego-tsuyokina-mondaiji.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Omiai Aite wa Oshiego, Tsuyokina, Mondaiji",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"157",
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