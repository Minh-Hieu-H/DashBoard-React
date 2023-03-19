import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MyWordCloud from "../components/wordcloud/MyWordCloud";
import VideoGrid from "../components/videogrid/VideoGrid";
import './Pages.css'
import tagList from "../assets/JsonData/tag-data.json";

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
// const chartOption3 = {
//     series: [
//         {
//             name: "Youtube Source",
//             data: [12, 16, 4, 8, 21, 3, 2],
//         },
//         {
//             name: "Facebook Source",
//             data: [8, 6, 2, 6, 6, 1, 0],
//         },
//     ], // chart data
//     options: {
//         chart: {
//             type: 'bar'
//         },
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 columnWidth: '55%',
//                 endingShape: 'rounded'
//             },
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             show: true,
//             width: 2,
//             colors: ['transparent']
//         },
//         xaxis: {
//             categories: [
//                 "Mon",
//                 "Tue",
//                 "Wed",
//                 "Thu",
//                 "Fri",
//                 "Sat",
//                 "Sun",
//             ],
//         },
//         fill: {
//             opacity: 1
//         },
//     }, // chart options
// };
const chartOption4 = {
    series: [44, 55, 26],
    options: {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Tích cực', 'Tiêu cực', 'Trung tính'],
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

const TagInfo = () => {
    const { tagid } = useParams();
    const [tagDetail, setTagDetail] = useState({});
    useEffect(() => {
        const getDetail = async () => {
            setTagDetail(tagList.find(tag => tag.id.toString() === tagid));
        }
        getDetail();
    }, []);
    const ThemeReducer = useSelector(state => state.theme.mode)
    return (
        <div>
            <div className="justify-div">
                <p style={{ "fontSize": "24px" }} className="page-header">Tag Manager / Tag: <span className="tag-span">{tagDetail.name}</span></p>
            </div>
            <div className="card row">
                <div className="col-4 col-md-12">
                    <div className="card__header">
                        <p style={{ "fontSize": "20px" }}>Details</p>
                    </div>
                    <div className="card__body card__body-p">
                        <p>Tag ID: <span className="text-bold tag-span">{tagDetail.id}</span></p>
                        <p>Tag Name: <span className="text-bold tag-span">{tagDetail.name}</span></p>
                        <p>All Scanned Contents: <span className="text-bold tag-span">{tagDetail.scanned}</span></p>
                        <p>Scanned Contents In 1 Week: <span className="text-bold tag-span">20</span></p>
                    </div>
                </div>
                <div className="col-8 col-md-12">
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
                    <MyWordCloud />
                </div>
            </div>

            <div className="card__header">
                <p style={{ "fontSize": "20px" }}>Top video nổi bật:</p>
            </div>
            <VideoGrid />
        </div>
    );
};

export default TagInfo;
