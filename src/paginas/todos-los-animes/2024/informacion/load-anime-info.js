function loadAnimeInfo(animeId) {
    const anime = animeData.find(a => a.id === animeId);

    if (anime) {
        const container = document.getElementById('anime-card-container');
        container.innerHTML = `
            <div class="card">
                <img class="anime-image" src="${anime.imageSrc}" alt="${anime.title}">
                <div class="anime-info">
                    <h1 class="anime-title">${anime.title}</h1>
                    <p class="year">Año: ${anime.year}</p>
                    <p class="status">Estado: ${anime.status}</p>
                    <p class="genre">Géneros: ${Array.isArray(anime.genreUrl) ? anime.genreUrl.map(genre => `<a href="${anime.genreUrl[genre]}" class="genre-link">${genre}</a>`).join(', ') : `<a href="${anime.genreUrl}" class="genre-link">${anime.genre}</a>`}</p>
                    <p class="synopsis">Sinopsis: ${anime.synopsis}</p>
                </div>
            </div>
        `;

        // Actualizar la información del próximo episodio
        document.getElementById('proximo-episodio').textContent = `Próximo episodio: ${anime.proximoEpisodio || 'N/A'}`;
    } else {
        console.error('Anime no encontrado');
    }
}

// Cargar la información del anime cuando la página se cargue
window.addEventListener('DOMContentLoaded', () => loadAnimeInfo("delicos-nursery"));

