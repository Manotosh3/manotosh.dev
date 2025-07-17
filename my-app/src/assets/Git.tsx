import React from "react";
import Git from 'react-github-calendar'

function GitCal() {
    return (
        <>
        <div className="bg-[#4a4a4a] p-8 rounded-2xl border-gray-600 shadow-2xl ">
            <div className="overflow-x-auto">
                <Git username="Manotosh3" colorScheme="dark" theme={{dark:['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']}}
                fontSize={12} blockSize={12} blockMargin={3} hideColorLegend={false} hideTotalCount={false}/>
            </div>
        

        <style>{`
            .react-github-calendar {
                color: #ffffff !important;
            }
            .react-github-calendar text {
                fill: #ffffff !important; 
                font size: 12px !important;
            }
            .react-github-calendar .react-github-calendar-legend {
                color: #ffffff !important;
            }
            .react-github-calendar .react-github-calendar-legend text {
                fill: #ffffff !important;
            }
        `}</style>
    </div>
    </>
    )
};

export default GitCal