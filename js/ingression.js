(function( $ ) {
  "use strict";

  function Ingression() {
    this.sequenceInit();
    return this;
  };

  Ingression.prototype.sequenceInit = function() {
    this.audio = [
      {time:'0',text:'Incoming Message...'},
      {time:'1791',text:'\n\nThe world around you isn\'t as it seems.'},
      {time:'4333',text:'\nFor thousands of years, possibly more,'},
      {time:'6875',text:'\nthe shapers have been here, manipulating,'},
      {time:'9750',text:'\ninfluencing art and technology,'},
      {time:'12000',text:'\naltering history and evolution.'},
      {time:'14333',text:'\nThey have subtly affected humanity for a millennia.'},
      {time:'17708',text:'\nTo what purpose remains unknown.'},
      {time:'20208',text:'\nHowever, it is now clear that \nthey have escalated their ingression on Earth.'},
      {time:'24750',text:'\nYou are one of the selected few \nchosen to stop this ingression.'},
      {time:'28833',text:'\nDO NOT FAIL. '},
      {time:'30708',text:'\n\nMy name is ADA.'},
      {time:'32250',text:'\nI have chosen you to aid the resistance.'}
    ];
    this.assembly = [
      {time:'100',text:'*'},
      {time:'200',text:'\n*'},
      {time:'300',text:'\n*'},
      {time:'400',text:'\n*'},
      {time:'500',text:'\nJMP 0x1F'},
      {time:'700',text:'\nPOPL %ESI'},
      {time:'900',text:'\nMOVL %ESI, 0x8(%ESI)'},
      {time:'1100',text:'\nXORL %EAX, %EAX'},
      {time:'1300',text:'\nMOVB %EAX, 0x7(%ESI)'},
      {time:'1500',text:'\nMOVL %EAX, 0xC(%ESI)'},
      {time:'1700',text:'\nMOVB $0xB, %AL'},
      {time:'1900',text:'\nMOVL %ESI, %EBX'},
      {time:'2100',text:'\nLEAL 0x8(%ESI), %ECX'},
      {time:'2300',text:'\n*'},
      {time:'2400',text:'\n*'},
      {time:'2500',text:'\n*'},
      {time:'2600',text:'\n*'},
      {time:'2700',text:'\nBOOTING NIANTIC WEB INTERFACE...'},
      {time:'3500',text:'\nRECEIVING MESSAGE...'}
    ];
  };

  Ingression.prototype.execute = function(sequence, $target, delay) {
    for (var i = 0; i < sequence.length; i++) {
      setTimeout(function () {
        if (delay) {
          write(sequence[0].text, $target);
          sequence.shift();
        }
        else {
          $target.append(sequence[0].text);
          sequence.shift();
        }
      }, sequence[i].time);
    }
  };

  var write = function(msg, $target) {
    if (msg.length <= 1)
      $target.append(msg)
    else {
      $target.append(msg.charAt(0));
      msg = msg.slice(1, msg.length);
      setTimeout(function() {
        write(msg, $target);
      }, 50);
    }
  };

  $.fn.ingression = function(options) {
    var ingress = new Ingression();
    setTimeout(function () {ingress.execute(ingress.assembly, $('.i-scene-0'))}, 1000);
    setTimeout(function () {$('pre.i-scene-0').hide(); $('.i-spinner').toggleClass('active')}, 6000);
    setTimeout(function () {ingress.execute(ingress.audio, $('.i-scene-1').toggleClass('active'), true); document.getElementById('i-message').play();}, 6200);
    setTimeout(function () {$('.i-background').append('<a href="https://www.ingress.com/" class="i-join"><img src="img/resistance.svg" alt=""> JOIN THE RESISTANCE!</a>')}, 42000);
  };
 
}( jQuery ));