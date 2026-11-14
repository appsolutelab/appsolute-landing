# appsolute-landing

Landing page di appsolute, gruppo di studenti dell'ITIS G. Cardano di Pavia che sviluppa app gratuite e open source. React + Vite + TypeScript, in italiano e inglese.

```sh
npm install
npm run dev    # sviluppo
npm run build  # controllo dei tipi e build in dist/
```

`src/ui/appsolute/` è una copia del design system Appsolute (`Assets/appsolute-ui/` del monorepo): non va modificata a mano, si aggiorna con
`rsync -a --delete Assets/appsolute-ui/ Landings/Company/src/ui/appsolute/`.
