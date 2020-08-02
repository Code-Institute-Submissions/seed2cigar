//Google map
//Individual place id for each of the factories.
const places = [
    {placeId:'A', lat: 23.083833, lng: -82.458169, photo:'assets/images/cohiba_logo.png', name: 'Factory - Cohiba', address: 'Address: 146 Avenida No. 2121, Havana', description: 'Cohiba is a premium brand of cigar, produced in Cuba for Habanos S.A., the Cuban state-owned tobacco company. The name cohíba derives from the Taíno word for "tobacco". The Cuban brand is filled with tobacco that comes from the Vuelta Abajo region of Cuba which has undergone an extra fermentation process. Cuban Cohiba was established in 1966 as a limited production private brand supplied exclusively to Fidel Castro and high-level officials in the Communist Party of Cuba and Cuban government. Often given as diplomatic gifts, the Cohiba brand gradually developed a "cult" status. It was first released commercially for sale to the public in 1982. The Cohiba Siglo VI has received some of the highest scores in the line from blind reviews, including a 93 from Cigar Aficionado and a 90 from Blind Man\'\s Puff.'},
    {placeId:'B', lat: 23.129948, lng: -82.369486, photo:'assets/images/montecristo_logo.jpg', name: 'Factory - Montecristo', address: 'Address: y, Penalver, Havana, Cuba', description: 'Montecristo (Spanish pronunciation: [monteˈkɾisto]) is the name of the Cuban brand of premium cigars and cigarillos, produced in Cuba for Habanos SA, the Cuban state-owned tobacco company. In July 1935, Alonso Menéndez purchased the Particulares Factory, makers of the popular Particulares brand and the lesser-known Byron. Immediately after its acquisition, he created a new brand named Montecristo. The name for the brand was inspired by the Alexandre Dumas, père novel The Count of Monte Cristo, which was supposedly a very popular choice among the torcedores (cigar rollers) in their factory to have read by the lector on the rolling floor. The now-famous Montecristo logo, consisting of a triangle of six swords surrounding a fleur-de-lis, was designed by John Hunter Morris and Elkan Co. Ltd., the brand\'\s British distributor.'},
    {placeId:'C', lat: 23.134520, lng: -82.360470, photo:'assets/images/partagas_logo.jpg', name: 'Factory - Partagas', address: 'Address: 416 Industria, Havana, Cuba', description: 'The Catalan Don Jaime Partagás y Ravelo (Arenys de Mar, 1816 - Vuelta abajo, Cuba, 1868) was the son of Jaume Partagás (tailor) and Teresa Ravelo. He migrated to Cuba in 1831 and worked for Lloret de Mar businessman, Joan Conill in Havana. Establishing his own factory, La Flor de Tabacas de Partagás in 1845, at 1 Cristina St. in Havana (later relocated to Calle Industria), Don Jaime owned many of the best plantations in the Vuelta Abajo tobacco-growing region of Cuba. Don Jaime\'\s ability to choose from among the finest tobaccos on the island, and an instinct for blending and fermenting tobaccos made the brand incredibly successful. Don Jaime is also legendarily credited with hiring one of the first lectors to read to and entertain the cigar rollers as they worked.'},
    {placeId:'D', lat: 19.486487, lng: -70.620113, photo:'assets/images/lfd_logo.jpg', name: 'Factory - LFD', address: 'Address: Tabacalera La Flor (LFD), Tamboril, 51000, Dominican Republic', description: 'La Flor Dominicana (Dominican Flower) is a "boutique-style" cigar brand manufactured by Tabacalera La Flor S.A., a company started in 1996 in Santiago, the Dominican Republic. The company was started and is currently owned by cigar maker Litto Gomez Diez, who was called by Cigar Aficionado "arguably the most innovative mind in the cigar business. "Gomez, a jeweller-turned-cigar maker started the business after his jewellery store in Miami was robbed by armed men at gunpoint of about $400,000 worth of jewellery. Today the company\'\s factory is based in Tamboril, in the Dominican Republic.'},
    {placeId:'E', lat: 19.474516, lng: -70.731854, photo:'assets/images/ep_logo.jpg', name: 'Factory - E.P Carillo', address: 'Address: Tabacalera La Alianza, 51000, Dominican Republic', description: 'Ernesto Perez-Carrillo, the legendary architect behind the famous blockbuster brand La Gloria Cubana, is once again captivating the cigar world under his own name, E.P. Carrillo. As a young adult, Ernesto’s passion was for jazz, not cigars. He always dreamed of becoming a successful jazz drummer and, at the age of 25, he moved to New York City to pursue a career as a musician. After exhausting his efforts to catch on with the famed Stan Getz and his band, he finally returned to Miami, and began his journey to becoming a legendary master blender. In 1976, Ernesto discovered his true calling in life and spent the next four years shadowing his father and learning how a master created a cigar. In his path to becoming an established name in the cigar industry, Ernesto took over the reins of El Credito, his father’s cigar company, and set out to create a cigar that would ignite the senses and create a full-sensory experience for cigar lovers. When he finally put the perfect blend together, under his sole craftsmanship, La Gloria Cubana was re-created. The La Gloria Cubana instantly became a hit in the cigar craze of the early 90’s and, in 1999, Swedish Match purchased El Credito from the Perez-Carrillo family. After working for Swedish Match/General Cigar until March 2009, Ernesto’s children proposed for him to return to the tobacco fields and craft the next great cigar. With the start of E.P. Carrillo, Ernesto had once again dedicated himself to perfecting a family-run, boutique cigar brand alongside his daughter, Lissette Perez-Carrillo, and son, Ernesto Perez-Carrillo III. After dedicating over 50 years to his craft, Ernesto continues to develop top-rated, masterful blends under the E.P. Carrillo name at the family’s factory, La Tabacalera Alianza, in the Dominican Republic. In 2014 Ernesto blended the La Historia EIII, the #2 Cigar of the Year ranked by Cigar Aficionado magazine. Then in 2018 the Carrillo cigar, Encore Majestic received the highest honor as #1 Cigar of the Year from Cigar Aficionado.'},
    {placeId:'F', lat: 19.476948, lng: -70.728924, photo:'assets/images/arturo_logo.png', name: 'Factory - Arturo Fuente', address: 'Address: Tabacalera Arturo Fuente, 51000, Dominican Republic', description: 'Arturo Fuente is a brand of cigar, founded by Arturo Fuente, Sr. in 1912 in West Tampa, Florida. Following a catastrophic fire in 1924, the brand ceased production for 22 years, reemerging in 1946 on a limited, local basis. Ownership was transferred to Arturo\'\s younger son, Carlos Fuente, Sr. in 1958. Following the 1960 United States embargo of Cuba, the Fuente brand began a period of slow and steady growth, emerging as one of the most critically acclaimed makers of hand-rolled premium cigars outside of Cuba. As of 2010 the company was producing 30 million cigars per annum from its factory in the Dominican Republic.'},
    {placeId:'G', lat: 13.089563, lng: -86.368665, photo:'assets/images/drew_logo.jpg', name: 'Factory - Drew Estate', address: 'Address: Drew Estate Tobacco Company, Esteli, Nicaragua', description: 'The Drew Estate story is one of daring, heartbreak & success but, most of all, one of passion for cigars and the country of Nicaragua, where we have been making cigars since 1998. Jonathan Drew & Marvin Samel are not your average cigar makers, their story does not start in Cuba, or with fathers in the cigar business. It started with a dream, and through their can-do spirit and never-say-die attitude made Drew Estate one of the premier cigar manufacturers on the planet. The two frat brothers from New York started out small…. Small, as in a 16 square foot retail kiosk in the World Trade Center in NYC. In late 1998, Jonathan Drew moved to Esteli, Nicaragua with the hopes of starting a rebirth in the cigar world. With a handful of rollers and an even smaller handful of money, the story of “That Crazy Gringo” began. Imagine, going from a NYC apartment to sleeping on a mattress above a ram shackle factory, hardly knowing a word of Spanish too! In early 1999, Jonathan returned to Brooklyn with several amazing new blends for the next Drew Estate release. It was different, even shocking, and it needed something equally as spectacular to launch it. Enter Scott “ACID” Chester, an emerging artist in the DUMBO scene, whose mixing of industrial, urban, graffiti & motorcycle art would make for the perfect vehicle. 1998 & 1999 were crazy… running on fumes, bank account empty, but little by little we chipped away… Some great people came to us and pointed us in the right direction… We could have easily contracted out our cigars, but we wanted to go all in, owning our own factory, making our own cigars, doing things our way, which turns out is definitely the hard way. By 2000, we were ready for Round 2 with the release of Natural by Drew Estate. The ying to ACID’s yang, Natural was equally as original and more traditional. The launch of Natural took place on a vintage yacht sailing around Manhattan with invited friends and industry folk. Natural’s alluring flavor and aroma was the perfect match for a special evening. 2004 brought us to a crossroads. Our ever-growing company needed a change. So, we packed up shop and left the cozy confines of NYC for the fun and sun of Miami. Our move to Miami coincided with the hiring of a new company president: Steve Saka. His challenge, to guide us to the next level (and to bust everyone’s butt like a drill sergeant). On the horizon, dreams were about to come true. Jonathan’s full vision of La Gran Fabrica Drew Estate. The dream that began nearly 10 years ago becomes reality with the building of our new factory. La Gran Fabrica Drew Estate. One of the most, impressive cigar factories in all Central America. Our old factory in Esteli was home to us for nearly a decade, its amazing to think of the many millions of cigars that we were able to produce there. Cigars are so much more than the factory they are made in, it is the people who make them that really make it special. Viva Estelianos! You are the best! We purchased a pristine piece of land overlooking a valley and tobacco fields, and broke ground for our factory in September 2006. Opening in July of 2007, La Gran Fabrica Drew Estate is truly a sight to behold. At over 96,000 sq. feet, it is the largest cigar factory in Nicaragua and one of the five largest premium cigar factories in the world. While others have built simple, economical cinder block cube-like structures, we understood the importance of making our factory special. It isn’t just the place where we make 94,000 handmade cigars a day, it is a reflection of who we are and what Drew Estate means.'},
    {placeId:'H', lat: 13.081883, lng: -86.352978, photo:'assets/images/jdn_logo.jpg', name: 'Factory - Joya De Nicaragua', address: 'Address: Km 147 carretera panamericana. detras del centro comercial erwin, Estelí, Nicaragua', description: 'Joya de Nicaragua, S.A., established in 1968, is the oldest brand of cigars made in Nicaragua. The company continues to manufacture its products today from its headquarters in Estelí, today a major manufacturing center of handmade cigars with exports made worldwide. Cigar-making came to Nicaragua in the aftermath of the Cuban Revolution of 1959. In the years immediately following the overthrow of the regime of Fulgencio Batista by Fidel Castro, the export of raw tobacco and finished cigars from Cuba to the United States was initially permitted. This situation changed dramatically in 1962 when President John F. Kennedy imposed a stringent embargo against Cuba. Owners of tobacco companies and leading growers had already fled the island in the aftermath of the revolution, with its nationalization of the cigar industry. New areas for the cultivation of cigar tobacco were explored. One of the most promising of these new regions for tobacco cultivation were the fertile soils of Nicaragua. While tobacco farming in Nicaragua was begun in 1964, the first brand manufactured in the country was Joya de Nicaragua — a company launched in 1968. The Spanish word joya is a false friend with the English word "joy." The actual meaning of the word is "jewel" — thus the brand name "Joya de Nicaragua" correctly translates as "Jewel of Nicaragua."'},
    {placeId:'I', lat: 13.110041, lng: -86.358604, photo:'assets/images/myfather_logo.jpg', name: 'Factory - My Father Cigars', address: 'Address: My Father Cigars , Esteli, Nicaragua', description: 'Don José "Pepin" Garcia is the CEO of El Rey de los Habanos, Inc, a cigar company in Miami, also known as My Father Cigars. He is a noted cigar maker living in Miami, Florida. Born in Cuba, he is a master cigar roller and blender, and the creator and maker of numerous popular cigar brands. The first brand Pepin made on his own was Tatuaje for Pete Johnson, and after this brand received high ratings in Cigar Aficionado magazine, Pepin was suddenly in great demand and many people wanted a Don Pepin brand. The tiny Miami factory was unable to keep up with the growing demand, and it became necessary to open a second factory, Tabacalera Cubana, in Estelí, Nicaragua. With the opening of the Esteli factory, Pepin changed the overall company brand name to My Father Cigars, derived from a blend son Jaime Garcia had made for him. My Father\'\s rise to prominence was capped when his Flor de las Antillas was named 2012 Cigar of the Year by Cigar Aficionado, an accolade repeated when My Father Le Bijou 1922 received the same honor for 2015. Don Pepin’s goal is to re-create the Cuban style as closely as possible without using Cuban tobacco. He has found that Nicaraguan tobaccos render the flavor closest to the Habanos he has in mind, although other tobaccos are used as wrappers from time to time, notably Ecuadoran grown Connecticut shade. His cigars are not for everyone, as they are medium- to full-bodied and can pack quite a punch. All of the cigars made at his factories are made in the Cuban style and are finished with a triple cap. In addition, every box is marked with the date of manufacture, a practice which is beginning to gain favor outside of Cuba, where it has always been done.'}  
];

var map;

// Loads google map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
        lat: 17.037736,
        lng: -81.931150
    }
});

// Map markers
var markers = places.map(function(place, i) {
     var marker = new google.maps.Marker({
        position: {lat: place.lat, lng: place.lng},
        label: place.placeId
    });

    var infowindow = new google.maps.InfoWindow({
        content: `
            <div>
                <strong>${place.name}</strong>
                <br>
                <br>
                <img src="${place.photo}">                
                <br>
                <br>
                <em>${place.address}</em>
                <br>
                <br>
                <div>${place.description}</div>
            </div>
        `
    });

    /*
<div>
        <img src="${place.photos[0].getUrl({'maxWidth': 200, 'maxHeight': 140})}" alt=""><br>
        <strong>${place.name}</strong><br>
        <strong>Rating:</strong> ${place.rating}<br>
         ${place.vicinity}<br>
         ${place.types[0]}<br>
        <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank">View on Google Maps</a> 
         </div>
    */

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    return marker;
    });
   
var markerCluster = new MarkerClusterer(map, markers, 
{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});      
}

// User clicks to location and zooms in on location
function moveMapTo(placeId){
    var foundPlace;
        for (i=0; i<places.length; i++){
            if(places[i].placeId === placeId) {
                foundPlace=places[i];
    }
}

map.setCenter({
    lat: foundPlace.lat,
    lng: foundPlace.lng,
});

    map.setZoom(15);
}