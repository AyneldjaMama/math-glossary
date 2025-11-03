// State management
let allTerms = [];
let filteredTerms = [];
let currentDomain = 'all';
let searchQuery = '';

// DOM elements
const searchInput = document.getElementById('searchInput');
const termsGrid = document.getElementById('termsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const filterContainer = document.querySelector('.filter-container');

// Initialize app
async function initApp() {
    try {
        await loadGlossaryData();
        createFilterButtons();
        setupEventListeners();
        renderTerms();
    } catch (error) {
        console.error('Error initializing app:', error);
        showError('Failed to load math glossary. Please refresh the page.');
    }
}

// Load glossary data from JSON
async function loadGlossaryData() {
    try {
        const response = await fetch('data/glossary.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        allTerms = data.terms;
        filteredTerms = [...allTerms];

        // Sort terms alphabetically
        allTerms.sort((a, b) => a.term.localeCompare(b.term));
        filteredTerms = [...allTerms];
    } catch (error) {
        console.error('Error loading glossary:', error);
        throw error;
    }
}

// Create filter buttons dynamically
function createFilterButtons() {
    // Get unique domains
    const domains = [...new Set(allTerms.map(term => term.domain))].sort();

    // Create "All Terms" button
    const allButton = filterContainer.querySelector('[data-domain="all"]');

    // Create domain buttons
    domains.forEach(domain => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.dataset.domain = domain;
        button.textContent = domain;
        filterContainer.appendChild(button);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterTerms();
        renderTerms();
    });

    // Filter buttons
    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Update active state
            filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Update current domain
            currentDomain = e.target.dataset.domain;
            filterTerms();
            renderTerms();
        }
    });
}

// Filter terms based on search and domain
function filterTerms() {
    filteredTerms = allTerms.filter(term => {
        // Domain filter
        const matchesDomain = currentDomain === 'all' || term.domain === currentDomain;

        // Search filter
        const matchesSearch = searchQuery === '' ||
            term.term.toLowerCase().includes(searchQuery) ||
            term.definition.toLowerCase().includes(searchQuery) ||
            (term.examples && term.examples.some(ex => ex.toLowerCase().includes(searchQuery)));

        return matchesDomain && matchesSearch;
    });
}

// Render terms to the grid
function renderTerms() {
    // Clear grid
    termsGrid.innerHTML = '';

    // Update results count
    updateResultsCount();

    // Show/hide no results message
    if (filteredTerms.length === 0) {
        termsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    termsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    // Render each term
    filteredTerms.forEach(term => {
        const card = createTermCard(term);
        termsGrid.appendChild(card);
    });
}

// Create a term card element
function createTermCard(term) {
    const card = document.createElement('div');
    card.className = 'term-card';

    // Create domain badge class
    const domainClass = `domain-${term.domain.toLowerCase().replace(/\s+/g, '-')}`;

    // Build card HTML
    card.innerHTML = `
        <div class="term-header">
            <h2 class="term-name">${escapeHtml(term.term)}</h2>
            <span class="domain-badge ${domainClass}">${escapeHtml(term.domain)}</span>
        </div>

        <p class="term-definition">${escapeHtml(term.definition)}</p>

        <div class="term-visual">
            ${term.svg}
        </div>

        ${term.examples && term.examples.length > 0 ? `
            <div class="term-examples">
                <p class="examples-title">Examples:</p>
                <ul class="examples-list">
                    ${term.examples.map(ex => `<li class="example-item">${escapeHtml(ex)}</li>`).join('')}
                </ul>
            </div>
        ` : ''}
    `;

    return card;
}

// Update results count
function updateResultsCount() {
    const count = filteredTerms.length;
    const total = allTerms.length;

    if (searchQuery || currentDomain !== 'all') {
        resultsCount.textContent = `Showing ${count} of ${total} terms`;
    } else {
        resultsCount.textContent = `${total} math terms`;
    }
}

// Show error message
function showError(message) {
    termsGrid.innerHTML = `
        <div class="loading" style="color: #ef4444;">
            ⚠️ ${escapeHtml(message)}
        </div>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Optional: Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Focus search on '/' key
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }

    // Clear search on 'Escape' key
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        filterTerms();
        renderTerms();
        searchInput.blur();
    }
});

// Optional: Text-to-Speech feature (if browser supports it)
function speakDefinition(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

// Add click-to-speak functionality (can be enabled later)
// termsGrid.addEventListener('click', (e) => {
//     const card = e.target.closest('.term-card');
//     if (card) {
//         const definition = card.querySelector('.term-definition').textContent;
//         speakDefinition(definition);
//     }
// });
