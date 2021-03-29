import { useState, useEffect } from "react";
import Heading from "../../../components/shared/Heading/Heading";
import Chart from "../../../components/Chart/Chart";
import { beautifyDate } from "../../../utils/utils";
import classes from "./Home.module.scss";

const l = [];
for (let i = 1; i <= 10; i++) {
    l.push(i);
}
const data = [
    "1000000",
    "3000000",
    "2000000",
    "900000",
    "400000",
    "2400000",
    "200000",
    "800000",
    "400000",
    "600000",
];
const charts = {
    bar: [
        {
            labels: l,
            data,
            label: "Amount",
            title: "Donations for last 10 days",
            bg: "#9d0208",
            type: "bar",
        },
        {
            labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "others"],
            data: [
                "3405000",
                "1467000",
                "548550",
                "1104000",
                "1190612",
                "1118800",
                "1361000",
                "1601000",
                "2916000",
            ],
            label: "Amount",
            title: "Donation per batch & external",
            bg: "#9d0208",
            type: "bar",
        },
    ],
    doughnut: {
        labels: ["total", "supported", "balance"],
        data: ["15460162", "12200000", "3260162"],
        title: "ငွေရှင်းတမ်း",
        bg: ["#9d0208", "#36A2EB", "#FFCD56"],
        type: "doughnut",
    },
};

const Home = (props) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let timer2;
        if (percentage < (12200000 / 15460162) * 100) {
            timer2 = setTimeout(() => {
                setPercentage((prevState) => prevState + 1);
            }, 100);
        }
        return () => {
            clearTimeout(timer2);
        };
    }, [percentage]);
    return (
        <section className={classes.Home}>
            <div className={classes.Home__Total}>
                <p className={classes.Home__Total__Heading}>K15,460,162+</p>
                <span className={classes.Home__Total__Label}>{`ရရှိထားပြီးဖြစ်သည်`}</span>
            </div>
            <div className={classes.Home__Container}>
                <div className={classes.Home__Box}>
                    <div className={classes.Home__Total}>
                        <Heading text="Total" />
                        <div className={classes.Home__Total__Amount}>{percentage}%</div>
                        <span className={classes.Home__Total__Label}>{"ထောက်ပံ့ပြီးဖြစ်သည်"}</span>
                    </div>
                    <div>
                        <Chart {...charts.doughnut} />
                        <p className={classes.Home__Total__Label}>{charts.doughnut.title}</p>
                    </div>
                </div>
            </div>

            <div className={classes.Home__Container}>
                <div className={classes.Home__Box}>
                    {charts.bar.map((c, i) => (
                        <div key={i}>
                            <Chart {...c} />
                            <p className={classes.Home__Total__Label}>{c.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Home;
