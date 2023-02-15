import React from "react";
import Chart from "react-apexcharts";
import { useHistory } from "react-router-dom";

import contentList from "../assets/JsonData/content-data.json";
import './Pages.css'
import ContentCard from "../components/content-card/ContentCard";
import { useSelector } from "react-redux";

const chartOption1 = {
    series: [
        {
            name: "Youtube Source",
            data: [12, 16, 4, 8, 21, 3, 2],
        },
        {
            name: "Facebook Source",
            data: [8, 6, 2, 6, 6, 1, 0],
        },
    ], // chart data
    options: {
        color: ["#ff0000", "#2d86ff"],
        chart: {
            background: "transparent",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
            ],
        },
        legend: {
            position: "top",
        },
        grid: {
            show: false,
        },
    }, // chart options
};
const chartOption2 = {
    series: [
        {
            name: "Youtube Source",
            data: [12, 16, 4, 8, 21, 3, 2],
        },
        {
            name: "Facebook Source",
            data: [8, 6, 2, 6, 6, 1, 0],
        },
    ], // chart data
    options: {
        color: ["#ff0000", "#2d86ff"],
        chart: {
            background: "transparent",
            type: 'area'
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
            ],
        },
        legend: {
            position: "top",
        },
        grid: {
            show: false,
        },
    }, // chart options
};
const chartOption3 = {
    series: [
        {
            name: "Youtube Source",
            data: [12, 16, 4, 8, 21, 3, 2],
        },
        {
            name: "Facebook Source",
            data: [8, 6, 2, 6, 6, 1, 0],
        },
    ], // chart data
    options: {
        chart: {
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
            ],
        },
        fill: {
            opacity: 1
        },
    }, // chart options
};
const chartOption4 = {
    series: [44, 55, 26],
    options: {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Tích cực', 'Tiêu cực', 'Trung hòa'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }, // chart options
};
const chartOption5 = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
        chart: {
            type: 'polarArea',
        },
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },
        labels: [
            "Covid",
            "Tổng thống",
            "Đảng Cộng sản",
            "Việt tân",
            "Chủ tịch nước",
            "Cộng hòa",
            "Sun",
            "Chủ tịch nước",
            "Cộng hòa",
        ],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
};

const TagInfo = () => {
    const ThemeReducer = useSelector(state => state.ThemeReducer.mode)
    const history = useHistory();
    return (
        <div>
            <div className="justify-div">
                <p style={{ "fontSize": "24px" }} className="page-header">Tag Manager / Tag: <span className="tag-span">Covid</span></p>
            </div>
            <div className="card row">
                <div className="col-4 col-md-12">
                    <div className="card__header">
                        <p style={{ "fontSize": "20px" }}>Details</p>
                    </div>
                    <div className="card__body card__body-p">
                        <p>Tag ID: <span className="text-bold tag-span">8</span></p>
                        <p>Tag Name: <span className="text-bold tag-span">Covid</span></p>
                        <p>All Scanned Contents: <span className="text-bold tag-span">62</span></p>
                        <p>Scanned Contents In 1 Week: <span className="text-bold tag-span">20</span></p>
                    </div>
                </div>
                <div className="col-8 col-md-12">
                    {/* <div className="card-chart full-height col-12">
                        <Chart
                            options={ThemeReducer === 'theme-mode-dark' ?
                                { ...chartOption1.options, theme: { mode: "dark" } }
                                : {
                                    ...chartOption1.options, theme: { mode: "light" }
                                }}
                            series={chartOption1.series}
                            height="150%"
                            type='line'
                        />
                    </div> */}
                    <div className="card-chart full-height col-12">
                        <Chart
                            options={ThemeReducer === 'theme-mode-dark' ?
                                { ...chartOption2.options, theme: { mode: "dark" } }
                                : {
                                    ...chartOption2.options, theme: { mode: "light" }
                                }}
                            series={chartOption2.series}
                            height="150%"
                            type='area'
                        />
                    </div>
                    {/* <div className="card-chart full-height col-12">
                        <Chart
                            options={ThemeReducer === 'theme-mode-dark' ?
                                { ...chartOption3.options, theme: { mode: "dark" } }
                                : {
                                    ...chartOption3.options, theme: { mode: "light" }
                                }}
                            series={chartOption3.series}
                            height="150%"
                            type='bar'
                        />
                    </div> */}
                </div >
            </div>
            <div className="card row">
                <div className="col-6 col-md-12">
                    <div className="card-chart full-height col-12">
                        <Chart
                            options={ThemeReducer === 'theme-mode-dark' ?
                                { ...chartOption4.options, theme: { mode: "dark" } }
                                : {
                                    ...chartOption4.options, theme: { mode: "light" }
                                }}
                            series={chartOption4.series}
                            type='pie'
                        />
                    </div>
                </div>
                <div className="col-6 col-md-12">
                    <div className="card-chart full-height col-12">
                        <Chart
                            options={ThemeReducer === 'theme-mode-dark' ?
                                { ...chartOption5.options, theme: { mode: "dark" } }
                                : {
                                    ...chartOption5.options, theme: { mode: "light" }
                                }}
                            series={chartOption5.series}
                            type='polarArea'
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div >
                        <div className="card__header">
                            <p style={{ "fontSize": "20px" }}>Scanned Contents:</p>
                        </div>
                        <div className="card__body">
                            <div className="row">
                                {contentList.map((item, index) => (
                                    <div className="col-3 col-md-6 col-sm-12" key={index}>
                                        <ContentCard
                                            id={item.id}
                                            type={item.type}
                                            url={item.url}
                                            content={item.content}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagInfo;
