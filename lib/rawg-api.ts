const RAWG_API_KEY = 'feac4ab34c95467a98a2df42b77ca108';
const RAWG_BASE_URL = 'https://api.rawg.io/api';

export interface RAWGGame {
  id: number;
  name: string;
  description_raw?: string;
  background_image?: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  metacritic?: number;
  genres: Array<{ name: string }>;
  platforms: Array<{ platform: { name: string } }>;
  screenshots?: Array<{ image: string }>;
  released?: string;
}

export async function fetchGameData(slug: string): Promise<RAWGGame | null> {
  try {
    const response = await fetch(
      `${RAWG_BASE_URL}/games/${slug}?key=${RAWG_API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      console.warn(`RAWG API error for ${slug}:`, response.status);
      return null;
    }
    
    const game = await response.json();
    return game;
  } catch (error) {
    console.warn(`Failed to fetch game data for ${slug}:`, error);
    return null;
  }
}

export async function fetchGameScreenshots(gameId: number): Promise<string[]> {
  try {
    const response = await fetch(
      `${RAWG_BASE_URL}/games/${gameId}/screenshots?key=${RAWG_API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) return [];
    
    const data = await response.json();
    return data.results?.map((screenshot: any) => screenshot.image) || [];
  } catch (error) {
    console.warn(`Failed to fetch screenshots for game ${gameId}:`, error);
    return [];
  }
}
