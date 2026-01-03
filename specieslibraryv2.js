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
      "id": "lodgepole-pine",
      "group": "Tree",
      "commonName": "Lodgepole pine",
      "scientificName": "Pinus contorta var. latifolia",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Occurs in dry to wet sites from 1,600-12,000 ft; seral species in ponderosa pine, grand fir, and Douglas-fir habitat types. Most abundant following fire disturbance."
    },
    {
      "id": "mountain-ash",
      "group": "Tree",
      "commonName": "Mountain ash",
      "scientificName": "Sorbus scopulina",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Found in meadows, canyons, streamside areas, and open conifer forests at mid-to-alpine elevations. Most common at 3,500+ ft in moist microsites."
    },
    {
      "id": "red-alder",
      "group": "Tree",
      "commonName": "Red alder",
      "scientificName": "Alnus rubra",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Primarily a Pacific Coast species rarely occurring inland. Small isolated population exists along Clearwater River in northern Idaho; not expected in Spokane/Mica Peak area."
    },
    {
      "id": "western-hemlock",
      "group": "Tree",
      "commonName": "Western hemlock",
      "scientificName": "Tsuga heterophylla",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Occurs in northern Idaho's western redcedar vegetation zone up to 5,900 ft. Limited to moist ravines and north-facing slopes in Spokane area."
    },
    {
      "id": "western-white-pine",
      "group": "Tree",
      "commonName": "Western white pine",
      "scientificName": "Pinus monticola",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Idaho's state tree; occurs at 2,000-5,900 ft in moist valleys to fairly dry open sites. Populations reduced by white pine blister rust; rust-resistant seedlings planted since 1970s."
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
      "id": "black-hawthorn",
      "group": "Shrub",
      "commonName": "Black hawthorn",
      "scientificName": "Crataegus douglasii",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Riparian areas and moist open sites in ponderosa pine and cottonwood communities at 2,200-5,400 ft. Forms dense thickets that have expanded with reduced fire frequency."
    },
    {
      "id": "coyote-willow",
      "group": "Shrub",
      "commonName": "Coyote willow",
      "scientificName": "Salix exigua",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Stabilized river bars, sandbars, and streambanks, typically below 3,000 ft. Forms dense thickets along riparian corridors with other willows, water birch, and red-osier dogwood."
    },
    {
      "id": "douglas-spirea",
      "group": "Shrub",
      "commonName": "Douglas spirea",
      "scientificName": "Spiraea douglasii",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Wet meadows, bogs, and streambanks. Primarily a west-side species; uncommon in the Spokane area."
    },
    {
      "id": "mountain-alder",
      "group": "Shrub",
      "commonName": "Mountain alder",
      "scientificName": "Alnus incana ssp. tenuifolia",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Streambanks, wet meadows, and riparian areas from montane valleys to subalpine zones. The dominant native alder in the Rocky Mountains; forms dense erosion-control thickets."
    },
    {
      "id": "mountain-huckleberry",
      "group": "Shrub",
      "commonName": "Mountain huckleberry",
      "scientificName": "Vaccinium membranaceum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Idaho's state fruit. Coniferous forest understory from 2,000-11,000 ft, with most productive sites at 4,000-6,000 ft. Fire-adapted, resprouting from rhizomes."
    },
    {
      "id": "nootka-rose",
      "group": "Shrub",
      "commonName": "Nootka rose",
      "scientificName": "Rosa nutkana",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Floodplains, streambanks, meadows, open forests, and forest edges below 7,500 ft. Subspecies hispida occurs east of the Cascades; dominant understory in the Palouse region."
    },
    {
      "id": "orange-honeysuckle",
      "group": "Shrub",
      "commonName": "Orange honeysuckle",
      "scientificName": "Lonicera ciliosa",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Open to dense forests, forest edges, and streambanks from sea level to 6,500 ft. Climbing/twining vine documented in Idaho panhandle; less common but present in Spokane area."
    },
    {
      "id": "rocky-mountain-maple",
      "group": "Shrub",
      "commonName": "Rocky Mountain maple",
      "scientificName": "Acer glabrum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Dry rocky areas, brush fields, moist forest openings, and streamsides. Small tree or multi-stemmed shrub to 30 ft; more tolerant of dry, open sites than vine maple."
    },
    {
      "id": "tall-oregon-grape",
      "group": "Shrub",
      "commonName": "Tall Oregon grape",
      "scientificName": "Mahonia aquifolium",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Open woods and shrublands from sea level to 4,900 ft, including sagebrush slopes and open forests. Evergreen shrub tolerating dry shade."
    },
    {
      "id": "trailing-raspberry",
      "group": "Shrub",
      "commonName": "Trailing raspberry",
      "scientificName": "Rubus pubescens",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Streambanks, moist woods, swamps, and clearings at middle elevations. Low-growing herbaceous bramble with trailing stems lacking prickles."
    },
    {
      "id": "vine-maple",
      "group": "Shrub",
      "commonName": "Vine maple",
      "scientificName": "Acer circinatum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "West-side species only; confined to west of the Cascades except in limited canyon microsites. Not expected in Spokane/Mica Peak area; substitute Rocky Mountain maple."
    },
    {
      "id": "blue-elderberry",
      "group": "Shrub",
      "commonName": "Blue elderberry",
      "scientificName": "Sambucus cerulea",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Valley bottoms, open slopes with moisture, fence rows, and stream valleys from sea level to 10,000 ft. Documented in Spokane County; most common elderberry in eastern Washington."
    },
    {
      "id": "sitka-willow",
      "group": "Shrub",
      "commonName": "Sitka willow",
      "scientificName": "Salix sitchensis",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Medium to large shrub found along streams, wetlands, and moist areas. Common riparian species in the Pacific Northwest; tolerates wet soils and partial shade."
    },
    {
      "id": "kinnikinnick",
      "group": "Shrub",
      "commonName": "Kinnikinnick",
      "scientificName": "Arctostaphylos uva-ursi",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Low-growing evergreen groundcover found on dry, rocky sites and open forests. Common in ponderosa pine understory; bright red berries persist through winter."
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
      "id": "elk-sedge",
      "group": "Sedge",
      "commonName": "Elk sedge",
      "scientificName": "Carex geyeri",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Grassy slopes, meadows, and open forest from sagebrush foothills to middle elevations. Common understory dominant in Douglas-fir and ponderosa pine forests."
    },
    {
      "id": "mountain-fescue",
      "group": "Grass",
      "commonName": "Mountain fescue",
      "scientificName": "Festuca saximontana",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Mesic to dry meadows and forest openings at middle elevations. Densely tufted bunchgrass with bluish hue; prefers well-drained sandy or gravelly soils."
    },
    {
      "id": "mountain-hairgrass",
      "group": "Grass",
      "commonName": "Mountain hairgrass",
      "scientificName": "Vahlodea atropurpurea",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Mountain meadows, streambanks, and snowbeds in subalpine to alpine zones. Would only occur in unusually wet, cool microsites at foothill elevations if present at all."
    },
    {
      "id": "orchard-grass",
      "group": "Grass",
      "commonName": "Orchard grass",
      "scientificName": "Dactylis glomerata",
      "nativeStatus": "Introduced",
      "invasive": false,
      "habitatNotes": "Disturbed areas, roadsides, pastures, forest edges. Cool-season bunchgrass that escapes from planted pastures into natural areas; drought-tolerant."
    },
    {
      "id": "smooth-brome",
      "group": "Grass",
      "commonName": "Smooth brome",
      "scientificName": "Bromus inermis",
      "nativeStatus": "Introduced",
      "invasive": true,
      "habitatNotes": "Roadsides, fields, pastures, ditches. Rhizomatous grass forming dense sod; begins growth early in spring outcompeting native species.",
      "managementNotes": "Invasive in prairie/grassland ecosystems where it can eliminate native vegetation. Difficult to control once established."
    },
    {
      "id": "soft-rush",
      "group": "Rush",
      "commonName": "Soft rush",
      "scientificName": "Juncus effusus",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Wet places—pastures, meadows, roadsides, ditches, lake and stream margins. Clump-forming perennial requiring moist to wet conditions."
    },
    {
      "id": "timothy",
      "group": "Grass",
      "commonName": "Timothy",
      "scientificName": "Phleum pratense",
      "nativeStatus": "Introduced",
      "invasive": false,
      "habitatNotes": "Meadows, pastures, roadsides. Prefers cool, humid climates and rich, moist bottomlands. First cultivated in US in early 1700s; widely naturalized but not highly invasive."
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
      "id": "arrow-leaved-groundsel",
      "group": "Forb",
      "commonName": "Arrow-leaved groundsel",
      "scientificName": "Senecio triangularis",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Wet meadows, conifer forests, streambanks, seeps. Primarily mid-to-alpine elevations; may occur in moist foothill microsites but more common higher."
    },
    {
      "id": "arctic-lupine",
      "group": "Forb",
      "commonName": "Arctic lupine",
      "scientificName": "Lupinus arcticus",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "High-elevation meadows, rocky slopes, and moist tundra. Subalpine/alpine species; unlikely at foothill elevations."
    },
    {
      "id": "ballhead-waterleaf",
      "group": "Forb",
      "commonName": "Ballhead waterleaf",
      "scientificName": "Hydrophyllum capitatum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Woodland-sagebrush borders, open slopes, forest openings. Early bloomer (March-May); common in eastern Washington ponderosa pine and oak woodlands."
    },
    {
      "id": "canada-goldenrod",
      "group": "Forb",
      "commonName": "Canada goldenrod",
      "scientificName": "Solidago canadensis",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist prairies, meadows, pastures, streambanks, and abandoned fields. Spreads by rhizomes forming dense patches."
    },
    {
      "id": "common-plantain",
      "group": "Forb",
      "commonName": "Common plantain",
      "scientificName": "Plantago major",
      "nativeStatus": "Introduced",
      "invasive": false,
      "habitatNotes": "Disturbed areas, compacted soils, lawns, roadsides. Called 'white man's footprint' because it spread with European colonization."
    },
    {
      "id": "cut-leaved-daisy",
      "group": "Forb",
      "commonName": "Cut-leaved daisy",
      "scientificName": "Erigeron compositus",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Sandy riverbanks to rocky outcrops. Variable elevation; more common at higher elevations; drought-tolerant cushion plant in rocky microsites."
    },
    {
      "id": "fairyslipper-orchid",
      "group": "Forb",
      "commonName": "Fairyslipper orchid",
      "scientificName": "Calypso bulbosa",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist to dry shady coniferous forests with cool, rich soils and decaying organic matter. Variety americana occurs east of Cascades; sensitive to disturbance."
    },
    {
      "id": "fern-leaved-desert-parsley",
      "group": "Forb",
      "commonName": "Fern-leaved desert parsley",
      "scientificName": "Lomatium dissectum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Open, dry, rocky slopes, talus, and dry meadows. Associated with oak woodlands, ponderosa pine, and shrub-steppe borders."
    },
    {
      "id": "fringecup",
      "group": "Forb",
      "commonName": "Fringecup",
      "scientificName": "Tellima grandiflora",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Damp woods, forest edges, and streamside areas. Listed as vulnerable in Idaho/Montana; more common west of Cascades."
    },
    {
      "id": "goats-beard",
      "group": "Forb",
      "commonName": "Goat's beard",
      "scientificName": "Aruncus dioicus",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist woods, streambanks, wet ravines. Primarily west-side; rare in eastern Washington/northern Idaho; may only occur in wettest microsites."
    },
    {
      "id": "leafy-aster",
      "group": "Forb",
      "commonName": "Leafy aster",
      "scientificName": "Symphyotrichum foliaceum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Open, moist meadows, streambanks, road banks, and forest openings from low to high elevations. Blooms July-September."
    },
    {
      "id": "meadow-death-camas",
      "group": "Forb",
      "commonName": "Meadow death camas",
      "scientificName": "Toxicoscordion venenosum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Vernally wet and dry meadows, sagebrush slopes, and open pine woodlands. Extremely toxic to humans and livestock."
    },
    {
      "id": "miners-lettuce",
      "group": "Forb",
      "commonName": "Miner's lettuce",
      "scientificName": "Claytonia perfoliata",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Cool, damp environments—shady streambanks, moist meadows, disturbed sites. Annual appearing after spring rains; edible."
    },
    {
      "id": "narrow-leaved-hawkweed",
      "group": "Forb",
      "commonName": "Narrow-leaved hawkweed",
      "scientificName": "Hieracium umbellatum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Forests, logging trails, clearings, forest edges. Native hawkweed—distinguished from invasive European species by leafy stems and no stolons."
    },
    {
      "id": "one-leaved-foamflower",
      "group": "Forb",
      "commonName": "One-leaved foamflower",
      "scientificName": "Tiarella unifoliata",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Shaded, moist woods and streambanks up to 6,200 ft. Found on shaded north slopes in cool, damp soils."
    },
    {
      "id": "pathfinder",
      "group": "Forb",
      "commonName": "Pathfinder",
      "scientificName": "Adenocaulon bicolor",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist, shady woods and forest openings at low-middle elevations. Named because walking reveals white leaf undersides."
    },
    {
      "id": "pearly-everlasting",
      "group": "Forb",
      "commonName": "Pearly everlasting",
      "scientificName": "Anaphalis margaritacea",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Dry to seasonally moist open areas, meadows, roadsides, and forest edges. Prefers full sun and dry, rocky or sandy soils."
    },
    {
      "id": "pineapple-weed",
      "group": "Forb",
      "commonName": "Pineapple weed",
      "scientificName": "Matricaria discoidea",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Disturbed areas with compacted soil—driveways, roadsides, waste areas. Tolerates foot and vehicle traffic."
    },
    {
      "id": "pinedrops",
      "group": "Forb",
      "commonName": "Pinedrops",
      "scientificName": "Pterospora andromedea",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Mycoheterotrophic plant in coniferous forests, especially ponderosa pine dominant stands. Requires specific fungal host (Rhizopogon spp.)."
    },
    {
      "id": "purple-leaved-willowherb",
      "group": "Forb",
      "commonName": "Purple-leaved willowherb",
      "scientificName": "Epilobium ciliatum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist meadows, streambanks, roadsides, and disturbed sites up to ~4,600 ft. Abundant in wetland and semi-disturbed habitats."
    },
    {
      "id": "self-heal",
      "group": "Forb",
      "commonName": "Self-heal",
      "scientificName": "Prunella vulgaris",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist forest edges, meadows, and clearings. Native var. lanceolata; introduced var. vulgaris from Eurasia."
    },
    {
      "id": "skunk-cabbage",
      "group": "Forb",
      "commonName": "Skunk cabbage",
      "scientificName": "Lysichiton americanum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Swamps, wet woods, and forested wetlands. Primarily west-side; very limited in Spokane area; restricted to persistently wet, shaded seepages."
    },
    {
      "id": "small-flowered-blue-eyed-mary",
      "group": "Forb",
      "commonName": "Small-flowered blue-eyed Mary",
      "scientificName": "Collinsia parviflora",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Open, grassy, vernally moist slopes, rock outcrops, and gravelly flats. Annual completing life cycle quickly in spring."
    },
    {
      "id": "small-flowered-woodland-star",
      "group": "Forb",
      "commonName": "Small-flowered woodland star",
      "scientificName": "Lithophragma parviflorum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Prairies, grasslands, basalt outcrops, and open ponderosa pine/Douglas-fir forest. Documented at Steptoe Butte and near Spokane."
    },
    {
      "id": "spreading-dogbane",
      "group": "Forb",
      "commonName": "Spreading dogbane",
      "scientificName": "Apocynum androsaemifolium",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Forest edges, meadows, prairies, roadsides on dry soils at low-medium elevations. One of first species to turn yellow in fall."
    },
    {
      "id": "stinging-nettle",
      "group": "Forb",
      "commonName": "Stinging nettle",
      "scientificName": "Urtica dioica",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Rich soil near moisture—meadows, streambanks, open forests. Ssp. holosericea native; ssp. dioica introduced."
    },
    {
      "id": "stream-violet",
      "group": "Forb",
      "commonName": "Stream violet",
      "scientificName": "Viola glabella",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist woods and streambanks at low to middle elevations. Yellow-flowered with heart-shaped leaves."
    },
    {
      "id": "wild-ginger",
      "group": "Forb",
      "commonName": "Wild ginger",
      "scientificName": "Asarum caudatum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist, shady coniferous forests to ~2,200 ft. Primarily west-side; unlikely in typical Mica Peak habitat; limited to very moist draws in Idaho panhandle."
    },
    {
      "id": "woolly-pussytoes",
      "group": "Forb",
      "commonName": "Woolly pussytoes",
      "scientificName": "Antennaria lanata",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Protected alpine and subalpine rocky slopes. Alpine/subalpine species; not appropriate for foothill zone. Substitute A. microphylla or A. racemosa for lower elevations."
    },
    {
      "id": "yellow-bell",
      "group": "Forb",
      "commonName": "Yellow bell",
      "scientificName": "Fritillaria pudica",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Shrub-steppe, grasslands, and open ponderosa pine forests. Iconic early spring wildflower of the Inland Northwest, blooming soon after snowmelt."
    },
    {
      "id": "yellow-salsify",
      "group": "Forb",
      "commonName": "Yellow salsify",
      "scientificName": "Tragopogon dubius",
      "nativeStatus": "Introduced",
      "invasive": false,
      "habitatNotes": "Disturbed habitats, roadsides, overgrazed rangeland, and forest openings. Can form dense stands displacing native vegetation."
    },
    {
      "id": "princes-pine",
      "group": "Forb",
      "commonName": "Prince's pine",
      "scientificName": "Chimaphila umbellata",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Small evergreen subshrub found in dry to moist coniferous forests. Common in ponderosa pine and Douglas-fir understory; waxy pink flowers in summer."
    },
    {
      "id": "western-groundsel",
      "group": "Forb",
      "commonName": "Western groundsel",
      "scientificName": "Senecio integerrimus",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Open meadows, sagebrush slopes, and ponderosa pine forests. Early blooming perennial with yellow daisy-like flowers; common in grassland-forest transitions."
    },
    {
      "id": "upland-larkspur",
      "group": "Forb",
      "commonName": "Upland larkspur",
      "scientificName": "Delphinium nuttallianum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Dry to moist meadows, sagebrush communities, and open forests. Deep blue-purple flowers in spring; all parts poisonous to livestock."
    },
    {
      "id": "lyalls-rockcress",
      "group": "Forb",
      "commonName": "Lyall's rockcress",
      "scientificName": "Arabis lyallii",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Rocky slopes, talus, and alpine ridges at mid to high elevations. Small white to pink flowers; adapted to harsh mountain conditions."
    },
    {
      "id": "large-flowered-triteleia",
      "group": "Forb",
      "commonName": "Large-flowered triteleia",
      "scientificName": "Brodiaea douglasii",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Dry grasslands, sagebrush slopes, and open ponderosa pine forests. Spring-blooming bulb with showy blue-purple flowers; goes dormant by midsummer."
    },
    {
      "id": "false-solomons-seal",
      "group": "Forb",
      "commonName": "False solomon's seal",
      "scientificName": "Maianthemum racemosum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist to moderately dry forests and forest edges. Plume-like clusters of white flowers in spring; red berries in fall. Previously known as Smilacina racemosa."
    },
    {
      "id": "bracken-fern",
      "group": "Fern",
      "commonName": "Bracken fern",
      "scientificName": "Pteridium aquilinum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist to dry woods, open slopes, and disturbed sites. Very adaptable—colonizes logged areas, burns, and disturbed ground; deep rhizomes (up to 20 ft) make it persistent."
    },
    {
      "id": "common-horsetail",
      "group": "Horsetail",
      "commonName": "Common horsetail",
      "scientificName": "Equisetum arvense",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist to moderately dry places from lowlands to subalpine. Common along roadsides, streambanks, and wet forest edges."
    },
    {
      "id": "lady-fern",
      "group": "Fern",
      "commonName": "Lady fern",
      "scientificName": "Athyrium filix-femina",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist woods, meadows, and shaded riparian corridors. Requires consistently moist conditions—limited to seeps, streamside areas, and moist forest microsites."
    },
    {
      "id": "mountain-wood-fern",
      "group": "Fern",
      "commonName": "Mountain wood fern",
      "scientificName": "Dryopteris expansa",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Mesic, shady forests along stream banks, on rotting logs, or in deep humus. Restricted to cool, moist microsites in the Spokane area—conditions often moister than typical foothill forests."
    },
    {
      "id": "sword-fern",
      "group": "Fern",
      "commonName": "Sword fern",
      "scientificName": "Polystichum munitum",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Understory of moist coniferous forests. Most abundant west of Cascades; relatively uncommon in the Inland Northwest; disjunct populations occur in northern Idaho."
    },
    {
      "id": "beech-fern",
      "group": "Fern",
      "commonName": "Beech fern",
      "scientificName": "Thelypteris phegopteris",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Moist, shady coniferous forests and stream banks. Delicate fern with triangular fronds; requires cool, humid conditions; uncommon in drier inland sites."
    },
    {
      "id": "scouring-rush",
      "group": "Horsetail",
      "commonName": "Scouring rush",
      "scientificName": "Equisetum hyemale",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Streambanks, wet meadows, and moist forest edges. Evergreen horsetail with unbranched stems; historically used for polishing and scouring due to high silica content."
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
      "id": "common-mullein",
      "group": "Invasive Plant",
      "commonName": "Common mullein",
      "scientificName": "Verbascum thapsus",
      "nativeStatus": "Invasive",
      "invasive": true,
      "habitatNotes": "Disturbed sites—roadsides, pastures, open forest areas, logged areas. Produces ephemeral populations on disturbed sites; local extinction common as succession progresses.",
      "managementNotes": "Spokane County Weed of Concern. Hand-pulling effective for rosettes if entire taproot removed. Seeds viable 50-100 years in soil. Requires surfactant for herbicide due to woolly leaves."
    },
    {
      "id": "common-st-johns-wort",
      "group": "Invasive Plant",
      "commonName": "Common St. John's wort",
      "scientificName": "Hypericum perforatum",
      "nativeStatus": "Invasive",
      "invasive": true,
      "habitatNotes": "Disturbed, well-drained sites—roadways, meadows, grasslands, overgrazed rangeland, logged areas. Toxic to livestock (causes photosensitization in light-colored animals).",
      "managementNotes": "WA Class C; Spokane County Weed of Concern. Biological control beetles (Chrysolina spp.) have reduced populations 97-99% in some areas. Seeds viable 30+ years; produces 15,000-34,000 seeds/plant/year."
    },
    {
      "id": "common-tansy",
      "group": "Invasive Plant",
      "commonName": "Common tansy",
      "scientificName": "Tanacetum vulgare",
      "nativeStatus": "Invasive",
      "invasive": true,
      "habitatNotes": "Roadsides, waste areas, streambanks, pastures. Forms dense patches displacing native vegetation. Poisonous to humans and livestock—can cause hemorrhage, convulsions, and death.",
      "managementNotes": "WA Class B (control required in many areas). Hand-pulling effective for small infestations if entire root system removed. Selective herbicides effective—dicamba, metsulfuron, chlorsulfuron. Burning NOT recommended."
    },
    {
      "id": "sulfur-cinquefoil",
      "group": "Invasive Plant",
      "commonName": "Sulfur cinquefoil",
      "scientificName": "Potentilla recta",
      "nativeStatus": "Invasive",
      "invasive": true,
      "habitatNotes": "Open grasslands, shrubby areas, open forests, logged areas, roadsides. Can invade undisturbed sites unlike many invasive species; can dominate a site within 2-3 years.",
      "managementNotes": "WA Class B + Quarantine List; ID Class B. HIGHEST PRIORITY among listed invasives. Picloram most effective (80% reduction after 3 years). Mowing NOT effective. Seeds viable 4+ years. Unpalatable to livestock/wildlife."
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
    },
    {
      "id": "bobcat",
      "group": "Mammal",
      "commonName": "Bobcat",
      "scientificName": "Lynx rufus",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Mixed conifer forests, forest-grassland edges, rocky outcroppings, and brushy areas. Prefers rock cliffs, ledges for shelter and denning; home range 2.5-6 sq mi (males) in eastern Washington."
    },
    {
      "id": "coyote",
      "group": "Mammal",
      "commonName": "Coyote",
      "scientificName": "Canis latrans",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Highly adaptable—virtually every habitat type. Prefers open habitat and forest edges, readily using open forests, burned areas, clearcuts; common in Spokane green spaces."
    },
    {
      "id": "mountain-lion",
      "group": "Mammal",
      "commonName": "Mountain lion",
      "scientificName": "Puma concolor",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Steep canyons, rock outcroppings, dense brush, and forests providing concealment. Requires areas with abundant deer/elk; home range 50-150 sq mi (males). Estimated ~2,400 in Washington."
    },
    {
      "id": "gray-wolf",
      "group": "Mammal",
      "commonName": "Gray wolf",
      "scientificName": "Canis lupus",
      "nativeStatus": "Native",
      "invasive": false,
      "habitatNotes": "Forested areas where elk, deer, and moose are present. Pack territories average 140-400 sq mi. As of Dec 2024: 230 wolves in 43 packs in Washington; ~1,235 in Idaho.",
      "managementNotes": "WA State Endangered; federally delisted in eastern WA (2011). Species of Greatest Conservation Need. Recovery ongoing; natural recolonization from Idaho/Montana populations since 2008."
    },
    {
      "id": "grizzly-bear",
      "group": "Mammal",
      "commonName": "Grizzly bear",
      "scientificName": "Ursus arctos horribilis",
      "nativeStatus": "Threatened",
      "invasive": false,
      "habitatNotes": "Remote wilderness areas requiring large home ranges. Once ranged throughout the Inland Northwest; now limited to North Cascades and Selkirk ecosystems. Estimated <10 individuals in Selkirk population.",
      "managementNotes": "Federally Threatened under ESA. Cabinet-Yaak and Selkirk grizzly populations are two of six federally designated recovery zones. Recovery efforts ongoing; conflicts with human activities remain primary challenge."
    },
    {
      "id": "monarch-butterfly",
      "group": "Insect",
      "commonName": "Monarch butterfly",
      "scientificName": "Danaus plexippus",
      "nativeStatus": "Proposed Threatened",
      "invasive": false,
      "habitatNotes": "Milkweed-dependent species found in open fields, meadows, and roadsides where milkweed plants grow. Western population migrates to coastal California; dramatic population declines due to habitat loss.",
      "managementNotes": "Proposed for federal Threatened status (Dec 2024). Population declined >99% since 1980s. Conservation requires milkweed habitat restoration and protection of overwintering sites."
    },
    {
      "id": "suckley-cuckoo-bumble-bee",
      "group": "Insect",
      "commonName": "Suckley's cuckoo bumble bee",
      "scientificName": "Bombus suckleyi",
      "nativeStatus": "Proposed Endangered",
      "invasive": false,
      "habitatNotes": "Parasitic species dependent on western bumble bee (Bombus occidentalis) colonies. Found in meadows, grasslands, and open forests where host species occurs. Rare throughout range.",
      "managementNotes": "Proposed for federal Endangered status. Obligate parasite of western bumble bee—lays eggs in host nests. Population decline linked to host species decline; requires conservation of entire bumble bee community."
    }
  ];