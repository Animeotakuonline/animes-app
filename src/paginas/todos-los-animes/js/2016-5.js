// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2016/cheer-danshi.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Cheer Danshi!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"138",
      },
      {
        imageSrc: "../../img/2016/fudanshi-koukou-seikatsu.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Fudanshi Koukou Seikatsu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"137",
      },
      {
        imageSrc: "../../img/2016/new-game.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "New Game!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"136",
      },
      {
        imageSrc: "../../img/2016/amaama-to-inazuma.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Amaama to Inazuma",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"135",
      },
      {
        imageSrc: "../../img/2016/dgray-man-hallow.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "D.Gray-man Hallow",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"134",
      },
      {
        imageSrc: "../../img/2016/taboo-tattoo.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Taboo Tattoo",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"133",
      },
      {
        imageSrc: "../../img/2016/saiki-kusuo-no-nan.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Saiki Kusuo no Ψ-nan (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"132",
      },
      {
        imageSrc: "../../img/2016/fukigen-na-mononokean.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Fukigen na Mononokean",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"131",
      },
      {
        imageSrc: "../../img/2016/arslan-senki-tv-fuujin-ranbu.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Arslan Senki (TV): Fuujin Ranbu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"130",
      },
      {
        imageSrc: "../../img/2016/tales-of-zestiria-the-x.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Tales of Zestiria the X",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"129",
      },
      {
        imageSrc: "../../img/2016/b-project-kodouambitious.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "B-Project: Kodou*Ambitious",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"128",
      },
      {
        imageSrc: "../../img/2016/hatsukoi-monster.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Hatsukoi Monster",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"127",
      },
      {
        imageSrc: "../../img/2016/love-live-sunshine.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Love Live! Sunshine!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"126",
      },
      {
        imageSrc: "../../img/2016/rewrite.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Rewrite",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"125",
      },
      {
        imageSrc: "../../img/2016/shokugeki-no-souma-ni-no-sara.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Food Wars - Shokugeki no Souma: Ni no Sara",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"124",
      },
      {
        imageSrc: "../../img/2016/days-tv.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Days (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"123",
      },
      {
        imageSrc: "../../img/2016/orange.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Orange",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"122",
      },
      {
        imageSrc: "../../img/2016/berserk-2016.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Berserk (2016)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"121",
      },
      {
        imageSrc: "../../img/2016/relife.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "ReLIFE",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"120",
      },
      {
        imageSrc: "../../img/2016/momokuri.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Momokuri",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"119",
      },
      {
        imageSrc: "../../img/2016/sansha-sanyou-specials.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Sansha Sanyou Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"118",
      },
      {
        imageSrc: "../../img/2016/rs-keikaku-rebirth-storage.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "RS Keikaku: Rebirth Storage",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"117",
      },
      {
        imageSrc: "../../img/2016/kono-subarashii-sekai-ni-shukufuku-wo-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kono Subarashii Sekai ni Shukufuku wo! Kono Subarashii Choker ni Shukufuku wo!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"116",
      },
      {
        imageSrc: "../../img/2016/kuma-miko-specials.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kuma Miko Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"115",
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