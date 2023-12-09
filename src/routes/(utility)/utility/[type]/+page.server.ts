import { isUtilityType } from '$lib/types.js';
import type { PageServerLoad } from './$types.js'; 
 
export const load: PageServerLoad = ({params}) => {
	const paramType = params.type;
	
	if(isUtilityType(paramType)) {
		switch(paramType) {
			case 'water':
				return {
					type: paramType,
					title: `${paramType} utility`,
					color: 'blue'
				}
			case 'electricity':
				return {
					type: paramType,
					title: `${paramType} utility`,
					color: 'yellow'
				}
			case 'gas':
				return {
					type: paramType,
					title: `${paramType} utility`,
					color: 'orange'
				}
			
		} 
	}
 
}
