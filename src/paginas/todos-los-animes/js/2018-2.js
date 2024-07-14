// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2018/tensei-shitara-slime-datta-ken.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei shitara Slime Datta Ken",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "149",
  },
  {
    imageSrc: "../../img/2018/ken-en-ken-aoki-kagayaki.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Ken En Ken: Aoki Kagayaki",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "148",
  },
  {
    imageSrc: "../../img/2018/souten-no-ken-regenesis-2nd-season.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Souten no Ken: Regenesis 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "147",
  },
  {
    imageSrc: "../../img/2018/jingai-san-no-yome.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Jingai-san no Yome",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "146",
  },
  {
    imageSrc: "../../img/2018/akanesasu-shoujo.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Akanesasu Shoujo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "145",
  },
  {
    imageSrc: "../../img/2018/double-decker-doug-kirill.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Double Decker! Doug & Kirill",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "144",
  },
  {
    imageSrc: "../../img/2018/natsume-yuujinchou-movie-utsusemi-ni-musubu.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Natsume Yuujinchou Movie: Utsusemi ni Musubu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "143",
  },
  {
    imageSrc: "../../img/2018/rerided-tokigoe-no-derrida.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "RErideD: Tokigoe no Derrida",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "142",
  },
  {
    imageSrc: "../../img/2018/yagate-kimi-ni-naru.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Yagate Kimi ni Naru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "141",
  },
  {
    imageSrc: "../../img/2018/kimi-no-suizou-wo-tabetai.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Kimi no Suizou wo Tabetai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "140",
  },
  {
    imageSrc: "../../img/2018/xiao-lu-he-xiao-lan.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Xiao Lu He Xiao Lan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "139",
  },
  {
    imageSrc: "../../img/2018/non-non-biyori-movie-vacation.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Non Non Biyori Movie: Vacation",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "138",
  },
  {
    imageSrc: "../../img/2018/aragne-no-mushikago.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Aragne no Mushikago",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "137",
  },
  {
    imageSrc: "../../img/2018/piano-no-mori-tv.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Piano no Mori (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "136",
  },
  {
    imageSrc: "../../img/2018/devils-line-anytime-anywhere.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Devils Line: Anytime Anywhere",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "135",
  },
  {
    imageSrc: "../../img/2018/na-bbeun-sang-sa.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Na Bbeun Sang Sa",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "134",
  },
  {
    imageSrc: "../../img/2018/muhyo-to-rouji-no-mahouritsu-soudan-jimusho.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Muhyo to Rouji no Mahouritsu Soudan Jimusho",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "133",
  },
  {
    imageSrc: "../../img/2018/boku-no-hero-academia-the-movie-futari-no-hero.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Hero Academia the Movie: Futari no Hero",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "132",
  },
  {
    imageSrc: "../../img/2018/cike-wu-liuqi-fanwai.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Cike Wu Liuqi Fanwai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "131",
  },
  {
    imageSrc: "../../img/2018/masamune-kun-no-revenge-ova.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Masamune-kun no Revenge OVAe",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "130",
  },
  {
    imageSrc: "../../img/2018/shingeki-no-kyojin-season-3.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Shingeki no Kyojin Season 3",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "129",
  },
  {
    imageSrc: "../../img/2018/mirai-no-mirai.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Mirai no Mirai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "128",
  },
  {
    imageSrc: "../../img/2018/yuragi-sou-no-yuuna-san.jpg",
    dateAdded: "2018",
    dateOfRelease: "Fecha de emisión",
    name: "Yuragi-sou no Yuuna-san",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    num: "127",
  },
  {
    imageSrc: "../../img/2018/happy-sugar-life.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Happy Sugar Life",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2018/informacion/",
    visto:true,
    num: "126",
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