import BubbleSort from "../Algorithms/BubbleSort";

const BubbleSortAnimation  = (array,speed)=>{

    const animations = BubbleSort(array)
    // console.log(animations.length)
    const n = animations.length
    const arrayBars = document.getElementsByClassName('array_bar');
    const play = document.getElementsByClassName('play')
    const navbar = document.getElementsByClassName('main_logo')
    const mainheader = document.getElementsByClassName('sub_header')
    mainheader[0].style.display='block'
    navbar[0].style.display='none'
    play[0].style.display = 'none'
    // play[0].style.display = 'none'
    // const delay = (n*10)
    // console.log(delay)
    // setTimeout(()=>{
    //   play[0].style.display = 'block'
    // },5000)
    let Cmpcounter = 1
    let Swpcounter = 1
    // for(let i =0 ;i < arrayBars.length;i++){
    //     console.log(arrayBars[i].style.backgroundColor)
    //   }
    let count = 0
    for(let i=0 ; i<n;i++){
      // console.log(i)
      
      // play[0].style.display = 'none'
        // console.log("counter---------",counter)
        const animation = animations[i]
        if(animation[0] === 'cmp'){
            const [barOneIdx,barTwoIdx] = animation.slice(1,3)
            // console.log(barOneIdx,barTwoIdx)
            const barOneStyle = arrayBars[barOneIdx].style
            const barTwoStyle = arrayBars[barTwoIdx].style
            const color = Cmpcounter%2 === 1?['#fed219','#0092cc']:['#d26c18','#d26c18']
            Cmpcounter++;
            // eslint-disable-next-line no-loop-func
            setTimeout(()=>{
              // console.log(count)
              count ++
              if(count === n){
                play[0].style.display = 'block'
                navbar[0].style.display='block'
                mainheader[0].style.display='none'
              }
                barOneStyle.backgroundColor = color[0]
                barTwoStyle.backgroundColor = color[1]

            },i*(50/speed))
            
        }
        else{
            const barOneIdx = animation[1];
            const barTwoIdx = animation[3];
            const barOneHeight = animation[2];
            const barTwoHeight = animation[4];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = Swpcounter%2 === 1?["#e52c6a","#e52c6a"]:["#d26c18","#d26c18"]
            Swpcounter++;
            // eslint-disable-next-line no-loop-func
            setTimeout(()=>{
                // console.log(count)
                count ++
                // console.log(count)

                if(count === n){
                  play[0].style.display = 'block'
                  navbar[0].style.display='block'
                  mainheader[0].style.display='none'
                }
                barOneStyle.height = `${barOneHeight}px`
                barTwoStyle.height = `${barTwoHeight}px`
                barOneStyle.backgroundColor = color[0]
                barTwoStyle.backgroundColor = color[1]
            },i*(50/speed))

        }
          
        // if(animation[0] === 'cmp'){
        //     const [barOneIdx,barTwoIdx] = animation.slice(1,3)
        //     console.log(barOneIdx,barTwoIdx)
        //     const barOneStyle = arrayBars[barOneIdx].style
        //     const barTwoStyle = arrayBars[barTwoIdx].style
        //     barOneStyle.backgroundColor = 'teal'
        //     barTwoStyle.backgroundColor = 'teal'
        // }
    }
    // while(true){
    //   console.log(Cmpcounter+Swpcounter)
    // }


}

export const BubbleSortDesc = {
    
  };

export default BubbleSortAnimation