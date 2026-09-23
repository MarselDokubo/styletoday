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
  featured?: boolean;
  body: string[];
  credits?: Credit[];
  quote?: string;
};

export const articles: Article[] = [
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
    "title": "Dressing for Different Occasions",
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
