# Maçonnerie Renaud — mini-site démo

Site vitrine de démonstration pour un maçon fictif (**Maçonnerie Renaud**, Vallons-de-l'Erdre, 44),
réalisé par [Ta Vitrine Locale](https://tavitrinelocale.fr) dans le cadre du portfolio.

> ⚠️ **Site de démonstration.** SIRET fictif. Toute ressemblance avec une entreprise existante est fortuite.

## Stack

- HTML5 + CSS3 + JavaScript vanilla — **aucun framework, aucun build, aucun tracker**.
- 1 feuille de style partagée (`style.css`) + 1 script partagé (`script.js`).
- Polices Google Fonts : **Fraunces** (titres) + **Work Sans** (texte).
- Déploiement prévu : `https://macon.tavitrinelocale.fr/` (hébergement statique).

## Pages (6)

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil — hero, spécialités, pourquoi nous, démo avant/après, avis |
| `services.html` | 4 spécialités : gros œuvre, extension, ravalement, pierre naturelle |
| `zone-intervention.html` | Carte SVG + 3 villes (Vallons-de-l'Erdre, Riaillé, Joué-sur-Erdre) |
| `realisations.html` | 4 chantiers avant/après (compare slider) |
| `a-propos.html` | Sébastien, équipe, certifications, valeurs |
| `contact.html` | Formulaire (sans backend) + horaires + mentions légales (`#mentions`) |

Fichiers techniques : `style.css`, `script.js`, `sitemap.xml`, `robots.txt`, `favicon.svg`.

## Composant phare

**Compare slider avant/après** (`.compare`, `data-compare`) : glisser souris / tactile + clavier
(←/→, Home, End). Plusieurs instances par page. Code dans `script.js → initCompareSliders()`.

## Images

Les 17 visuels sont des **photos réelles Unsplash** (servies en WebP via `auto=format`, ratios
verrouillés : 3:2 pour les paires compare et les cartes, 16:9 pour hero/zone/contact, 4:5 pour
le portrait). Les 4 paires avant/après utilisent des photos réelles cohérentes — elles peuvent
être remplacées par des visuels IA plus tard (mêmes balises `<img>`, seule l'URL change).

## SEO

`<title>` et `meta description` uniques par page · canonical absolus ·
Open Graph + Twitter Card · JSON-LD `GeneralContractor` + `WebSite` (accueil),
`BreadcrumbList` (autres pages) · `sitemap.xml` + `robots.txt`.

© 2026 — Ta Vitrine Locale.
