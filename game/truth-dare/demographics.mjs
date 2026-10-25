import {isCountryCode} from './countries.mjs?v=6';
// Only bounded categories leave the device; never names, custom text or preferences.
export function demographicPayload(p){
 const age=Number(p.age);if(!Number.isInteger(age)||age<18||age>120||!isCountryCode(p.country)||!['male','female','custom','unspecified'].includes(p.gender))return null;
 return {party_age_band:age<25?'18_24':age<35?'25_34':age<45?'35_44':age<55?'45_54':age<65?'55_64':'65_plus',party_gender:p.gender==='custom'?'self_described':p.gender,party_country:p.country};
}
export function analyticsAllowed(storage,now=Date.now()){
 try{const saved=JSON.parse(storage.getItem('guessplex-analytics-v1'));return saved?.value==='granted'&&Number.isFinite(saved.time)&&saved.time<=now&&now-saved.time<15552000000;}catch{return false;}
}
export function reportDemographics(players,storage,gtag,now=Date.now()){
 if(typeof gtag!=='function'||!analyticsAllowed(storage,now))return 0;
 let sent=0;for(const p of players){if(!p.ready||!p.analyticsConsent||p.analyticsSent)continue;const payload=demographicPayload(p);if(!payload)continue;try{gtag('event','party_profile_registered',payload);p.analyticsSent=true;sent++;}catch{}}
 return sent;
}
