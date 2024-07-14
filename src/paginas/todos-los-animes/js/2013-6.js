// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2013/kamisama-no-inai-nichiyoubi.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kamisama no Inai Nichiyoubi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"106",
      },
      {
        imageSrc: "../../img/2013/inu-to-hasami-wa-tsukaiyou.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Inu to Hasami wa Tsukaiyou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"105",
      },
      {
        imageSrc: "../../img/2013/hyakka-ryouran-samurai-bride-specials.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hyakka Ryouran: Samurai Bride Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"104",
      },
      {
        imageSrc: "../../img/2013/busou-shinki-ova.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Busou Shinki OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"103",
      },
      {
        imageSrc: "../../img/2013/hentai-ouji-to-warawanai-neko-specials.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hentai Ouji to Warawanai Neko. Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"102",
      },
      {
        imageSrc: "../../img/2013/papa-no-iukoto-wo-kikinasai-ova.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Papa no Iukoto wo Kikinasai! OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"101",
      },
      {
        imageSrc: "../../img/2013/ghost-in-the-shell-arise-border1-ghost-pain.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Ghost in the Shell: Arise - Border:1 Ghost Pain",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"100",
      },
      {
        imageSrc: "../../img/2013/ro-kyu-bu-tomoka-no-ichigo-sundae.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Ro-Kyu-Bu!: Tomoka no Ichigo Sundae",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"99",
      },
      {
        imageSrc: "../../img/2013/rescue-me.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Rescue Me!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"98",
      },
      {
        imageSrc: "../../img/2013/chuunibyou-demo-koi-ga-shitai-kirameki-no-slapstick-noel.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Chuunibyou demo Koi ga Shitai!: Kirameki no... Slapstick Noel",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"97",
      },
      {
        imageSrc: "../../img/2013/magical-star-kanon-100.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kami nomi zo Shiru Sekai:Magical☆Star Kanon 100%",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"96",
      },
      {
        imageSrc: "../../img/2013/kingdom-2.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kingdom 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"95",
      },
      {
        imageSrc: "../../img/2013/hal.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hal",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"94",
      },
      {
        imageSrc: "../../img/2013/kotonoha-no-niwa.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kotonoha no Niwa",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"93",
      },
      {
        imageSrc: "../../img/2013/yuyushiki-specials.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yuyushiki: Nyanyashiki",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"92",
      },
      {
        imageSrc: "../../img/2013/yama-no-susume-kabette-kowakunai-no.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yama no Susume: Kabette Kowakunai no?",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"91",
      },
      {
        imageSrc: "../../img/2013/mangirl-asobu-henshuu-girl.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Mangirl!: Asobu Henshuu Girl",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"90",
      },
      {
        imageSrc: "../../img/2013/saintonii-san-movie.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Saint☆Onii-san (Movie)",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"89",
      },
      {
        imageSrc: "../../img/2013/miyakawa-ke-no-kuufuku.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Miyakawa-ke no Kuufuku",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"88",
      },
      {
        imageSrc: "../../img/2013/senyuu-yusha-nagurareru-nise-panda-no-seitai.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Senyuu Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"87",
      },
      {
        imageSrc: "../../img/2013/hetalia-the-beautiful-world-specials.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hetalia: The Beautiful World Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"86",
      },
      {
        imageSrc: "../../img/2013/steinsgate-fuka-ryouiki-no-dj-vu.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Steins;Gate: Fuka Ryouiki no Déjà vu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"85",
      },
      {
        imageSrc: "../../img/2013/hentai-ouji-to-warawanai-neko.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hentai Ouji to Warawanai Neko",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"84",
      },
      {
        imageSrc: "../../img/2013/aura-maryuuinkouga-saigo-no-tatakai.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Aura: Maryuuinkouga Saigo no Tatakai",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"83",
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