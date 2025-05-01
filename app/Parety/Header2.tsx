import Image from "next/image";

export default function Header2cnt () {
    return (
        <div className="flex justify-center items-center pt-[0px]">
            <div className="">
                <div className="">
            <ul className="flex justify-center items-center gap-[50px]">
                <li className="text-gray-600">About</li>
                <li className="text-gray-600">Neighborhoods</li>
                <li className="text-gray-600">Schools</li>
                <li className="text-gray-600">Jobs</li>
                <li className="text-gray-600">Leisure and parks</li>
            </ul>
            </div>
            <div className="pt-[60px]">
                <p className="text-gray-600">Named for a local swamp fish, Paraty sits on Brazil's southeastern coast, 125 miles south <br /> of Rio, with the Bocaino Mountains at its back. The small colonial town's center is a <br /> national historic monument with well-preserved buildings on its pedestrian-only streets. <br /> Take a boat trip out into the bay to the flotillas of islands and coves nearby. Explore <br /> sugarcane plantations and hike or take a train through Atlantica Forest. Keep an eye out <br /> for the monkeys that roam the cobblestone streets.
<br /><br />
                The town is located on the Bay of Ilha Grande, which is dotted with many tropical islands. <br /> Rising as high as 1,300 meters behind the town are tropical forests, mountains, and <br /> waterfalls. It is the southernmost and westernmost city in Rio de Janeiro state.
<br /><br />
                The city's economic activity revived as a port for a new boom, the coffee trade of the <br /> Paraiba do Sul River Valley in the early 19th century, until a railway along the valley <br /> created cheaper transport to the port of Rio de Janeiro. Another smaller revival came late <br /> in the 19th century with the production of cachaça, which is a sugarcane-derived spirit <br /> best known today as the basis for Brazil's most famous cocktail, the caipirinha.
<br /><br />        
                There are many musical and cultural events, the most prominent of which is the FLIP – <br /> Festa Literaria Internacional de Paraty (International Literary Festival of Paraty). The town <br /> is also known for its local festivals on Catholic holy dates, such as the Feast of the Holy <br /> Ghost.</p>
            </div>
            <div className="pt-[30px] pb-[20px] text-black">
                <h1>ARTICLES ABOUT PARATY</h1>
            </div>
            <div className="flex justify-center items-center gap-[30px]">
                <Image
                src="/Article.png"
                alt="NKksdadhgfs"
                width={194}
                height={202}
                />
                <Image
                src="/Article1.png"
                alt="NKksdadhgfs"
                width={194}
                height={202}
                />
                <Image
                src="/Article2.png"
                alt="NKksdadhgfs"
                width={194}
                height={202}
                />
            </div>
        </div>
</div>
    )
} 