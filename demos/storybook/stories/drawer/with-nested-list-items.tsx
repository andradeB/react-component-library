import { Accessibility, Add, AddAPhoto, FitnessCenter, NotificationsActive, PinDrop, Remove } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import * as Colors from '@pxblue/colors';
import { ChannelValue, DrawerBody, DrawerNavGroup, ListItemTag } from '@pxblue/react-components';
import { Drawer, DrawerHeader } from '@pxblue/react-components/core/Drawer';
import { boolean, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerState, DrawerStoryContext } from './util';

const userGuide = 'User Guide';
const license = 'License';
const accessibility = 'Accessibility';
const notifications = 'Notifications';
const gettingStarted = 'Getting Started';
const tutorials = 'Tutorials';
const forDevelopers = 'For Developers';
const forDesigners = 'For Designers';
const environmentSetup = 'Environment Setup';
const community = 'Community';
const hallOfFame = 'Hall of Fame';
const contribute = 'Contribute';
const contributingGuide = 'Contributing Guide';
const componentLibrary = 'Component Library';
const typographyRules = 'Typography Rules';
const themeRules = 'Theme Rules';

export const withNestedListItems = (context: DrawerStoryContext): StoryFnReactReturnType => {
    const DrawerNavGroupID = 'DrawerNavGroup';
    const open = boolean('open', true, DrawerNavGroupID);
    const divider = boolean('divider', true, DrawerNavGroupID);
    const nestedDivider = boolean('nestedDivider', false, DrawerNavGroupID);
    const ripple = boolean('ripple', true, DrawerNavGroupID);
    const chevron = boolean('chevron', false, DrawerNavGroupID);
    const round = select('activeBackgroundShape', ['round', 'square'], 'round', DrawerNavGroupID);
    const showIcon = boolean('Show Top-Level Icons', true, DrawerNavGroupID);

    const NavItemID = 'NavItem';
    const hidePadding = boolean('hidePadding', false, NavItemID);
    const useRightComponent = select(
        'rightComponent',
        ['undefined', '<ListItemTag />', '<ChannelValue />'],
        'undefined',
        NavItemID
    );
    const useExpandIcon = select('expandIcon', ['undefined', '<Add />', '<PinDrop />'], 'undefined', NavItemID);
    const useCollapseIcon = select(
        'collapseIcon',
        ['undefined', '<Remove />', '<AddAPhoto />'],
        'undefined',
        NavItemID
    );

    const rightComponent = ((): JSX.Element | undefined => {
        switch (useRightComponent) {
            case 'undefined':
                return undefined;
            case '<ListItemTag />':
                return <ListItemTag label="56+" backgroundColor={Colors.gold[50]} fontColor={Colors.gold[800]} />;
            case '<ChannelValue />':
                return <ChannelValue value={2} units={'V'} />;
            default:
                break;
        }
    })();

    const expandIcon = ((): JSX.Element | undefined => {
        switch (useExpandIcon) {
            case 'undefined':
                return undefined;
            case '<Add />':
                return <Add />;
            case '<PinDrop />':
                return <PinDrop />;
            default:
                break;
        }
    })();

    const collapseIcon = ((): JSX.Element | undefined => {
        switch (useCollapseIcon) {
            case 'undefined':
                return undefined;
            case '<Remove />':
                return <Remove />;
            case '<AddAPhoto />':
                return <AddAPhoto />;
            default:
                break;
        }
    })();

    const drawerItemList = (state: DrawerState): JSX.Element => (
        <DrawerBody>
            <DrawerNavGroup
                divider={divider}
                nestedDivider={nestedDivider}
                title={'Multi-Level Navigation Group'}
                hidePadding={hidePadding}
                ripple={ripple}
                activeItem={state.selected}
                titleColor={Colors.black[500]}
                activeBackgroundShape={round}
                chevron={chevron}
                items={[
                    {
                        title: userGuide,
                        icon: showIcon ? <AddAPhoto /> : undefined,
                        itemID: userGuide,
                        rightComponent: rightComponent,
                        expandIcon: expandIcon,
                        collapseIcon: collapseIcon,
                        items: [
                            {
                                title: gettingStarted,
                                itemID: gettingStarted,
                                subtitle: 'Introduction to Eaton',
                                onClick: (): void => {
                                    context.store.set({ selected: gettingStarted });
                                },
                            },
                            {
                                title: tutorials,
                                itemID: tutorials,
                                items: [
                                    {
                                        title: forDevelopers,
                                        itemID: forDevelopers,
                                        onClick: (): void => {
                                            context.store.set({ selected: forDevelopers });
                                        },
                                    },
                                    {
                                        title: forDesigners,
                                        itemID: forDesigners,
                                        items: [
                                            {
                                                title: componentLibrary,
                                                itemID: componentLibrary,
                                                onClick: (): void => {
                                                    context.store.set({ selected: componentLibrary });
                                                },
                                            },
                                            {
                                                title: typographyRules,
                                                itemID: typographyRules,
                                                onClick: (): void => {
                                                    context.store.set({ selected: typographyRules });
                                                },
                                            },
                                            {
                                                title: themeRules,
                                                itemID: themeRules,
                                                onClick: (): void => {
                                                    context.store.set({ selected: themeRules });
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: environmentSetup,
                                itemID: environmentSetup,
                                onClick: (): void => {
                                    context.store.set({ selected: environmentSetup });
                                },
                            },
                        ],
                    },
                    {
                        title: community,
                        itemID: community,
                        icon: showIcon ? <FitnessCenter /> : undefined,
                        onClick: (): void => {
                            context.store.set({ selected: community });
                        },
                        items: [
                            {
                                title: license,
                                itemID: license,
                                onClick: (): void => {
                                    context.store.set({ selected: license });
                                },
                            },
                            {
                                title: contribute,
                                itemID: contribute,
                                items: [
                                    {
                                        title: hallOfFame,
                                        itemID: hallOfFame,
                                        onClick: (): void => {
                                            context.store.set({ selected: hallOfFame });
                                        },
                                    },
                                    {
                                        title: contributingGuide,
                                        itemID: contributingGuide,
                                        onClick: (): void => {
                                            context.store.set({ selected: contributingGuide });
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: accessibility,
                        itemID: accessibility,
                        icon: showIcon ? <Accessibility /> : undefined,
                        onClick: (): void => {
                            context.store.set({ selected: accessibility });
                        },
                    },
                    {
                        title: notifications,
                        itemID: notifications,
                        icon: showIcon ? <NotificationsActive /> : undefined,
                        onClick: (): void => {
                            context.store.set({ selected: notifications });
                        },
                    },
                ]}
            />
        </DrawerBody>
    );

    return (
        <Drawer open={open} key={'drawer'}>
            <DrawerHeader title={'Power Xpert Blue'} icon={<MenuIcon />} />
            {drawerItemList(context.state)}
        </Drawer>
    );
};

withNestedListItems.story = { name: 'with nested list items' };
