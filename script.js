// Dane o piętrach i salach
const floorData = {
    basement: {
        name: 'Piwnice',
        image: 'basement.svg',
        rooms: [
            { id: 'B01', name: 'Sala Lekcyjna', x: 150, y: 200, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: 'B02', name: 'Sala Komputerowa', x: 250, y: 200, width: 80, height: 60, type: 'Pracownia komputerowa' },
            { id: 'B03', name: 'Archiwum', x: 350, y: 200, width: 80, height: 60, type: 'Pomieszczenie techniczne' },
            { id: 'B04', name: 'Serwerownia', x: 450, y: 200, width: 80, height: 60, type: 'Pomieszczenie techniczne' },
            { id: 'B05', name: 'Magazyn', x: 150, y: 300, width: 80, height: 60, type: 'Magazyn' },
            { id: 'B06', name: 'WC', x: 250, y: 300, width: 40, height: 40, type: 'Toaleta' }
        ]
    },
    ground: {
        name: 'Parter',
        image: 'ground.svg',
        rooms: [
            { id: '101', name: 'Sala Lekcyjna 101', x: 150, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '102', name: 'Sala Lekcyjna 102', x: 250, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '103', name: 'Sala Lekcyjna 103', x: 350, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '104', name: 'Sala Lekcyjna 104', x: 450, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '105', name: 'Sala Lekcyjna 105', x: 550, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '106', name: 'Sala Lekcyjna 106', x: 150, y: 250, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '107', name: 'Sala Lekcyjna 107', x: 250, y: 250, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '108', name: 'Sala Lekcyjna 108', x: 350, y: 250, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '109', name: 'Sekretariat', x: 450, y: 250, width: 80, height: 60, type: 'Administracja' },
            { id: '110', name: 'Gabinet Dyrektora', x: 550, y: 250, width: 80, height: 60, type: 'Administracja' },
            { id: '111', name: 'WC Damskie', x: 200, y: 350, width: 40, height: 40, type: 'Toaleta' },
            { id: '112', name: 'WC Męskie', x: 300, y: 350, width: 40, height: 40, type: 'Toaleta' }
        ]
    },
    first: {
        name: 'I Piętro',
        image: 'first.svg',
        rooms: [
            { id: '201', name: 'Sala Lekcyjna 201', x: 150, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '202', name: 'Sala Lekcyjna 202', x: 250, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '203', name: 'Sala Lekcyjna 203', x: 350, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '204', name: 'Sala Lekcyjna 204', x: 450, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '205', name: 'Sala Lekcyjna 205', x: 550, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '206', name: 'Aneks Sportowy', x: 150, y: 250, width: 120, height: 80, type: 'Sala sportowa' },
            { id: '207', name: 'Aneks Sportowy', x: 300, y: 250, width: 120, height: 80, type: 'Sala sportowa' },
            { id: '208', name: 'Aneks Sportowy', x: 450, y: 250, width: 120, height: 80, type: 'Sala sportowa' },
            { id: '209', name: 'Aneks Sportowy', x: 600, y: 250, width: 120, height: 80, type: 'Sala sportowa' },
            { id: '210', name: 'WC Damskie', x: 200, y: 350, width: 40, height: 40, type: 'Toaleta' },
            { id: '211', name: 'WC Męskie', x: 300, y: 350, width: 40, height: 40, type: 'Toaleta' }
        ]
    },
    second: {
        name: 'II Piętro',
        image: 'second.svg',
        rooms: [
            { id: '301', name: 'Sala Lekcyjna 301', x: 150, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '302', name: 'Sala Lekcyjna 302', x: 250, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '303', name: 'Sala Lekcyjna 303', x: 350, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '304', name: 'Sala Lekcyjna 304', x: 450, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '305', name: 'Sala Lekcyjna 305', x: 550, y: 150, width: 80, height: 60, type: 'Sala lekcyjna' },
            { id: '306', name: 'Sala Komputerowa 306', x: 150, y: 250, width: 80, height: 60, type: 'Pracownia komputerowa' },
            { id: '307', name: 'Sala Komputerowa 307', x: 250, y: 250, width: 80, height: 60, type: 'Pracownia komputerowa' },
            { id: '308', name: 'Sala Komputerowa 308', x: 350, y: 250, width: 80, height: 60, type: 'Pracownia komputerowa' },
            { id: '309', name: 'Sala Komputerowa 309', x: 450, y: 250, width: 80, height: 60, type: 'Pracownia komputerowa' },
            { id: '310', name: 'Sala Komputerowa 310', x: 550, y: 250, width: 80, height: 60, type: 'Pracownia komputerowa' },
            { id: '311', name: 'WC', x: 250, y: 350, width: 40, height: 40, type: 'Toaleta' }
        ]
    }
};

// Dane o korytarzach i połączeniach między salami
const corridors = {
    basement: [
        { x1: 150, y1: 230, x2: 550, y2: 230, width: 20 },
        { x1: 270, y1: 230, x2: 270, y2: 320, width: 20 }
    ],
    ground: [
        { x1: 150, y1: 180, x2: 630, y2: 180, width: 20 },
        { x1: 150, y1: 280, x2: 630, y2: 280, width: 20 },
        { x1: 220, y1: 280, x2: 220, y2: 370, width: 20 },
        { x1: 320, y1: 280, x2: 320, y2: 370, width: 20 }
    ],
    first: [
        { x1: 150, y1: 180, x2: 630, y2: 180, width: 20 },
        { x1: 210, y1: 180, x2: 210, y2: 290, width: 20 },
        { x1: 360, y1: 180, x2: 360, y2: 290, width: 20 },
        { x1: 510, y1: 180, x2: 510, y2: 290, width: 20 },
        { x1: 220, y1: 330, x2: 220, y2: 370, width: 20 },
        { x1: 320, y1: 330, x2: 320, y2: 370, width: 20 }
    ],
    second: [
        { x1: 150, y1: 180, x2: 630, y2: 180, width: 20 },
        { x1: 150, y1: 280, x2: 630, y2: 280, width: 20 },
        { x1: 270, y1: 280, x2: 270, y2: 370, width: 20 }
    ]
};

// Dane o schodach (połączenia między piętrami)
const stairs = [
    { floor1: 'basement', x1: 500, y1: 230, floor2: 'ground', x2: 500, y2: 280 },
    { floor1: 'ground', x1: 500, y1: 280, floor2: 'first', x2: 500, y2: 290 },
    { floor1: 'first', x1: 500, y1: 290, floor2: 'second', x2: 500, y2: 280 }
];

// Inicjalizacja aplikacji po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    // Ładowanie SVG map dla każdego piętra
    loadFloorMaps();
    
    // Obsługa przycisków pięter
    setupFloorButtons();
    
    // Obsługa wyszukiwania sal
    setupSearch();
    
    // Obsługa nawigacji między salami
    setupNavigation();
    
    // Obsługa zamykania popupu
    document.querySelector('.close-popup').addEventListener('click', () => {
        document.getElementById('room-popup').style.display = 'none';
    });
    
    // Generowanie listy sal i ustawienie filtrów
    generateRoomsList();
    setupRoomsListFilters();
    
    // Domyślnie pokazujemy parter
    showFloor('ground');
    
    // Generowanie legendy
    generateLegend();
    
    // Ustaw domyślnie widoczny parter
    document.querySelectorAll('.floor-map').forEach(map => {
        map.style.display = 'none';
    });
    document.getElementById('ground-map').style.display = 'block';

    // Ustaw aktywny przycisk dla parteru
    document.querySelectorAll('.floor-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector('.floor-button[data-floor="ground"]').classList.add('active');
});

// Funkcja ładująca mapy pięter z plików SVG
function loadFloorMaps() {
    const floors = ['basement', 'ground', 'first', 'second'];
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.textContent = 'Ładowanie map...';
    document.querySelector('.main-content').appendChild(loadingIndicator);
    
    // Definicja nazw pięter dla komunikatów
    const floorNames = {
        'basement': 'Piwnice',
        'ground': 'Parter',
        'first': 'I Piętro',
        'second': 'II Piętro'
    };
    
    // Użycie Promise.all do równoległego ładowania wszystkich map
    const mapPromises = floors.map(floor => {
        const mapContainer = document.getElementById(`${floor}-map`);
        // Użyj pełnej ścieżki do pliku SVG
        const svgPath = `${window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1)}${floor}.svg`;
        
        console.log(`Próba załadowania mapy: ${svgPath}`);
        
        return fetch(svgPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log(`Mapa ${floor} pobrana pomyślnie`);
                return response.text();
            })
            .then(svgContent => {
                console.log(`Zawartość SVG dla ${floor} otrzymana, długość: ${svgContent.length} znaków`);
                mapContainer.innerHTML = svgContent;
                
                // Dostosowanie SVG do kontenera
                const svgElement = mapContainer.querySelector('svg');
                if (svgElement) {
                    svgElement.setAttribute('width', '100%');
                    svgElement.setAttribute('height', '100%');
                    svgElement.style.maxHeight = '100%';
                    svgElement.style.maxWidth = '100%';
                    svgElement.style.display = 'block';
                    console.log(`SVG dla ${floor} dostosowane do kontenera`);
                } else {
                    console.error(`Nie znaleziono elementu SVG w zawartości dla ${floor}`);
                }
                
                // Dodanie obsługi kliknięć dla sal i pinesek
                setupRoomInteractions(floor);
                return floor; // Zwracamy ID piętra dla potwierdzenia załadowania
            })
            .catch(error => {
                console.error(`Błąd ładowania mapy ${floor}:`, error);
                mapContainer.innerHTML = `<div class="error-message">Nie udało się załadować mapy ${floorNames[floor]}</div>`;
                return null; // Zwracamy null w przypadku błędu
            });
    });
    
    // Obsługa po załadowaniu wszystkich map
    Promise.all(mapPromises)
        .then(results => {
            // Usunięcie wskaźnika ładowania
            loadingIndicator.remove();
            
            // Sprawdzenie, czy wszystkie mapy zostały załadowane
            const failedMaps = results.filter(result => result === null);
            if (failedMaps.length > 0) {
                console.warn('Nie wszystkie mapy zostały załadowane poprawnie.');
            } else {
                console.log('Wszystkie mapy zostały załadowane poprawnie.');
            }
        });
}

// Funkcja ustawiająca interakcje dla sal i pinesek
function setupRoomInteractions(floorId) {
    const mapContainer = document.getElementById(`${floorId}-map`);
    
    // Obsługa kliknięć na sale
    const rooms = mapContainer.querySelectorAll('.room');
    rooms.forEach(room => {
        room.addEventListener('click', () => {
            const roomId = room.getAttribute('data-id');
            const roomName = room.getAttribute('data-name');
            const roomType = room.getAttribute('data-type') || 'Sala lekcyjna';
            
            if (roomId) {
                showRoomInfo(roomId, floorId);
                
                // Podświetlenie wybranej sali
                highlightRoom(roomId);
            }
        });
    });
    
    // Obsługa kliknięć na pineski
    const pins = mapContainer.querySelectorAll('circle.pin, circle[r="6"]');
    pins.forEach(pin => {
        pin.addEventListener('click', () => {
            const roomId = pin.getAttribute('data-id') || pin.nextElementSibling?.textContent.trim();
            const roomName = pin.getAttribute('data-name') || pin.nextElementSibling?.textContent.trim();
            const roomType = pin.getAttribute('data-type') || 'Sala lekcyjna';
            
            if (roomId) {
                showRoomInfo(roomId, floorId);
                
                // Podświetlenie wybranej sali
                highlightRoom(roomId, floorId);
            }
        });
    });
}



// Funkcja ustawiająca obsługę przycisków pięter
function setupFloorButtons() {
    const buttons = document.querySelectorAll('.floor-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const floorId = button.getAttribute('data-floor');
            showFloor(floorId);
            
            // Usunięcie poprzednich ścieżek nawigacyjnych
            clearNavigationPaths();
        });
    });
}

// Funkcja pokazująca wybrane piętro
function showFloor(floorId) {
    // Ukrycie wszystkich map pięter
    const maps = document.querySelectorAll('.floor-map');
    maps.forEach(map => map.classList.remove('active'));
    
    // Pokazanie wybranej mapy piętra
    document.getElementById(`${floorId}-map`).classList.add('active');
    
    // Aktualizacja aktywnego przycisku
    const buttons = document.querySelectorAll('.floor-button');
    buttons.forEach(button => {
        if (button.getAttribute('data-floor') === floorId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Funkcja pokazująca informacje o sali
function showRoomInfo(roomId, floorId) {
    const popup = document.getElementById('room-popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');
    const floor = document.getElementById('popup-floor');
    const type = document.getElementById('popup-type');
    
    if (!popup || !title || !description || !floor || !type) {
        console.error('Nie znaleziono elementów popupu z informacjami o sali');
        return;
    }
    
    // Znajdź dane sali
    const room = floorData[floorId].rooms.find(r => r.id === roomId);
    if (!room) {
        console.error('Nie znaleziono sali o ID:', roomId);
        return;
    }
    
    title.textContent = `${room.id} - ${room.name || 'Sala'}`;
     
     const floorName = {
         'basement': 'Piwnice',
         'ground': 'Parter',
         'first': 'I Piętro',
         'second': 'II Piętro'
     }[floorId];
     
     description.textContent = `Sala ${room.id} znajduje się na piętrze ${floorName}.`;
    floor.textContent = `Piętro: ${floorName}`;
    type.textContent = `Typ: ${room.type || 'Nieznany'}`;
    
    // Pokazanie popupu z animacją
    popup.style.opacity = '0';
    popup.style.display = 'block';
    
    // Animacja pokazywania popupu
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 10);
    
    // Zamknięcie popupu po naciśnięciu Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popup.style.display === 'block') {
            document.querySelector('.close-popup').click();
        }
    });
}

// Funkcja ustawiająca obsługę wyszukiwania sal
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toUpperCase();
        if (query === '') return;
        
        // Szukanie sali po ID lub nazwie
        for (const floorId in floorData) {
            const floor = floorData[floorId];
            const room = floor.rooms.find(r => 
                r.id.toUpperCase() === query || 
                r.name.toUpperCase().includes(query)
            );
            
            if (room) {
                // Pokazanie odpowiedniego piętra
                showFloor(floorId);
                
                // Podświetlenie znalezionej sali
                highlightRoom(room.id, floorId);
                
                // Pokazanie informacji o sali
                showRoomInfo(room, floorId);
                
                return;
            }
        }
        
        alert('Nie znaleziono sali o podanym identyfikatorze lub nazwie.');
    });
    
    // Obsługa wciśnięcia Enter w polu wyszukiwania
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    // Obsługa wyszukiwania na żywo (podczas wpisywania)
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toUpperCase();
        if (searchTerm.length >= 2) {
            // Wyszukiwanie pasujących sal
            const matchingRooms = [];
            
            for (const floorId in floorData) {
                const floor = floorData[floorId];
                const rooms = floor.rooms.filter(r => 
                    r.id.toUpperCase().includes(searchTerm) || 
                    r.name.toUpperCase().includes(searchTerm)
                );
                
                rooms.forEach(room => {
                    matchingRooms.push({
                        ...room,
                        floorId: floorId,
                        floorName: floorData[floorId].name
                    });
                });
            }
            
            // Wyświetlenie wyników
            displaySearchResults(matchingRooms, searchResults);
        } else {
            // Czyszczenie wyników, gdy pole wyszukiwania jest puste
            searchResults.innerHTML = '';
        }
    });
}

// Funkcja wyświetlająca wyniki wyszukiwania
function displaySearchResults(rooms, resultsContainer) {
    resultsContainer.innerHTML = '';
    
    if (rooms.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">Brak wyników</p>';
        return;
    }
    
    const resultsList = document.createElement('ul');
    resultsList.className = 'search-results-list';
    
    rooms.forEach(room => {
        const listItem = document.createElement('li');
        listItem.className = 'search-result-item';
        
        listItem.innerHTML = `
            <span class="room-id">${room.id}</span>
            <span class="room-name">${room.name || ''}</span>
            <span class="room-floor">${room.floorName}</span>
        `;
        
        listItem.addEventListener('click', () => {
            // Pokazanie odpowiedniego piętra
            showFloor(room.floorId);
            
            // Podświetlenie znalezionej sali
            highlightRoom(room.id, room.floorId);
            
            // Pokazanie informacji o sali
            showRoomInfo(room.id, room.floorId);
            
            // Czyszczenie wyników wyszukiwania
            resultsContainer.innerHTML = '';
        });
        
        resultsList.appendChild(listItem);
    });
    
    resultsContainer.appendChild(resultsList);
}

// Funkcja podświetlająca salę
function highlightRoom(roomId, floorId) {
    // Usunięcie poprzedniego podświetlenia
    const allRooms = document.querySelectorAll('.room');
    allRooms.forEach(room => {
        room.classList.remove('room-highlighted');
    });
    
    // Jeśli nie podano floorId, szukaj sali na aktualnie widocznym piętrze
    if (!floorId) {
        const activeFloorMap = document.querySelector('.floor-map.active');
        if (activeFloorMap) {
            floorId = activeFloorMap.id.replace('-map', '');
        } else {
            console.error('Nie można znaleźć aktywnego piętra');
            return;
        }
    }
    
    // Podświetlenie wybranej sali
    const svg = document.querySelector(`#${floorId}-map svg`);
    if (svg) {
        // Szukanie sali po atrybucie data-id
        const room = svg.querySelector(`rect[data-id="${roomId}"]`);
        if (room) {
            room.classList.add('room-highlighted');
            
            // Przewinięcie do podświetlonej sali
            room.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // Fallback - szukanie po tekście, jeśli nie znaleziono po data-id
            const rooms = svg.querySelectorAll('rect');
            rooms.forEach(room => {
                const roomText = room.nextElementSibling?.textContent.trim();
                if (roomText === roomId) {
                    room.classList.add('room-highlighted');
                    
                    // Przewinięcie do podświetlonej sali
                    room.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    }
}

// Funkcja ustawiająca obsługę nawigacji między salami
function setupNavigation() {
    const startRoomInput = document.getElementById('start-room');
    const endRoomInput = document.getElementById('end-room');
    const findRouteButton = document.getElementById('find-route');
    
    findRouteButton.addEventListener('click', () => {
        const startRoomId = startRoomInput.value.trim().toUpperCase();
        const endRoomId = endRoomInput.value.trim().toUpperCase();
        
        if (startRoomId === '' || endRoomId === '') {
            alert('Wprowadź identyfikatory sal początkowej i docelowej.');
            return;
        }
        
        // Znalezienie sal
        let startRoom, startFloorId;
        let endRoom, endFloorId;
        
        for (const floorId in floorData) {
            const floor = floorData[floorId];
            
            const start = floor.rooms.find(r => r.id.toUpperCase() === startRoomId);
            if (start) {
                startRoom = start;
                startFloorId = floorId;
            }
            
            const end = floor.rooms.find(r => r.id.toUpperCase() === endRoomId);
            if (end) {
                endRoom = end;
                endFloorId = floorId;
            }
        }
        
        if (!startRoom) {
            alert(`Nie znaleziono sali początkowej o identyfikatorze ${startRoomId}.`);
            return;
        }
        
        if (!endRoom) {
            alert(`Nie znaleziono sali docelowej o identyfikatorze ${endRoomId}.`);
            return;
        }
        
        // Jeśli sale są na tym samym piętrze
        if (startFloorId === endFloorId) {
            showFloor(startFloorId);
            findPathOnSameFloor(startRoom, endRoom, startFloorId);
        } else {
            // Jeśli sale są na różnych piętrach
            alert(`Sale ${startRoomId} i ${endRoomId} znajdują się na różnych piętrach. ` +
                  `Najpierw udaj się do sali ${startRoomId} na piętrze ${floorData[startFloorId].name}, ` +
                  `następnie skorzystaj ze schodów, aby przejść na piętro ${floorData[endFloorId].name} ` +
                  `i znajdź salę ${endRoomId}.`);
            
            // Pokazanie pierwszego piętra
            showFloor(startFloorId);
            
            // Podświetlenie sali początkowej i schodów
            highlightRoom(startRoomId, startFloorId);
        }
    });
}

// Funkcja znajdująca ścieżkę między salami na tym samym piętrze
function findPathOnSameFloor(startRoom, endRoom, floorId) {
    // Usunięcie poprzednich ścieżek
    clearNavigationPaths();
    
    // Podświetlenie sal początkowej i docelowej
    highlightRoom(startRoom.id, floorId);
    
    // Pobieranie SVG dla danego piętra
    const svg = document.querySelector(`#${floorId}-map svg`);
    if (!svg) {
        console.error('Nie znaleziono elementu SVG dla piętra', floorId);
        return;
    }
    
    // Znajdowanie współrzędnych sal
    let startRect, endRect;
    
    // Szukanie elementów sal w SVG po atrybutach data-id
    startRect = svg.querySelector(`rect[data-id="${startRoom.id}"]`);
    endRect = svg.querySelector(`rect[data-id="${endRoom.id}"]`);
    
    // Fallback - szukanie po tekście, jeśli nie znaleziono po data-id
    if (!startRect || !endRect) {
        const rooms = svg.querySelectorAll('rect');
        rooms.forEach(room => {
            const roomText = room.nextElementSibling?.textContent.trim();
            if (roomText === startRoom.id) {
                startRect = room;
            } else if (roomText === endRoom.id) {
                endRect = room;
            }
        });
    }
    
    if (!startRect || !endRect) {
        console.error('Nie znaleziono elementów sal w SVG');
        return;
    }
    
    // Obliczanie współrzędnych środków sal
    const startX = parseFloat(startRect.getAttribute('x')) + parseFloat(startRect.getAttribute('width')) / 2;
    const startY = parseFloat(startRect.getAttribute('y')) + parseFloat(startRect.getAttribute('height')) / 2;
    const endX = parseFloat(endRect.getAttribute('x')) + parseFloat(endRect.getAttribute('width')) / 2;
    const endY = parseFloat(endRect.getAttribute('y')) + parseFloat(endRect.getAttribute('height')) / 2;
    
    // Tworzenie ścieżki nawigacyjnej przez korytarze
    createNavigationPath(svg, startX, startY, endX, endY, floorId);
    
    // Pokazanie informacji o trasie
    alert(`Trasa z sali ${startRoom.id} do sali ${endRoom.id} została wyznaczona.`);
}

// Funkcja tworząca ścieżkę nawigacyjną przez korytarze
function createNavigationPath(svg, startX, startY, endX, endY, floorId) {
    // Znajdowanie najbliższych punktów korytarzy dla sal początkowej i docelowej
    const corridorPoints = findCorridorPoints(floorId);
    
    // Znajdowanie najbliższych punktów korytarza dla sal początkowej i docelowej
    const startCorridorPoint = findNearestCorridorPoint(startX, startY, corridorPoints);
    const endCorridorPoint = findNearestCorridorPoint(endX, endY, corridorPoints);
    
    // Tworzenie ścieżki od sali początkowej do korytarza
    createPathSegment(svg, startX, startY, startCorridorPoint.x, startCorridorPoint.y);
    
    // Tworzenie ścieżki od korytarza do sali docelowej
    createPathSegment(svg, endCorridorPoint.x, endCorridorPoint.y, endX, endY);
    
    // Tworzenie ścieżki wzdłuż korytarza
    if (startCorridorPoint.corridor === endCorridorPoint.corridor) {
        // Jeśli obie sale są przy tym samym korytarzu
        createPathSegment(svg, startCorridorPoint.x, startCorridorPoint.y, endCorridorPoint.x, endCorridorPoint.y);
    } else {
        // Jeśli sale są przy różnych korytarzach, znajdź punkt przecięcia korytarzy
        const intersectionPoint = findCorridorIntersection(startCorridorPoint.corridor, endCorridorPoint.corridor, corridorPoints);
        
        if (intersectionPoint) {
            createPathSegment(svg, startCorridorPoint.x, startCorridorPoint.y, intersectionPoint.x, intersectionPoint.y);
            createPathSegment(svg, intersectionPoint.x, intersectionPoint.y, endCorridorPoint.x, endCorridorPoint.y);
        } else {
            // Jeśli nie znaleziono przecięcia, połącz bezpośrednio
            createPathSegment(svg, startCorridorPoint.x, startCorridorPoint.y, endCorridorPoint.x, endCorridorPoint.y);
        }
    }
}

// Funkcja znajdująca punkty korytarzy na danym piętrze
function findCorridorPoints(floorId) {
    const corridorPoints = [];
    
    // Pobieranie korytarzy dla danego piętra
    const floorCorridors = corridors[floorId];
    
    floorCorridors.forEach((corridor, index) => {
        if (corridor.x1 === corridor.x2) {
            // Korytarz pionowy
            const x = corridor.x1;
            const minY = Math.min(corridor.y1, corridor.y2);
            const maxY = Math.max(corridor.y1, corridor.y2);
            
            // Dodanie punktów wzdłuż korytarza
            for (let y = minY; y <= maxY; y += 20) {
                corridorPoints.push({
                    x: x,
                    y: y,
                    corridor: `v${index}`
                });
            }
        } else {
            // Korytarz poziomy
            const y = corridor.y1;
            const minX = Math.min(corridor.x1, corridor.x2);
            const maxX = Math.max(corridor.x1, corridor.x2);
            
            // Dodanie punktów wzdłuż korytarza
            for (let x = minX; x <= maxX; x += 20) {
                corridorPoints.push({
                    x: x,
                    y: y,
                    corridor: `h${index}`
                });
            }
        }
    });
    
    return corridorPoints;
}

// Funkcja znajdująca najbliższy punkt korytarza
function findNearestCorridorPoint(x, y, corridorPoints) {
    let nearestPoint = null;
    let minDistance = Infinity;
    
    corridorPoints.forEach(point => {
        const distance = Math.sqrt(Math.pow(x - point.x, 2) + Math.pow(y - point.y, 2));
        
        if (distance < minDistance) {
            minDistance = distance;
            nearestPoint = point;
        }
    });
    
    return nearestPoint;
}

// Funkcja znajdująca przecięcie korytarzy
function findCorridorIntersection(corridor1, corridor2, corridorPoints) {
    // Sprawdzenie, czy korytarze są tego samego typu (oba pionowe lub oba poziome)
    const type1 = corridor1.charAt(0);
    const type2 = corridor2.charAt(0);
    
    if (type1 === type2) {
        // Jeśli oba korytarze są tego samego typu, nie ma bezpośredniego przecięcia
        return null;
    }
    
    // Znajdowanie punktów przecięcia
    for (let i = 0; i < corridorPoints.length; i++) {
        for (let j = 0; j < corridorPoints.length; j++) {
            if (corridorPoints[i].corridor === corridor1 && corridorPoints[j].corridor === corridor2) {
                // Sprawdzenie, czy punkty są blisko siebie (potencjalne przecięcie)
                if (Math.abs(corridorPoints[i].x - corridorPoints[j].x) < 20 && 
                    Math.abs(corridorPoints[i].y - corridorPoints[j].y) < 20) {
                    return {
                        x: (corridorPoints[i].x + corridorPoints[j].x) / 2,
                        y: (corridorPoints[i].y + corridorPoints[j].y) / 2
                    };
                }
            }
        }
    }
    
    return null;
}

// Funkcja tworząca segment ścieżki
function createPathSegment(svg, x1, y1, x2, y2) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    path.setAttribute('x1', x1);
    path.setAttribute('y1', y1);
    path.setAttribute('x2', x2);
    path.setAttribute('y2', y2);
    path.setAttribute('stroke', 'rgba(76, 175, 80, 0.8)');
    path.setAttribute('stroke-width', '5');
    path.setAttribute('stroke-dasharray', '10,5');
    path.setAttribute('class', 'path');
    
    svg.appendChild(path);
}

// Funkcja usuwająca wszystkie ścieżki nawigacyjne
function clearNavigationPaths() {
    const paths = document.querySelectorAll('.path');
    paths.forEach(path => path.remove());
}

// Funkcja generująca legendę
function generateLegend() {
    // Legenda jest już zdefiniowana w HTML, więc nie musimy jej generować
    console.log('Legenda jest już zdefiniowana w HTML');
}

// Funkcja generująca listę wszystkich sal
function generateRoomsList() {
    const roomsListContainer = document.getElementById('rooms-list');
    roomsListContainer.innerHTML = '';
    
    // Definicja kolejności pięter i ich nazw
    const floors = [
        { key: 'ground', name: 'Parter' },
        { key: 'first', name: 'I Piętro' },
        { key: 'second', name: 'II Piętro' },
        { key: 'basement', name: 'Piwnice' }
    ];
    
    // Iteracja przez piętra w określonej kolejności
    floors.forEach(floor => {
        const floorKey = floor.key;
        const floorName = floor.name;
        
        // Tworzenie sekcji dla piętra
        const floorSection = document.createElement('div');
        floorSection.className = 'floor-section';
        floorSection.setAttribute('data-floor', floorKey);
        
        // Tworzenie nagłówka piętra
        const floorHeader = document.createElement('div');
        floorHeader.className = 'floor-header';
        floorHeader.innerHTML = `
            <span>${floorName}</span>
            <span class="toggle-icon">▼</span>
        `;
        
        // Tworzenie kontenera na sale dla danego piętra
        const floorRooms = document.createElement('div');
        floorRooms.className = 'floor-rooms';
        
        // Domyślnie rozwijamy tylko parter
        if (floorKey !== 'ground') {
            floorHeader.classList.add('collapsed');
            floorRooms.classList.add('collapsed');
        }
        
        // Obsługa kliknięcia na nagłówek piętra (zwijanie/rozwijanie)
        floorHeader.addEventListener('click', () => {
            floorHeader.classList.toggle('collapsed');
            floorRooms.classList.toggle('collapsed');
        });
        
        // Dodawanie sal do kontenera piętra
        if (floorData[floorKey] && floorData[floorKey].rooms) {
            // Sortowanie sal według ID
            const sortedRooms = [...floorData[floorKey].rooms].sort((a, b) => {
                return a.id.localeCompare(b.id, undefined, { numeric: true });
            });
            
            sortedRooms.forEach(room => {
                const roomItem = document.createElement('div');
                roomItem.className = 'room-item';
                roomItem.setAttribute('data-room-id', room.id);
                roomItem.setAttribute('data-floor', floorKey);
                roomItem.setAttribute('data-type', room.type || 'unknown');
                
                // Struktura elementu sali
                roomItem.innerHTML = `
                    <div>
                        <span class="room-item-id">${room.id}</span>
                        <span class="room-item-name">${room.name || ''}</span>
                    </div>
                `;
                
                // Obsługa kliknięcia na element sali
                roomItem.addEventListener('click', () => {
                    // Przełącz na odpowiednie piętro
                    showFloor(floorKey);
                    
                    // Podświetl salę
                    setTimeout(() => {
                        highlightRoom(room.id);
                        showRoomInfo(room.id, floorKey);
                    }, 300); // Małe opóźnienie, aby mapa zdążyła się załadować
                });
                
                floorRooms.appendChild(roomItem);
            });
        }
        
        // Dodawanie elementów do sekcji piętra
        floorSection.appendChild(floorHeader);
        floorSection.appendChild(floorRooms);
        
        // Dodawanie sekcji piętra do kontenera listy sal
        roomsListContainer.appendChild(floorSection);
    });
}

// Funkcja obsługująca filtry listy sal
function setupRoomsListFilters() {
    const filterButtons = document.querySelectorAll('.floor-selector-button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Usuń klasę active ze wszystkich przycisków
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Dodaj klasę active do klikniętego przycisku
            button.classList.add('active');
            
            // Pobierz wartość filtra
            const floorFilter = button.getAttribute('data-floor');
            
            // Filtruj listę sal
            filterRoomsList(floorFilter);
        });
    });
}

// Funkcja filtrująca listę sal
function filterRoomsList(floorFilter) {
    // Jeśli filtr to 'all', pokazujemy wszystkie piętra
    if (floorFilter === 'all') {
        // Pokazujemy wszystkie sekcje pięter
        const floorSections = document.querySelectorAll('.floor-section');
        floorSections.forEach(section => {
            section.style.display = 'block';
        });
        
        // Pokazujemy wszystkie elementy sal
        const roomItems = document.querySelectorAll('.room-item');
        roomItems.forEach(item => {
            item.style.display = 'flex';
        });
        
        return;
    }
    
    // Jeśli wybrano konkretne piętro, pokazujemy tylko to piętro
    const floorSections = document.querySelectorAll('.floor-section');
    floorSections.forEach(section => {
        const sectionFloor = section.getAttribute('data-floor');
        
        if (sectionFloor === floorFilter) {
            // Pokazujemy sekcję wybranego piętra
            section.style.display = 'block';
            
            // Upewniamy się, że sekcja jest rozwinięta
            const floorHeader = section.querySelector('.floor-header');
            const floorRooms = section.querySelector('.floor-rooms');
            
            if (floorHeader && floorHeader.classList.contains('collapsed')) {
                floorHeader.classList.remove('collapsed');
            }
            
            if (floorRooms && floorRooms.classList.contains('collapsed')) {
                floorRooms.classList.remove('collapsed');
            }
            
            // Pokazujemy wszystkie sale w tej sekcji
            const roomItems = section.querySelectorAll('.room-item');
            roomItems.forEach(item => {
                item.style.display = 'flex';
            });
        } else {
            // Ukrywamy pozostałe sekcje
            section.style.display = 'none';
        }
    });
}