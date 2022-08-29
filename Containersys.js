import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Voyage from './Voyage'

const APIs = [
  {
    link: "https://tunisiepromo.tn/wp-content/uploads/2017/11/voyage-sidibousaid00.jpg",
    destination: "Sidi Bou",
    desc: "Réserver Hotel à Tunis Cest un petit village tunisien qui se situe à une vingtaine de kilomètres au nord-est de Tunis. Ce village pittoresque aux petits dimensions mais au grand charme semble être tombé de la toile dun artiste romantique",
  },
  {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozvukwHntRMN916BrPSr3CP-xY_HpgcR2SRy6LHBzLI94IoMXv_tFpCvrm1toJaZrgXk&usqp=CAU",
    destination: "Kelibia",
    desc: "KÉLIBIA Située à la pointe du Cap Bon, à 94 km de Tunis, Kélibia, est une ville de 49 000 habitants. Elle est la troisième ville du gouvernorat de Nabeul après Nabeul et Hammamet. Ses revenus économiques proviennent de lagriculture, la pêche, lindustrie du meuble et le tourisme",
  },
  {
    link: "https://guide-voyage-tunisie.com/wp-content/uploads/2020/08/balade-a-dos-de-dromadaire4.webp",
    destination: "DOUZ",
    desc: "Douz est une petite ville dans le centre-sud de la Tunisie. Considérée comme ‘la Porte du Sahara’. Rattachée administrativement au gouvernorat de Kébili, elle est située à 488 kilomètres de Tunis. Elle constitue une municipalité de 30 245 habitants (en 2014). Ses habitants sont essentiellement des’ Mrazig’ qui seraient, selon la tradition, des immigrants arabes de la tribu de Banu Sulaym arrivés en Tunisie au xiiie siècle.",
  },
];


function Contaniersys(){
    return(
        <>
        {APIs.map(({link, desc, destination}) =>(

          <Voyage link={link} desc={desc} destination={destination}/>

        ))}

        </>
    );
}
export default Contaniersys;