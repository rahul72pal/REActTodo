import { useEffect, useRef, useState } from "react";
import "./App.css";
import React from "react";


const String_Arrays = [
  "Coding is the process of creating instructions for a computer to execute. It involves writing algorithms, debugging code, and testing software.",
  "Computer science is the study of algorithms, data structures, and computational systems. It encompasses a wide range of topics, including software engineering, artificial intelligence, and cybersecurity.",
  "Web development is the practice of building websites and web applications. It involves designing user interfaces, writing HTML, CSS, and JavaScript code, and deploying applications to web servers.",
  "Programming languages such as JavaScript, Python, and Java are used to write code for various purposes, including web development, data analysis, and mobile app development.",
  "Software engineering is the discipline of designing, developing, and maintaining software systems. It involves project management, quality assurance, and software testing.",
  "Data science is the field of analyzing and interpreting large datasets to extract valuable insights. It involves statistics, machine learning, and data visualization techniques.",
  "Cybersecurity is the practice of protecting computer systems and networks from cyber threats. It involves implementing security measures, conducting vulnerability assessments, and responding to security incidents.",
  "Artificial intelligence is the development of computer systems that can perform tasks that typically require human intelligence. It involves machine learning, natural language processing, and computer vision.",
  "Cloud computing is the delivery of computing services over the internet. It involves storing data, running applications, and accessing resources on remote servers.",
  "Mobile app development is the process of creating software applications for mobile devices. It involves designing user interfaces, writing code for iOS and Android platforms, and testing applications on mobile devices.",
  "Frontend development focuses on creating the user interface and experience of websites and web applications. It involves using HTML, CSS, and JavaScript to design and build responsive and interactive interfaces.",
  "Backend development involves building the server-side logic and database functionality of websites and web applications. It includes tasks such as designing APIs, handling user authentication, and managing data storage.",
  "Full-stack development combines frontend and backend development skills to create end-to-end solutions for web development projects. Full-stack developers are proficient in both client-side and server-side technologies.",
  "Version control systems such as Git are used to track changes to code and collaborate with other developers on software projects. They allow developers to manage different versions of code, merge changes, and revert to previous states.",
  "Agile software development is an iterative approach to building software that emphasizes flexibility, collaboration, and customer feedback. It involves breaking down projects into small, manageable tasks and delivering working software in short cycles.",
  "DevOps is a set of practices that combines software development and IT operations to improve the speed, quality, and reliability of software delivery. It involves automating processes, monitoring performance, and fostering a culture of collaboration between development and operations teams."
];

function getRandomStringArrays() {
  const numStrings = Math.floor(Math.random() * String_Arrays.length) + 1;
  // const selectedStrings = [];

  
  return Math.floor(Math.random() * String_Arrays.length);
    // selectedStrings.push(String_Arrays[randomIndex]);
  

  // return selectedStrings;
}
const index = getRandomStringArrays();
console.log("String Index =",index)


const getCloud = ()=> String_Arrays[index]?.split(' ')
// .sort(() => Math.random() > 0.5 ? 1: -1);



// console.log(String_Arrays);


function Word(props){
  const {text , active, correct} = props;

  // const rerender = useRef(0);

  // useEffect(()=> {
  //   rerender.current += 1
  // })

  if(correct === true){
    return <span className="font-bold text-green-500">{text} </span>
  }
  if(correct === false){
    return <span className="font-bold text-red-500">{text} </span>
  }
  if(active){
    return <span className={`${active? "font-bold text-blue-300 text-lg": ""}`}>{text} </span>
  }
  return <span className="">{text} </span>
}

Word = React.memo(Word);

function Timer (props){

  const {correctWords , startCounting} = props;
  const [timeElapsed ,setTimeElapsed] = useState(0);

  useEffect(()=>{
    let id 
    if(startCounting){
      id =setInterval(()=>{
        setTimeElapsed(oldTime => oldTime+1 )
      },1000)
    }

    return () => {
      clearInterval(id);
    }

  },[startCounting])

  const minutes = timeElapsed/60;

  return <div>
    <span className="text-white"><b>Time:</b> {timeElapsed} Sec</span>
    <div className="text-white"><b>Speed:</b> {((correctWords/minutes) || 0).toFixed(2)} WPM</div>
  </div>
}

function App() {

  const [userInput , setUserInput] = useState('');

  const cloud = useRef(getCloud());
  const [startCounting , setStartCounting] = useState(false);

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray , setCorrectWordArray] = useState([]);

  function processInput(value) {

    if(activeWordIndex === cloud.current.length){
      //stop
      return;
    }

    if(!startCounting){
      setStartCounting(true);
    }

    if(value.endsWith(' ')){


      if(activeWordIndex === cloud.current.length-1){
        setStartCounting(false);
        setUserInput("Completed");
      }
      else{
        setUserInput('');
      }

      //the user has finished this word
      setActiveWordIndex(index => index+1);

      //correct word
      setCorrectWordArray(data => {
          const word = value.trim();
          const newResult = [...data]
          newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
          return newResult;
        })
    }
    else{
      setUserInput(value);
    }
  }

  return (
    <main class="bg-[#020206] w-[100%] h-[100vh] overflow-auto flex flex-col justify-start pt-[100px] items-center  ">

      <div className="w-full py-4 text-5xl font-bold  overflow-auto text-center text-white  rounded-lg shadow-2xl   ">
        Typing Text ............
      </div>

      <div className="px-3 py-7">
        <Timer
        startCounting={startCounting}
        correctWords ={correctWordArray.filter(Boolean).length}
        />
      </div>

      <div className="text-white  text-center lg:w-[50%] mx-3 my-4 py-5">
        {cloud.current?.map((word , index)=>{

          // if(index === activeWordIndex){
          //   return <b className="text-green-400">{word} </b>
          // }

          // return <span>{word} </span>

          return <Word 
          text={word}
          active = {index === activeWordIndex}
          correct={correctWordArray[index]}
          />
        })}
      </div>

      <div>
        <input className="text-xl bg-gray-900 px-2 py-2 text-white rounded-lg border-2 border-gray-500" type="text" value={userInput} onChange={(e)=> processInput(e.target.value)} />
      </div>
      
    </main>
  );
}

export default App;