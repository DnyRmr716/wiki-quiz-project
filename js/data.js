const questions = [
    {articleTitle: "Watermelon Riot", description: "A deadly riot that unfolded over a stolen slice of watermelon. April 15, 1856 ", isReal:true },
    {articleTitle: "Frog battery", description: "A curious experiment to determine the existence of animal electricity. ", isReal: true },
    {articleTitle: "Oklahoma Rock Shower", description: "A small town in Lexington, OK was devastated by rocks falling from the sky. June 26, 1953 ", isReal: false },
    {articleTitle: "Kentucky meat shower", description: "In Bath County, Kentucky, chunks of red meat mysterously fell from the sky. March 3, 1876", isReal: true },
    {articleTitle: "Lightning Girl", description: "In july 12, 1983. a Mountain Climber named Gertude Roberts was struck by lightning 5 times in under a minute. she later recoverd 3 months after.", isReal: false },
    {articleTitle: "Environmental Protection Agency v. Viacom", description: "The EPA filed a case against Viacom for dumping 900 gallons of unused slime leftover from the Kids Choice Awards in the Sacramento River", isReal: false },
    {articleTitle: "Big Mac Index", description: "Compares Big Mac prices across countries to estimate whether currencies are overvalued or undervalued compared to the US dollar.", isReal: true },
    {articleTitle: "Mesopotamian Riot", description: "A Riot that was caused due to the cruel leadership of Lugalzagesi of Uruk. This was the first documented case of a riot that has ever occurred. ", isReal: false },
    {articleTitle: "Affair of the Sausages", description: "One of the major events of the early Protestant Reformation in Switzerland was a religious dispute on wherever sausages could be eaten during Lent.", isReal: true },
    {articleTitle: "Dublin Whiskey Fire", description: "in 1875, a whiskey brewery warehouse in Dublin caught fire leading to the deaths of 13 people—not from the fire, but from alcohol poisoning as they drank free whiskey from the streets", isReal: true },
    {articleTitle: "Hollywood Bear Hoax", description: "in 1932, famous actor Oliver Hardy reported a Grizzly Bear was loose in one of the film sets. It turned out to be an elaborate prank to get back on the director of the movie, 'Way Out West'", isReal: false },
    {articleTitle: "Microsoft v. MikeRoweSoft", description: "a 2004 legal dispute between Microsoft and a Canadian Belmont High School student named Mike Rowe, who was 17, over the domain name 'MikeRoweSoft.com'", isReal: true },
    {articleTitle: "Henry Tandey", description: "An English solider that allegedly met a young Adolf Hitler during World War I, and spared his life. ", isReal: true },
    {articleTitle: "Miloš Petrović", description: "The Coachman that took a wrong turn, which lead to the death of Archduke Franz Ferdinand", isReal: false },
    {articleTitle: "Finnish-Italian War", description: "A war that lasted for only 12 hours, over the accidental death of Captain Väinö Nieminen in 1939 ", isReal: false },
    {articleTitle: "Pastry War", description: "a conflict between Mexico and France in 1838. It started over a French pastry chef's claim of damages, but France used it as an excuse to demand reparations and intervene in Mexico.", isReal: true },
    {articleTitle: "Deparment Of Defense v. Mcdonalds", description: "The DOD filed a case against the fast food chain for their inability to serve food for the military, despite being given a $50 million contract which they agreed to.", isReal: false },
    {articleTitle: "Iceland v Iceland Foods Ltd", description: "an ongoing legal dispute between the country of Iceland and the British supermarket chain Iceland Foods over the trademark, intellectual property rights and use of the name 'Iceland'", isReal: true },
    {articleTitle: "Dinkoism", description: "A parody religion that places Dinkan, a comic character from Malayalam children's magazine Balamangalam, as the one true God and the creator of the Universe. ", isReal: true },
    {articleTitle: "Ice cream barge", description: "A vessel employed by the United States Navy in the Pacific Theater of World War II to produce ice cream in large quantities to be provisioned to sailors ", isReal: true },
    {articleTitle: "Lobster War", description: "a dispute over the fishing of spiny lobsters that occurred from 1961 to 1963 between Brazil and France", isReal: true},
    {articleTitle: "Urchin Eating", description: "an American college fad that involes someone eating a whole sea urchin. It was popularized in the 1940s ", isReal: false },
    {articleTitle: "Fe, Fi, Fo, Fum, and Phooey", description: "five mice who traveled to the Moon and circled it 75 times on the 1972 Apollo 17 mission.", isReal: true },
    {articleTitle: "Kamikaze Cars", description: "A specialized series of cars that were fitted with explosives used by the Japanese military during the Second Sino-Japanese War", isReal: false},
    {articleTitle: "Singles' Day", description: "a Chinese unofficial holiday and shopping season that celebrates people who are not in a relationship.", isReal: true },
    {articleTitle: "Pepsi fruit juice flood", description: "A PepsiCo warehouse collapse flooded the streets of Russia with 7.4 million gallons of an assortment of juices. ", isReal: true },
    {articleTitle: "Kinjirō Ashiwara", description: "a self-proclaimed 'emperor' who rose to a celebrity status with his grandiose delusions and theatrical antics that were covered by the Japanese press for decades", isReal: true },
    {articleTitle: "Great Stink", description: "an event in Central London during July and August 1858 in which the hot weather exacerbated the smell of untreated human waste and industrial effluent that was present on the banks of the River Thames.", isReal: true },
    {articleTitle: "Great Moon Hoax", description: "An infamous article by The Sun that claimed that animals such as unicorns and bat-winged humans were found living on the moon. ", isReal: true },
    {articleTitle: "Pittsburgh refrigerator cat", description: "a claim made by the New York Times that a special breed of cat had been developed in Pittsburgh to live and hunt in cold storage warehouses.", isReal: true },
    {articleTitle: "Chicken powered nuclear bomb", description: "A British project to lay nuclear mines in West Germany during the Cold War that were planned to be kept warm by live chickens. ", isReal:true },
    {articleTitle: "Mooseback Racing", description: "A competitive sport involving 2 more mooses ridden by jockeys. The sport was banned in 1936 in Canada due to the mosses killing several jockeys", isReal: false },
    {articleTitle: "Bill Heifer", description: "a cow that was bred and fed to be the world largest cow that weighed 5,235 lb and measured 11.9 ft in height", isReal: false },
    {articleTitle: "Milk Famine 1609", description: "in 1609, nearly all of england's farmers reported that none of their cows were producing milk, which caused a country-wide shortage of Dairy products", isReal: false },
]