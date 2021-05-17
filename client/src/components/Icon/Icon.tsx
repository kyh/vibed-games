import styled, {
  css,
  StyledComponentProps,
  DefaultTheme,
} from "styled-components";
import { Box } from "reflexbox";
import raw from "raw.macro";

type Props = StyledComponentProps<
  typeof Box,
  DefaultTheme,
  {
    icon: IconType;
    color?: keyof DefaultTheme["colors"];
    size?: IconSizeType;
    rotate?: string;
  },
  never
>;

export const iconMap = {
  setting: raw("./svgs/setting.svg"),
  close: raw("./svgs/close.svg"),
  pencil: raw("./svgs/pencil.svg"),
  play: raw("./svgs/play.svg"),
  trash: raw("./svgs/trash.svg"),
  list: raw("./svgs/list.svg"),
};

export type IconType = keyof typeof iconMap;
export type IconSizeType = "xs" | "sm" | "md" | "lg" | number;

export const Icon = ({ icon, color, size, rotate, ...rest }: Props) => {
  const iconSvg = iconMap[icon];
  if (!iconSvg) return null;
  return (
    <StyledIcon
      className="playhouse-icon"
      iconColor={color}
      dangerouslySetInnerHTML={{ __html: iconSvg }}
      iconSize={size}
      rotate={rotate}
      {...rest}
    />
  );
};

type StyledProps = {
  iconColor?: keyof DefaultTheme["colors"];
  iconSize?: IconSizeType;
  rotate?: string;
};

const iconSizeMap = {
  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "40px",
};

const getDimensions = (iconSize: IconSizeType) => {
  if (typeof iconSize === "number") return `${iconSize}px`;
  return iconSizeMap[iconSize];
};

const getSvgStyles = (props: StyledProps) => {
  const { iconSize, iconColor, rotate } = props;

  return css`
    width: ${iconSize ? getDimensions(iconSize) : "initial"};
    height: ${iconSize ? getDimensions(iconSize) : "intial"};
    path {
      fill: ${({ theme }) =>
        iconColor ? theme.colors[iconColor] : theme.ui.text};
    }
    transform: rotate(${rotate});
    transition: fill 0.23s ease;
  `;
};

const StyledIcon = styled(Box)<StyledProps>`
  display: inline-flex;
  padding: ${({ theme }) => theme.spacings(1)};
  > svg {
    ${getSvgStyles}
  }
`;
