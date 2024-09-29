import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";
import sampleNewsStories from './sample_news_stories.json';

function App() {
  return (
    <>
      <main>
        <h1 className="header">Random News Feed</h1>

        {sampleNewsStories.results.map((a, index) => (
          <NewsCard
            key={index} 
            title={a.title}
            link={a.link}
            author={a.creator ? a.creator.join(', ') : 'Unknown'}
            content={a.description}
            image={a.image_url || 'https://via.placeholder.com/150'} 
          />
        ))}
      </main>
      
      <Footer/>
    </>
  );
}

export default App;

