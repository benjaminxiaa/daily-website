export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/about.css","css/contact.css","css/gallery.css","css/index.css","css/nav.css","css/photography.css","css/programming.css","favicon.ico","portfolio/images.ts","portfolio/SaltPonds/1-DSC08756.jpg","portfolio/SaltPonds/1-_DSC9404.jpg","portfolio/SaltPonds/2-DSC08748.jpg","portfolio/SaltPonds/2-_DSC9111.jpg","portfolio/SaltPonds/3-DSC08723.jpg","portfolio/SaltPonds/3-_DSC9099.jpg","portfolio/SaltPonds/4-DSC07982.jpg"]),
	mimeTypes: {".css":"text/css",".ts":"video/mp2t",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DCt3XqOV.js","app":"_app/immutable/entry/app.DzmBqKtY.js","imports":["_app/immutable/entry/start.DCt3XqOV.js","_app/immutable/chunks/entry.DCLdwHKa.js","_app/immutable/chunks/scheduler.D1CqcpTR.js","_app/immutable/entry/app.DzmBqKtY.js","_app/immutable/chunks/scheduler.D1CqcpTR.js","_app/immutable/chunks/index.DeGntEyt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/work/photography",
				pattern: /^\/work\/photography\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
