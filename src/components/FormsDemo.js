import React, { Component } from 'react';
import {CountryService} from '../service/CountryService';
import {InputText} from 'primereact/components/inputtext/InputText';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {AutoComplete} from 'primereact/components/autocomplete/AutoComplete';
import {MultiSelect} from 'primereact/components/multiselect/MultiSelect';
import {Calendar} from 'primereact/components/calendar/Calendar';
import {Chips} from 'primereact/components/chips/Chips';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {RadioButton} from 'primereact/components/radiobutton/RadioButton';
import {InputSwitch} from 'primereact/components/inputswitch/InputSwitch';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {Password} from 'primereact/components/password/Password';
import {Spinner} from 'primereact/components/spinner/Spinner';
import {Slider} from 'primereact/components/slider/Slider';
import {ListBox} from 'primereact/components/listbox/ListBox';
import {Rating} from 'primereact/components/rating/Rating';
import {ColorPicker} from 'primereact/components/colorpicker/ColorPicker';
import {Editor} from 'primereact/components/editor/Editor';
import {ToggleButton} from 'primereact/components/togglebutton/ToggleButton';
import {SelectButton} from 'primereact/components/selectbutton/SelectButton';
import {Button} from 'primereact/components/button/Button';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';

export class FormsDemo extends Component {

    constructor() {
        super();
        this.state = {
            countriesData: [],
            carOptions: [],
            checkboxValue: [],
            sliderValue: [20,80],
            color: null
        };

        this.countryService = new CountryService();
        this.onMultiSelectCarChange = this.onMultiSelectCarChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onInputSwitchChange = this.onInputSwitchChange.bind(this);
        this.onDropdownChange = this.onDropdownChange.bind(this);
        this.onSpinnerChange = this.onSpinnerChange.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
        this.onListBoxChange = this.onListBoxChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
        this.onColorPickerChange = this.onColorPickerChange.bind(this);
        this.onInputGroupCheck = this.onInputGroupCheck.bind(this);
        this.onToggleChange = this.onToggleChange.bind(this);
        this.onSelectButtonChange = this.onSelectButtonChange.bind(this);
        this.filterCountry = this.filterCountry.bind(this);
        this.onCountryValueChange = this.onCountryValueChange.bind(this);
        this.filterBrands = this.filterBrands.bind(this);
        this.onBrandValueChange = this.onBrandValueChange.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    componentDidMount(){
        this.countriesData = this.countryService.getCountries(this);
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
    }

    onCountryValueChange(e) {
        this.setState({ country: e.value, filteredCountries: null });
    }

    filterCountry(event) {
        setTimeout(() => {
            let results = this.state.countriesData.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            this.setState({ filteredCountries: results });
        }, 500);
    }

    onBrandValueChange(e) {
        this.setState({ brand: e.value, filteredBrands: null });
    }

    filterBrands(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.brands];
            }
            else {
                results = this.brands.filter((brand) => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredBrands: results });
        }, 250);
    }

    itemTemplate(brand) {
        if (!brand) {
            return;
        }

        return (<div className="ui-helper-clearfix">
            <img alt={brand} src={`assets/demo/images/car/${brand}.png`} style={{ width: '48px', display: 'inline-block', margin: '5px 0 2px 5px' }} />
            <div style={{ fontSize: '18px', float: 'right', margin: '15px 10px 0 0' }}>{brand}</div>
        </div>)
    }

    onMultiSelectCarChange(e) {
        this.setState({carOptions: e.value});
    }

    onRadioChange(event){
        this.setState({radioValue: event.value})
    }

    onCheckboxChange(event){
        var selected = [...this.state.checkboxValue];
        if(event.checked)
            selected.push(event.value);
        else
            selected.splice(selected.indexOf(event.value), 1);

        this.setState({checkboxValue: selected});

    }

    onInputSwitchChange(event){
        this.setState({inputSwitchValue: event.value})
    }

    onDropdownChange(event){
        this.setState({dropdownCity: event.value})
    }

    onSpinnerChange(event){
        this.setState({spinnerValue: event.value})
    }

    onSliderChange(event){
        this.setState({sliderValue: event.value})
    }

    onListBoxChange(event){
        this.setState({listBoxValue: event.value})
    }

    onRatingChange(event){
        this.setState({ratingValue: event.value})
    }

    onColorPickerChange(event){
        this.setState({color: event.value})
    }

    onInputGroupCheck(event){
        this.setState({inputGroupValue: event.checked})
    }

    onToggleChange(event){
        this.setState({toggleButtonValue: event.value})
    }

    onSelectButtonChange(event){
        this.setState({types: event.value})
    }

    render() {

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

        return <div className="ui-g ui-fluid">
            
            <div className="ui-g-12">
                <div className="card card-w-title">
                    <h1>DENEME</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12">
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Uyruk
                                </div>
                                <div className="ui-g-9">
                                    <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false}/>
                                </div>
                            </div>
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Kimlik No
                                </div>
                                <div className="ui-g-9">
                                    <span className="md-inputfield">
                                        <InputText/>
                                        <label>Kimlik no giriniz</label>
                                    </span>
                                </div>
                            </div>
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Ad
                                </div>
                                <div className="ui-g-9">
                                    <span className="md-inputfield">
                                        <InputText/>
                                        <label>Ad giriniz</label>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="ui-g-12">
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Soyad
                                </div>
                                <div className="ui-g-9">
                                    <span className="md-inputfield">
                                        <InputText/>
                                        <label>Soyad giriniz</label>
                                    </span>
                                </div>
                            </div>
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Doğum Tarihi
                                </div>
                                <div className="ui-g-9">
                                    <Calendar id="showIcon" placeholder="Button" showIcon={true} value={this.state.date5} onChange={(e) => this.setState({date5: e.value})}/>
                                </div>
                            </div>
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Cinsiyet
                                </div>
                                <div className="ui-g-9">
                                    <div className="ui-g-12 ui-md-6">
                                        <RadioButton inputId="rb1" value="Ultima" onChange={this.onRadioChange} checked={this.state.radioValue === "Ultima"} />
                                        <label htmlFor="rb1">Erkek</label>
                                    </div>
                                    <div className="ui-g-12 ui-md-6">
                                        <RadioButton inputId="rb2" value="Serenity" onChange={this.onRadioChange} checked={this.state.radioValue === "Serenity"} />
                                        <label htmlFor="rb2">Kadın</label>
                                    </div>                                    
                                </div>
                            </div>
                        </div>

                        <div className="ui-g-12">
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Telefon No
                                </div>
                                <div className="ui-g-9">
                                    <span className="md-inputfield">
                                        <InputText/>
                                        <label>Telefon no giriniz</label>
                                    </span>
                                </div>
                            </div>
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    E-posta
                                </div>
                                <div className="ui-g-9">
                                    <span className="md-inputfield">
                                        <InputText/>
                                        <label>E-posta giriniz</label>
                                    </span>
                                </div>
                            </div>
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    İl
                                </div>
                                <div className="ui-g-9">
                                    <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ui-g-12">
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    İlçe
                                </div>
                                <div className="ui-g-9">
                                    <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false}/>
                                </div>
                            </div>
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Ehliyet
                                </div>
                                <div className="ui-g-9">
                                    <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false}/>
                                </div>
                            </div>
                            <div className="ui-g-4">
                                <div className="ui-g-3">
                                    Eğitim Düzeyi
                                </div>
                                <div className="ui-g-9">
                                    <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="ui-g-12 ui-lg-6">
                {/* Left Side */}
                <div className="card card-w-title">
                    <h1>InputText</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield">
                                <InputText/>
                                <label>Name</label>
                            </span>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield">
                                <InputText/>
                                <label>Email</label>
                            </span>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield">
                                <InputText/>
                                <label>Phone</label>
                            </span>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText placeholder="Disabled" disabled={true}/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield">
                                <InputText placeholder="Invalid" className="ui-state-error"/>
                                <div className="ui-message ui-messages-error ui-corner-all">
                                    This field is required
                                </div>
                            </span>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText/>
                        </div>
                    </div>

                    <h1>Filled InputText</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield md-inputfield-fill">
                                <InputText/>
                                <label>Name</label>
                            </span>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield md-inputfield-fill">
                                <InputText/>
                                <label>Email</label>
                            </span>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield md-inputfield-fill">
                                <InputText/>
                                <label>Phone</label>
                            </span>
                        </div>
                    </div>

                    <h1>TextBox</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield md-inputfield-box">
                                <InputText/>
                                <label>Name</label>
                            </span>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield md-inputfield-box">
                                <InputText/>
                                <label>Email</label>
                            </span>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <span className="md-inputfield md-inputfield-box">
                                <InputText/>
                                <label>Phone</label>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="card card-w-title">
                    <h1>TextArea</h1>
                    <InputTextarea rows={3} cols={30} placeholder="Your Message" autoResize={true}/>
                </div>

                <div className="card card-w-title">
                    <h1>AutoComplete</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12">
                            <label htmlFor="acSimple">Simple</label>
                        </div>
                        <div className="ui-g-12" style={{marginBottom:'10px'}}>
                            <AutoComplete minLength={1} placeholder="Countries" id="acSimple" size={30} field="name" suggestions={this.state.filteredCountries}
                                          completeMethod={this.filterCountry} value={this.state.country} dropdown={true}
                                          onChange={this.onCountryValueChange}
                            />
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="acAdvanced">Advanced</label>
                        </div>
                        <div className="ui-g-12">
                            <AutoComplete minLength={1} placeholder="Hint: type 'v' or 'f'" id="acAdvanced" size={30} dropdown={true} multiple={true}
                                          suggestions={this.state.filteredBrands} completeMethod={this.filterBrands} value={this.state.brand}
                                          onChange={this.onBrandValueChange} itemTemplate={this.itemTemplate} />
                        </div>
                    </div>
                </div>

                <div className="card card-w-title">
                    <h1>MultiSelect</h1>
                    <MultiSelect value={this.state.carOptions} filter={true} options={carOptions} onChange={this.onMultiSelectCarChange}/>
                </div>

                <div className="card card-w-title">
                    <h1>Calendar</h1>
                    <Calendar value={this.state.date1} onChange={(e) => this.setState({date1: e.value})} inline={true}/>

                    <div className="ui-g form-group-m" style={{marginTop:'20px'}}>
                        <div className="ui-g-12">
                            <Calendar id="popup" placeholder="Popup" value={this.state.date2} onChange={(e) => this.setState({date2: e.value})}/>
                        </div>
                        <div className="ui-g-12">
                            <Calendar id="datetime" placeholder="DateTime" showTime={true} dateFormat="mm/dd/yy" value={this.state.date3} onChange={(e) => this.setState({date3: e.value})}/>
                        </div>
                        <div className="ui-g-12">
                            <Calendar id="time" placeholder="Time" timeOnly={true} showTime={true} value={this.state.date4} onChange={(e) => this.setState({date4: e.value})}/>
                        </div>
                        <div className="ui-g-12">
                            <Calendar id="showIcon" placeholder="Button" showIcon={true} value={this.state.date5} onChange={(e) => this.setState({date5: e.value})}/>
                        </div>
                    </div>
                </div>

                <div className="card card-w-title">
                    <h1>Chips</h1>
                    <Chips/>
                </div>
            </div>
            <div className="ui-g-12 ui-lg-6">
                <div className="card card-w-title">
                    <h1>Checkboxes</h1>
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
        
                <div className="card card-w-title">
                    <h1>RadioButtons</h1>
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
        
                <div className="card card-w-title">
                    <h1>InputSwitch</h1>
                    <InputSwitch checked={this.state.inputSwitchValue} onChange={this.onInputSwitchChange}/>
                </div>
        
                <div className="card card-w-title">
                    <h1>Dropdown</h1>
                    <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false}/>
                </div>
        
                <div className="card card-w-title">
                    <h1>Password</h1>
                    <Password/>
                </div>
        
                <div className="card card-w-title">
                    <h1>Spinner</h1>
                    <Spinner value={this.state.spinnerValue} onChange={this.onSpinnerChange}/>
                </div>
        
                <div className="card card-w-title">
                    <h1>Slider</h1>
                    <Slider range={true} value={this.state.sliderValue} onChange={this.onSliderChange}/>
                </div>
        
                <div className="card card-w-title">
                    <h1>ListBox</h1>
                    <ListBox options={listBoxCities} value={this.state.listBoxValue} onChange={this.onListBoxChange} filter={true} />
                </div>

                <div className="card card-w-title">
                    <h1>Rating</h1>
                    <Rating value={this.state.ratingValue} onChange={this.onRatingChange}/>
                </div>
        
                <div className="card card-w-title">
                    <h1>ColorPicker</h1>
                    <ColorPicker inline={true} state={this.state.color} onChange={this.onColorPickerChange}/>
                </div>
            </div>

            <div className="ui-g-12">
                <div className="card card-w-title">
                    <h1>Input Groups</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12 ui-md-6">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><i className="material-icons">account_circle</i></span>
                                <span className="md-inputfield">
                                    <InputText/>
                                    <label>Username</label>
                                </span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-6">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><i className="material-icons">credit_card</i></span>
                                <span className="ui-inputgroup-addon"><i className="material-icons">card_travel</i></span>
                                <span className="md-inputfield">
                                    <InputText/>
                                    <label>Price</label>
                                </span>
                                <span className="ui-inputgroup-addon">$</span>
                                <span className="ui-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-6">
                            <div className="ui-inputgroup">
                                <span className="md-inputfield">
                                    <InputText/>
                                    <label>Keyword</label>
                                </span>
                                <Button icon="ui-icon-search"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-6">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><Checkbox checked={this.state.inputGroupValue} onChange={this.onInputGroupCheck}/></span>
                                <span className="md-inputfield">
                                    <InputText/>
                                    <label>Confirm</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ui-g-12">
                <div className="card card-w-title">
                    <h1>Editor</h1>
                    <Editor style={{height:'320px'}}/>
                </div>
            </div>

            <div className="ui-g-12 ui-g-nopad">
                <div className="ui-g-12 ui-lg-6" style={{paddingTop:0}}>
                    <div className="card card-w-title">
                        <h1>Buttons</h1>

                        <div className="ui-g">
                            <div className="ui-g-12">ToggleButton</div>
                            <div className="ui-g-12">
                                <ToggleButton checked={this.state.toggleButtonValue} onChange={this.onToggleChange}/>
                            </div>
                    
                            <div className="ui-g-12">SelectButton</div>
                            <div className="ui-g-12">
                                <SelectButton value={this.state.types} options={types} onChange={this.onSelectButtonChange}/>
                            </div>
                    
                            <div className="ui-g-12">Button</div>
                            <div className="ui-g-12">
                                <Button label="Bookmark"/>
                            </div>

                            <div className="ui-g-12">Left Icon</div>
                            <div className="ui-g-12">
                                <Button label="Clear" icon="ui-icon-clear"/>
                            </div>
                    
                            <div className="ui-g-12">Right Icon</div>
                            <div className="ui-g-12">
                                <Button label="Clear" icon="ui-icon-clear" iconPos="right"/>
                            </div>

                            <div className="ui-g-12">Icon Only</div>
                            <div className="ui-g-12">
                                <Button icon="ui-icon-add"/>
                            </div>

                            <div className="ui-g-12">Link</div>
                            <div className="ui-g-12"><a href="http://www.primefaces.org" >Homepage</a></div>

                            <div className="ui-g-12">SplitButton</div>
                            <div className="ui-g-12">
                                <SplitButton label="Save" icon="ui-icon-save" model={splitButtonItems} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui-g-12 ui-lg-6" style={{paddingTop:0}}>
                    <div className="card card-w-title">
                        <h1>Colored Buttons</h1>
                        <p>Raised and Flat buttons with various color alternatives.</p>
                        <div className="ui-g">
                            <div className="ui-g-12 ui-md-6" style={{textAlign:'center'}}>
                                <Button label="Primary Button" style={{marginBottom:10}}/>
                                <Button label="Inline Button" style={{marginBottom:10, width:'auto'}}/>
                                <Button label="Blue-Grey Button" style={{marginBottom:10}} className="blue-grey-btn"/>
                                <Button label="Cyan Button" style={{marginBottom:10}} className="cyan-btn"/>
                                <Button label="Amber Button" style={{marginBottom:10}} className="amber-btn"/>
                                <Button label="Teal Button" style={{marginBottom:10}} className="teal-btn"/>
                                <Button label="Red Button" style={{marginBottom:10}} className="red-btn"/>
                                <Button label="Orange Button" style={{marginBottom:10}} className="orange-btn"/>
                                <Button label="Green Button" style={{marginBottom:10}} className="green-btn"/>
                                <Button label="Deep-Orange Button" style={{marginBottom:10}} className="deep-orange-btn"/>
                                <Button label="Purple Button" style={{marginBottom:10}} className="purple-btn"/>
                                <Button label="Indigo Button" style={{marginBottom:10}} className="indigo-btn"/>
                                <Button label="Pink Button" style={{marginBottom:10}} className="pink-btn"/>
                            </div>

                            <div className="ui-g-12 ui-md-6" style={{textAlign:'center'}}>
                                <Button label="Primary Button" style={{marginBottom:10}} className="flat-btn"/>
                                <Button label="Inline Button" style={{marginBottom:10, width:'auto'}} className="flat-btn"/>
                                <Button label="Blue-Grey Button" style={{marginBottom:10}} className="blue-grey-btn flat-btn"/>
                                <Button label="Cyan Button" style={{marginBottom:10}} className="cyan-btn flat-btn"/>
                                <Button label="Amber Button" style={{marginBottom:10}} className="amber-btn flat-btn"/>
                                <Button label="Teal Button" style={{marginBottom:10}} className="teal-btn flat-btn"/>
                                <Button label="Red Button" style={{marginBottom:10}} className="red-btn flat-btn"/>
                                <Button label="Orange Button" style={{marginBottom:10}} className="orange-btn flat-btn"/>
                                <Button label="Green Button" style={{marginBottom:10}} className="green-btn flat-btn"/>
                                <Button label="Deep-Orange Button" style={{marginBottom:10}} className="deep-orange-btn flat-btn"/>
                                <Button label="Purple Button" style={{marginBottom:10}} className="purple-btn flat-btn"/>
                                <Button label="Indigo Button" style={{marginBottom:10}} className="indigo-btn flat-btn"/>
                                <Button label="Pink Button" style={{marginBottom:10}} className="pink-btn flat-btn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>;
    }
}