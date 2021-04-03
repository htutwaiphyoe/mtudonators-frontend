import { useEffect } from "react";

import Paragraph from "../../../components/shared/Paragraph/Paragraph";
import Button from "../../../components/shared/Button/Button";
import Box from "../../../components/shared/Box/Box";
import * as donationData from "../../../api/donationData";
import classes from "./Donation.module.scss";
const Donation = (props) => {
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
                    {donationData.services.payments.map((el, i) => (
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
                    {donationData.services.banks.map((el, i) => (
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
