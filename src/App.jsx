import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import YourStack from './components/YourStack';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const jsonUrl = new URL('./data/technologies.json', import.meta.url);

        const response = await fetch(jsonUrl);

        if (!response.ok) {
          throw new Error('Failed to load technologies.');
        }

        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Error loading technologies:', error);
        toast.error('Failed to load technologies.');
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (technologyId) => {
    const technologyToRemove = stack.find((item) => item.id === technologyId);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== technologyId)
    );

    if (technologyToRemove) {
      toast.info(`${technologyToRemove.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

          <p className="mt-4 text-lg font-medium text-gray-600">
            Loading technologies...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <section id="technologies" className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
                    Explore Technologies
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Choose Your Technologies
                  </h2>

                  <p className="mt-3 max-w-2xl text-gray-600">
                    Explore modern development technologies and add your
                    favorites to build your own developer stack.
                  </p>
                </div>

                <div className="w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
                  {technologies.length} Technologies Available
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={handleAddToStack}
                    isAdded={stack.some((item) => item.id === technology.id)}
                  />
                ))}
              </div>

              <YourStack
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>

        <InfoSections />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;
