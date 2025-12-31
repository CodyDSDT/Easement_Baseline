// Species Library for Conservation Easement Baseline Reports
// Inland Northwest Land Conservancy region-specific species data

const SPECIES_LIBRARY = [
  {
    "id": "ponderosa-pine",
    "group": "Tree",
    "commonName": "Ponderosa pine",
    "scientificName": "Pinus ponderosa",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Dominant tree species in eastern Washington foothill forests. Highly drought-tolerant and fire-adapted; found from rocky cliffs to streamside areas throughout the ponderosa pine zone."
  },
  {
    "id": "douglas-fir",
    "group": "Tree",
    "commonName": "Douglas-fir",
    "scientificName": "Pseudotsuga menziesii",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Common associate with ponderosa pine in mixed conifer forests, particularly on moister, cooler sites at mid-elevations. Has increased in many ponderosa pine forests due to fire suppression."
  },
  {
    "id": "western-larch",
    "group": "Tree",
    "commonName": "Western larch",
    "scientificName": "Larix occidentalis",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Distinctive deciduous conifer found in moister, cooler mid-elevation forests. Mixes with ponderosa pine and Douglas-fir; needles turn golden yellow before dropping in fall."
  },
  {
    "id": "grand-fir",
    "group": "Tree",
    "commonName": "Grand fir",
    "scientificName": "Abies grandis",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Interior variety common at 2,000-5,000 ft elevation. Shade-tolerant climax species found in riparian settings and moist sites; has increased due to fire suppression."
  },
  {
    "id": "rocky-mountain-juniper",
    "group": "Tree",
    "commonName": "Rocky Mountain juniper",
    "scientificName": "Juniperus scopulorum",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Small tree or large shrub native to drier mountains and foothills. Found on rocky hillsides, dry slopes, and grassland-forest transitions."
  },
  {
    "id": "black-cottonwood",
    "group": "Tree",
    "commonName": "Black cottonwood",
    "scientificName": "Populus trichocarpa",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Fast-growing pioneer tree specifically adapted to colonizing floodplains. Dominates riparian corridors throughout the region; associates with willows, dogwood, and birches."
  },
  {
    "id": "quaking-aspen",
    "group": "Tree",
    "commonName": "Quaking aspen",
    "scientificName": "Populus tremuloides",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Found in groves at the arid forest edge, wet forest openings, meadows, and along streams. Forms clonal stands; early-seral associate of ponderosa pine."
  },
  {
    "id": "paper-birch",
    "group": "Tree",
    "commonName": "Paper birch",
    "scientificName": "Betula papyrifera",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Grows in moist, well-drained soils along riverbanks, marshes, wetlands, and cool forested areas. Pioneer species that colonizes after fire; distinctive white bark."
  },
  {
    "id": "water-birch",
    "group": "Tree",
    "commonName": "Water birch",
    "scientificName": "Betula occidentalis",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Small native tree or shrub found along streams in high-gradient riparian areas. Common in narrow vegetation bands immediately adjacent to streams."
  },
  {
    "id": "pacific-willow",
    "group": "Tree",
    "commonName": "Pacific willow",
    "scientificName": "Salix lucida ssp. lasiandra",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Large willow found in riparian areas throughout the region. Cornerstone species for streambank restoration; co-dominates with black cottonwood in riparian woodlands."
  },
  {
    "id": "western-red-cedar",
    "group": "Tree",
    "commonName": "Western red cedar",
    "scientificName": "Thuja plicata",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Disjunct inland population occurs in northeastern Washington and northern Idaho. Requires moist conditions; found in stream bottoms and wet valley floors."
  },
  {
    "id": "western-serviceberry",
    "group": "Shrub",
    "commonName": "Western serviceberry",
    "scientificName": "Amelanchier alnifolia",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Earliest flowering native shrub in the region. Found on south-facing slopes, buttes, forest margins, and ponderosa pine understory; produces edible blue berries."
  },
  {
    "id": "common-snowberry",
    "group": "Shrub",
    "commonName": "Common snowberry",
    "scientificName": "Symphoricarpos albus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Slender shrub common throughout ponderosa pine woodland understory. Forms spreading colonies via underground suckers; white berries persist into winter."
  },
  {
    "id": "oceanspray",
    "group": "Shrub",
    "commonName": "Oceanspray",
    "scientificName": "Holodiscus discolor",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Dryland shrub common in open forests, rocky slopes, and forest clearings. Blooms May-June with drooping cream-white flower clusters."
  },
  {
    "id": "mallow-ninebark",
    "group": "Shrub",
    "commonName": "Mallow ninebark",
    "scientificName": "Physocarpus malvaceus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Reliable shrub found in ponderosa pine forest understory and rocky, well-drained sites. Features distinctive peeling cinnamon-colored bark and white flower clusters in June."
  },
  {
    "id": "mock-orange",
    "group": "Shrub",
    "commonName": "Mock orange",
    "scientificName": "Philadelphus lewisii",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Idaho State Flower. Large shrub known for profuse, fragrant white blossoms. Found on rocky sites, canyon slopes, and open ponderosa pine/Douglas-fir forests."
  },
  {
    "id": "chokecherry",
    "group": "Shrub",
    "commonName": "Chokecherry",
    "scientificName": "Prunus virginiana",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Tall shrub to small tree found in ponderosa pine understory, forest edges, riparian areas, and canyon slopes. Forms thickets through root suckering."
  },
  {
    "id": "red-osier-dogwood",
    "group": "Shrub",
    "commonName": "Red-osier dogwood",
    "scientificName": "Cornus sericea",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Dominant riparian species with striking deep red winter stems. Found along streams, wetlands, and lake margins; important for streambank stabilization."
  },
  {
    "id": "woods-rose",
    "group": "Shrub",
    "commonName": "Woods' rose",
    "scientificName": "Rosa woodsii",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Spreading shrub adapted to broad moisture conditions—dominant on riparian sites but also found in dry ponderosa pine understory. Pink flowers May-July."
  },
  {
    "id": "thimbleberry",
    "group": "Shrub",
    "commonName": "Thimbleberry",
    "scientificName": "Rubus parviflorus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Thornless shrub with large, maple-like fuzzy leaves. Found in moist, partly-shaded forest openings, meadows, and riparian areas; spreads by rhizomes."
  },
  {
    "id": "scoulers-willow",
    "group": "Shrub",
    "commonName": "Scouler's willow",
    "scientificName": "Salix scouleriana",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Large shrub to small tree; the local 'pussy willow.' Most drought-tolerant willow in the region; adapted to both streamside habitats and dry hillsides."
  },
  {
    "id": "bluebunch-wheatgrass",
    "group": "Grass",
    "commonName": "Bluebunch wheatgrass",
    "scientificName": "Pseudoroegneria spicata",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Dominant bunchgrass of the Intermountain West. Found on dry open slopes, ridges, and ponderosa pine/Douglas-fir understories; thrives on well-drained soils and south-facing slopes."
  },
  {
    "id": "idaho-fescue",
    "group": "Grass",
    "commonName": "Idaho fescue",
    "scientificName": "Festuca idahoensis",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Cool-season perennial bunchgrass occurring in valleys, canyons, benchlands, meadows, and open conifer stands. Prefers mesic grasslands and north-facing aspects."
  },
  {
    "id": "pinegrass",
    "group": "Grass",
    "commonName": "Pinegrass",
    "scientificName": "Calamagrostis rubescens",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Dominant understory grass in Douglas-fir and ponderosa pine forests throughout the Northern Rocky Mountains. Spreads by rhizomes; highest densities in open ponderosa pine communities."
  },
  {
    "id": "blue-wildrye",
    "group": "Grass",
    "commonName": "Blue wildrye",
    "scientificName": "Elymus glaucus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Cool-season perennial bunchgrass native to meadows and woodlands of the Rocky Mountains. Grows well in varied soil types; drought tolerant and wildfire resistant."
  },
  {
    "id": "arrowleaf-balsamroot",
    "group": "Forb",
    "commonName": "Arrowleaf balsamroot",
    "scientificName": "Balsamorhiza sagittata",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Long-lived perennial common on open hillsides, sagebrush communities, and ponderosa pine/Idaho fescue understories. Deep taproots allow survival in dry conditions and fire resilience."
  },
  {
    "id": "western-yarrow",
    "group": "Forb",
    "commonName": "Western yarrow",
    "scientificName": "Achillea millefolium var. occidentalis",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Aromatic rhizomatous perennial found in meadows, pastures, open forests, and disturbed areas. Grows in wet or dry soils; excellent drought tolerance."
  },
  {
    "id": "fireweed",
    "group": "Forb",
    "commonName": "Fireweed",
    "scientificName": "Chamerion angustifolium",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Pioneer species that rapidly colonizes burned or disturbed areas, clearings, and forest edges. Tall stems with spectacular magenta flower spikes; spreads vigorously by rhizomes."
  },
  {
    "id": "wild-strawberry",
    "group": "Forb",
    "commonName": "Wild strawberry",
    "scientificName": "Fragaria virginiana",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Low-growing perennial found in open woodlands, meadow edges, and forest clearings. Spreads by runners; produces small edible fruit."
  },
  {
    "id": "heartleaf-arnica",
    "group": "Forb",
    "commonName": "Heartleaf arnica",
    "scientificName": "Arnica cordifolia",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Perennial forb found in moist to dry coniferous forest understories, particularly Douglas-fir and ponderosa pine communities. Heart-shaped basal leaves and bright yellow daisy-like flowers."
  },
  {
    "id": "silky-lupine",
    "group": "Forb",
    "commonName": "Silky lupine",
    "scientificName": "Lupinus sericeus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Native perennial lupine common in sagebrush communities, grasslands, and open ponderosa pine forests. Deep taproots fix nitrogen; purple-blue flower spikes bloom May-July."
  },
  {
    "id": "spotted-knapweed",
    "group": "Invasive Plant",
    "commonName": "Spotted knapweed",
    "scientificName": "Centaurea stoebe",
    "nativeStatus": "Invasive",
    "invasive": true,
    "habitatNotes": "Highly aggressive species invading dry meadows, pastures, roadsides, forest clearings, and gravelly floodplains. Forms dense monocultures; releases allelopathic chemicals.",
    "managementNotes": "HIGH PRIORITY. Control requires multiple years due to 8-year seed viability. Biological control agents available. Herbicide (aminopyralid, clopyralid) effective on rosettes. WA State quarantine list."
  },
  {
    "id": "dalmatian-toadflax",
    "group": "Invasive Plant",
    "commonName": "Dalmatian toadflax",
    "scientificName": "Linaria dalmatica",
    "nativeStatus": "Invasive",
    "invasive": true,
    "habitatNotes": "Invades rangelands, roadsides, forest clearings, and disturbed areas. Waxy heart-shaped leaves clasp stems; extensive root system makes control difficult.",
    "managementNotes": "HIGH PRIORITY. Hand-pulling ineffective due to root fragment regeneration. Biocontrol agent (stem weevil) established in Spokane County. Herbicide before flowering most effective."
  },
  {
    "id": "yellow-starthistle",
    "group": "Invasive Plant",
    "commonName": "Yellow starthistle",
    "scientificName": "Centaurea solstitialis",
    "nativeStatus": "Invasive",
    "invasive": true,
    "habitatNotes": "Aggressive annual invading grasslands, roadsides, and disturbed areas. Sharp yellow spines on flower heads; toxic to horses. Produces up to 100,000 seeds per plant.",
    "managementNotes": "HIGH PRIORITY. Early detection critical. Hand-pull or mow before flowering. Herbicide effective on rosettes. Prevent seed production; seeds viable 10+ years. WA State quarantine list."
  },
  {
    "id": "rush-skeletonweed",
    "group": "Invasive Plant",
    "commonName": "Rush skeletonweed",
    "scientificName": "Chondrilla juncea",
    "nativeStatus": "Invasive",
    "invasive": true,
    "habitatNotes": "Deep-rooted perennial invading grasslands, roadsides, and disturbed sites. Dandelion-like yellow flowers; can produce 20,000+ wind-dispersed seeds per plant.",
    "managementNotes": "HIGH PRIORITY. Do NOT pull—root fragments regenerate and stimulate growth. Repeated herbicide applications (aminopyralid) required. Biocontrol agents available."
  },
  {
    "id": "canada-thistle",
    "group": "Invasive Plant",
    "commonName": "Canada thistle",
    "scientificName": "Cirsium arvense",
    "nativeStatus": "Invasive",
    "invasive": true,
    "habitatNotes": "Aggressive creeping perennial invading pastures, prairies, riparian areas, and roadsides. Extensive horizontal root system spreads 10-15+ feet annually.",
    "managementNotes": "MODERATE-HIGH PRIORITY. Extremely persistent; requires multi-year effort. Repeated mowing (3+ years) can achieve 90% control. Systemic herbicides on rosettes. Seeds viable 20+ years."
  },
  {
    "id": "leafy-spurge",
    "group": "Invasive Plant",
    "commonName": "Leafy spurge",
    "scientificName": "Euphorbia esula",
    "nativeStatus": "Invasive",
    "invasive": true,
    "habitatNotes": "Aggressive perennial invading prairies, rangelands, and riparian areas. Milky latex toxic to cattle and horses; deep root system with extensive lateral spread.",
    "managementNotes": "HIGH PRIORITY. Seeds shoot 15+ feet from parent plant. Biocontrol flea beetles effective for large infestations. Herbicides require repeated applications. Sheep/goat grazing provides control."
  },
  {
    "id": "cheatgrass",
    "group": "Invasive Plant",
    "commonName": "Cheatgrass",
    "scientificName": "Bromus tectorum",
    "nativeStatus": "Invasive",
    "invasive": true,
    "habitatNotes": "Winter annual grass dominating millions of acres in the Intermountain West. Invades sagebrush steppe, grasslands, and ponderosa pine understories; dramatically increases wildfire frequency.",
    "managementNotes": "ONGOING MANAGEMENT. Most significant plant invasion in North America. Requires targeted grazing, fall herbicide (imazapic), and native grass reseeding."
  },
  {
    "id": "reed-canarygrass",
    "group": "Invasive Plant",
    "commonName": "Reed canarygrass",
    "scientificName": "Phalaris arundinacea",
    "nativeStatus": "Invasive",
    "invasive": true,
    "habitatNotes": "Major threat to wetlands and riparian areas. Forms dense monotypic stands in stream corridors, wet meadows, and ditches; outcompetes native wetland vegetation.",
    "managementNotes": "HIGH PRIORITY for riparian restoration. Extremely difficult to eradicate. Repeated mowing (twice yearly) reduces dominance. Aquatic-approved glyphosate in fall/spring effective."
  },
  {
    "id": "pileated-woodpecker",
    "group": "Bird",
    "commonName": "Pileated woodpecker",
    "scientificName": "Dryocopus pileatus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Indicator species for forest health and old-growth habitat. Inhabits mature forests with snags and fallen trees; requires large trees for nesting cavities."
  },
  {
    "id": "great-blue-heron",
    "group": "Bird",
    "commonName": "Great blue heron",
    "scientificName": "Ardea herodias",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Year-round resident along lakes, rivers, streams, and wetlands. A rookery exists along the Little Spokane River Natural Area."
  },
  {
    "id": "ruffed-grouse",
    "group": "Bird",
    "commonName": "Ruffed grouse",
    "scientificName": "Bonasa umbellus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Found in mixed woods, hardwood forests, and forested river corridors. Quaking aspen is the most important tree species for this bird in the region."
  },
  {
    "id": "wild-turkey",
    "group": "Bird",
    "commonName": "Wild turkey",
    "scientificName": "Meleagris gallopavo",
    "nativeStatus": "Introduced",
    "invasive": false,
    "habitatNotes": "Introduced to Washington beginning early 20th century; now well-established. Prefers mixed conifer-hardwood forests with scattered openings, particularly ponderosa pine areas."
  },
  {
    "id": "osprey",
    "group": "Bird",
    "commonName": "Osprey",
    "scientificName": "Pandion haliaetus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Common fish-eating raptor found along rivers, lakes, and reservoirs. Nests on large trees, utility poles, and artificial platforms near water."
  },
  {
    "id": "bald-eagle",
    "group": "Bird",
    "commonName": "Bald eagle",
    "scientificName": "Haliaeetus leucocephalus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Year-round resident with winter concentrations along the Spokane River corridor and regional lakes. Increasingly common; nests in large trees near water."
  },
  {
    "id": "white-tailed-deer",
    "group": "Mammal",
    "commonName": "White-tailed deer",
    "scientificName": "Odocoileus virginianus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Very common throughout eastern Washington on farmlands, low-elevation stream corridors, and near populated areas. The dominant deer species in northeastern Washington."
  },
  {
    "id": "mule-deer",
    "group": "Mammal",
    "commonName": "Mule deer",
    "scientificName": "Odocoileus hemionus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Inhabits areas east of the Cascades, preferring open forests and sagebrush meadows at higher elevations than white-tailed deer. May migrate up to 80 miles seasonally."
  },
  {
    "id": "rocky-mountain-elk",
    "group": "Mammal",
    "commonName": "Rocky Mountain elk",
    "scientificName": "Cervus canadensis nelsoni",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Found in the Selkirk Mountains region near the Spokane area. Prefers forested habitat with meadow openings; current populations stem from Yellowstone transplants."
  },
  {
    "id": "moose",
    "group": "Mammal",
    "commonName": "Moose",
    "scientificName": "Alces alces shirasi",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Present in the Selkirk Mountains region. Prefers forested habitat with lakes, marshes, and wetlands; feeds on willows, aspens, and aquatic plants."
  },
  {
    "id": "black-bear",
    "group": "Mammal",
    "commonName": "Black bear",
    "scientificName": "Ursus americanus",
    "nativeStatus": "Native",
    "invasive": false,
    "habitatNotes": "Common across eastern Washington including Spokane County. Found in forested areas, riparian corridors, and increasingly in suburban/urban interface; omnivorous."
  }
];
