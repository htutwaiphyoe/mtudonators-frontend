import { useEffect, useRef } from "react";

import Paragraph from "../../../components/shared/Paragraph/Paragraph";
import Button from "../../../components/shared/Button/Button";
import Box from "../../../components/shared/Box/Box";
import classes from "./Donation.module.scss";
const Donation = (props) => {
    const services = useRef({
        payments: [
            {
                src:
                    "https://scontent.xx.fbcdn.net/v/t1.0-9/42846641_741047686251381_3734839720207712256_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=yDYbTqDGAuoAX-3hz8-&_nc_ht=scontent.xx&oh=6102268d66a842f3f4d151aeec168df3&oe=60875B0C",
                caption: "KBZ Pay",
            },
            {
                src:
                    "https://scontent.xx.fbcdn.net/v/t1.0-9/87948624_2927481817295123_7349089789674520576_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=fCMUMOtnHkcAX9wwtOQ&_nc_oc=AQkvHUfiomvy18sODP4gSiDY4A0mG51pKFAkOWo3TwMTvIM1WI7Y_QajS_ABvzsG82M495XQtdZOefABeVAm7ShI&_nc_ht=scontent.xx&oh=cc0c09f49cac82172c7a3d33dce3a362&oe=60853ADA",
                caption: "CB Pay",
            },
            {
                src:
                    "https://scontent.xx.fbcdn.net/v/t1.0-9/52283873_895166020654157_3896425439379324928_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=CZ6SEcga_FUAX9k9qCx&_nc_ht=scontent.xx&oh=e67c38fbb03afdccb6a0420c828866c5&oe=60882B29",
                caption: "Wave Pay",
            },
        ],
        banks: [
            {
                src:
                    "https://scontent.xx.fbcdn.net/v/t1.0-9/52396215_2044208548948487_7704477614496284672_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Y1BK6NzolBQAX8Ddo8V&_nc_ht=scontent.xx&oh=c71b84817722af91285ceb5396985698&oe=6087767E",
                caption: "KBZ Bank",
            },
            {
                src:
                    "https://scontent.xx.fbcdn.net/v/t1.0-9/52422302_2203130523063593_154825917389078528_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1-IDnlcc7RsAX_saKao&_nc_ht=scontent.xx&oh=42acb43316f72122e864f35d617d0a89&oe=6087616E",
                caption: "CB Bank",
            },
            {
                src:
                    "https://scontent.xx.fbcdn.net/v/t31.0-8/10947465_602818779853205_6420925101224052571_o.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dv69ZDRqPE4AX-mbQAe&_nc_ht=scontent.xx&oh=b1300a423f54b19b389ed1836cb0e45c&oe=60878736",
                caption: "YOMA Bank",
            },
            {
                src:
                    "https://scontent.xx.fbcdn.net/v/t1.0-9/120262374_3285765488172402_8697007081101066614_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5ADRc7Zd_xIAX_RtChB&_nc_ht=scontent.xx&oh=1a73fc41ce72e281b478eac1fde44907&oe=6085F55E",
                caption: "AYA Bank",
            },
        ],
    });

    useEffect(() => {
        document.title = "Donation | MTU CDM Support";
    }, []);
    return (
        <section className={classes.Donation}>
            <div className={classes.Donation__PhotoBox}>
                <figure>
                    <img
                        className={classes.Donation__PhotoBox__Photo}
                        src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/167893409_462592904856308_4552469087483898646_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=_4BVAWHYUUkAX_-N4nm&_nc_ht=scontent-hkt1-1.xx&oh=b996c06e9ea33a864b45c124f4e077e0&oe=608A3CE6"
                        alt=""
                    />
                </figure>
                <figure>
                    <img
                        className={classes.Donation__PhotoBox__Photo}
                        src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/156998617_439274337401396_8153648209118197410_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=0KrP9YnDuNYAX9zbu6m&_nc_ht=scontent-hkt1-1.xx&oh=5da872dcbca35f9f818eced17fdd0056&oe=608B1F44"
                        alt=""
                    />
                </figure>
                <figure>
                    <img
                        className={classes.Donation__PhotoBox__Photo}
                        src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/158396297_904124143751655_8414086983580476142_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=vfl4c5nfgJIAX-EZZOk&_nc_oc=AQn4plSBZqqhSVa2db_6qTRPTCJjFhx2AwCqs0LFZNxQa_fvQ-hvCdDVxZi0s3wtxmw&_nc_ht=scontent-hkt1-1.xx&oh=4b5503c9493e3189920785c24913577c&oe=608AE8AC"
                        alt=""
                    />
                </figure>
            </div>
            <Box vertical>
                <Paragraph>
                    CDM သမားများ ဆက်လက်ရပ်တည်နိုင်ရန်အတွက် ထောက်ပံ့လိုပါက MTU Student's Union ၏ Page
                    Messanger ကနေတစ်ဆင့် ဆက်သွယ်မေးမြန်းလှူဒါန်းနိုင်ပါသည်။
                </Paragraph>
                <Button link={true} url="http://m.me/mtustudentunion">
                    Support Now
                </Button>
            </Box>
            <Paragraph>
                အောက်ဖော်ပြပါ service များဖြင့် လှူဒါန်းမှုကို ကောက်ခံလျက်ရှိပါသည်
            </Paragraph>
            <div className={classes.Donation__Container}>
                <Paragraph>Mobile Payment များ</Paragraph>
                <div className={`${classes.Donation__Services} ${classes.Donation__Services_Pay}`}>
                    {services.current.payments.map((el, i) => (
                        <figure className={classes.Donation__ImageContainer} key={i}>
                            <img
                                src={el.src}
                                alt={el.caption}
                                className={classes.Donation__ImageContainer__Image}
                            />
                            <Paragraph>{el.caption}</Paragraph>
                        </figure>
                    ))}
                </div>
            </div>
            <div className={classes.Donation__Container}>
                <Paragraph>Bank Service များ</Paragraph>
                <div className={`${classes.Donation__Services} ${classes.Donation__Services_Bank}`}>
                    {services.current.banks.map((el, i) => (
                        <figure className={classes.Donation__ImageContainer} key={i}>
                            <img
                                src={el.src}
                                alt={el.caption}
                                className={classes.Donation__ImageContainer__Image}
                            />
                            <Paragraph>{el.caption}</Paragraph>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Donation;
