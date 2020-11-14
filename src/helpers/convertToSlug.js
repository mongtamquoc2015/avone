export const convertToSlug = (str) => {
	return str.toLowerCase().split(' ').join('-');
};