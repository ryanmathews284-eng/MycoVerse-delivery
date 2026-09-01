// src/data/products.ts
export interface ProductVariant {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  category: 'chocolates' | 'strains' | 'microdose' | 'gummies';
  categoryTitle: string;
  name: string;
  slug: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription: string;
  ingredients: string[];
  labTested: string;
  image: string;
  variants: ProductVariant[];
}

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. ARTISAN CHOCOLATES (10 Items)
  // ==========================================
  {
    id: 'choc-1',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'MycoBlend Dark Espresso Bar',
    slug: 'mycoblend-dark-espresso-bar',
    badge: 'Best Seller',
    rating: 4.9,
    reviewsCount: 174,
    description: 'Belgian dark chocolate infused with organic espresso beans and fine botanical extracts. Order artisan mushroom chocolate bars delivery online.',
    longDescription: 'Looking to buy premium mushroom chocolate bars online in the US and Canada? Our MycoBlend Dark Espresso Bar combines single-origin Belgian dark cacao with organic espresso beans and precise botanical extractions. Masterfully crafted to completely mask earthy undertones while delivering smooth, predictable cognitive enhancement, microdosing flow states, and sustained daily focus.',
    ingredients: ['72% Single-Origin Belgian Dark Cacao', 'Organic Espresso Beans', 'Standardized Active Botanical Extract', 'Organic Vanilla Bean'],
    labTested: 'HPLC Verified & Triple Lab Tested for Purity & Accurate Dosaging',
    image: '/src/assets/images/mycoblend-dark-espresso-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 45.00 },
      { name: 'Double Pack (8g)', price: 80.00 }
    ]
  },
  {
    id: 'choc-2',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'MycoVerse Sea Salt Milk Bar',
    slug: 'mycoverse-sea-salt-milk-bar',
    badge: 'Trending',
    rating: 4.8,
    reviewsCount: 142,
    description: 'Creamy artisan milk chocolate blended with Maldon sea salt crystals. Fast, discreet cross-border shipping.',
    longDescription: 'Experience the perfect balance of savory and sweet with the MycoVerse Sea Salt Milk Bar. Formulated for connoisseurs seeking smooth artisan psilocybin edibles delivery, this bar blends creamy milk chocolate with hand-harvested Maldon sea salt crystals. Vacuum-sealed and dispatched directly from our Los Angeles distribution hub for maximum freshness.',
    ingredients: ['Artisan Milk Chocolate', 'Maldon Sea Salt Crystals', 'Active Botanical Extract', 'Organic Cacao Butter'],
    labTested: 'Batch Tested - Heavy Metal & Pesticide Free',
    image: '/src/assets/images/mycoverse-sea-salt-milk-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 42.00 },
      { name: 'Double Pack (8g)', price: 75.00 }
    ]
  },
  {
    id: 'choc-3',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'Velvet Berry Mushroom Bar',
    slug: 'velvet-berry-mushroom-bar',
    badge: 'Popular',
    rating: 4.9,
    reviewsCount: 98,
    description: 'White and dark chocolate swirl infused with freeze-dried wild raspberry dust for a decadent flavor profile.',
    longDescription: 'Indulge in the Velvet Berry Mushroom Bar, featuring an exquisite swirl of white and dark Belgian chocolate paired with tart freeze-dried wild raspberry dust. Engineered for both sensory delight and clean, predictable microdose stacking, this artisan creation is a top choice for online delivery across North America.',
    ingredients: ['Belgian White Chocolate', 'Dark Cacao Swirl', 'Freeze-Dried Wild Raspberry Dust', 'Active Micro-Extract'],
    labTested: 'Third-Party Laboratory Certified Potency',
    image: '/src/assets/images/velvet-berry-mushroom-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 45.00 }
    ]
  },
  {
    id: 'choc-4',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'Golden Macadamia Infused Bar',
    slug: 'golden-macadamia-infused-bar',
    badge: 'Limited',
    rating: 5.0,
    reviewsCount: 64,
    description: 'Rich dark cacao paired with roasted macadamia nut crunch and adaptogenic notes.',
    longDescription: 'Crafted for discerning explorers, the Golden Macadamia Infused Bar pairs rich, single-origin dark cacao with crunchy roasted macadamia nuts. Infused with powerful adaptogenic notes and clean active extracts, it delivers an elevated wellness experience shipped securely to your door.',
    ingredients: ['Dark Cacao', 'Roasted Macadamia Nuts', 'Adaptogenic Herbal Blend', 'Active Extract'],
    labTested: 'Verified Clean Label & Potency Tested',
    image: '/src/assets/images/golden-macadamia-infused-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 48.00 }
    ]
  },
  {
    id: 'choc-5',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'Mint Cacao Chill Bar',
    slug: 'mint-cacao-chill-bar',
    badge: 'New',
    rating: 4.7,
    reviewsCount: 51,
    description: 'Dark Belgian chocolate infused with refreshing organic peppermint oil for a cool, soothing finish.',
    longDescription: 'Refresh your mind and unwind your body with the Mint Cacao Chill Bar. Combining dark Belgian chocolate with crisp organic peppermint oil, this bar is designed to ease tension while delivering smooth, harmonious microdose benefits.',
    ingredients: ['Dark Belgian Chocolate', 'Organic Peppermint Oil', 'Active Botanical Blend'],
    labTested: 'Certified Pure Extract Analysis',
    image: '/src/assets/images/mint-cacao-chill-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 42.00 }
    ]
  },
  {
    id: 'choc-6',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'Caramel Hazelnut Crunch Bar',
    slug: 'caramel-hazelnut-crunch-bar',
    badge: 'Popular',
    rating: 4.9,
    reviewsCount: 112,
    description: 'Rich milk chocolate layered with golden caramel bits and roasted Italian hazelnuts.',
    longDescription: 'Satisfy your sweet tooth with the Caramel Hazelnut Crunch Bar. Featuring rich milk chocolate, golden caramel shards, and roasted Italian hazelnuts, it masks earthy notes completely for an enjoyable wellness routine.',
    ingredients: ['Milk Chocolate', 'Caramel Shards', 'Roasted Italian Hazelnuts', 'Active Extract'],
    labTested: 'Laboratory Tested for Quality & Consistency',
    image: '/src/assets/images/caramel-hazelnut-crunch-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 45.00 }
    ]
  },
  {
    id: 'choc-7',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'Matcha Green Tea Fusion Bar',
    slug: 'matcha-green-tea-fusion-bar',
    badge: 'Organic',
    rating: 4.8,
    reviewsCount: 89,
    description: 'Ceremonial-grade Uji matcha blended into smooth white chocolate with earthy undertones.',
    longDescription: 'Boost your daily cognitive performance with the Matcha Green Tea Fusion Bar. Ceremonial-grade Uji matcha is folded into creamy white chocolate alongside active extracts, offering clean L-theanine synergy for jitter-free focus.',
    ingredients: ['White Chocolate', 'Ceremonial Uji Matcha Powder', 'Active Extract', 'Organic Cacao Butter'],
    labTested: 'Pure Organic Certification & Potency Verified',
    image: '/src/assets/images/matcha-green-tea-fusion-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 46.00 }
    ]
  },
  {
    id: 'choc-8',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'Toasted Coconut Dark Bar',
    slug: 'toasted-coconut-dark-bar',
    badge: 'Exotic',
    rating: 4.7,
    reviewsCount: 76,
    description: '72% single-origin dark chocolate topped with crisp, toasted organic coconut flakes.',
    longDescription: 'Transport your senses with the Toasted Coconut Dark Bar. Built on a foundation of 72% single-origin dark chocolate and topped with organic coconut flakes, it delivers a tropical twist on traditional functional mycology.',
    ingredients: ['72% Dark Chocolate', 'Toasted Organic Coconut', 'Active Extract'],
    labTested: 'Rigorously Tested for Heavy Metals & Purity',
    image: '/src/assets/images/toasted-coconut-dark-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 44.00 }
    ]
  },
  {
    id: 'choc-9',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'Blood Orange Spice Bar',
    slug: 'blood-orange-spice-bar',
    badge: 'Seasonal',
    rating: 4.9,
    reviewsCount: 63,
    description: 'Zesty blood orange essential oil infused into dark chocolate with a hint of Ceylon cinnamon.',
    longDescription: 'Warm your palate with the Blood Orange Spice Bar. Infused with zesty blood orange essential oil and genuine Ceylon cinnamon, this dark chocolate masterpiece provides an invigorating sensory journey.',
    ingredients: ['Dark Chocolate', 'Blood Orange Essential Oil', 'Ceylon Cinnamon', 'Active Extract'],
    labTested: 'Certified Lab Analyzed for Uniform Dosing',
    image: '/src/assets/images/blood-orange-spice-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 45.00 }
    ]
  },
  {
    id: 'choc-10',
    category: 'chocolates',
    categoryTitle: 'Artisan Chocolates',
    name: 'Classic Mystic Reserve Bar',
    slug: 'classic-mystic-reserve-bar',
    badge: 'Reserve',
    rating: 5.0,
    reviewsCount: 210,
    description: 'Unflavored master-crafted 80% dark chocolate reserve for traditional purists.',
    longDescription: 'The pinnacle of artisan mycology: the Classic Mystic Reserve Bar features unflavored, master-crafted 80% dark chocolate designed for purists who value unadulterated potency, deep flavor notes, and reliable dosing.',
    ingredients: ['80% Single-Origin Dark Cacao', 'Pure Active Extract'],
    labTested: 'Master Batch Triple Tested',
    image: '/src/assets/images/classic-mystic-reserve-bar.jpg',
    variants: [
      { name: 'Standard (1 Bar - 4g)', price: 40.00 }
    ]
  },

  // ==========================================
  // 2. DRIED STRAINS & FUNGI (8 Items)
  // ==========================================
  {
    id: 'strain-1',
    category: 'strains',
    categoryTitle: 'Dried Strains',
    name: 'Golden Teacher Whole Fungi',
    slug: 'golden-teacher-classic-tier',
    badge: 'Classic Strain',
    rating: 5.0,
    reviewsCount: 180,
    description: 'The benchmark for philosophical introspection, warm visual clarity, and dependable cultivation. Order dried functional strains Los Angeles.',
    longDescription: 'Golden Teacher whole fungi remain the gold standard for mycological exploration across the US and Canada. Renowned for inducing warm visual clarity, deep philosophical introspection, and emotional balance, our specimens are vacuum-sealed in Los Angeles to preserve full alkaloid potency.',
    ingredients: ['100% Psilocybe Cubensis Whole Dried Fungi (Golden Teacher Lineage)'],
    labTested: 'Verified Psilocybin / Psilocin Potency Profile',
    image: '/src/assets/images/golden-teacher-classic-tier.jpg',
    variants: [
      { name: '3.5g (1/8 oz)', price: 40 },
      { name: '7g (1/4 oz)', price: 75 },
      { name: '14g (1/2 oz)', price: 140 },
      { name: '28g (1 Oz)', price: 250 }
    ]
  },
  {
    id: 'strain-2',
    category: 'strains',
    categoryTitle: 'Dried Strains',
    name: 'Albino Penis Envy (APE)',
    slug: 'albino-penis-envy-reserve',
    badge: 'Max Potency',
    rating: 5.0,
    reviewsCount: 175,
    description: 'Ghostly white, dense mutant specimens possessing exceptional potency levels for experienced voyagers.',
    longDescription: 'Albino Penis Envy (APE) represents the absolute pinnacle of potency within dried cubensis strains. Characterized by dense, ghostly white caps and stems, APE is recommended strictly for experienced voyagers seeking profound perceptual shifts and cosmic insight.',
    ingredients: ['100% Premium Albino Penis Envy Dried Cultivar'],
    labTested: 'Maximum Potency Laboratory Verified',
    image: '/src/assets/images/albino-penis-envy-reserve.jpg',
    variants: [
      { name: '3.5g (1/8 oz)', price: 55 },
      { name: '7g (1/4 oz)', price: 100 },
      { name: '14g (1/2 oz)', price: 185 },
      { name: '28g (1 Oz)', price: 340 }
    ]
  },
  {
    id: 'strain-3',
    category: 'strains',
    categoryTitle: 'Dried Strains',
    name: 'Blue Meanies Cubensis',
    slug: 'blue-meanie-elite-strain',
    badge: 'Vibrant Energy',
    rating: 4.9,
    reviewsCount: 145,
    description: 'Fast-acting euphoric waves accompanied by brilliant sensory enhancement and rich geometric patterns.',
    longDescription: 'Blue Meanies Cubensis delivers fast-acting euphoric waves, vivid color saturation, and intricate geometric patterns. Cultivated under strict sterile conditions and safely packaged in smell-proof vacuum seals.',
    ingredients: ['100% Cubensis Blue Meanie Strain'],
    labTested: 'Tested for Optimal Dryness & Alkaloid Retention',
    image: '/src/assets/images/blue-meanie-elite-strain.jpg',
    variants: [
      { name: '3.5g (1/8 oz)', price: 42 },
      { name: '7g (1/4 oz)', price: 80 },
      { name: '14g (1/2 oz)', price: 150 },
      { name: '28g (1 Oz)', price: 270 }
    ]
  },
  {
    id: 'strain-4',
    category: 'strains',
    categoryTitle: 'Dried Strains',
    name: 'B+ Strain Fungi',
    slug: 'b-plus-optimizing-strain',
    badge: 'Beginner Friendly',
    rating: 4.8,
    reviewsCount: 120,
    description: 'Robust, friendly strain delivering gentle body warmth, mild visuals, and stable emotional uplift.',
    longDescription: 'The B+ strain is celebrated for its adaptability, gentle body high, and warm mood elevation. Ideal for beginners and intermediate users looking for a smooth, reliable, and friendly experience.',
    ingredients: ['100% B+ Cubensis Whole Mushrooms'],
    labTested: 'Standardized Quality & Safety Assayed',
    image: '/src/assets/images/b-plus-optimizing-strain.jpg',
    variants: [
      { name: '3.5g (1/8 oz)', price: 35 },
      { name: '7g (1/4 oz)', price: 65 },
      { name: '14g (1/2 oz)', price: 120 },
      { name: '28g (1 Oz)', price: 220 }
    ]
  },
  {
    id: 'strain-5',
    category: 'strains',
    categoryTitle: 'Dried Strains',
    name: 'Mazatapec Ancient Mexican',
    slug: 'mazatapec-sacred-lineage',
    badge: 'Spiritual Heritage',
    rating: 4.9,
    reviewsCount: 105,
    description: 'Traditional lineage originating from central Mexico, known for deeply spiritual, inward-facing journeys.',
    longDescription: 'Trace back to ancient roots with Mazatapec, a sacred Mexican landrace strain prized for deeply spiritual, meditative, and inward-facing journeys. Vacuum-sealed to ensure peak freshness upon delivery.',
    ingredients: ['100% Mazatapec Landrace Fungi'],
    labTested: 'Authentic Lineage Verified via Spectrometry',
    image: '/src/assets/images/mazatapec-sacred-lineage.jpg',
    variants: [
      { name: '3.5g (1/8 oz)', price: 40 },
      { name: '7g (1/4 oz)', price: 75 },
      { name: '14g (1/2 oz)', price: 135 },
      { name: '28g (1 Oz)', price: 245 }
    ]
  },
  {
    id: 'strain-6',
    category: 'strains',
    categoryTitle: 'Dried Strains',
    name: 'Penis Envy Uncut',
    slug: 'penis-envy-uncut-grade',
    badge: 'Elite Reserve',
    rating: 5.0,
    reviewsCount: 135,
    description: 'The natural un-hybridized phenotype featuring closed veils and colossal psilocybin concentrations.',
    longDescription: 'Penis Envy Uncut preserves the natural mutations of the legendary PE line without cross-breeding. Featuring closed veils that trap dense active compounds, this elite reserve grade offers staggering potency.',
    ingredients: ['100% Uncut Penis Envy Specimen'],
    labTested: 'Ultra-High Alkaloid Content Verified',
    image: '/src/assets/images/penis-envy-uncut-grade.jpg',
    variants: [
      { name: '3.5g (1/8 oz)', price: 50 },
      { name: '7g (1/4 oz)', price: 90 },
      { name: '14g (1/2 oz)', price: 170 },
      { name: '28g (1 Oz)', price: 310 }
    ]
  },
  {
    id: 'strain-9',
    category: 'strains',
    categoryTitle: 'Dried Strains',
    name: 'Hillbilly Pumpkin Cultivar',
    slug: 'hillbilly-pumpkin-cultivar',
    badge: 'Rare Phenotype',
    rating: 4.9,
    reviewsCount: 85,
    description: 'Distinctive golden caps with stocky stems yielding heavy euphoria and profound relaxation.',
    longDescription: 'The Hillbilly Pumpkin Cultivar is a unique Midwestern find featuring short, robust stems and broad golden caps. Delivers heavy bodily relaxation paired with a cheerful, sunlit headspace.',
    ingredients: ['100% Hillbilly Pumpkin Cubensis'],
    labTested: 'Purity and Moisture Controlled',
    image: '/src/assets/images/hillbilly-pumpkin-cultivar.jpg',
    variants: [
      { name: '3.5g (1/8 oz)', price: 45 },
      { name: '7g (1/4 oz)', price: 85 },
      { name: '14g (1/2 oz)', price: 160 },
      { name: '28g (1 Oz)', price: 290 }
    ]
  },
  {
    id: 'strain-10',
    category: 'strains',
    categoryTitle: 'Dried Strains',
    name: 'South American Landrace Strains',
    slug: 'south-american-landrace-strains',
    badge: 'Pure Landrace',
    rating: 4.8,
    reviewsCount: 90,
    description: 'Unadulterated wild genetics delivering balanced, harmonious, and deeply therapeutic sessions.',
    longDescription: 'Sourced directly from pristine equatorial genetics, South American Landrace provides an exceptionally harmonious, clean, and therapeutically balanced session for wellness seekers.',
    ingredients: ['100% South American Wild Landrace Fungi'],
    labTested: 'Certified Clean Cultivation Standards',
    image: '/src/assets/images/south-american-landrace-strains.jpg',
    variants: [
      { name: '3.5g (1/8 oz)', price: 40 },
      { name: '7g (1/4 oz)', price: 75 },
      { name: '14g (1/2 oz)', price: 140 },
      { name: '28g (1 Oz)', price: 250 }
    ]
  },

  // ==========================================
  // 3. MICRODOSE CAPSULES & STACKS (10 Items)
  // ==========================================
  {
    id: 'micro-1',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Stamets Protocol Stack',
    slug: 'stamets-protocol-stack',
    badge: 'Neurogenesis',
    rating: 4.9,
    reviewsCount: 165,
    description: 'The golden formula: active extract stacked precisely with organic Lion’s Mane and Niacin flush. Buy microdose capsules online US.',
    longDescription: 'The definitive Stamets Protocol Stack designed for neurogenesis, memory retention, and neuroplasticity. Expertly formulated with precise sub-perceptual active extracts, organic Lion’s Mane fruiting body, and Niacin for vascular delivery.',
    ingredients: ['Standardized Active Extract (Sub-perceptual)', 'Organic Lion’s Mane (Hericium erinaceus)', 'Niacin (Vitamin B3 Flush)'],
    labTested: 'Pharmaceutical Grade Encapsulation & Assay Tested',
    image: '/src/assets/images/stamets-protocol-stack.jpg',
    variants: [
      { name: '15 Count', price: 45 },
      { name: '30 Count', price: 75 },
      { name: '60 Count', price: 135 }
    ]
  },
  {
    id: 'micro-2',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Daily Focus & Flow Nootropic Stack',
    slug: 'daily-focus-flow-nootropic-stack',
    badge: 'Daily Driver',
    rating: 4.8,
    reviewsCount: 140,
    description: 'Sub-perceptual microdose capsules engineered for deep work sessions, coding sprints, and creative clarity.',
    longDescription: 'Engineered specifically for creators, developers, and professionals. The Daily Focus & Flow Nootropic Stack enhances mental stamina, removes brain fog, and establishes a sustained state of deep workflow productivity.',
    ingredients: ['Active Micro-Dose Extract', 'Cordyceps Militaris', 'Bacopa Monnieri', 'Vitamin B12'],
    labTested: 'Clean Nootropic Grade Tested',
    image: '/src/assets/images/daily-focus-flow-nootropic-stack.jpg',
    variants: [
      { name: '30 Count', price: 55 },
      { name: '60 Count', price: 95 }
    ]
  },
  {
    id: 'micro-3',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Calm & Centered Cordyceps Blend',
    slug: 'calm-centered-cordyceps-blend',
    badge: 'Stress Relief',
    rating: 4.9,
    reviewsCount: 118,
    description: 'Soothes nervous system tension while sustaining physical stamina and emotional equilibrium.',
    longDescription: 'Combat modern daily stress with our Calm & Centered Cordyceps Blend. This formulation harmonizes adaptogenic Cordyceps with calming micro-alkaloids to soothe the nervous system without causing drowsiness.',
    ingredients: ['Active Extract', 'Organic Cordyceps Extract', 'L-Theanine', 'Lemon Balm'],
    labTested: 'Pure Botanical Assay Verified',
    image: '/src/assets/images/calm-centered-cordyceps-blend.jpg',
    variants: [
      { name: '30 Count', price: 60 },
      { name: '60 Count', price: 110 }
    ]
  },
  {
    id: 'micro-4',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Alpha-Brain Quantum Microdose',
    slug: 'alpha-brain-quantum-microdose',
    badge: 'High Performance',
    rating: 5.0,
    reviewsCount: 125,
    description: 'Elite athlete and executive formulation designed for peak neurological output and rapid memory recall.',
    longDescription: 'The Alpha-Brain Quantum Microdose is our most advanced executive stack. Designed to stimulate neurotransmitter efficiency and support rapid problem-solving during high-stress endeavors.',
    ingredients: ['Active Extract', 'Lion’s Mane Dual Extract', 'Alpha-GPC', 'Huperzine A'],
    labTested: 'Rigorously Tested for Maximum Bioavailability',
    image: '/src/assets/images/alpha-brain-quantum-microdose.jpg',
    variants: [
      { name: '30 Count', price: 65 },
      { name: '60 Count', price: 120 }
    ]
  },
  {
    id: 'micro-5',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Serenity Reishi & Psilo Balance',
    slug: 'serenity-reishi-psilo-balance',
    badge: 'Mood Elevation',
    rating: 4.7,
    reviewsCount: 98,
    description: 'Blends calming Reishi fruiting bodies with micro-doses to combat burnout and anxiety.',
    longDescription: 'Rebalance your emotional center with Serenity Reishi & Psilo Balance. Pairing antioxidant-rich Ganoderma lucidum (Reishi) with precise sub-perceptual extracts to alleviate burnout and foster inner peace.',
    ingredients: ['Active Micro-Extract', 'Organic Red Reishi Spore Powder', 'Ashwagandha Extract'],
    labTested: 'Heavy Metal & Microbial Free Certified',
    image: '/src/assets/images/serenity-reishi-psilo-balance.jpg',
    variants: [
      { name: '30 Count', price: 55 },
      { name: '60 Count', price: 95 }
    ]
  },
  {
    id: 'micro-6',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Energy & Stamina Cordyceps Stack',
    slug: 'energy-stamina-cordyceps-stack',
    badge: 'Athletic Edge',
    rating: 4.8,
    reviewsCount: 104,
    description: 'Optimized for pre-workout vitality, cellular oxygenation, and clean natural drive.',
    longDescription: 'Supercharge your workouts and daily energy reserves. The Energy & Stamina Cordyceps Stack increases cellular ATP production and oxygen utilization without synthetic stimulants or jitters.',
    ingredients: ['Active Extract', 'Cordyceps Militaris Fruiting Body', 'Rhodiola Rosea'],
    labTested: 'Athlete Safe & Doping Free Verified',
    image: '/src/assets/images/energy-stamina-cordyceps-stack.jpg',
    variants: [
      { name: '30 Count', price: 58 },
      { name: '60 Count', price: 105 }
    ]
  },
  {
    id: 'micro-7',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Immunity & Shield Turkey Tail Stack',
    slug: 'immunity-shield-turkey-tail-stack',
    badge: 'Immune Support',
    rating: 4.9,
    reviewsCount: 89,
    description: 'Polysaccharide-rich Turkey Tail extract combined with active micro-doses for total bodily defense.',
    longDescription: 'Fortify your immune defenses while maintaining cognitive sharpness. Our Immunity & Shield stack combines beta-glucan-packed Turkey Tail mushroom extract with precise daily micro-doses.',
    ingredients: ['Active Micro-Extract', 'Turkey Tail Polysaccharide Extract', 'Zinc Ascorbate'],
    labTested: 'Beta-Glucan Concentration Assay Verified',
    image: '/src/assets/images/immunity-shield-turkey-tail-stack.jpg',
    variants: [
      { name: '30 Count', price: 50 },
      { name: '60 Count', price: 90 }
    ]
  },
  {
    id: 'micro-8',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Nighttime Dream & Recovery Capsules',
    slug: 'nighttime-dream-recovery-capsules',
    badge: 'REM Enhancer',
    rating: 4.8,
    reviewsCount: 84,
    description: 'Formulated for evening intake to promote lucid dreaming cycles and deep muscular relaxation.',
    longDescription: 'Unlock deep restorative sleep and vivid dream cycles. Formulated with soothing evening botanicals and mild active extracts to gently transition your mind into peaceful nighttime REM sleep.',
    ingredients: ['Mild Active Extract', 'Magnesium Glycinate', 'Passionflower Extract', 'Melatonin'],
    labTested: 'Pharmaceutical Purity Assayed',
    image: '/src/assets/images/nighttime-dream-recovery-capsules.jpg',
    variants: [
      { name: '30 Count', price: 60 },
      { name: '60 Count', price: 110 }
    ]
  },
  {
    id: 'micro-9',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Cognitive Longevity Lion’s Mane Pure',
    slug: 'cognitive-longevity-lions-mane-pure',
    badge: 'Brain Health',
    rating: 5.0,
    reviewsCount: 138,
    description: 'High-potency dual-extract Lion’s Mane fortified with micro-alkaloids for neural pathway growth.',
    longDescription: 'Dedicated to long-term brain health and nerve growth factor (NGF) stimulation. This pure dual-extract Lion’s Mane formula is fortified with activating micro-alkaloids for maximum neurological benefit.',
    ingredients: ['Organic Lion’s Mane Dual Extract (Fruiting Body & Mycelium)', 'BioPerine Black Pepper Extract'],
    labTested: 'Hericenone & Erinacine HPLC Tested',
    image: '/src/assets/images/cognitive-longevity-lions-mane-pure.jpg',
    variants: [
      { name: '30 Count', price: 48 },
      { name: '60 Count', price: 85 }
    ]
  },
  {
    id: 'micro-10',
    category: 'microdose',
    categoryTitle: 'Microdose Stacks',
    name: 'Micro-Reset 4-In-1 Synergy Stack',
    slug: 'micro-reset-4-in-1-synergy-stack',
    badge: 'Complete Synergy',
    rating: 4.9,
    reviewsCount: 112,
    description: 'Comprehensive formula uniting Reishi, Cordyceps, Lion’s Mane, and precise active micro-extracts.',
    longDescription: 'The ultimate all-in-one wellness capsule. The Micro-Reset Synergy Stack unifies Reishi, Cordyceps, Lion’s Mane, and precise active micro-extracts into a single daily capsule for total mind-body optimization.',
    ingredients: ['Active Micro-Extract', 'Lion’s Mane', 'Cordyceps', 'Reishi', 'Turkey Tail Blend'],
    labTested: 'Comprehensive 4-Way Mycology Assay Passed',
    image: '/src/assets/images/micro-reset-4-in-1-synergy-stack.jpg',
    variants: [
      { name: '30 Count', price: 70 },
      { name: '60 Count', price: 130 }
    ]
  },

  // ==========================================
  // 4. GUMMIES & EXTRACTS (10 Items)
  // ==========================================
  {
    id: 'gummy-1',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Muscimol Amanita Sleep Gummies',
    slug: 'muscimol-amanita-sleep-gummies',
    badge: 'Legal Wellness',
    rating: 4.7,
    reviewsCount: 145,
    description: 'Pure decarboxylated Muscimol extract formulated for restorative sleep and vivid dream states. Order legal botanical wellness online.',
    longDescription: 'Experience legal relaxation and deep slumber with Muscimol Amanita Sleep Gummies. Formulated with pure decarboxylated Amanita muscaria extract (Muscimol), these gummies provide a tranquil body melt and enhanced dream recall.',
    ingredients: ['Decarboxylated Muscimol Extract', 'Organic Tapioca Syrup', 'Natural Elderberry Flavor', 'Citric Acid'],
    labTested: 'Lab Certified Ibotenic Acid Free (< 1ppm)',
    image: '/src/assets/images/muscimol-amanita-sleep-gummies.jpg',
    variants: [
      { name: 'Single Pack (10ct)', price: 45 },
      { name: 'Double Pack (20ct)', price: 80 }
    ]
  },
  {
    id: 'gummy-2',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Cosmic Peach Euphoria Gummies',
    slug: 'cosmic-peach-euphoria-gummies',
    badge: 'Top Fruit Flavor',
    rating: 4.9,
    reviewsCount: 160,
    description: 'Juicy artisan peach gummies infused with active botanical extracts and full-spectrum calming terpenes.',
    longDescription: 'Delight your taste buds with Cosmic Peach Euphoria Gummies. Infused with active botanical extracts and calming full-spectrum terpenes, they deliver a juicy burst of peach flavor paired with smooth uplift.',
    ingredients: ['Active Botanical Extract', 'Organic Peach Juice Concentrate', 'Botanical Terpenes', 'Pectin'],
    labTested: 'Uniform Dispersion & Potency Tested',
    image: '/src/assets/images/cosmic-peach-euphoria-gummies.jpg',
    variants: [
      { name: '10 Count', price: 40 },
      { name: '20 Count', price: 75 }
    ]
  },
  {
    id: 'gummy-3',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Wild Berry Micro-Extract Sublingual Drops',
    slug: 'wild-berry-micro-extract-sublingual-drops',
    badge: 'Rapid Onset',
    rating: 5.0,
    reviewsCount: 132,
    description: 'Fast-absorbing sublingual tincture engineered for rapid bioavailability, precise dosing, and portability.',
    longDescription: 'For those who prefer liquid titration over capsules or edibles, our Wild Berry Sublingual Drops offer rapid bioavailability and precise dropper-by-dropper control with delicious wild berry flavoring.',
    ingredients: ['Micronized Active Extract', 'MCT Carrier Oil', 'Natural Wild Berry Flavor', 'Stevia Leaf Extract'],
    labTested: 'HPLC Sublingual Tincture Assay Certified',
    image: '/src/assets/images/wild-berry-micro-extract-sublingual-drops.jpg',
    variants: [
      { name: '30ml Bottle', price: 65 },
      { name: '50ml Bottle', price: 95 }
    ]
  },
  {
    id: 'gummy-4',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Tre House Sour Tropical Mega Gummies',
    slug: 'tre-house-sour-tropical-mega-gummies',
    badge: 'Extra Strength',
    rating: 4.9,
    reviewsCount: 150,
    description: 'Explosive sour tropical fruit flavor packed with proprietary active wellness compounds for a robust journey.',
    longDescription: 'Pack a punch with Tre House Sour Tropical Mega Gummies. Bursting with mouth-watering sour citrus and mango flavors, these extra-strength gummies are engineered for experienced psychonauts seeking bold adventures.',
    ingredients: ['Proprietary Active Extract Blend', 'Organic Cane Sugar', 'Citric Acid', 'Natural Tropical Flavorings'],
    labTested: 'Verified Extra Strength Potency Batch Analysis',
    image: '/src/assets/images/tre-house-sour-tropical-mega-gummies.jpg',
    variants: [
      { name: '15 Count Jar', price: 45 },
      { name: '30 Count Jar', price: 85 }
    ]
  },
  {
    id: 'gummy-5',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Electric Blue Raspberry Chews',
    slug: 'electric-blue-raspberry-chews',
    badge: 'Sensory Burst',
    rating: 4.8,
    reviewsCount: 108,
    description: 'Tart blue raspberry chews designed to elevate mood, spark vibrant conversations, and inspire creativity.',
    longDescription: 'Spark your social energy with Electric Blue Raspberry Chews. Designed to elevate mood, inspire artistic flow, and encourage vibrant conversations in social settings.',
    ingredients: ['Active Botanical Extract', 'Natural Blue Raspberry Extract', 'Organic Tapioca', 'Carnauba Wax'],
    labTested: 'Batch Tested for Consistent Dosing',
    image: '/src/assets/images/electric-blue-raspberry-chews.jpg',
    variants: [
      { name: '10 Count', price: 42 },
      { name: '20 Count', price: 78 }
    ]
  },
  {
    id: 'gummy-6',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Golden Watermelon Bliss Cubes',
    slug: 'golden-watermelon-bliss-cubes',
    badge: 'Summer Vibe',
    rating: 4.7,
    reviewsCount: 92,
    description: 'Refreshing sweet watermelon flavor infused with adaptogenic and legal psychoactive botanical blends.',
    longDescription: 'Bring summer sunshine to your routine with Golden Watermelon Bliss Cubes. Refreshing, sweet, and meticulously infused with adaptogenic and botanical extracts for a relaxed, carefree mindset.',
    ingredients: ['Active Extract', 'Watermelon Juice Extract', 'Organic Agave', 'Plant Pectin'],
    labTested: 'Purity & Heavy Metal Assayed',
    image: '/src/assets/images/golden-watermelon-bliss-cubes.jpg',
    variants: [
      { name: '10 Count', price: 40 },
      { name: '20 Count', price: 75 }
    ]
  },
  {
    id: 'gummy-7',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Mystic Mango Micro-Gummies',
    slug: 'mystic-mango-micro-gummies',
    badge: 'Sub-Perceptual',
    rating: 4.9,
    reviewsCount: 118,
    description: 'Juicy tropical mango designed specifically for microdosers seeking calm daily flow without heavy intoxication.',
    longDescription: 'Tailored precisely for microdosers. Mystic Mango Micro-Gummies offer sub-perceptual doses of active extract in a delicious tropical mango chew, promoting calm daily productivity and emotional resilience.',
    ingredients: ['Sub-Perceptual Active Extract', 'Real Mango Purée', 'Organic Cane Sugar', 'Citric Acid'],
    labTested: 'Micro-Dose Uniformity Verified by HPLC',
    image: '/src/assets/images/mystic-mango-micro-gummies.jpg',
    variants: [
      { name: '15 Count', price: 45 },
      { name: '30 Count', price: 80 }
    ]
  },
  {
    id: 'gummy-8',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Pure Reishi & Muscimol Honey Sticks',
    slug: 'pure-reishi-muscimol-honey-sticks',
    badge: 'Botanical Elixir',
    rating: 4.8,
    reviewsCount: 86,
    description: 'Artisan wildflower honey infused with active Muscimol extract and calming Reishi spores. Perfect for tea.',
    longDescription: 'Elevate your evening herbal tea with Pure Reishi & Muscimol Honey Sticks. Raw wildflower honey infused with active Muscimol extract and calming Reishi spore powder for an exquisite nighttime ritual.',
    ingredients: ['Raw Wildflower Honey', 'Decarboxylated Muscimol', 'Organic Reishi Spore Extract'],
    labTested: 'Natural Honey Authenticity & Potency Assayed',
    image: '/src/assets/images/pure-reishi-muscimol-honey-sticks.jpg',
    variants: [
      { name: '5 Pack Sticks', price: 35 },
      { name: '12 Pack Box', price: 75 }
    ]
  },
  {
    id: 'gummy-9',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Astral Apple Sour Extract Drops',
    slug: 'astral-apple-sour-extract-drops',
    badge: 'High Potency Oil',
    rating: 4.9,
    reviewsCount: 102,
    description: 'Concentrated sour apple botanical extract drops for customized dropper-by-dropper titration.',
    longDescription: 'Empower your wellness regimen with Astral Apple Sour Extract Drops. A high-potency liquid formulation with crisp green apple flavor, allowing complete flexibility in your dosing titration.',
    ingredients: ['High-Potency Active Extract', 'MCT Oil', 'Green Apple Flavor Extract', 'Natural Terpenes'],
    labTested: 'Advanced Spectrometry Potency Tested',
    image: '/src/assets/images/astral-apple-sour-extract-drops.jpg',
    variants: [
      { name: '30ml Bottle', price: 70 },
      { name: '50ml Bottle', price: 110 }
    ]
  },
  {
    id: 'gummy-10',
    category: 'gummies',
    categoryTitle: 'Gummies & Extracts',
    name: 'Velvet Grape Relaxation Gummies',
    slug: 'velvet-grape-relaxation-gummies',
    badge: 'Deep Chill',
    rating: 4.8,
    reviewsCount: 115,
    description: 'Rich concord grape flavor formulated to unwind the body after a long week and ease into deep tranquility.',
    longDescription: 'Unwind in style with Velvet Grape Relaxation Gummies. Deep concord grape flavor meets soothing botanical extracts to melt away muscular tension and quiet an overactive mind after a long week.',
    ingredients: ['Active Relaxing Botanical Extract', 'Concord Grape Juice Concentrate', 'Tapioca Starch', 'Pectin'],
    labTested: 'Verified Microbial & Purity Free',
    image: '/src/assets/images/velvet-grape-relaxation-gummies.jpg',
    variants: [
      { name: '10 Count', price: 40 },
      { name: '20 Count', price: 75 }
    ]
  }
];

export const REVIEWS = [
  {
    author: "Marcus K.",
    location: "Austin, TX",
    stars: "⭐⭐⭐⭐⭐",
    comment: "Dispatched straight out of LA and arrived vacuum-sealed in 48 hours. PolkaDot bars are remarkably consistent.",
    productRef: "MycoBlend Dark Espresso Bar"
  },
  {
    author: "Sarah L.",
    location: "Vancouver, BC",
    stars: "⭐⭐⭐⭐⭐",
    comment: "Cross-border shipping to Canada was seamless and fully tracked. Golden Teacher quality is world-class.",
    productRef: "Golden Teacher Whole Fungi"
  },
  {
    author: "David R.",
    location: "Denver, CO",
    stars: "⭐⭐⭐⭐⭐",
    comment: "The Stamets Protocol stack completely optimized my weekly workflow. Premium packaging and clean lab results.",
    productRef: "Stamets Protocol Stack"
  }
];