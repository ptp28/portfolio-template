import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/500.css';
import '@fontsource/mulish/600.css';
import '@fontsource/mulish/700.css';
import '@fontsource/mulish/800.css';
import '@fontsource/saira-extra-condensed/400.css';
import '@fontsource/saira-extra-condensed/500.css';
import '@fontsource/saira-extra-condensed/600.css';
import '@fontsource/saira-extra-condensed/700.css';
import '@fontsource/saira-extra-condensed/800.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>
)
