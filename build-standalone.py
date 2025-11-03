#!/usr/bin/env python3
import json

# Read the files
with open('data/glossary.json', 'r') as f:
    glossary_data = f.read()

with open('style.css', 'r') as f:
    css_content = f.read()

with open('script.js', 'r') as f:
    js_content = f.read()

# Modify the JS to use embedded data instead of fetch
js_modified = js_content.replace(
    'async function loadGlossaryData() {\n    try {\n        const response = await fetch(\'data/glossary.json\');\n        if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n        }\n        const data = await response.json();\n        allTerms = data.terms;',
    'function loadGlossaryData() {\n    try {\n        const data = GLOSSARY_DATA;\n        allTerms = data.terms;'
).replace(
    'async function initApp() {',
    'function initApp() {'
).replace(
    '    try {\n        await loadGlossaryData();',
    '    try {\n        loadGlossaryData();'
)

# Build the standalone HTML
html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📐 Interactive Math Glossary</title>
    <meta name="description" content="An interactive math glossary for middle school students with 215+ terms and visual diagrams">
    <style>
{css_content}
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="header-content">
                <h1 class="title">📐 Interactive Math Glossary</h1>
                <p class="subtitle">215+ math terms with visual diagrams for middle school students</p>
            </div>
        </header>

        <!-- Search and Filter Section -->
        <div class="controls">
            <div class="search-container">
                <input
                    type="text"
                    id="searchInput"
                    class="search-input"
                    placeholder="🔍 Search for a math term..."
                    aria-label="Search math terms"
                >
            </div>

            <div class="filter-container">
                <button class="filter-btn active" data-domain="all">
                    All Terms
                </button>
            </div>

            <div class="results-info">
                <span id="resultsCount">Loading terms...</span>
            </div>
        </div>

        <!-- Terms Grid -->
        <div id="termsGrid" class="terms-grid">
            <div class="loading">Loading math terms...</div>
        </div>

        <!-- No Results Message -->
        <div id="noResults" class="no-results" style="display: none;">
            <div class="no-results-content">
                <span class="no-results-icon">🔍</span>
                <h3>No terms found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        </div>

        <!-- Footer -->
        <footer class="footer">
            <p>Built with ❤️ for middle school math students</p>
            <p class="footer-links">
                <a href="https://github.com/AyneldjaMama/math-glossary" target="_blank">GitHub</a>
                <span>•</span>
                <a href="mailto:sean.f.harding@gmail.com">Contact</a>
            </p>
        </footer>
    </div>

    <script>
    // Embedded glossary data
    const GLOSSARY_DATA = {glossary_data};

    {js_modified}
    </script>
</body>
</html>'''

# Write the standalone file
with open('index-standalone.html', 'w') as f:
    f.write(html_content)

print("✅ Created index-standalone.html - a single file with everything embedded!")
