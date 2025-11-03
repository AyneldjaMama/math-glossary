# 📐 Interactive Math Glossary

An interactive digital math glossary for middle school students featuring **215 math terms** with kid-friendly definitions and custom SVG visualizations.

## ✨ Features

- **215 Math Terms** - Comprehensive vocabulary covering 8 subject areas
- **Custom SVG Visuals** - Every term has a unique educational diagram
- **Kid-Friendly Definitions** - Written for ages 11-14, 1-2 sentences each
- **8 Subject Domains** - Geometry, Algebra, Numbers, Probability, Statistics, Ratios, Measurement, Data
- **Searchable** - Easy to find terms quickly
- **Filterable by Domain** - Browse by subject area
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Text-to-Speech Ready** - Definitions can be read aloud
- **Single HTML File** - Portable and easy to share

## 📊 Data Overview

- **Total Terms:** 215
- **File Size:** 158 KB
- **Format:** JSON with embedded SVG
- **Target Audience:** Middle school (ages 11-14)

### Terms by Domain

| Domain | Terms |
|--------|-------|
| Geometry | 54 |
| Algebra | 51 |
| Numbers | 37 |
| Probability | 22 |
| Statistics | 21 |
| Measurement | 11 |
| Ratios | 11 |
| Data | 8 |

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for basic HTML version
- Node.js (optional, for development with build tools)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/math-glossary.git
cd math-glossary
```

2. Open `index.html` in your browser, or:

```bash
# If using a development server
npx serve
```

## 📁 Project Structure

```
math-glossary/
├── data/
│   └── glossary.json          # 215 math terms with SVG visuals
├── index.html                 # Main application
├── style.css                  # Styling
├── script.js                  # Interactive features
└── README.md                  # This file
```

## 🎯 JSON Data Structure

Each term in `data/glossary.json` includes:

```json
{
  "term": "acute angle",
  "definition": "An angle that measures less than 90 degrees, like the corner of a slice of pizza.",
  "domain": "Geometry",
  "examples": ["45°", "60°", "30°"],
  "svg": "<svg>...</svg>"
}
```

**Fields:**
- `term` (required) - The math vocabulary word
- `definition` (required) - Kid-friendly 1-2 sentence explanation
- `domain` (required) - Subject category
- `examples` (optional) - Array of example usages
- `svg` (required) - Inline SVG visualization (200x200 viewBox)

## 🛠️ Technologies Used

- HTML5
- CSS3 (Tailwind-inspired utility classes)
- Vanilla JavaScript (ES6+)
- SVG for visualizations
- JSON for data storage

## 📱 Features Roadmap

- [x] Complete glossary data with SVG visuals
- [ ] Search functionality
- [ ] Domain filtering
- [ ] Text-to-speech
- [ ] Favorites/bookmarking
- [ ] Print-friendly view
- [ ] Quiz mode
- [ ] Flashcard view
- [ ] Dark mode
- [ ] Export to PDF

## 🎓 Educational Use

This glossary is designed for:
- Middle school math teachers
- Students studying algebra, geometry, and statistics
- Parents helping with homework
- Tutors and educational programs
- Online learning platforms

## 📄 License

MIT License

## 🙏 Acknowledgments

- Math term definitions based on Common Core State Standards
- SVG visualizations created for educational clarity
- Inspired by the need for accessible math education resources

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Report bugs or issues
- Suggest new terms to add
- Improve definitions or visualizations
- Enhance the UI/UX

## 📧 Contact

sean.f.harding@gmail.com

---

**Built with ❤️ for middle school math students**
