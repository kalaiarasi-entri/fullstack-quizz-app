import React from 'react';
import Header from './components/header';
import VideoSection from './components/Content/VideoSection';
import UsecaseSection from './components/Content/Usecase/Usecase';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <VideoSection/>
      <UsecaseSection></UsecaseSection>
      <Footer></Footer>
    </div>
  );
}

export default App;