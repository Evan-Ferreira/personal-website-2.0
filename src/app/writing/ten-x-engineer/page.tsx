import React from 'react';
import Template from '../../_components/writing/template';
import P from '@/app/_components/writing/typography/p';
import SmallSpacer from '@/app/_components/writing/format/small-spacer';
import Spacer from '@/app/_components/writing/format/spacer';
import ImportantBlock from '@/app/_components/writing/display/important-block';
import List from '@/app/_components/writing/typography/list';
import ListItem from '@/app/_components/writing/typography/list-item';
import ImageCaption from '@/app/_components/writing/display/image-caption';

const Article = () => {
    return (
        <Template
            title="Journey to 10x Engineer"
            date="2021-01-01"
            titleId="ten-x-engineer"
        >
            <P>
                For anyone who doesn&apos;t know me – I&apos;m a business
                student. When I came to Queen&apos;s, I wanted to make a ton of
                money and thought I could do it through finance or consulting.
                However, I quickly realized that despite how much I love money
                (trust me, I LOVE money), I don&apos;t love it enough where I
                could work an unfulfilling career. No diss, to anyone pursuing
                finance or consulting – I just realized they&apos;re not for me.
            </P>
            <SmallSpacer />
            <P>
                In 2nd year, my best friend, Joseph Liao, dragged me out to a
                hackathon that ignited my passion for building software.
            </P>
            <SmallSpacer />
            <ImageCaption
                src="/deer-journal.JPG"
                alt="Hackathon"
                caption="Joseph, Matt, and I at QHacks 2024, my first hackathon. 
                Joseph and Matt grinding out our project
                while I tried to learn Python."
                width={400}
                height={400}
            />
            <SmallSpacer />
            <P>
                Ever since, I&apos;ve been determined to break into tech and
                have done pretty well this past year. I&apos;ve worked as a
                software engineer at two early stage companies, sold my AI
                startup, and just landed an internship offer from Shopify. But
                here&apos;s a secret:
            </P>
            <Spacer />
            <ImportantBlock text="I still don't know shit about tech." />
            <Spacer />
            <P>
                I&apos;m all about taking action first and figuring it out along
                the way, but the downside to this approach has been I&apos;ve
                prioritized landing jobs over mastering fundamental concepts.
                For example:
            </P>
            <Spacer />
            <List>
                <ListItem>.map vs .forEach in JavaScript</ListItem>
                <ListItem>What&apos;s the purpose of arrow functions?</ListItem>
                <ListItem>
                    What exactly is Model-View-Controller (MVC)?
                </ListItem>
                <ListItem>
                    What does it mean when a component &quot;mounts&quot;?
                </ListItem>
                <ListItem>Why do we use useEffect for fetching data?</ListItem>
                <ListItem>
                    Why must React hooks be used at the top level of components?
                </ListItem>
                <ListItem>What even is a hook? 💀</ListItem>
            </List>
            <Spacer />
            <P>
                Embarrassing, I know. But after securing my internship at
                Shopify, I find myself in a unique &quot;limbo&quot; period for
                once–I&apos;m not scrambling to find another job. This summer,
                I&apos;m using this breathing room to master the basics of
                full-stack development.
            </P>
            <SmallSpacer />
            <P>
                This is a living article that I&apos;ll use to document my
                journey to becoming a 10x engineer: what resources I use,
                what&apos;s effective, and what I learned.
            </P>
            <SmallSpacer />
            <P>From shitter to shit, let the games begin.</P>
        </Template>
    );
};

export default Article;
