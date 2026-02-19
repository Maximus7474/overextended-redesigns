import { Redesign, Resource } from "@/types";

export const resources: Resource[] = [];

export function getResourceById(id: string): Resource | undefined {
  return resources.find(resource => resource.id === id);
}

export function getRedesignById(resourceId: string, redesignId: string): Redesign | undefined {
  const resource = getResourceById(resourceId);
  return resource?.redesigns.find(redesign => redesign.id === redesignId);
}
