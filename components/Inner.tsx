import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { inner } from '../data/data.json';
import * as Tone from 'tone';


// CSS in JS
const CoadPlayer = styled.section`
  h2, #code_type, #code_type_text {
    text-align: center;
  }

  form {
    margin: 0 auto ;
    max-width: 400px;
    border: 1px solid #ccc;
    padding: 10px 10px 0;
    text-align: left;
    dl {
      padding: 5px 0 0;
      display: flex;
      margin: 0;
      :not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }
    dt {
      font-weight: bold;
      width: 15%;
    }
    dd {
      margin: 0;
      display: inline-block;
      width: 85%;
    }
  }

  label {
    margin: 0 10px 10px 0;
    display: inline-block;
    :hover {
      cursor: pointer;
    }
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

  .w_key:hover,
  .b_key:hover {
    opacity: 0.7;
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
  const [codeTypeText, setCodeTypeText] = useState('ルート(R)');
  const [codeKeysText, setCodeKeysText] = useState('1');
  const [chords, setChords] = useState([]);

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

  //DOM
  // const Key = document.querySelectorAll('#piano li');
  const Key = [
    {id: "C4", className: "w_key", keyName: "C"},
    {id: "Cs4", className: "b_key", keyName: ""},
    {id: "D4", className: "w_key", keyName: "D"},
    {id: "Ds4", className: "b_key", keyName: ""},
    {id: "E4", className: "w_key", keyName: "E"},
    {id: "F4", className: "w_key", keyName: "F"},
    {id: "Fs4", className: "b_key", keyName: ""},
    {id: "G4", className: "w_key", keyName: "G"},
    {id: "Gs4", className: "b_key", keyName: ""},
    {id: "A4", className: "w_key", keyName: "A"},
    {id: "As4", className: "b_key", keyName: ""},
    {id: "B4", className: "w_key", keyName: "B"},
    {id: "C5", className: "w_key", keyName: "C"}
  ];
  // const codeTypeText = document.querySelector('#code_type_text');
  // const codeType = document.getElementsByName("code_type");
  // const codeKeysText = document.querySelector('#code_keys_text');

  //音階
  var scale　= [
    //休符
    'null',
    //1オクターブ目
    'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
    //2オクターブ目
    'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
    //3オクターブ目
    'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
  ];

  //コードタイプ
  var codeTypes = [
      //ルート音
      {'codeName': '(R)',
          'codeKeys': [1]},
      {'codeName': '(5)',
          'codeKeys': [1,8]},
      //三和音
      {'codeName': '(M)',
          'codeKeys': [1,5,8]},
      {'codeName': 'm',
          'codeKeys': [1,4,8]},
      {'codeName': 'dim',
          'codeKeys': [1,4,7]},
      {'codeName': 'aug',
          'codeKeys': [1,5,9]},
      {'codeName': 'sus4',
          'codeKeys': [1,6,8]},
      //四和音
      {'codeName': 'M7',
          'codeKeys': [1,5,8,12]},
      {'codeName': '7',
          'codeKeys': [1,5,8,11]},
      {'codeName': 'mM7',
          'codeKeys': [1,4,8,12]},
      {'codeName': 'm7',
          'codeKeys': [1,4,8,11]},
      {'codeName': 'm7(-5)',
          'codeKeys': [1,4,7,11]},
      {'codeName': 'dim7',
          'codeKeys': [1,4,7,10]},
      {'codeName': 'augM7',
          'codeKeys': [1,5,9,12]},
      {'codeName': 'aug7',
          'codeKeys': [1,5,9,11]},
      {'codeName': 'M7sus4',
          'codeKeys': [1,6,8,12]},
      {'codeName': '7sus4',
          'codeKeys': [1,6,8,11]},
      {'codeName': '6',
          'codeKeys': [1,5,8,10]},
      {'codeName': 'm6',
          'codeKeys': [1,4,8,10]},
      //五和音
      {'codeName': 'M9',
          'codeKeys': [1,5,8,12,15]},
      {'codeName': '9',
          'codeKeys': [1,5,8,11,15]},
      {'codeName': '7(-9)',
          'codeKeys': [1,5,8,11,14]},
      {'codeName': '7(+9)',
          'codeKeys': [1,5,8,11,16]},
      {'codeName': 'm7(11)',
          'codeKeys': [1,4,8,11,18]},
      {'codeName': '7(+11)',
          'codeKeys': [1,5,8,11,19]},
      {'codeName': 'M7(13)',
          'codeKeys': [1,5,8,12,22]},
      {'codeName': '7(13)',
          'codeKeys': [1,5,8,11,22]},
      {'codeName': '7(-13)',
          'codeKeys': [1,5,8,11,21]},
      {'codeName': '69',
          'codeKeys': [1,5,8,10,15]},
      {'codeName': 'm69',
          'codeKeys': [1,4,8,10,15]},
  ];

  //和音入れ場
  let getChords = [];

  //和音
  for (let h = 0 ; h < codeTypes.length; h++ ) {
    getChords.push( [] );
    for (let i = 0 ; i < Key.length; i++ ) {
      getChords[h].push( [] );
      for (var  j = 0; j < codeTypes[h]['codeKeys'].length; j++){
        const nmb = scale[i+codeTypes[h]['codeKeys'][j]];
        getChords[h][i].push(nmb);
      }
    }
  }

  console.log(getChords);
  // setChords(getChords);

  //コードタイプ設定
  function codeTypeSelect(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('codeTypeSelect', e);
    /* for(let i = 0; i < codeType.length; i++){
      if(codeType[i].checked) {
        const CodeTypeValue = codeType[i].value;
        codeTypeText.innerHTML = CodeTypeValue;
        const CodeKyesValue = codeTypes[i].codeKeys;
        codeKeysText.innerHTML = '構成音:' +  CodeKyesValue;
        return chords[i];
      }
    } */
  }

  // codeTypeSelect();

  //シンセ生成
  // var synth = new Tone.PolySynth().toMaster();

  //イベントリスナ
  function clickKey(e) {
    console.log('value', e.target.value);
    toneJsTest();
    /* for (let i = 0; i < Key.length; i++) {
      (function(i) {
        Key[i].addEventListener('click', function () {
        //チェックされているコードタイプを確認
        var seletcCords = codeTypeSelect();
        //メジャーコードが4分音符の長さ鳴る
        synth.triggerAttackRelease(seletcCords[i], '4n');
        }, false);
      })(i);
    } */
  }

  // JSX
  return (
    <>
      <CoadPlayer>
        <h2>和音鍵盤</h2>
        <div id="piano">
          <button value="C4" className="w_key" onClick={clickKey}>C</button>
          <button value="C#4" className="b_key" onClick={clickKey}></button>
          <button value="D4" className="w_key" onClick={clickKey}>D</button>
          <button value="D#4" className="b_key" onClick={clickKey}></button>
          <button value="E4" className="w_key" onClick={clickKey}>E</button>
          <button value="F4" className="w_key" onClick={clickKey}>F</button>
          <button value="F#4" className="b_key" onClick={clickKey}></button>
          <button value="G4" className="w_key" onClick={clickKey}>G</button>
          <button value="G#4" className="b_key" onClick={clickKey}></button>
          <button value="A4" className="w_key" onClick={clickKey}>A</button>
          <button value="A#4" className="b_key" onClick={clickKey}></button>
          <button value="B4" className="w_key" onClick={clickKey}>B</button>
          <button value="C5" className="w_key" onClick={clickKey}>C</button>
        </div>
        <div id="code_type">
          <p id="code_type_text">{codeTypeText}</p>
          <p id="code_keys_text">構成音:{codeKeysText}</p>
          <form name="code_types" className="">
            <dl>
              <dt>根音</dt>
              <dd>
                <label><input type="radio" id="code_R" name="code_type" value="ルート(R)" onChange={codeTypeSelect} checked />(R)</label>
                <label><input type="radio" id="code_5" name="code_type" value="パワーコード(5)" onChange={codeTypeSelect} />5</label>
              </dd>
            </dl>
            <dl>
              <dt>三和音</dt>
              <dd>
                <label><input type="radio" id="code_M" name="code_type" value="メジャー(M)" onChange={codeTypeSelect} />(M)</label>
                <label><input type="radio" id="code_m" name="code_type" value="マイナー(m)" onChange={codeTypeSelect} />m</label>
                <label><input type="radio" id="code_dim" name="code_type" value="ディミニッシュ(dim)" onChange={codeTypeSelect} />dim</label>
                <label><input type="radio" id="code_aug" name="code_type" value="オーギュメント(aug)" onChange={codeTypeSelect} />aug</label>
                <label><input type="radio" id="code_sus4" name="code_type" value="サスペンデッド4th(sus4)" onChange={codeTypeSelect} />sus4</label>
              </dd>
            </dl>
            <dl>
              <dt>四和音</dt>
              <dd>
                <label><input type="radio" id="code_M7" name="code_type" value="メジャーセブンス(M7)" onChange={codeTypeSelect} />M7</label>
                <label><input type="radio" id="code_7" name="code_type" value="セブンス(7)" onChange={codeTypeSelect} />7</label>
                <label><input type="radio" id="code_mM7" name="code_type" value="マイナー・メジャー・セブンス(mM7)" onChange={codeTypeSelect} />mM7</label>
                <label><input type="radio" id="code_m7" name="code_type" value="マイナー・セブンス(m7)" onChange={codeTypeSelect} />m7</label>
                <label><input type="radio" id="code_m7-5" name="code_type" value="マイナー・セブンス・フラット・ファイブ(m7(-5))" onChange={codeTypeSelect} />m7(-5)</label>
                <label><input type="radio" id="code_dim7" name="code_type" value="ディミニッシュ・セブンス(dim7)" onChange={codeTypeSelect} />dim7</label>
                <label><input type="radio" id="code_augM7" name="code_type" value="オーグメント・メジャー・セブンス(augM7)" onChange={codeTypeSelect} />augM7</label>
                <label><input type="radio" id="code_aug7" name="code_type" value="オーギュメント・セブンス(aug7)" onChange={codeTypeSelect} />aug7</label>
                <label><input type="radio" id="code_M7sus4" name="code_type" value="メジャー・セブンス・サスペンデッド4th(M7sus4)" onChange={codeTypeSelect} />M7sus4</label>
                <label><input type="radio" id="code_7sus4" name="code_type" value="セブンス・サスペンデッド4th(7sus4)" onChange={codeTypeSelect} />7sus4</label>
                <label><input type="radio" id="code_6" name="code_type" value="シックスス(6)" onChange={codeTypeSelect} />6</label>
                <label><input type="radio" id="code_m6" name="code_type" value="マイナー・シックスス(m6)" onChange={codeTypeSelect} />m6</label>
              </dd>
            </dl>
            <dl>
              <dt>五和音</dt>
              <dd>
                <label><input type="radio" id="code_M9" name="code_type" value="メジャーナインス(M9)" onChange={codeTypeSelect} />M9</label>
                <label><input type="radio" id="code_9" name="code_type" value="ナインス(9)" onChange={codeTypeSelect} />9</label>
                <label><input type="radio" id="code_7_f9" name="code_type" value="セブンス・フラット・ナインス(7(-9))" onChange={codeTypeSelect} />7(-9)</label>
                <label><input type="radio" id="code_7_s9" name="code_type" value="セブンス・シャープ・ナインス(7(+9))" onChange={codeTypeSelect} />7(+9)</label>
                <label><input type="radio" id="code_m7_11" name="code_type" value="マイナー・セブンス・イレブンス(m7(11))" onChange={codeTypeSelect} />m7(11)</label>
                <label><input type="radio" id="code_7_s11" name="code_type" value="セブンス・シャープ・イレブンス(7(+11))" onChange={codeTypeSelect} />7(+11)</label>
                <label><input type="radio" id="code_M7_13" name="code_type" value="メジャー・セブンス・サーティーンズ(M7(13))" onChange={codeTypeSelect} />M7(13)</label>
                <label><input type="radio" id="code_M7_13" name="code_type" value="セブンス・サーティーンズ(M7(13))" onChange={codeTypeSelect} />7(13)</label>
                <label><input type="radio" id="code_M7_f13" name="code_type" value="セブンス・フラット・サーティーンズ(M7(-13))" onChange={codeTypeSelect} />7(-13)</label>
                <label><input type="radio" id="code_69" name="code_type" value="シックス・ナインス(69)" onChange={codeTypeSelect} />69</label>
                <label><input type="radio" id="code_m69" name="code_type" value="マイナー・シックス・ナインス(m69)" onChange={codeTypeSelect} />m69</label>
              </dd>
            </dl>
          </form>
        </div>
      </CoadPlayer>
    </>
  );
}

export default Inner;
