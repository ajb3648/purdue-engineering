// Data for Purdue Innovations and Alumni
const data = [
    {
        id: 7,
        name: "The SHIFT Bicycle",
        subtitle: "Revolutionary Design by Scott Shim",
        image: "shim-bike.jpg",        // The Bike Image
        creatorImage: "scott-shim.jpg", // The Professor Image
        description: "In 2005, Purdue Industrial Design Professor Scott Shim and students Matt Grossman and Ryan Lightbody designed 'SHIFT,' a revolutionary bicycle for children. Unlike training wheels, which just prevent tipping, this bike shifts its rear wheels inward as the child gains speed, turning from a tricycle into a bicycle. This design allows children to learn balance naturally while riding.",
        fact: "The design beat out 853 entrants from 56 countries to win the $15,000 first prize at the International Bicycle Design Competition in Taiwan."
    },
    {
        id: 1,
        name: "Neil Armstrong",
        subtitle: "The First Man on the Moon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/320px-Neil_Armstrong_pose.jpg", 
        description: "A 1955 graduate of Purdue Aeronautical Engineering, Neil Armstrong made history on July 20, 1969, as the commander of Apollo 11. He was the first human to step onto the lunar surface, famously declaring, 'That's one small step for man, one giant leap for mankind.' Purdue is often called the 'Cradle of Astronauts' largely due to his legacy.",
        fact: "Purdue's Armstrong Hall of Engineering is named in his honor and features a statue of him as a student."
    },
    {
        id: 2,
        name: "Charles Alton Ellis",
        subtitle: "Designer of the Golden Gate Bridge",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/640px-GoldenGateBridge-001.jpg", 
        description: "While Joseph Strauss often gets the credit, it was Purdue Professor of Civil Engineering Charles Alton Ellis who performed the complex mathematical calculations that made the Golden Gate Bridge possible. He designed the bridge's iconic suspension system but was uncredited for decades until recent history corrected the record.",
        fact: "Ellis did the structural design for the bridge while he was a faculty member at Purdue."
    },
    {
        id: 3,
        name: "Elwood Mead",
        subtitle: "The Mastermind of the Hoover Dam",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hoover_Dam_-_arizona_side_flood_level_measure.jpg/320px-Hoover_Dam_-_arizona_side_flood_level_measure.jpg",
        description: "Elwood Mead, a Purdue alumnus (Class of 1882), was the Commissioner of the Bureau of Reclamation and oversaw the construction of the Hoover Dam. He was a pioneer in irrigation engineering and water law in the American West.",
        fact: "Lake Mead, the massive reservoir created by the Hoover Dam, is named in his honor."
    },
    {
        id: 4,
        name: "Lillian Gilbreth",
        subtitle: "Mother of Modern Management",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lillian_Moller_Gilbreth.jpg/320px-Lillian_Moller_Gilbreth.jpg",
        description: "Purdue's first female engineering professor, Lillian Gilbreth was a pioneer in industrial engineering and psychology. She invented concepts to improve efficiency in both factories and home kitchens (like the 'work triangle'). She is often referred to as the 'First Lady of Engineering'.",
        fact: "Her life inspired the book and movie 'Cheaper by the Dozen'."
    },
    {
        id: 5,
        name: "R. Games Slayter",
        subtitle: "Father of Fiberglass",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Fiberglass_insulation.jpg/320px-Fiberglass_insulation.jpg",
        description: "A 1921 Chemical Engineering graduate, Slayter is credited with inventing the process to mass-produce glass wool, which led to the creation of fiberglass. This material revolutionized insulation, construction, and manufacturing industries worldwide.",
        fact: "Slayter held over 90 patents and served on Purdue's Board of Trustees."
    },
    {
        id: 6,
        name: "Talking Concrete",
        subtitle: "Modern Innovation by Dr. Luna Lu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Concrete_aggregate.jpg/320px-Concrete_aggregate.jpg",
        description: "Purdue Civil Engineering Professor Luna Lu developed 'intelligent' concrete sensors that can communicate their strength and hydration levels to engineers in real-time. This allows construction crews to know exactly when roads are safe to open, saving millions in tax dollars and preventing potholes.",
        fact: "This technology was named one of TIME Magazine's Best Inventions of the year."
    }
];

function loadList() {
    const listContainer = document.getElementById('list-view');
    listContainer.innerHTML = ''; 

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => showDetail(item.id);

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>${item.subtitle}</p>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

function showDetail(id) {
    const item = data.find(i => i.id === id);
    
    // Fill in text
    document.getElementById('detail-title').innerText = item.name;
    document.getElementById('detail-subtitle').innerText = item.subtitle;
    document.getElementById('detail-description').innerText = item.description;
    document.getElementById('detail-fact').innerText = item.fact;
    
    // Set Main Image
    document.getElementById('detail-image-main').src = item.image;

    // Handle Creator Image (Only show if it exists)
    const creatorImg = document.getElementById('detail-image-creator');
    const creatorContainer = document.getElementById('creator-container');

    if (item.creatorImage) {
        creatorImg.src = item.creatorImage;
        creatorContainer.classList.remove('hidden');
    } else {
        creatorContainer.classList.add('hidden');
    }

    // Toggle Views
    document.getElementById('list-view').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');
    document.getElementById('home-btn').classList.remove('hidden');
    
    window.scrollTo(0, 0);
}

function showHome() {
    document.getElementById('list-view').classList.remove('hidden');
    document.getElementById('detail-view').classList.add('hidden');
    document.getElementById('home-btn').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', loadList);