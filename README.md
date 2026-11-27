# The Ministry of Improbable Solutions to Small Problems

Poetic logic as a solution engine.

A surreal space where improbable solutions to small problems are decreed by poetic form and the natural world. The visitor chooses a small problem. The Ministry deals a creature and a poetic form. The form supplies the reasoning, and the findings are issued as a single printed broadside.

Part of my MDes course work at the University of Sunderland

This is a working prototype: plain HTML, CSS and JavaScript, with no build step, no paid services and nothing stored.

## Method

Poetic form works as the logic of each solution, e.g. the sestina's 6-1-5-2-4-3 rotation in Report 39.

## Files

- `index.html` — the consultation (home) page, with the Small print, Recently issued, and Referred to Ethics (large problems: Reports 51, 52 and 55, linked but not dealt)
- `broadside.html` — Report No. 39 (starling, sestina) as a single broadside, with the registers beneath it
- `report-40.html` — Report No. 40 (starling, ballad), same layout
- `report-50.html` to `report-61.html` — Reports 50 (woodpecker, villanelle), 51 (woodpecker, alliterative verse), 52 (house sparrow, ballad), 54 (domestic cat, cyhydedd naw ban), 55 (hermit crab, somonka) and 61 (minke whale, pantoum)
- `large-problems.html` — the Ministry's policy on large problems, with the record of problems found to be large (linked from the Small print and the Ethics section, not the main menu)
- `methods.html` — poetic logic as a solution engine, with the two machine collages
- `styles.css` — all styling
- `script.js` — the rigged deal (only written combinations are dealt) and the objection and amendment flow
- `images/` — the paper-theatre collage and the two machine collages

## Design

- Palette sampled from the collages: paper `#f6f2e7`, ink `#23211d`, indigo `#1f2b4d`, and a red `#9b3a22` kept for the Ministry's decrees.
- Type: Cormorant Garamond for display, Source Serif 4 for reading, IBM Plex Mono for the paperwork.
- Broadsides are single printed sheets on lighter paper. The consultation and Methods pages are a single column of the same width, with the Ministry's terms gathered into a numbered Small print section.

## Still to do

- Text in [square brackets] is a placeholder: the joint department name, the consent and data note, the starling composite, and the Methods note on sources.
- The registers do not save anything yet. Each shows "This is a prototype: nothing has been stored."
- The deal is rigged: the list of written reports is at the top of `script.js`. To add one, add a line there and a matching problem button in `index.html`.
- Image slots: each new broadside shows the paper theatre until its own image is saved under the name in its caption (e.g. `images/report-50-woodpecker.jpg`). Then update that image's alt text and caption.
