import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'このアプリについて';
const pageText = 'いろいろなコード（和音）を鍵盤で鳴らしてコードの構成音も確認できるコードプレイヤーです。キーの変更、和音の変更による違いを調べることができます。';
const headTitle = pageTitle + ' | ' + headerTitle;


// CSS in JS
const Main = styled.main`
    h2 {
        background: #eee;
        margin: 60px 0 20px;
        padding: 10px;
        border-radius: 3px;
    }
    h3 {
        margin: 40px 0 10px;
        padding: 0 0 10px;
        border-bottom: 1px solid #ddd;
    }
    figure {
        margin: 0 0 30px;
        img {
            width: 100%;
            box-shadow: 0 0 15px 2px rgb(0 0 0 / 10%);
        }
    }
`;


// Component
function About() {
    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>

        <Header />
        <Main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2>使い方</h2>
                <section>
                    <h3>用途</h3>
                    <p>下記のような用途に活用できます。</p>
                    <ul>
                        <li>「根音」で鍵盤から単音を鳴らせます</li>
                        <li>「三和音」「四和音」「五和音」で和音を鳴らせます</li>
                        <li>和音の構成音を鍵盤の色や文字情報で調べることができます</li>
                        <li>和音の種類を変えると同じキーでの構成音の違いを比較できます</li>
                    </ul>
                </section>
                <section>
                    <h3>キーの変更</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section>
                    <h3>コードの変更</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
            </section>
            <section>
                <h2>コードの種類</h2>
                <section>
                    <h3>根音（ルート）</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section>
                    <h3>三和音（トライアド）</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section>
                    <h3>四和音（セブンスコード）</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section>
                    <h3>五和音（テンションコード）</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
            </section>
            <section>
                <h2>詳細</h2>
                <section>
                    <h3>ブログ</h3>
                    <p><a href="https://www.i-ryo.com/entry/xxxx">タイトル - クモのようにコツコツと</a></p>
                </section>
                <section>
                    <h3>ソースコード（GitHub）</h3>
                    <p><a href="https://github.com/ryo-i/xxxxx">リポジトリ</a></p>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;