import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'コードタイプ';
const pageText = '本アプリで用意しているコードの種類を一覧にしています。';
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
                <h2>コードの分類</h2>
                <p>コードの種類は構成音の数によって下記に分かれます。</p>
                <ul>
                    <li>根音（ルート）</li>
                    <li>三和音（トライアド）</li>
                    <li>四和音（セブンスコード）</li>
                    <li>五和音（テンションコード）</li>
                </ul>
            </section>
            <section>
                <h2>根音（ルート）</h2>
                <section>
                    <h3>根音（ルート）：(R)</h3>
                    <p>単音は和音ではないが、この単音を根音（ルート）としてその上に和音の構成音を重ねていくのでコードの原点（キー）になる。</p>
                    <figure>
                        <img src="img/chord_1_01.jpg" alt="(R)" />
                    </figure>
                </section>
                <section>
                    <h3>パワーコード：5</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_1_02.jpg" alt="5" />
                    </figure>
                </section>
            </section>
            <section>
                <h2>三和音（トライアド）</h2>
                <p>説明説明説明説明説明説明説明説明</p>
                <section>
                    <h3>メジャー：(M)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_3_01.jpg" alt="(M)" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー：m</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_3_02.jpg" alt="m" />
                    </figure>
                </section>
                <section>
                    <h3>ディミニッシュ：dim</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_3_03.jpg" alt="dim" />
                    </figure>
                </section>
                <section>
                    <h3>オーギュメント：aug</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_3_04.jpg" alt="aug" />
                    </figure>
                </section>
                <section>
                    <h3>サスペンデッド4th：sus4</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_3_05.jpg" alt="sus4" />
                    </figure>
                </section>
            </section>
            <section>
                <h2>四和音（セブンスコード）</h2>
                <p>説明説明説明説明説明説明説明説明</p>
                <section>
                    <h3>メジャーセブンス：M7</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_01.jpg" alt="M7" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス：7</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_02.jpg" alt="7" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・メジャー・セブンス：mM7</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_03.jpg" alt="mM7" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・セブンス：m7</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_04.jpg" alt="m7" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・セブンス・フラット・ファイブ：m7(-5)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_05.jpg" alt="m7(-5)" />
                    </figure>
                </section>
                <section>
                    <h3>ディミニッシュ・セブンス：dim7</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_06.jpg" alt="dim7" />
                    </figure>
                </section>
                <section>
                    <h3>オーグメント・メジャー・セブンス：augM7</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_07.jpg" alt="augM7" />
                    </figure>
                </section>
                <section>
                    <h3>オーギュメント・セブンス：aug7</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_08.jpg" alt="aug7" />
                    </figure>
                </section>
                <section>
                    <h3>メジャー・セブンス・サスペンデッド4th：M7sus4</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_09.jpg" alt="M7sus4" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・サスペンデッド4th：7sus4</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_10.jpg" alt="7sus4" />
                    </figure>
                </section>
                <section>
                    <h3>シックスス：6</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_11.jpg" alt="6" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・シックスス：m6</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_4_12.jpg" alt="m6" />
                    </figure>
                </section>
            </section>
            <section>
                <h2>五和音（テンションコード）</h2>
                <p>説明説明説明説明説明説明説明説明</p>
                <section>
                    <h3>メジャーナインス：M9</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_01.jpg" alt="M9" />
                    </figure>
                </section>
                <section>
                    <h3>ナインス：9</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_02.jpg" alt="9" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・フラット・ナインス：7(-9)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_03.jpg" alt="7(-9)" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・シャープ・ナインス：7(+9)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_04.jpg" alt="7(+9)" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・セブンス・イレブンス：m7(11)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_05.jpg" alt="m7(11)" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・シャープ・イレブンス：7(+11)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_06.jpg" alt="7(+11)" />
                    </figure>
                </section>
                <section>
                    <h3>メジャー・セブンス・サーティーンズ：M7(13)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_07.jpg" alt="M7(13)" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・サーティーンズ：7(13)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_08.jpg" alt="7(13)" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・フラット・サーティーンズ：7(-13)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_09.jpg" alt="7(-13)" />
                    </figure>
                </section>
                <section>
                    <h3>シックス・ナインス：69</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_10.jpg" alt="69" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・シックス・ナインス：m69</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_11.jpg" alt="m69" />
                    </figure>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;