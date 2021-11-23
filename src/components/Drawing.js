import React from 'react'
import { Layer, Line } from "react-konva";

const Drawing = ({ lines, storke }) => {
    return (
        <Layer >
            {lines.map((line, i) => (
                <Line key={i} points={line} stroke={line.storke} />
            ))}
        </Layer>
    )
}

export default Drawing;