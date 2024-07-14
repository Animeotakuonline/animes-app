// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2015/hantsu-x-trash.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Hantsu x Trash",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"222",
      },
      {
        imageSrc: "../../img/2015/teekyuu-6.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Teekyuu 6",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"221",
      },
      {
        imageSrc: "../../img/2015/high-school-star-musical.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "High School Star Musical",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"220",
      },
      {
        imageSrc: "../../img/2015/jk-meshi.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "JK Meshi!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"219",
      },
      {
        imageSrc: "../../img/2015/yuru-yuri-sanhai.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Yuru Yuri San☆Hai!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"218",
      },
      {
        imageSrc: "../../img/2015/peeping-life-tv-season-1.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Peeping Life TV: Season 1??",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"217",
      },
      {
        imageSrc: "../../img/2015/osomatsu-san.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Osomatsu-san",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"216",
      },
      {
        imageSrc: "../../img/2015/mobile-suit-gundam-iron-blooded-orphans.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Mobile Suit Gundam: Iron-Blooded Orphans",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"215",
      },
      {
        imageSrc: "../../img/2015/comet-lucifer.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Comet Lucifer",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"214",
      },
      {
        imageSrc: "../../img/2015/concrete-revolutio-choujin-gensou.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Concrete Revolutio: Choujin Gensou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"213",
      },
      {
        imageSrc: "../../img/2015/komori-san-wa-kotowarenai.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Komori-san wa Kotowarenai!",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"212",
      },
      {
        imageSrc: "../../img/2015/onsen-yousei-hakone-chan.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Onsen Yousei Hakone-chan",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"211",
      },
      {
        imageSrc: "../../img/2015/ame-iro-cocoa-rainy-color-e-youkoso.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Ame-iro Cocoa: Rainy Color e Youkoso!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"210",
      },
      {
        imageSrc: "../../img/2015/owarimonogatari.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Owarimonogatari",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"209",
      },
      {
        imageSrc: "../../img/2015/kindaichi-shounen-no-jikenbo-returns-2nd-season.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Kindaichi Shounen no Jikenbo Returns 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"208",
      },
      {
        imageSrc: "../../img/2015/rakudai-kishi-no-cavalry.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Rakudai Kishi no Cavalry",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"207",
      },
      {
        imageSrc: "../../img/2015/gakusen-toshi-asterisk.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Gakusen Toshi Asterisk",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"206",
      },
      {
        imageSrc: "../../img/2015/utawarerumono-itsuwari-no-kamen.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Utawarerumono: Itsuwari no Kamen",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"205",
      },
      {
        imageSrc: "../../img/2015/shingeki-kyojin-chuugakkou.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki! Kyojin Chuugakkou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"204",
      },
      {
        imageSrc: "../../img/2015/haikyuu-second-season.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Haikyuu!! Second Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"203",
      },
      {
        imageSrc: "../../img/2015/itoshi-no-muco.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Itoshi no Muco",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"202",
      },
      {
        imageSrc: "../../img/2015/owari-no-seraph-the-beginning-of-the-end.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Owari no Seraph: The Beginning of the End",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"201",
      },
      {
        imageSrc: "../../img/2015/noragami-aragoto.jpg",//-----------------------------------
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Noragami Aragoto",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"200",
      },
      {
        imageSrc: "../../img/2015/heavy-object.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Heavy Object",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"199",
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