export default {
  boards: {
    "17-18": [
      {
        name: "Nadya",
        position: "President",
        birthday: "24/01/1993",
        section: "ESN Ural Federal",
        loves:
          "meeting new people, travelling, living in different countries, drawing, nature, good vine, rock music and ice cream",
        hates: "don't know what it means",
        speaks: "English",
        image:
          "http://esnrussia.org/sites/esnrussia.org/files/imce/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8.png",
      },
      {
        name: "Alina",
        position: "Vice-President",
        birthday: "04/10/1995",
        section: "ESN HSE Moscow",
        loves:
          "travelling, photography, architecture, Star Wars, meeting new people, psycology, yoga, veggie food and good music",
        hates: "narrow-minded people, predjudices and cold weather",
        speaks: "English, German and a bit of Italian & Spanish",
        image: "http://esnrussia.org/sites/hsemsk.esnrussia.org/files/imce/2alina.png",
      },
      {
        name: "Evgenii",
        position: "National Representative",
        birthday: "20/11/1995",
        section: "ESN HSE Moscow",
        loves: "politics, law&economics, geek stuff",
        hates: "unability to plan in advance and when people refuse to understand how things work",
        speaks: "English and French (and a little bit of Latin)",
        image: "http://esnrussia.org/sites/hsemsk.esnrussia.org/files/imce/eugene.png",
      },
    ],
  },
  about: [
    { type: "image", src: "/RU-DIGITAL-COLOR.png" },
    {
      type: "text",
      value:
        "The first ever ESN section in Russia was established in Izhevsk back in 2002. Unfortunately, it did not last long and was expelled during CNR Maribor in February, 2004, due to its major financial difficulties. As by that time it was still the only section in Russia it resulted in expulsion of the whole country.",
    },
    {
      type: "text",
      value:
        "By the end of 2011 the International Board of Erasmus Student Network was contacted by a group of enthusiastic individuals from St. Petersburg State Forest Technical University, who were interested in bringing ESN to Russia once again. Yet, the Study Trip to St. Petersburg resulted in a negative review, making the candidates unable to run for a full membership. During the further discussion, the candidate section was strongly advised to withdraw their application to avoid rejection during May 2012 CNR Reykjavik vote, due to their general unpreparedness.",
    },
    {
      type: "text",
      value:
        "It took two years more to see another attempt of Russia to join ESN, with interest being again expressed by SFTU St. Petersburg. Two representatives joined CNR Sofia in January 2014 and after a successful presentation the initiative was granted a candidate membership. ESN Russia was accepted as a 37th ESN country during AGM Milano in April 2014. In the light of then present conflict in and about Ukraine, it was a strong signal on how the youth of the European continent is willing to contribute to the establishment of peaceful and respectful intercultural dialogue and creation of a friendly and tolerant international environment.",
    },
    {
      type: "text",
      value:
        "Now there are 5 Sections on our National level: ESN SFTU (St. Petersburg), ESN Ural Federal (Ekaterinburg) and ESN HSE Moscow (Moscow), ESN HSE St. Petersburg (St. Petersburg) and ESN Plekhanov (Moscow). Full list of Russian Local Sections can be found here.",
    },
    {
      type: "text",
      value:
        "The symbol of ESN Russia, that appears on our logo, is a colorful Fire-bird, a well-known character of Slavonic folklore. In Russian fairy-tales a Fire-bird is always a creature from faraway lands, getting acquainted with which usually gets the main character involved in many unpredictable and exciting adventures and broadens their personal intellectual horizons. We believe that it represents our will to explore different cultures, travel and gain valuable international experiences.",
    },
  ],
  menuItems: [
    { title: "Home", url: "/" },
    { title: "Board", url: "/board" },
    { title: "Sample", url: "/sample_page" },
    { title: "404", url: "/404" },
    { title: "About", url: "/about" },
  ],
  pages: {
    "/sample_page": `
# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")


A component by [Espen Hovlandsdal](https://espen.codes/)`,
  },
  settings: {
    maintenance: true,
    loading: false,
    name: "ESN Russia",
    logo_url: "/RU-DIGITAL-COLOR.png",
  },
  modalState: {
    isOpen: false,
    pageName: "",
    pageUrl: "",
  },
};
