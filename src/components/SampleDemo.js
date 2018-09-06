import React, { Component } from 'react';
import {CountryService} from '../service/CountryService';
import {CarService} from '../service/CarService';
import {NodeService} from '../service/NodeService';
import {InputText} from 'primereact/components/inputtext/InputText';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {AutoComplete} from 'primereact/components/autocomplete/AutoComplete';
import {MultiSelect} from 'primereact/components/multiselect/MultiSelect';
import {Calendar} from 'primereact/components/calendar/Calendar';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {DataView, DataViewLayoutOptions} from 'primereact/components/dataview/DataView';
import {Tree} from 'primereact/components/tree/Tree';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Menu} from 'primereact/components/menu/Menu';
import {PanelMenu} from 'primereact/components/panelmenu/PanelMenu';
import {InputMask} from 'primereact/components/inputmask/InputMask';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {Password} from 'primereact/components/password/Password';
import {Spinner} from 'primereact/components/spinner/Spinner';
import {Slider} from 'primereact/components/slider/Slider';
import {ListBox} from 'primereact/components/listbox/ListBox';
import {RadioButton} from 'primereact/components/radiobutton/RadioButton';
import {PickList} from 'primereact/components/picklist/PickList';
import {OrderList} from 'primereact/components/orderlist/OrderList';
import {ToggleButton} from 'primereact/components/togglebutton/ToggleButton';
import {SelectButton} from 'primereact/components/selectbutton/SelectButton';
import {Button} from 'primereact/components/button/Button';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';
import {Panel} from 'primereact/components/panel/Panel';
import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';
import {Dialog} from 'primereact/components/dialog/Dialog';
import {Column} from 'primereact/components/column/Column';

export class SampleDemo extends Component {

    constructor() {
        super();
        this.state = {
            countriesData: [],
            carOptions: [],
            checkboxValue: [],
            dialogValue: false,
            dataTableValue: [],
            dataViewValue: [],
            treeData: [],
            picklistSourceCars: [],
            picklistTargetCars: [],
            orderlistCars: []
        };
        this.countryService = new CountryService();
        this.carService = new CarService();
        this.nodeService = new NodeService();
        this.onDropdownChange = this.onDropdownChange.bind(this);
        this.onSpinnerChange = this.onSpinnerChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onMultiSelectCarChange = this.onMultiSelectCarChange.bind(this);
        this.onToggleChange = this.onToggleChange.bind(this);
        this.onSelectButtonChange = this.onSelectButtonChange.bind(this);
        this.onListBoxChange = this.onListBoxChange.bind(this);
        this.orderListTemplate = this.orderListTemplate.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
        this.filterCountry = this.filterCountry.bind(this);
        this.onCountryValueChange = this.onCountryValueChange.bind(this);
    }

    componentDidMount(){
        this.countriesData = this.countryService.getCountries(this);
        this.carService.getCarsSmall().then(data => this.setState({dataTableValue: data}));
        this.carService.getCarsLarge().then(data => this.setState({dataViewValue: data}));
        this.nodeService.getFiles(this).then(files => this.setState({treeData: files}));
        this.carService.getCarsSmall().then(data => this.setState({picklistSourceCars: data}));
        this.carService.getCarsSmall().then(data => this.setState({orderlistCars: data}));
    }

    onCountryValueChange(e) {
        this.setState({ country: e.value, filteredCountries: null });
    }

    filterCountry(event) {
        let results = this.state.countriesData.filter((country) => {
            return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
        this.setState({ filteredCountries: results });
    }

    onDropdownChange(event){
        this.setState({dropdownCity: event.value})
    }

    onSpinnerChange(event){
        this.setState({spinnerValue: event.value})
    }

    onCheckboxChange(event){
        var selected = [...this.state.checkboxValue];
        if(event.checked)
            selected.push(event.value);
        else
            selected.splice(selected.indexOf(event.value), 1);

        this.setState({checkboxValue: selected});

    }

    onRadioChange(event){
        this.setState({radioValue: event.value})
    }

    onSliderChange(event){
        this.setState({sliderValue:event.value})
    }

    onMultiSelectCarChange(e) {
        this.setState({carOptions: e.value});
    }

    onToggleChange(event){
        this.setState({toggleButtonValue: event.value})
    }

    onSelectButtonChange(event){
        this.setState({types: event.value})
    }

    onListBoxChange(e) {
        this.setState({listboxCity: e.value});
    }

    orderListTemplate(car){
        if (!car) {
            return;
        }

        return (
            <div className="ui-helper-clearfix">
                <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} style={{display:'inline-block',margin:'2px 0 2px 2px',width:'50px'}}/>
                <div style={{fontSize:14,float:'right',margin:'20px 5px 0 0'}}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    itemTemplate(car,layout) {
        if(!car) {
            return;
        }

        let src = "assets/demo/images/car/" + car.brand + ".png";

        if(layout === 'list') {
            return (
                <div className="ui-g" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                    <div className="ui-g-12 ui-md-3">
                        <img src={src} alt={car.brand}/>
                    </div>
                    <div className="ui-g-12 ui-md-8 car-details">
                        <div className="ui-g">
                            <div className="ui-g-2 ui-sm-6">Vin:</div>
                            <div className="ui-g-10 ui-sm-6">{car.vin}</div>

                            <div className="ui-g-2 ui-sm-6">Year:</div>
                            <div className="ui-g-10 ui-sm-6">{car.year}</div>

                            <div className="ui-g-2 ui-sm-6">Brand:</div>
                            <div className="ui-g-10 ui-sm-6">{car.brand}</div>

                            <div className="ui-g-2 ui-sm-6">Color:</div>
                            <div className="ui-g-10 ui-sm-6">{car.color}</div>
                        </div>
                    </div>

                    <div className="ui-g-12 ui-md-1 search-icon" style={{marginTop:'40px'}}>
                        <Button icon="pi pi-search"></Button>
                    </div>
                </div>
            );
        }
        if(layout === 'grid') {
            return (
                <div style={{ padding: '.5em' }} className="ui-g-12 ui-md-3">
                    <Panel header={car.vin} style={{ textAlign: 'center' }}>
                        <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} />
                        <div className="car-detail">{car.year} - {car.color}</div>
                        <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                        <i className="pi pi-search" style={{ cursor: 'pointer' }}></i>
                    </Panel>
                </div>
            );
        }
    }

    render(){

        let carOptions=[
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        let cities = [
            {label: 'Select City', value: null},
            {label: 'New York', value: 'New York'},
            {label: 'Rome', value: 'Rome'},
            {label: 'London', value: 'London'},
            {label: 'Istanbul', value: 'Istanbul'},
            {label: 'Paris', value: 'Paris'},
        ];

        let listBoxCities = cities.slice(1, 6);

        let types = [
            {label: 'Apartment', value: 'Apartment'},
            {label: 'House', value: 'House'},
            {label: 'Studio', value: 'Studio'}
        ];

        let splitButtonItems = [
            {label: 'Update', icon: 'ui-icon-update'},
            {label: 'Delete', icon: 'ui-icon-close'},
            {label: 'Home', icon: 'ui-icon-home', url: 'http://www.primefaces.org/primereact'}
        ];

        let dialogFooter= <div className="ui-dialog-buttonpane ui-helper-clearfix">
                    <Button label="Login" icon="ui-icon-person" onClick={()=>this.setState({dialogValue:false})}/>
                </div>;

        let menuItems = [
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
                        icon: 'ui-icon-list',
                        items: [
                            {label: 'Delete', icon: 'ui-icon-delete'}
                        ]
                    }
                ]
            }
        ];

        let header =
            <div className="ui-g">
                <div className="ui-g-6 ui-md-8 filter-container">
                    <div style={{position:'relative'}}>
                        <InputText placeholder="Search by brand" onKeyUp={e=>this.dv.filter(e.target.value)}/>
                    </div>
                </div>
                <div className="ui-g-6 ui-md-4" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions onClick={(e)=>this.dv.changeLayout(e.originalEvent,e.layout)}/>
                </div>
            </div>;

        return <div className="ui-fluid">
            <div className="ui-g">
                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>Form Elements</h1>
                        <div className="ui-g form-group">
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="input">Input</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <span className="md-inputfield">
                                    <InputText id="input"/>
                                    <label>Username</label>
                                </span>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="textarea">Textarea</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <InputTextarea id="textarea" rows={3} cols={30} autoResize={true}></InputTextarea>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="calendar">Calendar</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Calendar id="calendar"></Calendar>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="autocomplete">AutoComplete</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <AutoComplete minLength={1} placeholder="Countries" id="autocomplete" field="name" suggestions={this.state.filteredCountries}
                                              completeMethod={this.filterCountry} value={this.state.country}
                                              onChange={this.onCountryValueChange}
                                />
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="dropdown">Dropdown</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false}/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Password id="password"/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="mask">Mask</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <InputMask id="mask" mask="99/99/9999" slotChar="dd/mm/yyyy" placeholder="Date"/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="spinner">Spinner</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Spinner value={this.state.spinnerValue} onChange={this.onSpinnerChange}/>
                            </div>

                            <div className="ui-g-12 ui-md-2">
                                Checkbox
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <div className="ui-g">
                                    <div className="ui-g-12 ui-md-4">
                                        <Checkbox inputId="cb1" value="Ultima" onChange={this.onCheckboxChange} checked={this.state.checkboxValue.indexOf('Ultima') > -1} />
                                        <label htmlFor="cb1">Ultima</label>
                                    </div>
                                    <div className="ui-g-12 ui-md-4">
                                        <Checkbox inputId="cb2" value="Serenity" onChange={this.onCheckboxChange} checked={this.state.checkboxValue.indexOf('Serenity') > -1} />
                                        <label htmlFor="cb2">Serenity</label>
                                    </div>
                                    <div className="ui-g-12 ui-md-4">
                                        <Checkbox inputId="cb3" value="Avalon" onChange={this.onCheckboxChange} checked={this.state.checkboxValue.indexOf('Avalon') > -1} />
                                        <label htmlFor="cb3">Avalon</label>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                RadioButton
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <div className="ui-g">
                                    <div className="ui-g-12 ui-md-4">
                                        <RadioButton inputId="rb1" value="Ultima" onChange={this.onRadioChange} checked={this.state.radioValue === "Ultima"} />
                                        <label htmlFor="rb1">Ultima</label>
                                    </div>
                                    <div className="ui-g-12 ui-md-4">
                                        <RadioButton inputId="rb2" value="Serenity" onChange={this.onRadioChange} checked={this.state.radioValue === "Serenity"} />
                                        <label htmlFor="rb2">Serenity</label>
                                    </div>
                                    <div className="ui-g-12 ui-md-4">
                                        <RadioButton inputId="rb3" value="Avalon" onChange={this.onRadioChange} checked={this.state.radioValue === "Avalon"} />
                                        <label htmlFor="rb3">Avalon</label>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="slider">Slider</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Slider id="slider" onChange={this.onSliderChange}/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                Button
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Button label="Edit" icon="ui-icon-edit"/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                SplitButton
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <SplitButton label="Save" icon="ui-icon-save" model={splitButtonItems}/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="multiselect">MultiSelect</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <MultiSelect id="multiselect" filter={true} value={this.state.carOptions} options={carOptions} onChange={this.onMultiSelectCarChange}/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                ToggleButton
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <ToggleButton checked={this.state.toggleButtonValue} onChange={this.onToggleChange}/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                SelectButton
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <SelectButton value={this.state.types} options={types} onChange={this.onSelectButtonChange}/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="listbox">Listbox</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <ListBox value={this.state.listboxCity} options={listBoxCities} onChange={this.onListBoxChange} filter={true}/>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                Dialog
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Button label="Login" icon="ui-icon-open-in-new" onClick={()=>this.setState({dialogValue:true})}/>
                            </div>
                        </div>

                        <Dialog header="Login" visible={this.state.dialogValue} footer={dialogFooter} onHide={()=>this.setState({dialogValue:false})}>
                            <div className="ui-g form-group" style={{marginBottom: 16}}>
                                <div className="ui-g-12">
                                    <span className="md-inputfield">
                                        <InputText/>
                                        <label>Name</label>
                                    </span>
                                </div>
                                <div className="ui-g-12">
                                    <span className="md-inputfield">
                                        <InputText type="password" />
                                        <label>Password</label>
                                    </span>
                                    </div>
                            </div>
                        </Dialog>
                    </div>

                    <div className="card card-w-title">
                        <h1>DataTable</h1>
                        <DataTable value={this.state.dataTableValue} selectionMode="single" header="DataTable" selection={this.state.dataTableSelectValue}
                                   onSelectionChange={(e) => this.setState({dataTableSelectValue: e.data})}>
                            <Column field="vin" header="Vin" sortable={true}/>
                            <Column field="year" header="Year" sortable={true}/>
                            <Column field="brand" header="Brand" sortable={true}/>
                            <Column field="color" header="Color" sortable={true}/>
                        </DataTable>
                    </div>
                </div>
                <div className="ui-g-12 ui-lg-6">
                    {/*Left Side */}
                    <div className="card card-w-title">
                        <h1>DataView</h1>
                        <DataView ref={(el) => { this.dv = el; }} value={this.state.dataViewValue} filterBy={"brand"} itemTemplate={this.itemTemplate.bind(this)}
                                  paginatorPosition={'both'} paginator={true} rows={10} header={header}/>
                    </div>
                </div>
                <div className="ui-g-12 ui-lg-6">
                    {/* Right Side */}
                    <div className="card card-w-title">
                        <h1>PickList</h1>
                        <PickList source={this.state.picklistSourceCars} target={this.state.picklistTargetCars} sourceHeader="Available" targetHeader="Selected"
                                  responsive={true} itemTemplate={(car)=><span>{car.brand}</span>}
                                  onChange={(e) => this.setState({picklistSourceCars: e.source, picklistTargetCars: e.target})}/>
                    </div>

                    <div className="card card-w-title">
                        <h1>OrderList</h1>
                        <OrderList value={this.state.orderlistCars} responsive={true} header="OrderList" listStyle={{height:250}}
                                   itemTemplate={this.orderListTemplate}
                                   onChange={(e) => this.setState({orderlistCars: e.value})}/>
                    </div>

                    <div className="card card-w-title">
                        <h1>Accordion Panel</h1>
                        <Accordion>
                            <AccordionTab header="Godfather I">
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                                His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                                Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                                of the family, kind and benevolent to those who give respect,
                                but given to ruthless violence whenever anything stands against the good of the family.
                            </AccordionTab>
                            <AccordionTab header="Godfather II">
                                Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                                Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                                the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                                Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                                Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                            </AccordionTab>
                            <AccordionTab header="Godfather III">
                                After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                                third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                                now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                            </AccordionTab>
                        </Accordion>
                    </div>

                    <div className="card card-w-title">
                        <h1>Panel</h1>
                        <Panel header="Godfather I" toggleable={true}>
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                        </Panel>
                    </div>

                    <div className="card card-w-title">
                        <h1>ProgressBar - Static Display</h1>
                        <ProgressBar value={50}/>
                    </div>

                    <div className="card card-w-title">
                        <h1>Tree</h1>
                        <Tree value={this.state.treeData}/>
                    </div>

                    <div className="card card-w-title">
                        <h1>Menu</h1>
                        <Menu model={menuItems}/>
                    </div>

                    <div className="card card-w-title">
                        <h1>PanelMenu</h1>
                        <PanelMenu model={panelMenuItems}/>
                    </div>

                    <div className="card card-w-title">
                        <h1>Heading 1</h1>

                        <h2>Heading 2</h2>

                        <h3>Heading 3</h3>

                        <h4>Heading 4</h4>
                    </div>
                </div>
            </div>
        </div>
    }
}