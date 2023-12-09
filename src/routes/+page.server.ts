import { error } from '@sveltejs/kit';
import { utilityData } from '../data.js';
import type { PageServerLoad } from './$types.js';
 
export const load: PageServerLoad = () => {
	const data = utilityData;

	if (!data) {
		throw error(404);
	}

	return {
		data,
	};
}
