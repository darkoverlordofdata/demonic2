import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class FreeverbGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this.style.display = "inline-flex";
        
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) url("https://mainline.i3s.unice.fr/fausteditorweb/dist/PedalEditor/Front-End/img/background/psyche12.jpeg") repeat scroll 0% 0% / 100% 100% padding-box border-box;border:1px dashed rgb(73, 73, 73);bottom:305.781px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;container:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:397.5px;hyphens:manual;inset:57.7188px 1066.67px 305.781px 212px;isolation:auto;left:212px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;overlay:none;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:1066.67px;rotate:none;rx:auto;ry:auto;scale:none;speak:normal;stroke:none;top:57.7188px;transform:matrix(1, 0, 0, 1, 0, 0);transition:all 0s ease 0s;translate:none;visibility:visible;widows:2;width:225.328px;x:0px;y:0px;zoom:1;};</style>
<div id="Freeverb" class="resize-drag my-pedal target-style-container gradiant-target" style="border: 1px dashed rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: 100% 100%; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; position: relative; top: 0px; left: 0px; width: 225.335px; height: 397.5px; transform: translate(0px, 0px); background-image: url(&quot;./img/background/psyche12.jpeg&quot;);" data-x="0" data-y="0"><div id="Freeverb" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: none; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 33px; left: 1px; width: 156px; height: 357.5px;"></div><div id="Freeverb" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: none; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 69px; left: 5px; width: 148px; height: 317.5px;"></div><div id="Freeverb" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: none; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; width: 72px; position: absolute; top: 105px; left: 9px; height: 277.5px;"></div><div id="Freeverb" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: none; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; width: 64px; position: absolute; top: 263.5px; left: 85px; height: 119px;"></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 141px; left: 23.5px; transform: translate(-8.31775px, -82.9571px);" data-x="-8.3177490234375" data-y="-82.95706176757812"><webaudio-knob id="/Freeverb/Effects/Reverb/Knobs/Damp" src="./img/knobs/knob2.png" sprites="100" min="0" max="1" step="0.025" width="80" height="80" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/knob2.png&quot;); background-size: 80px 8080px; outline: none; width: 80px; height: 80px; background-position: 0px -3760px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1018.09px; top: -36.5px;">0.48</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 221.5px; left: 13px; transform: translate(57.078px, -39.5491px);" data-x="57.077972412109375" data-y="-39.54913330078125"><webaudio-knob id="/Freeverb/Effects/Reverb/Knobs/RoomSize" src="./img/knobs/knob2.png" sprites="100" min="0" max="1" step="0.025" width="80" height="80" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/knob2.png&quot;); background-size: 80px 8080px; outline: none; width: 80px; height: 80px; background-position: 0px -5600px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1018.09px; top: -36.5px;">0.70</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 302px; left: 25px; transform: translate(101.536px, -245.532px);" data-x="101.53634643554688" data-y="-245.53204345703125"><webaudio-knob id="/Freeverb/Effects/Reverb/Knobs/Wet" src="./img/knobs/knob2.png" sprites="100" min="0" max="1" step="0.025" width="80" height="80" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/knob2.png&quot;); background-size: 80px 8080px; outline: none; width: 80px; height: 80px; background-position: 0px -6960px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1018.09px; top: -36.5px;">0.88</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 299.5px; left: 89px; transform: translate(-27.5049px, 17.9698px);" data-x="-27.50494384765625" data-y="17.9698486328125"><webaudio-switch id="/Freeverb/Effects/Reverb/Switches/Enable" src="./img/switches/switch_1.png" sprites="100" width="98" height="40" style="touch-action: none;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-switch{
  display:inline-block;
  margin:0;
  padding:0;
  font-family: sans-serif;
  font-size: 11px;
  cursor:pointer;
}
.webaudio-switch-body{
  display:inline-block;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-switch-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/switches/switch_1.png&quot;); background-size: 100% 200%; width: 98px; height: 40px; outline: none; background-position: 0px -100%;"><div class="webaudioctrl-tooltip" style="transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden;"></div></div>
</webaudio-switch></div><label for="Freeverb" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 220px; left: 2px; top: 3.71875px; border: none; font-size: 32px; font-family: Fruktur;" class="drag" contenteditable="false" font="Fruktur">Freeverb</label><label for="Effects" style="display: none; touch-action: none; position: absolute; z-index: 1; width: 152px; left: 6px; top: 39.7188px; border: none;" class="drag" contenteditable="false">Effects</label><label for="Reverb" style="display: none; touch-action: none; position: absolute; z-index: 1; width: 144px; left: 10px; top: 75.7188px; border: none;" class="drag" contenteditable="false">Reverb</label><label for="Knobs" style="display: none; touch-action: none; position: absolute; z-index: 1; width: 68px; left: 14px; top: 111.719px; border: none;" class="drag" contenteditable="false">Knobs</label><label for="Switches" style="display: none; touch-action: none; position: absolute; z-index: 1; width: 60px; left: 90px; top: 270.219px; border: none;" class="drag" contenteditable="false">Switches</label><label for="Damp" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 60px; left: 26.5px; top: 190.219px; transform: translate(-3.7218px, -41.2365px); border: none; font-family: Fruktur; font-size: 20px; color: rgb(49, 239, 11);" class="drag" contenteditable="false" data-x="-3.7218017578125" data-y="-41.2364501953125" font="Fruktur">Damp</label><label for="RoomSize" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 100px; left: 16px; top: 270.719px; transform: translate(47.4781px, 3.84644px); border: none; font-family: Fruktur; font-size: 20px; color: rgb(43, 3, 3);" class="drag" contenteditable="false" data-x="47.4781494140625" data-y="3.846435546875" font="Fruktur">Room Size</label><label for="Wet" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 50px; left: 28px; top: 351.219px; transform: translate(122.585px, -200.706px); border: none; font-size: 20px; font-family: Fruktur;" class="drag" contenteditable="false" data-x="122.58493041992188" data-y="-200.7059326171875" font="Fruktur">Wet</label><label for="Enable" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 64px; left: 92px; top: 351.219px; transform: translate(-10.5206px, 14.022px); border: none; font-family: Fruktur;" class="drag" contenteditable="false" data-x="-10.52056884765625" data-y="14.02203369140625" font="Fruktur">Enable</label></div>`;
  
        this.isOn;
            this.state = new Object();
            this.setKnobs();
            this.setSliders();
            this.setSwitches();
            //this.setSwitchListener();
            this.setInactive();
            // Change #pedal to .my-pedal for use the new builder
            this._root.querySelector('.my-pedal').style.transform = 'none';
            //this._root.querySelector("#test").style.fontFamily = window.getComputedStyle(this._root.querySelector("#test")).getPropertyValue('font-family');
  
            // Compute base URI of this main.html file. This is needed in order
            // to fix all relative paths in CSS, as they are relative to
            // the main document, not the plugin's main.html
            this.basePath = getBaseURL();
            console.log("basePath = " + this.basePath)
  
            // Fix relative path in WebAudio Controls elements
            this.fixRelativeImagePathsInCSS();
  
            // optionnal : set image background using a relative URI (relative
            // to this file)
        //this.setImageBackground("/img/BigMuffBackground.png");
          
        // Monitor param changes in order to update the gui
        window.requestAnimationFrame(this.handleAnimationFrame);
      
              }
          
              fixRelativeImagePathsInCSS() {
                 
      // change webaudiocontrols relative paths for spritesheets to absolute
          let webaudioControls = this._root.querySelectorAll(
              'webaudio-knob, webaudio-slider, webaudio-switch, img'
          );
          webaudioControls.forEach((e) => {
              let currentImagePath = e.getAttribute('src');
              if (currentImagePath !== undefined) {
                  //console.log("Got wc src as " + e.getAttribute("src"));
                  let imagePath = e.getAttribute('src');
                  e.setAttribute('src', this.basePath + '/' + imagePath);
                  //console.log("After fix : wc src as " + e.getAttribute("src"));
              }
          });
  
          let sliders = this._root.querySelectorAll('webaudio-slider');
          sliders.forEach((e) => {
              let currentImagePath = e.getAttribute('knobsrc');
              if (currentImagePath !== undefined) {
                  let imagePath = e.getAttribute('knobsrc');
                  e.setAttribute('knobsrc', this.basePath + '/' + imagePath);
              }
          });

          // BMT Get all fonts
          // Need to get the attr font
          let usedFonts = "";
          let fonts = this._root.querySelectorAll('label[font]');
          fonts.forEach((e) => {
              if(!usedFonts.includes(e.getAttribute("font"))) usedFonts += "family=" + e.getAttribute("font") + "&";
          });
          let link = document.createElement('link');
          link.rel = "stylesheet";
          if(usedFonts.slice(0, -1)) link.href = "https://fonts.googleapis.com/css2?"+usedFonts.slice(0, -1)+"&display=swap";
          document.querySelector('head').appendChild(link);
          
          // BMT Adapt for background-image
          let divs = this._root.querySelectorAll('div');
          divs.forEach((e) => {
              if('background-image' in e.style){
                let currentImagePath = e.style.backgroundImage.slice(4, -1);
                if (currentImagePath !== undefined) {
                    let imagePath = e.style.backgroundImage.slice(5, -2);
                    if(imagePath != "") e.style.backgroundImage = 'url(' + this.basePath + '/' + imagePath + ')';
                }
              }
          });
          
              }
          
              setImageBackground() {
                 
      // check if the shadowroot host has a background image
          let mainDiv = this._root.querySelector('#main');
          mainDiv.style.backgroundImage =
              'url(' + this.basePath + '/' + imageRelativeURI + ')';
  
          //console.log("background =" + mainDiv.style.backgroundImage);
          //this._root.style.backgroundImage = "toto.png";
      
              }
          
              attributeChangedCallback() {
                 
            console.log('Custom element attributes changed.');
            this.state = JSON.parse(this.getAttribute('state'));
        let tmp = '/PingPongDelayFaust/bypass';
        
        if (this.state[tmp] == 1) {
          this._root.querySelector('#switch1').value = 0;
          this.isOn = false;
        } else if (this.state[tmp] == 0) {
          this._root.querySelector('#switch1').value = 1;
          this.isOn = true;
        }
  
        this.knobs = this._root.querySelectorAll('.knob');
        console.log(this.state);
  
        for (var i = 0; i < this.knobs.length; i++) {
          this.knobs[i].setValue(this.state[this.knobs[i].id], false);
          console.log(this.knobs[i].value);
        }
      
              }
          handleAnimationFrame = () => {
        this._root.getElementById('/Freeverb/Effects/Reverb/Knobs/Damp').value = this._plug.audioNode.getParamValue('/Freeverb/Effects/Reverb/Knobs/Damp');
        

        this._root.getElementById('/Freeverb/Effects/Reverb/Knobs/RoomSize').value = this._plug.audioNode.getParamValue('/Freeverb/Effects/Reverb/Knobs/RoomSize');
        

        this._root.getElementById('/Freeverb/Effects/Reverb/Knobs/Wet').value = this._plug.audioNode.getParamValue('/Freeverb/Effects/Reverb/Knobs/Wet');
        

          this._root.getElementById('/Freeverb/Effects/Reverb/Switches/Enable').value = 1 - this._plug.audioNode.getParamValue('/Freeverb/Effects/Reverb/Switches/Enable');
         
window.requestAnimationFrame(this.handleAnimationFrame);
         }
      
              get properties() {
                 
        this.boundingRect = {
            dataWidth: {
              type: Number,
              value: null
            },
            dataHeight: {
              type: Number,
              value: null
            }
        };
        return this.boundingRect;
      
              }
          
              static get observedAttributes() {
                 
        return ['state'];
      
              }
          
              setKnobs() {
                 this._root.getElementById("/Freeverb/Effects/Reverb/Knobs/Damp").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/Freeverb/Effects/Reverb/Knobs/Damp", e.target.value));
this._root.getElementById("/Freeverb/Effects/Reverb/Knobs/RoomSize").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/Freeverb/Effects/Reverb/Knobs/RoomSize", e.target.value));
this._root.getElementById("/Freeverb/Effects/Reverb/Knobs/Wet").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/Freeverb/Effects/Reverb/Knobs/Wet", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 this._root.getElementById("/Freeverb/Effects/Reverb/Switches/Enable").addEventListener("change", (e) =>this._plug.audioNode.setParamValue("/Freeverb/Effects/Reverb/Switches/Enable", 1 - e.target.value));

              }
          
              setInactive() {
                 
        let switches = this._root.querySelectorAll(".switch webaudio-switch");
  
        switches.forEach(s => {
          console.log("### SWITCH ID = " + s.id);
          this._plug.audioNode.setParamValue(s.id, 0);
        });
      
              }
          }
      try {
          customElements.define('wap-freeverb', 
                                FreeverbGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      