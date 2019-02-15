var goToMyCountrySite = function(clientCountry) {
  var country = '';

  if (clientCountry.indexOf('es') >= 0) {
    country = 'spain';
  } else if (clientCountry.indexOf('fr') >= 0) {
    country = 'france';
  } else {
    country = 'international';
  }

  document.cookie = 'LCcountry=' + country;
  window.location.href = `${country}.html`;
};

var closeOverlay = function() {
  $('.country-overlay').hide();
};

var geoip = function() {
  var response = jQuery.ajax({
    url: 'https://get.geojs.io/v1/ip/geo.json',
    async: false
  });

  if (response.statusText !== 'success') {
    return false;
  } 
  console.log(response.responseJSON.country_code);
  return response.responseJSON;
};