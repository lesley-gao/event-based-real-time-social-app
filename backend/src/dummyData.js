const randomEvents =
    [
        {
            "title": "Yoga Class at Auckland War Memorial Museum",
            "description": "Join us for a rejuvenating yoga class in the peaceful surroundings of the Auckland War Memorial Museum. Enhance your well-being and find inner peace amidst art and history.",
            "address": {
                "detailed_address": "The Auckland Domain, Parnell, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8521,
                    "lng": 174.7694
                }
            },
            "tags": [
                "Health & Wellness",
                "Arts & Culture"
            ],
            "imageUrl": "Yoga_Class.png"
        },
        {
            "title": "Soccer Tournament at Victoria Park",
            "description": "Compete in our exciting soccer tournament at Victoria Park. Gather your team and showcase your skills in a friendly yet competitive atmosphere.",
            "address": {
                "detailed_address": "Victoria Park, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8472,
                    "lng": 174.7659
                }
            },
            "tags": [
                "Sports & Recreation"
            ],
            "imageUrl": "Soccer_Tournament_at_Victoria_Park.png"
        },
        {
            "title": "Live Music at Queen Street",
            "description": "Experience the vibrant music scene of Auckland with live performances along Queen Street. Tap your feet to the rhythm of diverse musical genres.",
            "address": {
                "detailed_address": "Queen St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8486,
                    "lng": 174.7643
                }
            },
            "tags": [
                "Music & Concerts"
            ],
            "imageUrl": "Live_Music_at_Queen_Street.png"
        },
        {
            "title": "Food Festival at Wynyard Quarter",
            "description": "Indulge in a culinary adventure at the Wynyard Quarter Food Festival. Explore a variety of delicious cuisines and savor gourmet delights from local chefs.",
            "address": {
                "detailed_address": "Wynyard Quarter, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8423,
                    "lng": 174.7672
                }
            },
            "tags": [
                "Food & Drink"
            ],
            "imageUrl": "Food_Festival_at_Wynyard_Quarter.png"
        },
        {
            "title": "Entrepreneurship Workshop at GridAKL",
            "description": "Empower yourself with valuable skills and insights at our entrepreneurship workshop hosted at GridAKL. Learn from successful entrepreneurs and network with like-minded individuals.",
            "address": {
                "detailed_address": "101 Pakenham St W, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8447,
                    "lng": 174.7451
                }
            },
            "tags": [
                "Business & Networking",
                "Technology & Innovation"
            ],
            "imageUrl": "Entrepreneurship_Workshop_at_GridAKL.png"
        },
        {
            "title": "Children's Storytime at Auckland Central Library",
            "description": "Ignite your child's imagination with captivating stories at our children's storytime event at Auckland Central Library. Foster a love for reading and creativity in a welcoming environment.",
            "address": {
                "detailed_address": "44-46 Lorne St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8509,
                    "lng": 174.7648
                }
            },
            "tags": [
                "Family & Education",
                "Arts & Culture"
            ],
            "imageUrl": "Children's_Storytime_at_Auckland_Central_Library.png"
        },
        {
            "title": "Tech Talk at Auckland University",
            "description": "Stay updated on the latest trends in technology with our informative tech talk at Auckland University. Engage in discussions and gain insights from industry experts.",
            "address": {
                "detailed_address": "24 Princes St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8503,
                    "lng": 174.7685
                }
            },
            "tags": [
                "Technology & Innovation"
            ],
            "imageUrl": "Tech_Talk_at_Auckland_University.png"
        },
        {
            "title": "Fashion Show at Britomart",
            "description": "Witness the latest trends and styles at our glamorous fashion show in the heart of Britomart. Discover unique designs from local and international designers.",
            "address": {
                "detailed_address": "Britomart Pl, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8442,
                    "lng": 174.7687
                }
            },
            "tags": [
                "Fashion & Beauty"
            ],
            "imageUrl": "Fashion_Show_at_Britomart_png.png"
        },
        {
            "title": "Community Clean-Up Day at Western Springs Park",
            "description": "Join hands with fellow community members for a rewarding clean-up day at Western Springs Park. Help preserve the beauty of our natural environment.",
            "address": {
                "detailed_address": "Western Springs Park, Western Springs, Auckland 1022, New Zealand",
                "location": {
                    "lat": -36.8761,
                    "lng": 174.7217
                }
            },
            "tags": [
                "Community",
                "Health & Wellness"
            ],
            "imageUrl": "Community_CleanUp_Day_at_Western_Springs_Park.png"
        },
        {
            "title": "Parent-Child Pottery Workshop at Ponsonby Central",
            "description": "Bond with your child while unleashing your creativity in our parent-child pottery workshop at Ponsonby Central. Create beautiful ceramic pieces together and cherish the memories.",
            "address": {
                "detailed_address": "136-138 Ponsonby Rd, Ponsonby, Auckland 1011, New Zealand",
                "location": {
                    "lat": -36.8572,
                    "lng": 174.7467
                }
            },
            "tags": [
                "Family & Education",
                "Arts & Culture"
            ],
            "imageUrl": "ParentChild_Pottery_Workshop_at_Ponsonby_Central.png"
        },
        {
            "title": "Seniors Tai Chi Class at Albert Park",
            "description": "Improve your health and well-being with our seniors Tai Chi class at Albert Park. Experience the gentle flowing movements and find harmony between body and mind.",
            "address": {
                "detailed_address": "Princes St & Bowen Ave, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8516,
                    "lng": 174.7679
                }
            },
            "tags": [
                "Community",
                "Sports & Recreation",
                "Health & Wellness"
            ],
            "imageUrl": "Seniors_Tai_Chi_Class_at_Albert_Park.png"
        },
        {
            "title": "Māori Cultural Workshop at Auckland Art Gallery",
            "description": "Immerse yourself in the rich traditions of Māori culture with our interactive workshop at Auckland Art Gallery. Learn about Māori customs, art, and language in a welcoming environment.",
            "address": {
                "detailed_address": "Corner Kitchener and Wellesley Streets, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8513,
                    "lng": 174.7732
                }
            },
            "tags": [
                "Arts & Culture"
            ],
            "imageUrl": "Māori_Cultural_Workshop_at_Auckland_Art_Gallery.png"
        },
        {
            "title": "Chinese Calligraphy Workshop at Confucius Institute",
            "description": "Discover the art of Chinese calligraphy in our hands-on workshop at the Confucius Institute. Learn brush techniques and explore the beauty of Chinese writing.",
            "address": {
                "detailed_address": "Auckland University, 22 Princes St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8505,
                    "lng": 174.7687
                }
            },
            "tags": [
                "Arts & Culture"
            ],
            "imageUrl": "Chinese_Calligraphy_Workshop_at_Confucius _Institute.png"
        },
        {
            "title": "Family Movie Night at Silo Park",
            "description": "Gather your family for a cozy movie night under the stars at Silo Park. Enjoy a selection of family-friendly films and create lasting memories together.",
            "address": {
                "detailed_address": "Corner Beaumont and Jellicoe Streets, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8449,
                    "lng": 174.7597
                }
            },
            "tags": [
                "Family & Education",
            ],
            "imageUrl": "Family_Movie_Night.png"
        },
        {
            "title": "Senior Book Club at Auckland Central Library",
            "description": "Join our senior book club at Auckland Central Library and engage in lively discussions about literature. Share your love for reading with fellow book enthusiasts.",
            "address": {
                "detailed_address": "44-46 Lorne St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8509,
                    "lng": 174.7648
                }
            },
            "tags": [
                "Community",
                "Arts & Culture"
            ],
            "imageUrl": "Senior_Book_Club.png"
        },
        {
            "title": "Māori Language Class at Te Whare Wānanga o Tāmaki Makaurau",
            "description": "Learn the Māori language in our beginner-friendly classes at Te Whare Wānanga o Tāmaki Makaurau. Embrace the indigenous language and deepen your understanding of Māori culture.",
            "address": {
                "detailed_address": "8-14 Mount St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8513,
                    "lng": 174.7735
                }
            },
            "tags": [
                "Arts & Culture"
            ],
            "imageUrl": "Māori_Language_Class.png"
        },
        {
            "title": "Chinese Tea Ceremony at Albert Park",
            "description": "Experience the elegance of Chinese tea culture with our traditional tea ceremony at Albert Park. Savor exquisite teas and immerse yourself in centuries-old rituals.",
            "address": {
                "detailed_address": "Princes St & Bowen Ave, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8516,
                    "lng": 174.7679
                }
            },
            "tags": [
                "Arts & Culture",
                "Food & Drink"
            ],
            "imageUrl": "Chinese_Tea_Ceremony_at_Albert_Park.png"
        },
        {
            "title": "Grandparents Day Celebration at Auckland Zoo",
            "description": "Celebrate Grandparents Day with a special event at Auckland Zoo. Enjoy family-friendly activities, animal encounters, and create unforgettable memories with your loved ones.",
            "address": {
                "detailed_address": "Motions Rd, Auckland 1022, New Zealand",
                "location": {
                    "lat": -36.8676,
                    "lng": 174.7409
                }
            },
            "tags": [
                "Family & Education",
                "Community"
            ],
            "imageUrl": "Grandparents_Day_Celebration.png"
        },
        {
            "title": "Traditional Māori Weaving Workshop at Orakei Marae",
            "description": "Learn the art of traditional Māori weaving in our hands-on workshop at Orakei Marae. Discover the significance of weaving in Māori culture and create your own woven masterpiece.",
            "address": {
                "detailed_address": "59B Kitemoana St, Orakei, Auckland 1071, New Zealand",
                "location": {
                    "lat": -36.8585,
                    "lng": 174.8003
                }
            },
            "tags": [
                "Arts & Culture",
                "Fashion & Beauty"
            ],
            "imageUrl": "Traditional_Māori_Weaving_Workshop.png"
        },
        {
            "title": "Comedy Night at The Classic Comedy Club",
            "description": "Laugh the night away with top comedians at The Classic Comedy Club. Enjoy hilarious stand-up performances and good vibes.",
            "address": {
                "detailed_address": "321 Queen St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8504,
                    "lng": 174.7659
                }
            },
            "tags": [
                "Sports & Recreation"
            ],
            "imageUrl": "Comedy_Night.png"
        },
        {
            "title": "Afternoon Tea with British Flair at Cornwall Park",
            "description": "Experience the elegance of British tradition with afternoon tea at Cornwall Park. Indulge in scones, sandwiches, and a variety of teas in a picturesque setting.",
            "address": {
                "detailed_address": "Cornwall Park, Greenlane West, Auckland 1051, New Zealand",
                "location": {
                    "lat": -36.8972,
                    "lng": 174.7836
                }
            },
            "tags": [
                "Arts & Culture",
                "Food & Drink"
            ],
            "imageUrl": "Afternoon_Tea_with_British_Flair_at_Cornwall_Park.png"
        },
        {
            "title": "Rugby Match at Eden Park",
            "description": "Experience the thrill of rugby at Eden Park. Cheer for your favorite team and witness the intensity of this iconic sport.",
            "address": {
                "detailed_address": "Eden Park, Auckland 1024, New Zealand",
                "location": {
                    "lat": -36.8755,
                    "lng": 174.7445
                }
            },
            "tags": [
                "Sports & Recreation"
            ],
            "imageUrl": "Rugby_Match_at_Eden_Park.png"
        },
        {
            "title": "Karaoke Night at Shanghai Lil's",
            "description": "Unleash your inner rockstar at Karaoke Night at Shanghai Lil's. Sing your heart out and enjoy a night of musical fun with friends.",
            "address": {
                "detailed_address": "335 Karangahape Rd, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8574,
                    "lng": 174.7553
                }
            },
            "tags": [
                "Sports & Recreation"
            ],
            "imageUrl": "Karaoke_Night.png"
        },
        {
            "title": "British Pub Quiz at The Fox",
            "description": "Test your knowledge at the British Pub Quiz at The Fox. Gather your team, grab a pint, and compete for bragging rights.",
            "address": {
                "detailed_address": "85/87 Customs St W, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8448,
                    "lng": 174.7678
                }
            },
            "tags": [
                "Community",
                "Family & Education"
            ],
            "imageUrl": "British_Pub_Quiz.png"
        },
        {
            "title": "Strategic Decision-Making Workshop at Auckland Business Hub",
            "description": "Hone your strategic decision-making skills at our immersive workshop located at the Auckland Business Hub. Learn frameworks for effective problem-solving and decision analysis.",
            "address": {
                "detailed_address": "1 Queen St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8465,
                    "lng": 174.7651
                }
            },
            "tags": [
                "Business & Networking"
            ],
            "imageUrl": "Strategic_Decision-Making_Workshop_at_Auckland_Business_Hub.png"
        },
        {
            "title": "Financial Strategy Masterclass at SkyCity Hotel",
            "description": "Delve into financial strategy optimization at our masterclass hosted at the SkyCity Hotel. Learn techniques to maximize profitability and mitigate financial risks.",
            "address": {
                "detailed_address": "Victoria St & Federal St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8484,
                    "lng": 174.7639
                }
            },
            "tags": [
                "Business & Networking"
            ],
            "imageUrl": "Financial_Strategy.png"
        },
        {
            "title": "Innovation Forum at Auckland Art Gallery",
            "description": "Explore the forefront of innovation at our forum located at the Auckland Art Gallery. Discover disruptive technologies and visionary concepts shaping the future landscape.",
            "address": {
                "detailed_address": "Wellesley St E & Kitchener St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8509,
                    "lng": 174.7731
                }
            },
            "tags": [
                "Technology & Innovation",
                "Business & Networking"
            ],
            "imageUrl": "Innovation_Forum.png"
        },
        {
            "title": "Charity Gala at Auckland Town Hall",
            "description": "Join us for a glamorous evening at the Charity Gala held at the historic Auckland Town Hall. Enjoy live music, exquisite dining, and contribute to a noble cause.",
            "address": {
                "detailed_address": "Queen St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8486,
                    "lng": 174.7643
                }
            },
            "tags": [
                "Charity & Fundraising"
            ],
            "imageUrl": "Charity_Gala.png"
        },
        {
            "title": "Fundraising Concert at Aotea Square",
            "description": "Experience a night of enchanting music at the Fundraising Concert in Aotea Square. Support local artists and contribute to charitable causes.",
            "address": {
                "detailed_address": "Queen St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8486,
                    "lng": 174.7643
                }
            },
            "tags": [
                "Music & Concerts",
                "Charity & Fundraising"
            ],
            "imageUrl": "Fundraising_Concert.png"
        },
        {
            "title": "Charity Fun Run at Albert Park",
            "description": "Participate in a Charity Fun Run through the scenic Albert Park. Support a good cause while enjoying a healthy and fun activity.",
            "address": {
                "detailed_address": "Princes St & Bowen Ave, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8516,
                    "lng": 174.7679
                }
            },
            "tags": [
                "Sports & Recreation",
                "Charity & Fundraising"
            ],
            "imageUrl": "Charity_Fun_Run.png"
        },
        {
            "title": "Children's Charity Carnival at Victoria Park",
            "description": "Bring your family to the Children's Charity Carnival at Victoria Park. Enjoy games, rides, and delicious food, all for a charitable cause.",
            "address": {
                "detailed_address": "Victoria Park, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8472,
                    "lng": 174.7659
                }
            },
            "tags": [
                "Charity & Fundraising",
                "Family & Education"
            ],
            "imageUrl": "Children's_Charity_Carnival.png"
        },
        {
            "title": "Charity Comedy Show at The Classic Comedy Club",
            "description": "Laugh for a good cause at the Charity Comedy Show at The Classic Comedy Club. Enjoy hilarious performances by top comedians while supporting charity.",
            "address": {
                "detailed_address": "321 Queen St, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8504,
                    "lng": 174.7659
                }
            },
            "tags": [
                "Charity & Fundraising"
            ],
            "imageUrl": "Charity_Comedy_Show.png"
        },
        {
            "title": "Fashion Showcase at Auckland Art Gallery",
            "description": "Experience a dazzling display of the latest fashion trends at the Fashion Showcase hosted at Auckland Art Gallery. Immerse yourself in creativity and style.",
            "address": {
                "detailed_address": "Corner Kitchener and Wellesley Streets, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8513,
                    "lng": 174.7732
                }
            },
            "tags": [
                "Fashion & Beauty"
            ],
            "imageUrl": "Fashion_Showcase.png"
        },
        {
            "title": "Beauty Workshop at Viaduct Harbour",
            "description": "Learn insider beauty tips and tricks at the Beauty Workshop held at Viaduct Harbour. Discover new makeup techniques and skincare routines.",
            "address": {
                "detailed_address": "Viaduct Harbour, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8441,
                    "lng": 174.7673
                }
            },
            "tags": [
                "Fashion & Beauty"
            ],
            "imageUrl": "Beauty_Workshop.png"
        },
        {
            "title": "Fashion Photography Exhibition at Silo Park",
            "description": "Explore the artistry of fashion photography at the exhibition in Silo Park. Admire stunning images capturing beauty and style.",
            "address": {
                "detailed_address": "Corner Beaumont and Jellicoe Streets, Auckland CBD, Auckland 1010, New Zealand",
                "location": {
                    "lat": -36.8449,
                    "lng": 174.7597
                }
            },
            "tags": [
                "Fashion & Beauty",
                "Arts & Culture"
            ],
            "imageUrl": "Fashion_Photography_Exhibition.png"
        }
    ]

const TAGS_ENUM = [
    "Community",
    "Arts & Culture",
    "Sports & Recreation",
    "Music & Concerts",
    "Food & Drink",
    "Health & Wellness",
    "Business & Networking",
    "Family & Education",
    "Technology & Innovation",
    "Fashion & Beauty",
    "Charity & Fundraising"
];

const randomUser = [
    {
        "name": "John Doe",
        "display_name": "TechNinja"
    },
    {
        "name": "Emily Johnson",
        "display_name": "CodeMaster"
    },
    {
        "name": "Michael Brown",
        "display_name": "PixelPioneer"
    },
    {
        "name": "Sarah Lee",
        "display_name": "DataDiva"
    },
    {
        "name": "David Wilson",
        "display_name": "GeekGuru"
    },
    {
        "name": "Jessica Garcia",
        "display_name": "InnovationQueen"
    },
    {
        "name": "Daniel Martinez",
        "display_name": "ByteBender"
    },
    {
        "name": "Sophia Taylor",
        "display_name": "AlgorithmAlchemist"
    },
    {
        "name": "Matthew Anderson",
        "display_name": "CyberSavant"
    },
    {
        "name": "Olivia Moore",
        "display_name": "TechTinkerer"
    },
    {
        "name": "Liam Nguyen",
        "display_name": "DataDynamo"
    },
    {
        "name": "Emma Chen",
        "display_name": "CodeCraftsman"
    },
    {
        "name": "Noah Kim",
        "display_name": "TechTrailblazer"
    },
    {
        "name": "Ava Patel",
        "display_name": "InnovationIcon"
    },
    {
        "name": "James Gupta",
        "display_name": "ByteBrilliance"
    },
    {
        "name": "Sophie Martinez",
        "display_name": "AlgorithmAce"
    },
    {
        "name": "Benjamin Khan",
        "display_name": "CyberSleuth"
    },
    {
        "name": "Isabella Wong",
        "display_name": "TechTactician"
    },
    {
        "name": "Ethan Patel",
        "display_name": "DataDetective"
    },
    {
        "name": "Mia Kim",
        "display_name": "CodeConnoisseur"
    },
    {
        "name": "William Garcia",
        "display_name": "InnovationInstigator"
    },
    {
        "name": "Elijah Rodriguez",
        "display_name": "TechWhizKid"
    },
    {
        "name": "Charlotte Nguyen",
        "display_name": "CodeCraze"
    },
    {
        "name": "Alexander Patel",
        "display_name": "PixelPanda"
    },
    {
        "name": "Madison Kim",
        "display_name": "DataDazzler"
    }
];

const avatarPaths = [
    "/src/assets/avatars/avatar1.png",
    "/src/assets/avatars/avatar2.png",
    "/src/assets/avatars/avatar3.png",
    "/src/assets/avatars/avatar4.png",
    "/src/assets/avatars/avatar5.png",
    "/src/assets/avatars/avatar6.png",
    "/src/assets/avatars/avatar7.png",
    "/src/assets/avatars/avatar8.png",
    "/src/assets/avatars/avatar9.jpg",
    "/src/assets/avatars/avatar10.jpg",
    "/src/assets/avatars/avatar11.jpg",
    "/src/assets/avatars/avatar12.jpg",
    "/src/assets/avatars/avatar13.jpg",
    "/src/assets/avatars/avatar14.jpg"
];

const defaultPassowrd = "123456";
const defaultEmailDomain = "@dummy.com";

const testUsers = [{
    username: "test",
    displayName: "test",
    email: "test@dummy.com",
    password: bcrypt.hashSync("123456", 10),
    avatarPath: getRandomAvatar(),
    tags: getRandomtags()
}, {
    username: "Hippos",
    displayName: "Happy Hippos",
    email: "hippos@happy.com",
    password: bcrypt.hashSync("crazywithCS732", 10),
    avatarPath: getRandomAvatar(),
    tags: getRandomtags()
}];


function randomIntFromInterval(intInterval) {
    return Math.floor(intInterval.min + Math.random() * (intInterval.max - intInterval.min));
}

function randomDateIn24hAfter(date) {
    return new Date(date.getTime() + Math.random() * 24 * 60 * 60 * 1000);
}

function randomDateInInterval(dateInterval) {
    return new Date(dateInterval.min.getTime() + Math.floor(Math.random() * (dateInterval.max - dateInterval.min)));
}

function getRandomtags(probability = 0.3) {
    let tags = [];
    TAGS_ENUM.forEach(tag => {
        if (Math.random() < probability) {
            tags.push(tag);
        }
    });
    if (tags.includes(TAGS_ENUM[0]) === false) {
        tags.push(TAGS_ENUM[0]);
    }
    return tags;
}

function getRandomAvatar() {
    return avatarPaths[randomIntFromInterval({min: 0, max: avatarPaths.length})];
}

function getRandomItemFromList(list) {
    return list[randomIntFromInterval({min: 0, max: list.length})];
}

function getRandomShuffleList(list, length) {
    let arr = list.slice();
    let newArr = [];
    while (length) {
        var randomIndex = Math.floor(Math.random() * arr.length),
            element = arr.splice(randomIndex, 1)
        newArr.push(element[0]);
        length--;
    }
    return newArr;
}

const now = new Date();
const DateInterval = {
    min: new Date(now.getTime() - 6 * 60 * 60 * 1000), // 6 hours in the past
    max: new Date(now.getTime() + 24 * 60 * 60 * 1000)  // 24 hours in the future
}

const LikeInterval = {
    min: 5,
    max: 15
}

const AttendInterval = {
    min: 3,
    max: 8
}

import bcrypt from "bcrypt";

export default async function addRandomRecord({User, Event, Like, Attend}) {

    const usersPromises = [];

    for (const user of randomUser) {
        let newUser = new User({
            username: user.name,
            displayName: user.display_name,
            email: user.name.replace(" ", "_") + defaultEmailDomain,
            password: bcrypt.hashSync(defaultPassowrd, 10),
            avatarPath: getRandomAvatar(),
            tags: getRandomtags()
        });
        usersPromises.push(User.create(newUser).then(res => res._id));
    }

    for (const user of testUsers) {
        usersPromises.push(User.create(new User(user)).then(res => res._id));
    }

    const users = await Promise.all(usersPromises);

    console.log("Users generated successfully!")

    const eventsPromises = [];

    for (const event of randomEvents) {
        const startTime = randomDateInInterval(DateInterval);
        const endTime = randomDateIn24hAfter(startTime);
        // console.log(startTime);
        let newEvent = new Event({
            userId: getRandomItemFromList(users),
            title: event.title,
            description: event.description,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            vacancy: randomIntFromInterval({min: 10, max: 100}),
            address: {
                detailed_address: event.address.detailed_address,
                location: {
                    coordinates: [event.address.location.lng, event.address.location.lat]
                }
            },
            tags: event.tags,
            imageUrl: event.imageUrl
        });
        eventsPromises.push(Event.create(newEvent).then(res => res._id));
    }

    const events = await Promise.all(eventsPromises);

    console.log("Random events generated.");

    const likesPromises = [];

    for (const user of users) {
        const like_count = randomIntFromInterval(LikeInterval);
        const shuffle = getRandomShuffleList(events, like_count);
        for (let i = 0; i < like_count; i++) {
            likesPromises.push(Like.create({userId: user, eventId: shuffle[i]}));
        }
    }

    await Promise.all(likesPromises);

    console.log("Random Likes generated.");

    const attendsPromises = [];

    for (const user of users) {
        const attend_count = randomIntFromInterval(AttendInterval);
        const shuffle = getRandomShuffleList(events, attend_count);
        for (let i = 0; i < attend_count; i++) {
            attendsPromises.push(Attend.create({userId: user, eventId: shuffle[i]}));
        }
    }

    await Promise.all(attendsPromises);

    console.log("Dummy data generated successfully!")
}





