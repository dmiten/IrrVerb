/**
 * Created by Дмитрий on 18.01.2017.
 */

const VERBS = [
  {
    id: 0,
    firstForm: 'abide',
    firstFormTranscription: '[əbˈaɪd]',
    secondForm: 'abode',
    secondFormTranscription: '[əboud]',
    thirdForm: 'abode',
    thirdFormTranscription: '[əboud]',
    translation: 'вытерпеть; обитать, оставаться верным'
  },
  {
    id: 1,
    firstForm: 'alight',
    firstFormTranscription: '[əˈlaɪt]',
    secondForm: 'alit',
    secondFormTranscription: '[əˈlɪt]',
    thirdForm: 'alit',
    thirdFormTranscription: '[əˈlɪt]',
    translation: 'спускаться, приземляться, сходить'
  },
  {
    id: 2,
    firstForm: 'arise',
    firstFormTranscription: '[əˈraɪz]',
    secondForm: 'arose',
    secondFormTranscription: '[əˈrouz]',
    thirdForm: 'arisen',
    thirdFormTranscription: '[əˈrɪzn]',
    translation: 'возникать, подниматься'
  },
  {
    id: 3,
    firstForm: 'awake',
    firstFormTranscription: '[əˈweɪk]',
    secondForm: 'awoke',
    secondFormTranscription: '[əˈwouk]',
    thirdForm: 'awoken',
    thirdFormTranscription: '[əˈwoukən]',
    translation: 'будить, просыпаться'
  },
  {
    id: 4,
    firstForm: 'baby-sit',
    firstFormTranscription: '[ˈbeɪbi sɪt]',
    secondForm: 'baby-sat',
    secondFormTranscription: '[bˈeɪːbi sˈæt]',
    thirdForm: 'baby-sat',
    thirdFormTranscription: '[bˈeɪːbi sˈæt]',
    translation: 'работать няней, присматривать за детьми'
  },
  {
    id: 5,
    firstForm: 'backlight',
    firstFormTranscription: '[bˈæklaɪt]',
    secondForm: 'backlit',
    secondFormTranscription: '[bˈæklɪt]',
    thirdForm: 'backlit',
    thirdFormTranscription: '[bˈæklɪt]',
    translation: 'подсвечивать'
  },
  {
    id: 6,
    firstForm: 'backslide',
    firstFormTranscription: '[ˌbækˈslaɪd]',
    secondForm: 'backslid',
    secondFormTranscription: '[bækslˈɪd]',
    thirdForm: 'backslid',
    thirdFormTranscription: '[bækslˈɪd]',
    translation: 'отпадать, отступать, отходить'
  },
  {
    id: 7,
    firstForm: 'be',
    firstFormTranscription: '[bˈiː]',
    secondForm: 'was  (were)',
    secondFormTranscription: '[wˈɒz]  [wˈeəː]',
    thirdForm: 'been',
    thirdFormTranscription: '[bˈiːn]',
    translation: 'быть'
  },
  {
    id: 8,
    firstForm: 'bear',
    firstFormTranscription: '[bˈeəː]',
    secondForm: 'bore',
    secondFormTranscription: '[bˈɔː]',
    thirdForm: 'born',
    thirdFormTranscription: '[bˈɔːn]',
    translation: 'нести, переносить, выносить, терпеть'
  },
  {
    id: 9,
    firstForm: 'beat',
    firstFormTranscription: '[bˈiːt]',
    secondForm: 'beat',
    secondFormTranscription: '[biːt]',
    thirdForm: 'beaten',
    thirdFormTranscription: '[bˈiːtn̩]',
    translation: 'бить'
  },
  {
    id: 10,
    firstForm: 'become',
    firstFormTranscription: '[bɪˈkʌm]',
    secondForm: 'became',
    secondFormTranscription: '[bɪˈkeɪm]',
    thirdForm: 'become',
    thirdFormTranscription: '[bɪˈkʌm]',
    translation: 'становиться, делаться, превращаться'
  },
  {
    id: 11,
    firstForm: 'befall',
    firstFormTranscription: '[bɪˈfɔːl]',
    secondForm: 'befell',
    secondFormTranscription: '[bɪˈfel]',
    thirdForm: 'befallen',
    thirdFormTranscription: '[bɪˈfɔːlən]',
    translation: 'случаться, приключаться, происходить'
  },
  {
    id: 12,
    firstForm: 'beget',
    firstFormTranscription: '[bɪˈget]',
    secondForm: 'begot',
    secondFormTranscription: '[bɪˈgɒt]',
    thirdForm: 'begot',
    thirdFormTranscription: '[bɪˈgɒt]',
    translation: 'порождать'
  },
  {
    id: 13,
    firstForm: 'begin',
    firstFormTranscription: '[bıʹgın]',
    secondForm: 'began',
    secondFormTranscription: '[bıʹgæn]',
    thirdForm: 'begun',
    thirdFormTranscription: '[bɪˈgʌn] ',
    translation: 'начинать'
  },
  {
    id: 14,
    firstForm: 'behold',
    firstFormTranscription: '[bɪˈhould]',
    secondForm: 'beheld',
    secondFormTranscription: '[bɪˈheld]',
    thirdForm: 'beheld',
    thirdFormTranscription: '[bɪˈheld]',
    translation: 'смотреть, созерцать, зреть'
  },
  {
    id: 15,
    firstForm: 'belay',
    firstFormTranscription: '[bɪˈleɪ] ',
    secondForm: 'belaid',
    secondFormTranscription: '[bɪˈleɪd]',
    thirdForm: 'belaid',
    thirdFormTranscription: '[bɪˈleɪd]',
    translation: 'страхоать, закреплять, завёртывать'
  },
  {
    id: 16,
    firstForm: 'bend',
    firstFormTranscription: '[bˈend]',
    secondForm: 'bent',
    secondFormTranscription: '[bˈent]',
    thirdForm: 'bent',
    thirdFormTranscription: '[bˈent]',
    translation: 'гнуть; наклоняться'
  },
  {
    id: 17,
    firstForm: 'bequeath',
    firstFormTranscription: '[bıʹkwi:ð]',
    secondForm: 'bequoth',
    secondFormTranscription: '[bıʹkwəʋθ]',
    thirdForm: 'bequothen',
    thirdFormTranscription: '[bıʹkwi:ðən]',
    translation: 'завещать'
  },
  {
    id: 18,
    firstForm: 'beseech',
    firstFormTranscription: '[bɪsˈiːtʃ]',
    secondForm: 'besought',
    secondFormTranscription: '[bɪsˈɔːt]',
    thirdForm: 'besought',
    thirdFormTranscription: '[bɪsˈɔːt]',
    translation: 'умолять, упрашивать'
  },
  {
    id: 19,
    firstForm: 'beset',
    firstFormTranscription: '[bɪsˈet]',
    secondForm: 'beset',
    secondFormTranscription: '[bɪsˈet]',
    thirdForm: 'beset',
    thirdFormTranscription: '[bɪsˈet]',
    translation: 'осаждать, окружать, теснить'
  },
  {
    id: 20,
    firstForm: 'bespeak',
    firstFormTranscription: '[bɪˈspiːk]',
    secondForm: 'bespoke',
    secondFormTranscription: '[bɪˈspouk]',
    thirdForm: 'bespoken',
    thirdFormTranscription: '[bɪˈspoukən]',
    translation: 'свидетельствовать, предвещать'
  },
  {
    id: 21,
    firstForm: 'bestride',
    firstFormTranscription: '[bɪˈstraɪd]',
    secondForm: 'bestrode',
    secondFormTranscription: '[bɪˈstroud]',
    thirdForm: 'bestridden',
    thirdFormTranscription: '[bɪˈstrɪdn]',
    translation: 'сидеть верхом, стоять расставив ноги, перешагивать'
  },
  {
    id: 22,
    firstForm: 'bet',
    firstFormTranscription: '[bˈet]',
    secondForm: 'bet',
    secondFormTranscription: '[bˈet]',
    thirdForm: 'bet',
    thirdFormTranscription: '[bˈet]',
    translation: 'держать пари, биться об заклад'
  },
  {
    id: 23,
    firstForm: 'betide',
    firstFormTranscription: '[bɪˈtaɪd]',
    secondForm: 'betid',
    secondFormTranscription: '[bɪtɪd]',
    thirdForm: 'betid',
    thirdFormTranscription: '[bɪtɪd]',
    translation: 'постигать, случаться'
  },
  {
    id: 24,
    firstForm: 'bid',
    firstFormTranscription: '[bˈɪd]',
    secondForm: 'bade',
    secondFormTranscription: '[bˈeɪd]',
    thirdForm: 'bidden',
    thirdFormTranscription: '[bˈɪdn̩]',
    translation: 'предлагать цену, велеть'
  },
  {
    id: 25,
    firstForm: 'bide',
    firstFormTranscription: '[baɪd]',
    secondForm: 'bode',
    secondFormTranscription: '[boud]',
    thirdForm: 'bode',
    thirdFormTranscription: '[boud]',
    translation: 'выжидать'
  },
  {
    id: 26,
    firstForm: 'bind',
    firstFormTranscription: '[bˈaɪnd]',
    secondForm: 'bound',
    secondFormTranscription: '[bˈaʊːnd]',
    thirdForm: 'bound',
    thirdFormTranscription: '[bˈaʊːnd]',
    translation: 'связать, завязать'
  },
  {
    id: 27,
    firstForm: 'bite',
    firstFormTranscription: '[bˈaɪt]',
    secondForm: 'bit',
    secondFormTranscription: '[bˈɪt]',
    thirdForm: 'bitten',
    thirdFormTranscription: '[bıtn]',
    translation: 'кусать'
  },
  {
    id: 28,
    firstForm: 'bleed',
    firstFormTranscription: '[blˈiːd]',
    secondForm: 'bled',
    secondFormTranscription: '[blˈed]',
    thirdForm: 'bled',
    thirdFormTranscription: '[blˈed]',
    translation: 'кровоточить'
  },
  {
    id: 29,
    firstForm: 'blend',
    firstFormTranscription: '[blend]',
    secondForm: 'blent',
    secondFormTranscription: '[blˈent]',
    thirdForm: 'blent',
    thirdFormTranscription: '[blˈent]',
    translation: 'смешивать'
  },
  {
    id: 30,
    firstForm: 'bless',
    firstFormTranscription: '[bles]',
    secondForm: 'blest',
    secondFormTranscription: '[blest]',
    thirdForm: 'blest',
    thirdFormTranscription: '[blest]',
    translation: 'благословлять'
  },
  {
    id: 31,
    firstForm: 'blow',
    firstFormTranscription: '[blou]',
    secondForm: 'blew',
    secondFormTranscription: '[blˈuː]',
    thirdForm: 'blown',
    thirdFormTranscription: '[bloun]',
    translation: 'дуть, пускать, взрывать'
  },
  {
    id: 32,
    firstForm: 'break',
    firstFormTranscription: '[brˈeɪːk]',
    secondForm: 'broke',
    secondFormTranscription: '[brouk]',
    thirdForm: 'broken',
    thirdFormTranscription: '[broukən]',
    translation: 'ломать, разбивать'
  },
  {
    id: 33,
    firstForm: 'breastfeed',
    firstFormTranscription: '[brˈestfid]',
    secondForm: 'breastfed',
    secondFormTranscription: '[brˈestfed]',
    thirdForm: 'breastfed',
    thirdFormTranscription: '[brˈestfed]',
    translation: 'кормить грудью'
  },
  {
    id: 34,
    firstForm: 'breed',
    firstFormTranscription: '[brˈiːd]',
    secondForm: 'bred',
    secondFormTranscription: '[brˈed]',
    thirdForm: 'bred',
    thirdFormTranscription: '[brˈed]',
    translation: 'выращивать, размножаться'
  },
  {
    id: 35,
    firstForm: 'bring',
    firstFormTranscription: '[brˈɪŋ]',
    secondForm: 'brought',
    secondFormTranscription: '[brˈɔːt]',
    thirdForm: 'brought',
    thirdFormTranscription: '[brˈɔːt]',
    translation: 'приносить'
  },
  {
    id: 36,
    firstForm: 'broadcast',
    firstFormTranscription: '[brˈɔːdkɑːst]',
    secondForm: 'broadcast',
    secondFormTranscription: '[brˈɔːdkɑːst]',
    thirdForm: 'broadcast',
    thirdFormTranscription: '[brˈɔːdkɑːst]',
    translation: 'передавать по радио, вещать'
  },
  {
    id: 37,
    firstForm: 'browbeat',
    firstFormTranscription: '[ˈbraʊbiːt] ',
    secondForm: 'browbeat',
    secondFormTranscription: '[ˈbraʊbiːt] ',
    thirdForm: 'browbeaten',
    thirdFormTranscription: '[brˈaʊːbitn̩]',
    translation: 'запугивать, отпугивать, нагонять страх'
  },
  {
    id: 38,
    firstForm: 'build',
    firstFormTranscription: '[bˈɪld]',
    secondForm: 'built',
    secondFormTranscription: '[bˈɪlt]',
    thirdForm: 'built',
    thirdFormTranscription: '[bˈɪlt]',
    translation: 'строить'
  },
  {
    id: 39,
    firstForm: 'burn',
    firstFormTranscription: '[bˈɜːn]',
    secondForm: 'burnt',
    secondFormTranscription: '[bˈɜːnt]',
    thirdForm: 'burnt',
    thirdFormTranscription: '[bˈɜːnt]',
    translation: 'жечь'
  },
  {
    id: 40,
    firstForm: 'burst',
    firstFormTranscription: '[bˈɜːst]',
    secondForm: 'burst',
    secondFormTranscription: '[bˈɜːst]',
    thirdForm: 'burst',
    thirdFormTranscription: '[bˈɜːst]',
    translation: 'взрываться, разрываться'
  },
  {
    id: 41,
    firstForm: 'bust',
    firstFormTranscription: '[bˈʌst]',
    secondForm: 'bust',
    secondFormTranscription: '[bˈʌst]',
    thirdForm: 'bust',
    thirdFormTranscription: '[bˈʌst]',
    translation: 'сломать, разбить, разрушить'
  },
  {
    id: 42,
    firstForm: 'buy',
    firstFormTranscription: '[bˈaɪ]',
    secondForm: 'bought',
    secondFormTranscription: '[bˈɔːt]',
    thirdForm: 'bought',
    thirdFormTranscription: '[bˈɔːt]',
    translation: 'купить'
  },
  {
    id: 43,
    firstForm: 'can',
    firstFormTranscription: '[kˈæn]',
    secondForm: 'could',
    secondFormTranscription: '[kˈʊd]',
    thirdForm: 'could',
    thirdFormTranscription: '[kˈʊd]',
    translation: 'мочь, уметь'
  },
  {
    id: 44,
    firstForm: 'carve',
    firstFormTranscription: '[kɑːv]',
    secondForm: 'corve',
    secondFormTranscription: '[kɔ:v]',
    thirdForm: 'carven',
    thirdFormTranscription: '[ʹkɑ:v(ə)n]',
    translation: 'вырезать, резать'
  },
  {
    id: 45,
    firstForm: 'cast',
    firstFormTranscription: '[kˈɑːst]',
    secondForm: 'cast',
    secondFormTranscription: '[kˈɑːst]',
    thirdForm: 'cast',
    thirdFormTranscription: '[kˈɑːst]',
    translation: 'отбрасывать, бросать, проводить кастинг'
  },
  {
    id: 46,
    firstForm: 'catch',
    firstFormTranscription: '[kˈætʃ]',
    secondForm: 'caught',
    secondFormTranscription: '[kˈɔːt]',
    thirdForm: 'caught',
    thirdFormTranscription: '[kˈɔːt]',
    translation: 'ловить, хватать'
  },
  {
    id: 47,
    firstForm: 'chap',
    firstFormTranscription: '[tʃæp]',
    secondForm: 'chapt',
    secondFormTranscription: '[tʃˈæpt]',
    thirdForm: 'chapt',
    thirdFormTranscription: '[tʃˈæpt]',
    translation: 'трескаться, раскалывать'
  },
  {
    id: 48,
    firstForm: 'chide',
    firstFormTranscription: '[tʃˈaɪd]',
    secondForm: 'chid',
    secondFormTranscription: '[tʃˈɪd]',
    thirdForm: 'chid',
    thirdFormTranscription: '[tʃˈɪd]',
    translation: 'бранить'
  },
  {
    id: 49,
    firstForm: 'choose',
    firstFormTranscription: '[tʃˈuːz]',
    secondForm: 'chose',
    secondFormTranscription: '[tʃouz]',
    thirdForm: 'chosen',
    thirdFormTranscription: '[tʃouzən]',
    translation: 'выбирать'
  },
  {
    id: 50,
    firstForm: 'clap',
    firstFormTranscription: '[klæp]',
    secondForm: 'clapt',
    secondFormTranscription: '[klæpt]',
    thirdForm: 'clapt',
    thirdFormTranscription: '[klæpt]',
    translation: 'хлопать, аплодировать'
  },
  {
    id: 51,
    firstForm: 'clear-cut',
    firstFormTranscription: '[klˈɪəː kˈʌt]',
    secondForm: 'clear-cut',
    secondFormTranscription: '[klˈɪəː kˈʌt]',
    thirdForm: 'clear-cut',
    thirdFormTranscription: '[klˈɪəː kˈʌt]',
    translation: 'сплошая вырубка леса'
  },
  {
    id: 52,
    firstForm: 'cleave',
    firstFormTranscription: '[klˈiːv]',
    secondForm: 'clove',
    secondFormTranscription: '[klouv]',
    thirdForm: 'cloven',
    thirdFormTranscription: '[klouvn̩]',
    translation: 'раскалывать, прилипать, оставаться верным'
  },
  {
    id: 53,
    firstForm: 'climb',
    firstFormTranscription: '[klaɪm]',
    secondForm: 'clumb',
    secondFormTranscription: '[klˈʌm]',
    thirdForm: 'clumb',
    thirdFormTranscription: '[klˈʌm]',
    translation: 'карабкаться, взбираться'
  },
  {
    id: 54,
    firstForm: 'cling',
    firstFormTranscription: '[klˈɪŋ]',
    secondForm: 'clung',
    secondFormTranscription: '[klˈʌŋ]',
    thirdForm: 'clung',
    thirdFormTranscription: '[klˈʌŋ]',
    translation: 'цепляться, льнуть, прилипать, держаться'
  },
  {
    id: 55,
    firstForm: 'clip',
    firstFormTranscription: '[klɪp]',
    secondForm: 'clipped',
    secondFormTranscription: '[klɪpt]',
    thirdForm: 'clipt',
    thirdFormTranscription: '[klɪpt]',
    translation: 'стричь, подрезать'
  },
  {
    id: 56,
    firstForm: 'clothe',
    firstFormTranscription: '[klouð]',
    secondForm: 'clad',
    secondFormTranscription: '[klæd]',
    thirdForm: 'clad',
    thirdFormTranscription: '[klæd]',
    translation: 'одевать'
  },
  {
    id: 57,
    firstForm: 'come',
    firstFormTranscription: '[kˈʌm]',
    secondForm: 'came',
    secondFormTranscription: '[kˈeɪːm]',
    thirdForm: 'come',
    thirdFormTranscription: '[kʌm]',
    translation: 'приходить'
  },
  {
    id: 58,
    firstForm: 'cost',
    firstFormTranscription: '[kˈɒst]',
    secondForm: 'cost',
    secondFormTranscription: '[kˈɒst]',
    thirdForm: 'cost',
    thirdFormTranscription: '[kˈɒst]',
    translation: 'стоить'
  },
  {
    id: 59,
    firstForm: 'countersink',
    firstFormTranscription: '[kˈaʊːntəsɪŋk]',
    secondForm: 'countersank',
    secondFormTranscription: '[kˈaʊːntəsæŋk]',
    thirdForm: 'countersunk',
    thirdFormTranscription: '[kˈaʊːntəsʌŋk]',
    translation: 'зенковать'
  },
  {
    id: 60,
    firstForm: 'co-write',
    firstFormTranscription: '[kou raɪt] ',
    secondForm: 'co-wrote',
    secondFormTranscription: '[kou rout]',
    thirdForm: 'co-written',
    thirdFormTranscription: '[kou ˈrɪtn]',
    translation: 'писать, написать совместно'
  },
  {
    id: 61,
    firstForm: 'creep',
    firstFormTranscription: '[krˈiːp]',
    secondForm: 'crept',
    secondFormTranscription: '[krˈept]',
    thirdForm: 'crept',
    thirdFormTranscription: '[krˈept]',
    translation: 'ползти'
  },
  {
    id: 62,
    firstForm: 'crossbreed',
    firstFormTranscription: '[ˈkrɒsbriːd]',
    secondForm: 'crossbred',
    secondFormTranscription: '[ˈkrɒsbred]',
    thirdForm: 'crossbred',
    thirdFormTranscription: '[ˈkrɒsbred]',
    translation: 'скрещивать (породы)'
  },
  {
    id: 63,
    firstForm: 'crosscut',
    firstFormTranscription: '[krˈɒskʌt]',
    secondForm: 'crosscut',
    secondFormTranscription: '[krˈɒskʌt]',
    thirdForm: 'crosscut',
    thirdFormTranscription: '[krˈɒskʌt]',
    translation: 'пересекать'
  },
  {
    id: 64,
    firstForm: 'crow',
    firstFormTranscription: '[krou]',
    secondForm: 'crew',
    secondFormTranscription: '[kruː]',
    thirdForm: 'crown',
    thirdFormTranscription: '[kraʊn]',
    translation: 'кукарекать'
  },
  {
    id: 65,
    firstForm: 'cut',
    firstFormTranscription: '[kˈʌt]',
    secondForm: 'cut',
    secondFormTranscription: '[kˈʌt]',
    thirdForm: 'cut',
    thirdFormTranscription: '[kˈʌt]',
    translation: 'резать'
  },
  {
    id: 66,
    firstForm: 'daydream',
    firstFormTranscription: '[ˈdeɪˌdriːm]',
    secondForm: 'daydreamt',
    secondFormTranscription: '[dˈeɪːdremt]',
    thirdForm: 'daydreamt',
    thirdFormTranscription: '[dˈeɪːdremt]',
    translation: 'грезить наяву, мечтать, фантазировать'
  },
  {
    id: 67,
    firstForm: 'deal',
    firstFormTranscription: '[dˈiːl]',
    secondForm: 'dealt',
    secondFormTranscription: '[dˈelt]',
    thirdForm: 'dealt',
    thirdFormTranscription: '[dˈelt]',
    translation: 'иметь дело'
  },
  {
    id: 68,
    firstForm: 'delve',
    firstFormTranscription: '[ʹdelv]',
    secondForm: 'dolve',
    secondFormTranscription: '[ʹdoulv]',
    thirdForm: 'dolven',
    thirdFormTranscription: '[ʹdəʋlvən]',
    translation: 'рыться, копаться'
  },
  {
    id: 69,
    firstForm: 'dig',
    firstFormTranscription: '[dˈɪg]',
    secondForm: 'dug',
    secondFormTranscription: '[dˈʌg]',
    thirdForm: 'dug',
    thirdFormTranscription: '[dˈʌg]',
    translation: 'копать, рыть'
  },
  {
    id: 70,
    firstForm: 'ding',
    firstFormTranscription: '[dɪŋ]',
    secondForm: 'dung',
    secondFormTranscription: '[dʌŋ]',
    thirdForm: 'dung',
    thirdFormTranscription: '[dʌŋ]',
    translation: 'звенеть (подобно колоколу)'
  },
  {
    id: 71,
    firstForm: 'dip',
    firstFormTranscription: '[dɪp]',
    secondForm: 'dipt',
    secondFormTranscription: '[dˈɪpt]',
    thirdForm: 'dipt',
    thirdFormTranscription: '[dˈɪpt]',
    translation: 'погружать, окунать, макать'
  },
  {
    id: 72,
    firstForm: 'disprove',
    firstFormTranscription: '[ˌdɪsˈpruːv] ',
    secondForm: 'disproved',
    secondFormTranscription: '[ˌdɪsˈpruːvd]',
    thirdForm: 'disproven',
    thirdFormTranscription: '[dɪsprˈuːvn̩]',
    translation: 'опровергать, доказывать ложность'
  },
  {
    id: 73,
    firstForm: 'do (does)',
    firstFormTranscription: '[dˈuː]   [dˈʌz]',
    secondForm: 'did',
    secondFormTranscription: '[dˈɪd]',
    thirdForm: 'done',
    thirdFormTranscription: '[dˈʌn]',
    translation: 'делать'
  },
  {
    id: 74,
    firstForm: 'downcast',
    firstFormTranscription: '[dˈaʊːŋkɑːst]',
    secondForm: 'downcast',
    secondFormTranscription: '[dˈaʊːŋkɑːst]',
    thirdForm: 'downcast',
    thirdFormTranscription: '[dˈaʊːŋkɑːst]',
    translation: 'удручать, печалить, подавлять'
  },
  {
    id: 75,
    firstForm: 'draw',
    firstFormTranscription: '[drˈɔː]',
    secondForm: 'drew',
    secondFormTranscription: '[drˈuː]',
    thirdForm: 'drawn',
    thirdFormTranscription: '[drˈɔːn]',
    translation: 'рисовать, чертить, тащить, тянуть, волочить'
  },
  {
    id: 76,
    firstForm: 'dream',
    firstFormTranscription: '[drˈiːm]',
    secondForm: 'dreamt',
    secondFormTranscription: '[drˈemt]',
    thirdForm: 'dreamt',
    thirdFormTranscription: '[drˈemt]',
    translation: 'видеть сны, мечтать'
  },
  {
    id: 77,
    firstForm: 'drink',
    firstFormTranscription: '[drˈɪŋk]',
    secondForm: 'drank',
    secondFormTranscription: '[drˈæŋk]',
    thirdForm: 'drunk',
    thirdFormTranscription: '[drʌŋk] ',
    translation: 'пить'
  },
  {
    id: 78,
    firstForm: 'drive',
    firstFormTranscription: '[drˈaɪv]',
    secondForm: 'drove',
    secondFormTranscription: '[drouv]',
    thirdForm: 'driven',
    thirdFormTranscription: '[drˈɪvn̩]',
    translation: 'водить машину'
  },
  {
    id: 79,
    firstForm: 'dwell',
    firstFormTranscription: '[dwˈel]',
    secondForm: 'dwelt',
    secondFormTranscription: '[dwˈelt]',
    thirdForm: 'dwelt',
    thirdFormTranscription: '[dwˈelt]',
    translation: 'обитать, задерживаться'
  },
  {
    id: 80,
    firstForm: 'eat',
    firstFormTranscription: '[ˈiːt]',
    secondForm: 'ate',
    secondFormTranscription: '[ˈeɪt]',
    thirdForm: 'eaten',
    thirdFormTranscription: '[ˈiːtn̩]',
    translation: 'есть'
  },
  {
    id: 81,
    firstForm: 'english',
    firstFormTranscription: '[ˈɪŋɡlɪʃ]',
    secondForm: 'english',
    secondFormTranscription: '[ˈɪŋɡlɪʃ]',
    thirdForm: 'english',
    thirdFormTranscription: '[ˈɪŋɡlɪʃ]',
    translation: 'переводить на английский язык'
  },
  {
    id: 82,
    firstForm: 'engrave',
    firstFormTranscription: '[ɪnˈgreɪv] ',
    secondForm: 'engraved',
    secondFormTranscription: '[ɪnˈgreɪvd]',
    thirdForm: 'engraven',
    thirdFormTranscription: '[ɪŋgrˈeɪːv(ə)n]',
    translation: 'гравировать'
  },
  {
    id: 83,
    firstForm: 'enwrap',
    firstFormTranscription: '[ɪnˈræp] ',
    secondForm: 'enwrapt',
    secondFormTranscription: '[ɪnrˈæpt]',
    thirdForm: 'enwrapt',
    thirdFormTranscription: '[ɪnrˈæpt]',
    translation: 'завёртывать, укутывать'
  },
  {
    id: 84,
    firstForm: 'fall',
    firstFormTranscription: '[fˈɔːl]',
    secondForm: 'fell',
    secondFormTranscription: '[fˈel]',
    thirdForm: 'fallen',
    thirdFormTranscription: '[fˈɔːlən]',
    translation: 'падать'
  },
  {
    id: 85,
    firstForm: 'feed',
    firstFormTranscription: '[fˈiːd]',
    secondForm: 'fed',
    secondFormTranscription: '[fˈed]',
    thirdForm: 'fed',
    thirdFormTranscription: '[fˈed]',
    translation: 'кормить'
  },
  {
    id: 86,
    firstForm: 'feel',
    firstFormTranscription: '[fˈiːl]',
    secondForm: 'felt',
    secondFormTranscription: '[fˈelt]',
    thirdForm: 'felt',
    thirdFormTranscription: '[fˈelt]',
    translation: 'чувствовать'
  },
  {
    id: 87,
    firstForm: 'fight',
    firstFormTranscription: '[fˈaɪt]',
    secondForm: 'fought',
    secondFormTranscription: '[fˈɔːt]',
    thirdForm: 'fought',
    thirdFormTranscription: '[fˈɔːt]',
    translation: 'сражаться'
  },
  {
    id: 88,
    firstForm: 'find',
    firstFormTranscription: '[fˈaɪnd]',
    secondForm: 'found',
    secondFormTranscription: '[fˈaʊːnd]',
    thirdForm: 'found',
    thirdFormTranscription: '[fˈaʊːnd]',
    translation: 'находить'
  },
  {
    id: 89,
    firstForm: 'fit',
    firstFormTranscription: '[fˈɪt]',
    secondForm: 'fit',
    secondFormTranscription: '[fˈɪt]',
    thirdForm: 'fit',
    thirdFormTranscription: '[fˈɪt]',
    translation: 'подходить по размеру, приспосабливать'
  },
  {
    id: 90,
    firstForm: 'flee',
    firstFormTranscription: '[flˈiː]',
    secondForm: 'fled',
    secondFormTranscription: '[flˈed]',
    thirdForm: 'fled',
    thirdFormTranscription: '[flˈed]',
    translation: 'бежать, спасаться'
  },
  {
    id: 91,
    firstForm: 'fling',
    firstFormTranscription: '[flˈɪŋ]',
    secondForm: 'flung',
    secondFormTranscription: '[flˈʌŋ]',
    thirdForm: 'flung',
    thirdFormTranscription: '[flˈʌŋ]',
    translation: 'бросать, швырять, метать'
  },
  {
    id: 92,
    firstForm: 'floodlight',
    firstFormTranscription: '[ˈflʌdlaɪt]',
    secondForm: 'floodlit',
    secondFormTranscription: '[flˈʌdlɪt]',
    thirdForm: 'floodlit',
    thirdFormTranscription: '[flˈʌdlɪt]',
    translation: 'освещать прожектором'
  },
  {
    id: 93,
    firstForm: 'fly',
    firstFormTranscription: '[flˈaɪ]',
    secondForm: 'flew',
    secondFormTranscription: '[flˈuː]',
    thirdForm: 'flown',
    thirdFormTranscription: '[floun]',
    translation: 'летать'
  },
  {
    id: 94,
    firstForm: 'forbear',
    firstFormTranscription: '[ˈfɔːbeə] ',
    secondForm: 'forbore',
    secondFormTranscription: '[fɔːˈbɔː]',
    thirdForm: 'forborne',
    thirdFormTranscription: '[fɔːˈbɔːn]',
    translation: 'воздерживаться'
  },
  {
    id: 95,
    firstForm: 'forbid',
    firstFormTranscription: '[fəˈbɪd]',
    secondForm: 'forbade',
    secondFormTranscription: '[fəˈbeɪd]',
    thirdForm: 'forbidden',
    thirdFormTranscription: '[fəˈbɪdn]',
    translation: 'запрещать'
  },
  {
    id: 96,
    firstForm: 'force-feed',
    firstFormTranscription: '[fɔːs fiːd]',
    secondForm: 'force-fed',
    secondFormTranscription: '[fɔːs fed]',
    thirdForm: 'force-fed',
    thirdFormTranscription: '[fɔːs fed]',
    translation: 'кормить насильно'
  },
  {
    id: 97,
    firstForm: 'forecast',
    firstFormTranscription: '[fˈɔːkɑːst]',
    secondForm: 'forecast',
    secondFormTranscription: '[fˈɔːkɑːst]',
    thirdForm: 'forecast',
    thirdFormTranscription: '[fˈɔːkɑːst]',
    translation: 'предсказывать'
  },
  {
    id: 98,
    firstForm: 'forego',
    firstFormTranscription: '[fɔːˈgou]',
    secondForm: 'forewent',
    secondFormTranscription: '[fɔːˈwent]',
    thirdForm: 'foregone',
    thirdFormTranscription: '[fɔːˈgɒn]',
    translation: 'предшествовать'
  },
  {
    id: 99,
    firstForm: 'foresee',
    firstFormTranscription: '[fɔːˈsiː]',
    secondForm: 'foresaw',
    secondFormTranscription: '[fɔːˈsɔː]',
    thirdForm: 'foreseen',
    thirdFormTranscription: '[fɔːˈsiːn]',
    translation: 'предвидеть'
  },
  {
    id: 100,
    firstForm: 'foretell',
    firstFormTranscription: '[fɔːˈtel]',
    secondForm: 'foretold',
    secondFormTranscription: '[fɔːˈtould]',
    thirdForm: 'foretold',
    thirdFormTranscription: '[fɔːˈtould]',
    translation: 'предсказывать'
  },
  {
    id: 101,
    firstForm: 'forget',
    firstFormTranscription: '[fəˈget]',
    secondForm: 'forgot',
    secondFormTranscription: '[fəˈgɒt]',
    thirdForm: 'forgotten',
    thirdFormTranscription: '[fəʹgotn]',
    translation: 'забывать'
  },
  {
    id: 102,
    firstForm: 'forgive',
    firstFormTranscription: '[fəˈgɪv]',
    secondForm: 'forgave',
    secondFormTranscription: '[fəˈgeɪv]',
    thirdForm: 'forgiven',
    thirdFormTranscription: '[fəˈgɪvn]',
    translation: 'прощать'
  },
  {
    id: 103,
    firstForm: 'forgo',
    firstFormTranscription: '[fɔːˈgou]',
    secondForm: 'forwent',
    secondFormTranscription: '[fɔːˈwent]',
    thirdForm: 'forgone',
    thirdFormTranscription: '[fɔːˈgɒn]',
    translation: 'отказываться, воздерживаться'
  },
  {
    id: 104,
    firstForm: 'forsake',
    firstFormTranscription: '[fəsˈeɪːk]',
    secondForm: 'forsook',
    secondFormTranscription: '[fəˈsuːk]',
    thirdForm: 'forsaken',
    thirdFormTranscription: '[fəsˈeɪːkən]',
    translation: 'покидать'
  },
  {
    id: 105,
    firstForm: 'forswear',
    firstFormTranscription: '[fɔːˈsweə]',
    secondForm: 'forswore',
    secondFormTranscription: '[fɔːˈswɔː]',
    thirdForm: 'forsworn',
    thirdFormTranscription: '[fɔːˈswɔːn]',
    translation: 'отрекаться'
  },
  {
    id: 106,
    firstForm: 'freeze',
    firstFormTranscription: '[frˈiːz]',
    secondForm: 'froze',
    secondFormTranscription: '[frouz]',
    thirdForm: 'frozen',
    thirdFormTranscription: '[frouzən]',
    translation: 'замерзать, замораживать'
  },
  {
    id: 107,
    firstForm: 'gainsay',
    firstFormTranscription: '[geɪnˈseɪ] ',
    secondForm: 'gainsaid',
    secondFormTranscription: '[geɪnˈseɪd]',
    thirdForm: 'gainsaid',
    thirdFormTranscription: '[geɪnˈseɪd]',
    translation: 'отрицать, противоречить'
  },
  {
    id: 108,
    firstForm: 'get',
    firstFormTranscription: '[gˈet]',
    secondForm: 'got',
    secondFormTranscription: '[gˈɒt]',
    thirdForm: 'got',
    thirdFormTranscription: '[gˈɒt]',
    translation: 'получать, становиться, добираться'
  },
  {
    id: 109,
    firstForm: 'gild',
    firstFormTranscription: '[gˈɪld]',
    secondForm: 'gilt',
    secondFormTranscription: '[gˈɪlt]',
    thirdForm: 'gilt',
    thirdFormTranscription: '[gˈɪlt]',
    translation: 'позолачивать'
  },
  {
    id: 110,
    firstForm: 'gird',
    firstFormTranscription: '[gˈɜːd]',
    secondForm: 'girt',
    secondFormTranscription: '[ɡɜːt]',
    thirdForm: 'girt',
    thirdFormTranscription: '[ɡɜːt]',
    translation: 'подпоясывать, опоясывать'
  },
  {
    id: 111,
    firstForm: 'give',
    firstFormTranscription: '[gˈɪv]',
    secondForm: 'gave',
    secondFormTranscription: '[gˈeɪːv]',
    thirdForm: 'given',
    thirdFormTranscription: '[gˈɪvn̩]',
    translation: 'дать'
  },
  {
    id: 112,
    firstForm: 'gnaw',
    firstFormTranscription: '[nɔː]',
    secondForm: 'gnawed',
    secondFormTranscription: '[nɔ:d]',
    thirdForm: 'gnawn',
    thirdFormTranscription: '[nɔ:n]',
    translation: 'грызть, глодать'
  },
  {
    id: 113,
    firstForm: 'go',
    firstFormTranscription: '[gou]',
    secondForm: 'went',
    secondFormTranscription: '[wˈent]',
    thirdForm: 'gone',
    thirdFormTranscription: '[gˈɒn]',
    translation: 'идти'
  },
  {
    id: 114,
    firstForm: 'grave',
    firstFormTranscription: '[grˈeɪːv]',
    secondForm: 'graved',
    secondFormTranscription: '[grˈeɪːvd]',
    thirdForm: 'graven',
    thirdFormTranscription: '[ˈɡreɪv(ə)n]',
    translation: 'гравировать'
  },
  {
    id: 115,
    firstForm: 'grind',
    firstFormTranscription: '[grˈaɪnd]',
    secondForm: 'ground',
    secondFormTranscription: '[grˈaʊːnd]',
    thirdForm: 'ground',
    thirdFormTranscription: '[grˈaʊːnd]',
    translation: 'молоть'
  },
  {
    id: 116,
    firstForm: 'grow',
    firstFormTranscription: '[grou]',
    secondForm: 'grew',
    secondFormTranscription: '[grˈuː]',
    thirdForm: 'grown',
    thirdFormTranscription: '[groun]',
    translation: 'расти'
  },
  {
    id: 117,
    firstForm: 'hang',
    firstFormTranscription: '[hˈæŋ]',
    secondForm: 'hung',
    secondFormTranscription: '[hˈʌŋ]',
    thirdForm: 'hung',
    thirdFormTranscription: '[hˈʌŋ]',
    translation: 'вешать, висеть'
  },
  {
    id: 118,
    firstForm: 'have  (has)',
    firstFormTranscription: '[hˈæv]  [hˈæz]',
    secondForm: 'had',
    secondFormTranscription: '[hˈæd]',
    thirdForm: 'had',
    thirdFormTranscription: '[hˈæd]',
    translation: 'иметь, обладать'
  },
  {
    id: 119,
    firstForm: 'hear',
    firstFormTranscription: '[hˈɪəː]',
    secondForm: 'heard',
    secondFormTranscription: '[hˈɜːd]',
    thirdForm: 'heard',
    thirdFormTranscription: '[hˈɜːd]',
    translation: 'слышать, услышать'
  },
  {
    id: 120,
    firstForm: 'heave',
    firstFormTranscription: '[hˈiːv]',
    secondForm: 'hove',
    secondFormTranscription: '[houv]',
    thirdForm: 'hove',
    thirdFormTranscription: '[houv]',
    translation: 'подымать'
  },
  {
    id: 121,
    firstForm: 'hew',
    firstFormTranscription: '[hjˈuː]',
    secondForm: 'hewed',
    secondFormTranscription: '[hjˈuːd]',
    thirdForm: 'hewn',
    thirdFormTranscription: '[hjuːn]',
    translation: 'рубить, тесать'
  },
  {
    id: 122,
    firstForm: 'hide',
    firstFormTranscription: '[hˈaɪd]',
    secondForm: 'hid',
    secondFormTranscription: '[hˈɪd]',
    thirdForm: 'hidden',
    thirdFormTranscription: '[hˈɪdn̩]',
    translation: 'прятать, скрывать'
  },
  {
    id: 123,
    firstForm: 'hit',
    firstFormTranscription: '[hˈɪt]',
    secondForm: 'hit',
    secondFormTranscription: '[hˈɪt]',
    thirdForm: 'hit',
    thirdFormTranscription: '[hˈɪt]',
    translation: 'ударить'
  },
  {
    id: 124,
    firstForm: 'hoist',
    firstFormTranscription: '[ʹhɔıst]',
    secondForm: 'hoist',
    secondFormTranscription: '[ʹhɔıst]',
    thirdForm: 'hoist',
    thirdFormTranscription: '[ʹhɔıst]',
    translation: 'поднимать'
  },
  {
    id: 125,
    firstForm: 'hold',
    firstFormTranscription: '[hould]',
    secondForm: 'held',
    secondFormTranscription: '[hˈeld]',
    thirdForm: 'held',
    thirdFormTranscription: '[hˈeld]',
    translation: 'держать'
  },
  {
    id: 126,
    firstForm: 'hurt',
    firstFormTranscription: '[hˈɜːt]',
    secondForm: 'hurt',
    secondFormTranscription: '[hˈɜːt]',
    thirdForm: 'hurt',
    thirdFormTranscription: '[hˈɜːt]',
    translation: 'причинить боль'
  },
  {
    id: 127,
    firstForm: 'indwell',
    firstFormTranscription: '[ˌɪnˈdwel] ',
    secondForm: 'indwelt',
    secondFormTranscription: '[ˌɪnˈdwelt]',
    thirdForm: 'indwelt',
    thirdFormTranscription: '[ˌɪnˈdwelt]',
    translation: 'обитать, проживать'
  },
  {
    id: 128,
    firstForm: 'inlay',
    firstFormTranscription: '[ˈɪnleɪ] ',
    secondForm: 'inlaid',
    secondFormTranscription: '[ɪnˈleɪd]',
    thirdForm: 'inlaid',
    thirdFormTranscription: '[ɪnˈleɪd]',
    translation: 'вкладывать, выстилать'
  },
  {
    id: 129,
    firstForm: 'input',
    firstFormTranscription: '[ˈɪnpʊt]',
    secondForm: 'input',
    secondFormTranscription: '[ˈɪnpʊt]',
    thirdForm: 'input',
    thirdFormTranscription: '[ˈɪnpʊt]',
    translation: 'вводить'
  },
  {
    id: 130,
    firstForm: 'inset',
    firstFormTranscription: '[ˈɪnset]',
    secondForm: 'inset',
    secondFormTranscription: '[ˈɪnset]',
    thirdForm: 'inset',
    thirdFormTranscription: '[ˈɪnset]',
    translation: 'вставлять, вкладывать'
  },
  {
    id: 131,
    firstForm: 'interbreed',
    firstFormTranscription: '[ˌɪntə(ː)ˈbriːd]',
    secondForm: 'interbred',
    secondFormTranscription: '[ɪntəbrˈed]',
    thirdForm: 'interbred',
    thirdFormTranscription: '[ɪntəbrˈed]',
    translation: 'скрещивать'
  },
  {
    id: 132,
    firstForm: 'intercut',
    firstFormTranscription: '[ˈɪnəkʌt]',
    secondForm: 'intercut',
    secondFormTranscription: '[ˈɪnəkʌt]',
    thirdForm: 'intercut',
    thirdFormTranscription: '[ˈɪnəkʌt]',
    translation: 'прерывать, разрывать'
  },
  {
    id: 133,
    firstForm: 'interweave',
    firstFormTranscription: '[ˌɪntə(ː)ˈwiːv]',
    secondForm: 'interwove',
    secondFormTranscription: '[ˌɪntə(ː)ˈwouv]',
    thirdForm: 'interwoven',
    thirdFormTranscription: '[ˌɪntə(ː)ˈwouən]',
    translation: 'вплетать, воткать'
  },
  {
    id: 134,
    firstForm: 'keep',
    firstFormTranscription: '[kˈiːp]',
    secondForm: 'kept',
    secondFormTranscription: '[kˈept]',
    thirdForm: 'kept',
    thirdFormTranscription: '[kˈept]',
    translation: 'держать, хранить'
  },
  {
    id: 135,
    firstForm: 'kneel',
    firstFormTranscription: '[nˈiːl]',
    secondForm: 'knelt',
    secondFormTranscription: '[nˈelt]',
    thirdForm: 'knelt',
    thirdFormTranscription: '[nˈelt]',
    translation: 'стоять на коленях'
  },
  {
    id: 136,
    firstForm: 'knit',
    firstFormTranscription: '[nɪt]',
    secondForm: 'knit',
    secondFormTranscription: '[nɪt]',
    thirdForm: 'knit',
    thirdFormTranscription: '[nɪt]',
    translation: 'вязать'
  },
  {
    id: 137,
    firstForm: 'know',
    firstFormTranscription: '[nou]',
    secondForm: 'knew',
    secondFormTranscription: '[njˈuː]',
    thirdForm: 'known',
    thirdFormTranscription: '[noun]',
    translation: 'знать'
  },
  {
    id: 138,
    firstForm: 'lay',
    firstFormTranscription: '[lˈeɪː]',
    secondForm: 'laid',
    secondFormTranscription: '[lˈeɪːd]',
    thirdForm: 'laid',
    thirdFormTranscription: '[lˈeɪːd]',
    translation: 'класть'
  },
  {
    id: 139,
    firstForm: 'lead',
    firstFormTranscription: '[liːd]',
    secondForm: 'led',
    secondFormTranscription: '[lˈed]',
    thirdForm: 'led',
    thirdFormTranscription: '[lˈed]',
    translation: 'вести'
  },
  {
    id: 140,
    firstForm: 'lean',
    firstFormTranscription: '[lˈiːn]',
    secondForm: 'leant',
    secondFormTranscription: '[lˈent]',
    thirdForm: 'leant',
    thirdFormTranscription: '[lˈent]',
    translation: 'опираться, прислоняться'
  },
  {
    id: 141,
    firstForm: 'leap',
    firstFormTranscription: '[lˈiːp]',
    secondForm: 'leapt',
    secondFormTranscription: '[lˈept]',
    thirdForm: 'leapt',
    thirdFormTranscription: '[lˈept]',
    translation: 'прыгать, скакать'
  },
  {
    id: 142,
    firstForm: 'learn',
    firstFormTranscription: '[lˈɜːn]',
    secondForm: 'learnt',
    secondFormTranscription: '[lˈɜːnt]',
    thirdForm: 'learnt',
    thirdFormTranscription: '[lˈɜːnt]',
    translation: 'изучать, учить, узнавать'
  },
  {
    id: 143,
    firstForm: 'leave',
    firstFormTranscription: '[lˈiːv]',
    secondForm: 'left',
    secondFormTranscription: '[lˈeft]',
    thirdForm: 'left',
    thirdFormTranscription: '[lˈeft]',
    translation: 'оставить, уйти'
  },
  {
    id: 144,
    firstForm: 'lend',
    firstFormTranscription: '[lˈend]',
    secondForm: 'lent',
    secondFormTranscription: '[lˈent]',
    thirdForm: 'lent',
    thirdFormTranscription: '[lˈent]',
    translation: 'давать взаймы'
  },
  {
    id: 145,
    firstForm: 'let',
    firstFormTranscription: '[lˈet]',
    secondForm: 'let',
    secondFormTranscription: '[lˈet]',
    thirdForm: 'let',
    thirdFormTranscription: '[lˈet]',
    translation: 'позволять'
  },
  {
    id: 146,
    firstForm: 'lie',
    firstFormTranscription: '[lˈaɪ]',
    secondForm: 'lay',
    secondFormTranscription: '[lˈeɪː]',
    thirdForm: 'lain',
    thirdFormTranscription: '[lˈeɪːn]',
    translation: 'лежать'
  },
  {
    id: 147,
    firstForm: 'light',
    firstFormTranscription: '[lˈaɪt]',
    secondForm: 'lit',
    secondFormTranscription: '[lˈɪt]',
    thirdForm: 'lit',
    thirdFormTranscription: '[lˈɪt]',
    translation: 'зажигать, освещать'
  },
  {
    id: 148,
    firstForm: 'lose',
    firstFormTranscription: '[lˈuːz]',
    secondForm: 'lost',
    secondFormTranscription: '[lˈɒst]',
    thirdForm: 'lost',
    thirdFormTranscription: '[lˈɒst]',
    translation: 'терять'
  },
  {
    id: 149,
    firstForm: 'make',
    firstFormTranscription: '[mˈeɪːk]',
    secondForm: 'made',
    secondFormTranscription: '[mˈeɪːd]',
    thirdForm: 'made',
    thirdFormTranscription: '[mˈeɪːd]',
    translation: 'делать, производить, заставлять'
  },
  {
    id: 150,
    firstForm: 'may',
    firstFormTranscription: '[mˈeɪː]',
    secondForm: 'might',
    secondFormTranscription: '[mˈaɪt]',
    thirdForm: 'might',
    thirdFormTranscription: '[mˈaɪt]',
    translation: 'мочь, иметь возможность'
  },
  {
    id: 151,
    firstForm: 'mean',
    firstFormTranscription: '[mˈiːn]',
    secondForm: 'meant',
    secondFormTranscription: '[mˈent]',
    thirdForm: 'meant',
    thirdFormTranscription: '[mˈent]',
    translation: 'означать, иметь в виду'
  },
  {
    id: 152,
    firstForm: 'meet',
    firstFormTranscription: '[mˈiːt]',
    secondForm: 'met',
    secondFormTranscription: '[mˈet]',
    thirdForm: 'met',
    thirdFormTranscription: '[mˈet]',
    translation: 'встречать'
  },
  {
    id: 153,
    firstForm: 'melt',
    firstFormTranscription: '[melt]',
    secondForm: 'melted',
    secondFormTranscription: '[ˈmeltɪd]',
    thirdForm: 'molten',
    thirdFormTranscription: '[ˈmoult(ə)n]',
    translation: 'плавить'
  },
  {
    id: 154,
    firstForm: 'miscast',
    firstFormTranscription: '[mɪskˈɑːst]',
    secondForm: 'miscast',
    secondFormTranscription: '[mɪskˈɑːst]',
    thirdForm: 'miscast',
    thirdFormTranscription: '[mɪskˈɑːst]',
    translation: 'неправильно распределять роли'
  },
  {
    id: 155,
    firstForm: 'mishear',
    firstFormTranscription: '[ˌmɪsˈhɪəː] ',
    secondForm: 'misheard',
    secondFormTranscription: '[ˌmɪsˈhɜːd]',
    thirdForm: 'misheard',
    thirdFormTranscription: '[ˌmɪsˈhɜːd]',
    translation: 'ослышаться'
  },
  {
    id: 156,
    firstForm: 'mislay',
    firstFormTranscription: '[mɪsˈleɪ] ',
    secondForm: 'mislaid',
    secondFormTranscription: '[mɪsˈleɪd]',
    thirdForm: 'mislaid',
    thirdFormTranscription: '[mɪsˈleɪd]',
    translation: 'класть не на место, затерять'
  },
  {
    id: 157,
    firstForm: 'mislead',
    firstFormTranscription: '[mɪsˈliːd]',
    secondForm: 'misled',
    secondFormTranscription: '[mɪsˈled]',
    thirdForm: 'misled',
    thirdFormTranscription: '[mɪsˈled]',
    translation: 'ввести в заблуждение'
  },
  {
    id: 158,
    firstForm: 'misread',
    firstFormTranscription: '[mɪsrˈiːd]',
    secondForm: 'misread',
    secondFormTranscription: '[mɪsrˈed]',
    thirdForm: 'misread',
    thirdFormTranscription: '[mɪsrˈed]',
    translation: 'неправильно истолковывать'
  },
  {
    id: 159,
    firstForm: 'misspeak',
    firstFormTranscription: '[mɪsspˈiːk]',
    secondForm: 'misspoke',
    secondFormTranscription: '[mɪspouk]',
    thirdForm: 'misspoken',
    thirdFormTranscription: '[mɪspoukən]',
    translation: 'говорить, произносить неправильно'
  },
  {
    id: 160,
    firstForm: 'misspell',
    firstFormTranscription: '[ˈmɪsˈspel] ',
    secondForm: 'misspelt',
    secondFormTranscription: '[ˈmɪsˈspelt]',
    thirdForm: 'misspelt',
    thirdFormTranscription: '[ˈmɪsˈspelt]',
    translation: 'писать с ошибками'
  },
  {
    id: 161,
    firstForm: 'misspend',
    firstFormTranscription: '[ˈmɪsˈspend]',
    secondForm: 'misspent',
    secondFormTranscription: '[ˈmɪsˈspent]',
    thirdForm: 'misspent',
    thirdFormTranscription: '[ˈmɪsˈspent]',
    translation: 'транжирить'
  },
  {
    id: 162,
    firstForm: 'mistake',
    firstFormTranscription: '[mɪsˈteɪk]',
    secondForm: 'mistook',
    secondFormTranscription: '[mɪsˈtʊk]',
    thirdForm: 'mistaken',
    thirdFormTranscription: '[mɪsˈteɪkən]',
    translation: 'ошибаться'
  },
  {
    id: 163,
    firstForm: 'mow',
    firstFormTranscription: '[mou]',
    secondForm: 'mowed',
    secondFormTranscription: '[moud]',
    thirdForm: 'mown',
    thirdFormTranscription: '[məʋn]',
    translation: 'косить, жать'
  },
  {
    id: 164,
    firstForm: 'nip',
    firstFormTranscription: '[nɪp]',
    secondForm: 'nipt',
    secondFormTranscription: '[nɪpt]',
    thirdForm: 'nipt',
    thirdFormTranscription: '[nɪpt]',
    translation: 'ущипнуть, щипать'
  },
  {
    id: 165,
    firstForm: 'offset',
    firstFormTranscription: '[ˈɒfset]',
    secondForm: 'offset',
    secondFormTranscription: '[ˈɒfset]',
    thirdForm: 'offset',
    thirdFormTranscription: '[ˈɒfset]',
    translation: 'возмещать, компенсировать'
  },
  {
    id: 166,
    firstForm: 'outdo',
    firstFormTranscription: '[aʊtˈduː]',
    secondForm: 'outdid',
    secondFormTranscription: '[aʊtˈdɪd]',
    thirdForm: 'outdone',
    thirdFormTranscription: '[aʊtˈdʌn]',
    translation: 'превосходить'
  },
  {
    id: 167,
    firstForm: 'outfight',
    firstFormTranscription: '[aʊːtfˈaɪt]',
    secondForm: 'outfought',
    secondFormTranscription: '[aʊːtfˈɔːt]',
    thirdForm: 'outfought',
    thirdFormTranscription: '[aʊːtfˈɔːt]',
    translation: 'побеждать'
  },
  {
    id: 168,
    firstForm: 'outgrow',
    firstFormTranscription: '[aʊtˈgrou] ',
    secondForm: 'outgrew',
    secondFormTranscription: '[aʊtˈgruː]',
    thirdForm: 'outgrown',
    thirdFormTranscription: '[aʊtˈgroun]',
    translation: 'вырастать из, перерасти'
  },
  {
    id: 169,
    firstForm: 'output',
    firstFormTranscription: '[ˈaʊːtpʊt]',
    secondForm: 'output',
    secondFormTranscription: '[ˈaʊːtpʊt]',
    thirdForm: 'output',
    thirdFormTranscription: '[ˈaʊːtpʊt]',
    translation: 'выходить'
  },
  {
    id: 170,
    firstForm: 'outrun',
    firstFormTranscription: '[aʊtˈrʌn]',
    secondForm: 'outran',
    secondFormTranscription: '[aʊtˈræn]',
    thirdForm: 'outrun',
    thirdFormTranscription: '[aʊtˈrʌn]',
    translation: 'перегонять, опережать'
  },
  {
    id: 171,
    firstForm: 'outsell',
    firstFormTranscription: '[aʊtˈsel]',
    secondForm: 'outsold',
    secondFormTranscription: '[aʊtˈsould]',
    thirdForm: 'outsold',
    thirdFormTranscription: '[aʊtˈsould]',
    translation: 'продавать больше или дороже'
  },
  {
    id: 172,
    firstForm: 'outshine',
    firstFormTranscription: '[aʊːtʃˈaɪn]',
    secondForm: 'outshone',
    secondFormTranscription: '[aʊːtʃˈɒn]',
    thirdForm: 'outshone',
    thirdFormTranscription: '[aʊːtʃˈɒn]',
    translation: 'затмить, превзойти'
  },
  {
    id: 173,
    firstForm: 'outspend',
    firstFormTranscription: '[ətspˈend]',
    secondForm: 'outspent',
    secondFormTranscription: '[ətspˈent]',
    thirdForm: 'outspent',
    thirdFormTranscription: '[ətspˈent]',
    translation: 'перерасходовать'
  },
  {
    id: 174,
    firstForm: 'outthink',
    firstFormTranscription: '[aʊːtˈθɪŋk]',
    secondForm: 'outthought',
    secondFormTranscription: '[aʊːtˈθɔːt] ',
    thirdForm: 'outthought',
    thirdFormTranscription: '[aʊːtˈθɔːt] ',
    translation: 'перехитрить, оказаться умнее'
  },
  {
    id: 175,
    firstForm: 'overbuild',
    firstFormTranscription: '[ˌouvəˈbɪld]',
    secondForm: 'overbuilt',
    secondFormTranscription: '[ˌouvəˈbɪlt]',
    thirdForm: 'overbuilt',
    thirdFormTranscription: '[ˌouvəˈbɪlt]',
    translation: 'чрезмерно застраивать'
  },
  {
    id: 176,
    firstForm: 'overcome',
    firstFormTranscription: '[ˌouvəˈkʌm]',
    secondForm: 'overcame',
    secondFormTranscription: '[ˌouvəˈkeɪm]',
    thirdForm: 'overcome',
    thirdFormTranscription: '[ˌouvəˈkʌm]',
    translation: 'побороть, победить, преодолеть'
  },
  {
    id: 177,
    firstForm: 'overdo',
    firstFormTranscription: '[ˌouvəˈduː]',
    secondForm: 'overdid',
    secondFormTranscription: '[ˌouvəˈdɪd]',
    thirdForm: 'overdone',
    thirdFormTranscription: '[ˌouvəˈdʌn]',
    translation: 'перестараться, переусердствовать'
  },
  {
    id: 178,
    firstForm: 'overdraw',
    firstFormTranscription: '[ˌouvəˈdrɔː]',
    secondForm: 'overdrew',
    secondFormTranscription: '[ˌouvəˈdruː]',
    thirdForm: 'overdrawn',
    thirdFormTranscription: '[ˌouvəˈdrɔːn]',
    translation: 'превысить остаток счёта в банке'
  },
  {
    id: 179,
    firstForm: 'overeat',
    firstFormTranscription: '[ˌouvəˈriːt]',
    secondForm: 'overate',
    secondFormTranscription: '[ˌouvəˈreɪt]',
    thirdForm: 'overeaten',
    thirdFormTranscription: '[ˌouvəˈriːtn]',
    translation: 'переедать, объедаться, обжираться'
  },
  {
    id: 180,
    firstForm: 'overfeed',
    firstFormTranscription: '[ˌouvəˈfiːd]',
    secondForm: 'overfed',
    secondFormTranscription: '[ˌouvəˈfed]',
    thirdForm: 'overfed',
    thirdFormTranscription: '[ˌouvəˈfed]',
    translation: 'перекармливать'
  },
  {
    id: 181,
    firstForm: 'overflow',
    firstFormTranscription: '[ʹəʋvəfləʋ]',
    secondForm: 'overflown',
    secondFormTranscription: '[͵əʋvəʹfləʋn]',
    thirdForm: 'overflown',
    thirdFormTranscription: '[͵əʋvəʹfləʋn]',
    translation: 'переполняться, переливаться'
  },
  {
    id: 182,
    firstForm: 'overgrow',
    firstFormTranscription: '[ˌouvəˈgrou]',
    secondForm: 'overgrew',
    secondFormTranscription: '[ˌouvəˈgruː]',
    thirdForm: 'overgrown',
    thirdFormTranscription: '[ˌouvəˈgroun]',
    translation: 'зарастать'
  },
  {
    id: 183,
    firstForm: 'overhang',
    firstFormTranscription: '[ouvəhæŋ]',
    secondForm: 'overhung',
    secondFormTranscription: '[ouːvəhˈʌŋ]',
    thirdForm: 'overhung',
    thirdFormTranscription: '[ouːvəhˈʌŋ]',
    translation: 'выступать над, свешиваться, нависать'
  },
  {
    id: 184,
    firstForm: 'overhear',
    firstFormTranscription: '[ˌouvəˈhɪəː]',
    secondForm: 'overheard',
    secondFormTranscription: '[ˌouvəˈhɜːd]',
    thirdForm: 'overheard',
    thirdFormTranscription: '[ˌouvəˈhɜːd]',
    translation: 'подслушивать, нечаянно услышать'
  },
  {
    id: 185,
    firstForm: 'overlay',
    firstFormTranscription: '[ˈouvəleɪ] ',
    secondForm: 'overlaid',
    secondFormTranscription: '[ˌouvəˈleɪd]',
    thirdForm: 'overlaid',
    thirdFormTranscription: '[ˌouvəˈleɪd]',
    translation: 'покрывать'
  },
  {
    id: 186,
    firstForm: 'overlie',
    firstFormTranscription: '[ˌouvəˈlaɪ]',
    secondForm: 'overlay',
    secondFormTranscription: '[ˈouvəleɪ]',
    thirdForm: 'overlain',
    thirdFormTranscription: '[ˌouvəˈleɪn]',
    translation: 'лежать над'
  },
  {
    id: 187,
    firstForm: 'overpay',
    firstFormTranscription: '[ˌouvəˈpeɪ] ',
    secondForm: 'overpaid',
    secondFormTranscription: '[ˌouvəˈpeɪd]',
    thirdForm: 'overpaid',
    thirdFormTranscription: '[ˌouvəˈpeɪd]',
    translation: 'переплачивать'
  },
  {
    id: 188,
    firstForm: 'override',
    firstFormTranscription: '[ˌouvəˈraɪd]',
    secondForm: 'overrode',
    secondFormTranscription: '[ˌouvəˈroud]',
    thirdForm: 'overridden',
    thirdFormTranscription: '[ˌouvəˈrɪdn]',
    translation: 'переезжать, задавить, отвергать'
  },
  {
    id: 189,
    firstForm: 'overrun',
    firstFormTranscription: '[ˌouvəˈrʌn]',
    secondForm: 'overran',
    secondFormTranscription: '[ˌouvəˈræn]',
    thirdForm: 'overrun',
    thirdFormTranscription: '[ˌouvəˈrʌn]',
    translation: 'переполнять, наводнять'
  },
  {
    id: 190,
    firstForm: 'oversee',
    firstFormTranscription: '[ˌouvəˈsiː]',
    secondForm: 'oversaw',
    secondFormTranscription: '[ˌouvəˈsɔː]',
    thirdForm: 'overseen',
    thirdFormTranscription: '[ˌouvəˈsiːn]',
    translation: 'надзирать, наблюдать'
  },
  {
    id: 191,
    firstForm: 'oversell',
    firstFormTranscription: '[ˌouvəˈsel]',
    secondForm: 'oversold',
    secondFormTranscription: '[ˌouvəˈsould]',
    thirdForm: 'oversold',
    thirdFormTranscription: '[ˌouvəˈsould]',
    translation: 'распродавать'
  },
  {
    id: 192,
    firstForm: 'overshoot',
    firstFormTranscription: '[ouːvəʃˈuːt]',
    secondForm: 'overshot',
    secondFormTranscription: '[ˌouvəˈʃɒt]',
    thirdForm: 'overshot',
    thirdFormTranscription: '[ˌouvəˈʃɒt]',
    translation: 'промахнуться'
  },
  {
    id: 193,
    firstForm: 'oversleep',
    firstFormTranscription: '[ˌouvəˈsliːp] ',
    secondForm: 'overslept',
    secondFormTranscription: '[ˌouvəˈslept]',
    thirdForm: 'overslept',
    thirdFormTranscription: '[ˌouvəˈslept]',
    translation: 'проспать, заспаться'
  },
  {
    id: 194,
    firstForm: 'overspend',
    firstFormTranscription: '[ˌouvəˈspend]',
    secondForm: 'overspent',
    secondFormTranscription: '[ˌouvəˈspent]',
    thirdForm: 'overspent',
    thirdFormTranscription: '[ˌouvəˈspent]',
    translation: 'перерасходовать, сорить деньгами'
  },
  {
    id: 195,
    firstForm: 'overstay',
    firstFormTranscription: '[͵əʋvəʹsteı]',
    secondForm: 'overstay',
    secondFormTranscription: '[͵əʋvəʹsteı]',
    thirdForm: 'overstay',
    thirdFormTranscription: '[͵əʋvəʹsteı]',
    translation: 'загоститься, засидеться'
  },
  {
    id: 196,
    firstForm: 'overtake',
    firstFormTranscription: '[ˌouvəˈteɪk]',
    secondForm: 'overtook',
    secondFormTranscription: '[ˌouvəˈtʊk]',
    thirdForm: 'overtaken',
    thirdFormTranscription: '[ˌouvəˈteɪkən]',
    translation: 'догонять, перегонять'
  },
  {
    id: 197,
    firstForm: 'overthrow',
    firstFormTranscription: '[ˈouvəθrou]',
    secondForm: 'overthrew',
    secondFormTranscription: '[ˌouvəˈθruː]',
    thirdForm: 'overthrown',
    thirdFormTranscription: '[ˌouvəˈθroun]',
    translation: 'свергать, ниспровергать'
  },
  {
    id: 198,
    firstForm: 'overwrite',
    firstFormTranscription: '[ˌouvəˈraɪt]',
    secondForm: 'overwrote',
    secondFormTranscription: '[ˌouvəˈrout]',
    thirdForm: 'overwritten',
    thirdFormTranscription: '[ˌouvəˈrɪtn]',
    translation: 'переписывать'
  },
  {
    id: 199,
    firstForm: 'partake',
    firstFormTranscription: '[pɑːˈteɪk]',
    secondForm: 'partook',
    secondFormTranscription: '[pɑːˈtʊk]',
    thirdForm: 'partaken',
    thirdFormTranscription: '[pɑːˈteɪkən]',
    translation: 'принимать участие'
  },
  {
    id: 200,
    firstForm: 'pay',
    firstFormTranscription: '[pˈeɪː]',
    secondForm: 'paid',
    secondFormTranscription: '[pˈeɪːd]',
    thirdForm: 'paid',
    thirdFormTranscription: '[pˈeɪːd]',
    translation: 'платить'
  },
  {
    id: 201,
    firstForm: 'plead',
    firstFormTranscription: '[plˈiːd]',
    secondForm: 'pled',
    secondFormTranscription: '[pled]',
    thirdForm: 'pled',
    thirdFormTranscription: '[pled]',
    translation: 'выступать в суде'
  },
  {
    id: 202,
    firstForm: 'prepay',
    firstFormTranscription: '[priːˈpeɪ] ',
    secondForm: 'prepaid',
    secondFormTranscription: '[ˌpriːˈpeɪd]',
    thirdForm: 'prepaid',
    thirdFormTranscription: '[ˌpriːˈpeɪd]',
    translation: 'платить вперед'
  },
  {
    id: 203,
    firstForm: 'proofread',
    firstFormTranscription: '[prˈuːfriːd]',
    secondForm: 'proofread',
    secondFormTranscription: '[prˈuːfred]',
    thirdForm: 'proofread',
    thirdFormTranscription: '[prˈuːfred]',
    translation: 'корректировать текст'
  },
  {
    id: 204,
    firstForm: 'prove',
    firstFormTranscription: '[prˈuːv]',
    secondForm: 'proved',
    secondFormTranscription: '[prˈuːvd]',
    thirdForm: 'proven',
    thirdFormTranscription: '[pru:vn]',
    translation: 'доказывать, оказаться'
  },
  {
    id: 205,
    firstForm: 'put',
    firstFormTranscription: '[pˈʊt]',
    secondForm: 'put',
    secondFormTranscription: '[pˈʊt]',
    thirdForm: 'put',
    thirdFormTranscription: '[pˈʊt]',
    translation: 'класть'
  },
  {
    id: 206,
    firstForm: 'quit',
    firstFormTranscription: '[kwˈɪt]',
    secondForm: 'quit',
    secondFormTranscription: '[kwˈɪt]',
    thirdForm: 'quit',
    thirdFormTranscription: '[kwˈɪt]',
    translation: 'покидать, оставлять, выходить'
  },
  {
    id: 207,
    firstForm: 'read',
    firstFormTranscription: '[ri:d]',
    secondForm: 'read',
    secondFormTranscription: '[red]',
    thirdForm: 'read',
    thirdFormTranscription: '[red]',
    translation: 'читать'
  },
  {
    id: 208,
    firstForm: 'rebroadcast',
    firstFormTranscription: '[əbrˈɔːdkɑːst]',
    secondForm: 'rebroadcast',
    secondFormTranscription: '[əbrˈɔːdkɑːst]',
    thirdForm: 'rebroadcast',
    thirdFormTranscription: '[əbrˈɔːdkɑːst]',
    translation: 'транслировать вновь, ретранслировать'
  },
  {
    id: 209,
    firstForm: 'rebuild',
    firstFormTranscription: '[ˌriːˈbɪld]',
    secondForm: 'rebuilt',
    secondFormTranscription: '[ˌriːˈbɪlt]',
    thirdForm: 'rebuilt',
    thirdFormTranscription: '[ˌriːˈbɪlt]',
    translation: 'перестроить'
  },
  {
    id: 210,
    firstForm: 'recast',
    firstFormTranscription: '[rikˈɑːst]',
    secondForm: 'recast',
    secondFormTranscription: '[rikˈɑːst]',
    thirdForm: 'recast',
    thirdFormTranscription: '[rikˈɑːst]',
    translation: 'видоизменять, преобразовывать'
  },
  {
    id: 211,
    firstForm: 'redraw',
    firstFormTranscription: '[ˌriːˈdrɔː]',
    secondForm: 'redrew',
    secondFormTranscription: '[ˌriːˈdruː]',
    thirdForm: 'redrawn',
    thirdFormTranscription: '[ˌriːˈdrɔːn]',
    translation: 'выставлять обратный переводный вексель'
  },
  {
    id: 212,
    firstForm: 'refit',
    firstFormTranscription: '[rˈiːfɪt]',
    secondForm: 'refit',
    secondFormTranscription: '[rˈiːfɪt]',
    thirdForm: 'refit',
    thirdFormTranscription: '[rˈiːfɪt]',
    translation: 'переоборудовать'
  },
  {
    id: 213,
    firstForm: 'regrow',
    firstFormTranscription: '[ˌriːˈgrou]',
    secondForm: 'regrew',
    secondFormTranscription: '[ˌriːˈgruː]',
    thirdForm: 'regrown',
    thirdFormTranscription: '[ˌriːˈgroun]',
    translation: 'вырастать повторно'
  },
  {
    id: 214,
    firstForm: 'rehear',
    firstFormTranscription: '[ˌriːˈhɪəː] ',
    secondForm: 'reheard',
    secondFormTranscription: '[ˌriːˈhɜːd]',
    thirdForm: 'reheard',
    thirdFormTranscription: '[ˌriːˈhɜːd]',
    translation: 'слушать вторично'
  },
  {
    id: 215,
    firstForm: 'relearn',
    firstFormTranscription: '[ˌriːˈlɜːn] ',
    secondForm: 'relearnt',
    secondFormTranscription: '[ˌriːˈlɜːnt]',
    thirdForm: 'relearnt',
    thirdFormTranscription: '[ˌriːˈlɜːnt]',
    translation: 'переучиваться, менять квалификацию'
  },
  {
    id: 216,
    firstForm: 'remake',
    firstFormTranscription: '[ˌriːˈmeɪk] ',
    secondForm: 'remade',
    secondFormTranscription: '[ˌriːˈmeɪd]',
    thirdForm: 'remade',
    thirdFormTranscription: '[ˌriːˈmeɪd]',
    translation: 'переделывать, пересоздавать'
  },
  {
    id: 217,
    firstForm: 'rend',
    firstFormTranscription: '[rˈend]',
    secondForm: 'rent',
    secondFormTranscription: '[rˈent]',
    thirdForm: 'rent',
    thirdFormTranscription: '[rˈent]',
    translation: 'раздирать'
  },
  {
    id: 218,
    firstForm: 'repay',
    firstFormTranscription: '[rɪˈpeɪ] ',
    secondForm: 'repaid',
    secondFormTranscription: '[riːˈpeɪd]',
    thirdForm: 'repaid',
    thirdFormTranscription: '[riːˈpeɪd]',
    translation: 'отдавать долг'
  },
  {
    id: 219,
    firstForm: 'reprove',
    firstFormTranscription: '[rɪˈpruːv] ',
    secondForm: 'reproved',
    secondFormTranscription: '[rɪˈpruːvd]',
    thirdForm: 'reproven',
    thirdFormTranscription: '[ˌriːˈpruːvən]',
    translation: 'упрекать, винить, бранить'
  },
  {
    id: 220,
    firstForm: 'reread',
    firstFormTranscription: '[rirˈiːd]',
    secondForm: 'reread',
    secondFormTranscription: '[rirˈed]',
    thirdForm: 'reread',
    thirdFormTranscription: '[rirˈed]',
    translation: 'перечитывать'
  },
  {
    id: 221,
    firstForm: 'rerun',
    firstFormTranscription: '[ˌriːˈrʌn]',
    secondForm: 'reran',
    secondFormTranscription: '[ˌriːˈræn]',
    thirdForm: 'rerun',
    thirdFormTranscription: '[ˌriːˈrʌn]',
    translation: 'показывать повторно'
  },
  {
    id: 222,
    firstForm: 'resell',
    firstFormTranscription: '[ˌriːˈsel]',
    secondForm: 'resold',
    secondFormTranscription: '[ˌriːˈsould]',
    thirdForm: 'resold',
    thirdFormTranscription: '[ˌriːˈsould]',
    translation: 'перепродавать'
  },
  {
    id: 223,
    firstForm: 'reset',
    firstFormTranscription: '[risˈet]',
    secondForm: 'reset',
    secondFormTranscription: '[risˈet]',
    thirdForm: 'reset',
    thirdFormTranscription: '[risˈet]',
    translation: 'возвращать в исходное состояние'
  },
  {
    id: 224,
    firstForm: 'reshoot',
    firstFormTranscription: '[rˈiːʃuːt]',
    secondForm: 'reshot',
    secondFormTranscription: '[ˌriːˈʃɒt] ',
    thirdForm: 'reshot',
    thirdFormTranscription: '[ˌriːˈʃɒt] ',
    translation: 'повторно фотографировать'
  },
  {
    id: 225,
    firstForm: 'retake',
    firstFormTranscription: '[riːˈteɪk]',
    secondForm: 'retook',
    secondFormTranscription: '[ˌriːˈtʊk]',
    thirdForm: 'retaken',
    thirdFormTranscription: '[ˌriːˈteɪkən]',
    translation: 'забирать, снова взять, занять, захватить'
  },
  {
    id: 226,
    firstForm: 'retell',
    firstFormTranscription: '[ˌriːˈtel] ',
    secondForm: 'retold',
    secondFormTranscription: '[ˌriːˈtould]',
    thirdForm: 'retold',
    thirdFormTranscription: '[ˌriːˈtould]',
    translation: 'пересказывать'
  },
  {
    id: 227,
    firstForm: 'rethink',
    firstFormTranscription: '[rˈiːθɪŋk]',
    secondForm: 'rethought',
    secondFormTranscription: '[ˌriːˈθɔːt] ',
    thirdForm: 'rethought',
    thirdFormTranscription: '[ˌriːˈθɔːt] ',
    translation: 'обдумать заново, передумать'
  },
  {
    id: 228,
    firstForm: 'retrofit',
    firstFormTranscription: '[rˈetrɒfɪt]',
    secondForm: 'retrofit',
    secondFormTranscription: '[rˈetrɒfɪt]',
    thirdForm: 'retrofit',
    thirdFormTranscription: '[rˈetrɒfɪt]',
    translation: 'модифицировать'
  },
  {
    id: 229,
    firstForm: 'rewind',
    firstFormTranscription: '[riwˈaɪnd]',
    secondForm: 'rewound',
    secondFormTranscription: '[ˌriːˈwaʊnd] ',
    thirdForm: 'rewound',
    thirdFormTranscription: '[ˌriːˈwaʊnd] ',
    translation: 'перематывать'
  },
  {
    id: 230,
    firstForm: 'rewrite',
    firstFormTranscription: '[ˌriːˈraɪt]',
    secondForm: 'rewrote',
    secondFormTranscription: '[ˌriːˈrout]',
    thirdForm: 'rewritten',
    thirdFormTranscription: '[ˌriːˈrɪtn]',
    translation: 'переписать'
  },
  {
    id: 231,
    firstForm: 'rid',
    firstFormTranscription: '[rˈɪd]',
    secondForm: 'rid',
    secondFormTranscription: '[rˈɪd]',
    thirdForm: 'rid',
    thirdFormTranscription: '[rˈɪd]',
    translation: 'избавляться'
  },
  {
    id: 232,
    firstForm: 'ride',
    firstFormTranscription: '[rˈaɪd]',
    secondForm: 'rode',
    secondFormTranscription: '[roud]',
    thirdForm: 'ridden',
    thirdFormTranscription: '[rˈɪdn̩]',
    translation: 'ездить верхом'
  },
  {
    id: 233,
    firstForm: 'ring',
    firstFormTranscription: '[rˈɪŋ]',
    secondForm: 'rang',
    secondFormTranscription: '[rˈæŋ]',
    thirdForm: 'rung',
    thirdFormTranscription: '[rʌŋ] ',
    translation: 'звенеть, звучать, звонить'
  },
  {
    id: 234,
    firstForm: 'rise',
    firstFormTranscription: '[rˈaɪz]',
    secondForm: 'rose',
    secondFormTranscription: '[rouz]',
    thirdForm: 'risen',
    thirdFormTranscription: '[rˈɪzn̩]',
    translation: 'подниматься, вставать'
  },
  {
    id: 235,
    firstForm: 'rive',
    firstFormTranscription: '[rˈaɪv]',
    secondForm: 'rived',
    secondFormTranscription: '[rˈaɪvd]',
    thirdForm: 'riven',
    thirdFormTranscription: '[rˈɪvn̩]',
    translation: 'разрывать, раскалывать, расщеплять, разрубать'
  },
  {
    id: 236,
    firstForm: 'rot',
    firstFormTranscription: '[rɒt]',
    secondForm: 'rotted',
    secondFormTranscription: '[rˈɒtɪd]',
    thirdForm: 'rotten',
    thirdFormTranscription: '[ˈrɒt(ə)n]',
    translation: 'гнить, гноить'
  },
  {
    id: 237,
    firstForm: 'run',
    firstFormTranscription: '[rˈʌn]',
    secondForm: 'ran',
    secondFormTranscription: '[rˈæn]',
    thirdForm: 'run',
    thirdFormTranscription: '[rʌn]',
    translation: 'бежать, течь'
  },
  {
    id: 238,
    firstForm: 'saw',
    firstFormTranscription: '[sˈɔː]',
    secondForm: 'sawed',
    secondFormTranscription: '[sˈɔːd]',
    thirdForm: 'sawn',
    thirdFormTranscription: '[sˈɔːn]',
    translation: 'пилить'
  },
  {
    id: 239,
    firstForm: 'say',
    firstFormTranscription: '[sˈeɪː]',
    secondForm: 'said',
    secondFormTranscription: '[sˈed]',
    thirdForm: 'said',
    thirdFormTranscription: '[sˈed]',
    translation: 'сказать'
  },
  {
    id: 240,
    firstForm: 'see',
    firstFormTranscription: '[sˈiː]',
    secondForm: 'saw',
    secondFormTranscription: '[sˈɔː]',
    thirdForm: 'seen',
    thirdFormTranscription: '[sˈiːn]',
    translation: 'смотреть, видеть'
  },
  {
    id: 241,
    firstForm: 'seek',
    firstFormTranscription: '[sˈiːk]',
    secondForm: 'sought',
    secondFormTranscription: '[sˈɔːt]',
    thirdForm: 'sought',
    thirdFormTranscription: '[sˈɔːt]',
    translation: 'искать'
  },
  {
    id: 242,
    firstForm: 'seethe',
    firstFormTranscription: '[siːð]',
    secondForm: 'sod',
    secondFormTranscription: '[sɒd]',
    thirdForm: 'sod',
    thirdFormTranscription: '[sɒd]',
    translation: 'кипеть, кипятить'
  },
  {
    id: 243,
    firstForm: 'sell',
    firstFormTranscription: '[sˈel]',
    secondForm: 'sold',
    secondFormTranscription: '[sould]',
    thirdForm: 'sold',
    thirdFormTranscription: '[sould]',
    translation: 'торговать, продавать'
  },
  {
    id: 244,
    firstForm: 'send',
    firstFormTranscription: '[sˈend]',
    secondForm: 'sent',
    secondFormTranscription: '[sˈent]',
    thirdForm: 'sent',
    thirdFormTranscription: '[sˈent]',
    translation: 'посылать,, отправлять'
  },
  {
    id: 245,
    firstForm: 'set',
    firstFormTranscription: '[sˈet]',
    secondForm: 'set',
    secondFormTranscription: '[sˈet]',
    thirdForm: 'set',
    thirdFormTranscription: '[sˈet]',
    translation: 'помещать, установить'
  },
  {
    id: 246,
    firstForm: 'sew',
    firstFormTranscription: '[sou]',
    secondForm: 'sewed',
    secondFormTranscription: '[soud]',
    thirdForm: 'sewn',
    thirdFormTranscription: '[səʋn]',
    translation: 'шить, сшивать, зашивать, пришивать'
  },
  {
    id: 247,
    firstForm: 'shake',
    firstFormTranscription: '[ʃˈeɪːk]',
    secondForm: 'shook',
    secondFormTranscription: '[ʃʋk]',
    thirdForm: 'shaken',
    thirdFormTranscription: '[ʃˈeɪːkən]',
    translation: 'трясти'
  },
  {
    id: 248,
    firstForm: 'shape',
    firstFormTranscription: '[ʃeɪp]',
    secondForm: 'shaped',
    secondFormTranscription: '[ʃeɪpt]',
    thirdForm: 'shapen',
    thirdFormTranscription: '[ʹʃeıpən]',
    translation: 'придавать форму'
  },
  {
    id: 249,
    firstForm: 'shave',
    firstFormTranscription: '[ʃˈeɪːv]',
    secondForm: 'shaved',
    secondFormTranscription: '[ʃˈeɪːvd]',
    thirdForm: 'shaven',
    thirdFormTranscription: '[ˈʃeɪv(ə)n]',
    translation: 'брить'
  },
  {
    id: 250,
    firstForm: 'shear',
    firstFormTranscription: '[ʃɪə]',
    secondForm: 'shore',
    secondFormTranscription: '[ʃɔː]',
    thirdForm: 'shorn',
    thirdFormTranscription: '[ʃɔːn]',
    translation: 'стричь'
  },
  {
    id: 251,
    firstForm: 'shed',
    firstFormTranscription: '[ʃˈed]',
    secondForm: 'shed',
    secondFormTranscription: '[ʃˈed]',
    thirdForm: 'shed',
    thirdFormTranscription: '[ʃˈed]',
    translation: 'проливать'
  },
  {
    id: 252,
    firstForm: 'shew',
    firstFormTranscription: '[ʃəʋ]',
    secondForm: 'shewed',
    secondFormTranscription: '[ʃəʋd]',
    thirdForm: 'shewn',
    thirdFormTranscription: '[ʃəʋn]',
    translation: 'показывать'
  },
  {
    id: 253,
    firstForm: 'shine',
    firstFormTranscription: '[ʃˈaɪn]',
    secondForm: 'shone',
    secondFormTranscription: '[ʃˈɒn]',
    thirdForm: 'shone',
    thirdFormTranscription: '[ʃˈɒn]',
    translation: 'светить, сиять'
  },
  {
    id: 254,
    firstForm: 'shit',
    firstFormTranscription: '[ʃɪt]',
    secondForm: 'shit',
    secondFormTranscription: '[ʃɪt]',
    thirdForm: 'shit',
    thirdFormTranscription: '[ʃɪt]',
    translation: 'гадить'
  },
  {
    id: 255,
    firstForm: 'shoe',
    firstFormTranscription: '[ʃˈuː]',
    secondForm: 'shod',
    secondFormTranscription: '[ʃˈɒd]',
    thirdForm: 'shod',
    thirdFormTranscription: '[ʃˈɒd]',
    translation: 'обувать, подковывать'
  },
  {
    id: 256,
    firstForm: 'shoot',
    firstFormTranscription: '[ʃˈuːt]',
    secondForm: 'shot',
    secondFormTranscription: '[ʃˈɒt]',
    thirdForm: 'shot',
    thirdFormTranscription: '[ʃˈɒt]',
    translation: 'стрелять'
  },
  {
    id: 257,
    firstForm: 'show',
    firstFormTranscription: '[ʃou]',
    secondForm: 'showed',
    secondFormTranscription: '[ʃoud]',
    thirdForm: 'shown',
    thirdFormTranscription: '[ʃoun]',
    translation: 'показывать'
  },
  {
    id: 258,
    firstForm: 'shred',
    firstFormTranscription: '[ʃrˈed]',
    secondForm: 'shred',
    secondFormTranscription: '[ʃrˈed]',
    thirdForm: 'shred',
    thirdFormTranscription: '[ʃrˈed]',
    translation: 'кромсать, расползаться, рвать, измельчать'
  },
  {
    id: 259,
    firstForm: 'shrink',
    firstFormTranscription: '[ʃrˈɪŋk]',
    secondForm: 'shrank',
    secondFormTranscription: '[ʃrˈæŋk]',
    thirdForm: 'shrunk',
    thirdFormTranscription: '[ʃrʌŋk] ',
    translation: 'сокращаться, сжиматься, съёживаться'
  },
  {
    id: 260,
    firstForm: 'shut',
    firstFormTranscription: '[ʃˈʌt]',
    secondForm: 'shut',
    secondFormTranscription: '[ʃˈʌt]',
    thirdForm: 'shut',
    thirdFormTranscription: '[ʃˈʌt]',
    translation: 'закрывать'
  },
  {
    id: 261,
    firstForm: 'sight-read',
    firstFormTranscription: '[sˈaɪt rˈiːd]',
    secondForm: 'sight-read',
    secondFormTranscription: '[sˈaɪt rˈed]',
    thirdForm: 'sight-read',
    thirdFormTranscription: '[sˈaɪt rˈed]',
    translation: 'играть или петь с листа (по нотам)'
  },
  {
    id: 262,
    firstForm: 'simulcast',
    firstFormTranscription: '[sɪmˈʌlkɑːst]',
    secondForm: 'simulcast',
    secondFormTranscription: '[sɪmˈʌlkɑːst]',
    thirdForm: 'simulcast',
    thirdFormTranscription: '[sɪmˈʌlkɑːst]',
    translation: 'транслировать по радио и телевидению'
  },
  {
    id: 263,
    firstForm: 'sing',
    firstFormTranscription: '[sˈɪŋ]',
    secondForm: 'sang',
    secondFormTranscription: '[sˈæŋ]',
    thirdForm: 'sung',
    thirdFormTranscription: '[sʌŋ] ',
    translation: 'петь'
  },
  {
    id: 264,
    firstForm: 'sink',
    firstFormTranscription: '[sˈɪŋk]',
    secondForm: 'sank',
    secondFormTranscription: '[sˈæŋk]',
    thirdForm: 'sunk',
    thirdFormTranscription: '[sʌŋk] ',
    translation: 'погружаться, тонуть, опускаться'
  },
  {
    id: 265,
    firstForm: 'sit',
    firstFormTranscription: '[sˈɪt]',
    secondForm: 'sat',
    secondFormTranscription: '[sˈæt]',
    thirdForm: 'sat',
    thirdFormTranscription: '[sˈæt]',
    translation: 'сидеть'
  },
  {
    id: 266,
    firstForm: 'ski',
    firstFormTranscription: '[skiː]',
    secondForm: 'skied',
    secondFormTranscription: '[ski:d]',
    thirdForm: 'skied',
    thirdFormTranscription: '[ski:d]',
    translation: 'ходить на лыжах'
  },
  {
    id: 267,
    firstForm: 'slay',
    firstFormTranscription: '[slˈeɪː]',
    secondForm: 'slew',
    secondFormTranscription: '[slˈuː]',
    thirdForm: 'slain',
    thirdFormTranscription: '[slˈeɪːn]',
    translation: 'убивать'
  },
  {
    id: 268,
    firstForm: 'sleep',
    firstFormTranscription: '[slˈiːp]',
    secondForm: 'slept',
    secondFormTranscription: '[slˈept]',
    thirdForm: 'slept',
    thirdFormTranscription: '[slˈept]',
    translation: 'спать'
  },
  {
    id: 269,
    firstForm: 'slide',
    firstFormTranscription: '[slˈaɪd]',
    secondForm: 'slid',
    secondFormTranscription: '[slˈɪd]',
    thirdForm: 'slid',
    thirdFormTranscription: '[slˈɪd]',
    translation: 'скользить'
  },
  {
    id: 270,
    firstForm: 'sling',
    firstFormTranscription: '[slˈɪŋ]',
    secondForm: 'slung',
    secondFormTranscription: '[slˈʌŋ]',
    thirdForm: 'slung',
    thirdFormTranscription: '[slˈʌŋ]',
    translation: 'швырять, подвешивать'
  },
  {
    id: 271,
    firstForm: 'slink',
    firstFormTranscription: '[slˈɪŋk]',
    secondForm: 'slunk',
    secondFormTranscription: '[slˈʌŋk]',
    thirdForm: 'slunk',
    thirdFormTranscription: '[slˈʌŋk]',
    translation: 'красться, ходить раскачивая бёдрами'
  },
  {
    id: 272,
    firstForm: 'slit',
    firstFormTranscription: '[slˈɪt]',
    secondForm: 'slit',
    secondFormTranscription: '[slˈɪt]',
    thirdForm: 'slit',
    thirdFormTranscription: '[slˈɪt]',
    translation: 'разрезать вдоль, делать разрез'
  },
  {
    id: 273,
    firstForm: 'smell',
    firstFormTranscription: '[smˈel]',
    secondForm: 'smelt',
    secondFormTranscription: '[smelt]',
    thirdForm: 'smelt',
    thirdFormTranscription: '[smelt]',
    translation: 'обонять, чуять, нюхать; пахнуть'
  },
  {
    id: 274,
    firstForm: 'smite',
    firstFormTranscription: '[smˈaɪt]',
    secondForm: 'smote',
    secondFormTranscription: '[smout]',
    thirdForm: 'smitten',
    thirdFormTranscription: '[smˈɪtn̩]',
    translation: 'ударять, бить, разбивать'
  },
  {
    id: 275,
    firstForm: 'sneak',
    firstFormTranscription: '[sniːk]',
    secondForm: 'snuck',
    secondFormTranscription: '[snˈʌk]',
    thirdForm: 'snuck',
    thirdFormTranscription: '[snˈʌk]',
    translation: 'красться'
  },
  {
    id: 276,
    firstForm: 'sow',
    firstFormTranscription: '[sˈəʋ]',
    secondForm: 'sowed',
    secondFormTranscription: '[soud]',
    thirdForm: 'sown',
    thirdFormTranscription: '[soun]',
    translation: 'сеять'
  },
  {
    id: 277,
    firstForm: 'speak',
    firstFormTranscription: '[spˈiːk]',
    secondForm: 'spoke',
    secondFormTranscription: '[spouk]',
    thirdForm: 'spoken',
    thirdFormTranscription: '[spoukən]',
    translation: 'говорить'
  },
  {
    id: 278,
    firstForm: 'speed',
    firstFormTranscription: '[spˈiːd]',
    secondForm: 'sped',
    secondFormTranscription: '[spˈed]',
    thirdForm: 'sped',
    thirdFormTranscription: '[spˈed]',
    translation: 'ускорять, спешить, мчатся'
  },
  {
    id: 279,
    firstForm: 'spell',
    firstFormTranscription: '[spˈel]',
    secondForm: 'spelt',
    secondFormTranscription: '[spˈelt]',
    thirdForm: 'spelt',
    thirdFormTranscription: '[spˈelt]',
    translation: 'писать, произносить по буквам'
  },
  {
    id: 280,
    firstForm: 'spend',
    firstFormTranscription: '[spˈend]',
    secondForm: 'spent',
    secondFormTranscription: '[spˈent]',
    thirdForm: 'spent',
    thirdFormTranscription: '[spˈent]',
    translation: 'тратить, проводить'
  },
  {
    id: 281,
    firstForm: 'spill',
    firstFormTranscription: '[spˈɪl]',
    secondForm: 'spilt',
    secondFormTranscription: '[spˈɪlt]',
    thirdForm: 'spilt',
    thirdFormTranscription: '[spˈɪlt]',
    translation: 'проливать'
  },
  {
    id: 282,
    firstForm: 'spin',
    firstFormTranscription: '[spˈɪn]',
    secondForm: 'spun',
    secondFormTranscription: '[spˈʌn]',
    thirdForm: 'spun',
    thirdFormTranscription: '[spˈʌn]',
    translation: 'прясть, крутить, вертеть'
  },
  {
    id: 283,
    firstForm: 'spit',
    firstFormTranscription: '[spˈɪt]',
    secondForm: 'spat',
    secondFormTranscription: '[spˈæt]',
    thirdForm: 'spat',
    thirdFormTranscription: '[spˈæt]',
    translation: 'плевать'
  },
  {
    id: 284,
    firstForm: 'split',
    firstFormTranscription: '[splˈɪt]',
    secondForm: 'split',
    secondFormTranscription: '[splˈɪt]',
    thirdForm: 'split',
    thirdFormTranscription: '[splˈɪt]',
    translation: 'расщеплять, раскалывать'
  },
  {
    id: 285,
    firstForm: 'spoil',
    firstFormTranscription: '[spˈɔɪːl]',
    secondForm: 'spoilt',
    secondFormTranscription: '[spˈɔɪːlt]',
    thirdForm: 'spoilt',
    thirdFormTranscription: '[spˈɔɪːlt]',
    translation: 'портить, баловать'
  },
  {
    id: 286,
    firstForm: 'spotlight',
    firstFormTranscription: '[ˈspɒtlaɪt]',
    secondForm: 'spotlit',
    secondFormTranscription: '[spˈɒtlɪt]',
    thirdForm: 'spotlit',
    thirdFormTranscription: '[spˈɒtlɪt]',
    translation: 'осветить прожектором, сделать центром внимания'
  },
  {
    id: 287,
    firstForm: 'spread',
    firstFormTranscription: '[sprˈed]',
    secondForm: 'spread',
    secondFormTranscription: '[sprˈed]',
    thirdForm: 'spread',
    thirdFormTranscription: '[sprˈed]',
    translation: 'распространять'
  },
  {
    id: 288,
    firstForm: 'spring',
    firstFormTranscription: '[sprˈɪŋ]',
    secondForm: 'sprang',
    secondFormTranscription: '[sprˈæŋ]',
    thirdForm: 'sprung',
    thirdFormTranscription: '[sprʌŋ] ',
    translation: 'вскочить, возникнуть'
  },
  {
    id: 289,
    firstForm: 'stand',
    firstFormTranscription: '[stˈænd]',
    secondForm: 'stood',
    secondFormTranscription: '[stuːd]',
    thirdForm: 'stood',
    thirdFormTranscription: '[stuːd]',
    translation: 'стоять'
  },
  {
    id: 290,
    firstForm: 'stave',
    firstFormTranscription: '[stˈeɪːv]',
    secondForm: 'stove',
    secondFormTranscription: '[stəuv]',
    thirdForm: 'stove',
    thirdFormTranscription: '[stəuv]',
    translation: 'проламывать, разбивать'
  },
  {
    id: 291,
    firstForm: 'steal',
    firstFormTranscription: '[stˈiːl]',
    secondForm: 'stole',
    secondFormTranscription: '[stoul]',
    thirdForm: 'stolen',
    thirdFormTranscription: '[stoulən]',
    translation: 'красть, воровать'
  },
  {
    id: 292,
    firstForm: 'stick',
    firstFormTranscription: '[stˈɪk]',
    secondForm: 'stuck',
    secondFormTranscription: '[stˈʌk]',
    thirdForm: 'stuck',
    thirdFormTranscription: '[stˈʌk]',
    translation: 'втыкать, укалывать, приклеивать'
  },
  {
    id: 293,
    firstForm: 'sting',
    firstFormTranscription: '[stˈɪŋ]',
    secondForm: 'stung',
    secondFormTranscription: '[stˈʌŋ]',
    thirdForm: 'stung',
    thirdFormTranscription: '[stˈʌŋ]',
    translation: 'жалить, жечь'
  },
  {
    id: 294,
    firstForm: 'stink',
    firstFormTranscription: '[stˈɪŋk]',
    secondForm: 'stank',
    secondFormTranscription: '[stˈæŋk]',
    thirdForm: 'stunk',
    thirdFormTranscription: '[stʌŋk] ',
    translation: 'вонять, смердеть'
  },
  {
    id: 295,
    firstForm: 'strew',
    firstFormTranscription: '[strˈuː]',
    secondForm: 'strewed',
    secondFormTranscription: '[strˈuːd]',
    thirdForm: 'strewn',
    thirdFormTranscription: '[strˈuːn]',
    translation: 'усеять, устлать, разбрасывать, разбрызгивать'
  },
  {
    id: 296,
    firstForm: 'stride',
    firstFormTranscription: '[strˈaɪd]',
    secondForm: 'strode',
    secondFormTranscription: '[stroud]',
    thirdForm: 'stridden',
    thirdFormTranscription: '[strˈɪdn̩]',
    translation: 'шагать большими шагами, наносить удар'
  },
  {
    id: 297,
    firstForm: 'strike',
    firstFormTranscription: '[strˈaɪk]',
    secondForm: 'struck',
    secondFormTranscription: '[strˈʌk]',
    thirdForm: 'struck',
    thirdFormTranscription: '[strˈʌk]',
    translation: 'ударить, бить, бастовать'
  },
  {
    id: 298,
    firstForm: 'string',
    firstFormTranscription: '[strˈɪŋ]',
    secondForm: 'strung',
    secondFormTranscription: '[strˈʌŋ]',
    thirdForm: 'strung',
    thirdFormTranscription: '[strˈʌŋ]',
    translation: 'нанизать, натягивать'
  },
  {
    id: 299,
    firstForm: 'strive',
    firstFormTranscription: '[strˈaɪv]',
    secondForm: 'strove',
    secondFormTranscription: '[strouv]',
    thirdForm: 'striven',
    thirdFormTranscription: '[strˈɪvn̩]',
    translation: 'стараться, прилагать усилия, бороться'
  },
  {
    id: 300,
    firstForm: 'sublet',
    firstFormTranscription: '[sʌblˈet]',
    secondForm: 'sublet',
    secondFormTranscription: '[sʌblˈet]',
    thirdForm: 'sublet',
    thirdFormTranscription: '[sʌblˈet]',
    translation: 'передавать в субаренду'
  },
  {
    id: 301,
    firstForm: 'sunburn',
    firstFormTranscription: '[ˈsʌnbɜːn] ',
    secondForm: 'sunburnt',
    secondFormTranscription: '[ˈsʌnbɜːnt]',
    thirdForm: 'sunburnt',
    thirdFormTranscription: '[ˈsʌnbɜːnt]',
    translation: 'обгорать на солнце'
  },
  {
    id: 302,
    firstForm: 'swear',
    firstFormTranscription: '[swˈeəː]',
    secondForm: 'swore',
    secondFormTranscription: '[swˈɔː]',
    thirdForm: 'sworn',
    thirdFormTranscription: '[swˈɔːn]',
    translation: 'ругаться, сквернословить'
  },
  {
    id: 303,
    firstForm: 'sweat',
    firstFormTranscription: '[swet]',
    secondForm: 'sweat',
    secondFormTranscription: '[swet]',
    thirdForm: 'sweat',
    thirdFormTranscription: '[swet]',
    translation: 'потеть'
  },
  {
    id: 304,
    firstForm: 'sweep',
    firstFormTranscription: '[swˈiːp]',
    secondForm: 'swept',
    secondFormTranscription: '[swˈept]',
    thirdForm: 'swept',
    thirdFormTranscription: '[swˈept]',
    translation: 'мести, промчаться'
  },
  {
    id: 305,
    firstForm: 'swell',
    firstFormTranscription: '[swel]',
    secondForm: 'swelled',
    secondFormTranscription: '[sweld]',
    thirdForm: 'swollen',
    thirdFormTranscription: '[swoulən]',
    translation: 'надувать, раздувать, опухать'
  },
  {
    id: 306,
    firstForm: 'swim',
    firstFormTranscription: '[swˈɪm]',
    secondForm: 'swam',
    secondFormTranscription: '[swˈæm]',
    thirdForm: 'swum',
    thirdFormTranscription: '[swʌm] ',
    translation: 'плавать'
  },
  {
    id: 307,
    firstForm: 'swing',
    firstFormTranscription: '[swˈɪŋ]',
    secondForm: 'swung',
    secondFormTranscription: '[swˈʌŋ]',
    thirdForm: 'swung',
    thirdFormTranscription: '[swˈʌŋ]',
    translation: 'качать, раскачивать'
  },
  {
    id: 308,
    firstForm: 'take',
    firstFormTranscription: '[tˈeɪːk]',
    secondForm: 'took',
    secondFormTranscription: '[tˈʊk]',
    thirdForm: 'taken',
    thirdFormTranscription: '[tˈeɪːkən]',
    translation: 'брать'
  },
  {
    id: 309,
    firstForm: 'teach',
    firstFormTranscription: '[tˈiːtʃ]',
    secondForm: 'taught',
    secondFormTranscription: '[tˈɔːt]',
    thirdForm: 'taught',
    thirdFormTranscription: '[tˈɔːt]',
    translation: 'учить, обучать, преподавать'
  },
  {
    id: 310,
    firstForm: 'tear',
    firstFormTranscription: '[tˈeəː]',
    secondForm: 'tore',
    secondFormTranscription: '[tˈɔː]',
    thirdForm: 'torn',
    thirdFormTranscription: '[tˈɔːn]',
    translation: 'рвать, разрывать'
  },
  {
    id: 311,
    firstForm: 'telecast',
    firstFormTranscription: '[tˈelɪkɑːst]',
    secondForm: 'telecast',
    secondFormTranscription: '[tˈelɪkɑːst]',
    thirdForm: 'telecast',
    thirdFormTranscription: '[tˈelɪkɑːst]',
    translation: 'передавать по телевидению'
  },
  {
    id: 312,
    firstForm: 'tell',
    firstFormTranscription: '[tˈel]',
    secondForm: 'told',
    secondFormTranscription: '[tould]',
    thirdForm: 'told',
    thirdFormTranscription: '[tould]',
    translation: 'рассказывать'
  },
  {
    id: 313,
    firstForm: 'test-drive',
    firstFormTranscription: '[test ˈdraɪv]',
    secondForm: 'test-drove',
    secondFormTranscription: '[test ˈdrouv]',
    thirdForm: 'test-driven',
    thirdFormTranscription: '[test ˈdrɪvn]',
    translation: 'совершить пробную поездку'
  },
  {
    id: 314,
    firstForm: 'think',
    firstFormTranscription: '[θˈɪŋk]',
    secondForm: 'thought',
    secondFormTranscription: '[θˈɔːt]',
    thirdForm: 'thought',
    thirdFormTranscription: '[θˈɔːt]',
    translation: 'думать'
  },
  {
    id: 315,
    firstForm: 'thrive',
    firstFormTranscription: '[θrˈaɪv]',
    secondForm: 'throve',
    secondFormTranscription: '[θrouv]',
    thirdForm: 'thriven',
    thirdFormTranscription: '[θrˈɪvən]',
    translation: 'процветать, преуспевать'
  },
  {
    id: 316,
    firstForm: 'throw',
    firstFormTranscription: '[θrou]',
    secondForm: 'threw',
    secondFormTranscription: '[θrˈuː]',
    thirdForm: 'thrown',
    thirdFormTranscription: '[θroun]',
    translation: 'бросать, кидать'
  },
  {
    id: 317,
    firstForm: 'thrust',
    firstFormTranscription: '[θrˈʌst]',
    secondForm: 'thrust',
    secondFormTranscription: '[θrˈʌst]',
    thirdForm: 'thrust',
    thirdFormTranscription: '[θrˈʌst]',
    translation: 'толкать, тыкать'
  },
  {
    id: 318,
    firstForm: 'toss',
    firstFormTranscription: '[tɒs]',
    secondForm: 'tost',
    secondFormTranscription: '[tɒst]',
    thirdForm: 'tost',
    thirdFormTranscription: '[tɒst]',
    translation: 'бросать'
  },
  {
    id: 319,
    firstForm: 'tread',
    firstFormTranscription: '[trˈed]',
    secondForm: 'trod',
    secondFormTranscription: '[trˈɒd]',
    thirdForm: 'trod',
    thirdFormTranscription: '[trˈɒd]',
    translation: 'ступать, шагать'
  },
  {
    id: 320,
    firstForm: 'troubleshoot',
    firstFormTranscription: '[trˈʌblʃuːt]',
    secondForm: 'troubleshot',
    secondFormTranscription: '[trˈʌblʃɒt]',
    thirdForm: 'troubleshot',
    thirdFormTranscription: '[trˈʌblʃɒt]',
    translation: 'искать неисправности, разрешать проблемы'
  },
  {
    id: 321,
    firstForm: 'typecast',
    firstFormTranscription: '[tˈaɪpkɑːst]',
    secondForm: 'typecast',
    secondFormTranscription: '[tˈaɪpkɑːst]',
    thirdForm: 'typecast',
    thirdFormTranscription: '[tˈaɪpkɑːst]',
    translation: 'подбирать актеров по принципу типажности'
  },
  {
    id: 322,
    firstForm: 'unbend',
    firstFormTranscription: '[ʌnˈbend]',
    secondForm: 'unbent',
    secondFormTranscription: '[ʌnˈbent]',
    thirdForm: 'unbent',
    thirdFormTranscription: '[ʌnˈbent]',
    translation: 'выпрямлять, разгибать'
  },
  {
    id: 323,
    firstForm: 'unbind',
    firstFormTranscription: '[ʌnbˈaɪnd]',
    secondForm: 'unbound',
    secondFormTranscription: '[ʌnˈbaʊnd] ',
    thirdForm: 'unbound',
    thirdFormTranscription: '[ʌnˈbaʊnd] ',
    translation: 'развязывать'
  },
  {
    id: 324,
    firstForm: 'underbid',
    firstFormTranscription: '[ˌʌndəˈbɪd]',
    secondForm: 'underbade',
    secondFormTranscription: '[ˌʌndəˈbeɪd]',
    thirdForm: 'underbidden',
    thirdFormTranscription: '[ˌʌndəˈbɪdn]',
    translation: 'сбить цену'
  },
  {
    id: 325,
    firstForm: 'undercut',
    firstFormTranscription: '[ˈʌndəkʌt]',
    secondForm: 'undercut',
    secondFormTranscription: '[ˈʌndəkʌt]',
    thirdForm: 'undercut',
    thirdFormTranscription: '[ˈʌndəkʌt]',
    translation: 'подрезать, сбивать цены'
  },
  {
    id: 326,
    firstForm: 'undergo',
    firstFormTranscription: '[ˌʌndəˈgou]',
    secondForm: 'underwent',
    secondFormTranscription: '[ˌʌndəˈwent]',
    thirdForm: 'undergone',
    thirdFormTranscription: '[ˌʌndəˈgɒn]',
    translation: 'испытывать, переносить, подвергаться'
  },
  {
    id: 327,
    firstForm: 'underlay',
    firstFormTranscription: '[ˌʌndəˈleɪ] ',
    secondForm: 'underlaid',
    secondFormTranscription: '[ˌʌndəˈleɪd]',
    thirdForm: 'underlaid',
    thirdFormTranscription: '[ˌʌndəˈleɪd]',
    translation: 'подстилать, подкладывать'
  },
  {
    id: 328,
    firstForm: 'underlie',
    firstFormTranscription: '[ˌʌndəˈlaɪ]',
    secondForm: 'underlay',
    secondFormTranscription: '[ˌʌndəˈleɪ]',
    thirdForm: 'underlain',
    thirdFormTranscription: '[ˌʌndəˈleɪn]',
    translation: 'лежать в основе'
  },
  {
    id: 329,
    firstForm: 'underpay',
    firstFormTranscription: '[ˌʌndəˈpeɪ] ',
    secondForm: 'underpaid',
    secondFormTranscription: '[ˌʌndəˈpeɪd]',
    thirdForm: 'underpaid',
    thirdFormTranscription: '[ˌʌndəˈpeɪd]',
    translation: 'мало платить, недоплачивать'
  },
  {
    id: 330,
    firstForm: 'undersell',
    firstFormTranscription: '[ˌʌndəˈsel]',
    secondForm: 'undersold',
    secondFormTranscription: '[ˌʌndəˈsould]',
    thirdForm: 'undersold',
    thirdFormTranscription: '[ˌʌndəˈsould]',
    translation: 'продавать дешевле других'
  },
  {
    id: 331,
    firstForm: 'understand',
    firstFormTranscription: '[ʌndəstˈænd]',
    secondForm: 'understood',
    secondFormTranscription: '[ˌʌndəˈstʊd] ',
    thirdForm: 'understood',
    thirdFormTranscription: '[ˌʌndəˈstʊd] ',
    translation: 'понимать'
  },
  {
    id: 332,
    firstForm: 'undertake',
    firstFormTranscription: '[ˌʌndəˈteɪk]',
    secondForm: 'undertook',
    secondFormTranscription: '[ˌʌndəˈtʊk]',
    thirdForm: 'undertaken',
    thirdFormTranscription: '[ˌʌndəˈteɪkən]',
    translation: 'предпринимать'
  },
  {
    id: 333,
    firstForm: 'underwrite',
    firstFormTranscription: '[ˈʌndəraɪt]',
    secondForm: 'underwrote',
    secondFormTranscription: '[ˈʌndərout]',
    thirdForm: 'underwritten',
    thirdFormTranscription: '[ˈʌndəˌrɪtn]',
    translation: 'подписывать, страховать'
  },
  {
    id: 334,
    firstForm: 'undo',
    firstFormTranscription: '[ʌnˈduː]',
    secondForm: 'undid',
    secondFormTranscription: '[ʌnˈdɪd]',
    thirdForm: 'undone',
    thirdFormTranscription: '[ʌnˈdʌn]',
    translation: 'уничтожать сделанное, развязывать, расстёгивать'
  },
  {
    id: 335,
    firstForm: 'unfreeze',
    firstFormTranscription: '[ʌnˈfriːz]',
    secondForm: 'unfroze',
    secondFormTranscription: '[ˌʌnˈfrouz]',
    thirdForm: 'unfrozen',
    thirdFormTranscription: '[ˌʌnˈfrouzn]',
    translation: 'размораживать'
  },
  {
    id: 336,
    firstForm: 'unlearn',
    firstFormTranscription: '[ʌnˈlɜːn] ',
    secondForm: 'unlearnt',
    secondFormTranscription: '[ʌnˈlɜːnt]',
    thirdForm: 'unlearnt',
    thirdFormTranscription: '[ʌnˈlɜːnt]',
    translation: 'разучиться, забыть то, что знал'
  },
  {
    id: 337,
    firstForm: 'unmake',
    firstFormTranscription: '[ʌnˈmeɪk] ',
    secondForm: 'unmade',
    secondFormTranscription: '[ʌnˈmeɪd]',
    thirdForm: 'unmade',
    thirdFormTranscription: '[ʌnˈmeɪd]',
    translation: 'разрушать, уничтожать'
  },
  {
    id: 338,
    firstForm: 'unsay',
    firstFormTranscription: '[ʌnˈseɪ] ',
    secondForm: 'unsaid',
    secondFormTranscription: '[ʌnˈsed]',
    thirdForm: 'unsaid',
    thirdFormTranscription: '[ʌnˈsed]',
    translation: 'брать слова назад'
  },
  {
    id: 339,
    firstForm: 'unwind',
    firstFormTranscription: '[ʌnwˈaɪnd]',
    secondForm: 'unwound',
    secondFormTranscription: '[ʌnˈwaʊnd] ',
    thirdForm: 'unwound',
    thirdFormTranscription: '[ʌnˈwaʊnd] ',
    translation: 'развертывать, разматывать, раскручивать'
  },
  {
    id: 340,
    firstForm: 'uphold',
    firstFormTranscription: '[ʌpˈhould]',
    secondForm: 'upheld',
    secondFormTranscription: '[ʌpˈheld]',
    thirdForm: 'upheld',
    thirdFormTranscription: '[ʌpˈheld]',
    translation: 'поддерживать'
  },
  {
    id: 341,
    firstForm: 'uppercut',
    firstFormTranscription: '[ˈʌpəkʌt]',
    secondForm: 'uppercut',
    secondFormTranscription: '[ˈʌpəkʌt]',
    thirdForm: 'uppercut',
    thirdFormTranscription: '[ˈʌpəkʌt]',
    translation: 'сделать апперкот'
  },
  {
    id: 342,
    firstForm: 'upset',
    firstFormTranscription: '[ˈʌpset]',
    secondForm: 'upset',
    secondFormTranscription: '[ˈʌpset]',
    thirdForm: 'upset',
    thirdFormTranscription: '[ˈʌpset]',
    translation: 'расстраивать'
  },
  {
    id: 343,
    firstForm: 'upsweep',
    firstFormTranscription: '[ˈʌpswiːp]',
    secondForm: 'upswept',
    secondFormTranscription: '[ˈʌpswept]',
    thirdForm: 'upswept',
    thirdFormTranscription: '[ˈʌpswept]',
    translation: 'подметать, прибирать'
  },
  {
    id: 344,
    firstForm: 'vex',
    firstFormTranscription: '[veks]',
    secondForm: 'vext',
    secondFormTranscription: '[vekst]',
    thirdForm: 'vext',
    thirdFormTranscription: '[vekst]',
    translation: 'досаждать, надоедать, дразнить'
  },
  {
    id: 345,
    firstForm: 'wake',
    firstFormTranscription: '[wˈeɪːk]',
    secondForm: 'woke',
    secondFormTranscription: '[wouk]',
    thirdForm: 'woken',
    thirdFormTranscription: '[woukən]',
    translation: 'просыпаться, будить'
  },
  {
    id: 346,
    firstForm: 'wax',
    firstFormTranscription: '[wæks]',
    secondForm: 'waxed',
    secondFormTranscription: '[wˈækst]',
    thirdForm: 'waxen',
    thirdFormTranscription: '[ˈwæks(ə)n]',
    translation: 'прибывать, развиваться, становиться'
  },
  {
    id: 347,
    firstForm: 'waylay',
    firstFormTranscription: '[weɪˈleɪ] ',
    secondForm: 'waylaid',
    secondFormTranscription: '[weɪːlˈeɪːd]',
    thirdForm: 'waylaid',
    thirdFormTranscription: '[weɪːlˈeɪːd]',
    translation: 'подстерегать, устраивать засаду'
  },
  {
    id: 348,
    firstForm: 'wear',
    firstFormTranscription: '[wˈeəː]',
    secondForm: 'wore',
    secondFormTranscription: '[wˈɔː]',
    thirdForm: 'worn',
    thirdFormTranscription: '[wˈɔːn]',
    translation: 'носить одежду'
  },
  {
    id: 349,
    firstForm: 'weave',
    firstFormTranscription: '[wˈiːv]',
    secondForm: 'wove',
    secondFormTranscription: '[wouv]',
    thirdForm: 'woven',
    thirdFormTranscription: '[wouvən]',
    translation: 'ткать, плести'
  },
  {
    id: 350,
    firstForm: 'wed',
    firstFormTranscription: '[wˈed]',
    secondForm: 'wed',
    secondFormTranscription: '[wˈed]',
    thirdForm: 'wed',
    thirdFormTranscription: '[wˈed]',
    translation: 'выдавать замуж, жениться'
  },
  {
    id: 351,
    firstForm: 'weep',
    firstFormTranscription: '[wˈiːp]',
    secondForm: 'wept',
    secondFormTranscription: '[wˈept]',
    thirdForm: 'wept',
    thirdFormTranscription: '[wˈept]',
    translation: 'плакать'
  },
  {
    id: 352,
    firstForm: 'wend',
    firstFormTranscription: '[wend]',
    secondForm: 'went',
    secondFormTranscription: '[went]',
    thirdForm: 'went',
    thirdFormTranscription: '[went]',
    translation: 'идти, держать путь, направляться'
  },
  {
    id: 353,
    firstForm: 'wet',
    firstFormTranscription: '[wˈet]',
    secondForm: 'wet',
    secondFormTranscription: '[wˈet]',
    thirdForm: 'wet',
    thirdFormTranscription: '[wˈet]',
    translation: 'мочить, увлажнять'
  },
  {
    id: 354,
    firstForm: 'whipsaw',
    firstFormTranscription: '[ˈwɪpsɔː] ',
    secondForm: 'whipsawed',
    secondFormTranscription: '[wˈɪpsɔːd]',
    thirdForm: 'whipsawn',
    thirdFormTranscription: '[wˈɪpsɔːn]',
    translation: 'пилить лучковой пилой'
  },
  {
    id: 355,
    firstForm: 'win',
    firstFormTranscription: '[wˈɪn]',
    secondForm: 'won',
    secondFormTranscription: '[wˈʌn]',
    thirdForm: 'won',
    thirdFormTranscription: '[wˈʌn]',
    translation: 'выиграть, победить'
  },
  {
    id: 356,
    firstForm: 'wind',
    firstFormTranscription: '[wˈɪnd]',
    secondForm: 'wound',
    secondFormTranscription: '[wˈaʊːnd]',
    thirdForm: 'wound',
    thirdFormTranscription: '[wˈaʊːnd]',
    translation: 'заводить, трубить, извиваться'
  },
  {
    id: 357,
    firstForm: 'withdraw',
    firstFormTranscription: '[wɪðˈdrɔː] ',
    secondForm: 'withdrew',
    secondFormTranscription: '[wɪðˈdruː]',
    thirdForm: 'withdrawn',
    thirdFormTranscription: '[wɪðˈdrɔːn]',
    translation: 'отнимать, отказываться'
  },
  {
    id: 358,
    firstForm: 'withhold',
    firstFormTranscription: '[wɪðˈhould]',
    secondForm: 'withheld',
    secondFormTranscription: '[wɪðˈheld]',
    thirdForm: 'withheld',
    thirdFormTranscription: '[wɪðˈheld]',
    translation: 'вычитать, удерживать'
  },
  {
    id: 359,
    firstForm: 'withstand',
    firstFormTranscription: '[wɪðstˈænd]',
    secondForm: 'withstood',
    secondFormTranscription: '[wɪðˈstʊd] ',
    thirdForm: 'withstood',
    thirdFormTranscription: '[wɪðˈstʊd] ',
    translation: 'противиться, устоять, выстоять'
  },
  {
    id: 360,
    firstForm: 'wrap',
    firstFormTranscription: '[ræp]',
    secondForm: 'wrapt',
    secondFormTranscription: '[ræpt]',
    thirdForm: 'wrapt',
    thirdFormTranscription: '[ræpt]',
    translation: 'окутывать, завёртывать'
  },
  {
    id: 361,
    firstForm: 'wreak',
    firstFormTranscription: '[ri:k]',
    secondForm: 'wrought',
    secondFormTranscription: '[rɔ:t]',
    thirdForm: 'wrought',
    thirdFormTranscription: '[rɔ:t]',
    translation: 'причинять'
  },
  {
    id: 362,
    firstForm: 'wring',
    firstFormTranscription: '[rˈɪŋ]',
    secondForm: 'wrung',
    secondFormTranscription: '[rˈʌŋ]',
    thirdForm: 'wrung',
    thirdFormTranscription: '[rˈʌŋ]',
    translation: 'скручивать, сжимать'
  },
  {
    id: 363,
    firstForm: 'write',
    firstFormTranscription: '[rˈaɪt]',
    secondForm: 'wrote',
    secondFormTranscription: '[rout]',
    thirdForm: 'written',
    thirdFormTranscription: '[rˈɪtn̩]',
    translation: 'писать'
  },
  {
    id: 364,
    firstForm: 'writhe',
    firstFormTranscription: '[raıð]',
    secondForm: 'writhed',
    secondFormTranscription: '[rˈaɪðd]',
    thirdForm: 'writhen',
    thirdFormTranscription: '[raıðən]',
    translation: 'корчиться, скручиваться'
  }
];

export default VERBS;