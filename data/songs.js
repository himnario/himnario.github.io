
// Aqui se guardaran los himnos
var indice = [
	{
		title: "La Senda Del Justo", 
		text: "La senda del justo es cual luz de aurora <br> que va en aumento hasta que apunta el cenit <br> Hasta que el día esclarezca e ilumine nuestro ser <br> y el lucero de la mañana nazca en nuestro corazón <br><br> <span class='color'>Coro</span> <br><br> Bendita senda, senda que el Señor trazó <br> Llena de gozo paz y felicidad. <br><br>Esta bendita senda jamás la vio ave <br> ni ojo de buitre jamás la miro <br> de raíz trastorno los montes y  los ríos en su nacer <br> sus ojos vieron lo preciado y lo escondido sacó a la luz <br><br>Jesús el cordero descubrió esta senda <br> cuando en el calvario su espíritu dio <br> el velo del templo, rasgose en Jerusalén <br> Entraron todo los gentiles cual sacerdote a ministrar. <br> "
	}, 

	{
		title: "El Fundamento Eterno",
		text: "Jesús el fundamento eterno  <br> Que viene con su grande poder <br> Servirte esos son mis deseos <br> Ayúdame mi Cristo para poder vencer <br><br> Mi alma sedienta esta de verte <br> Mi alma espera en Jehová <br> Mi alma su poder la sustenta <br> Ayúdame mi Cristo hasta la eternidad <br><br> Jesús que linda es tu palabra <br> Dulce mas dulce que la miel <br> Nos llena el corazón de vida <br> Ayúdanos mi Cristo es para serte fiel <br><br> Ahora me quedo meditando <br> Lo mucho que ama Jesús <br> Que por todo el mundo dio su vida <br> Estando en tinieblas nos traslado a su luz "
	}, 

	{
		title: "Oh Que Gozo",
		text: "Oh que gozo el que siento en mi alma<br> Oh que gozo es un gozo incomparable<br> Oh que gozo e que siento en mi alma<br> Porque Cristo me ha salvado de la muerte<br><br> Ahora tomo con amor las armaduras<br> Las armaduras que mi Cristo me ha dejado<br> Que es temor, amor y caridad<br> Santidad, y templanza, y tolerancia<br><br> El camino es un camino muy sufrido<br> Y muy pocos los que quieren caminar<br> Pero si te conviertes con amor<br> Ningún viento los podrá arrebatar.<br><br> Todo árbol que mi padre lo ha plantado<br> Dará frutos apacibles de justicia<br> Pues a mi juicios son verdad y rectitud<br> No cualquiera los tendrá que resistir.<br><br> Pues ya poco va quedando para el fin<br> Y yo quiero esta iglesia ordenada<br> Que por luz yo la he puesto en las tinieblas<br> Como antorcha entre mucha oscuridad<br><br> Muchos pueblos se profesan ser piadosos <br> Y desechan la enseñanza de mi padre<br> Yo no vine a enseñarles en holganza <br> Sino vine a darles enseñanza con templanza<br><br> Mis caminos son muy rectos con justicia <br> Y honestos para ver la indiferencia <br> Este pueblo es conocido entre los pueblos <br> Y no hay pueblo que los pueda comparar<br><br> Y el primero de todos los ministros <br> Es Jesús el rey de Israel<br> Y los que siguen por cabezas de su pueblo<br> Que no dejen de templar siempre el orden.<br><br> Apacienta a mi pueblo con amor<br> Exhortando con espíritu de Dios <br> Que yo soy el que examino los corazones <br> Y el fruto que me da de cada uno. "
	}, 

	{
		title: "La Esposa del Cordero",
		text: "Son pocos los días que nos quedan<br> Miremos cada uno por nuestra salvación<br> Busquemos a Dios en sacrificio <br> Y no estemos pensando que tarda el salvador.<br><br> Si duermen algunos que despierten <br> Y si andan en tinieblas que vengan a la luz<br> Si andan muy altos que se bajen<br> Para ver cara a cara a mi Señor Jesús<br><br> La esposa del cordero se prepara <br> Con su vestido blanco para ir a recibir<br> A Cristo el esposo ya no tarda<br> Lo dice su palabra que pronto ha de venir<br><br> Busquemos al que nos amó primero<br> Sirvámosle con gozo al que nos redimió<br> Sepamos que el que nos amó primero <br> En la cruz del madero su sangre derramó<br><br> Y todo el que esté limpio que se limpie<br> Y cada día que pase se limpie más y más.<br> Y todo el que esté sucio que se ensucie<br> Ha dicho el rey de gloria que a las bodas no entrará "
	}, 

	{
		title: "Quiero entonar",
		text: "Yo quiero entonar esta alabanza <br> Que Cristo me ha dado para su grey<br> Toditos los hermanos la oiremos<br> También la entenderemos para bien<br><br> Dios quiere que este pueblo sea fuerte<br> Y tome nuevas fuerzas en el Señor <br> No ves que en el camino cuantos caen<br> No pueden levantarse otra vez<br><br> Mi Cristo pronto viene amado hermano<br> Y nada de lo que tienes llevaras<br> No te preocupes tanto en lo terreno <br> Eso te va servir para perder<br><br> Proba sobre del cuerpo de la carne <br> Ponelo en sacrificio una vez<br> No aparejes las viandas que le gustan<br> Y vas a ver como se va sentir<br><br> Después que lo hayas hecho meditemos<br> En lo que ayuna tu alma al no venir<br> Tu alma está deseando esta palabra<br> Y está desfalleciendo de la sed.<br><br> Así como tu cuerpo necesita <br> Así necesitas lo espiritual<br> Te encuentras manteniendo el de la carne<br> Y de los espiritual no te acordás<br><br> Tu alma está deseando esta palabra<br> Y tu la contristas con no venir<br> En vez de estar cantando una alabanza <br> Estas en problemado en tu hogar<br><br> Donde mi Cristo habita, habita el gozo<br> Están pidiendo el tiempo para cantar<br> Otros están deseando un momento<br> Para así poderle testificar.<br><br> Hermano ya con esta me despido<br> Te dejo este consuelo en el Señor:<br> Para el hijo obediente es de gran gozo<br> Para el hijo bastardo es de dolor.<br> "
	}, 

	{
		title: "Contame Hermano",
		text: "Contame hermano como está tu corazón<br> Si tiene gozo o si tiene aflicción,<br> Que lo que has visto en el lugar que sale el sol<br> Son las señales que mi Cristo ya mostró<br><br> No te acordaste que era día del Señor <br> Y de tardanza llenaste tu corazón<br> Por esta causa te ha venido esta aflicción <br> Por la tardanza que tuvo tu corazón<br><br> Dime que tiempo trabajaste en el Señor<br> Pasate el tiempo y no anduviste con amor<br> Día tras día te hablaba nuestro Dios<br> Y nunca hiciste el pacto para con Dios<br><br> Hoy los anciano su iglesia presentaran<br> Se llego el tiempo que tus cuentas vas a dar<br> De tus maldades y lo que has podido obrar<br> Por esta causa mi Cristo te Juzgará<br><br> Cristo te hablaba: yo te santifiqué<br> Y te lavé también yo te vestí<br> No estimaste el vestido que te di<br> Más tú dijiste mi Señor tarda en venir<br><br> Mas la malicia fue tu pronto proceder<br> Y a mi Cristo no quisiste obedecer<br> Llora con ellos y así te va a suceder<br> Ya no hay doctrina que te haga comprender<br><br> Los que estén firmes estos pronto me verán<br> Con alegría estos me recibirán <br> Dirán un sueño y así se levantarán<br> A estar con Cristo por toda la eternidad<br><br> "
	}, 

	{
		title: "Desierto",
		text: "Desierto voy caminando por el camino<br> Sin dudad con estas luchas voy a llegar<br> Porque nadie camina pos nosotros mismos<br> Sino que el poder de Cristo nos ha de ayudar<br><br> Hermanos sin su poder ningún árbol se mueve<br> Sino que el poder de Cristo nos hace mover<br> Así se mueve el Cristiano en su santa obra<br> Cuando está el poder de Cristo en su corazón<br><br> Hermanos quiero contarles un sueño que tuve<br> Cantando esta alabanza lo quiero contar<br> Yo vi que el cielo era uno partido en dos partes<br> Y una parte de ellas se bajaba más<br><br> Y una parte le daba frescura a la iglesia <br> La otra fue calentada y empezó a angustiar<br> A todos aquellos seres que estaban debajo <br> Entonces toda la gente comenzó a llorar<br><br> Decían: ¿dónde se encuentran los aleluyas?<br> Decían: ¿dónde se encuentran los gloria a Dios?<br> Si esta hora que estamos se hiciera un llamado<br> Desierto en esta hora aceptaría yo<br><br> Hermanos en esta hora me aflijo tanto<br> Lo triste que vi hermanos también correr<br> Los vi que corrían justos con aquellas gentes <br> Y eran participantes de su labor<br><br> Con tristeza alce mis ojos hacia los cielos<br> Cuando mi alma escuchaba una dulce voz:<br> ¿Porque te afliges tanto por esa gente, <br> No sabes que presas fueron de su maldad?<br><br> Ahora al que a Cristo alabe que a Cristo sirva<br> Que nadie alabe a Cristo haciendo la maldad<br> El que quiera servirle al mundo que al mundo le sirva<br> Desierto de su tormento recibirá.<br><br> "
	},

	{
		title: "Amado Pueblo de Dios",
		text: "Amado pueblo de Dios un consejo yo te traigo<br> Que cuando te vengan pruebas que las sufras con paciencia<br> Porque satanás no duerme viendo a quien va a devorar<br> Y esté apercibido este no será vencido<br><br> Es que guarda mi palabra este no verá la muerte<br> Sino que verá la vida porque él se humilló;<br> El que no obedeció, fue porque no se humilló<br> Este no verá la vida sino que vera la muerte.<br><br> Amado pueblo de Dios no estés tan divagado <br> Porque viene el Salvador a llevar sus escogido<br> Y si no te has preparado, tú no te iras con él<br> Y no serás escogido porque no te has preparado<br><br> Aleluya cantaremos cuando estemos en el reino<br> Y no nos acordaremos de lo que aquí sufrimos.<br> Porque no es de comparar todo lo que aquí sufrimos<br> Con el galardón eterno que Dios tiene preparado<br><br> Dios bendiga los ministros que predican su palabra<br> Que no se sientan cansados de predicar su evangelio<br> Porque este mandamiento no es dado de los hombres<br> Sino que viene de arriba que es del padre de la luces<br><br> Acuérdate tú mi hermano que predicas su palabra<br> Que el compromiso que tienes no es hecho con los hombres<br> Porque hay una balanza y el fiel te está pesando<br> Él tendrá que darte pago cuando tu hayas trabajado<br><br> Ya con esta me despido de toditos mis hermanos<br> Porque ya voy de camino a encontrar mi redentor<br> Porque ya viene al oriente con sus millares de ángeles<br> El que me ha dado las fuerzas en toditas mis flaquezas.<br> <br> <br> "
	}, 
	{
		title: "El Pueblo Del Señor",
		text: "El pueblo del Señor todo comió maná.<br> El Señor los consumió porque hicieron mal.<br> Llévame en tu corazón, llévame hacia a tu altar.<br> Para que todos juntos podamos gozar.<br><br> La nube del Señor que hermosa se ve<br> El monte se estremeció a la voz de su hacedor<br> A los cielos quiero ir contemplar a si a Isaac,<br> Abraham y a Jacob y a todos los demás<br><br> He aquí el cetro de Judá <br> Su bastón lleno de santidad<br> La tribu de Zabulón, la tribu de Benjamín<br> Aquí está con nosotros alabando a Dios.<br><br> Moisés el extendió sus manos a la mar<br> La mar le obedeció, las aguas esparció<br> Ábreme la mar Señor quiero pasar<br> Para que yo pueda al Señor alabar<br><br> "
	}, 

	{
		title: "Despertad",
		text:"Despertad, despertad oh Cristiano<br> Vuestro sueño funesto dejad<br> Que el cruel enemigo os asecha<br> Y cautivo nos quiere llevar<br><br> Despertad las tinieblas pasaron<br> De la noche no sois hijos ya<br> Que lo sois de la luz y del día <br> Y tenéis el derecho de luchar<br><br> Despertad y bruñid vuestras armas<br> Vuestros lomos ceñid de verdad<br> Y calzad vuestros pies aprestados<br> Con el grato evangelio de paz<br><br> Basta ya las tinieblas pasaron<br> Basta ya de pereza mortal<br> Revestid, revestid vuestro pecho<br> Con la cota de fe y caridad<br><br> La gloriosa armadura de Cristo<br> Acudid con anhelo a tomar<br> Y confiando que el dardo enemigo<br> No la puede romper ni apagar<br><br> Oh Cristianos antorchas del mundo<br> De esperanza el yelmo tomad<br> Embrazad de la fe el escudo<br> Y sin miedo corred a luchar<br><br> No temáis pues de Dios revestíos<br> Que al enemigo vencerlo podrás<br> Si tomáis por escudo la Biblia<br> La palabra de Dios de verdad<br><br> En la cruz hallarás la bandera<br> En Jesús hallarás capitán<br> En el cielo tendrás la corona<br> A luchar, a luchar, a luchar.<br><br> "
	}, 
	
	{
		title: "Dulcisimo Jesus",
		text: "Dulcísimo Jesús cantarte quiero hoy<br> Esta humilde canción con todo el corazón.<br> Tu nombre santo es, no hay otro como tú.<br> A ti conviene honrar, tú nombre es por los siglos amén<br><br> <span class='coro'>Coro</span><br><br> Quiero cantarte Señor <br> Por tu grande amor que me has demostrado, <br> Quiero tu nombre invocar<br> Y en tu luz andar y vivir confiado.<br><br> Permíteme llegar a ese santo lugar <br> Donde te alabare con toda devoción<br> Donde tu padre está en gloria sinigual <br> Tu nombre ensalzar loores a él dar por la eternidad<br><br> Hermoso allí será do contigo estaré<br> Corona me darás promesa de tu amor<br> A ti te serviré permíteme Señor al cielo yo llegar<br> Y allí poder cantar como te canto hoy<br><br> El sol no alumbrará en la santa ciudad,<br> Ni luna ahí no habrá, ni llanto ni dolor;<br> No existirá el calor, ni peste ningún mal.<br> Solo tu santo amor y el dulce resplandor te tu rostro Señor.<br><br> "
	},
	
	{
		title: "Dios Bendiga la Columna",
		text: "Dios bendiga la columna de este santo ministerio<br> Que dirige a este pueblo para llevarlos al reino<br><br> Dios bendiga mis hermano que con amor me han servido<br> No tengo con que pagarles todo lo que he recibido<br><br> El Señor les pagará, el no se queda con nada<br> El pagará tu labor al terminar la jornada<br><br> Hoy tengo que despedirme de este pueblo redimido<br> No quisiera retirarme pero Dios lo ha permitido<br><br> El amor que nos ha unido es algo inexplicable<br> Me hacen falta las palabra para poder expresarme<br><br> Un favor quiero pedirles que no se olviden de mi<br> Aunque soy el más inútil porque en nada te serví<br><br> Yo siempre recordaré el calor de mis hermanos<br> Aunque en pruebas y en dolor siempre arde ese amor<br><br> Hoy con esta me despido no digo que es para siempre<br> Y si no te vuelvo a ver nos veremos en el reino<br><br> "
	},
	
	{
		title: "Tenemos el Fundamento",
		text: "Tenemos el fundamento de apóstoles y profetas<br> Siendo la principal piedra Jesucristo es el mismo<br><br> En el cual compaginado va creciendo el edificio<br> Para ser un templo santo en el Señor Jesucristo<br><br> En el también nosotros juntamente edificados<br> Para morada de Dios en el espíritu santo<br><br> Cada uno edifique lo que quiera edificar<br> Sea oro o sea plata el fuego lo va a probar<br><br> El que edifique madera su obra se va quemar<br> Si edifica hojarasca lo mismo le va a pasar.<br><br> Este es el fundamento según Efesios 2:20<br> Y es la piedra de tropiezo a todo el desobediente.<br><br> Esta piedra reprobada y desechada de los hombres<br> Esta fue hecha la cabeza y columna de la iglesia<br><br> "
	},
	
	{
		title: "A Este Pueblo",
		text: "A este pueblo yo le quiero cantar<br> Una alabanza que Dios me dio<br> Para decirles que ya este pueblo<br> Ya va de mengua y sin bendición<br><br> En esto yo respondí<br> Y le conteste al varón:<br> ¿En qué conoces a este pueblo<br> Ya va de mengua y sin bendición?<br><br> No has podido contemplar<br> Que en mis cultos temor no hay<br> Y cuando hablan de mi palabra<br> Muchos del pueblo contrario están<br><br> No has podido contemplar <br> Que el amor no existe ya<br> Solo se encuentra la avaricia<br> La hipocresía y la necedad<br><br> Hermano que atesoras <br> La palabra en tu corazón <br> Para ti es este consuelo <br> Que Dios te manda en su grande amor<br><br> "
	}, 
	
	{
		title: "Hermano Quiero",
		text: "Hermanos quiero pedirte que unamos juntos a voz<br> Yo quiero cantarle a Cristo unidos con vuestra voz<br> En medio está Jesucristo cantémosle a nuestro Dios<br><br> Donde están dos en mi nombre ahí se encuentra el Señor<br> Y a donde está su pueblo su gloria se encuentra ahí<br> Y si tú andas con Cristo su gozo vas a sentir<br><br> A esta iglesia he venido a culto a presentar<br> Esta humilde alabanza que Cristo vino a trazar.<br> Oíla con diligencia que Cristo ya te va hablar<br><br> Amada iglesia de Cristo ¿porque te encuentras así?<br> Te encuentras como San Pedro cuando San Pablo llegó<br> Y era de condenar cuando Pablo lo insortó<br><br> Hermano que anuncias que Cristo ya va a venir<br> Diciéndole a las almas que con vara va regir<br> Si no te apartas del mundo de nada te va servir<br><br> A esta iglesia he venido a darle esta insortación <br> Que nunca niegues a Cristo que te ha brindado el amor<br> Si alguno no le ha negado es porque no habido ocasión<br><br> "
	}, 
	
	{
		title: "A Jehova yo Cantare",
		text: "A Jehová yo cantaré por toda la eternidad<br> No me canso de alabar al bendito Salvador<br><br> <span class='coro'>Coro</span><br><br> Hermano que está aquí una pregunta te quiero hacer:<br> ¿Has venido alabar a Dios o has venido a conversar?<br><br> El que venga con temor este pago le dará<br> En lo poco me fuiste fiel en lo mucho te pondré<br><br> Recuerda aquellas fatuas no quisieron trabajar<br> Imposible se les hiso cuando fueron a buscar<br><br> Aquella mujer que Lot esta vio hacia atrás <br> El ejemplo ha quedado para aquel que vuelva atrás<br><br> El que no esté preparado este libro tomará<br> Hoy leedme esta palabra que me quiero preparar<br><br> Hoy lucha por tu corona hoy que hay tiempo de luchar<br> Viene día y viene hora en que tiempo ya no habrá<br><br> "
	}, 
	
	{
		title: "Que Dulce es tu Nombre",
		text: "Que dulce es tu nombre oh Jesús<br> Bonanza has puesto en mi corazón<br> Tu muerte en la cruz me trajo salvación <br> Por fe voy caminando en tu luz<br> <br> Mis penas arrojaste a la profundidad<br> Jamás de ellas te acordarás<br> Tu sangre me limpió de toda iniquidad<br> Y estableció en mi la verdad<br><br> Que dulce es tu nombre oh Jesús<br> Tuviste de mi alma compasión<br> Llenaste de tu luz mi pobre corazón <br> Por tu misericordia y virtud<br><br> Un cantico de gracia siento en mi ser<br> Tu senda para mi es un placer<br> Mis ojos puestos hacia el cielo puedan ver <br> La gloria de tu grande poder<br><br> Que dulce es tu nombre oh Jesús<br> Eterno será el gozo en tu mansión <br> Morada de gran júbilo y plena luz<br> Ya no habrá mas tribulación<br><br> Por tu misericordia hazme conocer<br> Tu voluntad  has para florecer<br> Conforme a tu promesa sé que has de volver<br> Por tanto no me dejes caer.<br><br> "
	}, 
	
	{
		title: "Hecha tu Pan",
		text: "Hecha tu pan aquí sobre las aguas<br> Reparte a 7 y así también a 8<br> Porque no saben la cosas que vendrán <br> Y la maldad está sobre la tierra<br><br> Acuérdate y engrandece tu obra<br> Que Dios ha puesto delante de los hombre<br> La miran todos y todos la contemplan<br> La ven de lejos y no la han conocido<br><br> Cuando termine de dar este mensaje<br> A las naciones que le hayan conocido<br> Todas las almas que le hayan recibido<br> No morirán desierto vivirán<br><br> Hecha tu pan aquí sobre las aguas<br> Que al fin del tiempo allá lo encontrarás<br> En ese tiempo todo será cumplido<br> Encontraremos lo que hemos repartido<br><br> Y si por suerte celebramos otra fiesta<br> Y falte otra yo de todos mis hermanos<br> Esta alabanza te doy como un recuerdo<br> Que la cantamos en este ministerio<br><br> El hombre sabio edifica su casa<br> El entendido es llamado prudente<br> Quita el chismoso delante de mi pueblo <br> Y cesará la afrenta y la contienda.<br><br> "
	}, 
	
	{
		title: "Santo es mi Dios",
		text: "Santo es mi Dios santo es el Hijo<br> Santo el espíritu de bendición<br> Santo el creyente que está luchando<br> Para entrar allá en su mansión<br><br> Tengo el amor tengo la paz<br> Tengo a mi Dios que es la santidad<br> Y más de esto yo no tendré<br> Por que con esto yo venceré<br><br> El que dijere que no tiene amor<br> Y es iracundo no lo tendrá<br> Y por su fruto se conocerá<br> Y en amargura se consumirá<br><br> El mentiroso y el malicioso<br> El iracundo y el avariento <br> Tendrá que ir al sufrimiento<br> Porque su fruto es de maldición<br><br> La medicina en la Biblia está <br> Y el doctor se presentará<br> El que creyere sano será<br> El que no crea enfermo se va<br><br> "
	}, 

	{
		title: "Todo el Tiempo",
		text: "Todo el tiempo sean blancos tus vestidos<br> Nunca falte el ungüento en tu cabeza<br> Y así pueda decir con alegría <br> Gloria a Dios aleluya al Señor<br><br> Bienvenido sean todo mis hermanos <br> Bienvenidos sean los hijos de Dios<br> Los que están en tiendas de cabaña<br> Estos son los redimidos de Jehová<br><br> Los que vienen en el nombre del Señor <br> Traen himnos y canción espiritual<br> Otros traen también revelaciones<br> Esto sea para edificación<br><br> Alabamos al Señor de los Señores<br> Trabajemos en la obra sin cesar<br> Porque todo el hombre que trabaja<br> Su salario Dios le tiene que pagar<br><br> Ofreced ahora mismo tu presente <br> Sin defecto entregáselo al Señor<br> Como una ofrenda encendida<br> En olor de suavidad a nuestro Dios<br><br> Cada uno con el don que ha recibido<br> Cada uno se edifique en el Señor<br> Estar listo a la final trompeta<br> Este es mi consuelo en el Señor<br><br> "
	}, 

	{
		title: "Jesucristo",
		text: "Jesucristo manda la promesa<br> Que tu amada iglesia esperando está<br><br> Cuando todos se amen como hermanos<br> El espíritu santo no nos dejará<br><br> Cuando veo las pruebas que tengo <br> Siento que mi alma casi ha desmayar.<br><br> Al sentir como que ando en las nubes<br> Siento que yo lloro de felicidad<br><br> Manda fuego Señor a tu pueblo<br> Para que los profetas comiencen a danzar<br><br> Al sentir como que ando en las nubes<br> Al ser bautizado en lo espiritual<br><br> Que bonita se mira la iglesia <br> Cuando los profetas comienzan a danzar<br><br> Yo quisiera que alguien me dijera <br> Que soy desobediente y me vengan a insortar <br><br> "
	}, 

	{
		title: "Revelada",
		text: "Hermano que habéis venido alabar a Jesucristo<br> Yo quiero que en este día que sientas tú lo mismo<br> Mi alma tiene alegría y no puede ocultarla<br> Con cantarle a Jesucristo con eso desahoga mi alma<br><br> El que esté alegre que cante <br> Los salmos que David cantaba<br> Y si alguno se siente triste<br> Que ore como David oraba<br><br> Si mi cuerpo estuviera enfermo <br> Imposible de volver mi alma<br> Encomendarme a Jesucristo<br> Que en sus manos está mi alma<br><br> Cuando Josué iba con el pueblo<br> Y el pueblo iba pereciendo<br> Josué calló postrado<br> Al ver al pueblo que iba de mengua<br><br> Jehová le habló a Josué:<br> ¿Josué porqué te postras?<br> Anatema hay en el pueblo<br> Examinalo tribu por tribu<br><br> Aconteció que ahí se encontraba<br> El culpable del anatema<br> Da glorias a Dios hijo mío<br> Y Jehová no le dio respuesta<br><br> El que está en Cristo se alegra<br> Gratitud hay en su alma<br> Este llama sus muros salud<br> Y  a sus puertas alabanzas <br><br> "
	}, 
	{
		title: "Soy Soldado",
		text: "Soy soldado de Cristo el rey de gloria<br> Y peleo con gran seguridad<br> Y luchando tendremos la corona<br> Que muy pronto mi Cristo nos dará<br><br> Oh hermanos sigamos adelante<br> No desmayes que vas a lamentar<br> Porque Cristo ha prometido que en su reino<br> Gozaremos por la eternidad<br><br> Las palabras de Cristo son muy fieles<br> Y las digo a su siervo que él ganó<br> Y ahora la predican los ancianos <br> Y ministros de la congregación <br><br> Este pueblo le canta a un Dios vivo<br> Y le canta con todo el corazón<br> Porque a Cristo pertenece toda honra<br> Y la gloria por los siglos amén.<br><br> "
	}, 
	
	{
		title: "El Dia Dura",
		text: "El día dura la noche viene<br> Cuando ya nadie podrá trabajar<br> Bienaventurado los labradores<br> Los que sembraron espiritual<br><br> Viene Jesús con sus millares<br> Trae su hoz para cegar<br> Y los racimos que están maduros<br> Los echaran en el alfolís<br><br> Bendita viña de buenos frutos<br> El trigo limpio irá al alfolís<br> Más cizaña de malos frutos <br> En el horno ardiente se quemarán<br><br> Las profecías se están cumpliendo<br> En este libro las encontrarás<br> Que allá en el cielo nada de inmundo <br> Ni cosas sucias no entrarán<br><br> "
	}, 
	
	{
		title: "Tu Fiel Jornada",
		text: "Cuando termine mi jornada en este mundo<br> Alabaré a mi Dios con el amor profundo <br> Y cuando llegues a la ciudad santa de Sion <br> Recibiré una corona de bendición<br><br> <span class='coro'>Coro</span> Aunque todos me desprecien por el bien<br> Ciertamente al cordero he de ver<br> En su trono alabaré su nombre santo<br> Y de hermosura me vestiré con su manto<br><br> Toda la gente me desprecian por su nombre<br> No han comprendido que nuestro Dios el no es hombre<br> El día viene cuando perplejos se quedarán<br> Al ver a Cristo el rey de gloria que vendrá<br><br> Si tu le buscar hallarás revelaciones<br> Que te conduzcan hasta la puerta de Sion<br> El precio está pagado ya para tú entrada<br> Cuando termine tú también tu fiel jornada.<br><br> "
	}, 
	
	{
		title: "Cuan Bueno",
		text: "Cuan bueno es estar reunidos<br> En santa convocación <br> Cuan bueno es cantar alabanzas<br> Acordes a una voz<br><br> Yo quiero sentir tu presencia<br> Derrama tu espíritu en mi<br> Y llena mi copa de júbilo<br> Oh santo Dios de paz<br><br> Derrama el gozo en tu pueblo<br> Que todos sintamos tu amor<br> Y todos te cantaremos<br> Con gozo en el corazón<br><br> Mi alma sedienta desea <br> Torrente de tu virtud<br> Yo quiero cantar en lenguas<br> En lenguas angelical<br><br> Con arpas cantemos unidos<br> Al santo de Israel <br> Y fuego del cielo pedimos <br> Aviva tu obra Señor<br><br> "
	}, 
	
// 	{
// 		title: "Que Dulce es tu Nombre",
// 		text: "
// Alégrate oh Judea y canta Jerusalén
// Porque tu rey ya viene humilde salvador
// Y cuando el día aclare veremos al Señor
// Sentado en una asnita entrando a Jerusalén

// Viniendo de Beersheva al llano de Josafat
// Allí se ven por siempre los que vienen adorar
// Y mientras el rey estaba reclinando en su marfil
// Mi nardo dio el perfume su aroma se sintió

// Muchos estaban fuera queriendo ver al Señor
// Pero la compañía la puerta se cerró
// Pero mi rey corría y la puerta se abrió
// Y todos los gentiles a Cristo le dan loor

// Obsanas aleluyas al santo de Israel
// Bendito los que vienen en el nombre del Señor
// Unos le traen salmos otros le dan loor
// Y Cristo le recibe con todo el corazón

// 		"
// 	}, 
	
	{
		title: "Alegrate oh Judea",
		text: "Alégrate oh Judea y canta Jerusalén<br> Porque tu rey ya viene humilde salvador<br> Y cuando el día aclare veremos al Señor<br> Sentado en una asnita entrando a Jerusalén<br><br> Viniendo de Beersheva al llano de Josafat<br> Allí se ven por siempre los que vienen adorar<br> Y mientras el rey estaba reclinando en su marfil<br> Mi nardo dio el perfume su aroma se sintió<br><br> Muchos estaban fuera queriendo ver al Señor<br> Pero la compañía la puerta se cerró<br> Pero mi rey corría y la puerta se abrió<br> Y todos los gentiles a Cristo le dan loor<br><br> Obsanas aleluyas al santo de Israel<br> Bendito los que vienen en el nombre del Señor<br> Unos le traen salmos otros le dan loor<br> Y Cristo le recibe con todo el corazón<br><br> "
	}, 
	
	{
		title: "Por un Amor",
		text: "Por un amor que Cristo nos ha dado<br> Por un amor que Cristo se entregó<br> Por un amor mi Cristo fue llevado<br> En el calvario su espíritu entrego<br><br> <span class='coro'>Coro</span><br><br> Amén, amén, amén aleluya<br> El rey de reyes a las puertas está<br> El que tuviere las vestiduras blancas<br> Será llevado al reino celestial<br><br> En apocalipsis nos dice su palabra<br> Que está un libro sellado allá en el cielo<br> En ese libro grabado está tu nombre<br> Serán llamados en llano de Josafat<br><br> Cuando el cordero abrió uno de los sellos<br> Oí una voz del cielo que decía<br> Le será dada una corona de justicia<br> A todo aquel que venciera hasta el fin<br><br> "
	}, 
	
	{
		title: "Siervo Mio",
		text: "Siervo mío se valiente esforzate a trabajar<br> Si has creído en un Dios vivo<br> Es el que nos va ayudar<br> Con templanza y rectitud a las almas doctrinad<br> <br> Si recibes la palabra a tu Dios gracias darás<br> Si has guardado tu vestido no lo vayas a manchar<br> Porque manchas y arrugas<br> Al cielo no entrarán<br> <br> Siervo mío se valiente no pienses en desmayar<br> Si has creído en un Dios vivo, es el que nos va ayudar<br> Porque el reino es de valientes <br> Los cobardes no entraran<br> <br> El que toma la mansera y vuelve a ver atrás<br> Este no estaba acto para el reino celestial<br> Hoy le espera un fuego ardiente<br> En el lago infernal <br> "
	}, 
	
	{
		title: "Oid mis Palabras",
		text: "Oíd mis palabras simientes de Abraham<br> Porque como siempre hablaré de corazón<br> Arraigo yo tengo seguro en lo que estoy<br> En este fundamento yo sé que al cielo voy.<br><br> Este fundamento nadie lo borrará<br> Ni zorras que pasen no lo derivarán<br> La piedra de esquina el mismo Cristo es<br> Este es el fundamento que habla en Efesios 2<br><br> En este hay profetas y apóstoles de Dios<br> Que siguen al cordero donde quiera van en pos<br> En este hay doctrina y remedio para el mal<br> Hay vasos de oro y plata también hay de metal<br><br> El que solo lidiare no se coronará<br> Sino lidiare con legitimidad<br> No se admiten ganancias en deshonestidad<br> En esta iglesia reina solo la santidad<br><br> El espíritu santo el es nuestro pastor<br> Nosotros ministros que hablamos su verdad<br> El es el gran obispo de la congregación<br> Con este llegaremos hasta el monte de Sion <br><br> "
	},

	{
		title: "Son Hermoso los Sarmientos",
		text: "Son hermosos los sarmientos deliciosa son las uvas<br> De la tierra prometida la que fluye leche y miel<br> La que fue despedregada por la mano de Jehová<br> Y por suerte fue entregada a los hijos de Israel<br><br> Muchos la vituperaron otros la menospreciaron<br> Porque diez la desmayaron para no poder entrar<br> Pero muchos la gozaron porque dos la esforzaron<br> Fue Caleb hijo de Jefone y Josué hijo de Núm<br><br> El que en Cristo ha creído un lugar mejor ya tiene<br> La promesa del Dios vivo y un fiel consolador<br> Una herencia tan gloriosa donde iremos a gozar<br> De este mundo despreciado a la patria celestial<br><br> "
	}, 

	{
		title: "Estrella Hermosa",
		text: "Cuan buena y deliciosa es la palabra de mi Señor<br> Nos da la vida nos alimenta y nos sustenta el corazón<br><br> Con lágrimas en mis ojos Dios amoroso te canto yo<br> Con el consuelo que allá en el cielo su rostro santo yo le veré<br><br> Apreciamos esta palabra porque es la espada que Dios nos dio<br> Es deliciosa luz amorosa estrella hermosa que me alumbró<br><br> Arrepentíos y convertíos a mis oídos me dijo Dios<br> Deja ese mundo ven a mis brazos con un abrazo me recibió<br><br> No cuesto oro no cuesto plata cuesto la sangre de mi Jesús<br> Somos felices los que tenemos la fuente viva que Dios nos dio<br><br> Unos cantamos otros lloramos porque sentimos a mi Señor<br> Siento en mi alma su santo espíritu que llena mi alma de bendición<br><br> "
	}, 

	{
		title: "Con Este Cantico",
		text: "Con este cántico te doy la bienvenida<br> Amada iglesia bendita del Señor<br> Bendita sea tu entrada y tu salida<br> Como está escrito en los salmos de David<br><br> Ahora hermano que somos bienvenidos<br> Démosle gracias al santo de Israel<br> Porque a su nombre es dado el acción de gracias<br> Y a su nombre conviene así honrar<br><br> Pues Cristo dijo a todo pueblo y lengua<br> Manifestando en su revelación<br> Temed a Dios y darle gloria y honra<br> Porque es venido el gran día final<br><br> Amado hermano que estás aquí presente<br> Tú que has venido en el nombre del Señor<br>< Hemos venido a sacrificar alabanzas frutos de labios<br> Que confiesan al Señor<br><br> Querido amigo que estás aquí presente<br> A ti te llama el santo de Israel<br> Que le recibas con todo el corazón<br> Y tendrás parte con él en su mansión<br><br> Y yo con esta alabanza ensalzo a Cristo <br> También unidos en la congregación<br> Solo esperando que estemos siempre listos<br> Para poder recibir el galardón<br><br> "
	}, 

	{
		title: "Desilusiones",
		text: "En esta hora que estamos reunidos<br> Quiero cantar esta alabanza con los santos<br> Quiero decirles que sigamos adelante<br> Quiero decirles que no pierdan la esperanza<br><br> Me sentí triste al mirar desilusiones<br> Pues vino Cristo y me trajo esta alabanza<br> Sentí su aliento sentía su presencia<br> Y presentí que en él estaba mi esperanza<br><br> Yo meditaba al mirar tantos problemas<br> Consideré que la obra está menguando<br> Pues él me dijo este camino es estrecho<br> Lo que te resta es que tú sigas orando<br><br> Amado hermano tú que escuchas el mensaje<br> Pon atención a lo que te están diciendo<br> Si no recibes el castigo que te viene<br> Por esta causa los muchos se están perdiendo<br><br> Algunos dicen por no cumplir la palabra<br> Quizás ninguno vamos entrar al reino<br> Y de este modo se van descaminando<br> Y a lo malo le dicen que está bueno<br><br> El que comete sus errores no quisiera <br> Que le amoneste el que está predicando<br> Pues él quisiera que le fuera por cubierto<br> Y se equivoca ante aquel que está mirando<br><br> "
	} 
];
