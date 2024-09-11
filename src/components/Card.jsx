import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StrategyCards = ({ strategy }) => {

  const progressValue = strategy?.backtest_win || 0; 

  const customText = "Backtest avg win%";

  const pathColor = progressValue > 60 ? "#38e964" : "#FFD700";

  const performanceData = [
    { label: 'Total trades triggered', value: strategy?.total_trades },
    { label: 'Successful Outcomes', value: strategy?.successful_outcomes },
    { label: 'Successful Percentage', value: `${strategy?.successful_percentage}%` },
    { label: 'Average Sharpe Ratio', value: strategy?.average_sharpe_ratio },
    { label: 'Maximum Drawdown', value: `${strategy?.max_drawdown}%` },
  ];

  return (
    <div className="bg-black border text-center text-white px-6 py-3 rounded-2xl  w-72">
      <h2 className="text-xl text-[#38e964] font-medium ">{strategy?.symbol}</h2>
      <h3 className="text-md font-semibold my-6">{strategy?.title}</h3>
      <div className="text-sm mt-2 text-gray-400  h-20">
        {strategy?.description}
        <p className="text-[#ffd900] cursor-pointer">read more</p>
      </div>

      <div className="relative w-24 h-24 mx-auto my-6">
        <CircularProgressbar
          value={progressValue}
          styles={buildStyles({
            textColor: "#38e964",
            pathColor: pathColor,
            trailColor: "#2c2c2e",
            textSize: '8px'
          })}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[#38e964] text-xs font-medium">{progressValue}%</span>
          <span className="text-[#38e964] text-xs font-medium">{customText}</span>
        </div>
      </div>


      <p className="text-center text-lg font-semibold">Copiers - {strategy.copiers}</p>

      {/* Stats */}
      <div className="bg-[#272727] px-4 py-3 rounded-lg mt-6">
        <h4 className="font-medium mb-2 text-[#38e964]">Backtest Performance</h4>
        {performanceData.map((metric, index) => (
          <div key={index} className={`flex justify-between py-1.5 px-2 text-sm ${index % 2 === 0 ? 'bg-[#1C1C1C] rounded-3xl ' : 'bg-transparent'} text-white`}
          >
            <span>{metric.label}</span>
            <span>{metric.value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-6 mb-2">

        <button className="bg-transparent w-20 text-center border border-purple-600 text-sm  py-1 px-4 rounded-full text-purple-600 mt-6 hover:bg-purple-700 hover:text-white">
          Copy
        </button>

        <button className="text-[#ffd900] underline text-sm mt-4">
          View Strategy
        </button>

      </div>
    </div>
  );
};

export default StrategyCards;
