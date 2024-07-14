// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2024/the-idolmster-shiny-colors.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de abril del 2024",
    name: "The iDOLM@STER Shiny Colors",
    status: "Estado: En emisión",
    availability: "Disponible 0 capitulos de ??",
    readMoreLink: "../2024/informacion/the-idolmster-shiny-colors.html",
    visto:true,
    num: "122",
  },
  {
    imageSrc: "../../img/2024/shadowverse-flame-arc-hen.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de abril del 2024",
    name: "Shadowverse Flame: Arc-hen",
    status: "Estado: En emisiónr",
    availability: "Disponible 1 capitulo de 1",
    readMoreLink: "../2024/informacion/shadowverse-flame-arc-hen.html",
    num:"121",
  },
  {
    imageSrc: "../../img/2024/kuramerukagari.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de abril del 2024",
    name: "Kuramerukagari",
    status: "Estado: Finalizado",
    availability: "Disponible 1 capitulos de 1",
    readMoreLink: "../2024/informacion/Kuramerukagari.html",
    num: "120",
  },
  {
    imageSrc: "../../img/2024/kurayukaba.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 12 de abril del 2024",
    name: "kurayukaba",
    status: "Estado: Finalizado",
    availability: "Disponible 1 capitulos de 1",
    readMoreLink: "../2024/informacion/kurayukaba.html",
    num: "119",
  },
  {
    imageSrc: "../../img/2024/kenka-dokugaku.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 11 de abril del 2024",
    name: "Kenka Dokugaku",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/kenka-dokugak.html",
    num:"118",
  },
  {
    imageSrc: "../../img/2024/seiyuu-radio-no-uraomote.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 10 de abril del 2024",
    name: "Seiyuu Radio no Uraomote",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/seiyuu-radio-no-uraomote.html",
    num:"117",
  },
  {
    imageSrc: "../../img/2024/kono-subarashii-sekai-ni-shukufuku-wo-3.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 10 de abril del 2024",
    name: "Kono Subarashii Sekai ni Shukufuku wo! 3",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/kono-subarashii-sekai-ni-shukufuku-wo-3.html",
    visto: true,
    num:"116",
  },
  {
    imageSrc: "../../img/2024/date-a-live-v.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 10 de abril del 2024",
    name: "Date A Live V",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/date-a-live-v.html",
    visto:"true",
    num:"115",
  },
  {
    imageSrc: "../../img/2024/kaii-to-otome-to-kamikakushi.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 10 de abril del 2024",
    name: "Kaii to Otome to Kamikakushi",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/kaii-to-otome-to-kamikakushi.html",
    num:"114",
  },
  {
    imageSrc: "../../img/2024/xuwu-bianjing.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 10 de abril del 2024",
    name: "xuwu bianjing",
    status: "Estado: En emisión",
    availability: "Disponible 0 capitulos de ??",
    readMoreLink: "../2024/informacion/xuwu-bianjing.html",
    num: "113",
  },





  {
    imageSrc: "../../img/2024/unnamed-memory.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 09 de abrl del 2024",
    name: "Unnamed: Memory",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/Unnamed-Memory.html",
    num:"112",
  },
  {
    imageSrc: "../../img/2024/boukyaku-battery-tv.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 09 de abril del 2024",
    name: "Boukyaku Battery (TV)",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/boukyaku-battery-tv.html",
    por_ver: true,
    num:"111",
  },
  {
    imageSrc: "../../img/2024/rinkai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 09 de abril del 2024",
    name: "Rinkai!",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/rinkai.html",
    num:"110",
  },
    {
        imageSrc: "../../img/2024/lv2-kara-cheat-datta-motoyuusha-kouho-no-mattari-isekai-life.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 08 de abril del 2024",
        name: "Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/lv2-kara-cheat-datta-motoyuusha-kouho-no-mattari-isekai-life.html",
        num:"109",
      },
      {
        imageSrc: "../../img/2024/tadaima-okaeri.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 08 de abril del 2024",
        name: "Tadaima, Okaeri",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/tadaima-okaeri.html",
        num:"108",
      },
      {
        imageSrc: "../../img/2024/shen-zhiyi-jiao.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 08 de abril del 2024",
        name: "Shen Zhiyi Jiao",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/tadaima-okaeri.html",
        num:"107",
      },
      //Shen Zhiyi Jiao
      {
        imageSrc: "../../img/2024/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 08 de abril del 2024",
        name: "Mushoku Tensei: Isekai Ittara Honki Dasu Part 2",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2.html",
        visto:true,
        num:"106",
      },
      {
        imageSrc: "../../img/2024/hibike-euphonium-3.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
        name: "Hibike! Euphonium 3",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/hibike-euphonium-3.html",
        visto:true,
        num:"105",
      },
      {
        imageSrc: "../../img/2024/sentai-daishikkaku.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
        name: "Sentai Daishikkaku",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/sentai-daishikkaku.html",
        num:"104",
      },
      {
        imageSrc: "../../img/2024/yozakura-san-chi-no-daisakusen.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
        name: "Yozakura-san Chi no Daisakusen",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/yozakura-san-chi-no-daisakusen.html",
        num:"103",
      },
      {
        imageSrc: "../../img/2024/jiisan-baasan-wakagaeru.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
        name: "Jiisan Baasan Wakagaeru",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/jiisan-baasan-wakagaeru.html",
        num:"102",
      },
      {
        imageSrc: "../../img/2024/shinigami-bocchan-to-kuro-maid-3rd-season.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
        name: "Shinigami Bocchan to Kuro Maid 3rd Season",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/shinigami-bocchan-to-kuro-maid-3rd-season.html",
        num:"101",
      },
      {
        imageSrc: "../../img/2024/tensei-kizoku-kantei-skill-de-nariagaru.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
        name: "Tensei Kizoku, Kantei Skill de Nariagaru",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/tensei-kizoku-kantei-skill-de-nariagaru.html",
        num:"100",
      },
      {
        imageSrc: "../../img/2024/blue-archive-the-animation.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
        name: "Blue Archive the Animation",
        status: "Estado: En emisión",
        availability: "Disponible X capitulos",
        readMoreLink: "../2024/informacion/blue-archive-the-animation.html",
        por_ver:true,
        num:"99",
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