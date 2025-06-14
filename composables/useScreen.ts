import { useBreakpoints } from "@vueuse/core";

export const useScreen = () => {
	const breakpoints = useBreakpoints({
		sm: 420,
		md: 768,
		mdlg: 1000,
		lg: 1280,
	});

	const isMobile = breakpoints.smaller("md"); // <768px
	const isTablet = breakpoints.between("md", "mdlg"); // 768–1000x
	const isDesktop = breakpoints.greater("mdlg"); // >1000px

	return {
		isMobile,
		isTablet,
		isDesktop,
		breakpoints,
	};
};
