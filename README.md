# Zap Band — Competitive Pricing Intelligence

A responsive, dark dashboard for Mission 2. Static ES modules and CSS work without a backend, API keys or third-party JavaScript dependencies. Six views: overview, searchable competitor landscape with comparison profiles, pricing tables and charts, live price position explorer, opportunities, and source methodology. Hash navigation supports GitHub Pages refreshes.

## Run

Node 22 or newer. No installation needed.

```
npm test
npm run build
npm run dev
```

Open http://127.0.0.1:4173. The build copies runtime assets to `dist`. GitHub Actions tests, builds and deploys that directory to Pages on pushes to main. Set repository Pages source to GitHub Actions.

## Research and calculations

Primary dataset: `data/competitor_data.json`, unchanged from Mission 1. Cross-checked all ten prices with `competitor_research.xlsx` and `competitor_analysis.docx`; no discrepancies. Snapshot: 2026-10-27. Four competitors (1 direct, 3 indirect), ten priced offers, seven hardware purchases, three recurring offers, twelve primary sources. Source links, pricing caveats, verification definitions and availability are retained in the dashboard.

US broad cohort uses P01, P06 and P08: $35–$159.99, mean $98.31, median $99.95. Narrow wearable cohort uses P01 and P06: $99.95–$159.99, mean/median $129.97. UK reference uses P10: £24.99. All six researched USD hardware products have mean $119.98 and median $129.95, but the default representative averages avoid overweighting catalogues. GBP is never converted or mixed with USD. Rental and optional software charges are excluded from hardware statistics. Price sorts group currencies and billing units first.

Explorer starts at $89 and allows $0–$260 in cents. The $79–$99 band is a preliminary test hypothesis. Presets use interpolated quartiles of [35,99.95,159.99]: Q1 $67.475 (preset $67.48), median $99.95, Q3 $129.97. Prices below/above the observed extrema are outside the researched market; inside, below Q1 is budget-oriented, above Q3 premium-oriented, otherwise near the market middle. Relative percentage uses the competitor price as denominator. No revenue, demand, willingness-to-pay or profit forecast is made.

## Limitations

This is a purposive four-brand snapshot, not live prices or a complete market census. Reference prices do not establish historical sales. Tax, shipping and unconfirmed checkout terms are excluded. Purchase buttons do not prove stock or delivery. Manufacturer claims are not independently tested. Zap Band is a concept; safety, comfort and waking effectiveness remain unproven. Simulated focus groups are not consumer evidence. Optional Google Health Premium lacks a fully established billing interval in the retrieved source and is not treated as a complete priced plan.

## Validation

Node tests cover data integrity, comparable cohorts, statistics, threshold/equality behavior and filtering. Runtime syntax checks and production build are required before publishing. Browser checks cover navigation, search/empty states, selected comparisons, offer filters, explorer synchronization and responsive layout.
