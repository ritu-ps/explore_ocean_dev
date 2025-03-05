const introduction = `
    <p>The ocean covers over 70% of our planet, yet much of it remains unexplored and shrouded in mystery.</p>

<p>Beneath the waves  lies a world that has captivated scientists, explorers, and storytellers for centuries.</p>
<p>From hidden ecosystems to shipwrecks, there's a treasure trove of secrets waiting to be discovered beneath the surface of the sea!</p>
`;

const languages = [
    {
        name: "The Uncharted Depths",
        description:"While we know more about the surface of the Moon than the depths of our oceans, the underwater world remains one of Earth's last frontiers. The deep ocean, particularly the regions beyond 200 meters, is often dark and freezing, with immense pressure that makes exploration challenging.Despite these obstacles, advances in technology have allowed us to explore some of the most remote parts of the ocean floor, revealing breathtaking creatures and formations.",
    
    },
    {
        name: "Shipwrecks and Lost Cities",
        description: "One of the most fascinating mysteries of the ocean is the numerous shipwrecks and lost civilizations hidden beneath the waves. From the infamous Titanic to ancient sunken cities like Atlantis, the ocean holds secrets of past human activity.Archaeologists and marine biologists have spent years studying these underwater ruins, piecing together history that was once lost to time. In many cases, these sites offer a glimpse into the lives of those who lived centuries ago.",
    },
    {
        name: "Strange Creatures and Ecosystems",
        description: "The ocean is also home to some of the strangest creatures on Earth. Many of these deep-sea organisms are bioluminescent, capable of producing light in the dark depths of the ocean. This ability allows them to navigate through pitch-black waters, attract mates, or lure prey, creating an eerie yet beautiful glow in the abyss.The deep sea is so vast and dark that many of these creatures live in environments where no natural light ever reaches, forcing them to evolve in incredible ways to survive.Others have adapted to extreme conditions, such as underwater volcanoes or the cold, high-pressure zones at the ocean floor. Some species, like the giant tube worms near hydrothermal vents, thrive in water that would be inhospitable to most life on Earth. These ecosystems are sustained by chemosynthesis, where bacteria convert chemicals from the vents into energy, forming the foundation of an entire food chain.",
    },
    {
        name: "The Search for New Discoveries",
        description: "With new technologies such as underwater drones, sonar mapping, and submersibles, marine scientists are constantly uncovering new information about the ocean. The recent discovery of underwater caves, new species, and even lost shipwrecks shows just how much there is still to learn.As we continue to dive deeper into the mystery beneath the waves, we are reminded of the vastness of our planet and the endless possibilities for discovery.The ocean's depths will continue to hold secrets for generations to come. While we have made significant strides in exploring this hidden world, there is still so much left to uncover. Whether it's the discovery of new life forms, ancient shipwrecks, or entire ecosystems, the mystery beneath the waves will always be a source of fascination and inspiration for those who dare to dive into its depths!",
    },
];
const introContainer = document.querySelector(".intro-container");
const languagesList = document.querySelector(".languages-list");

introContainer.insertAdjacentHTML("beforeend", introduction);

languages.forEach((language) => {
    const languageHTML = `
        <div class="language">
            <h3>${language.name}</h3>
            <p>${language.description}</p>
            <p>Learn ${language.name} on YouTube: <a href="${language.learningLink}" target="_blank">Watch Now</a></p>
        </div>
    `;
    languagesList.insertAdjacentHTML("beforeend", languageHTML);
});