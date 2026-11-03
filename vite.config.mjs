import { qaPreview } from './tools/qa-preview.mjs';
export default {
  plugins: [qaPreview(import.meta.dirname)],
  server: { host: '0.0.0.0', allowedHosts: ['terminal.local'] }
};
