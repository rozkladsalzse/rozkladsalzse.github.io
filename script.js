// ------------------------------
// Dane o piętrach i salach
// ------------------------------
const floorData = {
    basement: { name: 'Piwnice', image: 'basement.svg', rooms: [ /* ... B01-B06 */ ] },
    ground: { name: 'Parter', image: 'ground.svg', rooms: [ /* ... 101-112 */ ] },
    first: { name: 'I Piętro', image: 'first.svg', rooms: [ /* ... 201-211 */ ] },
    second: { name: 'II Piętro', image: 'second.svg', rooms: [ /* ... 301-311 */ ] }
};

// Korytarze
const corridors = {
    basement: [ /* ... */ ],
    ground: [ /* ... */ ],
    first: [ /* ... */ ],
    second: [ /* ... */ ]
};

// Schody
const stairs = [
    { floor1: 'basement', x1: 500, y1: 230, floor2: 'ground', x2: 500, y2: 280 },
    { floor1: 'ground', x1: 500, y1: 280, floor2: 'first', x2: 500, y2: 290 },
    { floor1: 'first', x1: 500, y1: 290, floor2: 'second', x2: 500, y2: 280 }
];

// ------------------------------
// DOMContentLoaded - start aplikacji
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    loadFloorMaps();
    setupFloorButtons();
    setupSearch();
    setupNavigation();
    document.querySelector('.close-popup').addEventListener('click', () => {
        document.getElementById('room-popup').style.display = 'none';
    });
    generateRoomsList();
    setupRoomsListFilters();
    showFloor('ground');
});

// ------------------------------
// Ładowanie map SVG
// ------------------------------
function loadFloorMaps() {
    Object.keys(floorData).forEach(floor => {
        const mapContainer = document.getElementById(`${floor}-map`);
        fetch(`./${floor}.svg`)
            .then(r => r.ok ? r.text() : Promise.reject(`Błąd ładowania ${floor}`))
            .then(svg => {
                mapContainer.innerHTML = svg;
                const svgEl = mapContainer.querySelector('svg');
                if (svgEl) { svgEl.setAttribute('width', '100%'); svgEl.setAttribute('height', '100%'); }
                setupRoomInteractions(floor);
            })
            .catch(err => mapContainer.innerHTML = `<div class="error-message">${err}</div>`);
    });
}

// ------------------------------
// Interakcje z salami
// ------------------------------
function setupRoomInteractions(floor) {
    const mapContainer = document.getElementById(`${floor}-map`);
    const rooms = mapContainer.querySelectorAll('.room');
    rooms.forEach(room => room.addEventListener('click', () => showRoomInfo(room.getAttribute('data-id'), floor)));
}

// ------------------------------
// Popup z informacjami o sali
// ------------------------------
function showRoomInfo(roomId, floorId) {
    const room = floorData[floorId].rooms.find(r => r.id === roomId);
    if (!room) return console.error('Nie znaleziono sali', roomId);
    
    document.getElementById('popup-title').textContent = `${room.id} - ${room.name}`;
    document.getElementById('popup-description').textContent = `Sala ${room.id} znajduje się na piętrze ${floorData[floorId].name}.`;
    document.getElementById('popup-floor').textContent = `Piętro: ${floorData[floorId].name}`;
    document.getElementById('popup-type').textContent = `Typ: ${room.type}`;
    const popup = document.getElementById('room-popup');
    popup.style.display = 'block';
    popup.style.opacity = 0;
    setTimeout(() => popup.style.opacity = 1, 10);
}

// ------------------------------
// Pokazanie wybranego piętra
// ------------------------------
function showFloor(floorId) {
    document.querySelectorAll('.floor-map').forEach(m => m.classList.remove('active'));
    document.getElementById(`${floorId}-map`).classList.add('active');
    document.querySelectorAll('.floor-button').forEach(b => b.classList.toggle('active', b.dataset.floor === floorId));
}

// ------------------------------
// Przyciski pięter
// ------------------------------
function setupFloorButtons() {
    document.querySelectorAll('.floor-button').forEach(btn => btn.addEventListener('click', () => showFloor(btn.dataset.floor)));
}

// ------------------------------
// Wyszukiwanie sal
// ------------------------------
function setupSearch() {
    const input = document.getElementById('search-input');
    const btn = document.getElementById('search-button');
    
    btn.addEventListener('click', () => searchRoom(input.value));
    input.addEventListener('keypress', e => { if (e.key==='Enter') searchRoom(input.value); });
}

function searchRoom(query) {
    query = query.trim().toUpperCase();
    if (!query) return;
    
    for (const floorId in floorData) {
        const room = floorData[floorId].rooms.find(r => r.id.toUpperCase() === query || r.name.toUpperCase().includes(query));
        if (room) {
            showFloor(floorId);
            highlightRoom(room.id, floorId);
            showRoomInfo(room.id, floorId);
            return;
        }
    }
    alert('Nie znaleziono sali o podanym identyfikatorze lub nazwie.');
}

// ------------------------------
// Podświetlanie sal
// ------------------------------
function highlightRoom(roomId, floorId) {
    document.querySelectorAll('.room-highlighted').forEach(r => r.classList.remove('room-highlighted'));
    const svg = document.querySelector(`#${floorId}-map svg`);
    if (!svg) return;
    const room = svg.querySelector(`rect[data-id="${roomId}"]`);
    if (room) {
        room.classList.add('room-highlighted');
        room.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ------------------------------
// Nawigacja między salami
// ------------------------------
function setupNavigation() {
    const start = document.getElementById('start-room');
    const end = document.getElementById('end-room');
    const btn = document.getElementById('find-route');
    if (!start || !end || !btn) return;
    
    btn.addEventListener('click', () => {
        const startId = start.value.trim().toUpperCase();
        const endId = end.value.trim().toUpperCase();
        if (!startId || !endId) return alert('Wprowadź identyfikatory sal początkowej i docelowej.');
        
        let startRoom, endRoom, startFloor, endFloor;
        for (const f in floorData) {
            const floor = floorData[f];
            const s = floor.rooms.find(r => r.id.toUpperCase() === startId);
            const e = floor.rooms.find(r => r.id.toUpperCase() === endId);
            if (s) { startRoom=s; startFloor=f; }
            if (e) { endRoom=e; endFloor=f; }
        }
        if (!startRoom || !endRoom) return alert('Nie znaleziono jednej z sal.');
        if (startFloor===endFloor) findPathOnSameFloor(startRoom, endRoom, startFloor);
        else alert(`Sale na różnych piętrach. Najpierw na ${floorData[startFloor].name}, potem ${floorData[endFloor].name}.`);
    });
}

function findPathOnSameFloor(startRoom, endRoom, floorId) {
    clearNavigationPaths();
    highlightRoom(startRoom.id, floorId);
    highlightRoom(endRoom.id, floorId);
    const svg = document.querySelector(`#${floorId}-map svg`);
    if (!svg) return;
    
    const s = svg.querySelector(`rect[data-id="${startRoom.id}"]`);
    const e = svg.querySelector(`rect[data-id="${endRoom.id}"]`);
    if (!s || !e) return;
    
    const startX = parseFloat(s.getAttribute('x')) + parseFloat(s.getAttribute('width'))/2;
    const startY = parseFloat(s.getAttribute('y')) + parseFloat(s.getAttribute('height'))/2;
    const endX = parseFloat(e.getAttribute('x')) + parseFloat(e.getAttribute('width'))/2;
    const endY = parseFloat(e.getAttribute('y')) + parseFloat(e.getAttribute('height'))/2;
    createPathSegment(svg, startX, startY, endX, endY);
}

// ------------------------------
// Tworzenie ścieżki SVG
// ------------------------------
function createPathSegment(svg, x1, y1, x2, y2) {
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x1); line.setAttribute('y1',y1);
    line.setAttribute('x2',x2); line.setAttribute('y2',y2);
    line.setAttribute('stroke','rgba(76,175,80,0.8)'); line.setAttribute('stroke-width','5');
    line.setAttribute('stroke-dasharray','10,5'); line.classList.add('path');
    svg.appendChild(line);
}

function clearNavigationPaths() { document.querySelectorAll('.path').forEach(p=>p.remove()); }

// ------------------------------
// Generowanie listy sal i filtrów
// ------------------------------
function generateRoomsList() {
    const container = document.getElementById('rooms-list'); if(!container) return;
    container.innerHTML='';
    const floors = ['ground','first','second','basement'];
    
    floors.forEach(floorKey=>{
        const floorSection=document.createElement('div'); floorSection.className='floor-section'; floorSection.dataset.floor=floorKey
