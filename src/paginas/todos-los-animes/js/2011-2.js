// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2011/dragon-ball-kai-special.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Dragon Ball Kai Special",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/naruto-shippuuden-movie-5-blood-prison.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto: Shippuuden Movie 5 - Blood Prison",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2011/naruto-honoo-no-chuunin-shiken-naruto-vs.-konohamaru.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/higurashi-no-naku-koro-ni-kira.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Higurashi no Naku Koro ni Kira",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/dantalian-no-shoka.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Dantalian no Shoka",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2011/manyuu-hikenchou.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Manyuu Hikenchou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/baka-to-test-to-shoukanjuu-ni.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Baka to Test to Shoukanjuu Ni!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/usagi-drop.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Usagi Drop",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/mayo-chiki.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Mayo Chiki!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2011/no-6.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "No.6",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/the-idolmaster.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "The iDOLM@STER",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2011/yuru-yuri.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Yuru Yuri",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/kaitou-tenshi-twin-angel-kyun-kyuntokimeki-paradise.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Kaitou Tenshi Twin Angel: Kyun Kyun☆Tokimeki Paradise!!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/uta-noprince-sama-maji-love-1000.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Uta no Prince-sama Maji Love 1000",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/nurarihyon-no-mago-sennen-makyou.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Nurarihyon no Mago: Sennen Makyou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/last-exile-ginyoku-no-fam.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Last Exile: Ginyoku no Fam",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/kamisama-no-memochou.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Kamisama no Memochou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2011/fullmetal-alchemist-the-sacred-star-of-milos.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Fullmetal Alchemist: The Sacred Star of Milos",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/blood-c.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Blood-C",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/ro-kyu-bu.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Ro-Kyu-Bu!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/kamisama-dolls.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Kamisama Dolls",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/kore-wa-zombie-desu-ka-ova.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Kore wa Zombie Desu ka? OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2011/inazuma-eleven-go.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Inazuma Eleven Go",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/amagami-ss-imouto.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Amagami SS: Imouto",
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