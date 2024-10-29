interface Movie {
    id: number;
    title: string;
    description: string;
    image: string;
    showtimes: string[];
}

async function loadMovies(): Promise<Movie[]> {
    const response = await fetch('movies.json');
    const data: Movie[] = await response.json();
    return data;
}

function displayMovies(movies: Movie[]): void {
    const moviesContainer = document.getElementById('movies');
    if (moviesContainer) {
        movies.forEach(movie => {
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.description}</p>
                            <h6>Giờ Chiếu:</h6>
                            <ul class="list-group list-group-flush">
                                ${movie.showtimes.map(time => `<li class="list-group-item">${time}</li>`).join('')}
                            </ul>
                            <button class="btn btn-primary mt-3" onclick="bookTicket(${movie.id})">Đặt Vé</button>
                        </div>
                    </div>
                </div>
            `;
            moviesContainer.innerHTML += card;
        });
    }
}

function bookTicket(movieId: number) {
    alert(`Bạn đã đặt vé cho phim ID: ${movieId}`);
}

async function init() {
    const movies = await loadMovies();
    displayMovies(movies);
}

init();
