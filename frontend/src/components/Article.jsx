// src/components/Article.jsx
import { motion } from "framer-motion";
import "./Article.css";
import FullImage from "./FullImage";
import Footer from "./Footer";
import FullVideoPlayer from "./FullVideoPlayer";
import Marquee from "./MarqueeReactComponent";
import GuidePromo from "./GuidePromo";
import MultiCardCarousel from "./MultiCardCarousel";
import RegisterBanner from "./RegisterBanner";
export default function Article() {
  return (
    <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-8 lg:px-16 text-center min-h-screen">

      {/* Heading with typing effect */}
      <div className="component-design">
      <div className="head-title">
        <h2 className="inline-block text-1xl md:text-1xl font-bold">
          <span className="type text-nowrap">
            The largest IB Resources Platform on the planet
          </span>
          <span className="caret"></span>
        </h2>
      </div>

      {/* Paragraph with scroll animation */}
      <motion.p
        className="motion-paragraph"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Access over <span className="font-bold text-white">5,270+ IB examiner-led videos</span> 
        spread over <span className="font-bold text-white">1,188+ hours</span>,{" "}
        <span className="font-bold text-white">234+ solved past papers</span>,{" "}
        <span className="font-bold text-white">37,436+ topic-wise practice questions</span>{" "}
        with in-depth explanations,{" "}
        <span className="font-bold text-white">5,912+ IB notes</span>,{" "}
        <span className="font-bold text-white">53,434+ IB flashcards</span>,{" "}
        <span className="font-bold text-white">339+ graded IA/EE Examples</span>, and{" "}
        <span className="italic text-white">so much more!</span>
      </motion.p>

      {/* Primary Button */}
      <motion.a
        href="#register"
        className="ai-button"
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(119, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Register (It's Free)
      </motion.a>

      {/* Secondary Link */}
      <motion.a
        href="#resources"
        className="ai-link"
        whileHover={{ scale: 1.05, textShadow: "0 0 12px #4facfe" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Explore IB Resources
      </motion.a>
     {/* <FullVideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" /> */}
     
  <div className="glow-vertical-line"></div>
<FullVideoPlayer src="https://media.istockphoto.com/id/2184354644/video/abstract-futuristic-digital-technology.mp4?s=mp4-640x640-is&k=20&c=9PEhqL4cv9BRR6jzKf8WHomPADwEyrzrx3TR9Qwl9JY=" />
 <motion.p
        className="motion-paragraph font-bold" style={{fontSize:"2rem"}}
        >
          OUR USER WENT TO

        </motion.p>
        {/* 
           

        */}
<Marquee
  items={[
    <img
      src="https://cdn.nailib.com/_next/static/media/chicago.895f914e.svg?w=256&q=75"
      alt="Chicago"
      style={{ height: "50px", objectFit: "contain", backgroundColor:"white" }}
    />,
    <img
      src="https://cdn.nailib.com/_next/static/media/princeton.d8545017.svg?w=256&q=75"
      alt="Oxford University"
      style={{ height: "50px", objectFit: "contain", backgroundColor:"white" }}
    />,
    <img
      src="https://cdn.nailib.com/_next/static/media/harvard.92147eba.svg?w=256&q=75"
      alt="Stanford University"
      style={{ height: "50px", objectFit: "contain", backgroundColor:"white" }}
    />,
    <img
      src="https://cdn.nailib.com/_next/static/media/berkeley.a5f25827.svg?w=256&q=75"
      alt="MIT"
      style={{ height: "50px", objectFit: "contain", backgroundColor:"white" }}
    />,
     <img
      src="https://cdn.nailib.com/_next/static/media/caltech.5bdf7408.svg?w=256&q=75"
      alt="MIT"
      style={{ height: "50px", objectFit: "contain", backgroundColor:"white" }}
    />,
     <img
      src="https://cdn.nailib.com/_next/static/media/mcgill.bfea2608.svg?w=256&q=75"
      alt="MIT"
      style={{ height: "50px", objectFit: "contain", backgroundColor:"white" }}
    />,
     <img
      src="https://cdn.nailib.com/_next/static/media/san-diego.0c0a905f.svg?w=256&q=75"
      alt="MIT"
      style={{ height: "50px", objectFit: "contain", backgroundColor:"white"}}
    />,


  ]}
  speed={20}
  gradient
  pauseOnHover
/>

 <div className="head-title">
        <h2 className="inline-block text-1xl md:text-1xl font-bold">
          <span className="type text-nowrap">
            Ft. Best IB Educators on the planet 
          </span>
          <span className="caret"></span>
        </h2>
      </div>
       <motion.p
        className="motion-paragraph font-bold" style={{fontSize:"2rem"}}
        >
          Nail IB is a home to top-tier educators, including PatrickJMT for Math AA SL, Patrick has over 1.2 million YouTube subs; our team also boasts certified IB examiners, and IB alumni with a perfect score!


        </motion.p>
          <motion.a
        href="#register"
        className="ai-button"
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(119, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Explore IB Resources
      </motion.a>

      {/* Secondary Link */}
      <motion.a
        href="#resources"
        className="ai-link"
        whileHover={{ scale: 1.05, textShadow: "0 0 12px #4facfe" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
       Register (It's Free) 
      </motion.a>
        
</div>

<div className="image-disp">
      <FullImage
        src="https://cdn.nailib.com/_next/static/media/ib-videos.a384800f.png?w=3840&q=75"
        alt="IB Past Papers"
      />
    </div>
     <div className="head-title">
        <h2 className="inline-block text-1xl md:text-1xl font-bold">
          <span className="type text-nowrap">
           37,411+ IB-Like Questions
          </span>
          <span className="caret"></span>
        </h2>
      </div>
     <motion.p
        className="motion-paragraph font-bold" style={{fontSize:"2rem"}}
        >
        Ace your IB exams with our meticulously curated question bank, tailored for targeted practice. Filter by chapters and topics to craft your custom quiz, focusing on what matters most with our future-proof resource!

        </motion.p>
          <motion.a
        href="#register"
        className="ai-button"
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(119, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
       Start Quize
      </motion.a>

      {/* Secondary Link */}
      <motion.a
        href="#resources"
        className="ai-link"
        whileHover={{ scale: 1.05, textShadow: "0 0 12px #4facfe" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
       Register (It's Free) 
      </motion.a>
        

<div className="image-disp">
      <FullImage
        src="https://cdn.nailib.com/_next/static/media/ib-past-papers.60e92811.png?w=3840&q=75"
        alt="IB Past Papers"
        
       
      />
    </div>
   <div className="head-title">
        <h2 className="inline-block text-1xl md:text-1xl font-bold">
          <span className="type text-nowrap">
         5,912+ IB Notes, Score Like A Pro
          </span>
          <span className="caret"></span>
        </h2>
      </div>
        <motion.p
        className="motion-paragraph font-bold" style={{fontSize:"2rem"}}
        >
        IB notes with real-world examples and advanced search features. Pair it with our videos and you can completely bypass your IB textbooks, and pave your way to a perfect IB score with our efficient, organized resources.

        </motion.p>
          <motion.a
        href="#register"
        className="ai-button"
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(119, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      Read Now
      </motion.a>

      {/* Secondary Link */}
      <motion.a
        href="#resources"
        className="ai-link"
        whileHover={{ scale: 1.05, textShadow: "0 0 12px #4facfe" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
       Register (It's Free) 
      </motion.a>
        

<div className="image-disp">
      <FullImage
        src="https://cdn.nailib.com/_next/static/media/ib-notes.fdefc973.png?w=3840&q=75"
        alt="IB Past Papers"
      />
    </div>
     <div className="head-title">
        <h2 className="inline-block text-1xl md:text-1xl font-bold">
          <span className="type text-nowrap">
        53,434+ IB Flashcards, Flip to score
          </span>
          <span className="caret"></span>
        </h2>
      </div>
        <motion.p
        className="motion-paragraph font-bold" style={{fontSize:"2rem"}}
        >
       Nail IB provides you with the world's best IB Flashcard generator, allows filtering by chapter, topics, and difficulty levels. This ensures that you grasp and retain crucial concepts, paving your way to excel in your upcoming IB exams!
        </motion.p>
          <motion.a
        href="#register"
        className="ai-button"
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(119, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      Start Flipinn
      </motion.a>

      {/* Secondary Link */}
      <motion.a
        href="#resources"
        className="ai-link"
        whileHover={{ scale: 1.05, textShadow: "0 0 12px #4facfe" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
       Register (It's Free) 
      </motion.a>
        
<div className="image-disp">
      <FullImage
        src="https://cdn.nailib.com/_next/static/media/ib-flashcards.227e0b5a.png?w=3840&q=75"
        alt="IB Past Papers"
      />
    </div>
     <div className="head-title">
        <h2 className="inline-block text-1xl md:text-1xl font-bold">
          <span className="type text-nowrap">
        339+ Graded IA/EE Examples
          </span>
          <span className="caret"></span>
        </h2>
      </div>
        <motion.p
        className="motion-paragraph font-bold" style={{fontSize:"2rem"}}
        >
      Excel in your IAs and EEs with Nail IB’s free high-quality IA and EE examples, showcasing both excellent and improvable examples to guide your submissions like a pro!
        </motion.p>
          <motion.a
        href="#register"
        className="ai-button"
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(119, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      Read Now
      </motion.a>

      {/* Secondary Link */}
      <motion.a
        href="#resources"
        className="ai-link"
        whileHover={{ scale: 1.05, textShadow: "0 0 12px #4facfe" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
       Register (It's Free) 
      </motion.a>
        <div className="image-disp">
      <FullImage
        src="https://cdn.nailib.com/_next/static/media/ib-ia-ee-examples-samples.0fd06f93.svg?w=3840&q=75"
        alt="IB Past Papers"
      />
    </div>
    <div className="guide-class">
      <GuidePromo/>
    </div>
   <div className="head-title">
        <h2 className="inline-block text-1xl md:text-1xl font-bold">
          <span className="type text-nowrap">Featured Stories</span>
          <span className="caret"></span>
        </h2>
      </div>
      <MultiCardCarousel />
    <RegisterBanner/>
   <Footer />
   
    </div>
     

    
  );
}
