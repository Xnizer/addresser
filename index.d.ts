declare module "addresser" {

	export function parseAddress(addressString: string, config?: ParseConfig): IParsedAddress;
	export function getRandomCity(): { city: string, state: string};
	export function cities(): IStateCities;

	export type ParseConfig = {
		doNotAbbreviateStreetSuffix: boolean;
	}

	export interface IParsedAddress {
		formattedAddress: string;
		zipCode: string;
		stateAbbreviation: string;
		stateName: string;
		placeName: string;
		addressLine1: string;
		streetNumber: string;
		streetSuffix: string;
		streetName: string;
		id: string;
	}

	export interface IStateCities {
		[stateName: string]: string[];
	}
}
