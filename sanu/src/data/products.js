// ===================== PRODUCT DATA =====================
export const products = [
  {
    id: 1,
    name: "Celestial Rose Ring",
    category: "rings",
    price: 4299,
    original: 5999,
    rating: 4.9,
    reviews: 128,
    desc: "Delicately crafted rose gold ring with celestial motifs. Available in sterling silver and 18k gold plating.",
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&q=85",
  },
  {
    id: 2,
    name: "Pearl Cascade Necklace",
    category: "necklaces",
    price: 6799,
    original: 8500,
    rating: 4.8,
    reviews: 94,
    desc: "Freshwater pearl cascade with 18k rose gold chain. Elegant and timeless.",
    badge: "New 🌸",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=85",
  },
  {
    id: 3,
    name: "Moonstone Drop Earrings",
    category: "earrings",
    price: 3299,
    original: 4200,
    rating: 4.7,
    reviews: 76,
    desc: "Rainbow moonstone drops with delicate gold wire setting. Perfect for special occasions.",
    badge: "",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85",
  },
  {
    id: 4,
    name: "Woven Gold Bracelet",
    category: "bracelets",
    price: 5499,
    original: 7200,
    rating: 4.9,
    reviews: 112,
    desc: "Hand-woven 18k gold-plated bracelet with adjustable closure.",
    badge: "Hot 🔥",
    img: "https://images.unsplash.com/photo-1573408301185-9519f94815b8?w=600&q=85",
  },
  {
    id: 5,
    name: "Crystal Bloom Hairpin",
    category: "hair",
    price: 1899,
    original: 2400,
    rating: 4.6,
    reviews: 58,
    desc: "Swarovski crystal floral hairpin. Adds instant elegance to any hairstyle.",
    badge: "New ✨",
    img: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=85",
  },
  {
    id: 6,
    name: "Infinity Diamond Ring",
    category: "rings",
    price: 7999,
    original: 10500,
    rating: 5.0,
    reviews: 45,
    desc: "Lab-grown diamond infinity band in 18k white gold plating. Symbol of eternal love.",
    badge: "Luxury 💎",
    img: "https://images.unsplash.com/photo-1585841273690-f09d6b5e3d13?w=600&q=85",
  },
  {
    id: 7,
    name: "Layered Chain Necklace",
    category: "necklaces",
    price: 3499,
    original: 4500,
    rating: 4.7,
    reviews: 87,
    desc: "Multi-layer gold-tone chain necklace set. Versatile everyday elegance.",
    badge: "",
    img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=85",
  },
  {
    id: 8,
    name: "Crystal Hoop Earrings",
    category: "earrings",
    price: 2799,
    original: 3600,
    rating: 4.8,
    reviews: 163,
    desc: "Micro-pavé cubic zirconia hoops. Lightweight yet strikingly glamorous.",
    badge: "Popular 💕",
    img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=85",
  },
];

// ===================== TESTIMONIALS DATA =====================
export const testimonials = [
  {
    name: "Priya Sharma",
    loc: "Mumbai",
    text: "Absolutely in love! The 3D viewer let me see every sparkle before buying. The ring was even more gorgeous in person! 💍",
    stars: 5,
    item: "Celestial Rose Ring",
    avatar: "P",
  },
  {
    name: "Ananya Patel",
    loc: "Bangalore",
    text: "The Pearl Cascade Necklace is stunning! SNEVAM's packaging felt like opening a dream gift 🌸",
    stars: 5,
    item: "Pearl Cascade Necklace",
    avatar: "A",
  },
  {
    name: "Riya Kapoor",
    loc: "Delhi",
    text: "The AI Stylist is so helpful! Picked the perfect set for my sister's wedding and I got SO many compliments! 💕✨",
    stars: 5,
    item: "Crystal Bloom Hairpin",
    avatar: "R",
  },
];

// ===================== AI STYLIST REPLIES =====================
export const stylistReplies = {
  wedding: [
    "For your wedding look, I am OBSESSED with **Pearl Cascade Necklace** + **Crystal Bloom Hairpin**! Add delicate pearl studs for a complete bridal dream. 💒✨",
    "Bridal queen energy! Go for **Rose Gold Ring** + **Pearl Necklace**. The Crystal Hairpin in your updo = absolute perfection! 👑💗",
  ],
  office: [
    "Office chic? **Infinity Diamond Ring** is a power move 💼 Layer with **Layered Chain Necklace** for polished sophistication. ✨",
    "Work look done right: simple **Crystal Hoops** + **Woven Gold Bracelet**. Minimal, luxe, girlboss energy! 💕",
  ],
  date: [
    "Date night = DRAMA! **Moonstone Drop Earrings** are giving romantic mystery 🌙 Skip the necklace — let those earrings do the talking! 💫",
    "For a romantic evening: sparkly hoops + a delicate bracelet stack. Keep it effortless but make every piece glow! ✨🌹",
  ],
  everyday: [
    "Everyday cute: **Celestial Rose Ring** stack is everything 💕 Add tiny gold studs and a dainty bracelet. Effortlessly gorgeous! 🌸",
    "Daily SNEVAM formula: ring stack + simple hoops + one thin chain. Put-together without even trying! 💫",
  ],
  default: [
    "Omg that sounds so cute! 🌸 I'd suggest **Pearl Cascade Necklace** + **Moonstone Earrings** — they'll absolutely complete your look! ✨",
    "Love that vibe! Try **Celestial Rose Ring** + **Layered Chain Necklace**. For hair, **Crystal Bloom Hairpin** is chef's kiss! 💗",
  ],
};

// ===================== CATEGORIES =====================
export const categories = [
  { id: "all", label: "💎 All Pieces" },
  { id: "rings", label: "💍 Rings" },
  { id: "necklaces", label: "📿 Necklaces" },
  { id: "earrings", label: "✨ Earrings" },
  { id: "bracelets", label: "💗 Bracelets" },
  { id: "hair", label: "🌸 Hair Accessories" },
];

// ===================== THEMES =====================
export const themes = [
  { id: "barbie", label: "Barbie Pink 💗", gradient: "linear-gradient(135deg,#FF1F8E,#E040FB)" },
  { id: "ocean", label: "Ocean Blue 🌊", gradient: "linear-gradient(135deg,#0077B6,#48CAE4)" },
  { id: "dark", label: "Dark Luxe 🖤", gradient: "linear-gradient(135deg,#1A1210,#D4AF37)" },
  { id: "sage", label: "Sage Green 🌿", gradient: "linear-gradient(135deg,#4CAF82,#26A69A)" },
  { id: "royal", label: "Royal Purple 👑", gradient: "linear-gradient(135deg,#7B2FBE,#9333EA)" },
  { id: "sunset", label: "Sunset ☀️", gradient: "linear-gradient(135deg,#F97316,#EC4899)" },
  { id: "mint", label: "Mint Dream 🧊", gradient: "linear-gradient(135deg,#06B6D4,#10B981)" },
];