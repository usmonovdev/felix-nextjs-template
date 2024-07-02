const primaryColor = {
  primary_50: "#FAE6FD",
  primary_100: "#F0B1FA",
  primary_200: "#E88BF7",
  primary_300: "#DE55F4",
  primary_400: "#D735F1",
  primary_500: "#CD02EE",
  primary_600: "#BB02D9",
  primary_700: "#9201A9",
  primary_800: "#710183",
  primary_900: "#560164",
};

const secondaryColor = {
  secondary_50: "#E6F4FF",
  secondary_100: "#B0DEFF",
  secondary_200: "#8ACEFF",
  secondary_300: "#54B7FF",
  secondary_400: "#33A9FF",
  secondary_500: "#0094FF",
  secondary_600: "#0087E8",
  secondary_700: "#0069B5",
  secondary_800: "#00518C",
  secondary_900: "#003E6B",
};

const dark_green = {
  dark_25: "#F9F9F9",
  dark_50: "#E9EAEC",
  dark_100: "#BBBFC4",
  dark_200: "#9B9FA7",
  dark_300: "#6D747F",
  dark_400: "#515966",
  dark_500: "#252F40",
  dark_600: "#222B3A",
  dark_700: "#1A212D",
  dark_800: "#141A23",
  dark_900: "#10141B",
};

const gradient = {
  white: "#FFF",
  black: "#000",
  gradient: "linear-gradient(239deg, #0094FF -1.81%, #CD02EE 89.62%)",
  gradient_line:
    "linear-gradient(90deg, rgba(255, 255, 255, 0.00) -1.96%, #D735F1 49.94%, rgba(255, 255, 255, 0.00) 99.72%)",
};

export const colors = {
  ...primaryColor,
  ...secondaryColor,
  ...dark_green,
  ...gradient,
};

export type TColors = keyof typeof colors;
