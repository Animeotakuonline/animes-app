// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2016/spiritpact.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Ling Qi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"114",
      },
      {
        imageSrc: "../../img/2016/girls-und-panzer-der-film-arisu-war.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Girls und Panzer der Film: Arisu War!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"113",
      },
      {
        imageSrc: "../../img/2016/kekkai-sensen-ousama-no-restaurant-no-ousama.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kekkai Sensen: Ousama no Restaurant no Ousama",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"112",
      },
      {
        imageSrc: "../../img/2016/ajin-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Ajin OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"111",
      },
      {
        imageSrc: "../../img/2016/arslan-senki-tv-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Arslan Senki (TV) OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"110",
      },
      {
        imageSrc: "../../img/2016/haikyuu-vs-akaten.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Haikyuu!!: vs. Akaten",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"109",
      },
      {
        imageSrc: "../../img/2016/the-idolmster-cinderella-girls-anytime-anywhere-with-cinderella.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "The iDOLM@STER Cinderella Girls: Anytime, Anywhere with Cinderella",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"108",
      },
      {
        imageSrc: "../../img/2016/shokugeki-no-souma-ova.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Shokugeki no Souma OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"107",
      },
      {
        imageSrc: "../../img/2016/owari-no-seraph-kyuuketsuki-shahar.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Owari no Seraph: Kyuuketsuki Shahar",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"106",
      },
      {
        imageSrc: "../../img/2016/zhen-hun-jie.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Zhen Hun Jie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"105",
      },
      {
        imageSrc: "../../img/2016/big-order-tv.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Big Order (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"104",
      },
      {
        imageSrc: "../../img/2016/magi-sinbad-no-bouken-tv.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Magi: Sinbad no Bouken (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"103",
      },
      {
        imageSrc: "../../img/2016/usakame.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Usakame",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"102",
      },
      {
        imageSrc: "../../img/2016/wagamama-high-spec.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Wagamama High Spec",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"101",
      },
      {
        imageSrc: "../../img/2016/sansha-sanyou.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Sansha Sanyou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"100",
      },
      {
        imageSrc: "../../img/2016/tonkatsu-dj-agetarou.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Tonkatsu DJ Agetarou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"99",
      },
      {
        imageSrc: "../../img/2016/kyoukai-no-rinne-tv-2nd-season.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kyoukai no Rinne (TV) 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"98",
      },
      {
        imageSrc: "../../img/2016/tanaka-kun-wa-itsumo-kedaruge.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Tanaka-kun wa Itsumo Kedaruge",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"97",
      },
      {
        imageSrc: "../../img/2016/kiznaiver.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Kiznaiver",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"96",
      },
      {
        imageSrc: "../../img/2016/haifuri.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Haifuri",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"95",
      },
      {
        imageSrc: "../../img/2016/flying-witch.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Flying Witch",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"94",
      },
      {
        imageSrc: "../../img/2016/concrete-revolutio-choujin-gensou-the-last-song.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Concrete Revolutio: Choujin Gensou - The Last Song",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"93",
      },
      {
        imageSrc: "../../img/2016/sakamoto-desu-ga.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Sakamoto desu ga?",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"92",
      },
      {
        imageSrc: "../../img/2016/anne-happy.jpg",
        dateAdded: "2016",
        dateOfRelease: "Fecha de emisión",
        name: "Anne Happy♪",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"91",
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