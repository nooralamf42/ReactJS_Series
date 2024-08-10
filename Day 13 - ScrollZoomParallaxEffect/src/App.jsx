import { useScroll, motion, useTransform} from 'framer-motion'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useRef } from 'react'

function App() {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["0 0", "1 1"]
  })
  let scale1 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  let scale2 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  let scale3 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  let scale4 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  let scale5 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  let scale6 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  let scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  
  const imagesData = [
    {
      src: "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2021/08/345-final.jpg",
      top: "29vh", // default for the first image
      left: "3vw", // default for the first image
      width: "19vw",
      height: "28vh",
      scale: scale1,
    },
    {
      src: "https://im.rediff.com/sports/2016/aug/19sindhu-silver1.jpg",
      top: "-30vh",
      left: "1vw",
      width: "17vw",
      height: "30vh",
      scale: scale2,
    },
    {
      src: "https://im.rediff.com/sports/2018/sep/05jinson.jpg?w=670&h=900",
      top: "31vh",
      left: "-18vw",
      width: "18vw",
      height: "24vh",
      scale: scale3,
    },
    {
      src: "https://static.tnn.in/thumb/msid-112197055,thumbsize-28062,width-1280,height-720,resizemode-75/112197055.jpg?quality=100",
      top: "-18vh", // no top adjustment, so keeping it at 0vh
      left: "22.5vw",
      width: "17vw",
      height: "23vh",
      scale: scale4,
    },
    {
      //middleImage
      src: "https://media.assettype.com/thefourthonline%2F2024-08-07%2F7e0w34lm%2FHERO-vineesh.jpg?rect=0%2C0%2C1920%2C1080&w=1200&auto=format%2Ccompress&fit=max",
      top: "0vh",
      left: "0vw",
      width: "25vw",
      height: "25vh",
      scale: scale5,
    },
    {
      src: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2024/08/08/Aman_Sehrawat___0301.jpg?quality=80&zoom=1&ssl=1",
      top: "-4.5vh",
      left: "-22.5vw",
      width: "17vw",
      height: "39vh",
      scale: scale6,
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkMGJAk5H0gKBvECm5nZPCs1AJye8qg4W8w&s",
      top: "19.5vh",
      left: "21vw",
      width: "12vw",
      height: "41vh",
      scale: scale7,
    },
  ];

  return (
   <div className='parentDiv'>
    <Header/>
    <div className='main' ref={targetRef}>
      <div className="sticky">
        {
          imagesData.map(({src, top, left, width, height, scale}, index)=>(
            <motion.div className='flex imageDiv' style={{scale}}>
            <img 
            style={{width, height, top, left}}
            src={src} alt="" srcset="" />
            </motion.div>
          ))
        }
      </div>
    </div>
    <Footer/>
   </div>
  )
}

export default App
