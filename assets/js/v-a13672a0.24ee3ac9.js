"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[35676],{39479:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-a13672a0",path:"/devices/421782.html",title:"Calex 421782 control via MQTT",lang:"en-US",frontmatter:{title:"Calex 421782 control via MQTT",description:"Integrate your Calex 421782 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-01-04T16:09:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing instructions",slug:"pairing-instructions",children:[]},{level:3,title:"Touchlink support",slug:"touchlink-support",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/421782.md",git:{updatedTime:1641035633e3}}},64455:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var i=a(66252);const n=(0,i.uE)('<h1 id="calex-421782" tabindex="-1"><a class="header-anchor" href="#calex-421782" aria-hidden="true">#</a> Calex 421782</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>421782</td></tr><tr><td>Vendor</td><td>Calex</td></tr><tr><td>Description</td><td>Smart Wall Switch, wall mounted RGB controller</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/421782.jpg" alt="Calex 421782"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing-instructions" tabindex="-1"><a class="header-anchor" href="#pairing-instructions" aria-hidden="true">#</a> Pairing instructions</h3><p>To pair this device follow these steps.</p><ol><li>reset it, by pressing <code>Brightness up</code> and <code>Off</code> for 10 seconds.</li><li>pair it to Zigbee2MQTT by pressing <code>brightness down</code> and <code>On</code> for 3 seconds.</li></ol><h3 id="touchlink-support" tabindex="-1"><a class="header-anchor" href="#touchlink-support" aria-hidden="true">#</a> Touchlink support</h3><p>Once paired to Zigbee2MQTT, you can also touch link this device to some lights. Hold it really close (5cm) to a light and press the middle button for 3 seconds. Repeat for all lights you want to control.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',9),s=(0,i.Uk)("How to use device type specific configuration"),o=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>color_temperature_move</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>enhanced_move_to_hue_and_saturation</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},l=(0,a(83744).Z)(d,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[s])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);