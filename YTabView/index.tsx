import * as React from 'react';
import { useRef, useState } from 'react';
import { Dimensions, Text, Animated, Pressable } from 'react-native';
import { YTabConfigType, yTabCustomeType } from './type';
import TabView from './TabView';



/**
 * 
 * @author y
 * @param props 
 * @returns 
 * 
 */
export default function YTabView(props: { config: YTabConfigType, children?: Array<JSX.Element> }) {


    const defaultCusStyle: yTabCustomeType = { textColor: '#666', textActiveColor: '#222', sliderColor: '#222', sliderHeight: 2, sliderBorderRadius: 1, textSize: 15, textHeight: 38, tabBarBgColor: '#fff' };

    let customStyle = props.config.customStyle;
    if (customStyle) {
        customStyle = { ...defaultCusStyle, ...customStyle }
    }
    const [data] = useState({
        renderTabBarItem: props.config.renderTabBarItem,
        position: props.config?.position ?? 'top',
        type: props.config?.type ?? 'primary',
        align: props.config.align ?? 'center',
        defaultTab: props.config?.defaultTab ?? 0,
        defaultIndex: props.config?.defaultIndex ?? 0,
        showSlider: props.config?.showSlider ?? (props.config.type !== 'secondary'),
        sliderBottom: props.config?.type === 'primary' ? 8 : props.config?.type === 'primaryHalf' ? 6 : 4,
        isAnimated: props.config?.isAnimated ?? true,
        customStyle,
        navItemStyle: props.config.navItemStyle ?? null,
        swipeEnabled: props.config.swipeEnabled ?? true,
        lazy: props.config?.lazy ?? false,
        lazyPreloadDistance: props.config?.lazyPreloadDistance ?? 0,
        renderTabBarRightSection: props.config?.renderTabBarRightSection ?? null,
        renderLazyPlaceholder: props.config?.renderLazyPlaceholder ?? null,
        sliderAnimate: props.config?.sliderAnimate ?? true
    });


    const pages = props.children ?? [];//子Panel
    const scenes: (() => JSX.Element)[] = [];//映射tab
    const defaultTab = props.config.defaultTab;
    let _defaultIndex = props.config.defaultIndex;
    if (data.align === 'center' && pages.length > 5) {
        throw new Error("yTips:对其设置center，只支持最多五个Tab")
    }
    if (defaultTab) {
        _defaultIndex = pages.findIndex((pre, index) => pre.props.id === defaultTab);
        if (_defaultIndex === -1) {
            throw new Error("yTips:默认Tab未在配置列表")
        }
        console.log('yTips:默认tab已设置，默认index忽略。')

    }

    const navTabStatus = pages.map((cn) => {
        scenes.push(() => cn.props.children);
        return {
            key: cn.props.id,
            title: cn.props.label
        }
    }) ?? []


    return (
        <TabView
            renderTabBarRightSection={() => data.renderTabBarRightSection ? data.renderTabBarRightSection() : null}
            type={data.type}
            sliderAnimate={data.sliderAnimate}
            isAnimated={data.isAnimated}
            customStyle={customStyle ?? defaultCusStyle}
            initialIndex={_defaultIndex}
            lazy={data.lazy}
            showSlider={data.showSlider}
            tabBarStyle={data.navItemStyle ?? {}}
            tabBarPosition={data.position}
            renderLazyPlaceholder={() => data.renderLazyPlaceholder ? data.renderLazyPlaceholder() : null}
            swipeEnabled={data.swipeEnabled}
            lazyPreloadDistance={data.lazyPreloadDistance}
            navigationState={navTabStatus}
            sliderBottom={data.sliderBottom}
            renderScene={(props) => scenes[props.index]()}
            onIndexChange={props.config.onIndexChange}
            tabBarMode={data.align === 'left' ? 'scrollable' : 'fixed'}
            style={{ flex: 1 }}
        />
    );

}

