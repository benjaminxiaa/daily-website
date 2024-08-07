

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D_mH_VVH.js","_app/immutable/chunks/scheduler.D1CqcpTR.js","_app/immutable/chunks/index.DeGntEyt.js","_app/immutable/chunks/entry.DCLdwHKa.js"];
export const stylesheets = [];
export const fonts = [];
