/* ==========================================================================
   Ludia — Locale picker configuration.
   Must be an external file, not an inline <script>: the CSP in `_headers`
   is `script-src 'self'` with no `unsafe-inline`. Load it BEFORE
   assets/js/locale-picker.js, without `defer`, so it runs first.
   Language changes are applied in place by the hook registered in app.js.
   ========================================================================== */
window.LocalePickerConfig = {
  /* The language selector lives INSIDE the gear drawer, as its first row,
     and the gear stays alone in the header. */
  languageInDrawer: true,
  /* core.js defines STORAGE_PREFIX = 'ludia:', so the locale lives at 'ludia:locale'. */
  storageKey: 'ludia:locale',
  /* Strings live inline in strings.*.js: skip HEAD discovery. */
  path: null,
  requiredLocales: ['es', 'en'],
  defaultLocale: 'en',
  /* Game sounds already have a native on/off setting in #settings. */
  soundSettings: false
};
