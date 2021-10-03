import React from 'react';
import './App.css'
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotification from './components/NewsNotification';


function App() {


    return (
      <body>
        <div>
            <Header />
            <NewsNotification topic='PÄIVÄN TIMANTTI' body='Tutkija kertoo: Näin sota näkyy meissä edelleen' />
            <NewsNotification topic='PÄIVÄN TIMANTTI' body='Harriet Raab tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19200 euroa' />
            <NewsNotification topic='MAINOS' body='Faktoille on nyyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta' />
            <MainSection />
            
        </div>
      </body>
    );
}

export default App;
