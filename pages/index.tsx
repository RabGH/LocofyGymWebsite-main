import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import ExercisesSection from "../components/Exercise";
import TrainersSection from "../components/Trainers";
import CategoriesSection from "../components/Categories";
import SubscribeSection from "../components/Subscribe";

const Home: NextPage = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Navbar />
      <section id="hero" className="w-full">
        <HeroSection
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          heroImage="/vector@2x.png"
        />
      </section>

      <section id="exercise" className="w-full">
        <ExercisesSection />
      </section>

      <section id="trainers" className="w-full">
        <TrainersSection subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing." />
      </section>

      <section id="categories" className="w-full">
        <CategoriesSection title="Workout at Home" videos="15 videos" />
      </section>

      <section id="subscribe" className="w-full">
        <SubscribeSection />
      </section>
    </main>
  );
};

export default Home;
