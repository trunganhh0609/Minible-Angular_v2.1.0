import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'uil-home-alt',
        badge: {
            variant: 'primary',
            text: '01', //'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: '/dashboard',
    },
    {
        id: 3,
        isLayout: true
    },
    {
        id: 4,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 5,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'uil-calender',
        link: 'javascript:void(0);',
    },
    {
        id: 6,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'uil-comments-alt',
        link: 'javascript:void(0);',
        badge: {
            variant: 'warning',
            text: 'MENUITEMS.CHAT.BADGE',
        },
    },
    {
        id: 7,
        label: 'MENUITEMS.ECOMMERCE.TEXT',
        icon: 'uil-store',
        subItems: [
            {
                id: 8,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                link: 'javascript:void(0);',
                parentId: 7
            },
            {
                id: 9,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                link: 'javascript:void(0);',
                parentId: 7
            },
            {
                id: 10,
                label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                link: 'javascript:void(0);',
                parentId: 7
            },
            {
                id: 11,
                label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                link: 'javascript:void(0);',
                parentId: 7
            },
            {
                id: 12,
                label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                link: 'javascript:void(0);',
                parentId: 7
            },
            {
                id: 13,
                label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                link: 'javascript:void(0);',
                parentId: 7
            },
            {
                id: 14,
                label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                link: 'javascript:void(0);',
                parentId: 7
            },
            {
                id: 15,
                label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                link: 'javascript:void(0);',
                parentId: 7
            },
        ]
    },
    {
        id: 16,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'uil-envelope',
        subItems: [
            {
                id: 17,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: 'javascript:void(0);',
                parentId: 16
            },
            {
                id: 18,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: 'javascript:void(0);',
                parentId: 16
            }
        ]
    },
    {
        id: 19,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'uil-invoice',
        subItems: [
            {
                id: 20,
                label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                link: 'javascript:void(0);',
                parentId: 19
            },
            {
                id: 21,
                label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                link: 'javascript:void(0);',
                parentId: 19
            },
        ]
    },
    {
        id: 22,
        label: 'MENUITEMS.CONTACTS.TEXT',
        icon: 'uil-book-alt',
        subItems: [
            {
                id: 23,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: 'javascript:void(0);',
                parentId: 22
            },
            {
                id: 24,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: 'javascript:void(0);',
                parentId: 22
            },
            {
                id: 25,
                label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                link: 'javascript:void(0);',
                parentId: 22
            }
        ]
    },
    {
        id: 26,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 27,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'uil-user-circle',
        subItems: [
            {
                id: 28,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: 'javascript:void(0);',
                parentId: 27
            },
            {
                id: 29,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: 'javascript:void(0);',
                parentId: 27
            },
            {
                id: 30,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: 'javascript:void(0);',
                parentId: 27
            },
            {
                id: 31,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: 'javascript:void(0);',
                parentId: 27
            }
        ]
    },
    {
        id: 32,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'uil-file-alt',
        subItems: [
            {
                id: 34,
                label:'MENUITEMS.UTILITY.LIST.STARTER',
                link: 'javascript:void(0);',
                parentId: 32
            },
            {
                id: 35,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: 'javascript:void(0);',
                parentId: 32
            },
            {
                id: 36,
                label: 'MENUITEMS.UTILITY.LIST.COMINGSOON',
                link: 'javascript:void(0);',
                parentId: 32
            },
            {
                id: 37,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: 'javascript:void(0);',
                parentId: 32
            },
            {
                id: 38,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: 'javascript:void(0);',
                parentId: 32
            },
            {
                id: 39,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: 'javascript:void(0);',
                parentId: 32
            },
            {
                id: 40,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: 'javascript:void(0);',
                parentId: 32
            },
            {
                id: 41,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: 'javascript:void(0);',
                parentId: 32
            },
        ]
    },
    {
        id: 42,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 43,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'uil-flask',
        subItems: [
            {
                id: 44,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 45,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 46,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 47,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 48,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 49,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 50,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 52,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 53,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 55,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 55,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 56,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 57,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 58,
                label:'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 59,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 60,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 61,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: 'javascript:void(0);',
                parentId: 43
            },
            {
                id: 62,
                label: 'MENUITEMS.UIELEMENTS.LIST.RATING',
                link: 'javascript:void(0);',
                parentId: 43
            }
        ]
    },
    {
        id: 64,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'uil-shutter-alt',
        badge: {
            variant: 'primary',
            text: '6', //'MENUITEMS.FORMS.BADGE',
        },
        subItems: [
            {
                id: 65,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: 'javascript:void(0);',
                parentId: 64
            },
            {
                id: 66,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: 'javascript:void(0);',
                parentId: 64
            },
            {
                id: 67,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: 'javascript:void(0);',
                parentId: 64
            },
            {
                id: 68,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: 'javascript:void(0);',
                parentId: 64
            },
            {
                id: 69,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: 'javascript:void(0);',
                parentId: 64
            },
            {
                id: 71,
                label: 'MENUITEMS.FORMS.LIST.REPEATER',
                link: 'javascript:void(0);',
                parentId: 64
            },
            {
                id: 72,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: 'javascript:void(0);',
                parentId: 64
            },
            {
                id: 73,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: 'javascript:void(0);',
                parentId: 64
            }
        ]
    },
    {
        id: 74,
        icon: 'uil-list-ul',
        label: 'MENUITEMS.TABLES.TEXT',
        subItems: [
            {
                id: 75,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: 'javascript:void(0);',
                parentId: 74
            },
            {
                id: 76,
                label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                link: 'javascript:void(0);',
                parentId: 74
            }
        ]
    },
    {
        id: 79,
        label: 'MENUITEMS.CHARTS.TEXT',
        icon: 'uil-chart',
        subItems: [
            {
                id: 80,
                label: 'MENUITEMS.CHARTS.LIST.APEX',
                link: 'javascript:void(0);',
                parentId: 79
            },
            {
                id: 81,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: 'javascript:void(0);',
                parentId: 79
            },
            {
                id: 82,
                label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                link: 'javascript:void(0);',
                parentId: 79
            },
            {
                id: 83,
                label: 'MENUITEMS.CHARTS.LIST.ECHART',
                link: 'javascript:void(0);',
                parentId: 79
            },
        ]
    },
    {
        id: 85,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'uil-streering',
        subItems: [
            {
                id: 86,
                label: 'MENUITEMS.ICONS.LIST.UNICONS',
                link: 'javascript:void(0);',
                parentId: 85
            },
            {
                id: 87,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: 'javascript:void(0);',
                parentId: 85
            },
            {
                id: 88,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: 'javascript:void(0);',
                parentId: 85
            },
            {
                id: 89,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: 'javascript:void(0);',
                parentId: 85
            },
            {
                id: 90,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: 'javascript:void(0);',
                parentId: 85
            },
        ]
    },
    {
        id: 100,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'uil-location-point',
        subItems: [
            {
                id: 101,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/maps/google',
                parentId: 100
            }
        ]
    },
    {
        id: 104,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'uil-share-alt',
        subItems: [
            {
                id: 105,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 104
            },
            {
                id: 106,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 104,
                subItems: [
                    {
                        id: 107,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 106,
                    },
                    {
                        id: 108,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 106,
                    }
                ]
            },
        ]
    }
];

