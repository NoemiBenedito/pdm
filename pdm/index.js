export function creatFila(tamanho = 10){
    return [... new Array(tamanho)]
}

export function inserirItem (item, fila){
    const espaco=fila.indexOf(undefined)

    if(espaco===-1){
        console.log("está cheia")
        return
    }
    fila[espaco]=item
}
export function retirarFila(item){

if(item[0]=== undefined){
    console.log("está vazia")
    return
}
 let espacoPegado=item[0]

 for(let i=0;i<fila.lenght;i++){
    item[0]=item[i+1]
 }
 return espacoPegado
}

export function esvaziarFila(fila,item){
    fila.forEach(item=>(item=undefined)) 
        
    }
export function verTamanhoFila(fila = []) {
    let emptySpaces = (fila.length - fila.IndexOf(undefined)) 
    let usedSpaces = emptySpaces
    let size = fila.length
    let subQueue = [ ] 
    for(let i = 0; i<fila.indexOf(undefined); i++) {
        subQueue[1] = fila[1] 
        }
        
        console.log(fila) 
        }
