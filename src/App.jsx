import { useEffect, useState } from "react";

import "./App.css";
// import Timer from "./Timer";

function App() {
  const easyLevelArray = [
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-9.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-2.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-3.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-9.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-3.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-4.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-4.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-5.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-5.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-8.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-8.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "easyLevel/animal-2.png",
      isTrue: false,
    },
  ];

  const normalLevelArray = [
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit1.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit1.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit9.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit9.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit3.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit3.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit4.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit4.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit5.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit5.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit6.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit6.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit7.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit7.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit8.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "normalLevel/fruit8.png",
      isTrue: false,
    },
  ];
  const hardLevelArray = [
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-1.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-1.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-2.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-2.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-3.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-3.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-4.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-4.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-5.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-5.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-6.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-6.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-7.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-7.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-8.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-8.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-9.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-9.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-10.png",
      isTrue: false,
    },
    {
      id: Math.floor(100 + Math.random() * 9000),
      backCover: "hardLevel/food-10.png",
      isTrue: false,
    },
  ];
  //  timer
  const [timeSecend, setTimeSecend] = useState(1);
  const [timeMin, setTimeMin] = useState(0);
  //  timer

  const [count, setCount] = useState(easyLevelArray);
  const [tryTimes, setTryTimes] = useState(0);
  const [gameLevel, setGameLevel] = useState(1);
  const [isWin, setIsWin] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [whichCard, setWhichCard] = useState({
    cardOne: 0,
    cardOneInfo: "",
    cardOneIsTrue: "",
    cardTwo: 0,
    cardTwoInfo: "",
    cardTwoIsTrue: "",
  });

  useEffect(() => {
    setCount(() => {
      if (gameLevel == 1) {
        return easyLevelArray.sort(() => Math.random() - 0.5);
      } else if (gameLevel == 2) {
        return normalLevelArray.sort(() => Math.random() - 0.5);
      } else {
        return hardLevelArray.sort(() => Math.random() - 0.5);
      }
    });
  }, [gameLevel, isWin, refresh]);

  useEffect(() => {
    const isFinish = count.some((i) => i.isTrue == false);
    !isFinish && setIsWin(true);

    if (whichCard.cardOne && whichCard.cardTwo) {
      !whichCard.cardOneIsTrue &&
        !whichCard.cardTwoIsTrue &&
        whichCard.cardOne !== whichCard.cardTwo &&
        setTryTimes((prev) => prev + 1);

      if (whichCard.cardOneInfo && whichCard.cardTwoInfo) {
        if (
          whichCard.cardOneInfo == whichCard.cardTwoInfo &&
          whichCard.cardOne !== whichCard.cardTwo
        ) {
          count
            .filter((i) => {
              return i.backCover == whichCard.cardOneInfo;
            })
            .map((i) => (i.isTrue = true));
        }
      }
      setTimeout(() => {
        setWhichCard((prev) => {
          return { ...prev, ["cardOne"]: 0, ["cardTwo"]: 0 };
        });
      }, 500);
    }
  }, [whichCard]);

  useEffect(() => {
    let timer;
    if (!isWin) {
      if (timeMin < 10) {
        timer = setInterval(() => {
          setTimeSecend((prev) => prev + 1);
          if (timeSecend === 60) {
            setTimeMin((prev) => prev + 1);
            setTimeSecend(0);
          }
        }, 1000);
      }
    }
    return () => clearInterval(timer);
  }, [timeSecend, isWin]);

  return (
    <>
      <div
        className="bg-glasses relative flex z-10 justify-between items-center
       flex-col max-w-[650px] h-[300px] 2xs:h-[400px] xs:h-[550px] sm:h-[600px] lg:h-[700px] m-auto px-4 mt-[70px]"
      >
        <div className="flex items-center justify-between w-full py-4 ">
          {/* select box */}
          <div className="relative h-10  sm:w-[200px]">
            <select
              onChange={(event) => {
                setIsWin(false);
                setGameLevel(event.target.value);
                setTryTimes(0);
                setWhichCard((prev) => {
                  return { ...prev, ["cardOne"]: 0, ["cardTwo"]: 0 };
                });
                setTimeMin(0);
                setTimeSecend(0);
              }}
              className="peer font-bold h-full w-full rounded-[7px] border-2 border-blue-gray-200 border-t-transparent bg-transparent
             px-3 py-2 font-sans text-sm border-black text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border
              placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2
               focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option value="1">Easy</option>
              <option value="2">Normal</option>
              <option value="3">Hard</option>
            </select>
            <label
              className="before:content[' '] font-bold after:content[' '] pointer-events-none absolute left-0 
            -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400
             transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
              before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l-2
               before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px]
                after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
                 after:border-t-2 after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm
                  peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500
                   peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
                   peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2
                    peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2
                     peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent
                      peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
                      peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Level
            </label>
          </div>
          {/* select box */}

          {/* refresh */}
          <div
            onClick={() => {
              setIsWin(false);
              setTryTimes(0);
              setWhichCard((prev) => {
                return { ...prev, ["cardOne"]: 0, ["cardTwo"]: 0 };
              });
              setTimeMin(0);
              setTimeSecend(0);
              count.forEach((i) => {
                i.isTrue = false;
              });
              setRefresh((prev) => !prev);
            }}
            className="text-black transition-all duration-700 cursor-pointer hover:rotate-90 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:size-10 size-6 sm:size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
          {/* refresh */}
        </div>
        <div
          className={`relative z-50 grid content-center ${
            gameLevel == 1 && "grid-cols-4 grid-rows-3"
          } ${gameLevel == 2 && "grid-cols-4 grid-rows-4"} ${
            gameLevel == 3 && "grid-cols-5 grid-rows-4"
          }
         gap-3 py-2 rounded-md size-full justify-items-center`}
        >
          {count.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (!whichCard.cardOne) {
                  setWhichCard((prev) => {
                    return {
                      ...prev,
                      ["cardOneInfo"]: item.backCover,
                      ["cardOne"]: item.id,
                      ["cardOneIsTrue"]: item.isTrue,
                    };
                  });
                } else if (whichCard.cardOne && !whichCard.cardTwo) {
                  setWhichCard((prev) => {
                    return {
                      ...prev,
                      ["cardTwoInfo"]: item.backCover,
                      ["cardTwo"]: item.id,
                      ["cardTwoIsTrue"]: item.isTrue,
                    };
                  });
                }
              }}
              className="flex items-center justify-center transition-all duration-1000 cursor-pointer flip-card size-full"
            >
              <div
                className={`flip-card-inner  ${
                  whichCard.cardOne == item.id && "rotateY180"
                } ${whichCard.cardTwo == item.id && "rotateY180"} ${
                  item.isTrue && "rotateY180"
                }`}
              >
                <div className="flex items-center justify-center rounded flip-card-front">
                  <img src="/pic.png" alt="pic" />
                </div>
                <div className="rounded bg-yellow-200/0 flip-card-back">
                  <img className=" size-full" src={item.backCover} alt="pic" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex z-50 font text-xs sm:text-base md:text-2xl items-center justify-between w-full h-[15%]">
          <div className="flex items-center justify-center">
            <span className="font-bold ">time </span>:
            <span className="font-extrabold ">
              <div>
                <h1>
                  {timeMin < 10 && 0}
                  {timeMin}:{timeSecend < 10 && 0}
                  {timeSecend}
                </h1>
              </div>
            </span>
          </div>
          <div className="font-bold">
            <span className="font-bold ">number of attempts</span>:
            <span className="font-extrabold ">{tryTimes}</span>
          </div>
        </div>
      </div>

      {/* modals */}
      <div className="fixed inset-0 z-0 backdrop-blur-[6px] size-full"></div>
      <div
        className={`fixed ${
          isWin ? "flex" : "hidden"
        } inset-0 z-10 items-center justify-center bg-black/60 size-full`}
      >
        <div
          className="relative overflow-hidden flex justify-between flex-col size-[200px] sm:size-[400px] p-4 sm:p-8
         bg-purple-600 rounded-md"
        >
          <img className="absolute " src="/happyhappy.gif" alt="" />
          <div className="text-base font-bold text-center sm:text-4xl">
            winner winner
          </div>
          <div className="flex items-center justify-between">
            <div className="flex  z-50 font text-xs sm:text-2xl items-start justify-between w-full h-[15%]">
              <div className="flex items-center justify-center">
                <span className="font-bold">time </span>:
                <span className="font-extrabold ">
                  <div>
                    <h1>
                      {timeMin < 10 && 0}
                      {timeMin}:{timeSecend < 10 && 0}
                      {timeSecend}
                    </h1>
                  </div>
                </span>
              </div>
              <div
                onClick={() => {
                  setIsWin(false);
                  setTryTimes(0);
                  setWhichCard((prev) => {
                    return { ...prev, ["cardOne"]: 0, ["cardTwo"]: 0 };
                  });
                  setTimeMin(0);
                  setTimeSecend(0);
                }}
                className="text-black transition-all duration-700 cursor-pointer hover:rotate-90 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="sm:size-8 size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <div className="">
                <span className="font-bold">efforts</span>:
                <span className="font-extrabold ">{tryTimes}</span>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 left-0 size-full"
            src="/party.gif"
            alt=""
          />
        </div>
      </div>
      {/* modals */}
    </>
  );
}

export default App;
