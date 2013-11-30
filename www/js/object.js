/**
 * Map object
 */

function Map(elementId) {
	this.elementId = elementId;
	this.element = document.getElementById(this.elementId);
	this.options = {
        disableDefaultUI: true
	};
}

Map.prototype = {
	contructor: Map,
	zoom: function(zoom) {
		if (typeof zoom != undefined) {
			this.options.zoom = zoom
		}
		else {
			return this.options.zoom || null
		}
	},
	center: function(lat, lng) {
		if (typeof center != undefined) {
			this.options.center = new google.maps.LatLng(lat, lng);
		}
		else {
			return this.options.center || null
		}
	},
	render: function() {
        return new google.maps.Map(this.element, this.options);
	}
}

/**
 * Marker object
 */

function MarkerException(message){
	this.message = message;
	this.toString = function(){
		return message;
	};
}

function Marker(map) {
	// if (typeof map != defined) {
	// 	throw MarkerException("A map object should be passsed as argument.");
	// }
	this.options = {
		map: map,
		icon: null
	}
	this.marker = null;
}

Marker.prototype = {
	contructor: Marker,
	position: function(lat, lng) {
		if (arguments.length == 2) {  // TODO extra sanity check for lat, lng 
			this.options.position = new google.maps.LatLng(lat, lng);
		}
		else if (arguments.length == 0) {
			return this.options.position || null;
		}
		else {
			throw new MarkerException('2 arguments needed ');
		}
	},
	icon: function(image) {
		if (arguments.length == 1) {
			this.options.icon = new google.maps.MarkerImage(
		        image,
		        null, /* size is determined at runtime */
		        null, /* origin is 0,0 */
		        null, /* anchor is bottom center of the scaled image */
		        new google.maps.Size(32, 32)
		    );
		}
		else{
			return this.options.icon || null;
		}
	},
	title: function(title) {
		if (arguments.length == 1) {
			this.options.title = title;
		}
		else{
			return this.options.title || null;
		}
	},
	create: function() {
		this.marker = new google.maps.Marker(this.options);
		return this.marker;

	},
	addEvent: function(eventType, callback) {
		if (this.marker) {
			google.maps.event.addListener(this.marker, eventType, callback);
		}
	}
}

function Stripe(name, artist, address, src, coord) {
	this.name = name;
	this.artist = artist;
	this.address = address;
	this.src = src;
	this.coord = coord;
}

var stripesList = [
    new Stripe('TinTin in America', 'Hergé', 'Midi Station', 'img/stripes/tintin_ameriques.jpg', [50.8348278, 4.3365303]),
    new Stripe('Le Chat', 'Geluck', 'Boulevard du Midi', 'img/stripes/le_chat.jpg', [50.83784442794301, 4.341981410980225]),
    new Stripe('Jojo', 'Geerts', 'Rue Piermans', 'img/stripes/jojo.jpg', [50.83512061930507,4.3454790115356445]),
    new Stripe('La patrouille des Castors', 'Mitacq', 'Rue Blaes 200', 'img/stripes/la_patrouille_des_castores.jpg', [50.83562202885364,4.344427585601807]),
    new Stripe('Boule et Bill', 'Roba', 'Rue du Chevreuil', 'img/stripes/boule_et_bill.jpg', [50.83764116413087,4.34558629989624]),
    new Stripe('Odilon Verjus', 'Verron & Yann', 'Rue des Capucins', 'img/stripes/odilon.jpg', [50.838643923680884,4.34633731842041]),
    new Stripe('Blondin et Cirage', 'Jijé', 'Rue des Capucins', 'img/stripes/blondin_et_cirage.jpg', [50.837835137032755,4.348441833868378]),
    new Stripe('Quick & Flupke', 'Hergé', 'Rue Haute', 'img/stripes/quick_flupke.jpg', [50.83758444482048,4.349010462179535]),
    new Stripe('Passe-moi l’ciel (Oh! Sweet Heaven)', 'Stuff et Janry', 'Rue des Minimes 96', 'img/stripes/passe_moi_le_ciel.jpg', [50.8387322,4.3520306]),
    new Stripe('Isabelle & Calendula', 'Will', 'Rue de la Verdure', 'img/stripes/isabelle_et_calendula.jpg', [50.84540680000001,4.341997799999945]),
    new Stripe('Monsieur Jean', 'Dupuy & Berberian', 'Rue des Bogards', 'img/stripes/monsieur_jean.jpg', [50.844443245395574,4.348182678222656]),
    new Stripe('Olivier Rameau', 'Dany', 'Rue du Chêne', 'img/stripes/olivier_rameau.jpg', [50.845025847685235,4.349298477172852]),
    new Stripe('Tintin', 'Hergé', 'Rue de l’etuve', 'img/stripes/tintin_escalier.jpg', [50.84543231009049,4.350371360778809]),
    new Stripe('Ric Hochet', 'Tibet & Duchâteau', 'Rue des Bons Secours', 'img/stripes/ric_hochet.jpg', [50.84583876895451,4.347968101501465]),
    new Stripe('Victor Sackville', 'Carin', 'Rue du Marché au Charbon', 'img/stripes/victor_sackville.jpg', [50.84610973956318,4.348762035369873]),
    new Stripe('The Passage', 'Schuiten', 'Rue du Marché au Charbon', 'img/stripes/le_passage.jpg', [50.84628586961485,4.350521564483643]),
    new Stripe('Broussaille', 'Frank Pé', 'Rue du Marché au Charbon', 'img/stripes/brussaille.jpg', [50.846746514298516,4.349427223205566]),
    new Stripe('Néron', 'Sleen', 'Place Saint-Gery', 'img/stripes/neron.jpg', [50.84770843411863,4.346809387207031]),
    new Stripe('Astérix et Obélix', 'Goscinny et Uderzo', 'Rue de la Buanderie', 'img/stripes/asterix_et_obelix.jpg', [50.84640780541495,4.342367649078369]),
    new Stripe('Lucky Luke', 'Morris', 'Rue de la Buanderie', 'img/stripes/luky_luke.jpg', [50.84731553968688,4.341466426849365]),
    new Stripe('Cori le Mousaillon', 'Bob de Moor', 'Rue des Fabriques', 'img/stripes/cori_le_mousaillon.jpg', [50.84829099563358,4.342195987701416]),
    new Stripe('Les rêves de Nick', 'Herman', 'Rue des Fabriques', 'img/stripes/reves_de_nick.jpg', [50.848765168240114,4.341273307800293]),
    new Stripe('Caroline Baldwin', 'Taymans & Wesel', 'Rue de la Poudrière', 'img/stripes/caroline_baldwin.jpg', [50.84873807279245,4.338955879211426]),
    new Stripe('L’Ange de Sambre', 'Yslaire', 'Rue des Chartreux', 'img/stripes/ange_de_sambre.jpg', [50.848941288266396,4.346873760223389]),
    new Stripe('Blake & Mortimer', 'Jacobs', 'Rue du Houblon', 'img/stripes/blake_et_mortimer.jpg', [50.85100048846508,4.342002868652344]),
    new Stripe('Cubitus', 'Dupa', 'Rue de Flandre', 'img/stripes/cubitus.jpg', [50.85278866752064,4.345307350158691]),
    new Stripe('Billy the Cat', 'Colman & Desberg', 'Rue d’Ophem', 'img/stripes/billy_the_cat.jpg', [50.85349308287152,4.345242977142334]),
    new Stripe('Bob et Bobette (Spike and Suzy/Willy and Wanda)', 'Vandersteen', 'Rue de Laeken', 'img/stripes/bob_et_bobette.jpg', [50.85464450813298,4.352259635925293]),
    new Stripe('La Vache (The Cow)', 'Johan de Moor', 'Hôtel Sleepwell Rue du Damier 23', 'img/stripes/la_vache.jpg', [50.8528725,4.357844]),
    new Stripe('Gaston Lagaffe', 'Franquin', 'Rue de l’Ecuyer', 'img/stripes/gaston.jpg', [50.84924610981744,4.353740215301514]),
    new Stripe('Le Scorpion', 'Marini', 'Rue du Treurenberg', 'img/stripes/le_scorpion.jpg', [50.847762626194374,4.362130165100098]),
    new Stripe('Le Jeune Albert', 'Chaland', 'Rue des Alexiens', 'img/stripes/le_jeune_albert.jpg', [50.843359314800274,4.350113868713379]),
    new Stripe('Corto Maltese', 'Pratt', 'Quai de la voirie', 'img/stripes/corto_maltese.jpg', [50.8605342,4.3485253]),
    new Stripe('XIII', 'William Vance et Jean Van Hamme', 'Rue Philippe de Champagne', 'img/stripes/xIII.jpg', [50.8430806,4.3483808]),
    new Stripe('Yoko Tsuno', 'Roger Leloup', 'Rue Terre Neuve', 'img/stripes/yoko_tsuno.jpg', [50.8425826,4.347409500000026]),
    new Stripe('Thorgal', 'Grzegorz Rosinski et Jean Van Hamme', 'Place Anneessens 2a', 'img/stripes/thorgal.jpg', [50.84361752675493,4.344090906745919]),
    new Stripe('Martine', 'Marlier', 'Avenue de la Reine 325', 'img/stripes/martine.jpg', [50.876218313965936,4.359297752380371]),
    new Stripe('Le roi des mouches (Lord of the Flies)', 'Mezzo', 'Rue Stiernet', 'img/stripes/le_roi_des_mouches.jpg', [50.87640787001476,4.357624053955078]),
    new Stripe('Lincoln', 'Jouvray', 'Rue des Palais', 'img/stripes/lincoln.jpg', [50.877260862693085,4.359405040740967]),
    new Stripe('Titeuf', 'Zep', 'Avenue Bockstael', 'img/stripes/titeuf.jpg', [50.87008440570966,4.343976974487305]),
    new Stripe('Le Petit Spirou', 'Tome et Janry', 'Boulevard du Centenaire (Place de Bruparck)', 'img/stripes/le_petit_spirou.jpg', [50.8942608,4.34231]),
    new Stripe('Kiekeboe', 'Merho', 'Avenue du Gros Tilleul 2', 'img/stripes/kiekeboe.jpg', [50.8936569,4.3516674]),
    new Stripe('Gil Jourdan', 'Maurice Tillieux', 'Rue Léopold I 201', 'img/stripes/giljourdan.jpg', [50.877220244348166,4.344234466552734]),
    new Stripe('Natacha', 'François Walthéry', 'Rue Jan Bollen 76', 'img/stripes/natacha.jpg', [50.8789322,4.3467511]),
    new Stripe('Marsupilami', 'Franquin', 'Avenue Houba de Strooper, 141', 'img/stripes/marsupilami.jpg', [50.8907142,4.337164400000006])
];
