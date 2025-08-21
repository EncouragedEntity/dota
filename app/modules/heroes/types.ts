export type PrimaryAttr = "str" | "agi" | "int";
export type AttackType = "Melee" | "Ranged";
export type HeroRole =
  | "Carry"
  | "Support"
  | "Nuker"
  | "Disabler"
  | "Jungler"
  | "Durable"
  | "Escape"
  | "Pusher"
  | "Initiator";


export interface Hero {
  id: number;
  name: string;
  primary_attr: PrimaryAttr;
  attack_type: AttackType;
  roles: Array<HeroRole>;
  img: string;
  icon: string;
  base_health: number;
  base_health_regen: number;
  base_mana: number;
  base_mana_regen: number;
  base_armor: number;
  base_mr: number;
  base_attack_min: number;
  base_attack_max: number;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  attack_range: number;
  projectile_speed: number;
  attack_rate: number;
  base_attack_time: number;
  attack_point: number;
  move_speed: number;
  turn_rate: number | null;
  cm_enabled: boolean;
  legs: number;
  day_vision: number;
  night_vision: number;
  localized_name: string;
}

export interface SortingParams {
  field: "localized_name" | "move_speed" | "base_attack_min" | "base_health" | "base_armor" | "attack_rate";
  direction: "asc" | "desc";
}

export interface FilteringParams {
  primaryAttr?: PrimaryAttr;
  attackType?: AttackType;
  roles?: Array<HeroRole>;
  cmEnabled?: boolean;
}

export interface FetchParams {
  filter?: FilteringParams;
  sort?: SortingParams;
}
export interface State {
  events: { [key: string]: boolean; };
  data: Array<Hero>;
}