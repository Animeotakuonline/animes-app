// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2015/pokemon-xyz.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Pokemon XY&Z",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"246",
  },
  {
    imageSrc: "../../img/2015/wakabagirl-onsen-tsukaritai.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Wakaba*Girl: Onsen Tsukaritai",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"245",
  },
  {
    imageSrc: "../../img/2015/nagato-yuki-chan-no-shoushitsu-ova.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Nagato Yuki-chan no Shoushitsu OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"244",
  },
  {
    imageSrc: "../../img/2015/ling-yu.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Ling Yu",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"243",
  },
  {
    imageSrc: "../../img/2015/himouto-umaru-chan-ova.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Himouto! Umaru-chan OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"242",
  },
  {
    imageSrc: "../../img/2015/anitore-ex.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Anitore! EX",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"241",
  },
  {
    imageSrc: "../../img/2015/brave-beats.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Brave Beats",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"240",
  },
  {
    imageSrc: "../../img/2015/gochuumon-wa-usagi-desu-ka-2.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Gochuumon wa Usagi desu ka??",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"239",
  },
  {
    imageSrc: "../../img/2015/owari-no-seraph-nagoya-kessen-hen.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Owari no Seraph: Nagoya Kessen-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"238",
  },
  {
    imageSrc: "../../img/2015/valkyrie-drive-mermaid.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Valkyrie Drive: Mermaid",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"237",
  },
  {
    imageSrc: "../../img/2015/kyoukai-no-kanata-movie-ill-be-here-mirai-hen.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Kyoukai no Kanata Movie: I'll Be Here - Mirai-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"236",
  },
  {
    imageSrc: "../../img/2015/garo-guren-no-tsuki.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Garo: Guren no Tsuki",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"235",
  },
  {
    imageSrc: "../../img/2015/shinmai-maou-no-testament-burst.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Shinmai Maou no Testament Burst",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"234",
  },
  {
    imageSrc: "../../img/2015/subete-ga-f-ni-naru-the-perfect-insider.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Subete ga F ni Naru: The Perfect Insider",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"233",
  },
  {
    imageSrc: "../../img/2015/fushigi-na-somera-chan.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Fushigi na Somera-chan",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"232",
  },
  {
    imageSrc: "../../img/2015/sakurako-san-no-ashimoto-ni-wa-shitai-ga-umatteiru.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"231",
  },
  {
    imageSrc: "../../img/2015/dance-with-devils.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Dance with Devils",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"230",
  },
  {
    imageSrc: "../../img/2015/ore-ga-ojousama-gakkou-ni-shomin-sample-toshite-getssareta-ken.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Shomin Sample",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"229",
  },
  {
    imageSrc: "../../img/2015/taimadou-gakuen-35-shiken-shoutai.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Taimadou Gakuen 35 Shiken Shoutai",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"228",
  },
  {
    imageSrc: "../../img/2015/tantei-team-kz-jiken-note.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Tantei Team KZ Jiken Note",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"227",
  },
  {
    imageSrc: "../../img/2015/hidan-no-aria-aa.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Hidan no Aria AA",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"226",
  },
  {
    imageSrc: "../../img/2015/hokuto-no-ken-ichigo-aji.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "DD Hokuto II + Hokuto no Ken: Ichigo Aji",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"225",
  },
  {
    imageSrc: "../../img/2015/kowabon.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Kowabon",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"224",
  },
  {
    imageSrc: "../../img/2015/tokyo-ghoul-jack.jpg",
    dateAdded: "2015",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Ghoul: 'Jack'",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"223",
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