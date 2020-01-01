(this["webpackJsonppiano-play-react"]=this["webpackJsonppiano-play-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,o,i=n(0),r=n.n(i),s=n(8),c=n.n(s),l=(n(14),n(1)),d=n(2),h=n(4),u=n(3),p=n(6),f=n(5);n(15);!function(e){e[e.Play=0]="Play",e[e.Quiz=1]="Quiz"}(a||(a={})),function(e){e[e.Starting=0]="Starting",e[e.InProgress=1]="InProgress",e[e.Finished=2]="Finished",e[e.None=3]="None"}(o||(o={}));n(16);var y=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"header"},this.props.message),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"A simple and fun way for beginners to learn music notation.")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-primary ".concat(this.props.mode===a.Play?"selected":""),onClick:function(){return e.props.onModeSelected(a.Play)}},"Play"),r.a.createElement("button",{className:"btn btn-primary ".concat(this.props.mode===a.Quiz?"selected":""),onClick:function(){return e.props.onModeSelected(a.Quiz)}},"Quiz"))))}}]),t}(r.a.Component),m=(n(17),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.note?"Now playing":"Play";return r.a.createElement("div",null,r.a.createElement("div",{className:"header-secondary"},t),r.a.createElement("div",{className:"content"},!this.props.note&&r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"Press a key on the ",r.a.createElement("b",null,"piano"),"\xa0",r.a.createElement("i",null,"below"),","),r.a.createElement("br",null),r.a.createElement("span",null,"and see the note appear on the"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"piano score")," to the ",r.a.createElement("i",null,"right.")))),this.props.note&&r.a.createElement("div",{className:"note-card",onClick:function(){return e.props.onNotePress(e.props.note)}},r.a.createElement("span",{className:"name"},this.props.note.fullname),r.a.createElement("span",{className:"octave"},"OCTAVE ",this.props.note.octave)),this.props.alternateNote&&r.a.createElement("div",{className:"note-card-or"},r.a.createElement("span",null," OR ")),this.props.alternateNote&&r.a.createElement("div",{className:"note-card",onClick:function(){return e.props.onNotePress(e.props.alternateNote)}},r.a.createElement("span",{className:"name"},this.props.alternateNote.fullname),r.a.createElement("span",{className:"octave"},"OCTAVE ",this.props.alternateNote.octave))))}}]),t}(r.a.Component)),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={count:0},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header-secondary"},"Quiz"),r.a.createElement("div",{className:"content"}))}}]),t}(r.a.Component),b=function(){function e(){Object(l.a)(this,e),this.maxNotes=16,this.vrvToolkit=void 0,this.spacingNotesXml=[],this.notes=void 0,this.notes=[],this.vrvToolkit=new verovio.toolkit;for(var t=0;t<this.maxNotes;t++)this.spacingNotesXml.push('<note xml:id="rest-hidden-'.concat(t.toString(),'" dur="4" oct="6" pname="c" stem.dir="up" />'))}return Object(d.a)(e,[{key:"clear",value:function(){this.notes.length=0}},{key:"addNote",value:function(e){this.notes.length==this.maxNotes&&(this.notes.length=0),this.notes.push(e)}},{key:"renderNotation",value:function(){for(var e=[],t=[],n=0;n<this.notes.length;n++){var a='<note xml:id="'.concat(n,'" dur="4" oct="').concat(this.notes[n].octave,'" pname="').concat(this.notes[n].name,'" ').concat(this.notes[n].accidental?'accid="'+this.notes[n].accidental+'"':""," />"),o='<rest xml:id="rest-'.concat(n,'" dur="4" oct="').concat(this.notes[n].octave,'" pname="').concat(this.notes[n].name,'" ').concat(this.notes[n].accidental?'accid="'+this.notes[n].accidental+'"':"","/>");this.notes[n].octave>3?(e.push(a),t.push(o)):(e.push(o),t.push(a))}var i='<?xml version="1.0" encoding="UTF-8"?>\n    <?xml-model href="http://music-encoding.org/schema/3.0.0/mei-all.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>\n    <?xml-model href="http://music-encoding.org/schema/3.0.0/mei-all.rng" type="application/xml" schematypens="http://purl.oclc.org/dsdl/schematron"?>\n    <mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="3.0.0">\n      <music>\n          <body>\n                <mdiv>\n                  <score>\n                      <scoreDef>\n                            <staffGrp symbol="brace" label="">\n                              <staffDef clef.shape="G" clef.line="2" n="1" lines="5" />\n                              <staffDef clef.shape="F" clef.line="4" n="2" lines="5" />\n                            </staffGrp>\n                      </scoreDef>\n                      <section>\n                            <measure>\n                              <staff n="1">\n                                  <layer n="1" xml:id="layer-treple">\n                                        '.concat(e.join(""),'\n                                  </layer>\n                                  <layer xml:id="layer-spacing" n="2">\n                                        ').concat(this.spacingNotesXml.join(""),'\n                                  </layer>\n                              </staff>\n                              <staff n="2">\n                                  <layer xml:id="layer-bass" n="1">\n                                        ').concat(t.join(""),"\n                                  </layer>\n                              </staff>\n                            </measure>\n                      </section>\n                  </score>\n                </mdiv>\n          </body>\n      </music>\n    </mei>");return this.vrvToolkit.renderData(i,{pageWidth:1e3,border:25,scale:80,adjustPageHeight:1})}}]),e}(),g=(n(18),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).notationService=void 0,n.state={notationAsSVG:null,notes:[]},n.notationService=new b,n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){this.props.note?this.notationService.addNote(this.props.note):this.notationService.clear();var e=this.notationService.renderNotation();return r.a.createElement("div",{id:"notation",dangerouslySetInnerHTML:{__html:e}})}}]),t}(r.a.Component)),I=(n(19),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},n.pianoKeys=[{whiteKeyId:16},{whiteKeyId:18,blackKeyId:17},{whiteKeyId:20,blackKeyId:19},{whiteKeyId:21},{whiteKeyId:23,blackKeyId:22},{whiteKeyId:25,blackKeyId:24},{whiteKeyId:27,blackKeyId:26},{whiteKeyId:28},{whiteKeyId:30,blackKeyId:29},{whiteKeyId:32,blackKeyId:31},{whiteKeyId:33},{whiteKeyId:35,blackKeyId:34},{whiteKeyId:37,blackKeyId:36},{whiteKeyId:39,blackKeyId:38},{whiteKeyId:40},{whiteKeyId:42,blackKeyId:41},{whiteKeyId:44,blackKeyId:43},{whiteKeyId:45},{whiteKeyId:47,blackKeyId:46},{whiteKeyId:49,blackKeyId:48},{whiteKeyId:51,blackKeyId:50},{whiteKeyId:52},{whiteKeyId:54,blackKeyId:53},{whiteKeyId:56,blackKeyId:55},{whiteKeyId:57},{whiteKeyId:59,blackKeyId:58},{whiteKeyId:61,blackKeyId:60},{whiteKeyId:63,blackKeyId:62},{whiteKeyId:64}],n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"getColor",value:function(e){return e===this.props.highlightedKeyId?"#f0e68c":""}},{key:"render",value:function(){var e=this,t=this.pianoKeys.map((function(t){return r.a.createElement("li",null,r.a.createElement("div",{className:"anchor",onClick:function(){return e.props.onKeyPress(t.whiteKeyId)}}),t.blackKeyId&&r.a.createElement("span",{onClick:function(){return e.props.onKeyPress(t.blackKeyId)}}))}));return r.a.createElement("div",{id:"p-wrapper"},r.a.createElement("ul",{id:"piano"},t))}}]),t}(r.a.Component)),w=function(){function e(){Object(l.a)(this,e),this.context=void 0,this.buffers={},this.initialize()}return Object(d.a)(e,[{key:"initialize",value:function(){console.log("initializing audio and loading sounds");try{"undefined"!==typeof AudioContext?this.context=new AudioContext:"undefined"!==typeof window.webkitAudioContext&&(this.context=new window.webkitAudioContext),this.loadSounds()}catch(e){alert("Web Audio API is not supported in this browser")}}},{key:"playNote",value:function(e){if((e<16||e>64)&&new RangeError("Invalid keyId. The valid range of keyId is 16 to 64."),this.buffers.hasOwnProperty(e)){console.log("SoundService: playing key="+e);var t=this.context.createBufferSource();t.buffer=this.buffers[e],t.connect(this.context.destination),t.start(0)}else console.log("Audio not loaded for key="+e)}},{key:"loadSounds",value:function(){for(var e=16;e<65;e++){var t="/piano-play-react"+"/sounds/".concat(e,".wav");this.loadBuffer(e.toString(),t)}}},{key:"loadBuffer",value:function(e,t){console.log("loadBuffer: name=".concat(e,", path=").concat(t));var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer";var a=this.context,o=this.buffers;n.onload=function(){a.decodeAudioData(n.response,(function(n){n?(console.log("audio loaded for: ",e),o[e]=n):alert("error decoding file data: "+t)}),(function(e){console.error("decodeAudioData error",e)}))},n.onerror=function(){alert("BufferLoader: XHR error")},n.send()}}]),e}(),k=function e(t,n){if(Object(l.a)(this,e),this.keyId=t,this.noteId=n,this.octave=void 0,this.name=void 0,this.accidental=void 0,this.fullname=void 0,this.sender=void 0,t<16||t>64)throw new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");if(n.length<2||n.length>3)throw new RangeError("noteId is invalid");this.name=n[0].toLowerCase(),this.octave=parseInt(n[1]);var a="";3===n.length&&(this.accidental=n[2],"s"===this.accidental?a="\u266f":"f"===this.accidental&&(a="\u266d")),this.fullname=this.name.toUpperCase()+a},K=function(){function e(){var t=this;Object(l.a)(this,e),this.pianoKeyMap={},this.pianoNoteMap={},this.pianoKeyMap={16:["c2"],17:["c2s","d2f"],18:["d2"],19:["d2s","e2f"],20:["e2"],21:["f2"],22:["f2s","g2f"],23:["g2"],24:["g2s","a2f"],25:["a2"],26:["a2s","b2f"],27:["b2"],28:["c3"],29:["c3s","d3f"],30:["d3"],31:["d3s","e3f"],32:["e3"],33:["f3"],34:["f3s","g3f"],35:["g3"],36:["g3s","a3f"],37:["a3"],38:["a3s","b3f"],39:["b3"],40:["c4"],41:["c4s","d4f"],42:["d4"],43:["d4s","e4f"],44:["e4"],45:["f4"],46:["f4s","g4f"],47:["g4"],48:["g4s","a4f"],49:["a4"],50:["a4s","b4f"],51:["b4"],52:["c5"],53:["c5s","d5f"],54:["d5"],55:["d5s","e5f"],56:["e5"],57:["f5"],58:["f5s","g5f"],59:["g5"],60:["g5s","a5f"],61:["a5"],62:["a5s","b5f"],63:["b5"],64:["c6"]},Object.keys(this.pianoKeyMap).forEach((function(e){return t.pianoKeyMap[e].forEach((function(n){return t.pianoNoteMap[n]=e}))}))}return Object(d.a)(e,[{key:"getNote",value:function(e){if(this.pianoNoteMap.hasOwnProperty(e)){var t=parseInt(this.pianoNoteMap[e]);return new k(t,e)}throw new Error("Invalid noteId.")}},{key:"getNoteByKeyId",value:function(e){if(this.pianoKeyMap.hasOwnProperty(e)){var t=this.pianoKeyMap[e][0];return new k(e,t)}throw new Error("Invalid keyId. The valid range of keyId is 16 to 64.")}},{key:"getAlternateNote",value:function(e){if(!this.pianoNoteMap.hasOwnProperty(e))throw new Error("Invalid noteId");var t,n=parseInt(this.pianoNoteMap[e]),a=this.pianoKeyMap[n];return a.length>1&&(t=a[0]==e?new k(n,a[1]):new k(n,a[0])),t}},{key:"getAllNoteIds",value:function(){return Object.keys(this.pianoNoteMap)}},{key:"getAllNaturalNoteIds",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=[];return Object.keys(this.pianoNoteMap).forEach((function(a){if(2==a.length){var o=parseInt(a[1]);o>=e&&o<=t&&n.push(a)}})),n}}]),e}(),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).soundService=void 0,n.pianoService=void 0,n.state={mode:a.Play,keyId:0},n.handleModeChange=n.handleModeChange.bind(Object(p.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(p.a)(n)),n.handleNotePress=n.handleNotePress.bind(Object(p.a)(n)),n.soundService=new w,n.pianoService=new K,n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleModeChange",value:function(e){this.setState({mode:e,note:void 0,alternateNote:void 0})}},{key:"handleKeyPress",value:function(e){var t=this.pianoService.getNoteByKeyId(e),n=this.pianoService.getAlternateNote(t.noteId);this.setState({keyId:e,note:t,alternateNote:n}),this.soundService.playNote(e)}},{key:"handleNotePress",value:function(e){var t=this.pianoService.getAlternateNote(e.noteId);this.setState({keyId:e.keyId,note:e,alternateNote:t}),this.soundService.playNote(e.keyId)}},{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"side-content"},r.a.createElement(y,{message:"Piano Play",mode:this.state.mode,onModeSelected:this.handleModeChange}),r.a.createElement("div",{className:"panel"},this.state.mode===a.Play&&r.a.createElement(m,{note:this.state.note,alternateNote:this.state.alternateNote,onNotePress:this.handleNotePress}),this.state.mode===a.Quiz&&r.a.createElement(v,null))),r.a.createElement("div",{id:"notation-component"},r.a.createElement(g,{note:this.state.note})),r.a.createElement("div",{id:"keyboard-component"},r.a.createElement(I,{highlightedKeyId:0,onKeyPress:this.handleKeyPress})),r.a.createElement("p",{id:"appDetails"},"Built with ",r.a.createElement("a",{href:"https://reactjs.org/"},"React")," (v16.12.0) - Source available on ",r.a.createElement("a",{href:"https://github.com/deanmalone/piano-play-react/"},"GitHub")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.3af1d588.chunk.js.map