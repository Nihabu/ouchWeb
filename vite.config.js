import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	esbuild: {
		include: /src\/.*\.js$/,
		exclude: [],
		loader: "jsx",
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				".js": "jsx",
			},
		},
	},
});
