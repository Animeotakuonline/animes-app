// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2017/super-lovers-2.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Super Lovers 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"36",
      },
      {
        imageSrc: "../../img/2017/kuzu-no-honkai.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kuzu no Honkai",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"35",
      },
      {
        imageSrc: "../../img/2017/piace-watashi-no-italian.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Piace: Watashi no Italian",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"34",
      },
      {
        imageSrc: "../../img/2017/kono-subarashii-sekai-ni-shukufuku-wo-2.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kono Subarashii Sekai ni Shukufuku wo! 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"33",
      },
      {
        imageSrc: "../../img/2017/choschild.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Chaos;Child",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"32",
      },
      {
        imageSrc: "../../img/2017/kobayashi-san-chi-no-maid-dragon.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kobayashi-san Chi no Maid Dragon",
	      status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"31",
      },
      {
        imageSrc: "../../img/2017/one-room.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "One Roome",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"30",
      },
      {
        imageSrc: "../../img/2017/acca-13-ku-kansatsu-ka.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "ACCA: 13-ku Kansatsu-ka",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"29",
      },
      {
        imageSrc: "../../img/2017/hand-shakers.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Hand Shakers",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"28",
      },
      {
        imageSrc: "../../img/2017/kemono-friends.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kemono Friends",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"27",
      },
      {
        imageSrc: "../../img/2017/gabriel-dropout.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Gabriel DropOut",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"26",
      },
      {
        imageSrc: "../../img/2017/chiruran-nibun-no-ichi.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Chiruran: Nibun no Ichi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"25",
      },
      {
        imageSrc: "../../img/2017/yowamushi-pedal-new-generation.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Yowamushi Pedal: New Generation",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"24",
      },
      {
        imageSrc: "../../img/2017/onihei.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Onihei",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"23",
      },
      {
        imageSrc: "../../img/2017/ldlive.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "ēlDLIVE",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"22",
      },
      {
        imageSrc: "../../img/2017/nyanko-days.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Nyanko Days",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"21",
      },
      {
        imageSrc: "../../img/2017/tales-of-zestiria-the-x-2017.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Tales of Zestiria the X (2017)",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"20",
      },
      {
        imageSrc: "../../img/2017/idol-jihen.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Idol Jihen",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"19",
      },
      {
        imageSrc: "../../img/2017/little-witch-academia-tv.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Little Witch Academia (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"18",
      },
      {
        imageSrc: "../../img/2017/gintama-2017.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Gintama (2017)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"17",
      },
      {
        imageSrc: "../../img/2017/demi-chan-wa-kataritai.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Demi-chan wa Kataritai",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"16",
      },
      {
        imageSrc: "../../img/2017/reikenzan-eichi-e-no-shikaku.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Reikenzan: Eichi e no Shikaku",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"15",
      },
      {
        imageSrc: "../../img/2017/fuuka.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Fuuka",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"14",
      },
      {
        imageSrc: "../../img/2017/youjo-senki.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Youjo Senki",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"13",
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