// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2008/tales-of-the-abyss.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Tales of the Abyss",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/yozakura-quartet.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Yozakura Quartet",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/akane-iro-ni-somaru-saka.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Akane-iro ni Somaru Saka",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2008/kuroshitsuji.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Kuroshitsuji",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/rosario-to-vampire-capu-2.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Rosario + Vampire Capu2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2008/clannad-after-story.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Clannad: After Story",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2008/toradora.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Toradora!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2008/lucky-star-ova.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Lucky ☆ Star OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/mahou-sensei-negima-shiroki-tsubasa-ala-alba.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Sensei Negima! Shiroki Tsubasa Ala Alba",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/detroit-metal-city.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Detroit Metal City",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/naruto-shippuuden-movie-2-kizuna.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto: Shippuuden Movie 2 - Kizuna",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2008/clannad-another-world-tomoyo-chapter.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Clannad: Another World, Tomoyo Chapter",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2008/blade-of-the-immortal.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Blade of the Immortal",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/natsume-yuujinchou.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Natsume Yuujinchou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/zero-no-tsukaima-princesses-no-rondo.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Zero no Tsukaima: Princesses no Rondo",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2008/tetsuwan-birdy-decode.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Tetsuwan Birdy Decode",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2008/nogizaka-haruka-no-himitsu.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Nogizaka Haruka no Himitsu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/strike-witches.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Strike Witches",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/sekirei.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Sekirei",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/ikkitousen-great-guardians.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Ikkitousen: Great Guardians",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/prince-of-tennis-the-national-tournament-finals.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Prince of Tennis: The National Tournament Finals",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/penguin-musume-heart.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Penguin Musume Heart",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/junjou-romantica.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Junjou Romantica",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2008/vampire-knight.jpg",
        dateAdded: "2008",
        dateOfRelease: "Fecha de emisión",
        name: "Vampire Knight",
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