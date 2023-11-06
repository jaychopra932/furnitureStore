let products = [
  {
    prodCode: "DS2S245",
    category: "Dining",
    desc: ["Two	seater	Dining	Set", "Built	from	High	quality	wood", "1	year	warranty"],
    img: "https://ii1.pepperfry.com/media/catalog/product/h/a/764x840/harleston-sheesham-wood-2-seater-dining-set-in-honey-oak-finish-harleston-sheesham-wood-2-seater-din-cmkybw.jpg",
    ingredients: [
      { ingName: "Dining	Table", qty: 1 },
      { ingName: "Chair", qty: 2 },
    ],
    title: "Two	seater	Dining	Set",
  },
  {
    prodCode: "DS6S761",
    category: "Dining",
    desc: [
      "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
      "Assembly	by	Skilled	Carpenters",
      "Made	from	Teak	wood",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/a/r/494x544/aroma-solid-wood-6-seater-dining-set-with-bench-in-rustic-teak-finish-by-woodsworth-aroma-solid-wood-rpbqr1.jpg",
    ingredients: [
      { ingName: "Dining	Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
      { ingName: "Bench", qty: 1 },
    ],
    title: "Six	Seater	Dining	Set",
  },
  {
    prodCode: "DS4S177",
    category: "Dining",
    desc: [
      "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
      "Knock-down	construction	for	easy	transportation",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/j/e/494x544/jenna-dining-set-in-black-by-durian-jenna-dining-set-in-black-by-durian-hepwa1.jpg",
    ingredients: [
      { ingName: "Dining	Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
    ],
    title: "Mild	Steel	Dining	Set",
  },
  {
    prodCode: "DC2S705",
    category: "Dining",
    desc: [
      "Solid	Wood	Dining	Chair	Set	of	Two	in	Dark	Walnut	Colour",
      "Beautiful	design	carved	on	dining	chair",
      "Dining	chair	seat	upholstered	in	dark	brown	Fabric",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/e/n/494x544/enkel-solid-wood-dining-chair--set-of-2--in-warm-chestnut-finish---woodsworth-by-pepperfry-enkel-sol-b6sb5p.jpg",
    ingredients: [{ ingName: "Chair", qty: 2 }],
    title: "Dining	Chair	Set",
  },
  {
    prodCode: "BN1S388",
    category: "Dining",
    desc: [
      "Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
      "Comfortable	bench	for	a	relaxed	dinner",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/n/u/494x544/nuevo-sheesham-wood-dining-bench-in-rustic-teak-finish-nuevo-sheesham-wood-dining-bench-in-rustic-te-wj8b5z.jpg",
    ingredients: [{ ingName: "Bench", qty: 1 }],
    title: "Dining	Bench",
  },
  {
    prodCode: "SF2S532",
    category: "Drawing",
    desc: [
      "Characteristic	Rising	Track	Arm	Rest	Design",
      "Premium	High	Gloss	Leatherette	Upholstery",
      "Independent	Headrest	And	Lumber	Support",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/a/z/494x544/azalea-velvet-2-seater-sofa-in-beige-colour-azalea-velvet-2-seater-sofa-in-beige-colour-ec9obm.jpg",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two	Seater	Sofa",
  },
  {
    prodCode: "SF2S206",
    category: "Drawing",
    desc: ["Two	Seater	Sofa	in	Blue	Colour", "Assembly	by	Skilled	Carpenters"],
    img: "https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elegant-solid-wood-2-seater-sofa-in-sea-blue-finish-elegant-solid-wood-2-seater-sofa-in-sea-blue-fin-glioxm.jpg",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two	Seater	Sofa",
  },
  {
    prodCode: "SFBD311",
    category: "Drawing",
    desc: [
      "Sofa	Cum	bed	in	Brown	Colour",
      "Ply-wood	construction	with	hand	polished	finish",
      "Removable	fabric	cover	on	best	quality	foam	mattress",
      "Throw	cushions	and	bolsters	come	with	the	product",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/s/i/800x400/siramika-solid-wood-sofa-cum-bed-in-honey-oak-finish-by-mudramark-siramika-solid-wood-sofa-cum-bed-i-hpepmr.jpg",
    ingredients: [
      { ingName: "Sofa", qty: 1 },
      { ingName: "Cushions", qty: 2 },
    ],
    title: "Sofa	cum	Bed",
  },
  {
    prodCode: "BDQS381",
    category: "Bedroom",
    desc: [
      "Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
      "Box	Storage	included	for	Maximum	space	utilization",
      "Mattress	is	included",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/f/r/494x544/frankfurt-sheesham-wood-king-size-bed-in-rustic-teak-finish-frankfurt-sheesham-wood-king-size-bed-in-fcpdo6.jpg",
    ingredients: [
      { ingName: "Bed", qty: 1 },
      { ingName: "Mattress", qty: 2 },
    ],
    title: "King	size	Bed",
  },
  {
    prodCode: "BDQS229",
    category: "Bedroom",
    desc: [
      "Wood	Hydraulic	Storage	Queen	Size	Bed",
      "Half	hydraulic	storage",
      "Superior	E2	grade	MDF	used	with	melamine	finish",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/i/v/764x840/ivanka-queen-size-bed-with-headboard---box-storage-in-natural-walnut-colour-by-casacraft-ivanka-quee-ghdbvo.jpg",
    ingredients: [{ ingName: "Bed", qty: 1 }],
    title: "Queen	size	Bed",
  },
  {
    prodCode: "ST1T425",
    category: "Study",
    desc: [
      "Wood	Study	Table	in	Walnut	Colour",
      "Assembly	by	Skilled	Carpenters",
      "Built	from	High	Quality	Wood",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/v/i/494x544/vilbel-sheesham-wood-writing-table-in-provincial-teak-finish-vilbel-sheesham-wood-writing-table-in-p-4tsno8.jpg",
    ingredients: [{ ingName: "Study	Table", qty: 1 }],
    title: "Study	Table",
  },
  {
    prodCode: "ST1T588",
    category: "Study",
    desc: [
      "	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
      "Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
      "Superior	quality	MDF	with	stain	resistant	melamine	finish",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/d/u/494x544/duke-writing-table-in-frosty-white-and-ocean-green-colour-by-woodbuzz-duke-writing-table-in-frosty-w-znkbdo.jpg",
    ingredients: [{ ingName: "Study	Table", qty: 1 }],
    title: "Study	Table",
  },
];

let users = [
  { name: "admin", email: "admin@gmail.com", password: "admin", role: "admin" },
  { name: "user", email: "user@gmail.com", password: "user", role: "user" },
];

module.exports.products = products;
module.exports.users = users;
