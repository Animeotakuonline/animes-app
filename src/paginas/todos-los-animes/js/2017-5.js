// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2017/fukumenkei-noise.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Fukumenkei Noise",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"84",
      },
      {
        imageSrc: "../../img/2017/shuumatsu-nani-shitemasu-ka-isogashii-desu-ka-sukutte-moratte-ii-desu-ka.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka?",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"83",
      },
      {
        imageSrc: "../../img/2017/natsume-yuujinchou-roku.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Natsume Yuujinchou Roku",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"82",
      },
      {
        imageSrc: "../../img/2017/zero-kara-hajimeru-mahou-no-sho.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Zero kara Hajimeru Mahou no Sho",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"81",
      },
      {
        imageSrc: "../../img/2017/id-0.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "ID-0",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"80",
      },
      {
        imageSrc: "../../img/2017/kyoukai-no-rinne-tv-3rd-season.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kyoukai no Rinne (TV) 3rd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"79",
      },
      {
        imageSrc: "../../img/2017/recreators.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Re:Creators",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"78",
      },
      {
        imageSrc: "../../img/2017/eromanga-sensei.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Eromanga-sensei",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"77",
      },
      {
        imageSrc: "../../img/2017/uchouten-kazoku-2.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Uchouten Kazoku 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"76",
      },
      {
        imageSrc: "../../img/2017/hinako-note.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Hinako Note",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"75",
      },
      {
        imageSrc: "../../img/2017/kaitou-tenshi-twin-angel-tv.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kaitou Tenshi Twin Angel (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"74",
      },
      {
        imageSrc: "../../img/2017/shingeki-no-bahamut-virgin-soul.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Bahamut: Virgin Soul",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"73",
      },
      {
        imageSrc: "../../img/2017/berserk-2017.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Berserk (2017)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"72",
      },
      {
        imageSrc: "../../img/2017/nobunaga-no-shinobi-ise-kanegasaki-hen.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Nobunaga no Shinobi: Ise Kanegasaki-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"71",
      },
      {
        imageSrc: "../../img/2017/quanzhi-gaoshou.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Quanzhi Gaoshou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"70",
      },
      {
        imageSrc: "../../img/2017/seikaisuru-kado.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Seikaisuru Kado",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"69",
      },
      {
        imageSrc: "../../img/2017/tsuki-ga-kirei.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Tsuki ga Kirei",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"68",
      },
      {
        imageSrc: "../../img/2017/clockwork-planet.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Clockwork Planet",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"67",
      },
      {
        imageSrc: "../../img/2017/kabukibu.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Kabukibu!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"66",
      },
      {
        imageSrc: "../../img/2017/renai-boukun.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Renai Boukun",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"65",
      },
      {
        imageSrc: "../../img/2017/busou-shoujo-machiavellianism.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Busou Shoujo Machiavellianism",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"64",
      },
      {
        imageSrc: "../../img/2017/love-kome-we-love-rice.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Love Kome: We Love Rice",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"63",
      },
      {
        imageSrc: "../../img/2017/sakurada-reset.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Sakurada Reset",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"62",
      },
      {
        imageSrc: "../../img/2017/sakura-quest.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Sakura Quest",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"61",
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