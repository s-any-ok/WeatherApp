export const Route: IRoute = {
  MAIN: 'MAIN',
  WEATHER: 'WEATHER',
};

interface IRoute {
  readonly MAIN: 'MAIN' | string;
  readonly WEATHER: 'WEATHER' | string;
}
