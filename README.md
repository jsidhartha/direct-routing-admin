# Direct Routing Admin

This project contains a simple HTML/CSS dashboard for managing VoIP services.

## Structure

- `client/` – dashboard for clients
- `end-user/` – admin views for different providers
- `dependencies/` – local CSS/JS assets

## Running

Open `client/index.html` or `end-user/index.html` in a browser. The pages rely on Materialize, jQuery and Google Charts. Materialize assets are included locally, but jQuery and Google Charts are loaded from CDNs.

## Development

Custom styles are defined in `dependencies/css/styles.css` (minified as `styles.min.css`). JavaScript initialization is located in `dependencies/js/init.js` and sample table data is generated in `dependencies/js/data.js`.

Repeated table rows in the dashboard have been replaced with dynamic generation using JavaScript to simplify maintenance.
