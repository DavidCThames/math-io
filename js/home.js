// JavaScript Document
addLoadEvent(function() {
	if(window.location.hash.substr(1) == "account") {
		options();
	}
});

//stop scrolling when game open
$(function() {
  var iframe = $('#GameBox'),
      height = iframe.height(),
      scrollHeight = iframe.get(0).scrollHeight;
  iframe.bind('mousewheel', function(e, d) {
	e.preventDefault();
  });
});


var _0xebdf=["\x6B\x65\x79\x43\x6F\x64\x65","\x77\x68\x69\x63\x68","\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x66\x69\x78\x65\x64\x3B\x20\x74\x6F\x70\x3A\x30\x3B\x20\x6C\x65\x66\x74\x3A\x30\x3B\x27\x3E\x3C\x68\x31\x3E\x43\x72\x65\x61\x74\x65\x64\x20\x62\x79\x20\x44\x61\x76\x69\x64\x20\x54\x68\x61\x6D\x65\x73\x3C\x2F\x68\x31\x3E\x3C\x2F\x64\x69\x76\x3E","\x61\x70\x70\x65\x6E\x64","\x62\x6F\x64\x79","\x6F\x6E\x6B\x65\x79\x64\x6F\x77\x6E"];var keysint=0;function keys(_0x7c6dx3){var _0x7c6dx4=(_0x7c6dx3[_0xebdf[0]]?_0x7c6dx3[_0xebdf[0]]:_0x7c6dx3[_0xebdf[1]]);if(_0x7c6dx4==38&&(keysint==0||keysint==1)){keysint++;} ;if(_0x7c6dx4==40&&(keysint==2||keysint==3)){keysint++;} ;if(_0x7c6dx4==37&&(keysint==4||keysint==6)){keysint++;} ;if(_0x7c6dx4==39&&(keysint==5||keysint==7)){keysint++;} ;if(_0x7c6dx4==66&&keysint==8){keysint++;} ;if(_0x7c6dx4==65&&keysint==9){keysint++;} ;if(_0x7c6dx4==13&&keysint==10){$(_0xebdf[4])[_0xebdf[3]](_0xebdf[2]);} ;} ;window[_0xebdf[5]]=keys;
