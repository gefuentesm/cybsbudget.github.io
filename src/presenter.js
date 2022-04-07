class Render{
    constructor(){

        let f1=(arr)      =>  `Fase ${arr.fase} <br/><input placeholder="Nombre de la fase"></input><br/>
                               <input placeholder="Duracion(semana)"></input><br/>
                               <input placeholder="Monto límite de la fase($)"></input><br/>
                               <img src="./public/img/schedule.svg" style="width:15px;height:15px"><input id="total-df${arr.fase}" value="0"></input><br/>
                               <img src="./public/img/avion.svg" style="width:15px;height:15px"><input id="total-gf${arr.fase}" value="0"></input><br/>
                               <img src="./public/img/suma.svg" style="width:15px;height:15px"><input id="total-tf${arr.fase}" value="0"></input><br/>
                               <div id="f${arr.fase}"class="mes" ondrop="drop(event)" ondragover="allowDrop(event)">
                               Consultores</div>`;
        let f2=(a)      =>              `<form id="t-${a.name}" draggable="true" class="card2" ondragstart="drag(event)">
                                            <div>
                                                <input type="text" name="nombre" readonly="" class="name" value="${a.name}" ><button type="button" onclick="bt_show('data-${a.name}')" name="f-${a.name}" id="f-${a.name}">v</button>
                                            </div>
                                            <div name="data-${a.name}" style="display:none">
                                                <div>
                                                    <img src="./public/img/home.svg" style="width:15px;height:15px"><input type="text" name="remote" id="remote-${a.name}" style="width:30px" value="0"><img src="./public/img/avion.svg" style="width:15px;height:15px"><input type="text" name="onsite" id="onsite-${a.name}" style="width:30px" value="0">
                                                </div>
                                                <div>
                                                    <img src="./public/img/dolar.svg" style="width:15px;height:15px"><input type="text" name="fee" id="fee-${a.name}" style="width:100px" value="0">
                                                </div>
                                            </div>
                                        </form>`;
        let f3=(o)      =>    `<p>viaje de ${o.nombre}</p>
                                  <img src="./public/img/dias.svg" style="width:15px;height:15px"><input type="text" name="dias" placeholder="Dias de estadia" /><br/>
                                  <img src="./public/img/boletoaereo.svg" style="width:15px;height:15px"><input type="text" name="boletos" placeholder="Boletos" /><br/>
                                  <img src="./public/img/comida.svg" style="width:15px;height:15px"><input type="text" name="gastos" placeholder="Gastos diarios" /><br/>
                                  <img src="./public/img/hotel.svg" style="width:15px;height:15px"><input type="text" name="hotel" placeholder="Hotel diario" />`
                
        this.fm = new Map();
        this.fm.set( "Fase",f1 );
        this.fm.set( "Team",f2 );
        this.fm.set( "Viaje",f3 );

    }
    formatCell(valor){
         let v=valor==null?0:valor;
         v=v*100;
         let rango=""
         if(v<=30)
             rango="#b3b3ff"
         else if(v>30 && v<=50)
             rango="#ffcc66"
         else if(v>50 && v<=100)
             rango="#33cc33"
         else rango="#ff6699";
          
         return v==0?`style="background-color:white;color:#b3b3ff;"`:`style="background-color:${rango};"`;
    }
    send(o,i){
        return this.fm.get(i)(o);
    }
    sendTable(arr,i,encab,e_encab,tag,e_tag){
        var t=encab;
        arr.forEach(o =>{
            t+=tag+this.fm.get(i)(o)+e_tag;
        })
        t+=e_encab;
        return t;
    }
    sendTableComp(o,arr,i,encab,e_encab,tag,e_tag){
        var t=encab;
        arr.forEach(a =>{
            t+=tag+this.fm.get(i)(o,a)+e_tag;            
        })
        t+=e_encab;
        return t;
    }
 }
 function makePhases(container,arr,render){
    document.getElementById(container).style.display="";
    document.getElementById(container).innerHTML = render.sendTable(arr,"Fase","<table class='card' style='height:100%'><tbody><tr>","</tr></tbody></table>","<td style='vertical-align:top'>","</td>");
 }
 function showTeam(sidebar,container,arr,render){
    document.getElementById(sidebar).style.display="";
    document.getElementById(container).innerHTML = render.sendTable(arr,"Team","<table><tbody>","</tbody></table>","<tr><td style='vertical-align:top'>","</td></tr>");
 }