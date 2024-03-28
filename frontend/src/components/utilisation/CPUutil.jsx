import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"

const CPUutil = () => {
    return (
        <>
            <div className="p-8 flex flex-col items-center bg-zinc-800 rounded-2xl border border-zinc-600 shadow-xl">
                <ReactSpeedometer
                    maxValue={100}
                    value={10}
                    needleColor="steelblue"
                    startColor="green"
                    maxSegmentLabels={5}
                    segments={5555}
                    endColor="red"
                    width={250}
                    height={180}
                />
                <h1 className='text-lg'>CPU Utilization</h1>
            </div>
        </>
    )
}

export default CPUutil;