type TOnePostData = {
    "id": number,
    "image": any,
    "text": string,
    "date": string,
    "postnum": number,
    "title": string,
    "description"?: string,
    "descriptiontwo"?: string,
    "descriptionthree"?: string,
    "author": number
}

export const oneCardData: TOnePostData = 

    {
        "id": 100,
        "image": "https://loremflickr.com/320/240/space",
        "text": "Lighthouse",
        "date": "2022-03-18",
        "postnum": 14278,
        "title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        "description": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        "author": 162,
        "descriptiontwo": "During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.",
        "descriptionthree": "The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. The artist’s installation Relic (2021), produced alongside sound recordist Chris Watson, was recently on view at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the group show “Summer Exhibition” at Marlborough London, which runs through September 10th.",
    }

