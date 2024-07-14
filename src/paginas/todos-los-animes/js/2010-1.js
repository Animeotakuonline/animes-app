// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2010/otome-youkai-zakuro.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Otome Youkai Zakuro",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/kami-nomi-zo-shiru-sekai.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Kami nomi zo Shiru Sekai",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/pokemon-best-wishes.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Pokemon Best Wishes!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/togainu-no-chi.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Togainu no Chi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/sora-no-otoshimono-forte.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Sora no Otoshimono: Forte",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/star-driver-kagayaki-no-takuto.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Star Driver: Kagayaki no Takuto",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/sora-no-otoshimono-ova.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Sora no Otoshimono OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/tamayura.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Tamayura",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/hyakka-ryouran-samurai-girls.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Hyakka Ryouran: Samurai Girls",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/durarara-specials.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Durarara!! Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/queens-blade-utsukushiki-toushitachi.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Queen's Blade: Utsukushiki Toushitachi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/naruto-shippuuden-movie-4-the-lost-tower.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto: Shippuuden Movie 4 - The Lost Tower",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/blackrock-shooter-ova.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Black★Rock Shooter (OVA)",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/iron-man.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Iron Man",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/sengoku-basara-two.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Sengoku Basara Two",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/seikimatsu-occult-gakuin.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Seikimatsu Occult Gakuin",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/nurarihyon-no-mago.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Nurarihyon no Mago",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/digimon-xros-wars.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Digimon Xros Wars",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/kuroshitsuji-ii.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Kuroshitsuji II",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/amagami-ss.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Amagami SS",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/ookami-san-to-shichinin-no-nakamatachi.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Ookami-san to Shichinin no Nakamatachi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2010/shiki.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Shiki",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/highschool-of-the-dead.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Highschool of the Dead",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2010/shukufuku-no-campanella.jpg",
        dateAdded: "2010",
        dateOfRelease: "Fecha de emisión",
        name: "Shukufuku no Campanella",
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