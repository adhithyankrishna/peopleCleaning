import "../styles/Jobs.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import kitchen from "../asset/images/kitchen.jpg";
import bedroom from "../asset/images/bedroom.jpg";
import house from "../asset/images/housecleaning.jpg";
import yellow from "../asset/images/yellowtile.jpeg";
import daily from "../asset/images/dailycleaning.jpg";
import stain from "../asset/images/stainremovel.jpg";

const cards = [
  {
    title: "Deep Kitchen Clean",
    image: kitchen,
    content: (
      <div>
        <p>
          Tired of dust bunnies and cluttered rooms? Our deep room cleaning
          service brings back the fresh and organized feel of your space. We'll:
        </p>
        <ul>
          <li>
            Remove dust and cobwebs: Pay special attention to high corners,
            baseboards, and furniture surfaces.
          </li>
          <li>
            Vacuum carpets and rugs: Thoroughly remove dust, dirt, and allergens
            from carpets and upholstered furniture.
          </li>
          <li>
            Wipe down furniture and surfaces: Disinfect and polish tables,
            chairs, shelves, and other surfaces.
          </li>
          <li>
            Clean windows and mirrors: Remove dust, fingerprints, and smudges,
            leaving a clear and bright view.
          </li>
          <li>
            Organize and tidy: Straighten belongings, put things back in their
            place, and give your room a fresh, organized look.
          </li>
        </ul>
      </div>
    ),
    id: 1,
  },
  {
    title: "Deep Room Clean",
    image: bedroom,
    content: (
      <div>
        <p>
          Bathroom tiles and floors can suffer from soap scum, hard water
          stains, and discoloration. Our specialized service tackles these
          problems, restoring the beauty and hygiene of your bathroom. We'll:
        </p>
        <ul>
          <li>
            Deep clean tile surfaces: Use appropriate cleaners and scrubbing
            techniques to remove soap scum, hard water stains, and mildew from
            tile walls and floors.
          </li>
          <li>
            Banish yellowed floors: Employ safe but effective methods to remove
            yellowing from bathroom floors, restoring their original color and
            shine. (Important Note: We avoid harsh acidic cleaners whenever
            possible, prioritizing eco-friendly solutions and safety.)
          </li>
          <li>
            Clean and disinfect fixtures: Disinfect toilets, sinks, bathtubs,
            and showers, ensuring a hygienic and safe bathroom environment.
          </li>
          <li>
            Remove mold and mildew: Address any existing mold or mildew growth
            with safe and effective solutions.
          </li>
        </ul>
      </div>
    ),
    id: 2,
  },
  {
    title: "Bathroom Tile & Yellow Floor Revival",
    image: yellow,
    content: (
      <div>
        <p>
          Spills and stains happen, but they don't have to leave a permanent
          mark on your surfaces. Our experienced cleaners are equipped to tackle
          a variety of stains, from common culprits like coffee and wine to more
          stubborn paint or pet accidents. We'll:
        </p>
        <ul>
          <li>
            Identify the stain: Properly identifying the source of the stain
            allows us to select the most effective cleaning method.
          </li>
          <li>
            Pre-treat the stain: Applying the appropriate pre-treatment solution
            can significantly improve stain removal success.
          </li>
          <li>
            Use safe and effective cleaning products: We utilize
            professional-grade cleaning products that are safe for your surfaces
            and your health.
          </li>
          <li>
            Employ proper cleaning techniques: Our team uses specific techniques
            depending on the type of stain and surface, maximizing the chances
            of complete removal.
          </li>
        </ul>
      </div>
    ),
    id: 3,
  },
  {
    title: "Stain Removal Expertise",
    image: stain,
    content: (
      <div>
        <p>
          Maintaining a clean and organized environment is key for both homes
          and workplaces. Our daily cleaning and facility management services
          ensure a consistently fresh and sanitary space. We can provide:
        </p>
        <ul>
          <li>
            Sweeping and mopping of floors: Remove dust, dirt, and debris to
            maintain a clean walking surface.
          </li>
          <li>
            Emptying trash cans: Ensure proper hygiene by removing waste and
            replacing liners.
          </li>
          <li>
            Dusting furniture and surfaces: Prevent dust buildup and maintain a
            polished look throughout the space.
          </li>
          <li>
            Wiping down countertops and appliances: Disinfect surfaces to
            prevent the spread of germs, especially in kitchens and bathrooms.
          </li>
          <li>
            Organizing common areas: Keep shared spaces tidy and clutter-free,
            enhancing the overall appearance and functionality.
          </li>
          <li>
            Additional services: We can tailor our services to your specific
            needs, such as window cleaning, plant care, or restroom restocking.
          </li>
        </ul>
      </div>
    ),
    id: 4,
  },
  {
    title: "Daily Cleaning & Facility Management",
    image: daily,
    content: (
      <div>
        <p>
          Don't let cleaning chores take away from your precious time. Our house
          cleaning services provide a comprehensive solution for maintaining a
          clean and comfortable home. We can offer:
        </p>
        <ul>
          <li>
            Thorough dusting and wiping of surfaces: Remove dust, dirt, and
            grime from all surfaces, including furniture, countertops, and
            appliances.
          </li>
          <li>
            Vacuuming and mopping of floors: Clean floors to remove dust, dirt,
            and allergens, leaving them fresh and spotless.
          </li>
          <li>
            Cleaning and disinfecting bathrooms: Ensure bathrooms are thoroughly
            cleaned and disinfected to maintain hygiene and prevent the spread
            of germs.
          </li>
          <li>
            Kitchen cleaning: Clean and sanitize kitchen surfaces, appliances,
            and sinks to ensure a clean and safe food preparation area.
          </li>
          <li>
            Bedroom cleaning: Make beds, dust furniture, and tidy up bedrooms to
            create a relaxing and inviting atmosphere.
          </li>
          <li>
            Customized cleaning plans: Tailor our services to meet your specific
            cleaning needs and preferences.
          </li>
        </ul>
      </div>
    ),
    id: 5,
  },
  {
    title: "House Cleaning Made Easy",
    image: house,
    content: (
      <div>
        <p>
          Whether you need a one-time deep cleaning or regular maintenance, our
          professional cleaning services make house cleaning easy and
          hassle-free. We'll take care of:
        </p>
        <ul>
          <li>
            Dusting and wiping down surfaces: Remove dust, dirt, and grime from
            all surfaces, including furniture, countertops, and fixtures.
          </li>
          <li>
            Vacuuming and mopping floors: Clean floors to remove dust, dirt, and
            allergens, leaving them clean and sparkling.
          </li>
          <li>
            Cleaning bathrooms and kitchens: Thoroughly clean and disinfect
            bathrooms and kitchens to ensure a hygienic environment.
          </li>
          <li>
            Making beds and tidying bedrooms: Straighten up bedrooms and make
            beds for a neat and inviting space.
          </li>
          <li>
            Customized cleaning plans: Tailor our services to meet your unique
            cleaning needs and schedule.
          </li>
          <li>
            Flexible scheduling: Choose a cleaning schedule that works for you,
            whether it's weekly, bi-weekly, monthly, or a one-time service.
          </li>
        </ul>
      </div>
    ),
    id: 6,
  },
];

const Card = ({ card }) => {
  return (
    <div className="card-cont">
      <div
        key={card.id}
        className="jobs-card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div  className="jobs-content">
          <h1 className="job-card-title">{card.title}</h1>
          <p className="job-card-content">{card.content}</p>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="jobs">
      <div className="jobs-container">
        <motion.div style={{ x }} className="motiondiv">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Jobs;
