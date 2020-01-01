import Head from 'next/head';

const HeadTag = (props) => (
    <Head>
        <title>{props.title}</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,600,700&display=swap" rel="stylesheet"></link>
    </Head>
);

export default HeadTag;