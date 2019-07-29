import { Injectable } from "@angular/core";

@Injectable()
export class EquiposService{

    private equipos:Equipo[] = [
            {
            id: '1',               
            nombre: "Barcelona",
            resumen: "Mantiene una rivalidad muy fuerte con el Real Madrid. Los blancos fueron, históricamente, el equipo español con más títulos, pero el Barcelona fue poco a poco recortando distancias hasta superarles esta misma temporada gracias a su triplete Liga-Copa-Champions. Los azulgrana son el equipo con más Copas y Supercopas de España y también domina el palmarés de las extintas Recopa y Copa de Ferias.",
            img: "assets/img/barcelona.png",
            creacion: "1899-11-29",
            titulos:"81 títulos",
            estadio: "CampNou",
            ganoMundial:"SI",
            pais: "España"
            },
            {
            id: '2',
            nombre: "Real Madrid",
            resumen: "Junto con el Barcelona, es el equipo que marca la pauta en el fútbol español. La igualdad entre ambos, especialmente en los últimos años, es la nota predominante. Ahora mismo están dos títulos por detrás de su gran rival. Eso sí, El Real Madrid sigue siendo el equipo con más Ligas españolas y el que más Copas de Europa ha ganado (10).",
            img: "assets/img/realmadrid.png",
            creacion: "1902-03-06",
            titulos:" 79 títulos",
            estadio: "Santiago Bernabeu",
            ganoMundial:"SI",
            pais: "España"
            },
            {
            id: '3',
            nombre: "SL Benfica",
            resumen: "El Oporto le ha comido terreno en los últimos tiempos, pero el Benfica es el equipo más popular de Portugal, sigue ganando títulos y es un equipo respetadísimo fuera de su país. Los lisboetas dominan en Portugal (73 de sus 75 títulos son en competiciones domésticas). Pierde la batalla con el Oporto en las competiciones europeas.",
            img: "assets/img/benfica.png",
            creacion: "1904-02-28",
            titulos:" 75 títulos",
            estadio: "Da Luz",
            ganoMundial:"NO",
            pais: "Portugal "
            },
            {
            id: '4',
            nombre: "FC Porto",
            resumen: "El caso del Oporto (FC Porto es su nombre oficial) es muy similar al del Barcelona. Casi siempre ha vivido a la sombra (aunque cerca) de su gran rival, en este caso el Benfica, pero en los últimos 20-25 años ha invertido la tendencia. Llegó a ser el equipo con más títulos de Portugal en la temporada 13/14, pero en la última temporada no sumó ningún título y volvió a ser superado por el Benfica. Sí le ‘gana’ en títulos internacionales.",
            img: "assets/img/porto.png",
            creacion: "1893-09-28",
            titulos:" 74 títulos",
            estadio: "Do Dragao",
            ganoMundial:"NO",
            pais: "Portugal"
            },
            {
            id: '5',
            nombre: "FC Bayern Munich",
            resumen: "Su caso es un tanto particular. Hasta hace 50 años era un equipo modesto (sólo había ganado una Liga y una Copa). Pero con la llegada a la plantilla de los Maier, Beckenbauer, Breitner o Gerd Müller todo cambió. Se convirtió en una máquina de ganar y ya no ha parado. Además, aunque la Bundesliga es fuerte y suele tener rivales que le aprietan, realmente no hay otro club alemán con su infraestructura y capacidad económica.",
            img: "assets/img/bayern.png",
            creacion: "1900-02-27",
            titulos:" 63 títulos",
            estadio: "Allianz Arena",
            ganoMundial:"NO",
            pais: "Alemania"
            },
            {
            id: '6',
            nombre: "Manchester",
            resumen: "Dos personas son las máximas responsables de que el United sea ahora mismo considerado como uno de los grandes de Europa: Matt Busby y Alex Ferguson. Busby, en los años 50 y 60, consolidó al equipo entre los clubes punteros de Inglaterra (antes no era así) y le dio su primera Copa de Europa. Ferguson, que llegó a mediados de los 80, lo hizo crecer exponencialmente ganándolo prácticamente todo.",
            img: "assets/img/manchester.png",
            creacion: "1878-03-05",
            titulos:" 62 títulos",
            estadio: "Old Trafford",
            ganoMundial:"NO",
            pais: "Inglaterra"
            },  
            {
            id: '7',
            nombre: "Liverpool FC",
            resumen: "Se puede decir que es el único equipo inglés que siempre ha sido grande. Aunque ha pasado por altibajos, no se encuentran largos períodos de tiempo sin sumar títulos. Por ejemplo, lleva más de 20 años sin ganar la Liga, pero en ese tiempo sí ha ganado otros títulos, entre ellos la Champions. El Manchester United, eso sí, le ha desbancando como el club inglés con mejor palmarés.",
            img: "assets/img/liverpool.png",
            creacion: "1892-06-03",
            titulos:" 59 títulos",
            estadio: "Anfield",
            ganoMundial:"NO",
            pais: "Inglaterra"
            },
            {
            id: '8',
            nombre: "Juventus FC ",
            resumen: "La ‘Vecchia Signora’ tiene muy duros competidores en su país con Milan e Inter, pero son ellos los que presentan un mejor palmarés. Es el club que más veces ha ganado la Liga y la Copa. Pueden presumir además de ser el único conjunto de Italia que ha ganado todos los títulos oficiales posibles. Una curiosidad: es el equipo con más aficionados de Italia, pero en su ciudad, Turín, es el Torino el club más popular.",
            img: "assets/img/juventus.png",
            creacion: "1897-11-01",
            titulos:" 57 títulos",
            estadio: "Allianz Stadium",
            ganoMundial:"NO",
            pais: "Italia"
            }
        ];
    

    constructor(){
        console.log("servicio listo!!!");
    }

    public getEquipos():Equipo[]{
        return this.equipos;
    }

    public getEquipoXId(idx:string):Equipo{
        for(let equipo of this.equipos){
            if(equipo.id == idx){
              return equipo;
            } 
        }
    }

    public buscarEquipos(termino:string):Equipo[]{
        let equiposArr:Equipo[] = [];
        termino = termino.toLowerCase();
  
        for(let equipo of this.equipos){
          let nombre = equipo.nombre.toLowerCase();
          if(nombre.indexOf(termino) >= 0){
            equiposArr.push(equipo);
          }
  
        }
        return equiposArr;
      }
  
}

export interface Equipo{
    id:string;
    nombre:string;
    resumen:string;
    img:string;
    creacion:string;
    titulos:string;
    estadio:string;
    ganoMundial:string;
    pais:string;
}
