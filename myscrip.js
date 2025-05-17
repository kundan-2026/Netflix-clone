document.addEventListener('DOMContentLoaded', function() {
    // Sample movie data
    const movies = {
        popular: [
            { id: 1, title: "Stranger Things", genre: "Sci-Fi & Horror", year: 2016, image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" },
            { id: 2, title: "The Witcher", genre: "Fantasy", year: 2019, image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg" },
            { id: 3, title: "Money Heist", genre: "Crime Drama", year: 2017, image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" },
            { id: 4, title: "The Queen's Gambit", genre: "Drama", year: 2020, image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg" },
            { id: 5, title: "Bridgerton", genre: "Romance", year: 2020, image: "https://image.tmdb.org/t/p/w500/k8uH9szY3Dq1YvjJfMDhK7SxYwN.jpg" },
            { id: 6, title: "Dark", genre: "Sci-Fi & Thriller", year: 2017, image: "https://image.tmdb.org/t/p/w500/5Lo4H5GHkaf8q5WgTtz8vGZ5q6j.jpg" }
        ],
        trending: [
            { id: 7, title: "Squid Game", genre: "Thriller", year: 2021, image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
            { id: 8, title: "The Crown", genre: "Historical Drama", year: 2016, image: "https://image.tmdb.org/t/p/w500/jJvHjJ7EP9SNcZQNePe9QlLkXwX.jpg" },
            { id: 9, title: "Ozark", genre: "Crime Drama", year: 2017, image: "https://image.tmdb.org/t/p/w500/pCGyohvXm1U0hYySz5hQQiMkGjX.jpg" },
            { id: 10, title: "Peaky Blinders", genre: "Crime Drama", year: 2013, image: "https://image.tmdb.org/t/p/w500/6PX0r5TRRU5y0jZ70y1OtbLYmoD.jpg" },
            { id: 11, title: "The Mandalorian", genre: "Sci-Fi & Adventure", year: 2019, image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },
            { id: 12, title: "Lupin", genre: "Crime Drama", year: 2021, image: "https://image.tmdb.org/t/p/w500/6j7Qb6VHV5BiNdC3FQcXxXD6P6L.jpg" }
        ],
        dramas: [
            { id: 13, title: "Breaking Bad", genre: "Crime Drama", year: 2008, image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
            { id: 14, title: "Better Call Saul", genre: "Crime Drama", year: 2015, image: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg" },
            { id: 15, title: "The Last Dance", genre: "Documentary", year: 2020, image: "https://image.tmdb.org/t/p/w500/3L5nSCLmZQJm09QUe6QEWQ5QyV2.jpg" },
            { id: 16, title: "Narcos", genre: "Crime Drama", year: 2015, image: "https://image.tmdb.org/t/p/w500/7bmGz5hW0GqWn4MfZk9P5HZ6t9w.jpg" },
            { id: 17, title: "House of Cards", genre: "Political Drama", year: 2013, image: "https://image.tmdb.org/t/p/w500/hKWyW0bBxQAvYcnjZzQ3QmY0J9u.jpg" },
            { id: 18, title: "Mindhunter", genre: "Crime Drama", year: 2017, image: "https://image.tmdb.org/t/p/w500/6HMS6JvHxM6xyX9F8Y7F0Vj3q3y.jpg" }
        ],
        action: [
            { id: 19, title: "Extraction", genre: "Action", year: 2020, image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg" },
            { id: 20, title: "6 Underground", genre: "Action", year: 2019, image: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg" },
            { id: 21, title: "The Old Guard", genre: "Action & Fantasy", year: 2020, image: "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg" },
            { id: 22, title: "Project Power", genre: "Action & Sci-Fi", year: 2020, image: "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg" },
            { id: 23, title: "Army of the Dead", genre: "Action & Horror", year: 2021, image: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvgoJR.jpg" },
            { id: 24, title: "Red Notice", genre: "Action & Comedy", year: 2021, image: "https://image.tmdb.org/t/p/w500/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg" }
        ],
        comedy: [
            { id: 25, title: "The Office", genre: "Comedy", year: 2005, image: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg" },
            { id: 26, title: "Friends", genre: "Comedy", year: 1994, image: "https://image.tmdb.org/t/p/w500/7buCWBTpiPrCF5Lt023dSC60rg.jpg" },
            { id: 27, title: "Brooklyn Nine-Nine", genre: "Comedy", year: 2013, image: "https://image.tmdb.org/t/p/w500/hgRMSOt7a1b8qyQR68vUixJPang.jpg" },
            { id: 28, title: "The Good Place", genre: "Comedy", year: 2016, image: "https://image.tmdb.org/t/p/w500/eFV1OS5fw1T4J9nKdw2ytE9UQ3P.jpg" },
            { id: 29, title: "Parks and Recreation", genre: "Comedy", year: 2009, image: "https://image.tmdb.org/t/p/w500/dFs6yHxheEGoZSoZ1Swv0xQk4Qm.jpg" },
            { id: 30, title: "The Big Bang Theory", genre: "Comedy", year: 2007, image: "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg" }
        ]
    };

    // All movies array for search functionality
    const allMovies = [...movies.popular, ...movies.trending, ...movies.dramas, ...movies.action, ...movies.comedy];

    // Populate movie sections
    function populateMovieSection(sectionId, movieArray) {
        const section = document.getElementById(sectionId);
        section.innerHTML = '';
        
        movieArray.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.genre} • ${movie.year}</p>
                </div>
            `;
            section.appendChild(movieItem);
        });
    }

    // Initialize movie sections
    populateMovieSection('popular', movies.popular);
    populateMovieSection('trending', movies.trending);
    populateMovieSection('dramas', movies.dramas);
    populateMovieSection('action', movies.action);
    populateMovieSection('comedy', movies.comedy);

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');

    function performSearch(query) {
        if (query.trim() === '') {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase()) || 
            movie.genre.toLowerCase().includes(query.toLowerCase())
        );
        
        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        } else {
            results.forEach(movie => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px; display: inline-block; vertical-align: middle;">
                    <div style="display: inline-block; vertical-align: middle;">
                        <h4 style="margin: 0; font-size: 14px;">${movie.title}</h4>
                        <p style="margin: 0; font-size: 12px; color: #b3b3b3;">${movie.genre} • ${movie.year}</p>
                    </div>
                `;
                searchResults.appendChild(resultItem);
            });
        }
        
        searchResults.style.display = 'block';
    }

    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    searchInput.addEventListener('input', () => {
        performSearch(searchInput.value);
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim() !== '') {
            searchResults.style.display = 'block';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchBtn.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    // Movie hover effect
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('movie-item') || e.target.closest('.movie-item')) {
            const movieItem = e.target.classList.contains('movie-item') ? e.target : e.target.closest('.movie-item');
            const movieRow = movieItem.parentElement;
            
            // Get all siblings
            const siblings = Array.from(movieRow.children).filter(child => child !== movieItem);
            
            // Move siblings away from the hovered item
            const index = Array.from(movieRow.children).indexOf(movieItem);
            
            siblings.forEach((sibling, i) => {
                if (i < index) {
                    sibling.style.transform = 'translateX(-10%)';
                } else if (i > index) {
                    sibling.style.transform = 'translateX(10%)';
                }
            });
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('movie-item') || e.target.closest('.movie-item')) {
            const movieItem = e.target.classList.contains('movie-item') ? e.target : e.target.closest('.movie-item');
            const movieRow = movieItem.parentElement;
            
            // Reset all siblings
            Array.from(movieRow.children).forEach(sibling => {
                sibling.style.transform = '';
            });
        }
    });
});
