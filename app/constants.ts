import type { SortingParams, FilteringParams } from "app/modules/heroes";

export const HeroSortingFields: Array<{
  label: string;
  value: SortingParams["field"];
}> = [
  { label: "Name", value: "localized_name" },
  { label: "Move Speed", value: "move_speed" },
  { label: "Base Attack Min", value: "base_attack_min" },
  { label: "Base Health", value: "base_health" },
  { label: "Base Armor", value: "base_armor" },
  { label: "Attack Rate", value: "attack_rate" }
];

export const HeroSortingDirections: Array<{
  label: string;
  value: SortingParams["direction"];
}> = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" }
];

export const HeroFilteringFields: Array<{
  label: string;
  value: FilteringParams["role"];
}> = [
  { label: "Carry", value: "Carry" },
  { label: "Support", value: "Support" },
  { label: "Nuker", value: "Nuker" },
  { label: "Disabler", value: "Disabler" },
  { label: "Jungler", value: "Jungler" },
  { label: "Durable", value: "Durable" },
  { label: "Escape", value: "Escape" },
  { label: "Pusher", value: "Pusher" },
  { label: "Initiator", value: "Initiator" }
];