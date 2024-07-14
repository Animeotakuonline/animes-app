// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2017/gintama-porori-hen.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Gintama. Porori-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"156",
      },
      {
        imageSrc: "../../img/2017/digimon-adventure-tri-5-kyousei.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Digimon Adventure tri. 5: Kyousei",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"155",
      },
      {
        imageSrc: "../../img/2017/wo-de-tian-jie-nu-you.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Wo de Tian Jie Nu You",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"154",
      },
      {
        imageSrc: "../../img/2017/quanzhi-fashi-ii.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Quanzhi Fashi II",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"153",
      },
      {
        imageSrc: "../../img/2017/cardcaptor-sakura-clear-card-hen-prologue-sakura-to-futatsu-no-kuma.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Sakura Card Captor: Clear Card-hen - Prologue Sakura to Futatsu no Kuma",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"152",
      },
      {
        imageSrc: "../../img/2017/fastening-days-3.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Fastening Days 3",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"151",
      },
      {
        imageSrc: "../../img/2017/ku-pao-ying-xiong.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Ku Pao Ying Xiong",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"150",
      },
      {
        imageSrc: "../../img/2017/owarimonogatari-2nd-season.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Owarimonogatari 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"149",
      },
      {
        imageSrc: "../../img/2017/the-reflection.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "The Reflection",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"148",
      },
      {
        imageSrc: "../../img/2017/seitokai-yakuindomo-movie.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Seitokai Yakuindomo Movie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"147",
      },
      {
        imageSrc: "../../img/2017/no-game-no-life-zero.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "No Game No Life: Zero",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"146",
      },
      {
        imageSrc: "../../img/2017/jigoku-shoujo-yoi-no-togi.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Jigoku Shoujo: Yoi no Togi",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"145",
      },
      {
        imageSrc: "../../img/2017/gamers.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Gamers!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"144",
      },
      {
        imageSrc: "../../img/2017/clione-no-akari.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Clione no Akari",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"143",
      },
      {
        imageSrc: "../../img/2017/hajimete-no-gal.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Hajimete no Gal",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"142",
      },
      {
        imageSrc: "../../img/2017/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-tv.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"141",
      },
      {
        imageSrc: "../../img/2017/nora-to-oujo-to-noraneko-heart.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Nora to Oujo to Noraneko Heart",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"140",
      },
      {
        imageSrc: "../../img/2017/teekyuu-9.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Teekyuu 9",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"139",
      },
      {
        imageSrc: "../../img/2017/lan-mo-de-hua.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Lan Mo de Hua",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"138",
      },
      {
        imageSrc: "../../img/2017/isekai-wa-smartphone-to-tomo-ni.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Isekai wa Smartphone to Tomo ni",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"137",
      },
      {
        imageSrc: "../../img/2017/new-game-2.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "New Game!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"136",
      },
      {
        imageSrc: "../../img/2017/tenshi-no-3p.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Tenshi no 3P!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"135",
      },
      {
        imageSrc: "../../img/2017/shinya-tensai-bakabon.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Shinya! Tensai Bakabon",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"134",
      },
      {
        imageSrc: "../../img/2017/centaur-no-nayami.jpg",
        dateAdded: "2017",
        dateOfRelease: "Fecha de emisión",
        name: "Centaur no Nayami",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"133",
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