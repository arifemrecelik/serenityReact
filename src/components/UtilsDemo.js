import React, { Component } from 'react';
import './Utils.css';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';

export class UtilsDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="ui-g">
            <div className="ui-g-12">
                <div className="card">
                    <h1>Card</h1>
                    <p>Card is a section to group content and layout provides a built-in css for it. Apply .card style class to your container to use it. If the
                        card has a title defined with h1 tag, add card-w-title to adjust paddings.</p>
                    <pre>
&lt;div className="card"&gt;<br/>
                        &emsp;&emsp;Content here<br/>
                        &lt;/div&gt;<br/>
<br/>
                        &lt;div className="card card-w-title"&gt;<br/>
                        &emsp;&emsp;&lt;h1&gt;Card with Title&lt;h1&gt;<br/>
                        &emsp;&emsp;Content here<br/>
                        &lt;/div&gt;
</pre>

                    <div className="card">
                        Content
                    </div>

                    <div className="card card-w-title">
                        <h1>Card with Title</h1>
                        Content
                    </div>

                    <h1>Input Animations</h1>
                    <p>Label of an input can be animated on focus by wrapping both the input and label in an element with md-inputfield style class.</p>
                    <br />

                    <span className="md-inputfield">
                <InputText />
                <label>Name</label>
            </span>

                    <pre>
&lt;span className="md-inputfield"&gt;<br/>
                        &emsp;&emsp;&lt;InputText/&gt;<br/>
                        &emsp;&emsp;&lt;label>Name&lt;/label&gt;<br/>
                        &lt;/span>
</pre>

                    <h1>Shadows</h1>
                    <p>5 levels of shadows are provided varying from ui-shadow-1 to ui-shadow-5 to define the level of depth.</p>

                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-2">
                            <div className="shadow-box"></div>
                        </div>
                        <div className="ui-g-12 ui-md-2">
                            <div className="shadow-box ui-shadow-1"></div>
                        </div>
                        <div className="ui-g-12 ui-md-2">
                            <div className="shadow-box ui-shadow-2"></div>
                        </div>
                        <div className="ui-g-12 ui-md-2">
                            <div className="shadow-box ui-shadow-3"></div>
                        </div>
                        <div className="ui-g-12 ui-md-2">
                            <div className="shadow-box ui-shadow-4"></div>
                        </div>
                        <div className="ui-g-12 ui-md-2">
                            <div className="shadow-box ui-shadow-5"></div>
                        </div>
                    </div>
                    <pre>
&lt;div className="ui-g"&gt;<br/>
&emsp;&lt;div className="ui-g-12 ui-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="ui-g-12 ui-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-1"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="ui-g-12 ui-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-2"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="ui-g-12 ui-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-3"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="ui-g-12 ui-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-4"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="ui-g-12 ui-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-5"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&lt;/div&gt;
</pre>

                    <h1>Icons</h1>
                    <p><a href="https://design.google.com/icons/">All material icons</a> have been ported
                        using <i>ui-icon-</i> convention. To use an icon within a component
                        such as button below, define it using the icon attribute prefixed by <i>ui-icon-</i>.</p>

                    <div style={{textAlign:'center', marginBottom:'16px'}}>
                        <Button label="ui-icon-check" icon="ui-icon-check"></Button>
                    </div>

                    <pre>
&lt;Button label="ui-icon-check" icon="ui-icon-check"&gt;&lt;/Button&gt;
</pre>

                    <div className="ui-g icon-grid">
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-3d-rotation"></i>3d-rotation</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-ac-unit"></i>ac-unit</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-access-alarm"></i>access-alarm</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-access-alarms"></i>access-alarms</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-access-time"></i>access-time</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-accessibility"></i>accessibility</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-accessible"></i>accessible</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-account-balance"></i>account-balance</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-account-balance-wallet"></i>account-balance-wallet</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-account-box"></i>account-box</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-account-circle"></i>account-circle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add"></i>add</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-a-photo"></i>add-a-photo</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-alarm"></i>add-alarm</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-alert"></i>add-alert</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-box"></i>add-box</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-circle"></i>add-circle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-circle-outline"></i>add-circle-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-location"></i>add-location</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-shopping-cart"></i>add-shopping-cart</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-to-photos"></i>add-to-photos</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-add-to-queue"></i>add-to-queue</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-adjust"></i>adjust</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airline-seat-flat"></i>airline-seat-flat</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airline-seat-flat-angled"></i>airline-seat-flat-angled</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airline-seat-individual-suite"></i>airline-seat-individual-suite</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airline-seat-legroom-extra"></i>airline-seat-legroom-extra</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airline-seat-legroom-normal"></i>airline-seat-legroom-normal</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airline-seat-legroom-reduced"></i>airline-seat-legroom-reduced</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airline-seat-recline-extra"></i>airline-seat-recline-extra</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airline-seat-recline-normal"></i>airline-seat-recline-normal</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airplanemode-active"></i>airplanemode-active</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airplanemode-inactive"></i>airplanemode-inactive</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airplay"></i>airplay</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-airport-shuttle"></i>airport-shuttle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-alarm"></i>alarm</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-alarm-add"></i>alarm-add</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-alarm-off"></i>alarm-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-alarm-on"></i>alarm-on</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-album"></i>album</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-all-inclusive"></i>all-inclusive</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-all-out"></i>all-out</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-android"></i>android</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-announcement"></i>announcement</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-apps"></i>apps</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-archive"></i>archive</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-arrow-back"></i>arrow-back</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-arrow-downward"></i>arrow-downward</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-arrow-drop-down"></i>arrow-drop-down</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-arrow-drop-down-circle"></i>arrow-drop-down-circle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-arrow-drop-up"></i>arrow-drop-up</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-arrow-forward"></i>arrow-forward</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-arrow-upward"></i>arrow-upward</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-art-track"></i>art-track</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-aspect-ratio"></i>aspect-ratio</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assessment"></i>assessment</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assignment"></i>assignment</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assignment-ind"></i>assignment-ind</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assignment-late"></i>assignment-late</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assignment-return"></i>assignment-return</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assignment-returned"></i>assignment-returned</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assignment-turned-in"></i>assignment-turned-in</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assistant"></i>assistant</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-assistant-photo"></i>assistant-photo</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-attach-file"></i>attach-file</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-attach-money"></i>attach-money</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-attachment"></i>attachment</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-audiotrack"></i>audiotrack</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-autorenew"></i>autorenew</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-av-timer"></i>av-timer</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-backspace"></i>backspace</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-backup"></i>backup</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-battery-alert"></i>battery-alert</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-battery-charging-full"></i>battery-charging-full</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-battery-full"></i>battery-full</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-battery-std"></i>battery-std</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-battery-unknown"></i>battery-unknown</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-beach-access"></i>beach-access</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-beenhere"></i>beenhere</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-block"></i>block</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bluetooth"></i>bluetooth</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bluetooth-audio"></i>bluetooth-audio</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bluetooth-connected"></i>bluetooth-connected</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bluetooth-disabled"></i>bluetooth-disabled</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bluetooth-searching"></i>bluetooth-searching</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-blur-circular"></i>blur-circular</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-blur-linear"></i>blur-linear</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-blur-off"></i>blur-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-blur-on"></i>blur-on</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-book"></i>book</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bookmark"></i>bookmark</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bookmark-border"></i>bookmark-border</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-all"></i>border-all</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-bottom"></i>border-bottom</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-clear"></i>border-clear</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-color"></i>border-color</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-horizontal"></i>border-horizontal</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-inner"></i>border-inner</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-left"></i>border-left</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-outer"></i>border-outer</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-right"></i>border-right</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-style"></i>border-style</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-top"></i>border-top</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-border-vertical"></i>border-vertical</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-branding-watermark"></i>branding-watermark</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-1"></i>brightness-1</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-2"></i>brightness-2</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-3"></i>brightness-3</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-4"></i>brightness-4</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-5"></i>brightness-5</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-6"></i>brightness-6</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-7"></i>brightness-7</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-auto"></i>brightness-auto</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-high"></i>brightness-high</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-low"></i>brightness-low</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brightness-medium"></i>brightness-medium</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-broken-image"></i>broken-image</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-brush"></i>brush</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bubble-chart"></i>bubble-chart</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-bug-report"></i>bug-report</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-build"></i>build</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-burst-mode"></i>burst-mode</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-business"></i>business</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-business-center"></i>business-center</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cached"></i>cached</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cake"></i>cake</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call"></i>call</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call-end"></i>call-end</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call-made"></i>call-made</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call-merge"></i>call-merge</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call-missed"></i>call-missed</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call-missed-outgoing"></i>call-missed-outgoing</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call-received"></i>call-received</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call-split"></i>call-split</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-call-to-action"></i>call-to-action</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-camera"></i>camera</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-camera-alt"></i>camera-alt</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-camera-enhance"></i>camera-enhance</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-camera-front"></i>camera-front</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-camera-rear"></i>camera-rear</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-camera-roll"></i>camera-roll</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cancel"></i>cancel</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-card-giftcard"></i>card-giftcard</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-card-membership"></i>card-membership</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-card-travel"></i>card-travel</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-casino"></i>casino</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cast"></i>cast</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cast-connected"></i>cast-connected</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-center-focus-strong"></i>center-focus-strong</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-center-focus-weak"></i>center-focus-weak</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-change-history"></i>change-history</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-chat"></i>chat</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-chat-bubble"></i>chat-bubble</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-chat-bubble-outline"></i>chat-bubble-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-check"></i>check</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-check-box"></i>check-box</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-check-box-outline-blank"></i>check-box-outline-blank</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-check-circle"></i>check-circle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-chevron-left"></i>chevron-left</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-chevron-right"></i>chevron-right</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-child-care"></i>child-care</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-child-friendly"></i>child-friendly</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-chrome-reader-mode"></i>chrome-reader-mode</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-class"></i>class</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-clear"></i>clear</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-clear-all"></i>clear-all</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-close"></i>close</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-closed-caption"></i>closed-caption</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cloud"></i>cloud</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cloud-circle"></i>cloud-circle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cloud-done"></i>cloud-done</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cloud-download"></i>cloud-download</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cloud-off"></i>cloud-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cloud-queue"></i>cloud-queue</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-cloud-upload"></i>cloud-upload</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-code"></i>code</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-collections"></i>collections</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-collections-bookmark"></i>collections-bookmark</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-color-lens"></i>color-lens</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-colorize"></i>colorize</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-comment"></i>comment</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-compare"></i>compare</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-compare-arrows"></i>compare-arrows</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-computer"></i>computer</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-confirmation-number"></i>confirmation-number</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-contact-mail"></i>contact-mail</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-contact-phone"></i>contact-phone</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-contacts"></i>contacts</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-content-copy"></i>content-copy</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-content-cut"></i>content-cut</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-content-paste"></i>content-paste</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-control-point"></i>control-point</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-control-point-duplicate"></i>control-point-duplicate</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-copyright"></i>copyright</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-create"></i>create</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-create-new-folder"></i>create-new-folder</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-credit-card"></i>credit-card</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop"></i>crop</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-16-9"></i>crop-16-9</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-3-2"></i>crop-3-2</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-5-4"></i>crop-5-4</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-7-5"></i>crop-7-5</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-din"></i>crop-din</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-free"></i>crop-free</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-landscape"></i>crop-landscape</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-original"></i>crop-original</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-portrait"></i>crop-portrait</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-rotate"></i>crop-rotate</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-crop-square"></i>crop-square</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-dashboard"></i>dashboard</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-data-usage"></i>data-usage</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-date-range"></i>date-range</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-dehaze"></i>dehaze</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-delete"></i>delete</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-delete-forever"></i>delete-forever</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-delete-sweep"></i>delete-sweep</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-description"></i>description</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-desktop-mac"></i>desktop-mac</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-desktop-windows"></i>desktop-windows</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-details"></i>details</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-developer-board"></i>developer-board</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-developer-mode"></i>developer-mode</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-device-hub"></i>device-hub</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-devices"></i>devices</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-devices-other"></i>devices-other</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-dialer-sip"></i>dialer-sip</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-dialpad"></i>dialpad</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions"></i>directions</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-bike"></i>directions-bike</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-boat"></i>directions-boat</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-bus"></i>directions-bus</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-car"></i>directions-car</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-railway"></i>directions-railway</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-run"></i>directions-run</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-subway"></i>directions-subway</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-transit"></i>directions-transit</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-directions-walk"></i>directions-walk</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-disc-full"></i>disc-full</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-dns"></i>dns</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-do-not-disturb"></i>do-not-disturb</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-do-not-disturb-alt"></i>do-not-disturb-alt</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-do-not-disturb-off"></i>do-not-disturb-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-do-not-disturb-on"></i>do-not-disturb-on</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-dock"></i>dock</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-domain"></i>domain</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-done"></i>done</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-done-all"></i>done-all</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-donut-large"></i>donut-large</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-donut-small"></i>donut-small</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-drafts"></i>drafts</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-drag-handle"></i>drag-handle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-drive-eta"></i>drive-eta</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-dvr"></i>dvr</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-edit"></i>edit</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-edit-location"></i>edit-location</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-eject"></i>eject</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-email"></i>email</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-enhanced-encryption"></i>enhanced-encryption</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-equalizer"></i>equalizer</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-error"></i>error</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-error-outline"></i>error-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-euro-symbol"></i>euro-symbol</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-ev-station"></i>ev-station</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-event"></i>event</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-event-available"></i>event-available</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-event-busy"></i>event-busy</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-event-note"></i>event-note</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-event-seat"></i>event-seat</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-exit-to-app"></i>exit-to-app</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-expand-less"></i>expand-less</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-expand-more"></i>expand-more</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-explicit"></i>explicit</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-explore"></i>explore</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-exposure"></i>exposure</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-exposure-neg-1"></i>exposure-neg-1</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-exposure-neg-2"></i>exposure-neg-2</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-exposure-plus-1"></i>exposure-plus-1</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-exposure-plus-2"></i>exposure-plus-2</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-exposure-zero"></i>exposure-zero</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-extension"></i>extension</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-face"></i>face</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fast-forward"></i>fast-forward</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fast-rewind"></i>fast-rewind</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-favorite"></i>favorite</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-favorite-border"></i>favorite-border</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-featured-play-list"></i>featured-play-list</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-featured-video"></i>featured-video</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-feedback"></i>feedback</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fiber-dvr"></i>fiber-dvr</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fiber-manual-record"></i>fiber-manual-record</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fiber-new"></i>fiber-new</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fiber-pin"></i>fiber-pin</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fiber-smart-record"></i>fiber-smart-record</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-file-download"></i>file-download</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-file-upload"></i>file-upload</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter"></i>filter</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-1"></i>filter-1</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-2"></i>filter-2</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-3"></i>filter-3</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-4"></i>filter-4</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-5"></i>filter-5</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-6"></i>filter-6</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-7"></i>filter-7</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-8"></i>filter-8</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-9"></i>filter-9</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-9-plus"></i>filter-9-plus</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-b-and-w"></i>filter-b-and-w</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-center-focus"></i>filter-center-focus</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-drama"></i>filter-drama</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-frames"></i>filter-frames</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-hdr"></i>filter-hdr</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-list"></i>filter-list</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-none"></i>filter-none</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-tilt-shift"></i>filter-tilt-shift</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-filter-vintage"></i>filter-vintage</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-find-in-page"></i>find-in-page</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-find-replace"></i>find-replace</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fingerprint"></i>fingerprint</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-first-page"></i>first-page</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fitness-center"></i>fitness-center</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flag"></i>flag</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flare"></i>flare</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flash-auto"></i>flash-auto</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flash-off"></i>flash-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flash-on"></i>flash-on</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flight"></i>flight</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flight-land"></i>flight-land</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flight-takeoff"></i>flight-takeoff</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flip"></i>flip</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flip-to-back"></i>flip-to-back</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-flip-to-front"></i>flip-to-front</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-folder"></i>folder</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-folder-open"></i>folder-open</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-folder-shared"></i>folder-shared</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-folder-special"></i>folder-special</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-font-download"></i>font-download</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-align-center"></i>format-align-center</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-align-justify"></i>format-align-justify</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-align-left"></i>format-align-left</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-align-right"></i>format-align-right</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-bold"></i>format-bold</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-clear"></i>format-clear</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-color-fill"></i>format-color-fill</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-color-reset"></i>format-color-reset</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-color-text"></i>format-color-text</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-indent-decrease"></i>format-indent-decrease</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-indent-increase"></i>format-indent-increase</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-italic"></i>format-italic</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-line-spacing"></i>format-line-spacing</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-list-bulleted"></i>format-list-bulleted</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-list-numbered"></i>format-list-numbered</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-paint"></i>format-paint</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-quote"></i>format-quote</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-shapes"></i>format-shapes</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-size"></i>format-size</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-strikethrough"></i>format-strikethrough</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-textdirection-l-to-r"></i>format-textdirection-l-to-r</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-textdirection-r-to-l"></i>format-textdirection-r-to-l</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-format-underlined"></i>format-underlined</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-forum"></i>forum</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-forward"></i>forward</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-forward-10"></i>forward-10</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-forward-30"></i>forward-30</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-forward-5"></i>forward-5</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-free-breakfast"></i>free-breakfast</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fullscreen"></i>fullscreen</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-fullscreen-exit"></i>fullscreen-exit</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-functions"></i>functions</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-g-translate"></i>g-translate</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-gamepad"></i>gamepad</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-games"></i>games</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-gavel"></i>gavel</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-gesture"></i>gesture</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-get-app"></i>get-app</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-gif"></i>gif</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-golf-course"></i>golf-course</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-gps-fixed"></i>gps-fixed</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-gps-not-fixed"></i>gps-not-fixed</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-gps-off"></i>gps-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-grade"></i>grade</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-gradient"></i>gradient</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-grain"></i>grain</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-graphic-eq"></i>graphic-eq</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-grid-off"></i>grid-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-grid-on"></i>grid-on</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-group"></i>group</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-group-add"></i>group-add</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-group-work"></i>group-work</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hd"></i>hd</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hdr-off"></i>hdr-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hdr-on"></i>hdr-on</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hdr-strong"></i>hdr-strong</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hdr-weak"></i>hdr-weak</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-headset"></i>headset</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-headset-mic"></i>headset-mic</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-healing"></i>healing</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hearing"></i>hearing</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-help"></i>help</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-help-outline"></i>help-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-high-quality"></i>high-quality</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-highlight"></i>highlight</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-highlight-off"></i>highlight-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-history"></i>history</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-home"></i>home</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hot-tub"></i>hot-tub</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hotel"></i>hotel</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hourglass-empty"></i>hourglass-empty</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-hourglass-full"></i>hourglass-full</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-http"></i>http</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-https"></i>https</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-image"></i>image</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-image-aspect-ratio"></i>image-aspect-ratio</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-import-contacts"></i>import-contacts</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-import-export"></i>import-export</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-important-devices"></i>important-devices</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-inbox"></i>inbox</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-indeterminate-check-box"></i>indeterminate-check-box</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-info"></i>info</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-info-outline"></i>info-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-input"></i>input</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-insert-chart"></i>insert-chart</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-insert-comment"></i>insert-comment</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-insert-drive-file"></i>insert-drive-file</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-insert-emoticon"></i>insert-emoticon</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-insert-invitation"></i>insert-invitation</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-insert-link"></i>insert-link</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-insert-photo"></i>insert-photo</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-invert-colors"></i>invert-colors</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-invert-colors-off"></i>invert-colors-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-iso"></i>iso</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard"></i>keyboard</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-arrow-down"></i>keyboard-arrow-down</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-arrow-left"></i>keyboard-arrow-left</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-arrow-right"></i>keyboard-arrow-right</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-arrow-up"></i>keyboard-arrow-up</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-backspace"></i>keyboard-backspace</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-capslock"></i>keyboard-capslock</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-hide"></i>keyboard-hide</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-return"></i>keyboard-return</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-tab"></i>keyboard-tab</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-keyboard-voice"></i>keyboard-voice</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-kitchen"></i>kitchen</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-label"></i>label</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-label-outline"></i>label-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-landscape"></i>landscape</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-language"></i>language</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-laptop"></i>laptop</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-laptop-chromebook"></i>laptop-chromebook</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-laptop-mac"></i>laptop-mac</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-laptop-windows"></i>laptop-windows</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-last-page"></i>last-page</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-launch"></i>launch</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-layers"></i>layers</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-layers-clear"></i>layers-clear</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-leak-add"></i>leak-add</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-leak-remove"></i>leak-remove</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-lens"></i>lens</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-library-add"></i>library-add</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-library-books"></i>library-books</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-library-music"></i>library-music</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-lightbulb-outline"></i>lightbulb-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-line-style"></i>line-style</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-line-weight"></i>line-weight</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-linear-scale"></i>linear-scale</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-link"></i>link</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-linked-camera"></i>linked-camera</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-list"></i>list</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-live-help"></i>live-help</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-live-tv"></i>live-tv</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-activity"></i>local-activity</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-airport"></i>local-airport</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-atm"></i>local-atm</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-bar"></i>local-bar</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-cafe"></i>local-cafe</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-car-wash"></i>local-car-wash</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-convenience-store"></i>local-convenience-store</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-dining"></i>local-dining</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-drink"></i>local-drink</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-florist"></i>local-florist</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-gas-station"></i>local-gas-station</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-grocery-store"></i>local-grocery-store</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-hospital"></i>local-hospital</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-hotel"></i>local-hotel</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-laundry-service"></i>local-laundry-service</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-library"></i>local-library</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-mall"></i>local-mall</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-movies"></i>local-movies</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-offer"></i>local-offer</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-parking"></i>local-parking</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-pharmacy"></i>local-pharmacy</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-phone"></i>local-phone</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-pizza"></i>local-pizza</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-play"></i>local-play</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-post-office"></i>local-post-office</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-printshop"></i>local-printshop</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-see"></i>local-see</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-shipping"></i>local-shipping</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-local-taxi"></i>local-taxi</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-location-city"></i>location-city</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-location-disabled"></i>location-disabled</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-location-off"></i>location-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-location-on"></i>location-on</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-location-searching"></i>location-searching</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-lock"></i>lock</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-lock-open"></i>lock-open</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-lock-outline"></i>lock-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-looks"></i>looks</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-looks-3"></i>looks-3</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-looks-4"></i>looks-4</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-looks-5"></i>looks-5</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-looks-6"></i>looks-6</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-looks-one"></i>looks-one</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-looks-two"></i>looks-two</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-loop"></i>loop</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-loupe"></i>loupe</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-low-priority"></i>low-priority</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-loyalty"></i>loyalty</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mail"></i>mail</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mail-outline"></i>mail-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-map"></i>map</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-markunread"></i>markunread</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-markunread-mailbox"></i>markunread-mailbox</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-memory"></i>memory</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-menu"></i>menu</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-merge-type"></i>merge-type</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-message"></i>message</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mic"></i>mic</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mic-none"></i>mic-none</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mic-off"></i>mic-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mms"></i>mms</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mode-comment"></i>mode-comment</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mode-edit"></i>mode-edit</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-monetization-on"></i>monetization-on</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-money-off"></i>money-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-monochrome-photos"></i>monochrome-photos</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mood"></i>mood</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mood-bad"></i>mood-bad</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-more"></i>more</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-more-horiz"></i>more-horiz</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-more-vert"></i>more-vert</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-motorcycle"></i>motorcycle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-mouse"></i>mouse</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-move-to-inbox"></i>move-to-inbox</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-movie"></i>movie</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-movie-creation"></i>movie-creation</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-movie-filter"></i>movie-filter</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-multiline-chart"></i>multiline-chart</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-music-note"></i>music-note</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-music-video"></i>music-video</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-my-location"></i>my-location</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-nature"></i>nature</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-nature-people"></i>nature-people</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-navigate-before"></i>navigate-before</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-navigate-next"></i>navigate-next</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-navigation"></i>navigation</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-near-me"></i>near-me</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-network-cell"></i>network-cell</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-network-check"></i>network-check</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-network-locked"></i>network-locked</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-network-wifi"></i>network-wifi</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-new-releases"></i>new-releases</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-next-week"></i>next-week</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-nfc"></i>nfc</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-no-encryption"></i>no-encryption</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-no-sim"></i>no-sim</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-not-interested"></i>not-interested</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-note"></i>note</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-note-add"></i>note-add</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-notifications"></i>notifications</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-notifications-active"></i>notifications-active</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-notifications-none"></i>notifications-none</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-notifications-off"></i>notifications-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-notifications-paused"></i>notifications-paused</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-offline-pin"></i>offline-pin</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-ondemand-video"></i>ondemand-video</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-opacity"></i>opacity</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-open-in-browser"></i>open-in-browser</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-open-in-new"></i>open-in-new</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-open-with"></i>open-with</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pages"></i>pages</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pageview"></i>pageview</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-palette"></i>palette</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pan-tool"></i>pan-tool</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-panorama"></i>panorama</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-panorama-fish-eye"></i>panorama-fish-eye</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-panorama-horizontal"></i>panorama-horizontal</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-panorama-vertical"></i>panorama-vertical</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-panorama-wide-angle"></i>panorama-wide-angle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-party-mode"></i>party-mode</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pause"></i>pause</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pause-circle-filled"></i>pause-circle-filled</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pause-circle-outline"></i>pause-circle-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-payment"></i>payment</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-people"></i>people</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-people-outline"></i>people-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-perm-camera-mic"></i>perm-camera-mic</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-perm-contact-calendar"></i>perm-contact-calendar</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-perm-data-setting"></i>perm-data-setting</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-perm-device-information"></i>perm-device-information</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-perm-identity"></i>perm-identity</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-perm-media"></i>perm-media</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-perm-phone-msg"></i>perm-phone-msg</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-perm-scan-wifi"></i>perm-scan-wifi</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-person"></i>person</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-person-add"></i>person-add</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-person-outline"></i>person-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-person-pin"></i>person-pin</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-person-pin-circle"></i>person-pin-circle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-personal-video"></i>personal-video</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pets"></i>pets</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone"></i>phone</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone-android"></i>phone-android</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone-bluetooth-speaker"></i>phone-bluetooth-speaker</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone-forwarded"></i>phone-forwarded</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone-in-talk"></i>phone-in-talk</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone-iphone"></i>phone-iphone</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone-locked"></i>phone-locked</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone-missed"></i>phone-missed</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phone-paused"></i>phone-paused</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phonelink"></i>phonelink</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phonelink-erase"></i>phonelink-erase</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phonelink-lock"></i>phonelink-lock</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phonelink-off"></i>phonelink-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phonelink-ring"></i>phonelink-ring</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-phonelink-setup"></i>phonelink-setup</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-photo"></i>photo</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-photo-album"></i>photo-album</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-photo-camera"></i>photo-camera</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-photo-filter"></i>photo-filter</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-photo-library"></i>photo-library</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-photo-size-select-actual"></i>photo-size-select-actual</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-photo-size-select-large"></i>photo-size-select-large</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-photo-size-select-small"></i>photo-size-select-small</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-picture-as-pdf"></i>picture-as-pdf</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-picture-in-picture"></i>picture-in-picture</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-picture-in-picture-alt"></i>picture-in-picture-alt</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pie-chart"></i>pie-chart</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pie-chart-outlined"></i>pie-chart-outlined</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pin-drop"></i>pin-drop</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-place"></i>place</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-play-arrow"></i>play-arrow</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-play-circle-filled"></i>play-circle-filled</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-play-circle-outline"></i>play-circle-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-play-for-work"></i>play-for-work</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-playlist-add"></i>playlist-add</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-playlist-add-check"></i>playlist-add-check</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-playlist-play"></i>playlist-play</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-plus-one"></i>plus-one</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-poll"></i>poll</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-polymer"></i>polymer</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pool"></i>pool</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-portable-wifi-off"></i>portable-wifi-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-portrait"></i>portrait</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-power"></i>power</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-power-input"></i>power-input</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-power-settings-new"></i>power-settings-new</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-pregnant-woman"></i>pregnant-woman</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-present-to-all"></i>present-to-all</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-print"></i>print</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-priority-high"></i>priority-high</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-public"></i>public</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-publish"></i>publish</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-query-builder"></i>query-builder</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-question-answer"></i>question-answer</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-queue"></i>queue</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-queue-music"></i>queue-music</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-queue-play-next"></i>queue-play-next</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-radio"></i>radio</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-radio-button-checked"></i>radio-button-checked</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-radio-button-unchecked"></i>radio-button-unchecked</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-rate-review"></i>rate-review</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-receipt"></i>receipt</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-recent-actors"></i>recent-actors</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-record-voice-over"></i>record-voice-over</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-redeem"></i>redeem</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-redo"></i>redo</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-refresh"></i>refresh</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-remove"></i>remove</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-remove-circle"></i>remove-circle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-remove-circle-outline"></i>remove-circle-outline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-remove-from-queue"></i>remove-from-queue</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-remove-red-eye"></i>remove-red-eye</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-remove-shopping-cart"></i>remove-shopping-cart</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-reorder"></i>reorder</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-repeat"></i>repeat</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-repeat-one"></i>repeat-one</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-replay"></i>replay</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-replay-10"></i>replay-10</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-replay-30"></i>replay-30</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-replay-5"></i>replay-5</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-reply"></i>reply</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-reply-all"></i>reply-all</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-report"></i>report</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-report-problem"></i>report-problem</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-restaurant"></i>restaurant</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-restaurant-menu"></i>restaurant-menu</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-restore"></i>restore</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-restore-page"></i>restore-page</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-ring-volume"></i>ring-volume</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-room"></i>room</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-room-service"></i>room-service</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-rotate-90-degrees-ccw"></i>rotate-90-degrees-ccw</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-rotate-left"></i>rotate-left</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-rotate-right"></i>rotate-right</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-rounded-corner"></i>rounded-corner</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-router"></i>router</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-rowing"></i>rowing</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-rss-feed"></i>rss-feed</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-rv-hookup"></i>rv-hookup</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-satellite"></i>satellite</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-save"></i>save</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-scanner"></i>scanner</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-schedule"></i>schedule</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-school"></i>school</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-screen-lock-landscape"></i>screen-lock-landscape</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-screen-lock-portrait"></i>screen-lock-portrait</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-screen-lock-rotation"></i>screen-lock-rotation</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-screen-rotation"></i>screen-rotation</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-screen-share"></i>screen-share</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sd-card"></i>sd-card</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sd-storage"></i>sd-storage</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-search"></i>search</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-security"></i>security</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-select-all"></i>select-all</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-send"></i>send</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sentiment-dissatisfied"></i>sentiment-dissatisfied</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sentiment-neutral"></i>sentiment-neutral</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sentiment-satisfied"></i>sentiment-satisfied</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sentiment-very-dissatisfied"></i>sentiment-very-dissatisfied</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sentiment-very-satisfied"></i>sentiment-very-satisfied</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings"></i>settings</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-applications"></i>settings-applications</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-backup-restore"></i>settings-backup-restore</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-bluetooth"></i>settings-bluetooth</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-brightness"></i>settings-brightness</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-cell"></i>settings-cell</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-ethernet"></i>settings-ethernet</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-input-antenna"></i>settings-input-antenna</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-input-component"></i>settings-input-component</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-input-composite"></i>settings-input-composite</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-input-hdmi"></i>settings-input-hdmi</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-input-svideo"></i>settings-input-svideo</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-overscan"></i>settings-overscan</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-phone"></i>settings-phone</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-power"></i>settings-power</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-remote"></i>settings-remote</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-system-daydream"></i>settings-system-daydream</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-settings-voice"></i>settings-voice</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-share"></i>share</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-shop"></i>shop</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-shop-two"></i>shop-two</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-shopping-basket"></i>shopping-basket</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-shopping-cart"></i>shopping-cart</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-short-text"></i>short-text</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-show-chart"></i>show-chart</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-shuffle"></i>shuffle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-signal-cellular-4-bar"></i>signal-cellular-4-bar</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-signal-cellular-connected-no-internet-4-bar"></i>signal-cellular-connected-no-internet-4-bar</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-signal-cellular-no-sim"></i>signal-cellular-no-sim</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-signal-cellular-null"></i>signal-cellular-null</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-signal-cellular-off"></i>signal-cellular-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-signal-wifi-4-bar"></i>signal-wifi-4-bar</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-signal-wifi-4-bar-lock"></i>signal-wifi-4-bar-lock</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-signal-wifi-off"></i>signal-wifi-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sim-card"></i>sim-card</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sim-card-alert"></i>sim-card-alert</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-skip-next"></i>skip-next</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-skip-previous"></i>skip-previous</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-slideshow"></i>slideshow</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-slow-motion-video"></i>slow-motion-video</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-smartphone"></i>smartphone</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-smoke-free"></i>smoke-free</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-smoking-rooms"></i>smoking-rooms</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sms"></i>sms</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sms-failed"></i>sms-failed</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-snooze"></i>snooze</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sort"></i>sort</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sort-by-alpha"></i>sort-by-alpha</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-spa"></i>spa</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-space-bar"></i>space-bar</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-speaker"></i>speaker</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-speaker-group"></i>speaker-group</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-speaker-notes"></i>speaker-notes</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-speaker-notes-off"></i>speaker-notes-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-speaker-phone"></i>speaker-phone</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-spellcheck"></i>spellcheck</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-star"></i>star</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-star-border"></i>star-border</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-star-half"></i>star-half</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-stars"></i>stars</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-stay-current-landscape"></i>stay-current-landscape</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-stay-current-portrait"></i>stay-current-portrait</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-stay-primary-landscape"></i>stay-primary-landscape</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-stay-primary-portrait"></i>stay-primary-portrait</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-stop"></i>stop</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-stop-screen-share"></i>stop-screen-share</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-storage"></i>storage</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-store"></i>store</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-store-mall-directory"></i>store-mall-directory</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-straighten"></i>straighten</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-streetview"></i>streetview</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-strikethrough-s"></i>strikethrough-s</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-style"></i>style</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-subdirectory-arrow-left"></i>subdirectory-arrow-left</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-subdirectory-arrow-right"></i>subdirectory-arrow-right</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-subject"></i>subject</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-subscriptions"></i>subscriptions</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-subtitles"></i>subtitles</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-subway"></i>subway</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-supervisor-account"></i>supervisor-account</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-surround-sound"></i>surround-sound</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-swap-calls"></i>swap-calls</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-swap-horiz"></i>swap-horiz</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-swap-vert"></i>swap-vert</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-swap-vertical-circle"></i>swap-vertical-circle</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-switch-camera"></i>switch-camera</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-switch-video"></i>switch-video</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sync"></i>sync</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sync-disabled"></i>sync-disabled</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-sync-problem"></i>sync-problem</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-system-update"></i>system-update</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-system-update-alt"></i>system-update-alt</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tab"></i>tab</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tab-unselected"></i>tab-unselected</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tablet"></i>tablet</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tablet-android"></i>tablet-android</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tablet-mac"></i>tablet-mac</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tag-faces"></i>tag-faces</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tap-and-play"></i>tap-and-play</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-terrain"></i>terrain</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-text-fields"></i>text-fields</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-text-format"></i>text-format</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-textsms"></i>textsms</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-texture"></i>texture</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-theaters"></i>theaters</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-thumb-down"></i>thumb-down</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-thumb-up"></i>thumb-up</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-thumbs-up-down"></i>thumbs-up-down</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-time-to-leave"></i>time-to-leave</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-timelapse"></i>timelapse</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-timeline"></i>timeline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-timer"></i>timer</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-timer-10"></i>timer-10</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-timer-3"></i>timer-3</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-timer-off"></i>timer-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-title"></i>title</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-toc"></i>toc</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-today"></i>today</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-toll"></i>toll</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tonality"></i>tonality</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-touch-app"></i>touch-app</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-toys"></i>toys</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-track-changes"></i>track-changes</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-traffic"></i>traffic</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-train"></i>train</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tram"></i>tram</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-transfer-within-a-station"></i>transfer-within-a-station</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-transform"></i>transform</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-translate"></i>translate</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-trending-down"></i>trending-down</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-trending-flat"></i>trending-flat</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-trending-up"></i>trending-up</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tune"></i>tune</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-turned-in"></i>turned-in</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-turned-in-not"></i>turned-in-not</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-tv"></i>tv</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-unarchive"></i>unarchive</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-undo"></i>undo</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-unfold-less"></i>unfold-less</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-unfold-more"></i>unfold-more</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-update"></i>update</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-usb"></i>usb</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-verified-user"></i>verified-user</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-vertical-align-bottom"></i>vertical-align-bottom</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-vertical-align-center"></i>vertical-align-center</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-vertical-align-top"></i>vertical-align-top</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-vibration"></i>vibration</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-video-call"></i>video-call</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-video-label"></i>video-label</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-video-library"></i>video-library</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-videocam"></i>videocam</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-videocam-off"></i>videocam-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-videogame-asset"></i>videogame-asset</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-agenda"></i>view-agenda</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-array"></i>view-array</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-carousel"></i>view-carousel</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-column"></i>view-column</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-comfy"></i>view-comfy</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-compact"></i>view-compact</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-day"></i>view-day</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-headline"></i>view-headline</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-list"></i>view-list</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-module"></i>view-module</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-quilt"></i>view-quilt</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-stream"></i>view-stream</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-view-week"></i>view-week</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-vignette"></i>vignette</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-visibility"></i>visibility</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-visibility-off"></i>visibility-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-voice-chat"></i>voice-chat</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-voicemail"></i>voicemail</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-volume-down"></i>volume-down</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-volume-mute"></i>volume-mute</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-volume-off"></i>volume-off</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-volume-up"></i>volume-up</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-vpn-key"></i>vpn-key</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-vpn-lock"></i>vpn-lock</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wallpaper"></i>wallpaper</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-warning"></i>warning</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-watch"></i>watch</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-watch-later"></i>watch-later</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wb-auto"></i>wb-auto</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wb-cloudy"></i>wb-cloudy</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wb-incandescent"></i>wb-incandescent</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wb-iridescent"></i>wb-iridescent</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wb-sunny"></i>wb-sunny</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wc"></i>wc</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-web"></i>web</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-web-asset"></i>web-asset</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-weekend"></i>weekend</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-whatshot"></i>whatshot</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-widgets"></i>widgets</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wifi"></i>wifi</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wifi-lock"></i>wifi-lock</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wifi-tethering"></i>wifi-tethering</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-work"></i>work</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-wrap-text"></i>wrap-text</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-youtube-searched-for"></i>youtube-searched-for</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-zoom-in"></i>zoom-in</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-zoom-out"></i>zoom-out</div>
                        <div className="ui-g-12 ui-md-2"><i className="fa ui-icon-zoom-out-map"></i>zoom-out-map</div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}