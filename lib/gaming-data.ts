export interface GameEvent {
  id: string;
  title: string;
  game: string;
  type: 'release' | 'tournament' | 'event' | 'dlc' | 'update';
  date: Date;
  platform: ('PC' | 'PlayStation' | 'Xbox' | 'Nintendo' | 'Mobile')[];
  description: string;
  featured?: boolean;
  verified?: boolean;
  prizePool?: string;
  participants?: string;
  location?: string;
  rawgSlug?: string;
}

export const gameEvents: GameEvent[] = [
  // === JULY 2025 ===
  {
    id: '1',
    title: 'Donkey Kong Country Returns HD',
    game: 'Donkey Kong Country Returns HD',
    type: 'release',
    date: new Date('2025-07-01'),
    platform: ['Nintendo'],
    description: 'Enhanced edition of the beloved platformer with stunning HD visuals and new content.',
    featured: true,
    verified: true,
    rawgSlug: 'donkey-kong-country-tropical-freeze'
  },
  {
    id: '2',
    title: 'BLAST Playground Belgrade',
    game: 'Counter-Strike 2',
    type: 'tournament',
    date: new Date('2025-07-05'),
    platform: ['PC'],
    description: 'Premier Counter-Strike tournament featuring top international teams.',
    featured: true,
    verified: true,
    prizePool: '$1,000,000',
    participants: '24 teams',
    location: 'Belgrade, Serbia',
    rawgSlug: 'counter-strike-2'
  },
  {
    id: '3',
    title: 'Esports World Cup 2025',
    game: 'Multi-Game',
    type: 'tournament',
    date: new Date('2025-07-07'),
    platform: ['PC', 'Mobile'],
    description: 'The largest multi-game esports event featuring 25+ competitive titles.',
    featured: true,
    verified: true,
    prizePool: '$60,000,000',
    participants: '500+ teams',
    location: 'Riyadh, Saudi Arabia',
    rawgSlug: 'dota-2'
  },
  {
    id: '4',
    title: 'EA Sports College Football 26',
    game: 'College Football 26',
    type: 'release',
    date: new Date('2025-07-10'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'The college football simulation returns with updated rosters and gameplay.',
    verified: true,
    rawgSlug: 'madden-nfl-24'
  },
  {
    id: '5',
    title: 'MLBB Mid Season Cup 2025',
    game: 'Mobile Legends: Bang Bang',
    type: 'tournament',
    date: new Date('2025-07-10'),
    platform: ['Mobile'],
    description: 'The most competitive Mobile Legends tournament of the season.',
    featured: true,
    verified: true,
    prizePool: '$3,000,000',
    participants: '16 teams',
    location: 'Malaysia',
    rawgSlug: 'mobile-legends-bang-bang'
  },
  {
    id: '6',
    title: 'Honor of Kings World Championship',
    game: 'Honor of Kings',
    type: 'tournament',
    date: new Date('2025-07-15'),
    platform: ['Mobile'],
    description: 'Global championship for the world\'s most popular mobile MOBA.',
    featured: true,
    verified: true,
    prizePool: '$3,000,000',
    participants: '20 teams',
    location: 'Shanghai, China',
    rawgSlug: 'honor-of-kings'
  },
  {
    id: '7',
    title: 'Tales of the Shire: A Lord of the Rings Game',
    game: 'Tales of the Shire',
    type: 'release',
    date: new Date('2025-07-17'),
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
    description: 'Cozy life simulation set in J.R.R. Tolkien\'s beloved Middle-earth.',
    featured: true,
    verified: true,
    rawgSlug: 'the-lord-of-the-rings-adventure-card-game'
  },
  {
    id: '8',
    title: 'IEM Cologne 2025',
    game: 'Counter-Strike 2',
    type: 'tournament',
    date: new Date('2025-07-23'),
    platform: ['PC'],
    description: 'The Cathedral of Counter-Strike returns to the legendary LANXESS Arena.',
    featured: true,
    verified: true,
    prizePool: '$1,000,000',
    participants: '24 teams',
    location: 'Cologne, Germany',
    rawgSlug: 'counter-strike-2'
  },
  {
    id: '9',
    title: 'PUBG Mobile World Championship',
    game: 'PUBG Mobile',
    type: 'tournament',
    date: new Date('2025-07-25'),
    platform: ['Mobile'],
    description: 'The ultimate mobile battle royale championship tournament.',
    featured: true,
    verified: true,
    prizePool: '$3,000,000',
    participants: '32 teams',
    location: 'Istanbul, Turkey',
    rawgSlug: 'playerunknowns-battlegrounds'
  },

  // === AUGUST 2025 ===
  {
    id: '10',
    title: 'Madden NFL 26',
    game: 'Madden NFL 26',
    type: 'release',
    date: new Date('2025-08-14'),
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
    description: 'The annual football simulation with next-gen AI and enhanced gameplay.',
    featured: true,
    verified: true,
    rawgSlug: 'madden-nfl-25'
  },
  {
    id: '11',
    title: 'Grounded: The Full Yard',
    game: 'Grounded',
    type: 'dlc',
    date: new Date('2025-08-15'),
    platform: ['PC', 'Xbox'],
    description: 'Major expansion for the hit survival game with new areas and creatures.',
    featured: true,
    verified: true,
    rawgSlug: 'grounded'
  },
  {
    id: '12',
    title: 'Borderlands 4',
    game: 'Borderlands 4',
    type: 'release',
    date: new Date('2025-08-20'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'The legendary looter-shooter returns with new Vault Hunters and mayhem.',
    featured: true,
    verified: true,
    rawgSlug: 'borderlands-3'
  },
  {
    id: '13',
    title: 'CS2 Esports World Cup Finals',
    game: 'Counter-Strike 2',
    type: 'tournament',
    date: new Date('2025-08-20'),
    platform: ['PC'],
    description: 'Counter-Strike 2 championship finals at the Esports World Cup.',
    featured: true,
    verified: true,
    prizePool: '$1,250,000',
    participants: '16 teams',
    location: 'Riyadh, Saudi Arabia',
    rawgSlug: 'counter-strike-2'
  },

  // === SEPTEMBER 2025 ===
  {
    id: '14',
    title: 'FIDE Women\'s Grand Swiss',
    game: 'Chess',
    type: 'tournament',
    date: new Date('2025-09-03'),
    platform: ['PC'],
    description: 'Elite women\'s chess championship with top players worldwide.',
    verified: true,
    prizePool: '$230,000',
    participants: '64 players',
    location: 'Geneva, Switzerland',
    rawgSlug: 'chess'
  },
  {
    id: '15',
    title: 'VALORANT Champions 2025',
    game: 'VALORANT',
    type: 'tournament',
    date: new Date('2025-09-12'),
    platform: ['PC'],
    description: 'The pinnacle VALORANT tournament returns to Europe with epic matches.',
    featured: true,
    verified: true,
    prizePool: '$2,250,000',
    participants: '16 teams',
    location: 'Paris, France',
    rawgSlug: 'valorant'
  },
  {
    id: '16',
    title: 'Ghost of Yotei',
    game: 'Ghost of Yotei',
    type: 'release',
    date: new Date('2025-09-17'),
    platform: ['PlayStation'],
    description: 'Stunning sequel to Ghost of Tsushima set in 1600s Hokkaido.',
    featured: true,
    verified: true,
    rawgSlug: 'ghost-of-tsushima'
  },
  {
    id: '17',
    title: 'Cyberpunk 2077: Phantom Liberty Expansion',
    game: 'Cyberpunk 2077',
    type: 'dlc',
    date: new Date('2025-09-28'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'Major story expansion featuring additional Night City content.',
    featured: true,
    verified: true,
    rawgSlug: 'cyberpunk-2077'
  },

  // === OCTOBER 2025 ===
  {
    id: '18',
    title: 'League of Legends World Championship',
    game: 'League of Legends',
    type: 'tournament',
    date: new Date('2025-10-01'),
    platform: ['PC'],
    description: 'The most-watched esports event returns to China for epic battles.',
    featured: true,
    verified: true,
    prizePool: '$5,000,000',
    participants: '22 teams',
    location: 'Shanghai, China',
    rawgSlug: 'league-of-legends'
  },
  {
    id: '19',
    title: 'Elden Ring: Shadow of the Erdtree',
    game: 'Elden Ring',
    type: 'dlc',
    date: new Date('2025-10-02'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'Massive expansion continuing the epic FromSoftware adventure.',
    featured: true,
    verified: true,
    rawgSlug: 'elden-ring'
  },
  {
    id: '20',
    title: 'EVO France 2025',
    game: 'Fighting Games',
    type: 'tournament',
    date: new Date('2025-10-10'),
    platform: ['PC', 'PlayStation'],
    description: 'Historic first-ever EVO in Europe featuring top fighting games.',
    featured: true,
    verified: true,
    prizePool: '$500,000',
    participants: '2000+ players',
    location: 'Nice, France',
    rawgSlug: 'street-fighter-6'
  },
  {
    id: '21',
    title: 'The Witcher 3: Complete Edition Update',
    game: 'The Witcher 3',
    type: 'update',
    date: new Date('2025-10-15'),
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
    description: 'Major content update with new quests and enhanced visuals.',
    verified: true,
    rawgSlug: 'the-witcher-3-wild-hunt'
  },

  // === NOVEMBER 2025 ===
  {
    id: '22',
    title: 'Grand Theft Auto VI',
    game: 'Grand Theft Auto VI',
    type: 'release',
    date: new Date('2025-11-15'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'The most anticipated gaming release of the decade finally arrives.',
    featured: true,
    verified: true,
    rawgSlug: 'grand-theft-auto-v'
  },
  {
    id: '23',
    title: 'Call of Duty: Black Ops 6 Season 2',
    game: 'Call of Duty: Black Ops 6',
    type: 'dlc',
    date: new Date('2025-11-20'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'New multiplayer maps, zombie content, and seasonal updates.',
    verified: true,
    rawgSlug: 'call-of-duty-black-ops-cold-war'
  },
  {
    id: '24',
    title: 'PUBG Global Championship 2025',
    game: 'PUBG: Battlegrounds',
    type: 'tournament',
    date: new Date('2025-11-25'),
    platform: ['PC'],
    description: 'The ultimate PUBG championship crowning the world\'s best team.',
    featured: true,
    verified: true,
    prizePool: '$2,000,000',
    participants: '32 teams',
    location: 'Seoul, South Korea',
    rawgSlug: 'playerunknowns-battlegrounds'
  },

  // === DECEMBER 2025 ===
  {
    id: '25',
    title: 'Horizon Forbidden West: Burning Shores',
    game: 'Horizon Forbidden West',
    type: 'dlc',
    date: new Date('2025-12-01'),
    platform: ['PC', 'PlayStation'],
    description: 'New story expansion with enhanced machines and environments.',
    verified: true,
    rawgSlug: 'horizon-zero-dawn'
  },
  {
    id: '26',
    title: 'Red Dead Redemption 2: Undead Nightmare 2',
    game: 'Red Dead Redemption 2',
    type: 'dlc',
    date: new Date('2025-12-15'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'Zombie-themed expansion bringing horror to the Wild West.',
    featured: true,
    verified: true,
    rawgSlug: 'red-dead-redemption-2'
  },
  {
    id: '27',
    title: 'Tekken World Tour Finals 2025',
    game: 'Tekken 8',
    type: 'tournament',
    date: new Date('2025-12-20'),
    platform: ['PlayStation', 'PC'],
    description: 'Season-ending championship for Tekken 8\'s competitive year.',
    featured: true,
    verified: true,
    prizePool: '$500,000',
    participants: '64 players',
    location: 'Tokyo, Japan',
    rawgSlug: 'tekken-8'
  },

  // === EARLY 2026 ===
  {
    id: '29',
    title: 'Sniper Elite: Resistance',
    game: 'Sniper Elite: Resistance',
    type: 'release',
    date: new Date('2026-01-30'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'New chapter in the tactical sniper shooter series.',
    verified: true,
    rawgSlug: 'sniper-elite-5'
  },
  {
    id: '30',
    title: 'VALORANT Masters Bangkok',
    game: 'VALORANT',
    type: 'tournament',
    date: new Date('2025-02-20'),
    platform: ['PC'],
    description: 'First international VCT Masters tournament in Southeast Asia.',
    featured: true,
    verified: true,
    prizePool: '$1,000,000',
    participants: '12 teams',
    location: 'Bangkok, Thailand',
    rawgSlug: 'valorant'
  },

  // More tournaments and releases...
  {
    id: '31',
    title: 'Capcom Cup 11',
    game: 'Street Fighter 6',
    type: 'tournament',
    date: new Date('2025-03-03'),
    platform: ['PlayStation', 'PC'],
    description: 'The premier Street Fighter championship with historic prize pool.',
    featured: true,
    verified: true,
    prizePool: '$1,280,000',
    participants: '48 players',
    location: 'Tokyo, Japan',
    rawgSlug: 'street-fighter-6'
  },
  {
    id: '33',
    title: 'Atelier Yumia: The Alchemist of Memories',
    game: 'Atelier Yumia',
    type: 'release',
    date: new Date('2025-03-21'),
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
    description: 'New entry in the beloved alchemy crafting RPG series.',
    verified: true,
    rawgSlug: 'atelier-ryza-ever-darkness-the-secret-hideout'
  },
  {
    id: '34',
    title: 'Bleach: Rebirth of Souls',
    game: 'Bleach: Rebirth of Souls',
    type: 'release',
    date: new Date('2025-03-21'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'Anime fighting game featuring iconic Bleach characters.',
    verified: true,
    rawgSlug: 'bleach-brave-souls'
  },
  {
    id: '35',
    title: 'Fatal Fury: City of the Wolves',
    game: 'Fatal Fury: City of the Wolves',
    type: 'release',
    date: new Date('2025-04-24'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'Long-awaited return of the legendary fighting franchise.',
    featured: true,
    verified: true,
    rawgSlug: 'fatal-fury-special'
  },
  {
    id: '37',
    title: 'Doom: The Dark Ages',
    game: 'Doom: The Dark Ages',
    type: 'release',
    date: new Date('2025-05-15'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'Medieval prequel to the acclaimed Doom reboot series.',
    featured: true,
    verified: true,
    rawgSlug: 'doom-eternal'
  },
  {
    id: '38',
    title: 'Capcom Fighting Collection 2',
    game: 'Capcom Fighting Collection 2',
    type: 'release',
    date: new Date('2025-05-16'),
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
    description: 'Return of Capcom Vs. SNK 2 and other arcade fighting classics.',
    verified: true,
    rawgSlug: 'capcom-vs-snk-2-mark-of-the-millennium-2001'
  },
  {
    id: '39',
    title: 'Lost Soul Aside',
    game: 'Lost Soul Aside',
    type: 'release',
    date: new Date('2025-05-30'),
    platform: ['PC', 'PlayStation'],
    description: 'Highly anticipated action RPG from talented indie developer.',
    featured: true,
    verified: true,
    rawgSlug: 'lost-soul-aside'
  },
  {
    id: '40',
    title: 'Elden Ring Nightreign',
    game: 'Elden Ring Nightreign',
    type: 'release',
    date: new Date('2025-05-30'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'Standalone co-op experience set in the Elden Ring universe.',
    featured: true,
    verified: true,
    rawgSlug: 'elden-ring'
  },
  {
    id: '41',
    title: 'Death Stranding 2: On The Beach',
    game: 'Death Stranding 2',
    type: 'release',
    date: new Date('2025-06-24'),
    platform: ['PlayStation'],
    description: 'Kojima\'s latest surreal adventure continuing Sam\'s journey.',
    featured: true,
    verified: true,
    rawgSlug: 'death-stranding'
  },
  {
    id: '42',
    title: 'Minecraft Live 2025',
    game: 'Minecraft',
    type: 'event',
    date: new Date('2025-10-15'),
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo', 'Mobile'],
    description: 'Annual Minecraft community celebration with major announcements.',
    verified: true,
    rawgSlug: 'minecraft'
  },
  {
    id: '43',
    title: 'Overwatch Champions Series Grand Finals',
    game: 'Overwatch 2',
    type: 'tournament',
    date: new Date('2025-01-24'),
    platform: ['PC'],
    description: 'Premier Overwatch competition featuring global teams.',
    verified: true,
    prizePool: '$1,500,000',
    participants: '16 teams',
    location: 'Los Angeles, USA',
    rawgSlug: 'overwatch-2'
  },
  {
    id: '44',
    title: 'Rocket League Championship Series Major',
    game: 'Rocket League',
    type: 'tournament',
    date: new Date('2025-03-15'),
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
    description: 'Birmingham Major featuring top Rocket League teams worldwide.',
    verified: true,
    prizePool: '$600,000',
    participants: '24 teams',
    location: 'Birmingham, UK',
    rawgSlug: 'rocket-league'
  },
  {
    id: '45',
    title: 'God of War Ragnarök PC Edition',
    game: 'God of War Ragnarök',
    type: 'release',
    date: new Date('2025-09-19'),
    platform: ['PC'],
    description: 'Norse saga concludes with PC release featuring enhanced graphics.',
    featured: true,
    verified: true,
    rawgSlug: 'god-of-war'
  },
  {
    id: '46',
    title: 'Assassin\'s Creed Shadows',
    game: 'Assassin\'s Creed Shadows',
    type: 'release',
    date: new Date('2025-02-14'),
    platform: ['PC', 'PlayStation', 'Xbox'],
    description: 'Feudal Japan setting with dual protagonist stealth gameplay.',
    featured: true,
    verified: true,
    rawgSlug: 'assassins-creed-valhalla'
  },
  {
    id: '47',
    title: 'Avowed',
    game: 'Avowed',
    type: 'release',
    date: new Date('2025-02-18'),
    platform: ['PC', 'Xbox'],
    description: 'Obsidian\'s epic fantasy RPG set in the Pillars of Eternity world.',
    featured: true,
    verified: true,
    rawgSlug: 'the-outer-worlds'
  },
  {
    id: '49',
    title: 'Xenoblade Chronicles X: Definitive Edition',
    game: 'Xenoblade Chronicles X',
    type: 'release',
    date: new Date('2025-03-20'),
    platform: ['Nintendo'],
    description: 'Wii U exclusive finally escapes to modern Nintendo platforms.',
    featured: true,
    verified: true,
    rawgSlug: 'xenoblade-chronicles-3'
  },
  {
    id: '50',
    title: 'Combo Breaker 2025',
    game: 'Fighting Games',
    type: 'tournament',
    date: new Date('2025-05-23'),
    platform: ['PC', 'PlayStation'],
    description: 'Premier grassroots fighting game major in the American Midwest.',
    verified: true,
    prizePool: '$400,000',
    participants: '3000+ players',
    location: 'Chicago, USA',
    rawgSlug: 'street-fighter-6'
  }
];

export const eventTypeStyles = {
  release: { color: 'bg-accent-600', label: 'Game Release', icon: '🎮' },
  tournament: { color: 'bg-primary-600', label: 'Tournament', icon: '🏆' },
  event: { color: 'bg-purple-600', label: 'Gaming Event', icon: '🎉' },
  dlc: { color: 'bg-pink-600', label: 'DLC/Expansion', icon: '📦' },
  update: { color: 'bg-orange-600', label: 'Update', icon: '🔄' },
};

export const platforms = {
  PC: { name: 'PC', color: 'badge-primary' },
  PlayStation: { name: 'PlayStation', color: 'badge-primary' },
  Xbox: { name: 'Xbox', color: 'badge-accent' },
  Nintendo: { name: 'Nintendo', color: 'badge-gray' },
  Mobile: { name: 'Mobile', color: 'badge-purple' }
};
