export enum SelectedPage {
  Surround = "surround",
  Filter = "filter",
  Search = "search",
}

export type NavCategory = {
  id: SelectedPage;
  name: string;
  icon: React.ReactElement;
};

export type CurrentLocation = {
  longitude: number;
  latitude: number;
};
