"use strict";

window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  wait_for_update: 2000
});

gtag("set", "ads_data_redaction", true);
gtag("js", new Date());
gtag("config", "G-01ET0K1H05");
