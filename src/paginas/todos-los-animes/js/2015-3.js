// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2015/k-return-of-kings.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "K: Return of Kings",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"198",
      },
      {
        imageSrc: "../../img/2015/soukyuu-no-fafner-dead-aggressor-exodus-2nd-season.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Soukyuu no Fafner: Dead Aggressor - Exodus 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"197",
      },
      {
        imageSrc: "../../img/2015/miss-monochrome-the-animation-3.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Miss Monochrome: The Animation 3",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"196",
      },
      {
        imageSrc: "../../img/2015/hacka-doll-the-animation.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Hacka Doll The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"195",
      },
      {
        imageSrc: "../../img/2015/kagewani.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Kagewani",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"194",
      },
      {
        imageSrc: "../../img/2015/lance-n-masques.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Lance N' Masques",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"193",
      },
      {
        imageSrc: "../../img/2015/young-black-jack.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Young Black Jack",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"192",
      },
      {
        imageSrc: "../../img/2015/fate-kaleid-liner-prismaillya-2wei-herz-specials.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Nombre del animeFate/kaleid liner Prisma☆Illya 2wei Herz! Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"191",
      },
      {
        imageSrc: "../../img/2015/akatsuki-no-yona-ova.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Akatsuki no Yona OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"190",
      },
      {
        imageSrc: "../../img/2015/danchigai-special.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Danchigai OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"189",
      },
      {
        imageSrc: "../../img/2015/taifuu-no-noruda.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Taifuu no Noruda",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"188",
      },
      {
        imageSrc: "../../img/2015/youkai-watch-movie-1-tanjou-no-himitsu-da-nyan.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Youkai Watch Movie 1: Tanjou no Himitsu da Nyan!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"187",
      },
      {
        imageSrc: "../../img/2015/one-punch-man.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "One Punch Man",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"186",
      },
      {
        imageSrc: "../../img/2015/lupin-iii-2015.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Lupin III (2015)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"185",
      },
      {
        imageSrc: "../../img/2015/tamayura-sotsugyou-shashin-part-1-kizashi.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Tamayura: Sotsugyou Shashin Part 1 - Kizashi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"184",
      },
      {
        imageSrc: "../../img/2015/yowamushi-pedal-movie.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Yowamushi Pedal Movie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"183",
      },
      {
        imageSrc: "../../img/2015/isuca-gokuraku.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Isuca OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"182",
      },
      {
        imageSrc: "../../img/2015/grisaia-no-rakuen-specials.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Grisaia no Rakuen Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"181",
      },
      {
        imageSrc: "../../img/2015/one-piece-episode-of-sabo-3-kyoudai-no-kizuna-kiseki-no-saikai-to-uketsugareru-ishi.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "One Piece: Episode of Sabo - 3 Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"180",
      },
      {
        imageSrc: "../../img/2015/date-a-live-movie-mayuri-judgment.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Date A Live Movie: Mayuri Judgment",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"179",
      },
      {
        imageSrc: "../../img/2015/yuru-yuri-nachuyachumi-plus.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Yuru Yuri Nachuyachumi! Plus",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"178",
      },
      {
        imageSrc: "../../img/2015/kamisama-hajimemashita-kako-hen.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Kamisama Hajimemashita: Kako-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"177",
      },
      {
        imageSrc: "../../img/2015/diabolik-lovers-moreblood.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Diabolik Lovers More,Blood",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"176",
      },
      {
        imageSrc: "../../img/2015/overlord-specials.jpg",
        dateAdded: "2015",
        dateOfRelease: "Fecha de emisión",
        name: "Overlord: Ple Ple Pleiades",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"175",
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