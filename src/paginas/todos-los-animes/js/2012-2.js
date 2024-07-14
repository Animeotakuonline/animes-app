// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2012/onii-chan-dakedo-ai-sae-areba-kankeinai-yo-ne.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Onii-chan Dakedo Ai Sae Areba Kankeinai yo ne",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/bakuman-3.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Bakuman. 3",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/mahou-shoujo-madokamagica-movie-1-hajimari-no-monogatari.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Shoujo Madoka★Magica Movie 1: Hajimari no Monogatari",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/jojos-bizarre-adventure-2012.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "JoJo's Bizarre Adventure The Animation",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/to-love-ru-darkness.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "To LOVE-Ru Darkness",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/k-project.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "K",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/zetsuen-no-tempest.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Zetsuen no Tempest",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/busou-shinki.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Busou Shinki",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/minami-ke-omatase.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Minami-ke Omatase",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/btooom.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Btooom!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/chuunibyou-demo-koi-ga-shitai.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Chuunibyou demo Koi ga Shitai!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/gintama-2012.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Gintama' (2012)",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/kamisama-hajimemashita.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Kamisama Hajimemashita",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/hayate-no-gotoku-cant-take-my-eyes-off-you.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Hayate no Gotoku! Can’t Take My Eyes Off You",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/wooser-no-sono-higurashi.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Wooser no Sono Higurashi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/tonari-no-kaibutsu-kun.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Tonari no Kaibutsu-kun",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/hiiro-no-kakera-dai-ni-shou.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Hiiro no Kakera Dai Ni Shou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/shinsekai-yori.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Shinsekai yori",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/code-geass-boukoku-no-akito.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Code Geass: Boukoku no Akito",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/asura.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Asura",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/chuunibyou-demo-koi-ga-shitai-lite.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Chuu-ni Byou! Lite",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/boku-wa-tomodachi-ga-sukunai-add-on-disc.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Boku wa Tomodachi ga Sukunai: Add-on Disc",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/inu-x-boku-ss-special.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Inu x Boku SS Special",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/hagure-yuusha-no-estetica-hajirai-ippai.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Hagure Yuusha no Estetica: Hajirai Ippai",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
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
    <div class="p-4 w-full sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
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