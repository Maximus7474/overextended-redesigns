import { Redesign, Resource } from "@/types";
import ox_inventory from "./ox_inventory";
import ox_lib from "./ox_lib";
import ox_target from "./ox_target";

export const resources: Resource[] = [
  ox_inventory,
	ox_lib,
	ox_target,
];

export function getResourceById(id: string): Resource | undefined {
  return resources.find(resource => resource.id === id);
}

export function getRedesignById(resourceId: string, redesignId: string): Redesign | undefined {
  const resource = getResourceById(resourceId);
  return resource?.redesigns.find(redesign => redesign.id === redesignId);
}
