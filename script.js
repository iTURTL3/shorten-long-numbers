/*
   @https://github.com/jakemadness/shorten-long-numbers
*/
var shortenNumber = function(number, places, force) {
   var suffix = '';
   if ( number >= 1e15 ) {
      number /= 1e15;
      suffix  = 'Q';
   }
   else if ( number >= 1e12 ) {
      number /= 1e12;
      suffix  = 'T';
   }
   else if ( number >= 1e9 ) {
      number /= 1e9;
      suffix  = 'B';
   }
   else if ( number >= 1e6 ) {
      number /= 1e6;
      suffix  = 'M';
   }
   else if ( number >= 1e3 ) {
      number /= 1e3;
      suffix  = 'K';
   }
   return (force ? String : Number)(number.toFixed(places)) + suffix;
};
