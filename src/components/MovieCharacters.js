import React from 'react';
import './MovieCharacters.css';
import ScrollAnimation from 'react-animate-on-scroll';
import CharcsItem from './CardsItem';
import TonyStark from '../Images/Characters/Tony-Stark.jpeg';
import PepperPotts from '../Images/Characters/Pepper-Potts.jpeg';
import Happy from '../Images/Characters/Happy-Hogan.jpeg';
import Fury from '../Images/Characters/Nick-Fury.jpeg';
import Hulk from '../Images/Characters/Bruce-Banner.jpeg';
import BlackWidow from '../Images/Characters/Black-Widow.jpeg';




function movieCharacters() {
    return (
     <div className="character-list">



         <ScrollAnimation animateIn="fadeInRight" animateOnce="true" className="character-container">
             <div className="character-info">
                <h1>Iron Man</h1>
                <h2>Tony Stark</h2>
                <p>Anthony Edward "Tony" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist. With his great wealth and exceptional technical knowledge, Stark was one of the world's most powerful men following the deaths of his parents and enjoyed the playboy lifestyle for many years until he was kidnapped by the Ten Rings in Afghanistan, while demonstrating a fleet of Jericho missiles. With his life on the line, Stark created an armored suit which he used to escape his captors. Upon returning home, he utilized several more armors to use against terrorists, as well as Obadiah Stane who turned against Stark. Stark enjoyed the fame that came with his new secret identity and decided to share it with the world, publicly revealing himself as Iron Man.
                <br /><br />
                Fresh off from defeating enemies all over the world, Stark found himself dying due to his own Arc Reactor poisoning his body, all while he was challenged by Ivan Vanko who attempted to destroy his legacy. After the Stark Expo Incident, Stark reluctantly agreed to serve as a consultant for S.H.I.E.L.D. where he used his position to upgrade their technology while he began a relationship with Pepper Potts. With the world yet again being threatened, Stark joined the Avengers and helped defeat the Chitauri and Loki. Due to the battle, he suffered from post-traumatic stress disorder, leading him to create the Iron Legion to safeguard the world and help him retire.
                <br /><br />
                The 2012 "Mandarin" terrorist attacks forced Stark to come out of retirement to protect his country, inadvertently putting his loved ones at risk and leaving him defenseless when his home was destroyed. Stark continued his mission, finding Aldrich Killian as the mastermind of the attacks. Eventually, Stark defeated Killian, and was prompted to destroy all of his armors with the Clean Slate Protocol after almost losing Potts. However, when the Avengers were officially demobilized due to the War on HYDRA, Stark built more armors and resumed his role as Iron Man, aiding them in the capture of Wolfgang von Strucker and acquiring Loki's Scepter.
                <br /><br />
                Once the threat of HYDRA had been ended, at last, Stark, influenced by Wanda Maximoff's mind games, built Ultron with the help of Bruce Banner as a new peacekeeping A.I. to protect the world and allow the Avengers to retire. However, Ultron believed that humanity threatened the world and thus, according to his program, decided to extinguish humanity. Through the work of the Avengers, Ultron was defeated, however, not without massive civilian cost and many lives being lost during which Sokovia was elevated into the sky.
                <br /><br />
                After the Ultron Offensive, Stark retired from active duty, still haunted by his role in the chaos the A.I. created. The guilt of creating Ultron and causing so much destruction and loss of life eventually convinced Stark to support the Sokovia Accords. Stark was forced to lead a manhunt for his ally Captain America when the latter began protecting the fugitive Winter Soldier, igniting the Avengers Civil War. The end result left the Avengers in complete disarray, especially after Stark learned of the Winter Soldier's role in his parents' deaths. Afterwards, Stark returned to New York to mentor and guide Spider-Man into becoming a better hero than he ever was, also becoming engaged with Potts in the process.
                <br /><br />
                In 2018, when Thanos and the Black Order invaded Earth in their conquest to acquire the six Infinity Stones, Stark, Doctor Strange, and Spider-Man convened to battle Thanos on Titan with the help of the Guardians of the Galaxy. When Stark was held at Thanos' mercy, Doctor Strange surrendered the Time Stone for Stark's life. After the Snap, Stark and Nebula remained the sole survivors on Titan. Stark and Nebula used the Benatar to escape Titan, but were stranded in space as the ship was damaged. They were rescued by Captain Marvel, who brought them back to Earth.
                <br /><br />
                In the five years after the Snap, Stark chose to retire from being Iron Man, marrying Potts and having a daughter, Morgan. When Stark devised a method to safely travel through time and space, he rejoined the Avengers in their mission to acquire the six Infinity Stones from the past in order to resurrect those killed by the Snap, and traveled back in time to retrieve the Scepter and regain the Tesseract. During the Battle of Earth, Stark sacrificed himself to eliminate an alternate version of Thanos and his army, who traveled through time to collect their Infinity Stones, saving the universe from decimation and leaving behind a legacy as one of Earth's most revered superheroes.</p>
            </div>
            <div className="character-image">
                <img className="heroPic" src={TonyStark} alt="Tony Stark" />
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" className="character-container">
            <div className="character-image">
                <img className="heroPic" src={PepperPotts} alt="Pepper Potts" />
            </div>
             <div className="character-info">
                <h1>Rescue</h1>
                <h2>Pepper Potts</h2>
                <p>Virginia "Pepper" Potts is the CEO of Stark Industries. Originally working as Tony Stark's personal assistant, she would take care of his schedule and perform any task he wished. During this time, Potts became good friends with Stark and soon, they had begun developing romantic feelings for each other. However, neither was able to act on these feelings, as they each feared that the other would not accept them.
                <br /><br />
                When Stark returned from captivity in Afghanistan, Potts was trusted enough by him to see his Iron Man suits and his workshop. She helped Stark defeat Obadiah Stane, who tried to kill Stark, by overloading the Arc Reactor, killing Stane. After Stane's death, Stark made Potts his new business partner, taking Stane's place. Believing his death was imminent, Stark stepped down as CEO and appointed her as his replacement. After Stark defeated Whiplash at the Stark Expo, both Potts and Stark finally admitted their attraction to each other and began a romantic relationship.
                <br /><br />
                During the crisis surrounding the Mandarin's terrorist attacks, Potts was kidnapped by Aldrich Killian and injected with Extremis. She was freed by Stark during the Battle on the Norco and went on to kill Killian herself. Stark cured her of the effects of Extremis, who temporarily gave up being Iron Man just for her.
                <br /><br />
                As the War on HYDRA began, the Avengers needed to be remobilized. Without S.H.I.E.L.D. active to run the team, Stark and Potts took over, allowing Captain America to retain field and team leadership while he designed everything else, including creating new armors and rejoining the team himself as an active duty combatant. Sometime after the Ultron Offensive, he and Potts broke off their relationship, which affected Stark and left him wondering why he could not make it work while his father could.
                <br /><br />
                However, shortly after the Avengers Civil War ended, Stark and Potts resumed their relationship, where Stark eventually proposed to her. The two married following the Snap and had a daughter, Morgan Stark. The three of them resided on the Stark Eco-Compound until Stark departed for the Time Heist. Later, Potts joined the Avengers in the Battle of Earth as Rescue, wearing the Mark XLIX armor, when Thanos' forces invaded. After Stark died by her side, Potts was present at his funeral, where she set adrift Stark's first Arc Reactor onto a wreath into their residential lakeside.</p>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce="true" className="character-container">
             <div className="character-info">
                <h1>Happy</h1>
                <h2>Happy Hogan</h2>
                <p>Harold Joseph "Happy" Hogan is one of Tony Stark's closest friends and his personal chauffeur who formerly worked as his personal bodyguard and Head of Security of Stark Industries. Hogan was almost killed during Aldrich Killian's War, which motivated Stark to get revenge on the Mandarin, who he believed was behind Hogan's injuries. After his recovery, Hogan continued to faithfully serve as Stark's friend and employee.
                <br /><br />
                Hogan oversaw Stark's mentorship over Spider-Man, aiding the young hero on his trip to Germany and acting as their liaison when Parker continued his superhero activities. Hogan, however, was irritated by the boy and avoided his duties with him. After Parker defeated Vulture to prevent the cargo in which Hogan kept certain valuable items to be transferred to the Avengers Compound from getting hijacked, the young hero earned Hogan's admiration and respect.
                <br /><br />
                In 2023, Hogan was present at Stark's funeral, after he died during the Battle of Earth. The grief-ridden Hogan began working with May Parker the following year, and helped Peter Parker fight the Elementals in Europe. When Parker became victim to public hostility after he was framed for murdering Mysterio, Hogan allowed him and May to use his condominium to escape the unwanted publicity. Later, Hogan would lose May to the attack done by Green Goblin, and have his memories of Peter Parker erased by Doctor Strange's spell.</p>
            </div>
            <div className="character-image">
                <img className="heroPic" src={Happy} alt="Happy Hogan" />
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" className="character-container">
            <div className="character-image">
                <img className="heroPic" src={Fury} alt="Nick Fury" />
            </div>
             <div className="character-info">
                <h1>Fury</h1>
                <h2>Nick Fury</h2>
                <p>Nicholas Joseph "Nick" Fury is a world-renowned spy, former Director of S.H.I.E.L.D. and founder of the Avengers. Fury began his career within the United States Army in the late 1960s, rising to the rank of Colonel before his honorable discharge. He later became a CIA operative during the Cold War, primarily operating in Soviet territory. Continuing to serve his country, Fury joined S.H.I.E.L.D. to fight against Earth's most dangerous enemies. The great scope of enemies widened in the 1990s as Fury met Vers, helping her uncover her human heritage as Carol Danvers, as the two fought off the Starforce, which was led by Yon-Rogg, as they were targeting Skrull refugees. Fury took a liking to Goose who scratched him for violating her space and permanently blinded Fury's left eye. Fury kept the reason for this injury secret, telling others it was classified but happened in the line of duty, while Danvers had then left the Earth in order to find a new home for the Skrulls and protect the rest of the universe.
                <br /><br />
                Later promoted to Director of S.H.I.E.L.D. by Alexander Pierce, Fury refocused his efforts over the next 15 years to organize the Avengers Initiative, with Fury's true intentions were to bring together any other powerful individuals to assist S.H.I.E.L.D. with protecting the Earth from extraterrestrial threats, which he had only learned of following his encounters with the Kree and Skrulls. Despite some more considerable reluctance from World Security Council who had not believed in his theories, Fury had still continued his efforts and eventually managed to recruit both Iron Man and Captain America into their Initiative, ready for an incoming invasion.
                <br /><br />
                With the Avengers ready, Fury was forced to call them all into action when the Earth was invaded by Loki, who managed to brainwash an army and steal the Tesseract. With the Avengers assembled, Fury took charge of the hunt for Loki, leading the volatile team through the mission as they attempted to learn what Loki's plan for the Tesseract was and who he had been working for. This all then came to a head following Loki killing Phil Coulson, before being tracked to New York City. There, all the Avengers engaged Loki and his entire incoming army of Chitauri in a final battle, with Fury keeping the World Security Council from nuking the entire city before Loki was defeated and the Avengers were disassembled.
                <br /><br />
                Following the Avengers's victory, Fury recruited Captain America as a S.H.I.E.L.D. agent, while Fury worked on the new Project Insight, as a means of accurately predicting threats; something which conflicted with Rogers' ideals. However, when Fury began to suspect that something was wrong with Project Insight, he then found himself becoming a target of the Winter Soldier, forcing Fury to fake his own death and go into hiding. With limited people he could trust, Fury then turned to Captain America along with Black Widow, the Falcon and Maria Hill to lead the fight, as he soon discovered that HYDRA had secretly managed to infiltrate S.H.I.E.L.D. and Alexander Pierce was the leader, as Captain America had also learned that the Winter Soldier was actually his friend Bucky Barnes who had been brainwashed by HYDRA for decades, following Barnes' apparent death in 1945.
                <br /><br />
                Once Fury and his allies had stopped Project Insight and also killed Pierce, Fury chose to go into hiding to continue hunting down the remaining HYDRA cells. Fury then assisted the now resurrected Phil Coulson in defeating John Garrett while also stopping his plans for Project Deathlok. Following this, Fury chose to promote Coulson to Director of S.H.I.E.L.D., telling him to rebuild it from the ground up. Fury had then also aided the Avengers during the Ultron Offensive, serving as support during the Battle of Sokovia. There, he commanded the rebuilt Helicarrier, which Coulson's new S.H.I.E.L.D. secretly worked on.
                <br /><br />
                In 2018, now operating underground with a hand-picked crew, Fury was one of the trillions of victims in the Snap but had managed to send a distress signal to Captain Marvel before his death. In 2023, Fury was resurrected by Hulk in the Blip and attended Tony Stark's funeral alongside the other Avengers after he sacrificed his life in the Battle of Earth. Fury was then made aware of Peter Parker's identity as Spider-Man and was tasked with delivering the E.D.I.T.H. glasses to him. However, deciding to take a vacation in space on Talos' flagship, Fury tasked Talos and Soren to impersonate himself and Maria Hill respectively on Earth and to deliver the glasses to Spider-Man on his behalf. After discovering that Talos and Spider-Man had been involved in a crisis in Europe, Fury decided to end his vacation and return to work.</p>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce="true" className="character-container">
             <div className="character-info">
                <h1>Hulk</h1>
                <h2>Bruce Banner</h2>
                <p>Doctor Robert Bruce Banner, M.D., Ph.D., is a renowned scientist and a founding member of the Avengers. Highly respected for his work in biochemistry, nuclear physics, and gamma radiation, Banner was commissioned by Thaddeus Ross to recreate the Super Soldier Serum that created Captain America. However, Ross elected not to inform Banner what he was creating. During the experiment, Banner was exposed to dangerous levels of gamma radiation (rather than vita radiation). As a result, the mild-mannered scientist found that when angered, provoked, or excited, his body and brain would transform into a huge, rage-fueled, primitive-minded creature known as Hulk.
                <br /><br />
                Fearful of the damage that Hulk could inflict and wishing to flee from the United States government, Banner attempted to kill himself. When the attempt failed, he chose to live a discreet life in South America while also communicating with Samuel Sterns to cure himself. However, when General Ross sent a team led by Emil Blonsky to apprehend Banner, Banner was forced to return to New York City. He recruited the help of Betty Ross and Sterns to cure him of his affliction. Banner was apprehended by the Armed Forces shortly after. However, Blonsky, who had received a variant of the Super Soldier Serum, was administered Banner's gamma-irradiated blood, transforming him into the Abomination. This new threat forced Ross to allow Banner to turn into Hulk and battle Blonsky, before allowing Banner to escape.
                <br /><br />
                Banner fled the United States and dedicated his time to aiding the sick and poor. When a mounting threat called for Banner's specialized scientific expertise, S.H.I.E.L.D. recruited him, knowing full well that the incredible strength of Banner's alter-ego would be an additional asset to the Avengers. Banner was tasked with tracking down the Tesseract, working alongside Tony Stark to achieve this. Despite almost causing a disaster when Loki's schemes caused Banner to transform into Hulk aboard the Helicarrier, Banner later joined the Avengers during the Battle of New York, assisting them in defeating Loki and his Chitauri army. Once the Avengers split up in the wake of the battle, Banner had become good friends with Stark and relocated to Avengers Tower, free to live his life without apprehension.
                <br /><br />
                In the wake of the HYDRA Uprising, the Avengers regrouped once more to battle the ever-growing threat of HYDRA, successfully capturing Wolfgang von Strucker and retaking the Scepter. In order to make it so that Earth could always be safe without constantly needing the Avengers to protect it, Banner assisted Stark with creating Ultron, an artificial intelligence. Ultron, programmed to protect Earth at all costs, deemed humanity and the Avengers as peace's greatest threat and focused on annihilating them. Banner was then enlisted by Stark to help create Vision, and was later coaxed by Black Widow into transforming into Hulk and help defeat Ultron. Following Ultron's defeat, Banner commandeered a Quinjet and left Earth, flying into space and coming across a wormhole that caused the Quinjet to crash on the alien planet of Sakaar. There, the stressful environment prevented him from returning to his human form, causing him to remain in Hulk form for two years.
                <br /><br />
                On Sakaar, Hulk became a gladiator for Grandmaster and was soon revered as a beloved champion, choosing to turn his back on Earth and enjoy the life of an admired warrior. However, when Thor arrived on the planet, Hulk fought against his old friend in the arena. In the wake of their fight, Thor informed Hulk that Asgard was under threat due to Hela's return. Eventually, Banner reemerges, agreeing to help Thor in his plight. He transforms back into Hulk and aids the Asgardians in their fight, defeating Fenris and allowing the Asgardians to board the Statesman vessel. Then, as Ragnarök was unleashed, Banner joined them on their voyage to Earth.
                <br /><br />
                On their way back to Earth, the Statesman was attacked by the Black Order, who killed half of the Asgardians. Banner challenged their leader, Thanos, who quickly defeated him. He was then teleported to the New York Sanctum by Heimdall, where Banner warned Doctor Strange, Iron Man, and later Captain America of Thanos' arrival. Finding himself no longer able to transform into Hulk, Banner operated a Hulkbuster armor to aid the Avengers in the Battle of Wakanda. Although Banner and his allies managed to kill off Thanos' forces, Thanos personally arrived in Wakanda to retrieve the Mind Stone. He effortlessly subdued Banner and the other heroes and completed the Infinity Gauntlet, wiping out half of the universe's population. Banner was one of the survivors.
                <br /><br />
                At some point after the Snap, Banner permanently merged his consciousness and Hulk into one being, which combined Hulk's raw strength and physique with Banner's mind and intelligence, becoming an adored celebrity. In 2023, he rejoined the Avengers to help them use Pym Particles and the Quantum Realm to travel through time. After traveling back to the Battle of New York in 2012, Banner successfully gained the Time Stone from the Ancient One and returned to the present. He and Rocket Raccoon helped Tony Stark design the Nano Gauntlet to contain the Stones the Avengers had collected. Banner elected to use the Stones to resurrect all the lives claimed by the Snap, injuring himself in the process. In the aftermath of the Battle of Earth, which resulted in Iron Man's death, Banner sent Captain America back in time. Shortly after, he reverted to his human form, his right arm still in a sling; however, all the scarring had healed.</p>
            </div>
            <div className="character-image">
                <img className="heroPic" src={Hulk} alt="Bruce Banner" />
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" className="character-container">
            <div className="character-image">
                <img className="heroPic" src={BlackWidow} alt="Black Widow" />
            </div>
             <div className="character-info">
                <h1>Black Widow</h1>
                <h2>Natasha" Romanoff</h2>
                <p>Natalia Alianovna "Natasha" Romanoff (Russian: Наталья Алиановна "Наташа" Романов), also known as Black Widow, was one of the most talented spies and assassins in the entire world and a founding member of the Avengers. As a child, she was indoctrinated into the Red Room by General Dreykov, and briefly lived as the surrogate daughter of Alexei Shostakov and Melina Vostokoff while they were undercover in the United States of America. After the Destruction of the North Institute, she underwent extensive psychological conditioning, before graduating from the Red Room as a Widow. Working as an operative for the KGB, she was targeted by S.H.I.E.L.D., before given the chance to ultimately defect to the organization by Clint Barton by assassinating Dreykov. Romanoff succeeded, although having to use his daughter Antonia Dreykov's life as collateral damage would haunt her for the rest of her life.
                <br /><br />
                Having extensive mastery in martial arts and armed with her Widow's Bite, Black Widow became one of S.H.I.E.L.D.'s most efficient agents. During one mission, she was sent undercover into Stark Industries to watch Tony Stark due to the fear that he was dying. During this mission, Romanoff assisted Stark with defeating Ivan Vanko's terrorist plots against him.
                <br /><br />
                When Loki declared war on the Earth, Black Widow was recruited into the Avengers after Hawkeye had just been enthralled by Loki. Romanoff assisted in recruiting Stark and Bruce Banner into the team while they tracked down and attempted to capture Loki, eventually saving Barton from his grasp. Once Loki's entire plan had been uncovered, Romanoff joined the team during the Battle of New York and was instrumental in destroying the portal over the city which had been created by the Tesseract, effectively ending the entire invasion while Loki was defeated and deported back to his homeworld by his brother Thor.
                <br /><br />
                In the wake of the Avengers successfully defeating Loki, Romanoff continued her work with S.H.I.E.L.D., this time working with Captain America. While working together, Romanoff and Rogers uncovered a conspiracy following an assassination attempt on Nick Fury, which had eventually led to them discovering that HYDRA had been infiltrating their entire organization since its foundation. Despite the efforts of the Winter Soldier to stop them, Romanoff helped expose Alexander Pierce's evil schemes to the world, which also resulted in all of her own morally dubious history being revealed. As a result, Romanoff was forced into dropping off the grid again and began rebuilding her cover.
                <br /><br />
                Romanoff eventually rejoined the Avengers, working to bring down various HYDRA cells across the world and assisting in the capture of Wolfgang von Strucker. However, before she could form a romantic relationship with Banner, the rogue artificial intelligence Ultron was created by him and Stark, forcing Romanoff and the rest of their team to join together and defeat him. Despite being captured, Romanoff was able to inform the team of Ultron's location on Sokovia, resulting in a final battle in which the Avengers had defeated Ultron once and for all, though Banner fled into self-exile. Along with Captain America, Black Widow remained a member while forming the second incarnation of the team.
                <br /><br />
                As many of the world governments demanded the Avengers to sign the Sokovia Accords in the wake of their recent battles, Romanoff agreed to their terms and signed the Accords. She later joined Iron Man in a fight against Captain America due to his disagreements with the Accords and his criminal activities with the Winter Soldier who Rogers was attempting to protect. As the two Avengers' factions fought against each other, Romanoff betrayed Iron Man's team to assist Captain America in finding the one incriminating the Winter Soldier, inherently violating the Sokovia Accords.
                <br /><br />
                As a result, the fugitive Romanoff worked with Rick Mason to escape the government for aiding Rogers. In the process, Romanoff intercepted messages from her former surrogate sister Yelena Belova about the Red Room's resurgence. In possession of the Red Dust, Romanoff and Belova were relentlessly pursued by Taskmaster, who worked for Dreykov, who was believed to have been killed. Reuniting with her surrogate parents, they worked together to bring down the Red Room once and for all. Upon learning Taskmaster was actually Antonia, who had survived all these years but was mind-controlled by Dreykov, Romanoff freed her from Dreykov's enthrallment, and put an end to Dreykov's plans for world domination. Romanoff soon joined Rogers in freeing the incarcerated Avengers.
                <br /><br />
                With the Avengers broken up, Romanoff, Rogers and Wilson went on the run for two years as international fugitives, working alone to stop terrorist cells in Syria. When the threat of Thanos approached Earth, Romanoff, Rogers, and Wilson protected Vision, who had the Mind Stone, which Thanos was after. They later defended Wakanda from the attack, but were ultimately defeated when Thanos destroyed half of all life with the Infinity Gauntlet, where Romanoff emerged as one of the survivors. Romanoff was part of the Ambush on Thanos in an effort to retrieve the Infinity Stones and undo the Titan's snap, with no success.
                <br /><br />
                Five years later, Romanoff led the Avengers alongside Captain America, now formed by Okoye, Rocket Raccoon, Nebula, War Machine, and Captain Marvel. With an opportunity to undo the Snap presented by Ant-Man, the remaining Avengers split up into teams to retrieve all Infinity Stones from several alternate timelines in the Time Heist. Sent to retrieve the Soul Stone on Vormir with Barton, Romanoff, against Barton's insistence, willingly jumped off the Vormir mountains into the abyss below, sacrificing herself in the process in order to obtain the Soul Stone for the Avengers.

                </p>
            </div>
        </ScrollAnimation>





     </div>


    )
    }
export default movieCharacters