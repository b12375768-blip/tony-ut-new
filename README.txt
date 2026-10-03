Local Culture & Travel — Travel & Culture Guide (Responsive, Free, Consent-first)
==============================================================

Start: index.html

Brand
-----
- Name: Local Culture & Travel
- Tagline: Travel for the culture, not just the checklist
- Accent colours: terracotta #E2571B and heritage teal #0E7C7B

Pages
-----
- index.html         (home — hero, culture sections, featured places, contact form)
- game.html          (Journeys — interactive route board, canvas game)
- leaderboard.html   (Trip Log — saved journey scores, localStorage)
- about.html         (mission, vision, values)
- blog.html          (Field Notes listing)
- faq.html
- services.html      (Plan a Trip — planning help and local directories)
- privacy.html
- terms.html
- lander.html        (alternate route — copy of the home page)
- lande.html         (archive route placeholder)
- sitemap.html
- posts/             (19 field notes)
- robots.txt
- sitemap.xml

Popup
-----
- A "Travel Notice" popup shows on index.html (and lander.html, which is a copy)
  on EVERY page load or refresh. There is no sessionStorage gate, so refreshing
  the home page always shows it again.
- Popup text, buttons and behaviour live in assets/js/main.js.

Notes
-----
- All branding is consistent across every page. Search-and-replace brand text
  is safe as long as the logo image path stays "assets/img/logo.svg".
- Ad slots are marked with <div class="ad-slot"> — replace with your own ad code.
- Fully responsive. The canvas journey board resizes while keeping crisp resolution.
- Journey board has power-ups, combo multiplier, pause/restart and drag input.
- Journey scores and the Trip Log are stored in localStorage under gf_leaderboard.
- Image filenames have been renamed to match the brand (desert-borderlands.jpg,
  old-town-quarter.jpg, hills-and-passes.webp).

Enjoy!
