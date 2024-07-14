// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2016/gate-jieitai-kanochi-nite-kaku-tatakaeri-enryuu-hen.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Gate: Jieitai Kanochi nite, Kaku Tatakaeri - Enryuu-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"18",
      },
      {
        imageSrc: "../../img/2016/shouwa-genroku-rakugo-shinjuu.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Shouwa Genroku Rakugo Shinjuu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"17",
      },
      {
        imageSrc: "../../img/2016/kizumonogatari-i-tekketsu-hen.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kizumonogatari I: Tekketsu-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"16",
      },
      {
        imageSrc: "../../img/2016/active-raid-kidou-kyoushuushitsu-dai-hakkei.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Active Raid: Kidou Kyoushuushitsu Dai Hakkei",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"15",
      },
      {
        imageSrc: "../../img/2016/norn9-nornnonet.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Norn9: Norn+Nonet",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"14",
      },
      {
        imageSrc: "../../img/2016/shoujo-tachi-wa-kouya-wo-mezasu.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Shoujo-tachi wa Kouya wo Mezasu",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"13",
      },
      {
        imageSrc: "../../img/2016/boku-dake-ga-inai-machi.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Boku dake ga Inai Machi",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"12",
      },
      {
        imageSrc: "../../img/2016/ansatsu-kyoushitsu-tv-2nd-season.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Ansatsu Kyoushitsu (TV) 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"11",
      },
      {
        imageSrc: "../../img/2016/dagashi-kashi.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Dagashi Kashi",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"10",
      },
      {
        imageSrc: "../../img/2016/ojisan-to-marshmallow.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Ojisan to Marshmallow",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"9",
      },
      {
        imageSrc: "../../img/2016/haruchika-haruta-to-chika-wa-seishun-suru.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Haruchika: Haruta to Chika wa Seishun Suru",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"8",
      },
      {
        imageSrc: "../../img/2016/musaigen-no-phantom-world.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Musaigen no Phantom World",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"7",
      },
      {
        imageSrc: "../../img/2016/prince-of-stride-alternative.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Prince of Stride: Alternative",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"6",
      },
      {
        imageSrc: "../../img/2016/akagami-no-shirayuki-hime-nandemonai-takaramono-kono-page.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Akagami no Shirayuki-hime: Nandemonai Takaramono, Kono Page",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"5",
      },
      {
        imageSrc: "../../img/2016/to-love-ru-darkness-2nd-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "To LOVE-Ru Darkness 2nd OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"4",
      },
      {
        imageSrc: "../../img/2016/bubuki-buranki.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Bubuki Buranki",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"3",
      },
      {
        imageSrc: "../../img/2016/mobile-suit-gundam-thunderbolt.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Mobile Suit Gundam Thunderbolt",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"2",
      },
      {
        imageSrc: "../../img/2016/big-order.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Big Order",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
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