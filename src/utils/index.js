import get from 'lodash/get';
import isArray from 'lodash/isArray';
import pick from 'lodash/pick';
import routeContent from './navigation';

export const getRoutes = entity => {
	if (isArray(entity)) {
		return pick(routeContent, entity);
	}
	if (entity) {
		return get(routeContent, entity);
	}

	return routeContent;
};
