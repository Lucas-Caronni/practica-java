document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.querySelector('.characterList');

    // solicitud fetch para obtener los datos de los personajes
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            // Analizar los datos obtenidos
            console.log(data);

            // variable characters para almacenar el HTML de los personajes
            let characters = '';

            // Recorrer el array de personajes
            data.results.forEach(character => {
                characters += `
                    <article>
                        <img src="${character.image}" alt="${character.name}">
                        <p>Name: ${character.name}</p>
                        <p>Status: ${character.status}</p>
                    </article>
                `;
            });

            characterList.innerHTML = characters;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});