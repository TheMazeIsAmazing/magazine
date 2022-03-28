<?php
/**
 * @return array
 */
function getStores()
{
    return [
        [
            "id" => 1,
            "name" => "Jumbo",
            "img"=> "jumbo.jpg"
        ],
        [
            "id" => 2,
            "name" => "Albert Heijn",
            "img"=> "Albert-Heijn.jpg"
        ],
        [
            "id" => 3,
            "name" => "Gamma",
            "img"=> "gamma.jpg"
        ],
        [
            "id" => 4,
            "name" => "Keuken Kampioen",
            "img"=> "keuken-kampioen.jpg"
        ],
        [
            "id" => 5,
            "name" => "Praxis",
            "img"=> "praxis.jpg"
        ],
        [
            "id" => 6,
            "name" => "Lidl",
            "img"=> "lidl.jpg"
        ],
        [
            "id" => 7,
            "name" => "Aldi",
            "img"=> "aldi.jpg"
        ],
        [
            "id" => 8,
            "name" => "Dirk",
            "img"=> "dirk.jpg"
        ],
        [
            "id" => 9,
            "name" => "Plus",
            "img"=> "plus.jpg"
        ],
        [
            "id" => 10,
            "name" => "Karwei",
            "img"=> "karwei.jpg"
        ],
        [
            "id" => 11,
            "name" => "Intertoys",
            "img"=> "intertoys.jpg"
        ],
        [
            "id" => 12,
            "name" => "Primark",
            "img"=> "primark.jpg"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getStoreDetails($id)
{
    $tags = [
        1 => [ //jumbo
            "address" => "P.A. de Kokplein 152, 3318AA Dordrecht",
            "type" => "Supermarkt",
            "services" => ['Bloemen', 'Parkeren', 'Pick Up Point', 'Slijterij', 'Thuisbezorgen', 'Wifi', 'Zelfscan']
        ],
        2 => [ //AH
            "address" => "Admiraalsplein 162, 3317BC Dordrecht",
            "type" => "Supermarkt",
            "services" => ['Bol.com afhaalpunt', 'Parkeren', 'Geldautomaat', 'OV-service', 'Stomerijservice', 'Wifi', 'Fotoservice', 'Loterijen']
        ],
        3 => [ //Gamma
            "address" => "Mijlweg 49, 3316BE Dordrecht",
            "type" => "Bouwmarkt",
            "services" => ['Verhuur gereedschap', 'GAMMA Klusservice', 'Aanhanger huren', 'Opslagruimte huren? Zo geregeld.', 'GAMMA Verhuisservice', 'Sleutelservice', 'Zaagservice', 'Verf mengen', 'Afvalcontainer huren']
        ],
        4 => [ //Keuken kampioen
            "address" => "Mijlweg 51, 3316BE Dordrecht",
            "type" => "Keukenwinkel",
            "services" => ['Parkeren', 'Digitale showroom']
        ],
        5 => [ //praxis
            "address" => "Edisonstraat 7, 3316AE Dordrecht",
            "type" => "Bouwmarkt",
            "services" => ['Parking voor mindervaliden', 'Verfmengmachine', 'Batterijservice', 'Verhuur materiaal']
        ],
        6 => [ //lidl
            "address" => "P.A. de Kok-plein 107, 3318JW Dordrecht",
            "type" => "Supermarkt",
            "services" => ['Lidl Plus', 'Non-Food en food producten']
        ],
        7 => [ //aldi
            "address" => "Dubbeldamseweg Zuid 72, 3314JA Dordrecht ",
            "type" => "Supermarkt",
            "services" => ['Ovenvers brood']
        ],
        8 => [ //dirk
            "address" => "Van Oldebarneveltplein 50, 3317ER Dordrecht",
            "type" => "Supermarkt",
            "services" => ['Bake-off afdeling', 'Slijterij']
        ],
        9 => [ //plus
            "address" => "Prof. Waterinklaan 45, 3312KM Dordrecht",
            "type" => "Supermarkt",
            "services" => ['Batterijen inleverpunt', 'Zelfscannen', 'Slijterij', 'Verse Bloemen', 'Verse sapmachine', 'Boodschappen online bestellen & bezorgservice', 'AED']
        ],
        10 => [ //karwei
            "address" => "Vissersdijk Beneden 60, 3319GW Dordrecht",
            "type" => "Bouwmarkt",
            "services" => ['Gereedschap verhuur', 'Aanhangwagen huren', 'Zaagservice', 'Bouwafval service', 'Verfmengservice', 'Bezorgservice', 'PostNL pakketpunt']
        ],
        11 => [ //intertoys
            "address" => "Statenplein 26, 3311NG Dordrecht",
            "type" => "Speelgoedwinkel",
            "services" => ['Click & Collect']
        ],
        12 => [ //primark
            "address" => "Drievriendenhof 16, 3311NM Dordrecht ",
            "type" => "Kledingwinkel",
            "services" => ['Parkeerfaciliteiten', 'Rolstoeltoegankelijk']
        ]

    ];

    return $tags[$id];
}
