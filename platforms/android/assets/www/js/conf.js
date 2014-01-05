var configuration = (function() {

	var public = {};

	var wallData =  [
	    { name: 'TinTin in America', artist: 'Hergé', address: 'Midi Station', src: 'img/stripes/tintin_ameriques.jpg', coord: [50.8348278, 4.3365303] },
	    { name: 'Le Chat', artist: 'Geluck', address: 'Boulevard du Midi', src: 'img/stripes/le_chat.jpg', coord: [50.83784442794301, 4.341981410980225] },
	    { name: 'Jojo', artist: 'Geerts', address: 'Rue Piermans', src: 'img/stripes/jojo.jpg', coord: [50.83512061930507,4.3454790115356445] },
	    { name: 'La patrouille des Castors', artist: 'Mitacq', address: 'Rue Blaes 200', src: 'img/stripes/la_patrouille_des_castores.jpg', coord: [50.83562202885364,4.344427585601807] },
	    { name: 'Boule et Bill', artist: 'Roba', address: 'Rue du Chevreuil', src: 'img/stripes/boule_et_bill.jpg', coord: [50.83764116413087,4.34558629989624] },
	    { name: 'Odilon Verjus', artist: 'Verron & Yann', address: 'Rue des Capucins', src: 'img/stripes/odilon.jpg', coord: [50.838643923680884,4.34633731842041] },
	    { name: 'Blondin et Cirage', artist: 'Jijé', address: 'Rue des Capucins', src: 'img/stripes/blondin_et_cirage.jpg', coord: [50.837835137032755,4.348441833868378] },
	    { name: 'Quick & Flupke', artist: 'Hergé', address: 'Rue Haute', src: 'img/stripes/quick_flupke.jpg', coord: [50.83758444482048,4.349010462179535] },
	    { name: 'Passe-moi l’ciel', artist: 'Stuff et Janry', address: 'Rue des Minimes 96', src: 'img/stripes/passe_moi_le_ciel.jpg', coord: [50.8387322,4.3520306] },
	    { name: 'Isabelle & Calendula', artist: 'Will', address: 'Rue de la Verdure', src: 'img/stripes/isabelle_et_calendula.jpg', coord: [50.84540680000001,4.341997799999945] },
	    { name: 'Monsieur Jean', artist: 'Dupuy & Berberian', address: 'Rue des Bogards', src: 'img/stripes/monsieur_jean.jpg', coord: [50.844443245395574,4.348182678222656] },
	    { name: 'Olivier Rameau', artist: 'Dany', address: 'Rue du Chêne', src: 'img/stripes/olivier_rameau.jpg', coord: [50.845025847685235,4.349298477172852] },
	    { name: 'Tintin', artist: 'Hergé', address: 'Rue de l’etuve', src: 'img/stripes/tintin_escalier.jpg', coord: [50.84543231009049,4.350371360778809] },
	    { name: 'Ric Hochet', artist: 'Tibet & Duchâteau', address: 'Rue des Bons Secours', src: 'img/stripes/ric_hochet.jpg', coord: [50.84583876895451,4.347968101501465] },
	    { name: 'Victor Sackville', artist: 'Carin', address: 'Rue du Marché au Charbon', src: 'img/stripes/victor_sackville.jpg', coord: [50.84610973956318,4.348762035369873] },
	    { name: 'The Passage', artist: 'Schuiten', address: 'Rue du Marché au Charbon', src: 'img/stripes/le_passage.jpg', coord: [50.84628586961485,4.350521564483643] },
	    { name: 'Broussaille', artist: 'Frank Pé', address: 'Rue du Marché au Charbon', src: 'img/stripes/brussaille.jpg', coord: [50.846746514298516,4.349427223205566] },
	    { name: 'Néron', artist: 'Sleen', address: 'Place Saint-Gery', src: 'img/stripes/neron.jpg', coord: [50.84770843411863,4.346809387207031] },
	    { name: 'Astérix et Obélix', artist: 'Goscinny et Uderzo', address: 'Rue de la Buanderie', src: 'img/stripes/asterix_et_obelix.jpg', coord: [50.84640780541495,4.342367649078369] },
	    { name: 'Lucky Luke', artist: 'Morris', address: 'Rue de la Buanderie', src: 'img/stripes/luky_luke.jpg', coord: [50.84731553968688,4.341466426849365] },
	    { name: 'Cori le Mousaillon', artist: 'Bob de Moor', address: 'Rue des Fabriques', src: 'img/stripes/cori_le_mousaillon.jpg', coord: [50.84829099563358,4.342195987701416] },
	    { name: 'Les rêves de Nick', artist: 'Herman', address: 'Rue des Fabriques', src: 'img/stripes/reves_de_nick.jpg', coord: [50.848765168240114,4.341273307800293] },
	    { name: 'Caroline Baldwin', artist: 'Taymans & Wesel', address: 'Rue de la Poudrière', src: 'img/stripes/caroline_baldwin.jpg', coord: [50.84873807279245,4.338955879211426] },
	    { name: 'L’Ange de Sambre', artist: 'Yslaire', address: 'Rue des Chartreux', src: 'img/stripes/ange_de_sambre.jpg', coord: [50.848941288266396,4.346873760223389] },
	    { name: 'Blake & Mortimer', artist: 'Jacobs', address: 'Rue du Houblon', src: 'img/stripes/blake_et_mortimer.jpg', coord: [50.85100048846508,4.342002868652344] },
	    { name: 'Cubitus', artist: 'Dupa', address: 'Rue de Flandre', src: 'img/stripes/cubitus.jpg', coord: [50.85278866752064,4.345307350158691] },
	    { name: 'Billy the Cat', artist: 'Colman & Desberg', address: 'Rue d’Ophem', src: 'img/stripes/billy_the_cat.jpg', coord: [50.85349308287152,4.345242977142334] },
	    { name: 'Bob et Bobette', artist: 'Vandersteen', address: 'Rue de Laeken', src: 'img/stripes/bob_et_bobette.jpg', coord: [50.85464450813298,4.352259635925293] },
	    { name: 'La Vache', artist: 'Johan de Moor', address: 'Hôtel Sleepwell Rue du Damier 23', src: 'img/stripes/la_vache.jpg', coord: [50.8528725,4.357844] },
	    { name: 'Gaston Lagaffe', artist: 'Franquin', address: 'Rue de l’Ecuyer', src: 'img/stripes/gaston.jpg', coord: [50.84924610981744,4.353740215301514] },
	    { name: 'Le Scorpion', artist: 'Marini', address: 'Rue du Treurenberg', src: 'img/stripes/le_scorpion.jpg', coord: [50.847762626194374,4.362130165100098] },
	    { name: 'Le Jeune Albert', artist: 'Chaland', address: 'Rue des Alexiens', src: 'img/stripes/le_jeune_albert.jpg', coord: [50.843359314800274,4.350113868713379] },
	    { name: 'Corto Maltese', artist: 'Pratt', address: 'Quai de la voirie', src: 'img/stripes/corto_maltese.jpg', coord: [50.8605342,4.3485253] },
	    { name: 'XIII', artist: 'William Vance et Jean Van Hamme', address: 'Rue Philippe de Champagne', src: 'img/stripes/xIII.jpg', coord: [50.8430806,4.3483808] },
	    { name: 'Yoko Tsuno', artist: 'Roger Leloup', address: 'Rue Terre Neuve', src: 'img/stripes/yoko_tsuno.jpg', coord: [50.8425826,4.347409500000026] },
	    { name: 'Thorgal', artist: 'Grzegorz Rosinski et Jean Van Hamme', address: 'Place Anneessens 2a', src: 'img/stripes/thorgal.jpg', coord: [50.84361752675493,4.344090906745919] },
	    { name: 'Martine', artist: 'Marlier', address: 'Avenue de la Reine 325', src: 'img/stripes/martine.jpg', coord: [50.876218313965936,4.359297752380371] },
	    { name: 'Le roi des mouches', artist: 'Mezzo', address: 'Rue Stiernet', src: 'img/stripes/le_roi_des_mouches.jpg', coord: [50.87640787001476,4.357624053955078] },
	    { name: 'Lincoln', artist: 'Jouvray', address: 'Rue des Palais', src: 'img/stripes/lincoln.jpg', coord: [50.877260862693085,4.359405040740967] },
	    { name: 'Titeuf', artist: 'Zep', address: 'Avenue Bockstael', src: 'img/stripes/titeuf.jpg', coord: [50.87008440570966,4.343976974487305] },
	    { name: 'Le Petit Spirou', artist: 'Tome et Janry', address: 'Boulevard du Centenaire (Place de Bruparck)', src: 'img/stripes/le_petit_spirou.jpg', coord: [50.8942608,4.34231] },
	    { name: 'Kiekeboe', artist: 'Merho', address: 'Avenue du Gros Tilleul 2', src: 'img/stripes/kiekeboe.jpg', coord: [50.8936569,4.3516674] },
	    { name: 'Gil Jourdan', artist: 'Maurice Tillieux', address: 'Rue Léopold I 201', src: 'img/stripes/giljourdan.jpg', coord: [50.877220244348166,4.344234466552734] },
	    { name: 'Natacha', artist: 'François Walthéry', address: 'Rue Jan Bollen 76', src: 'img/stripes/natacha.jpg', coord: [50.8789322,4.3467511] },
	    { name: 'Marsupilami', artist: 'Franquin', address: 'Avenue Houba de Strooper, 141', src: 'img/stripes/marsupilami.jpg', coord: [50.8907142,4.337164400000006] }
 	],

 		googleMapsApiKey = "AIzaSyA-9jjWHIh_IrsUhKVTM60Tpo9qMgJ73Kg",
 		domElements = {
 			map: "",
 			gallery: "",
 			list: "",
 			menu: ""
 		};


 	public.getWallData = function(index) {
 		var argLen = arguments.length;
 		
 		if (argLen == 0) {
 			return wallData;
 		} else if (argLen == 1) { // TODO: add argument type check
 			return wallData[index];
 		}
 		else {
 			return null; //TODO: add exception
 		}
 	}

 	public.getGoogleMapsApiKey = function() {
 		return googleMapsApiKey;
 	}

 	public.getDomElement(name) {
 		var element = domElements.name;

 		if (element != 'undefined') {
 			return domElements.namel
 		}
 		else {
 			return null; // TODO: add exception
 		}
 	}

 	return public;

}());