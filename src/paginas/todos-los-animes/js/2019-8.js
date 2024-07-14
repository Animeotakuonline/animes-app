// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2019/tate-no-yuusha-no-nariagari.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Tate no Yuusha no Nariagari",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"24",
      },
      {
        imageSrc: "../../img/2019/yakusoku-no-neverland.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Yakusoku no Neverland",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"23",
      },
      {
        imageSrc: "../../img/2019/meiji-tokyo-renka.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Meiji Tokyo Renka",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"22",
      },
      {
        imageSrc: "../../img/2019/doukyonin-wa-hiza-tokidoki-atama-no-ue.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Doukyonin wa Hiza, Tokidoki, Atama no Ue",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"21",
      },
      {
        imageSrc: "../../img/2019/watashi-ni-tenshi-ga-maiorita.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Watashi ni Tenshi ga Maiorita!",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"20",
      },
      {
        imageSrc: "../../img/2019/kakegurui-xx.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Kakegurui××",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"19",
      },
      {
        imageSrc: "../../img/2019/ame-iro-cocoa-side-g.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Ame-iro Cocoa: Side G",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"18",
      },
      {
        imageSrc: "../../img/2019/rinshi-ekoda-chan.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Rinshi!! Ekoda-chan",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"17",
      },
      {
        imageSrc: "../../img/2019/pastel-memories.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Pastel Memories",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"16",
      },
      {
        imageSrc: "../../img/2019/circlet-princess.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Circlet Princess",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        por_ver:true,
        num:"15",
      },
      {
        imageSrc: "../../img/2019/3d-kanojo-real-girl-2nd-season.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "3D Kanojo: Real Girl 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"14",
      },
      {
        imageSrc: "../../img/2019/mob-psycho-100-ii.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Mob Psycho 100 II",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"13",
      },
      {
        imageSrc: "../../img/2019/papa-datte-shitai.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Papa datte, Shitai",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"12",
      },
      {
        imageSrc: "../../img/2019/dororo.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Dororo",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"11",
      },
      {
        imageSrc: "../../img/2019/bang-dream-2nd-season.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "BanG Dream! 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"10",
      },
      {
        imageSrc: "../../img/2019/ueno-san-wa-bukiyou.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Ueno-san wa Bukiyou",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"9",
      },
      {
        imageSrc: "../../img/2019/b-project-zecchouemotion.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "B-Project: Zecchou*Emotion",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"8",
      },
      {
        imageSrc: "../../img/2019/fukigen-na-mononokean-tsuzuki.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Fukigen na Mononokean Tsuzuki",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"7",
      },
      {
        imageSrc: "../../img/2019/wz.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "W'z",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        por_ver:true,
        num:"6",
      },
      {
        imageSrc: "../../img/2019/mini-toji.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Mini Toji",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        visto:true,
        num:"5",
      },
      {
        imageSrc: "../../img/2019/boogiepop-wa-warawanai-2019.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Boogiepop wa Warawanai (2019)",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"4",
      },
      {
        imageSrc: "../../img/2019/egao-no-daika.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Egao no Daika",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"3",
      },
      {
        imageSrc: "../../img/2019/ikkitousen-western-wolves.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Ikkitousen: Western Wolves",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        num:"2",
      },
      {
        imageSrc: "../../img/2019/nanatsu-no-taizai-movie-tenkuu-no-torawarebito.jpg",
        dateAdded: "2019",
        dateOfRelease: "Fecha de emisión",
        name: "Nanatsu no Taizai Movie: Tenkuu no Torawarebito",
        status: "Estado",
        availability: "Disponible X capitulos",
        readMoreLink: "../2019/informacion/",
        por_ver:true,
        num:"1",
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