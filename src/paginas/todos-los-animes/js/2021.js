// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      imageSrc: "../../img/2021/bang-dream-movie-poppin-dream.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "BanG Dream! Movie: Poppin' Dream!",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"245",
    },
    {
      imageSrc: "../../img/2021/sorairo-utility.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Sorairo Utility",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"244",
    },
    {
      imageSrc: "../../img/2021/yami-shibai-10.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Yami Shibai 10",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"243",
    },
    {
      imageSrc: "../../img/2021/mahouka-koukou-no-rettousei-tsuioku-hen.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Mahouka Koukou no Rettousei: Tsuioku-hen",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"242",
    },
    {
      imageSrc: "../../img/2021/getsuyoubi-no-tawawa-2-special.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Getsuyoubi no Tawawa 2 Special",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"241",
    },
    {
      imageSrc: "../../img/2021/jujutsu-kaisen-0-movie.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Jujutsu Kaisen 0 Movie",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"240",
    },
    {
      imageSrc: "../../img/2021/kanashiki-debu-neko-chan.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Kanashiki Debu Neko-chan",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"239",
    },
    {
      imageSrc: "../../img/2021/kimetsu-no-yaiba-yuukaku-hen.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Kimetsu no Yaiba: Yuukaku-hen",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"238",
    },
    {
      imageSrc: "../../img/2021/hula-fulla-dance.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Hula Fulla Dance",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"237",
    },
    {
      imageSrc: "../../img/2021/jojo-no-kimyou-na-bouken-part-6-stone-ocean.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "JoJo no Kimyou na Bouken Part 6: Stone Ocean",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"236",
    },
    {
      imageSrc: "../../img/2021/given-uragawa-no-sonzai.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Given: Uragawa no Sonzai",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"235",
    },
    {
      imageSrc: "../../img/2021/the-daily-life-of-the-inmortal-king-2nd-season.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "The Daily Life of the Immortal King 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"234",
    },
    {
      imageSrc: "../../img/2021/sword-art-online-progressive-movie-hoshi-naki-yoru-no-aria.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Sword Art Online: Progressive Movie - Hoshi Naki Yoru no Aria",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"233",
    },
    {
      imageSrc: "../../img/2021/gundam-breaker-battlogue.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Gundam Breaker: Battlogue",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"232",
    },
    {
      imageSrc: "../../img/2021/lupin-iii-part-6.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Lupin III: Part 6",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"231",
    },
    {
      imageSrc: "../../img/2021/ousama-ranking.jpg",
      readMoreLink: "../2021/informacion/",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Ousama Ranking",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"230",
    },
    {
      imageSrc: "../../img/2021/180-byou-de-kimi-no-mimi-wo-shiawase-ni-dekiru-ka.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "180 Byou de Kimi no Mimi wo Shiawase ni Dekiru ka?",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"229",
    },
    {
      imageSrc: "../../img/2021/deep-insanity-the-lost-child.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Deep Insanity: The Lost Child",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"228",
    },
    {
      imageSrc: "../../img/2021/kaginado.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Kaginado",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      por_ver:true,
      num:"227",
    },
    {
      imageSrc: "../../img/2021/gyakuten-sekai-no-denchi-shoujo.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Gyakuten Sekai no Denchi Shoujo",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"226",
    },
    {
      imageSrc: "../../img/2021/dou-shen-ji.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Dou Shen Ji",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"225",
    },
    {
      imageSrc: "../../img/2021/build-divide-code-black.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Build Divide: Code Black",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"224",
    },
    {
      imageSrc: "../../img/2021/senpai-ga-uzai-kouhai-no-hanashi.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Senpai ga Uzai Kouhai no Hanashi",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      por_ver:true,
      num:"223",
    },
    {
      imageSrc: "../../img/2021/world-trigger-3rd-season.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "World Trigger 3rd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"222",
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