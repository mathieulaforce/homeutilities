import type { PageLoad } from './$types.js';
 
export const load: PageLoad  =async ({parent, data}) => {
	await parent()	
	return {
		utilities:data.data, 
	}
}
