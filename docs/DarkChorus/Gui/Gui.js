import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class DarkChorusGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this.style.display = "inline-flex";
        
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) url("https://mainline.i3s.unice.fr/fausteditorweb/dist/PedalEditor/Front-End/img/background/psyche2.png") repeat scroll 0% 0% / 100% 100% padding-box border-box;border:1px dashed rgb(73, 73, 73);bottom:0px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;container:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:inline-block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:440px;hyphens:manual;inset:0px;isolation:auto;left:0px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;overlay:none;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:0px;rotate:none;rx:auto;ry:auto;scale:none;speak:normal;stroke:none;top:0px;transform:matrix(1, 0, 0, 1, 0, 0);transition:all 0s ease 0s;translate:none;visibility:visible;widows:2;width:322.641px;x:0px;y:0px;zoom:1;};</style>
<div id="DarkChorus" class="resize-drag my-pedal target-style-container gradiant-target" style="border: 1px dashed rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: 100% 100%; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; position: relative; top: 0px; left: 0px; width: 322.651px; height: 440px; transform: translate(0px, 0px); background-image: url(&quot;./img/background/psyche2.png&quot;);" data-x="0" data-y="0"><div id="DarkChorus" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 33px; left: 1px; width: 217px; height: 400px; transform: translate(-500.335px, 6.30127px);" data-x="-500.3347518324674" data-y="6.301270398690804"></div><div id="DarkChorus" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; width: 155.74px; position: absolute; top: 69px; left: 5px; height: 360px; transform: translate(-419.717px, 0.757303px);" data-x="-419.71733695212197" data-y="0.7573029404562135"></div><div id="DarkChorus" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 105px; left: 9px; width: 201px; height: 197px; transform: translate(-454.974px, 3.55649px);" data-x="-454.9742431640625" data-y="3.556488037109375"></div><div id="DarkChorus" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 306px; left: 73.5px; width: 164.165px; height: 119px; transform: translate(-566.131px, 111.489px);" data-x="-566.1309814453125" data-y="111.48895263671875"></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 141px; left: 44.5px; transform: translate(-28.5515px, -51.5823px);" data-x="-28.551544189453125" data-y="-51.582275390625"><webaudio-knob id="/DarkChorus/Effects/Chorus/Knobs/Delay" src="./img/knobs/knob2.png" sprites="100" min="0" max="1" step="1" width="80" height="80" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/knob2.png&quot;); background-size: 80px 8080px; outline: none; width: 80px; height: 80px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1025.85px; top: -36.5px;">0</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 141px; left: 88.5px; transform: translate(25.7349px, -49.8765px);" data-x="25.73486328125" data-y="-49.876495361328125"><webaudio-knob id="/DarkChorus/Effects/Chorus/Knobs/Rate" src="./img/knobs/knob2.png" sprites="100" min="0.01" max="7" step="0.0001" width="80" height="80" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/knob2.png&quot;); background-size: 80px 8080px; outline: none; width: 80px; height: 80px; background-position: 0px -4560px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1011.79px; top: -36.5px;">3.9961</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 141px; left: 132.5px; transform: translate(84.2189px, -50.2804px);" data-x="84.21893310546875" data-y="-50.280364990234375"><webaudio-knob id="/DarkChorus/Effects/Chorus/Knobs/Depth" src="./img/knobs/knob2.png" sprites="100" min="0" max="1" step="0.001" width="80" height="80" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/knob2.png&quot;); background-size: 80px 8080px; outline: none; width: 80px; height: 80px; background-position: 0px -7600px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1014.94px; top: -36.5px;">0.959</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 221.5px; left: 76px; transform: translate(40.4533px, -9.87415px);" data-x="40.453338623046875" data-y="-9.8741455078125"><webaudio-knob id="/DarkChorus/Effects/Chorus/Knobs/Deviation" src="./img/knobs/knob2.png" sprites="100" min="0" max="1" step="0.001" width="80" height="80" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/knob2.png&quot;); background-size: 80px 8080px; outline: none; width: 80px; height: 80px; background-position: 0px -2880px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1014.94px; top: -36.5px;">0.366</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 342px; left: 77.5px; transform: translate(34.7024px, -2.03918px);" data-x="34.702392578125" data-y="-2.0391845703125"><webaudio-switch id="/DarkChorus/Effects/Chorus/Switches/Enable" src="./img/switches/switch_1.png" sprites="100" width="90" height="50" style="touch-action: none;"><style>

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
<div class="webaudio-switch-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/switches/switch_1.png&quot;); background-size: 100% 200%; width: 90px; height: 50px; outline: none; background-position: 0px 0px;"><div class="webaudioctrl-tooltip" style="transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden;"></div></div>
</webaudio-switch></div><label for="DarkChorus" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 320px; left: 2px; top: 3.71875px; border: none; font-family: Shojumaru; font-size: 32px; transform: translate(-1.00885px, 12.1028px);" class="drag" contenteditable="false" font="Shojumaru" data-x="-1.00885009765625" data-y="12.10284423828125">DarkChorus</label><label for="Effects" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 213px; left: 6px; top: 39.7188px; border: none; transform: translate(-531.751px, 30.3648px);" class="drag" contenteditable="false" data-x="-531.7506103515625" data-y="30.36480712890625">Effects</label><label for="Chorus" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 205px; left: 10px; top: 75.7188px; border: none; transform: translate(-512.137px, 38.6288px);" class="drag" contenteditable="false" data-x="-512.1365966796875" data-y="38.628814697265625">Chorus</label><label for="Knobs" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 197px; left: 14px; top: 111.719px; border: none; transform: translate(-516.806px, 18.2811px);" class="drag" contenteditable="false" data-x="-516.8057250976562" data-y="18.281097412109375">Knobs</label><label for="Switches" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 68px; left: 78.5px; top: 312.719px; border: none; transform: translate(-529.543px, -48.4986px);" class="drag" contenteditable="false" data-x="-529.5431917835263" data-y="-48.49862594693724">Switches</label><label for="Delay" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 80px; left: 47.5px; top: 190.219px; border: none; font-family: Shojumaru; transform: translate(-24.3966px, -17.0913px);" class="drag" contenteditable="false" font="Shojumaru" data-x="-24.396575927734375" data-y="-17.09130859375">Delay</label><label for="Rate" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 70px; left: 91.5px; top: 190.219px; border: none; font-family: Shojumaru; transform: translate(32.8541px, -17.9434px);" class="drag" contenteditable="false" font="Shojumaru" data-x="32.8541259765625" data-y="-17.943389892578125">Rate</label><label for="Depth" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 80px; left: 135.5px; top: 190.219px; border: none; font-family: Shojumaru; transform: translate(74.8431px, -19.3698px);" class="drag" contenteditable="false" font="Shojumaru" data-x="74.84307861328125" data-y="-19.3697509765625">Depth</label><label for="Deviation" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 110px; left: 79px; top: 270.719px; border: none; transform: translate(20.5355px, 28.4545px); font-family: Shojumaru;" class="drag" contenteditable="false" data-x="20.5355224609375" data-y="28.4544677734375" font="Shojumaru">Deviation</label><label for="Enable" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 110px; left: 80.5px; top: 393.719px; border: none; font-family: Shojumaru; transform: translate(19.0781px, 2.94745px);" class="drag" contenteditable="false" font="Shojumaru" data-x="19.078125" data-y="2.94744873046875">Enable</label></div>`;
  
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
        this._root.getElementById('/DarkChorus/Effects/Chorus/Knobs/Delay').value = this._plug.audioNode.getParamValue('/DarkChorus/Effects/Chorus/Knobs/Delay');
        

        this._root.getElementById('/DarkChorus/Effects/Chorus/Knobs/Rate').value = this._plug.audioNode.getParamValue('/DarkChorus/Effects/Chorus/Knobs/Rate');
        

        this._root.getElementById('/DarkChorus/Effects/Chorus/Knobs/Depth').value = this._plug.audioNode.getParamValue('/DarkChorus/Effects/Chorus/Knobs/Depth');
        

        this._root.getElementById('/DarkChorus/Effects/Chorus/Knobs/Deviation').value = this._plug.audioNode.getParamValue('/DarkChorus/Effects/Chorus/Knobs/Deviation');
        

          this._root.getElementById('/DarkChorus/Effects/Chorus/Switches/Enable').value = 1 - this._plug.audioNode.getParamValue('/DarkChorus/Effects/Chorus/Switches/Enable');
         
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
                 this._root.getElementById("/DarkChorus/Effects/Chorus/Knobs/Delay").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/DarkChorus/Effects/Chorus/Knobs/Delay", e.target.value));
this._root.getElementById("/DarkChorus/Effects/Chorus/Knobs/Rate").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/DarkChorus/Effects/Chorus/Knobs/Rate", e.target.value));
this._root.getElementById("/DarkChorus/Effects/Chorus/Knobs/Depth").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/DarkChorus/Effects/Chorus/Knobs/Depth", e.target.value));
this._root.getElementById("/DarkChorus/Effects/Chorus/Knobs/Deviation").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/DarkChorus/Effects/Chorus/Knobs/Deviation", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 this._root.getElementById("/DarkChorus/Effects/Chorus/Switches/Enable").addEventListener("change", (e) =>this._plug.audioNode.setParamValue("/DarkChorus/Effects/Chorus/Switches/Enable", 1 - e.target.value));

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
          customElements.define('wap-darkchorus', 
                                DarkChorusGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      