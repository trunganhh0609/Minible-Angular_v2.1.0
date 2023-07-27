import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'uil-home-alt',
        link: '/dashboard',
    },
    {
        id: 2,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'uil-flask',
        isUiElement: true,
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 7,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 8,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 9,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 11,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 12,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 14,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 15,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 17,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 18,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 19,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: 'javascript:void(0);',
                parentId: 2
            },
            {
                id: 20,
                label: 'MENUITEMS.UIELEMENTS.LIST.RATING',
                link: 'javascript:void(0);',
                parentId: 2
            }
        ]
    },
    {
        id: 22,
        label: 'MENUITEMS.APPS.TEXT',
        icon: 'uil-apps',
        subItems: [
            {
                id: 23,
                label: 'MENUITEMS.CALENDAR.TEXT',
                link: 'javascript:void(0);',
            },
            {
                id: 24,
                label: 'MENUITEMS.CHAT.TEXT',
                link: 'javascript:void(0);',
            },
            {
                id: 25,
                label: 'MENUITEMS.EMAIL.TEXT',
                subItems: [
                    {
                        id: 26,
                        label: 'MENUITEMS.EMAIL.LIST.INBOX',
                        link: 'javascript:void(0);',
                        parentId: 25
                    },
                    {
                        id: 27,
                        label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                        link: 'javascript:void(0);',
                        parentId: 25
                    }
                ]
            },
            {
                id: 28,
                label: 'MENUITEMS.ECOMMERCE.TEXT',
                subItems: [
                    {
                        id: 29,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                        link: 'javascript:void(0);',
                        parentId: 28
                    },
                    {
                        id: 30,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                        link: 'javascript:void(0);',
                        parentId: 28
                    },
                    {
                        id: 31,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                        link: 'javascript:void(0);',
                        parentId: 28
                    },
                    {
                        id: 32,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                        link: 'javascript:void(0);',
                        parentId: 28
                    },
                    {
                        id: 33,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                        link: 'javascript:void(0);',
                        parentId: 28
                    },
                    {
                        id: 34,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                        link: 'javascript:void(0);',
                        parentId: 28
                    },
                    {
                        id: 35,
                        label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                        link: 'javascript:void(0);',
                        parentId: 28
                    },
                    {
                        id: 36,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                        link: 'javascript:void(0);',
                        parentId: 28
                    },
                ]
            },
            {
                id: 38,
                label: 'MENUITEMS.INVOICES.TEXT',
                subItems: [
                    {
                        id: 39,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                        link: 'javascript:void(0);',
                        parentId: 38
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                        link: 'javascript:void(0);',
                        parentId: 38
                    },
                ]
            },
            {
                id: 46,
                label: 'MENUITEMS.CONTACTS.TEXT',
                subItems: [
                    {
                        id: 47,
                        label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                        link: 'javascript:void(0);',
                        parentId: 46
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                        link: 'javascript:void(0);',
                        parentId: 46
                    },
                    {
                        id: 49,
                        label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                        link: 'javascript:void(0);',
                        parentId: 46
                    }
                ]
            },
        ]
    },
    {
        id: 59,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        icon: 'uil-layers',
        subItems: [
            {
                id: 60,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 61,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: 'javascript:void(0);',
                        parentId: 60
                    },
                    {
                        id: 62,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: 'javascript:void(0);',
                        parentId: 60
                    },
                    {
                        id: 63,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: 'javascript:void(0);',
                        parentId: 60
                    },
                    {
                        id: 64,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: 'javascript:void(0);',
                        parentId: 60
                    },
                    {
                        id: 65,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: 'javascript:void(0);',
                        parentId: 60
                    },
                    {
                        id: 66,
                        label: 'MENUITEMS.FORMS.LIST.REPEATER',
                        link: 'javascript:void(0);',
                        parentId: 60
                    },
                    {
                        id: 67,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: 'javascript:void(0);',
                        parentId: 60
                    },
                    {
                        id: 68,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: 'javascript:void(0);',
                        parentId: 60
                    }
                ]
            },
            {
                id: 69,
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 70,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: 'javascript:void(0);',
                        parentId: 69
                    },
                    {
                        id: 71,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                        link: 'javascript:void(0);',
                        parentId: 69
                    }
                ]
            },
            {
                id: 72,
                label: 'MENUITEMS.CHARTS.TEXT',
                subItems: [
                    {
                        id: 73,
                        label: 'MENUITEMS.CHARTS.LIST.APEX',
                        link: 'javascript:void(0);',
                        parentId: 72
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                        link: 'javascript:void(0);',
                        parentId: 72
                    },
                    {
                        id: 75,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                        link: 'javascript:void(0);',
                        parentId: 72
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.CHARTS.LIST.ECHART',
                        link: 'javascript:void(0);',
                        parentId: 72
                    },
                ]
            },
            {
                id: 77,
                label: 'MENUITEMS.ICONS.TEXT',
                subItems: [
                    {
                        id: 78,
                        label: 'MENUITEMS.ICONS.LIST.UNICONS',
                        link: 'javascript:void(0);',
                        parentId: 77
                    },
                    {
                        id: 78,
                        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                        link: 'javascript:void(0);',
                        parentId: 77
                    },
                    {
                        id: 79,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: 'javascript:void(0);',
                        parentId: 77
                    },
                    {
                        id: 80,
                        label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                        link: 'javascript:void(0);',
                        parentId: 77
                    },
                    {
                        id: 81,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: 'javascript:void(0);',
                        parentId: 77
                    },
                ]
            },
            {
                id: 82,
                label: 'MENUITEMS.MAPS.TEXT',
                subItems: [
                    {
                        id: 83,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: 'javascript:void(0);',
                        parentId: 82
                    }
                ]
            }
        ]
    },
    {
        id: 84,
        label: 'MENUITEMS.EXTRAS.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 88,
                label: 'MENUITEMS.AUTHENTICATION.TEXT',
                subItems: [
                    {
                        id: 89,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                        link: 'javascript:void(0);',
                        parentId: 88
                    },
                    {
                        id: 90,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                        link: 'javascript:void(0);',
                        parentId: 88
                    },
                    {
                        id: 91,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                        link: 'javascript:void(0);',
                        parentId: 88
                    },
                    {
                        id: 92,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                        link: 'javascript:void(0);',
                        parentId: 88
                    }
                ]
            },
            {
                id: 93,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'bx-file',
                subItems: [
                    {
                        id: 94,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: 'javascript:void(0);',
                        parentId: 93
                    },
                    {
                        id: 95,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: 'javascript:void(0);',
                        parentId: 93
                    },
                    {
                        id: 96,
                        label: 'MENUITEMS.UTILITY.LIST.COMINGSOON',
                        link: 'javascript:void(0);',
                        parentId: 93
                    },
                    {
                        id: 96,
                        label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                        link: 'javascript:void(0);',
                        parentId: 93
                    },
                    {
                        id: 97,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: 'javascript:void(0);',
                        parentId: 93
                    },
                    {
                        id: 98,
                        label: 'MENUITEMS.UTILITY.LIST.PRICING',
                        link: 'javascript:void(0);',
                        parentId: 93
                    },
                    {
                        id: 99,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                        link: 'javascript:void(0);',
                        parentId: 93
                    },
                    {
                        id: 100,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                        link: 'javascript:void(0);',
                        parentId: 93
                    },
                ]
            }
        ]
    }
];

