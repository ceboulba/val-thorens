import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('SlideshowSample', {
      photos: [
        {uri: './static_assets/val-thorens-entree.jpg', title: 'Accueil', format: '2D'},
        {uri: './static_assets/val-thorens-entree-lune.jpg', title: 'Accueil lune', format: '2D'},
        {uri: './static_assets/val-thorens-hall.jpg', title: 'Hall', format: '2D'},
        {uri: './static_assets/val-thorens-hall-lune.jpg', title: 'Hall lune', format: '2D'},
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};