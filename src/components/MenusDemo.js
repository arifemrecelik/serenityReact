import React, { Component } from 'react';
import {BreadCrumb} from 'primereact/components/breadcrumb/BreadCrumb';
import {Steps} from 'primereact/components/steps/Steps';
import {Menubar} from 'primereact/components/menubar/Menubar';
import {Button} from 'primereact/components/button/Button';
import {Menu} from 'primereact/components/menu/Menu';
import {TieredMenu} from 'primereact/components/tieredmenu/TieredMenu';
import {ContextMenu} from 'primereact/components/contextmenu/ContextMenu';
import {SlideMenu} from 'primereact/components/slidemenu/SlideMenu';
import {PanelMenu} from 'primereact/components/panelmenu/PanelMenu';
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
import {MegaMenu} from 'primereact/components/megamenu/MegaMenu';

export class MenusDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {

        let breadcrumdItems = [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];

        let stepsItems = [
            {
                label: 'Personal'
            },
            {
                label: 'Seat'
            },
            {
                label: 'Payment'
            },
            {
                label: 'Confirmation'
            }
        ];

        let tieredItems = [
            {
                label: 'File',
                icon: 'ui-icon-folder',
                items: [{
                    label: 'New',
                    icon: 'ui-icon-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    {label: 'Undo', icon: 'ui-icon-undo'},
                    {label: 'Redo', icon: 'ui-icon-redo'}
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-refresh',
                        items: [
                            {label: 'Save', icon: 'ui-icon-save'},
                            {label: 'Update', icon: 'ui-icon-update'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-list',
                        items: [
                            {label: 'Delete', icon: 'ui-icon-delete'}
                        ]
                    }
                ]
            },
            {
                label: 'Quit', icon: 'ui-icon-power-settings-new'
            }
        ];

        let items = [
            {
                label: 'File',
                items: [
                    {label: 'New', icon: 'ui-icon-plus'},
                    {label: 'Open', icon: 'ui-icon-open-in-browser'}
                ]
            },
            {
                label: 'Edit',
                items: [
                    {label: 'Undo', icon: 'ui-icon-undo'},
                    {label: 'Redo', icon: 'ui-icon-redo'}
                ]
            }
        ];

        let panelMenuItems = [
            {
                label: 'File',
                icon: 'ui-icon-insert-drive-file',
                items: [{
                    label: 'New',
                    icon: 'ui-icon-add',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    {label: 'Undo', icon: 'ui-icon-undo'},
                    {label: 'Redo', icon: 'ui-icon-redo'}
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-edit',
                        items: [
                            {label: 'Save', icon: 'ui-icon-save'},
                            {label: 'Update', icon: 'ui-icon-update'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-phone-android',
                        items: [
                            {label: 'Delete', icon: 'ui-icon-delete'}
                        ]
                    }
                ]
            }
        ];

        let tabMenuItems = [
            {label: 'Stats', icon: 'ui-icon-insert-chart'},
            {label: 'Calendar', icon: 'ui-icon-date-range'},
            {label: 'Documentation', icon: 'ui-icon-book'},
            {label: 'Support', icon: 'ui-icon-help-outline'},
            {label: 'Social', icon: 'ui-icon-public'}
        ];

        let megaMenuItems = [
            {
                label: 'TV', icon: 'ui-icon-tv',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                        },
                        {
                            label: 'TV 2',
                            items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                        },
                        {
                            label: 'TV 4',
                            items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'ui-icon-alarm',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                        },
                        {
                            label: 'Sports 2',
                            items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                        },

                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                        },
                        {
                            label: 'Sports 4',
                            items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                        },
                        {
                            label: 'Sports 6',
                            items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'ui-icon-stars',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{label: 'Entertainment 1.1'},{label: 'Entertainment 1.2'}]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{label: 'Entertainment 2.1'},{label: 'Entertainment 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{label: 'Entertainment 3.1'},{label: 'Entertainment 3.2'}]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{label: 'Entertainment 4.1'},{label: 'Entertainment 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'ui-icon-phone-android',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{label: 'Technology 1.1'},{label: 'Technology 1.2'}]
                        },
                        {
                            label: 'Technology 2',
                            items: [{label: 'Technology 2.1'},{label: 'Technology 2.2'}]
                        },
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{label: 'Technology 3.1'},{label: 'Technology 3.2'}]
                        }
                    ]
                ]
            }
        ];

        return(
            <div className="ui-g ui-fluid">
                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>Breadcrumb</h1>
                        <BreadCrumb model={breadcrumdItems}/>
                    </div>
        
                    <div className="card card-w-title">
                        <h1>Steps</h1>
                        <Steps model={stepsItems}/>
                    </div>
                
                    <div className="card card-w-title">
                        <h1>MenuBar</h1>
                        <Menubar model={tieredItems}/>
                    </div>
                </div>

                <div className="ui-g-12 ui-lg-6">
                    {/* Left Colum */}
                    <div className="card card-w-title">
                        <h1>Plain Menu</h1>
                        <Menu model={items}/>
                        <Menu model={items} ref={(el)=>this.menu=el} popup={true} style={{width:250}}/>
                        <Button icon="ui-icon-open-in-new" label="Show" onClick={(event)=>this.menu.toggle(event)} style={{marginTop:'20px', width:'auto'}}/>
                    </div>

                    <div className="card card-w-title">
                        <h1>TieredMenu</h1>
                        <TieredMenu model={tieredItems} style={{width:'250px',marginBottom:'20px'}}/>
                    </div>
                </div>

                <div className="ui-g-12 ui-lg-6">
                    {/* Right Colum */}
                    <div className="card card-w-title">
                        <h1 style={{marginTop:'40px'}}>ContextMenu</h1>
                        Right click!
                        <ContextMenu global={true} model={tieredItems} style={{width:'12.5em'}}/>
                    </div>
        
                    <div className="card">
                        <h1>SlideMenu</h1>
                        <SlideMenu model={items} style={{width:'260px'}} menuWidth={260}/>
                    </div>

                    <div className="card">
                        <h1>PanelMenu</h1>
                        <PanelMenu model={panelMenuItems}/>
                    </div>
                </div>

                <div className="ui-g-12 ui-g-6">
                    <div className="card">
                        <h1>TabMenu</h1>
                        <TabMenu model={tabMenuItems}/>
                    </div>
                </div>
    
                <div className="ui-g-12 ui-g-6">
                    <div className="card">
                        <h1>MegaMenu - Horizontal</h1>
                        <MegaMenu model={megaMenuItems}/>

                        <h1>MegaMenu - Vertical</h1>
                        <MegaMenu model={megaMenuItems} orientation="vertical" style={{width:'200px'}}/>
                    </div>
                </div>
            </div>
        )
    }
}