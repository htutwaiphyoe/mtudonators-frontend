import { useRef, useEffect } from "react";

import Chart from "chart.js";
import classes from "./Chart.module.scss";

const Graph = ({ labels, label, data, bg, type }) => {
    const chartRef = useRef();

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type,
            data: {
                labels,
                datasets: [
                    {
                        label,
                        data,
                        backgroundColor: bg,
                        barThickness: 10,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });
    }, [labels, label, data, bg, type]);

    return (
        <div className={classes.Chart}>
            <canvas id="myChart" ref={chartRef} />
        </div>
    );
};

export default Graph;
