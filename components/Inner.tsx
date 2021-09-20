import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { inner } from '../data/data.json';
import * as Tone from 'tone';


// CSS in JS
const BeadPlayer = styled.section`
  h2, #code_type, #code_type_text {
    text-align: center;
  }

  form {
    margin: 0 auto ;
    max-width: 400px;
    border: 1px solid #ccc;
    padding: 10px 10px 0;
    text-align: left;
  }

  form dl {
    padding: 5px 0 0;
    display: flex;
    margin: 0;
  }

  form dl:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  form dt {
    font-weight: bold;
    width: 15%;
  }

  form dd {
    margin: 0;
    display: inline-block;
    width: 85%;
  }

  label {
    margin: 0 10px 10px 0;
    display: inline-block;
  }

  label:hover {
    cursor: pointer;
  }

  #piano {
    background: #333;
    padding: 10px;
    width: 300px;
    display: block;
    margin: 0 auto;
    position: relative;
  }

  .w_key {
    background: #FFF;
    border: 1px solid #333;
    width: 35px;
    text-align: center;
    padding:  90px 0 10px;
    display: inline-block;
  }

  .w_key:hover,
  .b_key:hover {
    opacity: 0.7;
  }

  .b_key {
    position: absolute;
    z-index: 10;
    top: 10px;
    margin: 0 -20px;
    padding: 0;
    background: #000;
    border: 1px solid #fff;
    color: #fff;
    width: 35px;
    height: 75px;
    text-align: center;
    display: inline-block;
  }

  #code_type_text {
    font-size: 20px;
    margin: 10px 0 0;
  }

  #code_keys_text {
    margin: 0 0 10px;
  }
`;


// Component
function Inner() {
  // Hooks
  const [title, setTitle] = useState('内容が無いよう');
  const [text, setText] = useState('へんじがない、ただのしかばねのようだ。');

  useEffect(() => {
    // ページ読み込み時の処理
  });

  // Tone.js Test
  const toneJsTest = () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  };

  // JSX
  return (
    <>
      <BeadPlayer>
        <h2>和音鍵盤</h2>
        <ul id="piano">
          <li id="C4" className="w_key" onClick={toneJsTest}>C</li>
          <li id="Cs4" className="b_key"></li>
          <li id="D4" className="w_key">D</li>
          <li id="Ds4" className="b_key"></li>
          <li id="E4" className="w_key">E</li>
          <li id="F4" className="w_key">F</li>
          <li id="Fs4" className="b_key"></li>
          <li id="G4" className="w_key">G</li>
          <li id="Gs4" className="b_key"></li>
          <li id="A4" className="w_key">A</li>
          <li id="As4" className="b_key"></li>
          <li id="B4" className="w_key">B</li>
          <li id="C5" className="w_key">C</li>
        </ul>
        <div id="code_type">
          <p id="code_type_text"></p>
          <p id="code_keys_text"></p>
          <form name="code_types" className="">
            <dl>
              <dt>根音</dt>
              <dd>
                <label><input type="radio" id="code_R" name="code_type" value="ルート(R)" onchange="codeTypeSelect()" checked />(R)</label>
                <label><input type="radio" id="code_5" name="code_type" value="パワーコード(5)" onchange="codeTypeSelect()" />5</label>
              </dd>
            </dl>
            <dl>
              <dt>三和音</dt>
              <dd>
                <label><input type="radio" id="code_M" name="code_type" value="メジャー(M)" onchange="codeTypeSelect()" />(M)</label>
                <label><input type="radio" id="code_m" name="code_type" value="マイナー(m)" onchange="codeTypeSelect()" />m</label>
                <label><input type="radio" id="code_dim" name="code_type" value="ディミニッシュ(dim)" onchange="codeTypeSelect()" />dim</label>
                <label><input type="radio" id="code_aug" name="code_type" value="オーギュメント(aug)" onchange="codeTypeSelect()" />aug</label>
                <label><input type="radio" id="code_sus4" name="code_type" value="サスペンデッド4th(sus4)" onchange="codeTypeSelect()" />sus4</label>
              </dd>
            </dl>
            <dl>
              <dt>四和音</dt>
              <dd>
                <label><input type="radio" id="code_M7" name="code_type" value="メジャーセブンス(M7)" onchange="codeTypeSelect()" />M7</label>
                <label><input type="radio" id="code_7" name="code_type" value="セブンス(7)" onchange="codeTypeSelect()" />7</label>
                <label><input type="radio" id="code_mM7" name="code_type" value="マイナー・メジャー・セブンス(mM7)" onchange="codeTypeSelect()" />mM7</label>
                <label><input type="radio" id="code_m7" name="code_type" value="マイナー・セブンス(m7)" onchange="codeTypeSelect()" />m7</label>
                <label><input type="radio" id="code_m7-5" name="code_type" value="マイナー・セブンス・フラット・ファイブ(m7(-5))" onchange="codeTypeSelect()" />m7(-5)</label>
                <label><input type="radio" id="code_dim7" name="code_type" value="ディミニッシュ・セブンス(dim7)" onchange="codeTypeSelect()" />dim7</label>
                <label><input type="radio" id="code_augM7" name="code_type" value="オーグメント・メジャー・セブンス(augM7)" onchange="codeTypeSelect()" />augM7</label>
                <label><input type="radio" id="code_aug7" name="code_type" value="オーギュメント・セブンス(aug7)" onchange="codeTypeSelect()" />aug7</label>
                <label><input type="radio" id="code_M7sus4" name="code_type" value="メジャー・セブンス・サスペンデッド4th(M7sus4)" onchange="codeTypeSelect()" />M7sus4</label>
                <label><input type="radio" id="code_7sus4" name="code_type" value="セブンス・サスペンデッド4th(7sus4)" onchange="codeTypeSelect()" />7sus4</label>
                <label><input type="radio" id="code_6" name="code_type" value="シックスス(6)" onchange="codeTypeSelect()" />6</label>
                <label><input type="radio" id="code_m6" name="code_type" value="マイナー・シックスス(m6)" onchange="codeTypeSelect()" />m6</label>
              </dd>
            </dl>
            <dl>
              <dt>五和音</dt>
              <dd>
                <label><input type="radio" id="code_M9" name="code_type" value="メジャーナインス(M9)" onchange="codeTypeSelect()" />M9</label>
                <label><input type="radio" id="code_9" name="code_type" value="ナインス(9)" onchange="codeTypeSelect()" />9</label>
                <label><input type="radio" id="code_7_f9" name="code_type" value="セブンス・フラット・ナインス(7(-9))" onchange="codeTypeSelect()" />7(-9)</label>
                <label><input type="radio" id="code_7_s9" name="code_type" value="セブンス・シャープ・ナインス(7(+9))" onchange="codeTypeSelect()" />7(+9)</label>
                <label><input type="radio" id="code_m7_11" name="code_type" value="マイナー・セブンス・イレブンス(m7(11))" onchange="codeTypeSelect()" />m7(11)</label>
                <label><input type="radio" id="code_7_s11" name="code_type" value="セブンス・シャープ・イレブンス(7(+11))" onchange="codeTypeSelect()" />7(+11)</label>
                <label><input type="radio" id="code_M7_13" name="code_type" value="メジャー・セブンス・サーティーンズ(M7(13))" onchange="codeTypeSelect()" />M7(13)</label>
                <label><input type="radio" id="code_M7_13" name="code_type" value="セブンス・サーティーンズ(M7(13))" onchange="codeTypeSelect()" />7(13)</label>
                <label><input type="radio" id="code_M7_f13" name="code_type" value="セブンス・フラット・サーティーンズ(M7(-13))" onchange="codeTypeSelect()" />7(-13)</label>
                <label><input type="radio" id="code_69" name="code_type" value="シックス・ナインス(69)" onchange="codeTypeSelect()" />69</label>
                <label><input type="radio" id="code_m69" name="code_type" value="マイナー・シックス・ナインス(m69)" onchange="codeTypeSelect()" />m69</label>
              </dd>
            </dl>
          </form>
        </div>
      </BeadPlayer>
    </>
  );
}

export default Inner;
