import cover7 from './assets/covers/7-square.jpg' // 7.jpg cropped square
import cover11 from './assets/Visual Elements/11.jpg'
import cover13 from './assets/Visual Elements/13.jpg'
// Covers = page 1 of the score PDF, white page margin cropped off
import deathcycleCover from './assets/covers/deathcycle.jpg'
import rothkoCover from './assets/covers/rothko.jpg'
import aoleCover from './assets/covers/aole.jpg'
import kinabatanganCover from './assets/covers/kinabatangan.jpg'
import kayakCover from './assets/covers/kayak.jpg'

// public/ files: '/' in dev, '/RoganKahalePortfolio/' on GitHub Pages
const base = import.meta.env.BASE_URL

// Add a song = add an entry to its page's list. The All page shows every list (see allSongs).
export type Song = { title: string; image?: string; description?: string; pdf?: string }

export const jazzSongs: Song[] = [
  {
    title: "Mother's Prayer Song",
    description:
      "This piece is the product of a commission by Julia Keefe, a Nez Perce jazz vocalist based out of New York City. Julia's mother taught her this song as she was fighting cancer. It is traditionally an end-of-life song.\nDur. C.A. 14 mins.",
    pdf: base + 'JazzPIeces/MothersPrayer.pdf',
  },
  {
    title: 'Exaltation of St. Theresa, the Mystic',
    description: 'Composed after a painting I saw in Lucumi ritual.\nDur. C.A. 75 mins-2 hours',
    pdf: base + 'JazzPIeces/ExaltationStTheresa.pdf',
  },
  {
    title: 'Birth of Fog',
    description:
      'After the Inuit story of the Birth of Fog, as collected and published by Lawrence Millman.\nDur. C.A. 12-14 mins',
    pdf: base + 'JazzPIeces/BirthOfFog.pdf',
  },
  {
    title: 'Ulaleo',
    description: 'Hearing voices...\nDur. C.A. 7 mins',
    pdf: base + 'JazzPIeces/Ulaleo V2 (SCORE).pdf',
  },
  {
    title: "Ku'u Pua i Paoakalani",
    description:
      'A quiet meditation on the annexation of the Hawaiian Kingdom... Queen Liliuokalani composed this melody while on house arrest immediately following her deposition. The lyrics are dedicated to her followers, who brought her flowers wrapped in newspaper throughout her imprisonment. That newspaper was her only connection to the outside world. This is a love song, but not to any single person.\nDur. C.A. 3 mins',
    pdf: base + 'JazzPIeces/Paoakalani SCORE.pdf',
  },
  {
    title: 'Pua Lililehua',
    description:
      "The mo'olelo of O'hia and Lehua tells us of a young couple, split apart by the capricious wrath of a god, only to be brought together once again in perpetuity- upon the branches of the O'hia tree.\nDur. C.A. 3 mins",
    pdf: base + 'JazzPIeces/Pua Lililehua SCORE.pdf',
  },
  {
    title: 'Asian Flower',
    description:
      'This tune was originally by Jimmy Garrison off the album "Illumination." Yeah I changed the name. What about it?!',
    pdf: base + 'JazzPIeces/Asian Flower (V2) - .pdf',
  },
  {
    title: 'Bayonet Treaties',
    description: 'Time to get angry! (and weird) Inspired by the Bayonet Constitution of 1887.',
    pdf: base + 'JazzPIeces/BT SCORE.pdf',
  },
  {
    title: 'Cold Open',
    description: "The Imagine Jazz Big Band's opening song. Mostly a solo engine...\nDur. 6 mins (depending on solos)",
    pdf: base + "JazzPIeces/Sparky's Cold Open (V3) - .pdf",
  },
  {
    title: 'Toys to Testify',
    description: 'You brought WHAT to your jury?!?!\nDur. C.A. 3 mins',
    pdf: base + 'JazzPIeces/TOYS TO TESTIFY SCORE.pdf',
  },
  {
    title: 'Edge of the Knife',
    description: 'Named after a movie I loved.\nDur. C.A. 6 mins',
    pdf: base + 'JazzPIeces/Edge of the Knife - .pdf',
  },
  {
    title: 'Letter to Albert',
    description:
      'A letter to the most overlooked and mispronounced saxophonist... Albert Ayler!\nDur. C.A. 7 mins',
    pdf: base + 'JazzPIeces/Letter to Albert - .pdf',
  },
  {
    title: 'Limerence',
    description: "We've all felt it... This ballad features bass clarinet.\nDur. C.A. 6 mins",
    pdf: base + 'JazzPIeces/Limerence - .pdf',
  },
  {
    title: 'Cantankery',
    description: "Let's get talkative! Features your 2nd tenor.\nDur. C.A. 9 minutes",
    pdf: base + 'JazzPIeces/Cantankery - .pdf',
  },
]

export const orchestralSongs: Song[] = [
  {
    title: 'Deathcycle of Ancient Aliens', image: deathcycleCover,
    description:
      '“Deathcycle of Ancient Aliens,” is a five movement concerto for clarinet and modified chamber orchestra. It is also the title of an illustration by Borneo indigenous artist T. Bagak. His 5-part illustration illuminates the lifecycle of the Xenomorph from Ridley Scott’s 1979 film “Alien,” in the traditional iconography of the Bidayuh people, who T. Bagak is a part of.\nDur. C.A. 33 mins',
    pdf: base + 'OrchestralPieces/Deathcycle Full Score.pdf',
  },
  {
    title: 'Piano Sonata no. 1 "After Rothko"', image: rothkoCover,
    description: 'This piece is a love letter to the paintings of Mark Rothko. Get lost in it...\nDur. C.A. 30-45 mins',
    pdf: base + 'OrchestralPieces/AFTER ROTHKO.pdf',
  },
  {
    title: "A'ole Inoa", image: aoleCover,
    description:
      'I composed this in a single night my freshman year of college. To me, it still stands as one of my favorite works- outwardly peaceful, but internally vibrant. For clarinet, oboe, saxophone, bass clarinet and bassoon.\nDur. C.A. 6 MINS',
    pdf: base + "OrchestralPieces/A'ole inoa.pdf",
  },
  {
    title: 'Kinabatangan', image: kinabatanganCover,
    description:
      'For the Borneo Ensemble- about the beautiful sights and sounds of the Kinabatangan River.\nDur. C.A. 6 mins',
    pdf: base + 'OrchestralPieces/Kinabatangan.pdf',
  },
  {
    title: 'Kayak Full of Ghosts', image: kayakCover,
    description:
      'A collection of stories collected by Lawrence Millman in the high arctic. Used with permission.\nDur. C.A. 12 mins',
    pdf: base + 'OrchestralPieces/kayak full of ghosts.pdf',
  },
  {
    title: 'Three Pieces for Clarinet',
    description: 'Written for Liam Cameron.',
    pdf: base + 'OrchestralPieces/THREE pieces for bass clarinet.pdf',
  },
  {
    title: 'See the Stones',
    description:
      'For piano and Biula- a bowed string instrument from the Badjao people of Sabah. Composed for Lee See Ling of the Borneo Ensemble. Lee Sing Lee has dedicated much of her life to studying the biula and integrating it into contemporary music settings.',
    pdf: base + 'OrchestralPieces/See the Stones.pdf',
  },
  {
    title: "Poli'ahu",
    description: "Poli'ahu is the goddess of snow and ice who dwells atop Mauna Kea. This piece is for her.\nDur. C.A. 7 mins",
    pdf: base + "OrchestralPieces/Poli'ahu with FLUTE.pdf",
  },
]

export const fakebookSongs: Song[] = [
  // one cover (public/Realbooks/fakebookcover.jpg) shared by all three editions
  { title: 'Concert Pitch Book', image: base + 'Realbooks/fakebookcover.jpg', pdf: base + 'Realbooks/Concert Pitch Book.pdf' },
  { title: 'Bb Book', image: base + 'Realbooks/fakebookcover.jpg', pdf: base + 'Realbooks/Bb book.pdf' },
  { title: 'Eb Book', image: base + 'Realbooks/fakebookcover.jpg', pdf: base + 'Realbooks/Eb book.pdf' },
]

// New category list? Add it here too so it shows on All.
export const allSongs = [...jazzSongs, ...orchestralSongs, ...fakebookSongs]

// No cover? Pick one of 7/11/13 at random, once per page load (so a song keeps the same
// cover on its own page and on All until the next refresh).
const randomCovers = [cover7, cover11, cover13]
for (const song of allSongs) {
  song.image ??= randomCovers[Math.floor(Math.random() * randomCovers.length)]
}
