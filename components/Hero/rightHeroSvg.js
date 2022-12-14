import { useTheme } from 'styled-components';

export const RightHeroSvg = () => {
    const theme = useTheme();
    return (
        <svg
            width="170"
            height="378"
            viewBox="0 0 134 318"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="170"
                height="378"
                rx="85"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 352.747 85.4609)"
                fill={theme.primaryLight}
            />
        </svg>
    );
};
