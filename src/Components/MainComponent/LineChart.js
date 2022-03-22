import React from 'react';
import clsx from 'clsx';
import styles from './MainComponent.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const up = (ctx, value) => ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
        {
            data: [30, 30, 36, 20, 15, 13],
            borderColor: "#039BE5",
            lineTension: 0.4,
            pointBorderWidth: 4,
            pointBackgroundColor: '#039BE5',
            fill: true,
            tension: 0.4,
            segment: {
                borderColor: ctx => up(ctx, 'red') || down(ctx, 'red'),
                backgroundColor: ctx => up(ctx, 'red') || down(ctx, 'red'),
            },
        }
    ]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
                borderWidth: 0,
            },
            ticks: {
                display: false,
            },
        },
        y: {
            grid: {
                display: false,
                borderWidth: 0,
            },
            ticks: {
                display: false,
            },
            reverse: true,
            beginAtZero: true
        }
    },
};


function Chart() {
    return (
        <div className={clsx(
            styles.wrapper_chart
        )}>
            <Line
                options={options}
                data={data}
            />
        </div>
    )
}

export default Chart