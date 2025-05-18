import React from 'react';
import Template from '../../_components/writing/template';
import P from '@/app/_components/writing/p';
import SmallSpacer from '@/app/_components/writing/small-spacer';
import Spacer from '@/app/_components/writing/spacer';

const Article = () => {
    return (
        <Template
            title="Journey to 10x Engineer"
            date="2021-01-01"
            titleId="ten-x-engineer"
        >
            <P>
                For anyone who doesn&rsquo;t know me – I&rsquo;m a business
                student. When I came to Queen&rsquo;s, I wanted to make a shit
                ton of money and thought I could do it through finance or
                consulting. However, I quickly realized that despite how much I
                love money (trust me, I LOVE money), I don&rsquo;t love it
                enough where I could work an unfulfilling career. No diss, to
                anyone pursuing finance or consulting – I just realized
                they&rsquo;re not for me.
            </P>
            <SmallSpacer />
            <P>
                In 2nd year, my best friend, Joseph Liao, dragged me out to a
                hackathon that ignited my passion for building software.
            </P>
            <SmallSpacer />
            <P>
                Ever since, I&rsquo;ve been determined to break into tech and
                have done pretty well this past year. I&rsquo;ve worked as a
                software engineer at two early stage companies, sold my AI
                startup, and just landed an internship offer from Shopify.
            </P>
            <Spacer />
            <P className="font-bold">
                <strong>
                    Here&rsquo;s a secret—I still don&rsquo;t know shit about
                    tech.
                </strong>
            </P>
            <Spacer />
            <P>
                I&rsquo;m all about taking action first and figuring it out
                along the way, but the downside to this approach has been
                I&rsquo;ve prioritized landing jobs over mastering fundamental
                concepts. For example:
            </P>
            <SmallSpacer />
            <P>
                .map vs .forEach in JavaScript What&rsquo;s the purpose of arrow
                functions? Are they purely stylistic? What exactly is
                Model-View-Controller (MVC)? What does it mean when a component
                "mounts"? Why do we use useEffect for fetching data? Why must
                React hooks be used at the top level of components? What even is
                a hook? 💀
            </P>
            <SmallSpacer />
            <P>
                Embarrassing, I know. But after securing my internship at
                Shopify, I find myself in a unique "limbo" period for
                once–I&rsquo;m not scrambling to find another job. This summer,
                I&rsquo;m using this breathing room to master the basics of
                full-stack development.
            </P>
            <SmallSpacer />
            <P>
                This is a living article that I&rsquo;ll use to document my
                journey to becoming a 10x engineer: what resources I use,
                what&rsquo;s effective, and what I learned.
            </P>
            <SmallSpacer />
            <P>From shitter to shit, let the games begin.</P>
        </Template>
    );
};

export default Article;
