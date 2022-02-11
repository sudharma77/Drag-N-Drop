const DragItem = document.querySelectorAll(".dragDiv")
const TargetPlace = document.querySelectorAll(".smallDiv") 
let Itemvalue = null ;
console.log(TargetPlace)
for(let i = 0 ; i < DragItem.length ; i++){
    const item = DragItem[i]
    item.addEventListener('dragstart' , ()=>{
        Itemvalue = item ;
    })

    for(let j = 0 ; j < TargetPlace.length ; j++){
        const itemPlace = TargetPlace[j] ;

        itemPlace.addEventListener("dragover" ,(e)=>{
            e.preventDefault() ;
        })
        itemPlace.addEventListener("drop" , function(){
            this.append(Itemvalue)
        })
        
    }
}



