const utilityTypes = ['water', 'electricity', 'gas'] as const;
export type UtilityTypes = typeof utilityTypes;
export type UtilityType = UtilityTypes[number];

export interface UtilityData {
	type: UtilityType;
	ean: string;
	name: string;
	description: string;
	unit: string;
	usage: number;
	readingDate: string;
}

export interface DataType {
	utilities: UtilityData[];
}

export const isUtilityType = (utility: string): utility is UtilityType => {
	return Object.values(utilityTypes).includes(utility as UtilityType);
};
