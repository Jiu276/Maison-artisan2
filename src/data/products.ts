/**
 * 零售皮具目录。价格为美元零售价，供前台展示与加入购物袋使用。
 */
export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: "Bags" | "Small Leather Goods" | "Accessories";
  price: number;
  tagline: string;
  description: string;
  story: string;
  material: string;
  image: string;
  gallery: string[];
  colors: ProductColor[];
  specs: ProductSpec[];
};

export const products: Product[] = [
  {
    slug: "atelier-tote",
    name: "Atelier Tote",
    category: "Bags",
    price: 428,
    tagline: "A structured carry for the everyday",
    description:
      "A full-grain leather tote with an open top, a suede interior, and a pocket sized for a laptop. Cut and saddle-stitched in small batches.",
    story:
      "The Atelier Tote is the piece we reach for ourselves. The hide is vegetable-tanned, so it darkens where your hand rests and stays firm enough to stand on its own.",
    material: "Vegetable-tanned full-grain leather, brass hardware",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200&q=85&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=900&q=85&fit=crop",
    ],
    colors: [
      { name: "Cognac", hex: "#8B5A2B" },
      { name: "Black", hex: "#1A1816" },
      { name: "Olive", hex: "#4E5640" },
    ],
    specs: [
      { label: "Leather", value: "Full-grain, vegetable tanned" },
      { label: "Lining", value: "Unlined suede" },
      { label: "Dimensions", value: "38 x 30 x 14 cm" },
      { label: "Fit", value: "13-inch laptop, daily essentials" },
      { label: "Hardware", value: "Solid brass" },
      { label: "Made", value: "Hand-cut and saddle-stitched" },
      { label: "Care", value: "Condition twice a year" },
      { label: "Shipping", value: "Complimentary, 5-8 business days" },
    ],
  },
  {
    slug: "saddle-crossbody",
    name: "Saddle Crossbody",
    category: "Bags",
    price: 348,
    tagline: "Hands free, still considered",
    description:
      "A compact crossbody with a curved flap, an adjustable strap, and a magnetic close. Light enough for a day in the city.",
    story:
      "Shaped after a classic saddle flap, this bag keeps a phone, cardholder, and keys within reach without looking like a utility piece.",
    material: "Full-grain calfskin, antique brass",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=85&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85&fit=crop",
    ],
    colors: [
      { name: "Tan", hex: "#C4A574" },
      { name: "Black", hex: "#1A1816" },
      { name: "Burgundy", hex: "#6B2D3C" },
    ],
    specs: [
      { label: "Leather", value: "Full-grain calfskin" },
      { label: "Strap", value: "Adjustable, 110-130 cm" },
      { label: "Dimensions", value: "22 x 16 x 7 cm" },
      { label: "Closure", value: "Magnetic flap" },
      { label: "Hardware", value: "Antique brass" },
      { label: "Made", value: "Hand-burnished edges" },
      { label: "Care", value: "Wipe with a dry cloth" },
      { label: "Shipping", value: "Complimentary, 5-8 business days" },
    ],
  },
  {
    slug: "weekend-duffle",
    name: "Weekend Duffle",
    category: "Bags",
    price: 590,
    tagline: "Two nights, one bag",
    description:
      "A soft duffle in heavy hide with a zip top, leather handles, and a detachable shoulder strap. Built to be thrown in a car, not a cargo hold of gadgets.",
    story:
      "We kept the shape simple and the leather thick. It holds a change of clothes, a book, and the things you actually use between Friday and Sunday.",
    material: "Heavy full-grain hide, solid brass zip",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=85&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?w=900&q=85&fit=crop",
    ],
    colors: [
      { name: "Chestnut", hex: "#6B3E26" },
      { name: "Black", hex: "#1A1816" },
    ],
    specs: [
      { label: "Leather", value: "4mm full-grain hide" },
      { label: "Capacity", value: "32 liters" },
      { label: "Dimensions", value: "48 x 28 x 24 cm" },
      { label: "Strap", value: "Detachable shoulder strap" },
      { label: "Hardware", value: "Brass zip and rivets" },
      { label: "Made", value: "Reinforced base, hand-set feet" },
      { label: "Care", value: "Stuff with paper when stored" },
      { label: "Shipping", value: "Complimentary, 5-8 business days" },
    ],
  },
  {
    slug: "slim-card-wallet",
    name: "Slim Card Wallet",
    category: "Small Leather Goods",
    price: 88,
    tagline: "Four cards and a folded note",
    description:
      "A slim wallet with four card slots and a center pocket. It disappears into a jacket and takes on the shape of what you carry.",
    story:
      "Edges are painted and burnished by hand. The leather is thin enough to stay flat, and strong enough that the slots do not gape after a year.",
    material: "Buttero calfskin",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200&q=85&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=80&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85&fit=crop",
    ],
    colors: [
      { name: "Natural", hex: "#C9A27A" },
      { name: "Black", hex: "#1A1816" },
      { name: "Navy", hex: "#1E2A44" },
    ],
    specs: [
      { label: "Leather", value: "Buttero calfskin" },
      { label: "Slots", value: "4 cards, center pocket" },
      { label: "Dimensions", value: "10 x 8 cm" },
      { label: "Edges", value: "Hand-painted and burnished" },
      { label: "Hardware", value: "None" },
      { label: "Made", value: "Saddle-stitched" },
      { label: "Care", value: "Keep dry, condition yearly" },
      { label: "Shipping", value: "Complimentary, 5-8 business days" },
    ],
  },
  {
    slug: "classic-bifold",
    name: "Classic Bifold",
    category: "Small Leather Goods",
    price: 128,
    tagline: "Bills, cards, and nothing extra",
    description:
      "A bifold with six card slots, two hidden pockets, and a full bill compartment. The fold is skived so it does not bulk at the spine.",
    story:
      "This is the wallet we make when someone asks for one they will still be using in ten years. The stitching is exposed, so you can see the work.",
    material: "Bridle leather, linen thread",
    image:
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=1200&q=85&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=85&fit=crop",
    ],
    colors: [
      { name: "London Tan", hex: "#A56B3C" },
      { name: "Black", hex: "#1A1816" },
    ],
    specs: [
      { label: "Leather", value: "English bridle leather" },
      { label: "Slots", value: "6 cards, 2 slip pockets" },
      { label: "Dimensions", value: "11.5 x 9.5 cm closed" },
      { label: "Thread", value: "Waxed linen" },
      { label: "Hardware", value: "None" },
      { label: "Made", value: "Skived spine, hand-stitched" },
      { label: "Care", value: "Avoid soaking, air dry" },
      { label: "Shipping", value: "Complimentary, 5-8 business days" },
    ],
  },
  {
    slug: "hand-stitched-belt",
    name: "Hand-Stitched Belt",
    category: "Accessories",
    price: 148,
    tagline: "One strap, a solid brass buckle",
    description:
      "A 3.2 cm belt in bridle leather with a roller buckle and a keeper loop stitched in place. Sized when you order.",
    story:
      "The strap is a single piece of leather, not a bonded layer. It will crease at the holes you use and stay straight everywhere else.",
    material: "Bridle leather, solid brass buckle",
    image:
      "https://images.unsplash.com/photo-1553704571-c32d20e6c74f?w=1200&q=85&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553704571-c32d20e6c74f?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=85&fit=crop",
    ],
    colors: [
      { name: "Chestnut", hex: "#6B3E26" },
      { name: "Black", hex: "#1A1816" },
    ],
    specs: [
      { label: "Leather", value: "Single-layer bridle" },
      { label: "Width", value: "3.2 cm" },
      { label: "Sizes", value: "80 to 110 cm, note size at checkout later" },
      { label: "Buckle", value: "Solid brass roller" },
      { label: "Hardware", value: "Brass keeper" },
      { label: "Made", value: "Hand-set holes, burnished tip" },
      { label: "Care", value: "Hang, do not coil tightly" },
      { label: "Shipping", value: "Complimentary, 5-8 business days" },
    ],
  },
  {
    slug: "leather-journal",
    name: "Leather Journal",
    category: "Accessories",
    price: 118,
    tagline: "A cover that outlasts the pages",
    description:
      "A wrap cover in soft leather for an A5 notebook, closed with a leather tie. The notebook inside can be replaced; the cover stays.",
    story:
      "We leave the surface unfinished so ink, weather, and the desk you work on become part of the piece. Refills are a standard A5 cahier.",
    material: "Soft full-grain leather, cotton tie",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=85&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=85&fit=crop",
    ],
    colors: [
      { name: "Natural", hex: "#C9A27A" },
      { name: "Cognac", hex: "#8B5A2B" },
      { name: "Black", hex: "#1A1816" },
    ],
    specs: [
      { label: "Leather", value: "Soft full-grain" },
      { label: "Size", value: "Fits A5 notebooks" },
      { label: "Closure", value: "Leather tie" },
      { label: "Includes", value: "One plain A5 refill" },
      { label: "Hardware", value: "None" },
      { label: "Made", value: "Hand-cut cover" },
      { label: "Care", value: "Keep away from prolonged sun" },
      { label: "Shipping", value: "Complimentary, 5-8 business days" },
    ],
  },
  {
    slug: "zip-pouch",
    name: "Everyday Zip Pouch",
    category: "Small Leather Goods",
    price: 76,
    tagline: "The small things, kept together",
    description:
      "A flat zip pouch for cables, cosmetics, or a spare set of keys. Fully lined, with a leather pull you can actually grip.",
    story:
      "It is the first piece many people buy from us. Small enough to test the leather, useful enough that it stays in the bag.",
    material: "Full-grain leather, cotton lining",
    image:
      "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=1200&q=85&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=85&fit=crop",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=900&q=85&fit=crop",
    ],
    colors: [
      { name: "Sand", hex: "#D7C4A3" },
      { name: "Black", hex: "#1A1816" },
      { name: "Forest", hex: "#2F3D32" },
    ],
    specs: [
      { label: "Leather", value: "Full-grain, lightly finished" },
      { label: "Lining", value: "Cotton twill" },
      { label: "Dimensions", value: "20 x 12 cm" },
      { label: "Closure", value: "Metal zip, leather pull" },
      { label: "Hardware", value: "Antique nickel zip" },
      { label: "Made", value: "Turned and hand-finished" },
      { label: "Care", value: "Empty and air after travel" },
      { label: "Shipping", value: "Complimentary, 5-8 business days" },
    ],
  },
];

/**
 * 按地址中的 slug 查找一件商品。
 * @param slug 商品地址片段
 * @returns 匹配的商品；没有则返回 undefined
 */
export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * 取出同系列的其他商品，用于详情页推荐。
 * @param slug 当前商品
 * @param limit 最多返回几件
 */
export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === current.category
  );
  const rest = products.filter(
    (product) => product.slug !== slug && product.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

/**
 * 把零售价格式化成美元。
 * @param amount 美元金额
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
