// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2012/kokoro-connect.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Kokoro Connect",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/kyoukai-senjou-no-horizon-2.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Kyoukai Senjou no Horizon II",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/hyouka-motsubeki-mono-wa.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Hyouka: Motsubeki Mono wa",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/dog-days-2.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Dog Days' S2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/dakara-boku-wa-h-ga-dekinai.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Dakara Boku wa, H ga Dekinai.",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/hagure-yuusha-no-estetica.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Hagure Yuusha no Estetica",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/koi-to-senkyo-to-chocolate.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Koi to Senkyo to Chocolate",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/kono-naka-ni-hitori-imouto-ga-iru.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Kono Naka ni Hitori, Imouto ga Iru!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/joshiraku.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Joshiraku",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/binbougami-ga.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Binbougami ga!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/yuru-yuri-2.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Yuru Yuri S2 ♪♪",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/arcana-famiglia.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Arcana Famiglia",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/tari-tari.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Tari Tari",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/muv-luv-alternative-total-eclipse.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Muv-Luv Alternative: Total Eclipse",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/campione.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Campione!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/the-idolmster-765-pro-to-iu-monogatari.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "The iDOLM@STER: 765 Pro to Iu Monogatari",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/queens-blade-rebellion-specials.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Queen's Blade: Rebellion Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/ookami-kodomo-no-ame-to-yuki.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Ookami Kodomo no Ame to Yuki",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/sword-art-online.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Sword Art Online",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/asa-made-jugyou-chu.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Asa Made Jugyou Chu!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/sankarea-ova.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Sankarea OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/kingdom.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Kingdom",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/blood-c-the-last-dark.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Blood-C: The Last Dark",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/queens-blade-rebellion-vs-hagure-yuusha-no-estetica.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Queen's Blade Rebellion vs. Hagure Yuusha no Estetica",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
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