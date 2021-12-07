import { ValueTransformer } from 'typeorm';

export interface Location {
  longitude: number;
  latitude: number;
}

export class LocationTransformer implements ValueTransformer {
  to(value: Location): string {
    const { latitude, longitude } = value;

    return `${latitude}, ${longitude}`;
  }

  from(value: any): Location {
    const { x: latitude, y: longitude } = value;

    return { latitude, longitude };
  }
}
