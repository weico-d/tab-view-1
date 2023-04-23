import { StyleProp, ViewStyle } from "react-native/types";

//自定义customerStyle
export type yTabCustomeType = {
    textColor?: string;
    textActiveColor?: string;
    sliderColor?: string;
    sliderHeight?: number;
    textSize?: number;//rem|px
    sliderBorderRadius?: number;
    textHeight?: number;//rem|px|per
    tabBarBgColor?: string;
}

//Tabs属性
export type YTabConfigType = {



    type?: 'primary' | 'primaryHalf' | 'secondary';//tab类型
    align?: 'center' | 'left';
    position: 'bottom' | 'top' | undefined
    defaultTab?: string;
    defaultIndex?: number;
    showSlider?: boolean;
    slideBottom?: number;
    isAnimated?: boolean;
    customStyle?: yTabCustomeType//优先级高于其他属性
    swipeEnabled?: boolean;
    lazy?: boolean;
    lazyPreloadDistance?: number;
    onIndexChange: (index: number) => void;
    renderTabBarItem?: (__props: any) => JSX.Element;
    renderTabBarRightSection?: () => React.ReactNode;
    renderLazyPlaceholder?: () => React.ReactNode;
    onTabBarPress?: (index: number) => void;
    onSwipe?: (index: number) => void;
    navItemStyle?: StyleProp<ViewStyle>
    sliderAnimate?: boolean;


}


export type YTabPaneType = {
    key: string;
    label: string;
    id: string;
} & JSX.Element

