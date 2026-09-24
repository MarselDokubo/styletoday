export type Credit = {
  role: string;
  name: string;
  handle?: string;
};

export type Article = {
  slug: string;
  title: string;
  kicker: string;
  dek: string;
  category: string;
  author: string;
  date: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
  portraitImage?: string;
  gallery?: Array<{ src: string; alt: string }>;
  featured?: boolean;
  body: string[];
  credits?: Credit[];
  quote?: string;
};

export const articles: Article[] = [
{
    "slug": "nook-faces-2026",
    "title": "Nook Unveils the New Faces of 2026",
    "kicker": "Fashion News",
    "dek": "Uranta Godswill and Peace-Joyer Thompson are named the Faces of Nook at Nook International Fashion Weekend 2026.",
    "category": "News",
    "author": "Style Today",
    "date": "2026-03-07",
    "dateLabel": "7 March 2026",
    "image": "/images/new-content/nook-faces-2026/01.webp",
    "imageAlt": "Uranta Godswill and Peace-Joyer Thompson, Faces of Nook 2026",
    "body": [
        "At the Nook International Fashion Weekend 2026, Uranta Godswill and Peace-Joyer Thompson were named the Faces of Nook.",
        "This recognition reflects their consistency, discipline, professionalism, and the standard they carry both on and off the runway. They were selected not just for performance, but for their work ethic, character, and commitment to growth.",
        "This is what dedication looks like."
    ]
},
{
    "slug": "nigerian-celebrities-festive-style",
    "title": "Nigerian Celebrities Serving Festive Style and Cuteness",
    "kicker": "Celebrity Style",
    "dek": "Christmas dressing with polish, personality and an easy sense of festive play.",
    "category": "Style",
    "author": "Style Today",
    "date": "2025-12-25",
    "dateLabel": "25 December 2025",
    "image": "/images/new-content/nigerian-celebrities-festive-style/18.webp",
    "imageAlt": "Style Today festive celebrity style feature",
    "gallery": [
        {
            "src": "/images/new-content/nigerian-celebrities-festive-style/01.webp",
            "alt": "Nigerian celebrity festive style — image 1"
        },
        {
            "src": "/images/new-content/nigerian-celebrities-festive-style/03.webp",
            "alt": "Nigerian celebrity festive style — image 2"
        },
        {
            "src": "/images/new-content/nigerian-celebrities-festive-style/06.webp",
            "alt": "Nigerian celebrity festive style — image 3"
        },
        {
            "src": "/images/new-content/nigerian-celebrities-festive-style/08.webp",
            "alt": "Nigerian celebrity festive style — image 4"
        },
        {
            "src": "/images/new-content/nigerian-celebrities-festive-style/10.webp",
            "alt": "Nigerian celebrity festive style — image 5"
        },
        {
            "src": "/images/new-content/nigerian-celebrities-festive-style/13.webp",
            "alt": "Nigerian celebrity festive style — image 6"
        },
        {
            "src": "/images/new-content/nigerian-celebrities-festive-style/15.webp",
            "alt": "Nigerian celebrity festive style — image 7"
        },
        {
            "src": "/images/new-content/nigerian-celebrities-festive-style/19.webp",
            "alt": "Nigerian celebrity festive style — image 8"
        }
    ],
    "body": [
        "Nigerian celebrities stepped into Christmas serving fashion with ease and a softness that felt personal. From relaxed luxury to playful details, the pictures reminded us that festive style does not have to try too hard. It was all polish, personality and a little cuteness for the season."
    ]
},
{
    "slug": "ihe-amuru-nime-ohia",
    "title": "Ihe Amuru N’ime Ohia",
    "kicker": "Editorial",
    "dek": "A visual story about beauty, survival and the ability to bloom from difficult ground.",
    "category": "Culture",
    "author": "Uju Omaku",
    "date": "2025-10-25",
    "dateLabel": "25 October 2025",
    "image": "/images/new-content/ihe-amuru-nime-ohia/03.webp",
    "imageAlt": "Ihe Amuru N’ime Ohia fashion editorial",
    "gallery": [
        {
            "src": "/images/new-content/ihe-amuru-nime-ohia/01.webp",
            "alt": "Ihe Amuru N’ime Ohia editorial — image 1"
        },
        {
            "src": "/images/new-content/ihe-amuru-nime-ohia/02.webp",
            "alt": "Ihe Amuru N’ime Ohia editorial — image 2"
        },
        {
            "src": "/images/new-content/ihe-amuru-nime-ohia/04.webp",
            "alt": "Ihe Amuru N’ime Ohia editorial — image 3"
        },
        {
            "src": "/images/new-content/ihe-amuru-nime-ohia/05.webp",
            "alt": "Ihe Amuru N’ime Ohia editorial — image 4"
        },
        {
            "src": "/images/new-content/ihe-amuru-nime-ohia/06.webp",
            "alt": "Ihe Amuru N’ime Ohia editorial — image 5"
        },
        {
            "src": "/images/new-content/ihe-amuru-nime-ohia/07.webp",
            "alt": "Ihe Amuru N’ime Ohia editorial — image 6"
        },
        {
            "src": "/images/new-content/ihe-amuru-nime-ohia/08.webp",
            "alt": "Ihe Amuru N’ime Ohia editorial — image 7"
        }
    ],
    "body": [
        "“Ihe amuru n’ime ohia” (Igbo) translates to “something born in the wild.”",
        "“It’s a reflection of the tough and wild place we come from that still has its beauty and sanity, and we’ve been able to make something out of it.” — Owi",
        "“Just like a lily growing amazingly on rocky grounds.” — Uche",
        "This project, shot by DARE SHALOM (Metallic), styled by OWI VICTOR with muse GODWIN UCHE, not only talks about the jungle one is born into but also reflects the ability to adapt and bring out the best of one’s self with little to no resources. The ability to defy all odds and stand at the top, like they were born for it.",
        "I call him OBIAGÉRI — because he’s one who has come to enjoy.",
        "The SET DESIGN done by OWI VICTOR was inspired by the various African culture with vintage aesthetic. He called it a garden in an art space.",
        "The OUTFIT was a mix of western and Nigerian roots.",
        "JEWELLERIES (pearls and gold) stood to outline how precious one is, highlighting wealth and status.",
        "The CURRENCIES used as a pocket filler was also a nod to success.",
        "For the photography, the lighting technique adopted was to create a mood of solitude portraying the day-to-day experience in Nigeria, and showing how, like a “lily growing amazingly in rocky ground,” the model blooms beautifully in the pictures."
    ]
},
{
    "slug": "cynthia-okpechukwu-global-luxury",
    "title": "Redefining Global Luxury: The Story of Designer Cynthia Okpechukwu",
    "kicker": "Designer Profile",
    "dek": "How a Nigerian designer helped shape the visual language, product stories and global retail presence of Anima Iris.",
    "category": "Business",
    "author": "Style Today",
    "date": "2025-09-08",
    "dateLabel": "8 September 2025",
    "image": "/images/new-content/cynthia-okpechukwu-global-luxury/03.webp",
    "imageAlt": "Anima Iris fashion campaign imagery",
    "gallery": [
        {
            "src": "/images/new-content/cynthia-okpechukwu-global-luxury/01.webp",
            "alt": "Cynthia Okpechukwu and Anima Iris — image 1"
        },
        {
            "src": "/images/new-content/cynthia-okpechukwu-global-luxury/02.webp",
            "alt": "Cynthia Okpechukwu and Anima Iris — image 2"
        },
        {
            "src": "/images/new-content/cynthia-okpechukwu-global-luxury/04.webp",
            "alt": "Cynthia Okpechukwu and Anima Iris — image 3"
        },
        {
            "src": "/images/new-content/cynthia-okpechukwu-global-luxury/05.webp",
            "alt": "Cynthia Okpechukwu and Anima Iris — image 4"
        },
        {
            "src": "/images/new-content/cynthia-okpechukwu-global-luxury/06.webp",
            "alt": "Cynthia Okpechukwu and Anima Iris — image 5"
        }
    ],
    "quote": "I see my role not only as a designer but as someone telling the story of African luxury through craft, culture, and creativity.",
    "body": [
        "Luxury fashion is often dominated by European names, but a new wave of African talent is rewriting that story. Among them is Nigerian designer Cynthia Okpechukwu, who has spent the last five years helping to shape one of the most talked-about luxury handbag brands of today, Anima Iris.",
        "Cynthia’s path into fashion was anything but typical. Having first worked in banking, she made the bold transition into fashion and quickly established herself as one of the creative forces behind Anima Iris, a globally recognised luxury brand based in the U.S.",
        "What started as curiosity soon became a career dedicated to design, craftsmanship, and storytelling on a global stage. Through her contributions, Anima Iris has grown its presence in global retail spaces and achieved over $2 million in sales, a milestone that highlights how African design can thrive at the highest levels of luxury.",
        "At Anima Iris, Cynthia has been involved in creating collections that stand out for their boldness and innovation. From early editorial campaigns to more recent launches like the Fuchsia Collection and the Tennis Collection, her influence can be seen in the design direction, visual storytelling, and the way each collection connects with the brand’s audience.",
        "Her creative input has extended beyond design to shaping the image of the brand itself. She has played a key role in curating editorial shoots, working with artisans in Dakar, and ensuring that collections reflect both modern luxury and African craftsmanship.",
        "Under her contributions, Anima Iris handbags have not only grown a loyal customer base but have also found their way into global luxury retail spaces.",
        "One of her pieces is the ZURI top handle handbag in a solid, vibrant royal blue novelty color with a crocodile-embossed texture. The material has a distinct, raised pattern. The handle is a large, solid ring made of metal, adding a bold, sculptural element to the design. This design combines a playful, kitschy silhouette with a luxurious, high-fashion material and colour, creating a unique statement piece. It’s a clear example of a designer playing with everyday objects to create a high-end accessory.",
        "Another piece that stole the spotlight is the vibrant pink FW ’23 handbag collection with a combination of the distinct reptile and crocodile-like embossed leather. It has a geometric, structured shape with a pointed flap closure. The most unique feature of the collection is the striking shade of fuchsia pink which was made as a custom color for the brand by Pantone, complementing the body of the bag styles. The collection also introduced the logo mark, a subtle gold-toned detail on the bottom right corner of the front flap. The bags have an artisanal and handcrafted aesthetic. They combine a playful, colourful pattern with a sophisticated, structured shape, making them a statement accessory.",
        "These creations, along with her other handcrafted designs, have helped Anima Iris build a loyal customer base and gain access to global luxury retailers like Nordstrom, Bloomingdales, and Saks Fifth Avenue.",
        "As a Nigerian woman working at the intersection of African craft and international luxury, Cynthia represents a new generation of designers who are pushing boundaries. Her journey shows how Nigerian talent is not only participating globally but actively shaping it, ensuring that African creativity is represented at the highest levels of luxury.",
        "“I see my role not only as a designer but as someone telling the story of African luxury through craft, culture and creativity. It is important for me to show that Nigerian talent can thrive at the highest levels of fashion, and I am proud that my work has contributed to Anima Iris being recognised on a global scale,” Cynthia Okpechukwu stated."
    ]
},
{
    "slug": "ires-bien-events-20-years",
    "title": "Ires Bien Events Celebrates 20 Years of Pioneering Excellence in the South-South Event Industry",
    "kicker": "Industry",
    "dek": "The Port Harcourt event management company marks two decades of creative innovation, impact and legacy.",
    "category": "Business",
    "author": "Style Today",
    "date": "2025-08-19",
    "dateLabel": "19 August 2025",
    "image": "/images/new-content/ires-bien-events-20-years/02.webp",
    "imageAlt": "Ires Bien Events anniversary celebration",
    "portraitImage": "/images/new-content/ires-bien-events-20-years/01.webp",
    "body": [
        "FOR IMMEDIATE RELEASE",
        "Port Harcourt, Nigeria — In an inspiring milestone for the Nigerian events industry, Ires Bien Events, the trailblazing event management company that helped define the very concept of professional event planning in the South-South region, proudly marks 20 years of creative innovation, impact, and legacy.",
        "Founded at a time when the idea of an “event planner” was virtually unknown in this part of the country, Ires Bien Events charted a bold and visionary path. From intimate gatherings to large-scale experiences, the company has consistently delivered excellence — setting standards and raising the bar across Nigeria’s dynamic events landscape.",
        "As part of the anniversary celebrations, the company’s founder and CEO, Izobe Spiff, launched her debut book titled “The Octopus” — a compelling collection of lessons, experiences, and strategies drawn from her two-decade journey of building a brand, managing pressure, nurturing client dreams, and staying relevant in an ever-evolving industry.",
        "“The timing of this book couldn’t be more perfect,” said the CEO. “After 20 years of wins, reinventions, and growth, The Octopus is my personal way of giving back — sharing the truths, challenges, and strength it takes to wear many hats and still deliver with heart.”",
        "The book title metaphorically reflects the role of the modern event planner — constantly stretching, adapting, multitasking, and creating magic even in chaos, just like an octopus. It is both a memoir and a manual for entrepreneurs, creatives, and dreamers across industries.",
        "This double celebration — of the company’s enduring legacy and the birth of this powerful literary contribution — speaks to the spirit of leadership, resilience, and inspiration that Ires Bien Events has championed for 20 years and counting."
    ]
},
{
    "slug": "green-access-2025",
    "title": "Green Access 2025 Applications Now Open",
    "kicker": "Opportunity",
    "dek": "Lagos Fashion Week invites emerging African designers to turn textile waste into innovative, globally visible fashion.",
    "category": "News",
    "author": "Style Today",
    "date": "2025-08-19",
    "dateLabel": "19 August 2025",
    "image": "/images/new-content/green-access-2025/01.webp",
    "imageAlt": "Green Access 2025 applications poster",
    "gallery": [
        {
            "src": "/images/new-content/green-access-2025/02.webp",
            "alt": "Green Access 2025 — image 1"
        },
        {
            "src": "/images/new-content/green-access-2025/03.webp",
            "alt": "Green Access 2025 — image 2"
        }
    ],
    "body": [
        "Calling all emerging African designers! Green Access 2025 is your chance to redefine sustainable fashion at Lagos Fashion Week. Turn textile waste into innovative designs and showcase your work on a global stage. Check @lagosfashionweek bio for the link to apply by NOW!",
        "#GreenAccess #LagosFashionWeek #SustainableFashion"
    ]
},
{
    "slug": "luxury-in-nigerian-fashion-today",
    "title": "Luxury in Nigerian Fashion Today",
    "kicker": "Commentary",
    "dek": "Luxury has become louder as a word, but the real thing still survives in craft, heritage, scarcity and the knowledge of those who know.",
    "category": "Business",
    "author": "Style Today",
    "date": "2025-08-10",
    "dateLabel": "10 August 2025",
    "image": "/images/new-content/luxury-in-nigerian-fashion-today/10.webp",
    "imageAlt": "Style Today feature on luxury in Nigerian fashion",
    "gallery": [
        {
            "src": "/images/new-content/luxury-in-nigerian-fashion-today/01.webp",
            "alt": "Nigerian luxury fashion — image 1"
        },
        {
            "src": "/images/new-content/luxury-in-nigerian-fashion-today/02.webp",
            "alt": "Nigerian luxury fashion — image 2"
        },
        {
            "src": "/images/new-content/luxury-in-nigerian-fashion-today/03.webp",
            "alt": "Nigerian luxury fashion — image 3"
        },
        {
            "src": "/images/new-content/luxury-in-nigerian-fashion-today/05.webp",
            "alt": "Nigerian luxury fashion — image 4"
        },
        {
            "src": "/images/new-content/luxury-in-nigerian-fashion-today/06.webp",
            "alt": "Nigerian luxury fashion — image 5"
        },
        {
            "src": "/images/new-content/luxury-in-nigerian-fashion-today/12.webp",
            "alt": "Nigerian luxury fashion — image 6"
        },
        {
            "src": "/images/new-content/luxury-in-nigerian-fashion-today/13.webp",
            "alt": "Nigerian luxury fashion — image 7"
        },
        {
            "src": "/images/new-content/luxury-in-nigerian-fashion-today/16.webp",
            "alt": "Nigerian luxury fashion — image 8"
        }
    ],
    "body": [
        "The word luxury has been tossed around so much in Nigerian fashion that it now feels… ordinary. Once upon a time, it evoked an unspoken hush — a world of rarefied access, exquisite craftsmanship, and a certain silence that spoke louder than logos. Today, it’s stamped on everything from mass-market handbags to fast-fashion collaborations, leaving you to wonder: do we still have luxury in Nigeria?",
        "I say yes. Absolutely, yes.",
        "But here’s the truth — the overuse of the word has made it lose its weight. Luxury has become loud when it was once discreet. It’s been hashtagged into oblivion, dressed in hype instead of heritage. And yet, in the quiet corners of our fashion scene, the real thing remains.",
        "When you see our Nigerian luxury fashion brands, only the wealthy or the fashionably alert truly understand the recognizability of these names — from the iconic Invanity to Kilentar, from the amazing Atafo to Tolu Coker, and the very distinctive identity standing tall at EAT. Luxury is generally an experience — an experience you feel in the garments, an experience you feel in the knowledge of the brand’s history, and an experience that only time can give a brand.",
        "You see it in the hand-beaded evening gown that took three months to finish. In the silk gele folded with the precision of an origami master. In the limited-edition leather bag brought in without fanfare, known only to those who know. This is the silent luxury — the kind that doesn’t need to shout, the kind that whispers to the discerning.",
        "Yes, there is still luxury in Nigeria. But you have to look past the noise to find it."
    ]
},
{
    "slug": "fashion-in-nigeria-bold-leap-2025",
    "title": "Fashion in Nigeria: A Bold Leap Forward in 2025",
    "kicker": "Industry Outlook",
    "dek": "A look at the market growth, events, influencer culture and designers pushing Nigerian fashion into a new year.",
    "category": "Business",
    "author": "Adzege Tersur Samuel",
    "date": "2025-01-22",
    "dateLabel": "22 January 2025",
    "image": "/images/new-content/fashion-in-nigeria-bold-leap-2025/04.webp",
    "imageAlt": "Style Today Fashion in Nigeria 2025 feature",
    "gallery": [
        {
            "src": "/images/new-content/fashion-in-nigeria-bold-leap-2025/01.webp",
            "alt": "Nigerian fashion in 2025 — image 1"
        },
        {
            "src": "/images/new-content/fashion-in-nigeria-bold-leap-2025/02.webp",
            "alt": "Nigerian fashion in 2025 — image 2"
        },
        {
            "src": "/images/new-content/fashion-in-nigeria-bold-leap-2025/03.webp",
            "alt": "Nigerian fashion in 2025 — image 3"
        },
        {
            "src": "/images/new-content/fashion-in-nigeria-bold-leap-2025/05.webp",
            "alt": "Nigerian fashion in 2025 — image 4"
        },
        {
            "src": "/images/new-content/fashion-in-nigeria-bold-leap-2025/06.webp",
            "alt": "Nigerian fashion in 2025 — image 5"
        },
        {
            "src": "/images/new-content/fashion-in-nigeria-bold-leap-2025/07.webp",
            "alt": "Nigerian fashion in 2025 — image 6"
        },
        {
            "src": "/images/new-content/fashion-in-nigeria-bold-leap-2025/08.webp",
            "alt": "Nigerian fashion in 2025 — image 7"
        }
    ],
    "body": [
        "The Nigerian fashion industry is on an exciting trajectory, fueled by optimism for the economy and the creative spirit of its people. According to Statista, a global data and business intelligence platform, the industry is projected to generate $1.39 million in revenue by the end of 2025, with a compound annual growth rate (CAGR) of 7.22%. By 2029, this figure is expected to soar to $1,845 million, cementing Nigeria’s status as a growing hub for fashion innovation.",
        "This growth is mirrored in the increasing enthusiasm surrounding fashion events, staples such as Lagos Fashion Week, Nigerian Men’s Fashion Week Abuja, which is celebrating its 10 years of successful existence and Nook International Fashion Weekend, Port Harcourt’s highly anticipated fashion and lifestyle event, happening from February 14–16. These platforms continue to elevate homegrown designers, models and trends, promoting social causes and youth advocacy. They reflect the confidence and creativity within the industry.",
        "Influencer Culture and the Rise of Bold Fashion",
        "Influencer culture is driving Nigeria’s fashion scene into bold, uncharted territory. Icons like Akin Faminu, Emekaoflagos, Angel Obasi, and Njideka Emu among others are inspiring a generation of trend-savvy men and women to embrace expressive styles. Today, no one is afraid to copy trends, and individuality reigns supreme.",
        "For women, modest and conservative fashion is making a comeback. Structured dresses, high-neck blouses, and longer hemlines in rich, luxurious fabrics are becoming wardrobe staples. This shift toward understated sophistication reflects a desire for timeless sophistication.",
        "Meanwhile, men’s fashion has taken a daring turn. Crop tops, once a streetwear oddity, are now mainstream, paired with baggy jeans or bold prints. Nigerian men are also leaning toward unique fabrics—silks, velvets, and brocades—moving beyond the standard wool and cotton. This adventurous approach signals a new era of self-expression in men’s fashion.",
        "The Rise of Fashion Powerhouses",
        "2025 is poised to be a defining year for Nigerian designers making waves on both local and international stages. Brands like Hertunba, Tuboreni, Ejiro Amos Tafiri, and Desiree Iyamah and others are at the forefront of this revolution, showcasing collections that seamlessly blend cultural heritage with contemporary appeal. Their creativity is not only pushing boundaries but also putting Nigeria on the global fashion map.",
        "Looking Ahead",
        "The energy in Nigeria’s fashion industry is palpable. With a vibrant mix of emerging talent, influencer-driven trends, and consumer enthusiasm, the future looks bright. As the country’s designers and creatives continue to innovate, Nigeria is not just keeping up with global trends—it’s setting them.",
        "2025 is the year for bold statements, innovative design, and a celebration of fashion that’s unapologetically Nigerian. The world is watching, and the industry is ready to shine."
    ],
    "credits": [
        {
            "role": "Edited by",
            "name": "Tonye Hart"
        }
    ]
},
{
    "slug": "paul-williams-atelier-cultural-heritage",
    "title": "Paul Williams Atelier: Cultural Heritage, Technique and a New Era of Fashion",
    "kicker": "Designer Focus",
    "dek": "The Nigerian-UK brand approaches cultural representation through architectural structure, meticulous tailoring and modern design.",
    "category": "Fashion",
    "author": "Style Today",
    "date": "2024-12-19",
    "dateLabel": "19 December 2024",
    "image": "/images/new-content/paul-williams-atelier/13.webp",
    "imageAlt": "Paul Williams Atelier Style Today feature",
    "gallery": [
        {
            "src": "/images/new-content/paul-williams-atelier/01.webp",
            "alt": "Paul Williams Atelier — image 1"
        },
        {
            "src": "/images/new-content/paul-williams-atelier/02.webp",
            "alt": "Paul Williams Atelier — image 2"
        },
        {
            "src": "/images/new-content/paul-williams-atelier/04.webp",
            "alt": "Paul Williams Atelier — image 3"
        },
        {
            "src": "/images/new-content/paul-williams-atelier/05.webp",
            "alt": "Paul Williams Atelier — image 4"
        },
        {
            "src": "/images/new-content/paul-williams-atelier/08.webp",
            "alt": "Paul Williams Atelier — image 5"
        },
        {
            "src": "/images/new-content/paul-williams-atelier/09.webp",
            "alt": "Paul Williams Atelier — image 6"
        },
        {
            "src": "/images/new-content/paul-williams-atelier/12.webp",
            "alt": "Paul Williams Atelier — image 7"
        },
        {
            "src": "/images/new-content/paul-williams-atelier/14.webp",
            "alt": "Paul Williams Atelier — image 8"
        }
    ],
    "body": [
        "In today’s fast-evolving fashion landscape, the conversation around how fashion affects African culture has become more pertinent than ever. As someone who believes in the future of fashion and its impact on Africa, I find myself drawn to brands that return to their roots while embracing innovation. Paul Williams Atelier, founded by Paul Akpukpur in 2017, exemplifies this balance beautifully. The bespoke fashion brand is renowned for its innovative fusion of African craftsmanship with modern design sensibilities. Operating between Nigeria and the UK, the brand has carved a niche for itself, celebrating cultural heritage while appealing to global audiences.",
        "Cultural Representation in Fashion",
        "Recent events, like Lagos Fashion Week, have highlighted how Nigerian brands are exploring the depth of their cultural heritage. Many designers drew inspiration from Edo culture and the broader concept of Nigerian royalty. While this trend is a significant step toward cultural representation, the method of execution is equally important. It’s one thing to draw inspiration from culture; it’s another to translate it into garments that feel fresh, innovative, and globally relevant.",
        "Paul Williams Atelier excels in this area, showcasing how cultural elements can be seamlessly woven into fashion. The brand doesn’t merely replicate traditional designs but reimagines them with architectural precision and a modern touch. This approach results in garments that feel both rooted in tradition and reflective of contemporary elegance.",
        "The Power of Technique and Structure",
        "One of the defining features of Paul Williams Atelier is its commitment to meticulous tailoring. Each piece is crafted with a level of precision that speaks to the brand’s deep understanding of structure and form. The garments embody a blend of richness and freshness, evoking a sense of stability and thoughtfulness. The clean, regal aesthetic of the designs is not accidental—it is the result of intentional craftsmanship and a thorough design process.",
        "In a world where fast fashion often sacrifices quality for speed, the Paul Williams brand stands out for its dedication to creating timeless pieces. The use of eco-friendly materials and the support of local artisans further underscore its commitment to sustainability and community development.",
        "Fashion in a New Era",
        "Fashion is more than aesthetics—it is a form of storytelling and representation. Paul Williams Atelier represents a new era in fashion, one where culture and innovation coexist harmoniously. The brand’s ability to incorporate elements of African heritage into designs that resonate with a global audience is a testament to its creativity and vision.",
        "When you encounter a Paul Williams garment, you’re not just seeing a piece of clothing—you’re experiencing a carefully constructed narrative. The brand’s focus on architectural structure, clean lines, and cultural depth creates an emotional connection that leaves a lasting impression.",
        "Conclusion",
        "In a time when representation matters more than ever, Paul Williams Atelier has established itself as a leader in the conversation around the fusion of fashion and culture. It offers a blueprint for how brands can honor their roots while staying innovative and relevant on the global stage. By seamlessly blending cultural richness with modern design and meticulous craftsmanship, Paul Williams Atelier stands as a beacon of elegance, creativity, and cultural pride.",
        "This is more than fashion—it’s a movement that redefines how we see and wear culture. And it’s exactly what the future of African fashion needs."
    ]
},
{
    "slug": "phfw-style-today-industry-night",
    "title": "Port Harcourt Fashion Week and Style Today Magazine Host Industry Night",
    "kicker": "Industry",
    "dek": "Fashion professionals, designers, stylists and creative leaders meet in Port Harcourt for a conversation on collaboration, growth and innovation.",
    "category": "Business",
    "author": "Style Today",
    "date": "2024-12-13",
    "dateLabel": "13 December 2024",
    "image": "/images/new-content/phfw-style-today-industry-night/02.webp",
    "imageAlt": "Port Harcourt Fashion Week and Style Today Industry Night",
    "gallery": [
        {
            "src": "/images/new-content/phfw-style-today-industry-night/01.webp",
            "alt": "PHFW and Style Today Industry Night — image 1"
        },
        {
            "src": "/images/new-content/phfw-style-today-industry-night/03.webp",
            "alt": "PHFW and Style Today Industry Night — image 2"
        },
        {
            "src": "/images/new-content/phfw-style-today-industry-night/04.webp",
            "alt": "PHFW and Style Today Industry Night — image 3"
        }
    ],
    "body": [
        "FOR IMMEDIATE RELEASE",
        "Port Harcourt, Nigeria — December 12, 2024 — The fashion industry in Nigeria took center stage at the Industry Night, an exclusive event hosted by Port Harcourt Fashion Week in partnership with Style Today Magazine. The evening brought together top industry professionals, designers, stylists, and creative minds for an insightful conversation on collaboration, growth, and innovation within the fashion industry.",
        "The event, which was fully attended by fashion heavyweights and industry leaders, provided a platform to discuss key issues affecting the fashion landscape. Ngozi Ferrari, the convener of Port Harcourt Fashion Week, shared exciting details about the upcoming 2025 edition, set to take place on April 12th and 13th, 2025. Ferrari emphasized that the forthcoming fashion week promises to be an exceptional showcase of creativity, talent, and innovation, urging the industry to prepare for an unforgettable event.",
        "Adding to the dialogue, Tonye Hart, the Lead Style Editor of Style Today Magazine, highlighted the importance of professionals leveraging fashion seasons to maximize brand visibility and profitability. Hart provided insights into strategies that could help designers, retailers, and other stakeholders thrive during these pivotal moments.",
        "The Industry Night was a resounding success, fostering meaningful conversations and setting the stage for an impactful 2025 Port Harcourt Fashion Week. It underscored the importance of unity and collaboration in elevating Nigeria’s fashion scene to greater heights."
    ]
},
{
    "slug": "medieval-romance-collection",
    "title": "De-She Collection Unveils THE MEDIEVAL ROMANCE Collection",
    "kicker": "Collection",
    "dek": "Sheba Sharon Quartey’s romantic collection uses tulle, appliqué and fairy-tale references to frame a modern couture fantasy.",
    "category": "Fashion",
    "author": "Adzege Tersur Samuel",
    "date": "2024-12",
    "dateLabel": "December 2024",
    "image": "/images/new-content/medieval-romance-collection/01.webp",
    "imageAlt": "De-She Collection Medieval Romance gown",
    "gallery": [
        {
            "src": "/images/new-content/medieval-romance-collection/02.webp",
            "alt": "The Medieval Romance Collection — image 1"
        },
        {
            "src": "/images/new-content/medieval-romance-collection/03.webp",
            "alt": "The Medieval Romance Collection — image 2"
        },
        {
            "src": "/images/new-content/medieval-romance-collection/04.webp",
            "alt": "The Medieval Romance Collection — image 3"
        },
        {
            "src": "/images/new-content/medieval-romance-collection/05.webp",
            "alt": "The Medieval Romance Collection — image 4"
        },
        {
            "src": "/images/new-content/medieval-romance-collection/06.webp",
            "alt": "The Medieval Romance Collection — image 5"
        },
        {
            "src": "/images/new-content/medieval-romance-collection/07.webp",
            "alt": "The Medieval Romance Collection — image 6"
        },
        {
            "src": "/images/new-content/medieval-romance-collection/08.webp",
            "alt": "The Medieval Romance Collection — image 7"
        },
        {
            "src": "/images/new-content/medieval-romance-collection/09.webp",
            "alt": "The Medieval Romance Collection — image 8"
        },
        {
            "src": "/images/new-content/medieval-romance-collection/10.webp",
            "alt": "The Medieval Romance Collection — image 9"
        }
    ],
    "body": [
        "De-She Collection, the visionary fashion brand led by seasoned designer and educator Sheba Sharon Quartey, proudly announces the official unveiling of its latest masterpiece, THE MEDIEVAL ROMANCE Collection.",
        "A timelessly romantic ensemble, THE MEDIEVAL ROMANCE Collection captures the essence of whimsy and sophistication, offering statement pieces perfect for proms, galas, and themed photoshoots where elegance and fantasy converge.",
        "One of the pieces from this collection is a strapless ball gown which commands attention with its sunshine-yellow tulle that radiates warmth and vibrancy, evoking a sense of regality and light.",
        "The dress is an elegant and striking interpretation of fairytale glamour, styled with a distinctly modern edge. The bodice is a masterpiece on its own—embellished with reflective, jewel-like detailing that shimmers with every angle, creating a dazzling contrast against the soft flow of the skirt.",
        "The intricate embroidery and scattered appliqué elements on the gown add depth and texture, making it not just a dress but a wearable work of art.",
        "This outfit could easily hold its own on a high-fashion editorial spread or a red-carpet moment. It feels both timeless and fresh, drawing inspiration from fairytales while staying rooted in bold, contemporary fashion. It’s a perfect representation of how African designers are marrying global couture aesthetics with unique artistry to create unforgettable pieces.",
        "Sheba Sharon Quartey is widely recognized for her commitment to innovation, cultural exchange, sustainability, and women’s empowerment. Her fashion brand, known for its bold yet timeless designs, consistently pushes the boundaries of couture while celebrating global fashion narratives.",
        "With 28 years of experience in haute couture, Quartey has refined a distinct design language defined by innovative creativity, impeccable craftsmanship, and a deep understanding of the ever-evolving fashion landscape. Each piece in THE MEDIEVAL ROMANCE Collection reflects her dedication to artistry, storytelling, and couture excellence.",
        "“As a designer and educator, fashion for me is more than fabric and form—it is a language of transformation,” says Sheba Sharon Quartey, Creative Director of De-She Kollection. “THE MEDIEVAL ROMANCE Collection is a celebration of beauty, grace, and timeless elegance, designed to inspire confidence and imagination.”",
        "This is evident in yet another piece; a romantic ball dress in a delicate shade of coral-pink, with a fitted bodice adorned in three-dimensional floral appliqué.",
        "The floral detailing adds a touch of femininity and texture, creating a soft yet striking contrast against the flowing tulle skirt. Its strapless cut highlights the model’s neckline, keeping the focus on both her natural poise and the elegance of the gown.",
        "The voluminous skirt cascades gracefully, evoking a fairy-tale princess vibe, while the light fabric gives it a dreamy, ethereal quality perfect for outdoor shoots and garden-themed fashion spreads. Styled with a basket of flowers, the look leans into a whimsical, nature-inspired aesthetic that celebrates grace and timeless beauty.",
        "Beyond its artistic essence, THE MEDIEVAL ROMANCE collection reinforces De-She Kollection’s long-term vision and values, which include sustainability, cultural exchange, and women’s empowerment. Through De-She Kollection, she remains committed to pushing boundaries, inspiring innovation, and making a meaningful impact on lives, cultures, and communities.",
        "The official unveiling of THE MEDIEVAL ROMANCE Collection marks a new chapter in the brand’s journey—a chapter that honors timeless romance while looking boldly toward the future of fashion."
    ]
},
{
    "slug": "minengbiy-new-ray-of-sunshine",
    "title": "MINENGBIY: A New Ray of Sunshine in Fashion",
    "kicker": "Designer Focus",
    "dek": "A Port Harcourt label built on freshness, simplicity and the understated confidence of effortless clothing.",
    "category": "Fashion",
    "author": "Style Today",
    "date": "2024-11-06",
    "dateLabel": "6 November 2024",
    "image": "/images/new-content/minengbiy-new-ray-of-sunshine/03.webp",
    "imageAlt": "MINENGBIY fashion feature",
    "gallery": [
        {
            "src": "/images/new-content/minengbiy-new-ray-of-sunshine/01.webp",
            "alt": "MINENGBIY fashion — image 1"
        },
        {
            "src": "/images/new-content/minengbiy-new-ray-of-sunshine/02.webp",
            "alt": "MINENGBIY fashion — image 2"
        },
        {
            "src": "/images/new-content/minengbiy-new-ray-of-sunshine/04.webp",
            "alt": "MINENGBIY fashion — image 3"
        },
        {
            "src": "/images/new-content/minengbiy-new-ray-of-sunshine/05.webp",
            "alt": "MINENGBIY fashion — image 4"
        }
    ],
    "body": [
        "Since its inception in 2017, MINENGBIY has swiftly carved out a unique niche in the fashion world. Founded by Minengbiyeofori “Nengi” Lilian Maxwell, a Port Harcourt native with an innate flair for style, the brand blends sophistication with freshness, redefining contemporary elegance.",
        "Nengi, who discovered her love for fashion at 13, set out on her creative journey after graduating in Political Science from the University of Port Harcourt in 2015. Today, MINENGBIY is celebrated for its effortless approach to fashion, capturing clean lines, bright aesthetics, and the unpretentious charm of simplicity.",
        "This brand is more than just clothing; it’s a breath of fresh air in an industry often filled with excess. MINENGBIY radiates clarity and purpose, appealing to a new generation of fashion enthusiasts seeking authenticity and ease. In a short span, Nengi has infused the brand with the resilience and spirit of Port Harcourt, making MINENGBIY a name to watch. Every piece exudes a subtle boldness, inviting fashion lovers to experience true style reimagined."
    ]
},
{
    "slug": "lagos-fashion-week-2024-offsite",
    "title": "Lagos Fashion Week 2024 Offsite Shows",
    "kicker": "Lagos Fashion Week",
    "dek": "Orange Culture, Eki Keré, WANNIFUGA and Ejiro Amos Tafiri use offsite spaces to push fashion beyond the conventional runway.",
    "category": "Runway",
    "author": "Tonye Hart",
    "date": "2024-10-29",
    "dateLabel": "29 October 2024",
    "image": "/images/new-content/lagos-fashion-week-2024-offsite/09.webp",
    "imageAlt": "Lagos Fashion Week 2024 offsite shows",
    "gallery": [
        {
            "src": "/images/new-content/lagos-fashion-week-2024-offsite/01.webp",
            "alt": "Lagos Fashion Week 2024 offsite shows — image 1"
        },
        {
            "src": "/images/new-content/lagos-fashion-week-2024-offsite/02.webp",
            "alt": "Lagos Fashion Week 2024 offsite shows — image 2"
        },
        {
            "src": "/images/new-content/lagos-fashion-week-2024-offsite/03.webp",
            "alt": "Lagos Fashion Week 2024 offsite shows — image 3"
        },
        {
            "src": "/images/new-content/lagos-fashion-week-2024-offsite/04.webp",
            "alt": "Lagos Fashion Week 2024 offsite shows — image 4"
        },
        {
            "src": "/images/new-content/lagos-fashion-week-2024-offsite/05.webp",
            "alt": "Lagos Fashion Week 2024 offsite shows — image 5"
        },
        {
            "src": "/images/new-content/lagos-fashion-week-2024-offsite/06.webp",
            "alt": "Lagos Fashion Week 2024 offsite shows — image 6"
        },
        {
            "src": "/images/new-content/lagos-fashion-week-2024-offsite/07.webp",
            "alt": "Lagos Fashion Week 2024 offsite shows — image 7"
        },
        {
            "src": "/images/new-content/lagos-fashion-week-2024-offsite/08.webp",
            "alt": "Lagos Fashion Week 2024 offsite shows — image 8"
        }
    ],
    "body": [
        "ORANGE CULTURE NIGERIA",
        "An Immersive Experience at Orange Culture Nigeria’s Offsite Show",
        "When I asked about the unique location for this showcase—far removed from where most would expect—Orange Culture’s founder simply said he wanted it to feel unmistakably like Lagos. Not just any part of Lagos, but the heart of the city’s energy, even if it meant being further away from the typical opulence. He shared that this year had been intense for him, and he wanted a relaxed, intimate vibe, one that invited everyone to experience a different side of Lagos.",
        "The installation-style showcase was a true representation of the brand’s spirit, with color woven into every detail, from the garments to the floral displays. This bold play of color has always been Orange Culture’s signature, yet this time it felt even more vibrant and intentional. The pieces—both male and female—featured distinct colors, styles, and silhouettes that spoke to the future of fashion.",
        "Orange Culture is a brand that feels remarkably fresh and progressive, fully embracing gender fluidity. It’s a brand with staying power, and we’re here to celebrate every part of its journey.",
        "Eki Keré",
        "A Distinct World: Eki Keré’s Offsite Show at Lagos Fashion Week",
        "Experiencing Eki Keré’s offsite showcase felt like stepping into a world of its own—where high fashion meets fine art. The brand’s approach to fashion is strikingly avant-garde, designed for those with a keen eye for detail and a passion for the eccentric. Only those who truly appreciate the depths of artistry in fashion can fully understand the vision that Eki Keré presents.",
        "Their Spring/Summer ’25 collection was layered with meaning, provoking us all to reconsider fashion as a form of wearable art. Every garment had depth, challenging conventions and inviting introspection. Eki Keré isn’t for everyone; it’s for those who understand and embrace fashion in its most artistic and profound form.",
        "WANNIFUGA",
        "A Decade of Opulence: WANNIFUGA’s 10th Anniversary Offsite Event",
        "Attending WANNIFUGA’s offsite event, marking a celebrated 10-year journey, felt like stepping into the “Garden of Fuga”—a space filled with opulence, life, and the spirit of hard work. It was more than an event; it was a tribute to the brand’s journey, inviting us to join an exclusive gathering of Lagos’ elite.",
        "WANNIFUGA presented class and sophistication in every detail. The garments channeled a timeless “old money” aesthetic, yet carried a fresh appeal for rich millennials and the modern, fashion-forward working woman who has come into her own. The brand beautifully brought together these elegant silhouettes with its signature statement headgears and carefully curated fabrics, offering a nod to heritage while embracing luxury in a way that feels current and enduring. In a perpetually evolving industry, WANNIFUGA has crafted an identity of high-end luxury that’s clearly here to stay.",
        "A Visionary Showcase: Ejiro Amos Tafiri’s Offsite Show at Lagos Fashion Week",
        "Ejiro Amos Tafiri’s offsite show was nothing short of mesmerizing—a symphony of convergence set in a space transformed to a lush garden with live birds adding an unforgettable touch of wonder. The collection, with over 100 garments, was a testament to true fashion craftsmanship. I often say that pieces from this brand deserve a place in a museum, to be studied and admired for the artistry they embody. This showcase reaffirmed that belief, as every garment was crafted with precision and care, each piece telling its own story.",
        "The intricate detailing and the brand’s unmistakable mastery over its craft created a unique experience for every single garment. I was genuinely awed by the dedication it took to give each piece its own identity, especially across such a grand collection. For the personalities and high society clientele present, Ejiro Amos Tafiri presented not just a vision of the future, but a future distinctly shaped by the brand’s legacy. In an ever-evolving industry where uniqueness defines your identity, EAT stands as a beacon of originality—extraordinarily unique and here to set the pace.",
        "Lagos Fashion Week 2024 Offsite Shows",
        "The offsite events of Lagos Fashion Week first gained traction during the COVID era, quickly becoming a phenomenon that has evidently come to stay. Offsite shows add a new dimension to the experience, bringing a touch of international flair that aligns Lagos Fashion Week with its global counterparts. They allow designers to fully express their brand identities in unique spaces, a contrast to the on-site events where time and space constraints can limit creative freedom.",
        "This year’s offsite showcases were particularly thrilling—each one a testament to resilience and creativity in an economy that challenges fashion businesses at every turn. These brands charted their own course, proving that even in tough times, they could rise above and stay innovative. Here are some of the standout brands that captured my attention at this year’s offsite shows."
    ]
},
{
    "slug": "lagos-fashion-week-2024-commune",
    "title": "Lagos Fashion Week 2024: COMMUNE",
    "kicker": "Lagos Fashion Week",
    "dek": "The 2024 edition returns under the theme COMMUNE, celebrating collective brilliance and the future of African fashion.",
    "category": "News",
    "author": "Style Today",
    "date": "2024-10-03",
    "dateLabel": "3 October 2024",
    "image": "/images/new-content/lagos-fashion-week-2024-commune/02.webp",
    "imageAlt": "Lagos Fashion Week 2024 COMMUNE campaign",
    "portraitImage": "/images/new-content/lagos-fashion-week-2024-commune/01.webp",
    "body": [
        "Lagos Fashion Week is excited to announce its return from October 23rd to 27th, 2024, with this year’s bold theme: “COMMUNE.” The event will bring together Africa’s most creative minds to celebrate the collective brilliance shaping the future of African fashion.",
        "This year’s campaign was shot at the historic John Randle Centre for Yoruba Culture & History, highlighting Lagos Fashion Week’s dedication to preserving African heritage while inspiring a new generation of designers. The runway will also feature collections from Green Access finalists, who have undergone mentorship focused on sustainable practices, emphasizing the future of eco-conscious fashion in Africa.",
        "Lagos Fashion Week 2024 is proudly sponsored by Heineken, with support from Bioderma, Lush, TOMS, Prosper Africa, and Afreximbank."
    ]
},
{
    "slug": "fashion-and-technology-rise-of-ai",
    "title": "Fashion and Technology: The Rise of AI",
    "kicker": "Fashion & Technology",
    "dek": "From design and manufacturing to marketing and virtual try-ons, AI is changing how fashion is created, sold and experienced.",
    "category": "Business",
    "author": "Tersur Samuel Adzege",
    "date": "2024-09-03",
    "dateLabel": "3 September 2024",
    "image": "/images/new-content/fashion-and-technology-rise-of-ai/04.webp",
    "imageAlt": "Style Today Fashion and Technology: The Rise of AI feature",
    "gallery": [
        {
            "src": "/images/new-content/fashion-and-technology-rise-of-ai/01.webp",
            "alt": "AI and fashion — image 1"
        },
        {
            "src": "/images/new-content/fashion-and-technology-rise-of-ai/02.webp",
            "alt": "AI and fashion — image 2"
        },
        {
            "src": "/images/new-content/fashion-and-technology-rise-of-ai/03.webp",
            "alt": "AI and fashion — image 3"
        },
        {
            "src": "/images/new-content/fashion-and-technology-rise-of-ai/05.webp",
            "alt": "AI and fashion — image 4"
        },
        {
            "src": "/images/new-content/fashion-and-technology-rise-of-ai/06.webp",
            "alt": "AI and fashion — image 5"
        }
    ],
    "body": [
        "Fashion and technology have always influenced culture, society, and economics. In recent years, combining these two domains has led to transformative changes in the fashion industry, with Artificial Intelligence (AI) playing a pivotal role. In this article, we will explore the integration of AI in fashion, highlighting its impact on fashion design, manufacturing, marketing, and consumer experience.",
        "AI IN FASHION DESIGN",
        "Traditionally, fashion design has been a creative process driven by human intuition and artistic vision. However, AI is revolutionizing this space by augmenting the capabilities of designers and enabling new possibilities. AI-powered design tools such as Resleeve, Lala, TeeAI, and others use machine learning algorithms to analyze vast datasets of fashion trends, historical designs, and consumer preferences. These tools can generate innovative design concepts, predict upcoming trends, and even create personalized fashion items tailored to individual tastes.",
        "AI IN MANUFACTURING AND SUPPLY CHAIN MANAGEMENT",
        "AI is also making waves in fashion manufacturing. It can improve quality control by automatically detecting defects in fabrics and garments. AI can also analyze fabrics to predict how they behave in production and create 3D models for better-fitting clothes with less wasted materials. Additionally, AI helps with production planning by forecasting demand, leading to less overstock and faster turnaround times.",
        "Furthermore, AI-driven supply chain management systems can track and analyze data from various sources, such as suppliers, manufacturers, and retailers, to optimize inventory levels, reduce lead times, and enhance overall supply chain efficiency.",
        "AI IN MARKETING AND CONSUMER EXPERIENCE",
        "The rise of e-commerce has fundamentally changed the way consumers shop for fashion. AI plays an important role in enhancing the online shopping experience by providing personalized recommendations, improving search functionality, and enabling virtual try-ons.",
        "Personalized recommendations are perhaps the most visible application of AI in retail. Algorithms analyze user behavior, purchase history, and preferences to suggest products that are likely to appeal to individual customers. This not only enhances the shopping experience but also increases sales and customer loyalty. Retail giants like Amazon and Alibaba have successfully implemented AI-driven recommendation systems, significantly boosting their revenues.",
        "Virtual try-ons are another exciting development made possible by AI. Augmented reality (AR) and AI technologies allow customers to visualize how clothes will look on them without physically trying them on. Companies, including Zara and Sephora, have introduced virtual fitting rooms and AR mirrors in their stores, allowing customers to try on clothes and makeup virtually. This innovation not only improves customer satisfaction but also reduces return rates, which is a major challenge in the fashion industry.",
        "ETHICAL IMPLICATIONS AND CHALLENGES",
        "With the implementation of the European Union AI Act, which came into force on the 1st of August, 2024, there are various regulations which AI providers must comply with across all systems, including those concerned with fashion.",
        "AI in fashion is great, but it comes with privacy concerns. These AI systems need a lot of data to work, and we need to make sure fashion companies collect, store, and use this data responsibly, following data protection rules.",
        "Also, the cost of integration can be expensive, and implementing AI solutions may be difficult, especially for smaller manufacturers.",
        "Automation through AI could lead to job losses in the manufacturing sector. However, AI is also likely to create new opportunities in areas like data analysis and system maintenance.",
        "The embracing of AI to create dresses and clothing designs in the couture fashion world has been almost nonexistent because of the age-old art of hand sketching still celebrated and exhibited by designers such as Daniel Roseberry in the Schiaparelli Fall/Winter 2024 collection.",
        "AI is a powerful tool, but it cannot replace human expertise. Skilled workers will continue to be essential for tasks like design, quality control, and machine operation.",
        "THE FUTURE OF FASHION AND AI",
        "The integration of AI in the fashion industry is still in its early stages, but its potential is vast. As technology continues to advance, we can expect to see even more innovative applications of AI in fashion. From smart fabrics that adapt to environmental conditions to AI-driven design tools that democratize fashion, the future holds exciting possibilities.",
        "Ultimately, the successful integration of AI in fashion will depend on how well the industry addresses ethical considerations, adapts to technological changes, and embraces the potential of AI to enhance creativity, efficiency, and sustainability. The rise of AI in fashion is not just a trend; it is a transformative force that will shape the industry for years to come."
    ]
},
{
    "slug": "mens-fashion-week-editor-picks-2024",
    "title": "Editor’s Picks: 9th Edition of Men’s Fashion Week Nigeria",
    "kicker": "Editor’s Picks",
    "dek": "Seven runway standouts spanning regal tailoring, African high fashion, youthful royalty and the future of urban street style.",
    "category": "Runway",
    "author": "Style Today",
    "date": "2024-08-15",
    "dateLabel": "15 August 2024",
    "image": "/images/new-content/mens-fashion-week-editor-picks-2024/03.webp",
    "imageAlt": "Men’s Fashion Week Nigeria runway imagery",
    "gallery": [
        {
            "src": "/images/new-content/mens-fashion-week-editor-picks-2024/01.webp",
            "alt": "Men’s Fashion Week Nigeria — image 1"
        },
        {
            "src": "/images/new-content/mens-fashion-week-editor-picks-2024/02.webp",
            "alt": "Men’s Fashion Week Nigeria — image 2"
        },
        {
            "src": "/images/new-content/mens-fashion-week-editor-picks-2024/04.webp",
            "alt": "Men’s Fashion Week Nigeria — image 3"
        },
        {
            "src": "/images/new-content/mens-fashion-week-editor-picks-2024/05.webp",
            "alt": "Men’s Fashion Week Nigeria — image 4"
        },
        {
            "src": "/images/new-content/mens-fashion-week-editor-picks-2024/06.webp",
            "alt": "Men’s Fashion Week Nigeria — image 5"
        },
        {
            "src": "/images/new-content/mens-fashion-week-editor-picks-2024/07.webp",
            "alt": "Men’s Fashion Week Nigeria — image 6"
        }
    ],
    "body": [
        "BLACKADUDU: A Kingly Legend on the Runway",
        "BLACKADUDU’s collection at the 9th edition of Men’s Fashion Week Nigeria was nothing short of royal. The garments exuded a regal aura that was both kingly and legendary. Each piece was meticulously crafted to embody the essence of nobility, making the runway feel like a parade of modern-day monarchs. The brand’s ability to channel such a majestic vibe through its designs truly set it apart.",
        "TEED: African High Fashion with Graceful Precision",
        "Representing the rich cultural heritage of Benin Republic, TEED delivered a collection that was a true embodiment of African culture infused with high fashion. The designs were not just garments but statements of grace and cultural pride. TEED’s pieces stood out for their precision and elegance, making a powerful statement on the runway. This brand is a testament to the sophisticated allure of African-inspired fashion.",
        "DRESSMEUP CREATIONS: Youthful Royalty with a Fresh Twist",
        "DRESSMEUP CREATIONS from Benin Republic brought an all-white collection that was both royal and refreshingly youthful. The designs were a perfect blend of tradition and modernity, showcasing the authenticity of African culture with a contemporary twist. The freshness of the collection, combined with its royal undertones, made it a standout on the runway, resonating deeply with both the young and the young at heart.",
        "YAHAYA: The Real Man’s Vision Come to Life",
        "YAHAYA’s collection was a powerful representation of what a real man envisions himself wearing. The brand captured the essence of masculine strength and sophistication, offering designs that were as bold as they were refined. Every piece in the collection spoke to the inner desires of men who see themselves as leaders, providers, and style icons. YAHAYA successfully brought this vision to life, making it a collection that resonated with every man.",
        "NIPOSKIN: The Richness of African Fabrics in Full Bloom",
        "Hailing from Ghana, NIPOSKIN celebrated the vibrant richness of African fabrics and colors in a collection that was a visual feast. The designs were a beautiful exploration of texture, hue, and tradition, each piece telling a story of African heritage. NIPOSKIN’s ability to weave such richness into contemporary fashion made their collection a standout, highlighting the beauty of African diversity.",
        "SIMENI CLOTHING: The Future of Street Style and Urban Fashion",
        "I fell in love with SIMENI CLOTHING because it redefined what street fashion can be in today’s world. The brand’s collection showed that the future of street style and urban fashion is here, and it is bold, fresh, and innovative. SIMENI CLOTHING’s designs were a perfect blend of edgy and chic, promising to be a leading force in the evolution of urban fashion. This is a brand to watch as it carves out its place in the fashion world.",
        "KTT WARDROBE: Fast Fashion with Refined Precision",
        "KTT WARDROBE presented a collection that was the epitome of fresh, clean, and well-finished urban fashion. The brand’s designs were polished to perfection, offering a refined take on fast fashion that felt both current and timeless. KTT WARDROBE’s ability to blend modern urban aesthetics with high-quality craftsmanship was truly impressive, making it a standout on the runway.",
        "My Take as a Style Editor",
        "Experiencing the 9th edition of Men’s Fashion Week Nigeria was a journey through the diverse and rich landscape of African fashion. Each designer brought something unique to the runway, showcasing the incredible depth of talent within the continent. From the regal sophistication of BLACKADUDU to the fresh, urban edge of SIMENI CLOTHING, this year’s fashion week was a testament to the power of African designers in shaping global fashion trends. As a style editor, I am excited to see where these designers will take us next, as they continue to push the boundaries of fashion and culture."
    ]
},
{
    "slug": "lagos-fashion-week-2024-14th-edition",
    "title": "Lagos Fashion Week Set to Return for Its 14th Edition",
    "kicker": "Lagos Fashion Week",
    "dek": "The October 2024 edition brings buyers, consumers and media together around Nigerian and African fashion.",
    "category": "News",
    "author": "Style Today",
    "date": "2024-07-16",
    "dateLabel": "16 July 2024",
    "image": "/images/new-content/lagos-fashion-week-2024-14th-edition/01.webp",
    "imageAlt": "Lagos Fashion Week 2024 save the date campaign",
    "portraitImage": "/images/new-content/lagos-fashion-week-2024-14th-edition/02.webp",
    "body": [
        "Lagos Fashion Week will return for its 14th edition from October 23 to 27, 2024, bringing together buyers, consumers, and the media from around the world in the fashion capital of Nigeria: Lagos.",
        "Stay tuned for more updates on participating designers, event schedules, and ticketing information as we count down to one of the most anticipated fashion events of the year."
    ]
},
{
    "slug": "jazz-effect-travel-wear-phenomenon",
    "title": "The Travel Wear Phenomenon: The Jazz Effect Brand",
    "kicker": "Editor’s Feature",
    "dek": "Tonye Hart considers the “hack” behind Jazz Effect Brand’s travel-wear collection: simplicity, versatility, style and confidence.",
    "category": "Style",
    "author": "Tonye Hart",
    "date": "2024-05-29",
    "dateLabel": "29 May 2024",
    "image": "/images/new-content/jazz-effect-travel-wear-phenomenon/02.webp",
    "imageAlt": "The Jazz Effect Brand travel wear feature",
    "gallery": [
        {
            "src": "/images/new-content/jazz-effect-travel-wear-phenomenon/01.webp",
            "alt": "Jazz Effect travel wear — image 1"
        },
        {
            "src": "/images/new-content/jazz-effect-travel-wear-phenomenon/03.webp",
            "alt": "Jazz Effect travel wear — image 2"
        },
        {
            "src": "/images/new-content/jazz-effect-travel-wear-phenomenon/04.webp",
            "alt": "Jazz Effect travel wear — image 3"
        },
        {
            "src": "/images/new-content/jazz-effect-travel-wear-phenomenon/05.webp",
            "alt": "Jazz Effect travel wear — image 4"
        },
        {
            "src": "/images/new-content/jazz-effect-travel-wear-phenomenon/06.webp",
            "alt": "Jazz Effect travel wear — image 5"
        },
        {
            "src": "/images/new-content/jazz-effect-travel-wear-phenomenon/07.webp",
            "alt": "Jazz Effect travel wear — image 6"
        },
        {
            "src": "/images/new-content/jazz-effect-travel-wear-phenomenon/08.webp",
            "alt": "Jazz Effect travel wear — image 7"
        }
    ],
    "body": [
        "In the world of fashion, every brand has its unique identity. This identity serves as the DNA and core of the brand’s longevity, shaping its trajectory in the industry. When a brand achieves longevity and consistency, it often unveils its distinct “HACK!”",
        "A brand’s “HACK!” is that standout garment or item that organically resonates with both its loyal clientele and potential customers. It’s the piece that epitomizes the brand’s essence and captures the zeitgeist of the moment.",
        "Today, I’ll delve into what I’ve coined the “JAZZ EFFECT BRAND HACK!” focusing on their remarkable collection of travel wear. Join me as we explore how this brand has mastered the art of creating timeless yet contemporary pieces that transcend boundaries and captivate fashion enthusiasts worldwide.",
        "Simplicity",
        "Every HACK! I think resonates with people because they don’t need to do much to understand the garments. I mean the garments should speak for themselves. Simplicity is the most understandable language in fashion.",
        "In this case, the JAZZ EFFECT BRAND has made these garments very simple, self-explanatory, and easy to get. I think the HACK! is understanding that the everyday woman is not interested in too much when she is not going for functions. The everyday woman is always on the go!",
        "This, I think, makes this loungewear very revitalizing and refreshing to see everywhere.",
        "Versatility",
        "The JAZZ EFFECT BRAND understood the fact that simplicity should be versatile, which means it should go for everyone, every time, every trip, everywhere. Men or husbands are the most difficult to convince to get on a fashion trend or a matching look with their spouses, but in this case, simplicity made them very versatile organically where the men are seeing themselves in the garments.",
        "If you have been able to convince the African, Nigerian man to tell his wife to get him one, then you really have found a HACK!!!",
        "Stylish",
        "The JAZZ EFFECT BRAND, I think, having understood the today woman, also understood those who wish to be bold with their style. There are women that love statement pieces, so the brand also looked at making the travel wear very today stylish, yet comfortable, yet a statement.",
        "So this helps the brand reach every demography HACK!",
        "Comfort/Confidence",
        "When we all travel, we always want to be comfortable, especially on a long trip. These garments are as comfortable as the word comfortable itself, take it from me as someone who is a proud owner of this amazing phenomenon of our current fashion times.",
        "The comfort they offer gives you a certain kind of confidence because they fit well in all the right places, thanks to the right fabrics always being used. The JAZZ EFFECT BRAND made it so you can wash and wear them as much as you like, and the integrity is intact.",
        "What that says to me is that the brand is confident that you will come back to buy more. NOW THAT’S A HACK!!!!"
    ]
},
{
    "slug": "amvca-2024-fashion-review",
    "title": "Glitz, Glamour, and Nigeria’s Finest: Style Today’s AMVCA Fashion Review",
    "kicker": "Red Carpet",
    "dek": "A Style Today review of the standout fashion moments at the 10th Africa Magic Viewers’ Choice Awards.",
    "category": "Style",
    "author": "Adzege Tersur Samuel",
    "date": "2024-05-20",
    "dateLabel": "20 May 2024",
    "image": "/images/new-content/amvca-2024-fashion-review/01.webp",
    "imageAlt": "AMVCA 2024 fashion look",
    "gallery": [
        {
            "src": "/images/new-content/amvca-2024-fashion-review/02.webp",
            "alt": "AMVCA 2024 fashion — image 1"
        },
        {
            "src": "/images/new-content/amvca-2024-fashion-review/03.webp",
            "alt": "AMVCA 2024 fashion — image 2"
        },
        {
            "src": "/images/new-content/amvca-2024-fashion-review/04.webp",
            "alt": "AMVCA 2024 fashion — image 3"
        },
        {
            "src": "/images/new-content/amvca-2024-fashion-review/05.webp",
            "alt": "AMVCA 2024 fashion — image 4"
        },
        {
            "src": "/images/new-content/amvca-2024-fashion-review/06.webp",
            "alt": "AMVCA 2024 fashion — image 5"
        },
        {
            "src": "/images/new-content/amvca-2024-fashion-review/07.webp",
            "alt": "AMVCA 2024 fashion — image 6"
        },
        {
            "src": "/images/new-content/amvca-2024-fashion-review/08.webp",
            "alt": "AMVCA 2024 fashion — image 7"
        },
        {
            "src": "/images/new-content/amvca-2024-fashion-review/09.webp",
            "alt": "AMVCA 2024 fashion — image 8"
        },
        {
            "src": "/images/new-content/amvca-2024-fashion-review/10.webp",
            "alt": "AMVCA 2024 fashion — image 9"
        }
    ],
    "body": [
        "The much anticipated African Magic Viewer’s Choice Awards, AMVCA had its 10th edition recently, and while it was a celebration of artistic and technical excellence in the television and film industry for the past year, we had to appreciate the significance of fashion in the entertainment world and the power it holds to captivate fashion enthusiasts around the country as we tune in to gaze at the dazzling display of fashion gracing the event. From the women’s glamorous and interesting dresses to the men’s interpretations of the classic tuxedo, the fashion at the AMVCA never fails to inspire and allure. Dear fashionistas, grab your hats and join us as we give our exclusive review of the fashions at the 2024 AMVCA Award Night.",
        "We’re starting well with Queen Osas Ighodaro dressed in what we can rightly call wearable art by Veekee James. Osas always embraces her beautiful figure and she did the same with this brown dress with black geometric lines arranged in a symmetric pattern that flatters both her slim waist and full hips. The dress has this full drama effect with the curves over the neckline and over the shoulders. The rest of the look is kept minimal with Osas wearing her hair slicked back and wearing black stud earrings.",
        "Next, we have Chioma Goodhair who looks very enchanting in a dress that is reminiscent of the recent Met Gala theme, Garden of Time. The corset bodice is embellished with gold metal and flowers studded with tiny crystals. The skirt of the dress is made of beige-colored fabric twists, edged with gold. Chioma always brings the drama so this is very on-brand for her. The rest of the look is relatively minimal with crystal eye make-up and her hair slicked back in a bun.",
        "Here we have the self-acclaimed “King of Fashion” Toyin Lawani wearing what looks like a sack dress. She claims to have broken the original dress she planned to wear to the event in an accident so this was created by her and her team in just a few hours. The dress has a corset bodice with a raised neckline and a mid-length skirt. The shoes are made of the same sack-cloth material with a flower bag to accessorize. Toyin’s fashion choices have always been interesting and we applaud her for her swiftness in coming up with this and also a nod to sustainable fashion and perhaps an economic statement on the cost of rice in Nigeria.",
        "Who better to be the first male than Ebuka Obi-Uchendu? He looks glorious in his monochrome look from the popular menswear designer Atafo. The double-breasted jacket is black with hand-painted white circles and a white peak lapel. The rest of the look is all-black with a crystal-studded shirt, baggy high-waist pants, satin bowtie, and black shoes. Considering Ebuka’s past fashion moments especially while hosting the Big Brother Naija show, this is a rather understated look and we might have been expecting more.",
        "Next, we have Toke Makinwa who is one of the hosts for this year’s show and she did not disappoint. Wearing another creation by Veekee James, it is worthy of note at this point that the theme of the Award Night was “Wearable Art” which simply put, is the perfect description of Toke’s look. She dazzled in this silver dress with a corset bodice and hip-hugging, double lampshade skirt with a similar design adorning the neckline. In keeping the look well-coordinated, Toke opted for a simple bun and chandelier earrings and bangles.",
        "Here we have Nana Akua Addo, a seemingly mysterious woman who makes it to the Best Dressed list every year at the AMVCA. Nana is a Ghanaian actress and media personality and she always slays with her fashion at the AMVCA. She’s wearing a figure-hugging dress with white leave outlines all over a brown base and an infinity-face headpiece. There was initially a controversy over the designer of the dress but it has been discovered that the dress was 3-D designed by a Ghanaian brand called Yoli Koomson and assembled and styled by a Nigerian brand called Ezinne Olivia Styling. Nevertheless, we are impressed by the ensemble and we look forward to what Nana would treat us to next year.",
        "Our second male look is from Neo Akpofure wearing a body suit by Ambboasa. It is heavily inspired by a body suit from Vivienne Westwood’s 1996 Fall Collection and let’s be honest, it is beautifully well done. The jacket body suit is hand-beaded to give the illusion of a naked male body with a wound. The beauty of this look lies in its details and the overall styling. Applause to Neo and his team for this wonderful look.",
        "Next is Richard Mofe-Damijo, popularly known as RMD. RMD is in his Godfather mode as he appears resplendent in this purple agbada ensemble by designer Deji & Kola. The actor who was honored at the event with the Industry Merit Award looks kingly in his ensemble completed with a matching cap and beads. The look was styled by Swanky Jerry.",
        "Beauty Tukura who won the Best Dressed Award at the event is next on our list and she wore this gorgeous dress by Emagine by Bukola. The dress is soft blush pink in color with off-the-shoulder sleeves and a mermaid-shaped skirt. The dress is a bold choice and fits Beauty’s personality so well. Her hair is styled in an up-do and she accessorized with jewelry from BOZ Jewelry.",
        "Lastly, we have Adunni Ade wearing what is best described as old Hollywood glamour. Her dress is a strapless black velvet with a dramatic white mermaid-cut train. She accessorizes with white opera gloves with bows and minimal jewelry. The look is understated but very tasteful.",
        "One thing we can all agree on is that Nigerian fashion designers are phenomenal. It is evident in the craftsmanship and overall beauty of the garments they create. Nigerian fashion has the potential to match or even surpass the sophistication and creativity seen in the pieces worn at the Met Gala."
    ]
},
{
    "slug": "met-gala-2024-style-moments",
    "title": "Our Favorite Style Moments from the 2024 Met Gala",
    "kicker": "Red Carpet",
    "dek": "From Zendaya to Tyla and Emma Chamberlain, eight looks that defined fashion’s biggest night.",
    "category": "Style",
    "author": "Style Today",
    "date": "2024-05-13",
    "dateLabel": "13 May 2024",
    "image": "/images/new-content/met-gala-2024-style-moments/01.webp",
    "imageAlt": "Met Gala 2024 Style Today feature",
    "gallery": [
        {
            "src": "/images/new-content/met-gala-2024-style-moments/02.webp",
            "alt": "Met Gala 2024 style moments — image 1"
        },
        {
            "src": "/images/new-content/met-gala-2024-style-moments/03.webp",
            "alt": "Met Gala 2024 style moments — image 2"
        },
        {
            "src": "/images/new-content/met-gala-2024-style-moments/04.webp",
            "alt": "Met Gala 2024 style moments — image 3"
        },
        {
            "src": "/images/new-content/met-gala-2024-style-moments/05.webp",
            "alt": "Met Gala 2024 style moments — image 4"
        },
        {
            "src": "/images/new-content/met-gala-2024-style-moments/06.webp",
            "alt": "Met Gala 2024 style moments — image 5"
        },
        {
            "src": "/images/new-content/met-gala-2024-style-moments/07.webp",
            "alt": "Met Gala 2024 style moments — image 6"
        },
        {
            "src": "/images/new-content/met-gala-2024-style-moments/08.webp",
            "alt": "Met Gala 2024 style moments — image 7"
        },
        {
            "src": "/images/new-content/met-gala-2024-style-moments/09.webp",
            "alt": "Met Gala 2024 style moments — image 8"
        }
    ],
    "body": [
        "The Met Gala, an annual fundraising event for the Metropolitan Museum of Arts Costume Institute in New York that brings together the worlds of fashion, art, and entertainment, dazzled yet again with its daring and innovative sartorial choices. From the latest haute couture to archival avant-garde interpretations of this year’s dress code which is “The Garden of Time”, each ensemble on the green-white-green carpet was a testament to creativity and imagination. Celebrities and designers alike seized the opportunity to showcase their unique styles, pushing the boundaries of conventional fashion and leaving a lasting impression on audiences of the iconic event. Dear readers, grab your hats and join us as we give our review of the best style moments from fashion’s biggest night.",
        "We’re starting off with Zendaya’s second look which we didn’t know we needed but we were so glad to see. She is wearing a black Givenchy by John Galliano S/S 1996 Couture which included a corseted lace-up bodice with long, puffy off-the-shoulder sleeves and a structured peplum hemline, as well as a ginormous skirt that nearly engulfed the length of the Met’s staircase. A flower bouquet hat from the Alexander McQueen S/S 2007 collection by Philip Treacy completed the look. As usual, the look was styled by Law Roach who with Zendaya, make a powerful duo in the fashion world.",
        "Next we have Mona Patel, an Indian fashion entrepreneur and philanthropist who wowed the viewers with her custom Iris Van Herpen dress complete with gold accents and kinetic parts which moved while she walked the Met stairs. She looked ethereal and congratulations to her team for achieving this stunning look.",
        "Third on our list is Tyla. The South African singer attended her first Met Gala this year and already marked her place as an icon of the fashion industry. She’s wearing a custom Balmain dress inspired by the sands of time complete with an hourglass showing how the sands pass in time. The beauty of this look lies in its details; the hourglass, the sand on the arms and shoulders, the gold necklace. Tyla and the Balmain team deserve their accolades and we can’t wait to see what she will do next year.",
        "Fourth on our list is Lena Mahfouf, a French YouTuber and author who caught our attention with her spectacular dress from Schiaparelli. The fashion house prides itself in its opulent renditions of gold on black fabric and this dress is no exception. Lena’s dress consists of a bustier made of gold flowers and a black skirt made of black silk taffeta.",
        "Another style moment we loved was from Alia Bhatt, a British-Indian actress who got one of the loudest cheers from the Met carpet as she stunned in a floral saree. The breathtaking look was designed by Sabyasachi and was a perfect blend of tradition and contemporary flair. The actress shared her admiration for the craftsmanship behind her ensemble, highlighting its symbolic nod to the theme.",
        "Next is Colman Domingo who is wearing Willy Chavarria. Colman has been serving looks recently and we’re glad he didn’t disappoint for the Met Gala. His white suit jacket-cape comes with a black floral detailing on the left lapel, black satin baggy pants and completed with a small bouquet of white calla lilies.",
        "Following is Sabrina Harrison who took the theme quite literally and we’re not mad at all. She’s wearing a gold dress embroidered with clocks and is inspired by the surrealist art style of Salvador Dali in his painting The Persistence of Memory. The dress is completed with a headpiece resembling a clock and jewelry from Bulgari.",
        "Last but not the least is Emma Chamberlain. Emma is wearing a custom dress from Jean Paul Gaultier fall 2003 couture and her early attendance gave us a glimpse of what the night was to bring. Her incredible look was completed with a matching diamond necklace and earrings."
    ]
},
{
    "slug": "mac-cosmetics-garden-city-mall",
    "title": "Glamour Unveiled: MAC Cosmetics Lights Up Port Harcourt’s Garden City Mall",
    "kicker": "Beauty",
    "dek": "MAC Cosmetics opens a new Port Harcourt store with its signature black-and-white aesthetic, professional artistry and a focus on community engagement.",
    "category": "News",
    "author": "Style Today",
    "date": "2024-03-17",
    "dateLabel": "17 March 2024",
    "image": "/images/new-content/mac-cosmetics-garden-city-mall/02.webp",
    "imageAlt": "MAC Cosmetics Garden City Mall Port Harcourt opening",
    "gallery": [
        {
            "src": "/images/new-content/mac-cosmetics-garden-city-mall/01.webp",
            "alt": "MAC Cosmetics Garden City Mall opening — image 1"
        },
        {
            "src": "/images/new-content/mac-cosmetics-garden-city-mall/03.webp",
            "alt": "MAC Cosmetics Garden City Mall opening — image 2"
        },
        {
            "src": "/images/new-content/mac-cosmetics-garden-city-mall/04.webp",
            "alt": "MAC Cosmetics Garden City Mall opening — image 3"
        },
        {
            "src": "/images/new-content/mac-cosmetics-garden-city-mall/05.webp",
            "alt": "MAC Cosmetics Garden City Mall opening — image 4"
        },
        {
            "src": "/images/new-content/mac-cosmetics-garden-city-mall/06.webp",
            "alt": "MAC Cosmetics Garden City Mall opening — image 5"
        },
        {
            "src": "/images/new-content/mac-cosmetics-garden-city-mall/07.webp",
            "alt": "MAC Cosmetics Garden City Mall opening — image 6"
        }
    ],
    "body": [
        "In a dazzling display of beauty and elegance, MAC Cosmetics has unveiled its newest store at the prestigious Garden City Mall in Port Harcourt, Nigeria. Nestled amidst the bustling energy of the city, this flagship location promises to redefine the beauty landscape in the region.",
        "The grand opening of MAC Cosmetics at Garden City Mall marks a significant milestone for beauty enthusiasts in Port Harcourt. With its iconic black and white aesthetic and sleek design, the store exudes sophistication from the moment you step through its doors.",
        "As guests entered the store, they were greeted with an array of vibrant colors and luxurious textures that epitomize the MAC brand. From the signature lipstick wall boasting every shade imaginable to the expertly curated makeup displays, every corner of the store was a feast for the senses.",
        "Attendees were treated to exclusive makeup demonstrations by MAC’s team of professional artists, showcasing the latest trends and techniques in the world of beauty. From flawless foundation application to dramatic eye looks, guests were inspired to unleash their creativity and express their individuality through makeup.",
        "The opening of MAC Cosmetics at Garden City Mall not only offers beauty aficionados access to a wide range of high-quality products but also serves as a hub for community engagement and empowerment. Through partnerships with local organizations and initiatives, MAC is committed to fostering inclusivity and diversity within the beauty industry.",
        "As the sun set on the bustling city of Port Harcourt, the lights of MAC Cosmetics illuminated Garden City Mall, signaling the dawn of a new era in beauty. With its unparalleled selection of products, expert guidance, and commitment to inclusivity, MAC Cosmetics invites beauty lovers from near and far to experience the magic of makeup in the heart of Nigeria’s Garden City."
    ]
},
  {
    "slug": "she-a-signature",
    "title": "SHE: A Signature",
    "kicker": "Fashion & Culture",
    "dek": "A poetic portrait of the Nigerian woman told through Aso-oke, denim, raffia, colour, memory and unapologetic presence.",
    "category": "Culture",
    "author": "Praise Francis Eni",
    "date": "2026-04-11",
    "dateLabel": "11 April 2026",
    "image": "/images/she-poetry-in-textile.webp",
    "imageAlt": "Style Today fashion editorial, SHE: Poetry in Textile",
    "portraitImage": "/images/635179-jpg.webp",
    "gallery": [
      { "src": "/images/635182-jpg.webp", "alt": "Teevoo Tovo Eneh and Ugochi Isaac in the SHE textile editorial" },
      { "src": "/images/635183-jpg.webp", "alt": "SHE editorial portrait featuring sculptural gele and textile styling" },
      { "src": "/images/635184-jpg.webp", "alt": "SHE editorial portrait with beaded hair and sculptural styling" },
      { "src": "/images/635185-jpg.webp", "alt": "SHE editorial fashion portrait with Aso-oke inspired patchwork" },
      { "src": "/images/640464-jpg.webp", "alt": "SHE textile editorial portrait in richly layered woven textiles" },
      { "src": "/images/640466-jpg.webp", "alt": "Teevoo Tovo Eneh and Ugochi Isaac seated together in the SHE editorial" },
      { "src": "/images/640473-jpg.webp", "alt": "SHE editorial full-length portrait with sculptural pink gele and denim" },
      { "src": "/images/643834-jpg.webp", "alt": "Beauty portrait from the SHE textile editorial" }
    ],
    "featured": true,
    "quote": "She looks at you, not seeking acceptance, but establishing a presence.",
    "body": [
      "She is a reflection of the Nigerian woman, layered gracefully. She unravels in Aso-oke and denim, threaded with raffia and memory, an embodiment that instills what the world tried to forget.",
      "Her gele remembers every woman before her, not tied, declared. Like cowries and gold, she is enriched, long before the world learned how to count her.",
      "Her skin, unapologetic! A grammar for resilience, commanding even contrasting colours to sit still in her presence. The stove wicks remember how she makes warmth from almost nothing.",
      "She holds a magazine. The only thing that dares mirror her vastness.",
      "The sun rests on her fingers; she does not chase light, she arrives with it. Nothing about her is small.",
      "Her beads fall like exclamations, heavy, yet effortless. The patchwork across her body refuses simplicity.",
      "In pink heels, she builds her own steady ground. At her ears, elegance meets the edge in florals, a quiet defiance of the world’s constructs.",
      "She is not merely two women. She is a right, a conversation between softness and command, between stillness and fire, between daring and delicate.",
      "She looks at you, not seeking acceptance, but establishing a presence.",
      "She is a Signature."
    ],
    "credits": [
      {
        "role": "Creative director / stylist / set designer",
        "name": "Owi Victor",
        "handle": "@owi_victor_"
      },
      {
        "role": "Photography",
        "name": "Samuel Usen",
        "handle": "@studio_7ng"
      },
      {
        "role": "Teevoo's outfit",
        "name": "Fashi.ora",
        "handle": "@fashi.ora_"
      },
      {
        "role": "Ugochi's outfit",
        "name": "Flo Apparels Ltd / Fashi.ora",
        "handle": "@flo_apparrelsltd / @fashi.ora_"
      },
      {
        "role": "Makeup",
        "name": "Darlington Ugochuckwu",
        "handle": "@arte.de.ugo"
      },
      {
        "role": "Models",
        "name": "Teevoo Tovo Eneh and Ugochi Isaac",
        "handle": "@teevoo_tovoeneh / @ugo_isaac_"
      },
      {
        "role": "Written piece",
        "name": "Praise Francis Eni",
        "handle": "@finepiece_"
      }
    ]
  },
  {
    "slug": "kauna-collection-cultural-symphony",
    "title": "KAUNA Collection: A Cultural Symphony of Elegance and Innovation",
    "kicker": "Review",
    "dek": "Odesbaba Couture’s limited Ileya release uses Northern Nigerian references, emerald green and paired dressing to frame a modern idea of cultural luxury.",
    "category": "Fashion",
    "author": "Ekow Barnes",
    "date": "2025-04-24",
    "dateLabel": "24 April 2025",
    "image": "/images/whatsapp-image-2026-09-22-at-22-48-08.webp",
    "imageAlt": "Models wearing the emerald green KAUNA collection",
    "portraitImage": "/images/whatsapp-image-2026-09-22-at-22-48-09.webp",
    "body": [
      "This KAUNA Collection by Odeshola Mutiu Adeshina, founder and lead designer of Odesbaba Couture, makes a resounding cultural and artistic statement. The collection, launched during the 2024 Ileya Festival, is a limited edition release that attempts elevating festive wear into a new language of Nigerian luxury, blending heritage with innovation.",
      "Its standout appeal is in its layout which pays tribute to Northern Nigerian fashion traditions. The men’s agbada is rooted in the grandeur of the Babanriga, popularly adorned by the Northern Nigerian fashionable male folks while the women’s gown reflects the flowing elegance of the kaftan. Designed as a pair of a male and female set, the collection upholds unity and shared cultural pride, a refreshing departure from the individualistic leanings of much of contemporary fashion.",
      "The emerald green palette is symbolic and deliberate. The green colour chosen in for the fabric is associated with prosperity, festivity, and renewal, and its use here makes the collection visually commanding and thematically perfect for Ileya. The men’s agbada drapes in bold circular embroidery that communicates authority and structural firmness. On the other hand, the women’s gown outlines floral embellishments at the neckline, giving a nod to graceful refinement. The merge between both designs demonstrates Odeshola’s sensitivity to balance while retaining distinct masculine and feminine energies.",
      "There is also an unusual brilliance in how the collection manipulates design variations to appeal to diverse fashion tastes. The tailoring is sharp, the finishing precise, and the fabric choices luxurious yet authentic. These qualities show a designer who respects tradition while also engaging with the expectations of a modern and cosmopolitan audience.",
      "The collection is not without some creative risks; that it draws inspiration from Northern regalia invites comparisons with designers native to that tradition, and the couple-centric concept may not resonate with everyone. Meanwhile, these choices reflect courage and vision rather than hesitation. They open up a sharp discussion about how culture and fashion can evolve while remaining faithful to their origins.",
      "Its exclusivity, being a limited release, adds weight to KAUNA’s identity as luxury. These are not conventional garments but heirloom pieces meant to be cherished. Without a gainsay or an iota of exaggeration, Odeshola has aligned Odesbaba Couture with the global standard of high fashion, where scarcity and cultural resonance remain the cornerstones of prestige.",
      "I rate KAUNA a masterful work that combines cultural depth with contemporary luxury. I am inclined to how Odeshola has broadened his creative vocabulary beyond Yoruba inspirations to embrace Northern identity without losing refinement. I see in this collection not just clothing, but a shared experience of elegance, celebration, and cultural dialogue. And I am convinced it will stand as one of Odesbaba Couture’s defining achievements."
    ]
  },
  {
    "slug": "style-by-nerd-where-ethos-meets-artistry",
    "title": "Style by Nerd: Where Ethos Meets Artistry",
    "kicker": "Designer Focus",
    "dek": "At Nook International Fashion Weekend, Chinny Bon’s label showed what happens when a brand knows its visual language — and refuses to dilute it.",
    "category": "Fashion",
    "author": "Style Today",
    "date": "2026-03-06",
    "dateLabel": "6 March 2026",
    "image": "/images/whatsapp-image-2026-09-22-at-22-48-10.webp",
    "imageAlt": "Style by Nerd runway presentation",
    "portraitImage": "/images/whatsapp-image-2026-09-22-at-22-48-11.webp",
    "body": [
      "There are brands that follow trends, and then there are brands that answer to something deeper, a vision, a conviction, a creative language all their own. Style by Nerd, the Port Harcourt-based label helmed by designer Chinny Bon, belongs firmly in the second category. Their recent showcase at Nook International Fashion Weekend was a reminder that when a brand knows exactly who it is, the work speaks with uncommon authority.",
      "What makes Style by Nerd compelling is the consistency of intention behind every piece. Chinny Bon operates with a clear ethos: that clothing can be simultaneously luxurious and conceptual, wearable and thought-provoking. That ethos doesn’t waver, it deepens.",
      "The brand has developed a nuanced relationship with color, moving beyond the obvious into palettes that feel genuinely considered. Texture does the rest of the talking, fabrics are layered and contrasted in ways that create dimension and visual tension, making each piece feel discovered rather than simply made. And every so often, Chinny Bon reaches further. One of the more creatively striking choices seen from the brand is the use of curtain heading tape, the reinforced band used to gather, pleat, or hook curtain panels, repurposed as a deliberate structural and textural element in garments. It’s the kind of decision that captures exactly what Style by Nerd is about: finding elegance in the unexpected."
    ]
  },
  {
    "slug": "onalaja-bfc-vogue-designer-fashion-fund",
    "title": "Onalaja Joins the BFC/Vogue Designer Fashion Fund Shortlist",
    "kicker": "News",
    "dek": "The Nigerian-rooted womenswear label is recognised alongside a new generation of designers for creativity and strong business vision.",
    "category": "News",
    "author": "Style Today",
    "date": "2026-03-01",
    "dateLabel": "2026",
    "image": "/images/whatsapp-image-2026-09-22-at-22-48-13.webp",
    "imageAlt": "Fashion portrait accompanying Style Today coverage",
    "body": [
      "Her work, rooted in rich African heritage yet boldly contemporary, merges sculptural craftsmanship, cultural storytelling, and forward-thinking womenswear. This recognition places Onalaja alongside fellow innovators like Aaron Esh, Bianca Saunders, Clio Peppiatt, Knwls and Talia Byre, all celebrated for creativity and strong business vision.",
      "Founded by the British Fashion Council with British Vogue and supported by Burberry, the fund champions designers who excel in design and strategic growth, offering a £150,000 prize to help scale their global impact. The winner will be revealed in May 2026, judged by an industry panel chaired by Laura Weir and Chioma Nnadi, spotlighting talent that is reshaping the future of fashion.",
      "From Lagos to London and beyond, Onalaja’s ascent signals a new era for African-inspired luxury womenswear, visionary, expressive and globally influential."
    ]
  },
  {
    "slug": "why-nigerian-fashion-houses-stay-personal",
    "title": "Why Nigerian Fashion Houses Stay Personal",
    "kicker": "Business of Fashion",
    "dek": "In Nigeria, the designer is often inseparable from the label. That has shaped how brands build identity, authority and succession.",
    "category": "Business",
    "author": "Style Today",
    "date": "2026-02-04",
    "dateLabel": "4 February 2026",
    "image": "/images/whatsapp-image-2026-09-22-at-22-48-16.webp",
    "imageAlt": "Archival fashion photograph",
    "portraitImage": "/images/whatsapp-image-2026-09-22-at-22-48-161.webp",
    "body": [
      "In global fashion, the creative director role is common. Designers move between houses, lending their vision to brands they don’t own. Think Demna at Balenciaga or Daniel Lee at Burberry. But in Nigeria, this simply doesn’t exist. Every major brand is still led by its founder.",
      "Shade Thomas-Fahm opened Nigeria’s first boutique in 1960 and at 92, she’s still here. The designers who built Nigerian fashion in the decades after are still running their own houses. Abba Folawiyo, who started in the 1970s, still leads House of Bunor. Maureen Onigbanjo of Maufechi and Funmi Ajila of Regalia By Fal are both actively designing their collections. These aren’t retired figures. They’re working designers who never handed their brands to someone else.",
      "The same pattern holds for the generation that followed. Lisa Folawiyo, Lanre Da Silva Ajayi, Mai Atafo, Deola Sagoe. All still at the helm of their own brands. Even younger designers like Tokyo James, Kenneth Ize, Mowalola Ogunlesi, and Orange Culture’s Adebayo Oke-Lawal operate the same way. If you start it, you lead it.",
      "This isn’t an oversight. It’s a fundamentally different business model. Nigerian designers build personal brands that are inseparable from their names and vision. There’s no tradition of stepping back to let someone else take creative control. Ownership and creative direction are the same thing.",
      "Western fashion houses were often started as family businesses that eventually became corporations, making it easier to bring in outside talent. Nigerian fashion is younger, more personal, and built differently. The designer is the brand. The brand is the designer.",
      "It’s not that Nigerian fashion lacks creative talent or business sophistication. It’s that the entire industry developed around a model where longevity means the founder stays in charge. Maybe that will change as brands mature and founders age. Or maybe Nigerian fashion will chart its own path entirely, as it always has.",
      "But there’s a legitimate business concern that complicates this path forward. Founders could, in theory, retain ownership while appointing a creative director to lead the design vision. The challenge is that truly talented creative directors don’t just execute someone else’s vision—they bring their own. They want to leave their mark, to reshape the brand in their image. Balenciaga under Cristóbal Balenciaga was about refined couture and sculptural elegance. Balenciaga under Demna is streetwear-inflected, ironic, sometimes confrontational. The transformation is total. For Nigerian founders whose personal identity is woven into every collection, handing over creative control to someone with their own strong vision might not feel like succession planning."
    ]
  },
  {
    "slug": "orange-culture-in-the-shadows-ss26",
    "title": "Orange Culture Unveils “In the Shadows” for Spring/Summer 2026",
    "kicker": "Runway",
    "dek": "The Lagos-founded label brought its long-running exploration of identity, belonging and androgynous dressing to Berlin Fashion Week.",
    "category": "Runway",
    "author": "Style Today",
    "date": "2026-02-04",
    "dateLabel": "4 February 2026",
    "image": "/images/orange-culture.webp",
    "imageAlt": "Orange Culture In the Shadows Spring Summer 2026 feature",
    "portraitImage": "/images/whatsapp-image-2026-09-22-at-22-48-178.webp",
    "body": [
      "Nigerian fashion powerhouse Orange Culture unveiled “In the Shadows,” their Spring/Summer 2026 collection at Berlin Fashion Week, continuing a legacy of androgynous design that began in 2011. Founded on explorations of identity, belonging, and purpose, the brand has carved out a distinctive space on global runways from London to New York, with notable collaborations including Heineken, cementing its position as one of Africa’s most innovative fashion voices."
    ]
  },
  {
    "slug": "ijgb-season-diaspora-nigerians-lagos-culture",
    "title": "The IJGB Season: How Diaspora Nigerians Are Shaping Lagos Culture",
    "kicker": "Culture",
    "dek": "Every December, returning Nigerians bring fashion, music, beauty rituals and global perspective into an intense two-way exchange with Lagos.",
    "category": "Culture",
    "author": "Style Today",
    "date": "2025-12-26",
    "dateLabel": "26 December 2025",
    "image": "/images/whatsapp-image-2026-09-22-at-22-48-24.webp",
    "imageAlt": "Style Today IJGB Season cover",
    "portraitImage": "/images/whatsapp-image-2026-09-22-at-22-48-260.webp",
    "body": [
      "Every December, Lagos transforms. The energy multiplies, the parties are endless, and everywhere you turn, there’s a fresh accent in the air. The IJGBs are back.",
      "IJGB, “I Just Got Back”, is what Lagosians call Nigerians who live abroad and return home for the holidays. This year’s “Detty December” is predicted to see over 550,000 passengers arrive at Nigerian airports, generating $71.6 million in revenue. But beyond the numbers, there’s a deeper cultural exchange happening.",
      "The Fashion Faithful",
      "Walk through Victoria Island during December, and you’ll see something remarkable: Nigerians who’ve spent the year in New York, London, or Toronto dressed head-to-toe in Nigerian designers. There’s a beautiful loyalty here. While living abroad, many diaspora Nigerians become even more intentional about wearing Nigerian fashion, it’s their connection to home, their statement of identity.",
      "Influencers like Eni Popoola (EniGivenSunday), a Nigerian-American blogger based in New York, have built platforms around this cultural pride. Through her #EniGivenSunday movement, she showcases how Nigerian heritage and contemporary fashion coexist beautifully. Content creators like Barely Bougie and others in the diaspora consistently champion home-grown designers, understanding that when you’re far from home, what you wear becomes who you are.",
      "When Ciara Came to Lagos",
      "October 2025 brought a significant moment for Nigerian fashion. Grammy-winning singer Ciara arrived in Lagos for the 15th anniversary of Lagos Fashion Week, and it was more than a celebrity appearance. After discovering through DNA testing that she had ancestral roots in the Benin Republic, her trip became a cultural homecoming.",
      "She closed the Fruché show in a fiery red sculptural dress with a perfectly tied gele. The crowd went wild. But perhaps the most telling moment was when she visited Balogun Market and told reporters she was impressed by how much Lagos had grown.",
      "Having an international star of Ciara’s caliber not just attend but actively participate in Lagos Fashion Week sends a message to the global fashion industry: what’s happening in Lagos matters.",
      "The Annual Pilgrimage to the Braider’s Chair",
      "Ask any IJGB about their December priorities, and getting their hair done is near the top of the list. For many Nigerian women living abroad, December in Lagos is a hair pilgrimage.",
      "The reasons are practical and cultural. In London, knotless braids might cost £100 or more. In Lagos? Maybe £18 at a local salon. But it’s not just about price. It’s about the experience, the skill level, and the comfort of being in a space where your hair texture is the norm.",
      "Helena Ibitayo, who grew up in London but visits Lagos twice a year, says simply: “I have a lot more confidence in the skill of braiders in Lagos.”",
      "The ritual is so ingrained that many IJGBs time their appointments strategically: get your braids done two days before your flight back so you’re returning with fresh knotless braids or goddess braids that’ll last weeks. It’s efficiency meeting culture, wrapped in the familiar soundtrack of salon gossip.",
      "The Music, The Parties, The Energy",
      "December in Lagos is a season unto itself. Last year’s lineup included Rema’s Homecoming, FlytimeFest featuring Olamide, Davido, and Ayra Starr, Rhythm Unplugged with Gunna, and The Bonfire Experience with Victony. The Experience Lagos drew hundreds of thousands to Tafawa Balewa Square.",
      "From Lekki to Victoria Island, the nights last until sunrise. Afrobeats, Afro-fusion, and Amapiano pulse through the streets. And in the middle of it all are the IJGBs, reuniting with childhood friends and remembering why Lagos, for all its chaos, feels like nowhere else on earth.",
      "What It All Means",
      "The IJGB phenomenon reveals something important about the Nigerian diaspora: their relationship with home isn’t passive. They’re active participants in shaping contemporary Nigerian culture. Through their fashion choices, their platforms, and their presence, they’re influencing what Lagos becomes.",
      "When diaspora Nigerians faithfully wear Nigerian fashion abroad, they’re doing marketing that no campaign could buy. When they share their experiences online, they’re telling the world that Lagos is worth visiting, that Nigerian culture is worth celebrating.",
      "The IJGBs will keep coming back, for the braids, for the parties, for the jollof rice that tastes better at home, for the feeling of being surrounded by people who understand you without explanation.",
      "And Lagos will keep welcoming them home. Because for all the tensions and traffic, the IJGB season proves something beautiful: you can leave Lagos, but Lagos never really leaves you."
    ]
  },
  {
    "slug": "dressing-for-different-occasions",
    "title": "Dressing For Different Occasions",
    "kicker": "Style Guide",
    "dek": "The point is not to be the most stylish person in the room. It is to understand the room — and still look unmistakably like yourself.",
    "category": "Style",
    "author": "Tonye Hart",
    "date": "2025-12-02",
    "dateLabel": "2 December 2025",
    "image": "/images/whatsapp-image-2026-09-22-at-22-48-33.webp",
    "imageAlt": "Style Today dressing for different occasions feature",
    "portraitImage": "/images/640467-jpg.webp",
    "body": [
      "Working in fashion has taught me that dressing well isn’t about being the most stylish person in the room—it’s about being the most self-aware. I started out as a stylist, now I work as a fashion consultant and producer, and over the years I’ve come to realize that clothes do more than make an impression—they communicate how you feel, how you think, and how much you value the space you’re in.",
      "Every occasion speaks its own language. For formal events, I always lean toward timeless, well-fitted pieces—something that feels refined but never forced. It’s less about extravagance and more about presence. When you’re polished, people notice, even if they can’t explain why.",
      "For casual settings, comfort and intention should meet halfway. I like effortless looks that still feel put-together—jeans with a crisp shirt, a simple dress with character, or monochrome tones that say “I didn’t try too hard, but I cared.”",
      "And for creative or fashion events—those are the moments I truly enjoy. They allow freedom. You can play with color, texture, or silhouette, and let your outfit tell a bit of your story. The key is authenticity. If it doesn’t feel like you, it won’t work, no matter how trendy it is.",
      "Dressing for different occasions isn’t about following fashion rules—it’s about understanding context and carrying your individuality through every look. When you feel good in what you’re wearing, it changes how you walk, how you smile, how you connect. And that, for me, is the real power of style."
    ]
  }
];

export const bySlug = (slug: string) => articles.find((article) => article.slug === slug);
export const categories = Array.from(new Set(articles.map((article) => article.category)));
