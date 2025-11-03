# Math Glossary Data Documentation

## Overview

The `glossary.json` file contains 215 middle school math terms with definitions, examples, and SVG visualizations.

## File Location

`data/glossary.json`

## Data Structure

### Root Object

```json
{
  "metadata": { },
  "terms": [ ]
}
```

### Metadata Object

```json
{
  "title": "Middle School Math Glossary",
  "target_audience": "Middle school students (ages 11-14)",
  "total_terms": 215,
  "description": "Comprehensive math vocabulary with kid-friendly definitions",
  "domains": [
    "Geometry",
    "Probability",
    "Statistics",
    "Numbers",
    "Ratios",
    "Algebra",
    "Measurement",
    "Data"
  ]
}
```

### Term Object

Each term in the `terms` array has the following structure:

```json
{
  "term": "string (required)",
  "definition": "string (required)",
  "domain": "string (required)",
  "examples": ["array of strings (optional)"],
  "svg": "string (required)"
}
```

#### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `term` | string | ✅ Yes | The math vocabulary word or phrase |
| `definition` | string | ✅ Yes | Kid-friendly explanation (1-2 sentences, 15-100 words) |
| `domain` | string | ✅ Yes | Subject category (must be one of the domains in metadata) |
| `examples` | array | ❌ No | Array of example usages, values, or applications |
| `svg` | string | ✅ Yes | Complete SVG markup with xmlns, viewBox, and dimensions |

## Domain Categories

1. **Geometry** (54 terms) - Shapes, angles, transformations, spatial relationships
2. **Algebra** (51 terms) - Variables, equations, expressions, functions
3. **Numbers** (37 terms) - Integers, fractions, decimals, operations
4. **Probability** (22 terms) - Chance, outcomes, events, likelihood
5. **Statistics** (21 terms) - Data analysis, measures, distributions
6. **Measurement** (11 terms) - Area, volume, perimeter, tools
7. **Ratios** (11 terms) - Proportions, rates, scaling, comparisons
8. **Data** (8 terms) - Graphs, charts, tables, visualization

## SVG Specifications

All SVG visuals follow these standards:

- **Format:** Inline SVG with complete markup
- **Namespace:** `xmlns="http://www.w3.org/2000/svg"`
- **ViewBox:** `0 0 200 200` (scales proportionally)
- **Dimensions:** `width="200" height="200"`
- **Colors:** Blue (#2563eb), Green (#10b981), Red (#ef4444), Orange (#f59e0b), Gray (#1f2937)
- **Encoding:** UTF-8
- **Security:** No script tags or external references

### SVG Example

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\" width=\"200\" height=\"200\">\n  <circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"#3b82f6\" />\n</svg>"
}
```

## Usage Examples

### JavaScript

```javascript
// Load the data
fetch('data/glossary.json')
  .then(response => response.json())
  .then(data => {
    console.log(`Loaded ${data.terms.length} terms`);
    
    // Access first term
    const firstTerm = data.terms[0];
    console.log(firstTerm.term);
    console.log(firstTerm.definition);
    
    // Filter by domain
    const geometryTerms = data.terms.filter(t => t.domain === 'Geometry');
    
    // Search terms
    const searchResults = data.terms.filter(t => 
      t.term.toLowerCase().includes('angle')
    );
  });
```

### Displaying SVG

```javascript
// Render SVG visual
const termDiv = document.createElement('div');
termDiv.innerHTML = term.svg;
document.body.appendChild(termDiv);
```

### React Example

```jsx
import glossaryData from './data/glossary.json';

function GlossaryCard({ term }) {
  return (
    <div className="term-card">
      <h3>{term.term}</h3>
      <span className="domain">{term.domain}</span>
      <p>{term.definition}</p>
      {term.examples && (
        <ul>
          {term.examples.map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>
      )}
      <div dangerouslySetInnerHTML={{ __html: term.svg }} />
    </div>
  );
}
```

## Data Quality

- ✅ All 215 terms validated
- ✅ No duplicate terms
- ✅ All required fields present
- ✅ Valid JSON syntax
- ✅ Proper UTF-8 encoding
- ✅ All SVGs tested and valid
- ✅ All domains match metadata list
- ✅ Definitions are kid-friendly (ages 11-14)
- ✅ No security vulnerabilities

## File Statistics

- **Size:** 158.8 KB
- **Terms:** 215
- **Average term size:** ~756 bytes
- **Terms with examples:** 103 (~48%)
- **Terms without examples:** 112 (~52%)

## Notes

- The `examples` field is optional and only present when examples are provided
- SVG visuals are embedded as complete markup strings (not file references)
- All special characters (°, ×, ÷, ½, etc.) use proper UTF-8 encoding
- Definitions are concise (1-2 sentences) for quick comprehension

## Version History

- **v1.0** - Initial release with 215 terms and SVG visuals
