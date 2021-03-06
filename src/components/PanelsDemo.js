import React, { Component } from 'react';
import {Accordion, AccordionTab} from 'primereact/components/accordion/Accordion';
import {Fieldset} from 'primereact/components/fieldset/Fieldset';
import {Panel} from 'primereact/components/panel/Panel';
import {TabView, TabPanel} from 'primereact/components/tabview/TabView';
import {Toolbar} from 'primereact/components/toolbar/Toolbar';
import {Button} from 'primereact/components/button/Button';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';

export class PanelsDemo extends Component {

    render(){
        let items = [
            {label: 'Angular.io', icon: 'ui-icon-link', url: 'https://facebook.github.io/react/'},
            {label: 'Theming', icon: 'ui-icon-brush', url: 'https://primefaces.org/primereact/#/theming'}
        ];

        return(
            <div className="ui-g">
                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>AccordionPanel</h1>
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
                                    After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third 
                                    and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone (Al Pacino), 
                                    now divorced from his wife Kay (Diane Keaton), has nearly succeeded in keeping his promise that his family would one day be "completely legitimate." 
                                    A philanthropist devoted to public service, Michael is in the news as the recipient of a special award from the Pope for his good works, a controversial move given his checkered past. 
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>Panel</h1>
                        <Panel header="Godfather I" toggleable={true}>
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                        </Panel>
                    </div>
                </div>

                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>TabView</h1>
                        <TabView>
                            <TabPanel header="Godfather I" leftIcon="ui-icon-check">
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </TabPanel>
                            <TabPanel header="Godfather II" leftIcon="ui-icon-edit">
                                Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                            </TabPanel>
                            <TabPanel header="Godfather III" leftIcon="ui-icon-refresh">
                                After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
                
                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>Toolbar</h1>
                        <Toolbar>
                            <div className="ui-toolbar-group-left">
                                <Button label="New" icon="ui-icon-plus" className="green-btn"/>
                                <Button label="Update" icon="ui-icon-update" className="orange-btn"/>

                                <i className="material-icons" style={{verticalAlign:'middle', marginRight: '.25em'}}>dehaze</i>
                                
                                <SplitButton label="Save" icon="pi pi-check" model={items}/>

                                
                            </div>

                            <div className="ui-toolbar-group-right">
                            <Button icon="ui-icon-save" className="green-btn"/>
                            <Button icon="ui-icon-delete" className="orange-btn"/>
                            <Button icon="ui-icon-print" className="pink-btn"/>
                            </div>
                        </Toolbar>
                    </div>
                </div>

                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>Fieldset</h1>
                        <Fieldset legend="Toggleable" toggleable={true}>
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.
                        </Fieldset>
                    </div>
                </div>
            </div>
        )
    }
}