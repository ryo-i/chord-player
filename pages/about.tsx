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
                    <h3>コードを鳴らす</h3>
                    <p>初期状態はルート（根音）で単音の音が鳴ります。ただし音が鳴るのは左側の1オクターブのみです。</p>
                    <figure>
                        <img src="img/use_01.jpg" alt="ルート（単音）" />
                    </figure>
                    <p>コードタイプを変更すると和音が鳴り、構成音の鍵盤に色が付きます。画面はCマイナー・メジャー・セブンスの構成音です。</p>
                    <figure>
                        <img src="img/use_02.jpg" alt="CmM7" />
                    </figure>
                    <p>「構成音：」の番号はルート（1）から数えて何番目の鍵盤が構成音になるかを表しています。画面のマイナー・メジャー・セブンスは構成音が1、4、8、12になります。</p>
                    <figure>
                        <img src="img/use_03.jpg" alt="構成音の数字" />
                    </figure>
                </section>
                <section>
                    <h3>キーの変更</h3>
                    <p>別の鍵盤を押すと別のキーの構成音がわかります。画面はGマイナー・メジャー・セブンスで白鍵黒鍵の組み合わせは変わっていますが、構成音は1、4、8、12で変わりません。</p>
                    <figure>
                        <img src="img/use_04.jpg" alt="GmM7" />
                    </figure>
                </section>
                <section>
                    <h3>コードの変更</h3>
                    <p>コードタイプを変更すると同じキーの別のコードの構成音がわかります。画面はGマイナー・セブンスで構成音は1、4、8、11で最後の12が11に変わっています。</p>
                    <figure>
                        <img src="img/use_05.jpg" alt="Gm7" />
                    </figure>
                </section>
            </section>
            <section>
                <h2>今後の課題</h2>
                <p>本アプリで聴けるコードは根音（ルート）の上に和音の構成音を重ねる配置ですが、実際の音楽のアレンジでは和音の構成音を前後のオクターブに配置する「ボイシング」が行われることが多いです。</p>
                <p>コードチェンジの移動をなるべく少なくするために1オクターブ内で構成音の配置を変えるクローズドボイシング、両手を使って構成音が1オクターブ以上に広がった響きにするオープンボイシングがあります。</p>
                <p>ボイシングの種類やそれを実現する処理の検討はまだ検討できていないため、今後の課題としたいです。</p>
                <p>あと、今は「ジャーン」と和音を同時に鳴らしていますが、この他に「タ・ラ・ラ・ラーン、ジャーン」みたいな一音ずつ聴けるモードが必要なのか検討しています。</p>
                <p>今のメニュー数がSPの1画面に収まっているので、機能追加によってボタンが増えするのも考えものかという気持ちもあるんですよねぇ。。</p>
            </section>
            <section>
                <h2>詳細</h2>
                <section>
                    <h3>ブログ</h3>
                    <p><a href="https://www.i-ryo.com/entry/2021/10/27/064429">【React & Tone.js】コードプレイヤーを作った（鍵盤でいろいろなコードを調べるアプリ） - クモのようにコツコツと</a></p>
                </section>
                <section>
                    <h3>ソースコード（GitHub）</h3>
                    <p><a href="https://github.com/ryo-i/chord-player">リポジトリ</a></p>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;