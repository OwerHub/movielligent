# ENG


to run this program

- After clone this repository, type and run :                   npm install

- create an .env file, include REACT_APP_API_KEY=<your key> 
    - you can get a key in https://developers.themoviedb.org/3/getting-started/introduction

- to run unit- and integration tests, type                      npm tests 
    - this not working good before node v16

- to run integration tests, type                                npm e2e
    - in first time, the test failed in my comp, but its working perfectly since the second test
    - maybe you should allow acess in your firewall. 


See ya later, and have a good hacking!

ower

#  -------------------   HU  -to Dilligent --------------------

Köszönöm szépen a feladatot, izgalmas kihívásokat tartogatott!

A program működéséhez az alábbi dolgok szükségesek: 


https://github.com/OwerHub/movielligent  repository  klónozása
egy 
# .env 
file a gyökérben, amit tartalmaz egy 
# REACT_APP_API_KEY= 
kulcsot
A függőségek installálása 
# npm i 
utasítással majd az indítás 
# npm start  
utasítással indul el a program

a teszteléshez az alábbiakat kell végrehajtani
# npm test
paranccsal el kell indítani a jest-ben írt unit és integrációs teszteket. (33 db)
(megj: tapasztalatom csak NODE 16-tól felfelé indul el az elvárható módon.

# npm e2e 
paranncsal pedig a Cypress indul el a 12 részre bontott end to end teszteléssel. Itt időnként engedélyezni kell a tűzfalon való áthaladást, illetve a lassúbb asztali gépen tesztelve időtúllépés miatt megszakadt a teszt. A hibát azóta nem sikerült reprodukálni. 


Néhány megjegyzés: 

- “Kész program nincs, csak lebulidelt” mondta a mentorom (és milyen igaza volt), így ha időm engedi, még kipróbálnék néhány megoldást, amire a projekt ideális. Ha nem jelent problémát, a jelenlegi állapotot meghagyom a master branch-ben, rewiev-ra, és egy másik branch-ben folytatom. 

- Néhány esetben nem vagyok biztos, hogy jól -értelmeztem-e a feladatot. A “Search is automatically triggered after at least 3 characters entered”  -nél elsőre olyan keresőt csináltam, ami 3 karakternél hosszabb keresőszó esetén automatikusan keresett, de ez végül nem tűnt életszerűnek, és kényelmetlen volt, így maradt a három karakter után engedélyezett keresés. -A “caching”-et úgy értelmeztem, hogy korábbi kereséseket tároljam el, elkerülve a felesleges requesteket. A három, elsőre felmerülő lehetőség közül (localstorage, redux, state), végül az utóbbi mellett döntöttem, mivel az adat nem mozog komponensek között, és találatok hosszú távú tárolása egy naponta változó lista esetén szintén nem tűnt tökéletes megoldásnak. A “pagination, limits”-nél pedig nem találtam a moviedatabase dokumentációjában olyan kapcsolót, ami szabályozná, a megjelenített elemek számát laponként, így végül egy paginator-t írtam , ahol jobbra és balra megjelenő számok mutatják, elértük-e a “limit”-et. Nem vagyok biztos benne, hogy ez volt  a helyes értelmezés, bár remek alap volt a későbbi teszteléshez. Természetesen bármelyik esetben szívesen elvégzem a változtatásokat a kódon. 

Ahogy írtam, köszönöm szépen a feladatot, számos izgalmas résszel szolgált, A redux és a localstorage átvitelek ilyen kombinálása, nem volt nehéz, de újdonság volt   jest-es emlékek felelevenítése szintén jó gyakorlat volt. Újdonsült ismeretségem a Cypress  testing libary-vel (ami legfőbb oka annak, hogy nem tegnap adtam le ezt a feladatot), pedig azt hiszem, egy gyönyörű barátság kezdete. 

Remélem kódom, megoldásaim elnyerik  tetszésüket (továbbá építő kritikának nagyon örülnék) és izgalommal várom a folyamat következő fázisát.

# Tisztelettel és köszönettel: 

# V.A."