import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Word Counter</title>
            </Head>
            <div>
                <h1 id="words" style={{["display" as any]: "inline"}} >There are: <span id="wordCount">0</span> Words!</h1>
                <textarea style={{["display" as any]: "inline"}} className="limits" id="minWordCount" placeholder="Min. Word Count"></textarea>
                <textarea style={{["display" as any]: "inline"}} className="limits" id="maxWordCount" placeholder="Max. Word Count"></textarea>
                <textarea style={{["display" as any]: "block"}} id="textArea" placeholder="Enter your words here!"></textarea>
                <Script strategy={'lazyOnload'} src="count.js"></Script>
                <Link href="/" id="returnToHomeFromWords"><i id="left-arrow" className="fa fa-caret-left" aria-hidden="true"></i>Back to Home!</Link>
            </div>
        </>        
    );
}