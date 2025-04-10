export interface ppm {
    year: number;
    ppm: number;
}

export interface ppmData {
    data: ppm[];
    metadata: {
        title: string;
        description: string;
        source: string;
        units: string;
        lastUpdated: string;
    }
}
