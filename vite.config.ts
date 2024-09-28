import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

export default defineConfig(({ command}) => {
  console.log("command", command); // prints "command serve"
  // npm run dev: demo mode
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: resolve(__dirname, 'demo'), // does this mean i need to visit http://localhost:5173/demo or does it mean when i visit http://localhost:5173/ it will serve from the demo directory? don't i need to aim specifically at App.tsx, main.tsx, or index.html?
      build: {
        outDir: resolve(__dirname, 'dist-demo'), // what does this even do?? i don't see any "dist-demo" folder anywhere..
      },
      resolve: {
        alias: {
          'reaqt': resolve(__dirname, './src/index.ts')
        }
      }
    };
  } else {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'Reaqt',
          formats: ['es', 'umd'], // i see these two files get created in `dist` folder when i `npm run build`
          fileName: (format) => `reaqt.${format}.js`
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        }
      }
    };
  }
});

