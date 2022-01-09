export interface IPlanet {
  id: string;
  name: string;
  distance_from_sun: number;
  diameter: number;
  moons: number;
  length_of_year: number;
  avg_temp: number | null;
  min_temp: number | null;
  max_temp: number | null;
  first_record: string | null;
  recorded_by: string | null;
  facts: string;
  stars: number;
}
