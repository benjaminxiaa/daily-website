

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/photography/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CJA9DjJZ.js","_app/immutable/chunks/scheduler.D1CqcpTR.js","_app/immutable/chunks/index.DeGntEyt.js"];
export const stylesheets = ["_app/immutable/assets/5.BqwnsGb-.css"];
export const fonts = [];
